import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Fine Dining', path: '/fine-dining', accent: '#D4AF37', dept: 'Fine Dining' },
  { label: 'Catering', path: '/villa-chef', accent: '#6B8E5A', dept: 'Catering' },
  { label: 'Events', path: '/events', accent: '#2C5F7C', dept: 'Events' },
  { label: 'Contact', path: '/contact', accent: '#D4AF37', dept: null },
]

const DEPARTMENT_PAGES: Record<string, { name: string; accent: string }> = {
  '/fine-dining': { name: 'Fine Dining', accent: '#D4AF37' },
  '/villa-chef': { name: 'Catering', accent: '#6B8E5A' },
  '/events': { name: 'Events', accent: '#2C5F7C' },
}

// Submenu definitions per department page
const SUBMENUS: Record<string, { label: string; href: string }[]> = {
  '/fine-dining': [
    { label: 'Menu', href: '/fine-dining#menus' },
    { label: 'Captured', href: '/fine-dining#captured' },
    { label: 'The Process', href: '/fine-dining#the-four' },
    { label: 'How It Works', href: '/fine-dining#how-it-works' },
    { label: 'Reserve Evening', href: '/fine-dining#book' },
  ],
  '/villa-chef': [
    { label: 'Meal Plans', href: '/villa-chef#plans' },
    { label: 'How It Works', href: '/villa-chef#how-it-works' },
    { label: "What's Included", href: '/villa-chef#included' },
    { label: 'Reserve', href: '/villa-chef#book' },
  ],
  '/events': [
    { label: 'Packages', href: '/events#packages' },
    { label: 'Event Types', href: '/events#types' },
    { label: 'How It Works', href: '/events#how-it-works' },
    { label: "What's Included", href: '/events#included' },
    { label: 'Reserve', href: '/events#book' },
  ],
}

// Pages where the scrolled navbar should have a dark background
const DARK_NAV_PAGES = ['/fine-dining', '/privacy', '/terms', '/cancellation']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const hasDarkNavBg = DARK_NAV_PAGES.includes(location.pathname)
  const dept = DEPARTMENT_PAGES[location.pathname]

  const useLightText = !scrolled || hasDarkNavBg
  const goldClass = 'text-[#D4AF37]'

  const handleEnter = (path: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(path)
  }

  const handleLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const getDropdownBg = (path: string) => {
    if (path === '/fine-dining') return 'rgba(5,5,5,0.95)'
    if (path === '/villa-chef') return 'rgba(245,240,232,0.98)'
    if (path === '/events') return 'rgba(255,255,255,0.98)'
    return 'rgba(5,5,5,0.95)'
  }

  const getDropdownText = (path: string) => {
    if (path === '/fine-dining') return 'text-white/70 hover:text-[#D4AF37]'
    if (path === '/villa-chef') return 'text-[#2C2419]/70 hover:text-[#6B8E5A]'
    if (path === '/events') return 'text-[#1A1A1A]/70 hover:text-[#2C5F7C]'
    return 'text-white/70 hover:text-[#D4AF37]'
  }

  const getDropdownBorder = (path: string) => {
    if (path === '/fine-dining') return 'border-white/10'
    if (path === '/villa-chef') return 'border-[#E5E0D8]'
    if (path === '/events') return 'border-[#E5E3E0]'
    return 'border-white/10'
  }

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
          {/* Logo */}
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              const hasSubmenu = SUBMENUS[link.path] !== undefined
              const isOpen = openDropdown === link.path
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={hasSubmenu ? () => handleEnter(link.path) : undefined}
                  onMouseLeave={hasSubmenu ? handleLeave : undefined}
                >
                  <Link
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
                  {/* Dropdown */}
                  {hasSubmenu && isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      onMouseEnter={() => handleEnter(link.path)}
                      onMouseLeave={handleLeave}
                    >
                      <div
                        className={`rounded-xl border ${getDropdownBorder(link.path)} py-2 px-1 min-w-[180px]`}
                        style={{ background: getDropdownBg(link.path), backdropFilter: 'blur(20px)' }}
                      >
                        {SUBMENUS[link.path].map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-[12px] tracking-[0.12em] uppercase transition-colors rounded-lg hover:bg-white/5 ${getDropdownText(link.path)}`}
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              const hasSubmenu = SUBMENUS[link.path] !== undefined
              const isExpanded = mobileExpanded === link.path
              return (
                <div key={link.path} className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Link
                      to={link.path}
                      onClick={() => {
                        if (!hasSubmenu) setMobileOpen(false)
                      }}
                      className="text-2xl tracking-widest uppercase transition-colors"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: isActive ? '#D4AF37' : hasDarkNavBg ? '#fff' : '#1A1A1A',
                      }}
                    >
                      {link.label}
                    </Link>
                    {hasSubmenu && (
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : link.path)}
                        className="p-1 transition-transform"
                        style={{
                          color: isActive ? '#D4AF37' : hasDarkNavBg ? '#fff' : '#1A1A1A',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  {/* Mobile submenu */}
                  {hasSubmenu && isExpanded && (
                    <div className="flex flex-col items-center gap-3 mt-4">
                      {SUBMENUS[link.path].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm tracking-wider uppercase transition-colors"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            color: hasDarkNavBg ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,26,0.6)',
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
