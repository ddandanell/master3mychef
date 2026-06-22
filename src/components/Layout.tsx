import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UniverseProvider } from '@/contexts/UniverseContext'
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'
import Navbar from './Navbar'
import Footer from './Footer'
import ConciergeWidget from './ConciergeWidget'
import ExitIntentPopup from './ExitIntentPopup'

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

  // Universal Conversion Tracking — catches every WA and Phone click sitewide
  useEffect(() => {
    const handleConversionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // WhatsApp Tracking
      const waAnchor = target.closest<HTMLAnchorElement>('a[href*="wa.me"]')
      if (waAnchor) {
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
        <div className="bg-[#1A1916] text-[#C5A028] text-xs py-2 text-center">
          ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 4.9★ rated
        </div>
        <Footer />
        <ConciergeWidget />
        <ExitIntentPopup />
      </div>
    </UniverseProvider>
  )
}
