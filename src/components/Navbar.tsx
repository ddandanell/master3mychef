import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, Phone } from 'lucide-react'
import { PILLARS, PRIMARY_CTA } from '../data/siteArchitecture'

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF'

/* ── Sub-page definition for dropdown menus ── */
interface SubPageItem {
  slug: string
  label: string
}

interface NavItem {
  label: string
  href: string
  accent: string
  subPages?: SubPageItem[]
  dropdownAlign?: 'left' | 'center' | 'right'
}

/* ── Catering dropdown items (real, unique pages) ── */
const CATERING_SUBPAGES: SubPageItem[] = [
  { slug: 'bbq-catering', label: 'BBQ Catering' },
  { slug: 'buffet', label: 'Buffet Catering' },
  { slug: 'plated-catering', label: 'Plated Set Menu' },
  { slug: 'drop-off-catering', label: 'Drop-Off Catering' },
  { slug: 'babi-guling', label: 'Babi Guling' },
  { slug: 'grazing-tables', label: 'Grazing Tables' },
  { slug: 'floating-breakfast', label: 'Floating Breakfast' },
]

/* ── Events dropdown items (real, unique pages) ── */
const EVENTS_SUBPAGES: SubPageItem[] = [
  { slug: 'weddings', label: 'Weddings' },
  { slug: 'birthdays', label: 'Birthdays' },
  { slug: 'anniversaries', label: 'Anniversaries' },
  { slug: 'corporate-events', label: 'Corporate Events' },
  { slug: 'retreats', label: 'Retreats' },
  { slug: 'villa-parties', label: 'Villa Parties' },
]

/* ── Main nav items with their sub-pages ── */
const NAV_ITEMS: NavItem[] = [
  {
    label: 'Fine Dining',
    href: '/fine-dining',
    accent: '#C5A028',
    subPages: PILLARS['fine-dining'].subPages,
    dropdownAlign: 'left',
  },
  {
    label: 'Catering',
    href: '/catering',
    accent: '#6B8E5A',
    subPages: CATERING_SUBPAGES,
    dropdownAlign: 'left',
  },
  {
    label: 'Events',
    href: '/events',
    accent: '#2C5F7C',
    subPages: EVENTS_SUBPAGES,
    dropdownAlign: 'center',
  },
  {
    label: 'In-Villa',
    href: '/in-villa-service',
    accent: '#8B5A2B',
    subPages: PILLARS['in-villa-service'].subPages,
    dropdownAlign: 'center',
  },
  {
    label: 'Staffing',
    href: '/staffing',
    accent: '#C5A028',
    subPages: PILLARS['staffing'].subPages,
    dropdownAlign: 'right',
  },
  {
    label: 'Locations',
    href: '/locations',
    accent: '#C5A028',
    dropdownAlign: 'right',
  },
  {
    label: 'About',
    href: '/about',
    accent: '#C5A028',
    dropdownAlign: 'right',
  },
  {
    label: 'Contact',
    href: '/contact',
    accent: '#C5A028',
    dropdownAlign: 'right',
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
  item: NavItem
  currentPath: string
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const active = isActivePath(currentPath, item.href)
  const hasSubPages = item.subPages && item.subPages.length > 0

  const onEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  // Dropdown alignment: left/center/right prevents clipping off screen edges
  const alignClass =
    item.dropdownAlign === 'left'
      ? 'left-0'
      : item.dropdownAlign === 'right'
        ? 'right-0'
        : 'left-1/2 -translate-x-1/2'

  return (
    <div
      className="relative"
      onMouseEnter={hasSubPages ? onEnter : undefined}
      onMouseLeave={hasSubPages ? onLeave : undefined}
    >
      <Link
        to={item.href}
        className={`relative block py-2 text-[14px] tracking-[0.06em] uppercase transition-colors duration-200 ${
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
      {hasSubPages && (
        <div
          className={`absolute top-full ${alignClass} pt-3 transition-all duration-200 ${
            open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
        >
          <div
            className="bg-[#0F0F0F] border border-white/10 rounded-xl py-3 px-1 min-w-[240px] shadow-2xl shadow-black/50"
            style={{ backdropFilter: 'blur(16px)' }}
          >
            {item.subPages!.map((sub) => {
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
      )}
    </div>
  )
}

/* ── Mobile accordion item ── */
function MobileAccordion({
  item,
  currentPath,
  onNavigate,
}: {
  item: NavItem
  currentPath: string
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const active = isActivePath(currentPath, item.href)
  const hasSubPages = item.subPages && item.subPages.length > 0
  const panelId = `mobile-submenu-${item.href.replace(/\//g, '-') || 'root'}`

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
        {hasSubPages && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-white/40 transition-colors hover:text-white/70"
            aria-label={expanded ? `Collapse ${item.label} submenu` : `Expand ${item.label} submenu`}
            aria-expanded={expanded}
            aria-controls={panelId}
          >
            <span
              className={`text-lg transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
        )}
      </div>

      {hasSubPages && (
        <div
          id={panelId}
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 pl-3">
            {item.subPages!.map((sub) => {
              const subPath = `${item.href}/${sub.slug}`
              const subActive = currentPath === subPath
              return (
                <Link
                  key={sub.slug}
                  to={subPath}
                  onClick={onNavigate}
                  className={`flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] transition-colors ${
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
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const dept = (() => {
    const map: Record<string, string> = {
      '/fine-dining': 'Fine Dining',
      '/catering': 'Catering',
      '/events': 'Events',
      '/in-villa-service': 'In-Villa Service',
      '/staffing': 'Staffing',
      '/locations': 'Locations',
      '/about': 'About',
      '/contact': 'Contact',
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
        className="fixed top-0 left-0 right-0 z-[70] border-b border-white/[0.08] bg-[#050505]/95"
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
          <div className="hidden xl:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <DesktopDropdown key={item.href} item={item} currentPath={location.pathname} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Pricing — desktop */}
            <Link
              to="/pricing"
              className="hidden text-[13px] font-medium text-white/70 hover:text-[#C5A028] transition-colors xl:inline-flex"
            >
              Pricing
            </Link>
            {/* Book CTA — always visible on sm+ */}
            <Link
              to={PRIMARY_CTA.href}
              className="hidden min-h-[44px] items-center justify-center rounded-full bg-[#C5A028] px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black transition-all hover:bg-[#D4B43A] sm:inline-flex"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {PRIMARY_CTA.label}
            </Link>

            {/* Hamburger — mobile/tablet (hidden on xl+) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-[#C5A028] xl:hidden"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed bottom-0 left-0 right-0 top-[64px] z-[60] bg-[#050505] transition-all duration-300 md:top-[72px] xl:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto h-full max-w-md overflow-y-auto px-5 pb-10 pt-6">
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
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-[14px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:bg-[#C5A028] hover:text-black"
            >
              <Phone className="w-4 h-4" /> WhatsApp
            </a>

            <Link
              to="/book"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#C5A028] py-3.5 text-[14px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:bg-[#D4B43A]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
