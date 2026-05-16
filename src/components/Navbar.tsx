import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, UtensilsCrossed, Wine, MapPin, ChevronRight, CalendarDays, MessageCircle, type LucideIcon } from 'lucide-react'
import { PILLARS, PRIMARY_CTA } from '../data/siteArchitecture'
import { AREA_SLUGS, MICRO_AREA_SLUGS } from '../data/route-slugs'

const AREA_PATHS = new Set([
  ...AREA_SLUGS.map((a) => `/${a.slug}`),
  ...MICRO_AREA_SLUGS.map((a) => `/${a.slug}`),
])

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

interface MobileLuxuryNavItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

/* ── Catering dropdown items (real, unique pages) ── */
// Catering and Events use PILLARS directly so adding a sub-page to
// siteArchitecture.ts automatically appears in both sitemap and nav —
// no second place to update, no risk of orphan pages.

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
    subPages: PILLARS['catering'].subPages,
    dropdownAlign: 'left',
  },
  {
    label: 'Events',
    href: '/events',
    accent: '#2C5F7C',
    subPages: PILLARS['events'].subPages,
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

const MOBILE_LUXURY_NAV: MobileLuxuryNavItem[] = [
  {
    title: 'Fine Dining',
    description: 'Menus & Experiences',
    href: '/fine-dining',
    icon: UtensilsCrossed,
  },
  {
    title: 'Catering & Events',
    description: 'Villa Catering, Weddings & Corporate Events',
    href: '/catering',
    icon: Wine,
  },
  {
    title: 'Private Chef / In-Villa',
    description: 'Daily Chef, Long Stay & Staffing',
    href: '/in-villa-service',
    icon: ChefHat,
  },
  {
    title: 'Locations',
    description: 'Canggu, Ubud, Seminyak and more',
    href: '/locations',
    icon: MapPin,
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
          active ? 'text-[#C5A028]' : 'text-white/[80%] hover:text-[#C5A028]'
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
                      : 'text-white/[60%] hover:text-white hover:bg-white/[0.04]'
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
      '/villa-chef': 'Catering',
      '/events': 'Events',
      '/in-villa-service': 'In-Villa Service',
      '/staffing': 'Staffing',
      '/locations': 'Locations',
      '/journal': 'Journal',
      '/about': 'About',
      '/contact': 'Contact',
      '/pricing': 'Pricing',
      '/reviews': 'Reviews',
    }
    for (const [k, v] of Object.entries(map)) {
      if (location.pathname === k || location.pathname.startsWith(k + '/')) return v
    }
    if (AREA_PATHS.has(location.pathname)) return 'Locations'
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
              className="hidden text-[13px] font-medium text-white/[70%] hover:text-[#C5A028] transition-colors xl:inline-flex"
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
        className={`fixed bottom-0 left-0 right-0 top-[64px] z-[60] transition-all duration-300 md:top-[72px] xl:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
        style={{
          background: 'radial-gradient(120% 90% at 12% 0%, #1B1A18 0%, #0D0D0C 45%, #070707 100%)',
        }}
      >
        <div className="mx-auto flex h-full w-full max-w-md flex-col px-5 pb-7 pt-6">
          <div className="flex items-start justify-between">
            <Link to="/" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A028]/65 bg-[#0f0f0e]">
                <ChefHat className="h-4.5 w-4.5 text-[#C5A028]" strokeWidth={1.8} />
              </span>
              <span className="block">
                <span
                  className="block text-[23px] leading-none text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  my<span className="text-[#C5A028]">CHEF</span>
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.34em] text-[#c5a028]/85">Fine Dining</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-white/[80%] transition-colors hover:text-[#C5A028]"
            >
              <X className="h-5 w-5 stroke-[1.5]" />
            </button>
          </div>

          <p className="mt-7 text-[11px] uppercase tracking-[0.34em] text-[#C5A028]/80">Private Dining in Bali</p>
          <div className="mt-3 h-px bg-gradient-to-r from-[#C5A028]/55 via-[#C5A028]/18 to-transparent" />

          <div className="mt-4 space-y-1.5">
            {MOBILE_LUXURY_NAV.map((item) => {
              const Icon = item.icon
              const active = isActivePath(location.pathname, item.href)
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center gap-3.5 rounded-2xl px-1 py-3 transition-colors ${
                    active ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#C5A028]/40 bg-[#111110]">
                    <Icon className="h-4.5 w-4.5 text-[#C5A028]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="block text-[22px] leading-[1.1] text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[12px] leading-snug text-white/[48%]">{item.description}</span>
                  </span>
                  <ChevronRight className="h-4.5 w-4.5 flex-shrink-0 text-[#C5A028]/80 transition-transform duration-200 group-hover:translate-x-[1px]" />
                </Link>
              )
            })}
          </div>

          <div className="mt-4 h-px bg-gradient-to-r from-[#C5A028]/18 via-white/8 to-transparent" />

          <div className="mt-3.5 flex items-center gap-5 text-[12px] uppercase tracking-[0.19em] text-white/[58%]">
            <Link to="/about" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#C5A028]">
              About
            </Link>
            <Link to="/partners" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#C5A028]">
              Partners
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#C5A028]">
              Contact
            </Link>
          </div>

          <div className="mt-auto space-y-3 pt-7">
            <Link
              to="/book"
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#C5A028] px-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#111] transition-colors hover:bg-[#d1ad36]"
            >
              <CalendarDays className="h-4 w-4" /> Book Experience
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="nav-mobile-whatsapp"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-white/22 bg-transparent px-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/[0.86] transition-colors hover:border-[#C5A028] hover:text-[#C5A028]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Concierge
            </a>
            <p className="pt-1 text-center text-[11px] text-white/[42%]">Fast reply · Bali private dining</p>
          </div>
        </div>
      </div>
    </>
  )
}
