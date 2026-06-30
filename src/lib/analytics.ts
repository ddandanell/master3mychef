// Replace with real GA4 measurement ID when ready
const GA_ID = import.meta.env.VITE_GA_ID ?? ''

// Prevent unused variable error while keeping ID accessible
void GA_ID

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
    source,
    method: 'WhatsApp',
    event_category: 'conversion',
    transport_type: 'beacon'
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
    source, 
    method: 'Phone',
    event_category: 'conversion',
    transport_type: 'beacon' 
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
