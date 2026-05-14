import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, Phone } from 'lucide-react'
import { PILLARS, PRIMARY_CTA } from '../data/siteArchitecture'

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF'

/* ── Main nav items with their sub-pages ── */
const NAV_ITEMS = [
  {
    label: 'Fine Dining',
    href: '/fine-dining',
    accent: '#C5A028',
    subPages: PILLARS['fine-dining'].subPages,
  },
  {
    label: 'Catering',
    href: '/catering',
    accent: '#6B8E5A',
    subPages: PILLARS['catering'].subPages,
  },
  {
    label: 'Events',
    href: '/events',
    accent: '#2C5F7C',
    subPages: PILLARS['events'].subPages,
  },
  {
    label: 'Service',
    href: '/in-villa-service',
    accent: '#8B5A2B',
    subPages: PILLARS['in-villa-service'].subPages,
  },
  {
    label: 'Rent Staff',
    href: '/staffing',
    accent: '#C5A028',
    subPages: PILLARS['staffing'].subPages,
  },
]

function isActivePath(current: string, target: string): boolean {
  if (current === target) return true
  if (target !== '/' && current.startsWith(target + '/')) return true
  return false
}

/* ── Desktop Dropdown ── */
function DesktopDropdown({
  item,
  currentPath,
}: {
  item: (typeof NAV_ITEMS)[0]
  currentPath: string
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const active = isActivePath(currentPath, item.href)

  const onEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Link
        to={item.href}
        className={`relative block py-2 text-[15px] tracking-[0.08em] uppercase transition-colors duration-200 ${
          active ? 'text-[#C5A028]' : 'text-white/80 hover:text-[#C5A028]'
        }`}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
      >
        {item.label}
        <span
          className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#C5A028] transition-all duration-300 ${
            active ? 'w-full' : 'w-0'
          }`}
        />
      </Link>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
      >
        <div
          className="bg-[#0F0F0F] border border-white/10 rounded-xl py-3 px-1 min-w-[260px] shadow-2xl shadow-black/50"
          style={{ backdropFilter: 'blur(16px)' }}
        >
          {item.subPages.map((sub) => {
            const subPath = `${item.href}/${sub.slug}`
            const subActive = currentPath === subPath
            return (
              <Link
                key={sub.slug}
                to={subPath}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] transition-all ${
                  subActive
                    ? 'text-[#C5A028] bg-white/[0.06]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: item.accent }}
                />
                <span className="truncate">{sub.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ── Mobile accordion item ── */
function MobileAccordion({
  item,
  currentPath,
  onNavigate,
}: {
  item: (typeof NAV_ITEMS)[0]
  currentPath: string
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const active = isActivePath(currentPath, item.href)

  return (
    <div className="border-b border-white/8">
      <div className="flex items-center justify-between w-full py-4">
        <Link
          to={item.href}
          onClick={onNavigate}
          className={`text-[20px] tracking-wide ${
            active ? 'text-[#C5A028]' : 'text-white'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="p-2 text-white/40 hover:text-white/70 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={expanded ? 'Collapse submenu' : 'Expand submenu'}
          aria-expanded={expanded}
        >
          <span
            className={`text-lg transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 pl-3">
          {item.subPages.map((sub) => {
            const subPath = `${item.href}/${sub.slug}`
            const subActive = currentPath === subPath
            return (
              <Link
                key={sub.slug}
                to={subPath}
                onClick={onNavigate}
                className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-[15px] transition-colors ${
                  subActive
                    ? 'text-[#C5A028] bg-white/[0.05]'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.03]'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: item.accent }}
                />
                {sub.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const dept = (() => {
    const map: Record<string, string> = {
      '/fine-dining': 'Fine Dining',
      '/catering': 'Catering',
      '/events': 'Events',
      '/in-villa-service': 'Service',
      '/staffing': 'Rent Staff',
    }
    for (const [k, v] of Object.entries(map)) {
      if (location.pathname === k || location.pathname.startsWith(k + '/')) return v
    }
    return undefined
  })()

  return (
    <>
      {/* ── Fixed header ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 border-b border-white/[0.08]"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-[64px] md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white group flex-shrink-0">
            <ChefHat className="w-7 h-7 text-[#C5A028] transition-transform group-hover:rotate-12" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span
                className="font-serif text-[22px] tracking-wide leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                my<span className="text-[#C5A028]">CHEF</span>
              </span>
              {dept && (
                <span
                  className="text-[10px] tracking-[0.25em] uppercase mt-0.5 leading-none text-[#C5A028]/80"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {dept}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <DesktopDropdown key={item.href} item={item} currentPath={location.pathname} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Contact — desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center text-[14px] tracking-[0.08em] uppercase text-white/60 hover:text-[#C5A028] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Contact
            </Link>

            {/* Book CTA */}
            <Link
              to={PRIMARY_CTA.href}
              className="hidden sm:inline-flex items-center justify-center text-[13px] tracking-[0.1em] uppercase font-semibold bg-[#C5A028] text-black px-5 py-2 rounded-full hover:bg-[#D4B43A] transition-all"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {PRIMARY_CTA.label}
            </Link>

            {/* Hamburger — mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#C5A028] transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-[60] bg-[#050505] transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-5 pt-[80px] pb-10 max-w-md mx-auto">
          {/* Nav items with accordions */}
          <div className="space-y-0">
            {NAV_ITEMS.map((item) => (
              <MobileAccordion
                key={item.href}
                item={item}
                currentPath={location.pathname}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </div>

          {/* Bottom actions */}
          <div className="mt-8 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full py-3.5 rounded-xl border border-white/15 text-white text-[15px] tracking-wide hover:border-[#C5A028]/40 hover:bg-white/[0.03] transition-all"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Contact Us
            </Link>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold text-[14px] uppercase tracking-[0.1em] py-3.5 rounded-full hover:bg-[#C5A028] hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4" /> WhatsApp
            </a>

            <Link
              to="/book"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#C5A028] text-black font-semibold text-[14px] uppercase tracking-[0.1em] py-3.5 rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
