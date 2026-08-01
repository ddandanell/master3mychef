import { trackWhatsAppClick } from '../lib/facebookPixel'

/**
 * Delegated listener to capture WhatsApp CTA clicks anywhere on the page.
 * Detects:
 *  - <a href="https://wa.me/..."> or href containing 'wa.me'
 *  - href starting with 'whatsapp:'
 *  - any element with class 'whatsapp-cta'
 *
 * It calls trackWhatsAppClick() (client pixel) immediately and posts a
 * non-PII server-side event to /api/fb-conversions for reliability. The
 * server will only forward to Meta if configured via env vars.
 */

function postServerConversion(payload: Record<string, any>) {
  try {
    const body = JSON.stringify(payload)
    if (navigator.sendBeacon) {
      // sendBeacon requires a Blob for a JSON body in some browsers
      const blob = new Blob([body], { type: 'application/json' })
      navigator.sendBeacon('/api/fb-conversions', blob)
    } else {
      void fetch('/api/fb-conversions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body })
    }
  } catch (e) {
    // ignore
  }
}

document.addEventListener('click', (event) => {
  const el = (event.target as HTMLElement)?.closest?.('a,button') as HTMLElement | null
  if (!el) return

  const href = (el.getAttribute?.('href') ?? '').trim()
  const isWhatsApp = href.includes('wa.me') || href.startsWith('https://wa.me') || href.startsWith('whatsapp:') || el.classList.contains('whatsapp-cta')
  if (!isWhatsApp) return

  const label = (el.getAttribute('aria-label') ?? el.textContent ?? '').trim()
  trackWhatsAppClick({ href, label })

  // Send a lightweight server-side event (no PII) for reliability and dedup.
  const custom_data = {
    cta_label: label,
    cta_href: href,
    page_path: window.location.pathname,
    page_url: window.location.href,
    method: 'whatsapp',
  }
  postServerConversion({ event_name: 'WhatsAppClick', event_time: Math.floor(Date.now() / 1000), page_url: window.location.href, custom_data })
}, { passive: true })
