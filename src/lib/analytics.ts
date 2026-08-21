import { track } from '@vercel/analytics'
import { capturePostHog } from './posthog'
import { shouldExcludeFromAnalytics } from './analytics-privacy'
import { attributionParams } from './attribution'
import { collectFirstParty } from './collect'

// GA4 is loaded by the gtag snippet in index.html (measurement ID is set there),
// which is what populates window.gtag. There is deliberately no measurement ID
// read here — an earlier VITE_GA_ID constant was dead code (immediately discarded
// with `void`) and read as though GA4 were unconfigured when it is in fact live.
// If GA4 ever needs to be initialised from the app instead of index.html, do it
// explicitly here rather than reintroducing an unused constant.

/**
 * ESTIMATED value of one inbound lead, in IDR. This is NOT booked revenue.
 *
 * myCHEF closes on WhatsApp, off-site, so GA4 never sees a real transaction.
 * Attaching an estimate to each lead is what makes GA4's revenue/"Total value"
 * columns usable for comparing pages, channels and campaigns against each other.
 *
 *   average booking value  IDR 7,500,000   (owner estimate, 2026-07-29)
 *   lead -> booking rate   20%             (owner estimate, 2026-07-29)
 *   estimated lead value   IDR 1,500,000
 *
 * Treat the absolute figure as directional only — its job is to rank sources,
 * not to report earnings. Update both inputs here when the real numbers are
 * known, and re-check the assumption whenever pricing or close rate shifts.
 *
 * Both generate_lead and quote_submitted currently carry the same value. A
 * completed quote funnel is probably worth more than a bare WhatsApp click, but
 * there is no data yet to justify a specific multiplier — split them once there is.
 */
export const ESTIMATED_LEAD_VALUE_IDR = 1_500_000

/**
 * Maps a URL path to the service area of the site it belongs to.
 *
 * Why this exists: trackWhatsAppClick/trackPhoneClick fire on CTAs all over the
 * site, and those CTAs do not declare which service the visitor wants. Without
 * this, the GA4 "Service Type" dimension would read (not set) for nearly every
 * conversion, because only the quote funnel collects an explicit service.
 *
 * Read the result as "which part of the catalogue the lead came from", i.e. an
 * inferred interest, NOT a service the visitor explicitly chose. The quote
 * funnel still sends its own declared service_type, which is stronger data.
 *
 * Keyed on the first path segment only, against an explicit allow-list.
 * Anything unrecognised returns 'other' rather than a guess.
 */
export function serviceAreaFromPath(pathname: string): string {
  const segment = pathname.replace(/^\/+/, '').split('/')[0].toLowerCase()

  if (segment === '') return 'homepage'

  const MAP: Record<string, string> = {
    // Catering
    catering: 'catering',
    // Seated / plated dining
    'fine-dining': 'private-dining',
    'three-course': 'private-dining',
    'family-styling': 'private-dining',
    'dining-styles': 'private-dining',
    'kids-menus': 'private-dining',
    'bbq-grill': 'private-dining',
    menus: 'private-dining',
    // Events
    events: 'events',
    'corporate-events': 'events',
    'corporate-case-studies': 'events',
    'villa-event-packages': 'events',
    retreats: 'events',
    // Experiences
    experiences: 'experiences',
    // Staff supplied into the villa
    'in-villa-service': 'in-villa-staff',
    'bar-services': 'in-villa-staff',
    'complete-villa-experience': 'in-villa-staff',
    'vip-transport-bali': 'in-villa-staff',
    // Chef hire / placement
    staffing: 'private-chef',
    'villa-chef': 'private-chef',
    'private-chef-bali': 'private-chef',
    // Area / location landing pages — service intent is not knowable here
    locations: 'location',
    canggu: 'location',
    seminyak: 'location',
    ubud: 'location',
    uluwatu: 'location',
    sanur: 'location',
    jimbaran: 'location',
    kuta: 'location',
    denpasar: 'location',
    'nusa-dua': 'location',
    pererenan: 'location',
    bukit: 'location',
    // Enquiry / conversion surfaces
    quote: 'enquiry',
    book: 'enquiry',
    contact: 'enquiry',
    calculator: 'enquiry',
    'pricing-calculator': 'enquiry',
    pricing: 'enquiry',
    // Editorial
    blog: 'content',
    journal: 'content',
    guide: 'content',
    help: 'content',
    faq: 'content',
    chefs: 'content',
    reviews: 'content',
  }

  return MAP[segment] ?? 'other'
}

type AnalyticsParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (command: 'event', event: string, params?: AnalyticsParams) => void
    dataLayer?: unknown[]
  }
}

// ── Vercel Web Analytics: custom events ──────────────────────────────────────
//
// Vercel is a THIRD sink alongside GA4 and GTM, wired inside trackEvent() so
// every existing call site reports to Vercel without being touched.
//
// Hard plan constraints, from Vercel's docs (read 2026-07-30). Breaking these
// does not throw — it silently drops data or costs money:
//
//   1. PROPERTY CEILING. The Pro plan allows exactly 2 properties per custom
//      event (8 with the Web Analytics Plus add-on, +$10/month/team). Extra
//      properties are discarded without warning. VERCEL_MAX_PROPERTIES enforces
//      the ceiling here so the loss is deliberate and visible in code.
//   2. VALUE TYPES. Only string | number | boolean | null. No nested objects.
//      Event name, property keys and values are each capped at 255 characters.
//   3. COST. Every custom event is billed ($0.03 per 1,000 on Pro) and page
//      views count toward the same total, so high-frequency engagement events
//      are deliberately NOT forwarded — see the default case below.
//   4. UTM parameters are a Plus-only feature, so none are sent from here.
//
// Because two properties is such a tight budget, the delivery CHANNEL is encoded
// in the event NAME rather than spending a property slot on it — event names are
// unlimited and free, properties are neither. That keeps both slots for the two
// dimensions actually used to segment: service line and on-page source.
//
// ESTIMATED_LEAD_VALUE_IDR is deliberately NOT sent: it is a constant, so it
// carries no per-event information and would waste half the property budget.
//
// Privacy: @vercel/analytics registers beforeSend globally via
// window.va('beforeSend', ...), so the filter in analytics-privacy.ts covers
// these custom events too. A browser opted out with ?va-disable=1, and any
// automated browser, sends no custom events either. Nothing extra is needed.
const VERCEL_MAX_PROPERTIES = 2

/** Coerce to a non-empty string within Vercel's 255-character limit. */
function vercelValue(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined
  const text = String(value).trim()
  return text ? text.slice(0, 255) : undefined
}

/** Drop empty values and hard-stop at the plan's property ceiling. */
function vercelProps(candidates: Record<string, string | undefined>): Record<string, string> {
  const props: Record<string, string> = {}
  for (const [key, value] of Object.entries(candidates)) {
    if (value === undefined) continue
    if (Object.keys(props).length >= VERCEL_MAX_PROPERTIES) break
    props[key] = value
  }
  return props
}

/**
 * Maps a GA4 event onto a Vercel custom event, or returns null to not forward it.
 * Names are human-readable because they are what appears in the Vercel dashboard's
 * Events panel.
 */
export function toVercelEvent(
  event: string,
  params: AnalyticsParams = {}
): { name: string; props: Record<string, string> } | null {
  const source = vercelValue(params.cta_source) ?? vercelValue(params.page_source)
  const service = vercelValue(params.service_type)

  switch (event) {
    case 'generate_lead': {
      // WhatsApp vs Phone goes in the name, freeing both property slots.
      const method = vercelValue(params.method) ?? 'Unknown'
      return { name: `Lead — ${method}`, props: vercelProps({ service, source }) }
    }
    case 'cta_click':
      return { name: 'CTA Click', props: vercelProps({ cta: vercelValue(params.cta_text), source }) }
    case 'form_start':
      return { name: 'Form Start', props: vercelProps({ form: vercelValue(params.form_id), source }) }
    case 'form_complete':
      return { name: 'Form Complete', props: vercelProps({ form: vercelValue(params.form_id), source }) }
    default:
      // Not forwarded, on purpose:
      //   page_view    — <Analytics /> records page views natively. Forwarding a
      //                  custom copy would double-count in the dashboard AND
      //                  double the billed events for the same visit.
      //   scroll_depth — fires up to four times per page (25/50/75/90).
      //   time_on_page — fires at four milestones per page.
      // Those two are engagement telemetry GA4 already models better, and each
      // one would be a separately billed Vercel event.
      return null
  }
}

/**
 * Core event tracking function.
 * Sends data to GA4 (via gtag), GTM (via dataLayer), Vercel Web Analytics and
 * PostHog.
 *
 * Note the asymmetry between the last two sinks, which is deliberate:
 *
 *   Vercel  — heavily filtered. toVercelEvent() drops high-frequency
 *             engagement events and trims to 2 properties, because both are
 *             billed and the plan ceiling silently discards the rest.
 *   PostHog — receives EVERYTHING, with the full untrimmed param object.
 *             There is no property ceiling, and scroll_depth / time_on_page
 *             are exactly the signals that distinguish "read the page and
 *             left" from "could not find the price and left". Filtering them
 *             out here would remove the confusion analysis this was installed
 *             for.
 */
export function trackEvent(event: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') return

  // Opted-out browsers and automated ones send nothing, to ANY sink.
  //
  // Previously this guard existed only on the Vercel and PostHog branches, so a
  // visitor who opted out via ?va-disable=1 still had every custom event pushed
  // to GA4 and the GTM dataLayer. §7 of the privacy policy states that opting
  // out excludes the browser from all analytics, so that gap made the published
  // policy inaccurate rather than merely incomplete.
  //
  // GA4's automatic page_view is suppressed separately, by the inline
  // ga-disable-<ID> snippet in index.html — it has to run before gtag.js loads,
  // which is earlier than this module executes.
  if (shouldExcludeFromAnalytics()) return

  // Campaign attribution is merged in HERE rather than at each call site, so
  // every conversion — including any added later — carries it automatically.
  //
  // Restricted to the conversion events on purpose. lead_ref on a scroll_depth
  // event would be noise, and PostHog receives the full param object unfiltered,
  // so widening this would inflate every payload for no analytical gain.
  //
  // Vercel is unaffected: toVercelEvent() selects named keys, so these extra
  // params cannot push a billed event over the 2-property ceiling.
  const CONVERSION_EVENTS = new Set(['generate_lead', 'form_complete', 'quote_submitted'])
  const enriched = CONVERSION_EVENTS.has(event)
    ? { ...params, ...attributionParams() }
    : params

  // Fire to GA4 via gtag (works when VITE_GA_ID is set in .env)
  //
  // DO NOT add transport_type: 'beacon' here. It was tried on 10 Aug 2026 and it
  // does nothing — transport_type is a Universal Analytics setting and GA4 has no
  // equivalent, so gtag silently ignores it. Verified against production: the
  // parameter was being passed and generate_lead still left the page as
  // initiatorType "fetch". (Read initiatorType off
  // performance.getEntriesByType('resource') to check this — hooking
  // navigator.sendBeacon or window.fetch from the console gives false negatives,
  // because gtag.js captures its own references before any hook is installed.)
  //
  // The delivery problem is real: GA4 sends via fetch(), and a fetch without
  // keepalive is cancelled when the page is backgrounded — exactly what happens
  // when a tap on a wa.me link hands off to the WhatsApp app. Joining the
  // HighLevel inbox to GA4 by lead_ref showed only 2 of 14 real enquiries were
  // recorded. The mitigation lives in Layout.tsx, which fires the conversion on
  // pointerdown so the request starts before the handoff.
  window.gtag?.('event', event, enriched)

  // GTM dataLayer fallback — always fires, even without GA_ID
  if (!window.dataLayer) window.dataLayer = []
  window.dataLayer.push({
    event,
    ...enriched,
    timestamp: new Date().toISOString()
  })

  // Vercel Web Analytics custom event — see the constraints block above.
  try {
    const vercelEvent = toVercelEvent(event, params)
    if (vercelEvent) track(vercelEvent.name, vercelEvent.props)
  } catch {
    /* Analytics must never break the page. */
  }

  // PostHog — full property set, no filtering. PII is scrubbed inside
  // capturePostHog's before_send hook rather than here, so it applies to
  // autocaptured events too.
  capturePostHog(event, enriched)
}

/**
 * Tracks a high-value lead conversion (WhatsApp).
 * Uses standard GA4 'generate_lead' event.
 */
export function trackWhatsAppClick(source: string, serviceType?: string) {
  const service_type =
    serviceType ??
    (typeof window !== 'undefined' ? serviceAreaFromPath(window.location.pathname) : '')
  collectFirstParty('whatsapp_click', { source, service_area: service_type })
  trackEvent('generate_lead', {
    cta_source: source,
    method: 'WhatsApp',
    event_category: 'conversion',
    service_type,
    value: ESTIMATED_LEAD_VALUE_IDR,
    currency: 'IDR',
  })
}

export function trackWhatsAppConversion(source: string) {
  trackWhatsAppClick(source)
}

/**
 * Tracks a high-value lead conversion (Phone Call).
 * Uses standard GA4 'generate_lead' event.
 */
export function trackPhoneClick(source: string, serviceType?: string) {
  const service_type =
    serviceType ??
    (typeof window !== 'undefined' ? serviceAreaFromPath(window.location.pathname) : '')
  collectFirstParty('phone_click', { source, service_area: service_type })
  trackEvent('generate_lead', {
    cta_source: source,
    method: 'Phone',
    event_category: 'conversion',
    service_type,
    value: ESTIMATED_LEAD_VALUE_IDR,
    currency: 'IDR',
  })
}

/**
 * Standard page view tracking for SPAs.
 */
export function trackPageView(path: string) {
  trackEvent('page_view', {
    page_path: path,
    page_title: document.title
  })
}

/**
 * Tracks form field focus (first interaction) — deduplicated per session.
 */
export function trackFormStart(formId: string, pageSource: string, serviceType?: string) {
  const key = `form_started_${formId}`
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(key)) return
  if (typeof sessionStorage !== 'undefined') sessionStorage.setItem(key, '1')
  trackEvent('form_start', { form_id: formId, page_source: pageSource, service_type: serviceType ?? '' })
}

/**
 * Tracks successful form submission.
 */
export function trackFormComplete(formId: string, pageSource: string, serviceType?: string, timeToComplete?: number) {
  collectFirstParty('form_submit', {
    source: formId,
    service_area: serviceType,
    page_path: pageSource,
    metadata: { form_id: formId, time_to_complete: timeToComplete ?? 0 },
  })
  trackEvent('form_complete', {
    form_id: formId,
    page_source: pageSource,
    service_type: serviceType ?? '',
    time_to_complete: timeToComplete ?? 0,
  })
}

/**
 * Tracks CTA button clicks (non-WhatsApp).
 */
export function trackCTAClick(ctaText: string, pageSource: string, serviceType?: string, destinationUrl?: string) {
  trackEvent('cta_click', {
    cta_text: ctaText,
    page_source: pageSource,
    service_type: serviceType ?? '',
    destination_url: destinationUrl ?? '',
  })
}

/**
 * Tracks scroll depth milestones (25, 50, 75, 90).
 */
export function trackScrollDepth(depth: number, pageSource: string) {
  trackEvent('scroll_depth', { scroll_depth: depth, page_source: pageSource })
}

/**
 * Tracks time-on-page milestones (30, 60, 120, 180 seconds).
 */
export function trackTimeOnPage(seconds: number, pageSource: string) {
  trackEvent('time_on_page', { time_on_page: seconds, page_source: pageSource })
}
