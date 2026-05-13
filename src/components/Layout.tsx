import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UniverseProvider } from '@/contexts/UniverseContext'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

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

  return (
    <UniverseProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-700" style={{ background: 'var(--u-bg)', color: 'var(--u-text)' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </UniverseProvider>
  )
}
