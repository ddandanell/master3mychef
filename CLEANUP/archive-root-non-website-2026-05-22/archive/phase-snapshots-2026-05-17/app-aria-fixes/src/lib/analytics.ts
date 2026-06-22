// Replace with real GA4 measurement ID when ready
const GA_ID = import.meta.env.VITE_GA_ID ?? ''

// Prevent unused variable error while keeping ID accessible
void GA_ID

type AnalyticsParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (command: 'event', event: string, params?: AnalyticsParams) => void
  }
}

export function trackEvent(event: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') return
  // Fire to GA4 via gtag (works when VITE_GA_ID is set)
  window.gtag?.('event', event, params)
  // GTM dataLayer fallback — always fires, even without GA_ID
  ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event, ...params })
}

export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', { source, transport_type: 'beacon' })
}

export function trackWhatsAppConversion(source: string) {
  trackWhatsAppClick(source)
}

export function trackPageView(path: string) {
  trackEvent('page_view', { page_path: path })
}
