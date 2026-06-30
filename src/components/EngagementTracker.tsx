import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollDepth } from '@/hooks/useScrollDepth'
import { useTimeOnPage } from '@/hooks/useTimeOnPage'
import { trackCTAClick } from '@/lib/analytics'

// High-intent internal destinations whose link clicks count as CTA conversions.
// Kept intentionally narrow to avoid polluting GA4 with every nav/footer link.
const CTA_DESTINATIONS = [
  '/quote',
  '/contact',
  '/pricing',
  '/book',
  '/booking',
  '/chefs',
  '/get-started',
  '/calculator',
]

/**
 * Global, route-aware engagement tracking. Renders nothing.
 * - Fires scroll_depth milestones (25/50/75/90%) per page.
 * - Fires time_on_page milestones (30/60/120/180s) per page.
 * - Fires cta_click for clicks on high-intent internal links or any
 *   element marked with a data-cta attribute. WhatsApp/phone links are
 *   skipped here because they are already tracked as generate_lead.
 */
export default function EngagementTracker(): null {
  const location = useLocation()
  const pageSource = location.pathname || '/'

  useScrollDepth(pageSource)
  useTimeOnPage(pageSource)

  useEffect(() => {
    function handleClick(event: MouseEvent): void {
      const origin = event.target as HTMLElement | null
      if (!origin) return

      const el = origin.closest('a, button') as HTMLAnchorElement | HTMLButtonElement | null
      if (!el) return

      const href = el.getAttribute('href') ?? ''
      // Already tracked as generate_lead by the global WhatsApp/phone delegate.
      if (/wa\.me|wa\.link|whatsapp|^tel:|^mailto:/i.test(href)) return

      const explicitCta = el.getAttribute('data-cta')
      const isConversionLink =
        el.tagName === 'A' &&
        CTA_DESTINATIONS.some((d) => href === d || href.startsWith(`${d}?`) || href.startsWith(`${d}/`))

      if (!explicitCta && !isConversionLink) return

      const ctaText = (explicitCta || el.textContent || '').trim().slice(0, 100) || 'cta'
      trackCTAClick(ctaText, pageSource, undefined, href || undefined)
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pageSource])

  return null
}
