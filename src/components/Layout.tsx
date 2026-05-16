import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UniverseProvider } from '@/contexts/UniverseContext'
import { trackPageView, trackWhatsAppClick } from '@/lib/analytics'
import Navbar from './Navbar'
import Footer from './Footer'
import ConciergeWidget from './ConciergeWidget'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  // Reset scroll to top on route change — UNLESS the URL contains a hash anchor.
  // For hash navigation (e.g. /fine-dining#book) we let the browser scroll to the
  // target section, which is then offset by scroll-mt-24 to clear the fixed nav.
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

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`)
  }, [location.pathname, location.search])

  // Universal WA conversion tracking — catches every wa.me click sitewide
  useEffect(() => {
    const handleWaClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="wa.me"]')
      if (anchor) {
        const source =
          anchor.dataset.source ||
          window.location.pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_') ||
          'home'
        trackWhatsAppClick(source)
      }
    }
    document.addEventListener('click', handleWaClick)
    return () => document.removeEventListener('click', handleWaClick)
  }, [])

  return (
    <UniverseProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden pb-0 transition-colors duration-700" style={{ background: 'var(--u-bg)', color: 'var(--u-text)' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <div className="bg-[#1A1916] text-[#C5A028] text-xs py-2 text-center">
          ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
        </div>
        <Footer />
        <ConciergeWidget />
      </div>
    </UniverseProvider>
  )
}
