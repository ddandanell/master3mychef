import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useUniverse } from '@/contexts/UniverseContext'

const NAV_LINKS = [
  { label: 'Fine Dining', path: '/fine-dining', universe: 'luna' },
  { label: 'Villa Chef', path: '/villa-chef', universe: 'sol' },
  { label: 'Events', path: '/events', universe: 'aura' },
  { label: 'Contact', path: '/contact', universe: 'hub' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { universe } = useUniverse()

  const isDark = universe === 'luna'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const textColor = isDark ? 'text-white' : 'text-[#1A1A1A]'
  const goldClass = 'text-[#D4AF37]'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className={`font-serif text-2xl tracking-wide transition-colors ${scrolled || isDark ? textColor : 'text-white'}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            my<span className={goldClass}>CHEF</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm tracking-widest uppercase transition-colors hover:${goldClass} ${
                  location.pathname === link.path ? goldClass : (scrolled || isDark ? textColor : 'text-white/90')
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#D4AF37]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || isDark ? textColor : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8" style={{ background: 'var(--u-bg)' }}>
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 p-2"
            style={{ color: 'var(--u-text)' }}
          >
            <X className="w-7 h-7" />
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="text-2xl tracking-widest uppercase transition-colors"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: location.pathname === link.path ? '#D4AF37' : 'var(--u-text)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
