import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat } from 'lucide-react'
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

  // Universe determines base theme: luna=dark, others=light
  const isDarkUniverse = universe === 'luna'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Nav text color logic:
  // - At top over dark hero (luna or hub): white text
  // - At top over light hero (sol/aura): dark text
  // - After scroll: use universe text color
  const atTop = !scrolled
  const overDarkHero = atTop && (isDarkUniverse || location.pathname === '/')
  const goldClass = 'text-[#D4AF37]'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 backdrop-blur-xl'
            : 'py-5 bg-transparent'
        }`}
        style={
          scrolled
            ? {
                background: isDarkUniverse ? 'rgba(5,5,5,0.85)' : 'rgba(255,255,255,0.85)',
                borderBottom: `1px solid ${isDarkUniverse ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              }
            : {}
        }
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo with icon */}
          <Link
            to="/"
            className={`flex items-center gap-2.5 transition-colors ${overDarkHero ? 'text-white' : 'text-[#1A1A1A]'}`}
          >
            <ChefHat className={`w-7 h-7 ${overDarkHero ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} strokeWidth={1.5} />
            <span className="font-serif text-2xl tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              my<span className={goldClass}>CHEF</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive
                      ? goldClass
                      : overDarkHero
                        ? 'text-white/90 hover:text-[#D4AF37]'
                        : 'text-[#1A1A1A]/80 hover:text-[#D4AF37]'
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${overDarkHero ? 'text-white' : 'text-[#1A1A1A]'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: isDarkUniverse ? '#050505' : '#FFFFFF' }}
        >
          {/* Mobile header with logo */}
          <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: isDarkUniverse ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}>
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5" style={{ color: isDarkUniverse ? '#fff' : '#1A1A1A' }}>
              <ChefHat className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="font-serif text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                my<span className="text-[#D4AF37]">CHEF</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
              style={{ color: isDarkUniverse ? '#fff' : '#1A1A1A' }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-2xl tracking-widest uppercase transition-colors"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: location.pathname === link.path ? '#D4AF37' : isDarkUniverse ? '#fff' : '#1A1A1A',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
