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
  // trigger -> whatsapp_click/phone_click tags, which a GA4 event-modification rule
  // renamed to generate_lead. Both were removed on 2026-07-29 to stop 2x counting.
  // See reports/GA4-WHATSAPP-TRACKING-AUDIT-2026-07-29.md
  useEffect(() => {
    const handleConversionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // WhatsApp Tracking
      const waAnchor = target.closest<HTMLAnchorElement>('a[href*="wa.me"]')
      if (waAnchor) {
        // Opt-out: anchors that fire their own, more specific key event (e.g. the quote
        // funnel's quote_submitted) set data-skip-lead-track so one action = one conversion.
        if (waAnchor.dataset.skipLeadTrack === 'true') return
        const source = waAnchor.dataset.source || location.pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_') || 'home'
        trackWhatsAppClick(source)
        return
      }

      // Phone Tracking (Push a number)
      const phoneAnchor = target.closest<HTMLAnchorElement>('a[href^="tel:"]')
      if (phoneAnchor) {
        const source = phoneAnchor.dataset.source || location.pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_') || 'home'
        trackPhoneClick(source)
      }
    }
    document.addEventListener('click', handleConversionClick)
    return () => document.removeEventListener('click', handleConversionClick)
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
