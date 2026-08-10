import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { UniverseProvider } from '@/contexts/UniverseContext'
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'
import { siteFacts } from '@/data/siteFacts'
import Navbar from './Navbar'
import Footer from './Footer'
import PriceDisclaimer from './PriceDisclaimer'

const ExitIntentPopup = lazy(() => import('./ExitIntentPopup'))
const ConciergeWidget = lazy(() => import('./ConciergeWidget'))

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  // Reset scroll to top on route change
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  // Page views are tracked by GA4 (via GTM-KCBNZBL9) + GA4 Enhanced Measurement
  // history events. The manual trackPageView call was removed to prevent duplicate page views.

  // Universal Conversion Tracking — catches every WA and Phone click sitewide.
  //
  // SINGLE SOURCE OF TRUTH for generate_lead. Do NOT add inline onClick handlers
  // calling trackWhatsAppClick/trackPhoneClick to <a href="wa.me"> or <a href="tel:">
  // anchors — this delegated listener already covers them, and doing both fires the
  // conversion twice. Set data-source on the anchor instead; it is read below.
  //
  // Button flows that use window.open() instead of an anchor (ContactPage,
  // PartnersPage, BookingForm, BookingFormCatering, ConciergeWidget) are NOT caught
  // here and must keep their explicit trackWhatsAppClick call.
  //
  // The GTM container (GTM-KCBNZBL9) previously duplicated this via a Link Click
  // trigger -> whatsapp_click/phone_click tags, which two GA4 event-modification
  // rules then renamed to generate_lead. On 2026-07-29, to stop 2x counting:
  //   - the two GTM tags were PAUSED (they still exist in the container, from
  //     Version 4 onwards — un-pausing them reintroduces the double count)
  //   - the two GA4 event-modification rules were DELETED
  // See reports/GA4-WHATSAPP-TRACKING-AUDIT-2026-07-29.md
  // Conversions fire on POINTERDOWN, not click.
  //
  // GA4 delivers events with fetch(), and a fetch without keepalive is cancelled
  // the moment the page is backgrounded — which is precisely what happens when a
  // tap on a wa.me link hands off to the WhatsApp app. Mobile is ~86% of these
  // clicks, so the loss was invisible on desktop and invisible in any test that
  // blocked the navigation. Joining the HighLevel WhatsApp inbox to GA4 by
  // lead_ref on 2026-08-10 found only 2 of 14 real enquiries had been recorded.
  //
  // pointerdown fires when the finger goes DOWN, buying the ~100-300ms before it
  // lifts and navigation begins. This is mitigation, not a guarantee — a slow
  // network can still outlast the handoff. See
  // reports/GA4-WHATSAPP-TRACKING-AUDIT-2026-07-29.md and the analytics.ts note
  // about transport_type, which does NOT work and must not be re-added.
  //
  // click is kept as a fallback: keyboard activation (Enter on a focused anchor)
  // dispatches click with no preceding pointerdown, and dropping it would lose
  // the accessibility path entirely. trackedAt dedupes the pointerdown -> click
  // pair so one press stays one conversion.
  useEffect(() => {
    const trackedAt = new WeakMap<HTMLAnchorElement, number>()
    const DEDUPE_MS = 1500

    const isDuplicate = (anchor: HTMLAnchorElement) => {
      const now = Date.now()
      const last = trackedAt.get(anchor)
      if (last !== undefined && now - last < DEDUPE_MS) return true
      trackedAt.set(anchor, now)
      return false
    }

    const handleConversion = (e: Event) => {
      // Secondary buttons and long-press context menus are not enquiries.
      // PointerEvent extends MouseEvent, so this covers both listeners.
      if (e instanceof MouseEvent && e.button !== 0) return

      const target = e.target
      if (!(target instanceof Element)) return

      // WhatsApp Tracking
      const waAnchor = target.closest<HTMLAnchorElement>('a[href*="wa.me"]')
      if (waAnchor) {
        // Opt-out: anchors that fire their own, more specific key event (e.g. the quote
        // funnel's quote_submitted) set data-skip-lead-track so one action = one conversion.
        if (waAnchor.dataset.skipLeadTrack === 'true') return
        if (isDuplicate(waAnchor)) return
        const source = waAnchor.dataset.source || location.pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_') || 'home'
        trackWhatsAppClick(source)
        return
      }

      // Phone Tracking (Push a number)
      const phoneAnchor = target.closest<HTMLAnchorElement>('a[href^="tel:"]')
      if (phoneAnchor) {
        if (isDuplicate(phoneAnchor)) return
        const source = phoneAnchor.dataset.source || location.pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_') || 'home'
        trackPhoneClick(source)
      }
    }

    document.addEventListener('pointerdown', handleConversion)
    document.addEventListener('click', handleConversion)
    return () => {
      document.removeEventListener('pointerdown', handleConversion)
      document.removeEventListener('click', handleConversion)
    }
  }, [location.pathname])

  return (
    <UniverseProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden pb-0 transition-colors duration-700" style={{ background: 'var(--u-bg)', color: 'var(--u-text)' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <div aria-label="myCHEF highlights" className="bg-[#1A1916] text-[#C5A028] text-xs py-2 text-center">
          ⭐ {siteFacts.reviewFraming}
        </div>
        <div className="bg-[#F5F5F3] border-t border-black/5 py-3 px-6 text-center">
          <PriceDisclaimer className="max-w-[900px] mx-auto" showIcon={false} />
        </div>
        <Footer />
        <Suspense fallback={null}><ConciergeWidget /></Suspense>
        <Suspense fallback={null}><ExitIntentPopup /></Suspense>
      </div>
    </UniverseProvider>
  )
}
