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
export function trackWhatsAppClick(source: string) {
  trackEvent('generate_lead', {
    cta_source: source,
    method: 'WhatsApp',
    event_category: 'conversion',
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
export function trackPhoneClick(source: string) {
  trackEvent('generate_lead', {
    cta_source: source,
    method: 'Phone',
    event_category: 'conversion',
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
