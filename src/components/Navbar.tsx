import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Fine Dining', path: '/fine-dining', accent: '#C5A028', dept: 'Fine Dining' },
  { label: 'Catering', path: '/villa-chef', accent: '#6B8E5A', dept: 'Catering' },
  { label: 'Events', path: '/events', accent: '#2C5F7C', dept: 'Events' },
  { label: 'Services', path: '/services', accent: '#C5A028', dept: null },
  { label: 'Staffing', path: '/staffing', accent: '#C5A028', dept: null },
  { label: 'Contact', path: '/contact', accent: '#C5A028', dept: null },
]

const DEPARTMENT_PAGES: Record<string, { name: string; accent: string }> = {
  '/fine-dining': { name: 'Fine Dining', accent: '#C5A028' },
  '/villa-chef': { name: 'Catering', accent: '#6B8E5A' },
  '/events': { name: 'Events', accent: '#2C5F7C' },
}

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
    { label: 'Party Events', href: '/events#packages' },
    { label: 'Corporate Events', href: '/corporate-events' },
    { label: 'Event Types', href: '/events#types' },
    { label: 'How It Works', href: '/events#how-it-works' },
    { label: "What's Included", href: '/events#included' },
    { label: 'Reserve', href: '/events#book' },
  ],
  '/staffing': [
    { label: 'How We Work', href: '/staffing#recruitment' },
    { label: 'What Your Chef Does', href: '/staffing#chef-can-do' },
    { label: 'How It Works', href: '/staffing#how-it-works' },
    { label: 'Staffing Types', href: '/staffing#staffing-types' },
    { label: 'Get a Quote', href: '/staffing#quote' },
    { label: 'FAQ', href: '/staffing#faq' },
  ],
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Focus trap for mobile menu dialog
  useEffect(() => {
    if (!mobileOpen) return
    const menu = document.getElementById('mobile-menu')
    if (!menu) return
    const focusable = menu.querySelectorAll<HTMLElement>('a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    menu.addEventListener('keydown', handler)
    first?.focus()
    return () => menu.removeEventListener('keydown', handler)
  }, [mobileOpen])

  const dept = DEPARTMENT_PAGES[location.pathname]
  const goldClass = 'text-[#C5A028]'

  const handleEnter = (path: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(path)
  }

  const handleLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <>
      {/* ── Fixed dark glass navbar ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 py-4 min-h-[64px]"
        style={{
          background: '#050505',
          borderBottom: '1px solid rgba(197, 160, 40, 0.18)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 text-white">
            <ChefHat className="w-7 h-7 text-[#C5A028]" strokeWidth={1.5} />
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
                        : 'text-white/80 hover:text-[#C5A028]'
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#C5A028] transition-all duration-300 ${
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
                        className="rounded-xl border border-white/10 py-2 px-1 min-w-[180px]"
                        style={{ background: '#050505', border: '1px solid rgba(197, 160, 40, 0.12)' }}
                      >
                        {SUBMENUS[link.path].map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-[12px] tracking-[0.12em] uppercase transition-colors rounded-lg hover:bg-white/5 text-white/70 hover:text-[#C5A028]"
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
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-lg text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-[60] flex flex-col" style={{ background: '#050505' }}>
          <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 text-white">
              <ChefHat className="w-6 h-6 text-[#C5A028]" strokeWidth={1.5} />
              <span className="font-serif text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                my<span className="text-[#C5A028]">CHEF</span>
              </span>
            </Link>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center">
              <X className="w-6 h-6" />
            </button>
          </div>

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
                      onClick={() => { if (!hasSubmenu) setMobileOpen(false) }}
                      className="text-2xl tracking-widest uppercase transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: isActive ? '#C5A028' : '#fff' }}
                    >
                      {link.label}
                    </Link>
                    {hasSubmenu && (
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(isExpanded ? null : link.path)}
                        className="p-2 transition-transform min-w-[44px] min-h-[44px] flex items-center justify-center"
                        style={{ color: isActive ? '#C5A028' : '#fff', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        aria-label={isExpanded ? 'Collapse submenu' : 'Expand submenu'}
                        aria-expanded={isExpanded}
                        aria-controls={isExpanded ? `submenu-${link.path}` : undefined}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  {hasSubmenu && isExpanded && (
                    <div id={`submenu-${link.path}`} className="flex flex-col items-center gap-3 mt-4">
                      {SUBMENUS[link.path].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm tracking-wider uppercase transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.6)' }}
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
