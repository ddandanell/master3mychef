import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, ArrowLeft } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Fine Dining', path: '/fine-dining', accent: '#D4AF37', dept: 'Fine Dining' },
  { label: 'Catering', path: '/villa-chef', accent: '#6B8E5A', dept: 'Catering' },
  { label: 'Events', path: '/events', accent: '#2C5F7C', dept: 'Events' },
  { label: 'Contact', path: '/contact', accent: '#D4AF37', dept: null },
]

const DEPARTMENT_PAGES: Record<string, { name: string; accent: string; backTo: string }> = {
  '/fine-dining': { name: 'Fine Dining', accent: '#D4AF37', backTo: '/' },
  '/villa-chef': { name: 'Catering', accent: '#6B8E5A', backTo: '/' },
  '/events': { name: 'Events', accent: '#2C5F7C', backTo: '/' },
}

// Pages where the scrolled navbar should have a dark background
const DARK_NAV_PAGES = ['/fine-dining', '/privacy', '/terms', '/cancellation']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

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

  const hasDarkNavBg = DARK_NAV_PAGES.includes(location.pathname)
  const dept = DEPARTMENT_PAGES[location.pathname]

  // At top (transparent over hero): ALL pages have dark/cinematic heroes → white text
  // After scroll: white text for dark-bg navbars, dark text for light-bg navbars
  const useLightText = !scrolled || hasDarkNavBg

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
                background: hasDarkNavBg ? 'rgba(5,5,5,0.85)' : 'rgba(255,255,255,0.85)',
                borderBottom: `1px solid ${hasDarkNavBg ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              }
            : {}
        }
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo with department indicator */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2.5 transition-colors ${useLightText ? 'text-white' : 'text-[#1A1A1A]'}`}
            >
              <ChefHat className="w-7 h-7 text-[#D4AF37]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wide leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                  my<span className={goldClass}>CHEF</span>
                </span>
                {dept && (
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase mt-0.5 leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: dept.accent }}
                  >
                    {dept.name}
                  </span>
                )}
              </div>
            </Link>

            {/* Department switcher pill */}
            {dept && (
              <div className="hidden md:flex items-center gap-1 ml-4 pl-4 border-l" style={{ borderColor: useLightText ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)' }}>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-300"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: useLightText ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,26,0.6)',
                    borderColor: useLightText ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = dept.accent
                    e.currentTarget.style.color = dept.accent
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = useLightText ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'
                    e.currentTarget.style.color = useLightText ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,26,0.6)'
                  }}
                >
                  <ArrowLeft className="w-3 h-3" /> Home
                </Link>
                {NAV_LINKS.filter(l => l.dept && l.path !== location.pathname).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-300"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: useLightText ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,26,0.5)',
                      borderColor: useLightText ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = link.accent
                      e.currentTarget.style.color = link.accent
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = useLightText ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
                      e.currentTarget.style.color = useLightText ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,26,0.5)'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
                      : useLightText
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
            className={`md:hidden p-2 rounded-lg transition-colors ${useLightText ? 'text-white' : 'text-[#1A1A1A]'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: hasDarkNavBg ? '#050505' : '#FFFFFF' }}
        >
          {/* Mobile header with logo */}
          <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: hasDarkNavBg ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}>
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5" style={{ color: hasDarkNavBg ? '#fff' : '#1A1A1A' }}>
              <ChefHat className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="font-serif text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                my<span className="text-[#D4AF37]">CHEF</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
              style={{ color: hasDarkNavBg ? '#fff' : '#1A1A1A' }}
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
                  color: location.pathname === link.path ? '#D4AF37' : hasDarkNavBg ? '#fff' : '#1A1A1A',
                }}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile department switcher */}
            {dept && (
              <div className="flex flex-wrap justify-center gap-3 mt-4 pt-6 border-t" style={{ borderColor: hasDarkNavBg ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm tracking-wider uppercase px-4 py-2 rounded-full border" style={{ color: hasDarkNavBg ? '#fff' : '#1A1A1A', borderColor: hasDarkNavBg ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)' }}>
                  ← Home
                </Link>
                {NAV_LINKS.filter(l => l.dept && l.path !== location.pathname).map((link) => (
                  <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className="text-sm tracking-wider uppercase px-4 py-2 rounded-full border" style={{ color: hasDarkNavBg ? '#fff' : '#1A1A1A', borderColor: hasDarkNavBg ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)' }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
