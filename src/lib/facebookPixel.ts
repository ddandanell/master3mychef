// Client-side Meta Pixel helpers and WhatsApp click tracking.
// Adds event firing for WhatsApp CTA clicks and optionally calls a server endpoint
// to send hashed PII via the Conversions API. Respects the existing va-disable opt-out.

export function fbqSafe(...args: any[]) {
  try {
    if (typeof window !== 'undefined' && (window as any).fbq && typeof (window as any).fbq === 'function') {
      (window as any).fbq(...args)
    }
  } catch (e) {
    // swallow
  }
}

export function allowAnalytics() {
  try {
    return localStorage.getItem('va-disable') === null
  } catch (e) {
    return true
  }
}

export function trackWhatsAppClick({ href, label }: { href: string; label?: string }) {
  if (!allowAnalytics()) return
  const page_path = window.location.pathname
  const page_url = window.location.href
  const content_name = document.title || page_path
  const payload: Record<string, any> = {
    content_name,
    content_category: 'WhatsApp',
    page_path,
    page_url,
    cta_label: label ?? '',
    cta_href: href,
    method: 'whatsapp',
  }

  fbqSafe('track', 'Lead', payload)
  fbqSafe('trackCustom', 'WhatsAppClick', payload)

  // Optionally POST to server-side Conversions API (uncomment when server is present and consent given):
  // fetch('/api/fb-conversions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event_name: 'Lead', page_url, custom_data: payload }) })
}
