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

/**
 * Core event tracking function.
 * Sends data to both GA4 (via gtag) and GTM (via dataLayer).
 */
export function trackEvent(event: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') return
  
  // Fire to GA4 via gtag (works when VITE_GA_ID is set in .env)
  window.gtag?.('event', event, params)
  
  // GTM dataLayer fallback — always fires, even without GA_ID
  if (!window.dataLayer) window.dataLayer = []
  window.dataLayer.push({ 
    event,
    ...params,
    timestamp: new Date().toISOString()
  })
}

/**
 * Tracks a high-value lead conversion (WhatsApp).
 * Uses standard GA4 'generate_lead' event.
 */
export function trackWhatsAppClick(source: string, serviceType?: string) {
  trackEvent('generate_lead', {
    cta_source: source,
    method: 'WhatsApp',
    event_category: 'conversion',
    service_type:
      serviceType ??
      (typeof window !== 'undefined' ? serviceAreaFromPath(window.location.pathname) : ''),
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
  trackEvent('generate_lead', {
    cta_source: source,
    method: 'Phone',
    event_category: 'conversion',
    service_type:
      serviceType ??
      (typeof window !== 'undefined' ? serviceAreaFromPath(window.location.pathname) : ''),
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
