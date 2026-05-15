import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UniverseProvider } from '@/contexts/UniverseContext'
import { trackPageView, trackWhatsAppClick } from '@/lib/analytics'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

const MOBILE_WA_MESSAGE = "Hi myCHEF! I'd like to enquire about your services."
const MOBILE_WA_LINK = `https://wa.me/6282237565997?text=${encodeURIComponent(MOBILE_WA_MESSAGE)}`

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
      <div className="min-h-screen flex flex-col overflow-x-hidden pb-[calc(env(safe-area-inset-bottom)+5.5rem)] transition-colors duration-700 md:pb-0" style={{ background: 'var(--u-bg)', color: 'var(--u-text)' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <div className="bg-[#1A1916] text-[#C5A028] text-xs py-2 text-center">
          ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
        </div>
        <Footer />
        <a
          href={MOBILE_WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed inset-x-0 bottom-0 z-[55] flex min-h-[56px] items-center justify-center border-t border-black/10 bg-[#C5A028] px-4 pt-3 text-center text-sm font-semibold text-[#1A1916] shadow-[0_-12px_30px_rgba(0,0,0,0.12)] md:hidden"
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
          data-source="mobile-sticky-bar"
        >
          <span className="inline-flex items-center justify-center gap-2">
            Book on WhatsApp
            <span aria-hidden="true">→</span>
          </span>
        </a>
        <WhatsAppButton />
      </div>
    </UniverseProvider>
  )
}
