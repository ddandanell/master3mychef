import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, UtensilsCrossed, Users, MapPin, Home, Briefcase, CalendarDays, HelpCircle, ChevronDown, Search, User, Heart, Crown, BookOpen, Flame, Truck, Leaf, Coffee, Mountain, Music, Baby, Wine, Cake, type LucideIcon } from 'lucide-react'
import { PILLARS, PRIMARY_CTA } from '../data/siteArchitecture'
import SearchOverlay from './SearchOverlay'


// Map icon names to Lucide React icon components
const iconMap: Record<string, LucideIcon> = {
  User,
  Users,
  Utensils: UtensilsCrossed,
  Heart,
  Crown,
  BookOpen,
  Flame,
  Truck,
  Leaf,
  Coffee,
  Mountain,
  Music,
  Baby,
  Wine,
  Cake,
}

function getIconComponent(iconName?: string): LucideIcon | null {
  if (!iconName) return null
  return iconMap[iconName] || null
}


interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  accent: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Fine Dining', href: '/fine-dining', icon: UtensilsCrossed, accent: '#C5A028' },
  { label: 'Catering', href: '/catering', icon: Users, accent: '#C5A028' },
  { label: 'Events', href: '/events', icon: CalendarDays, accent: '#C5A028' },
  { label: 'In-Villa', href: '/in-villa-service', icon: Home, accent: '#C5A028' },
  { label: 'Staffing', href: '/staffing', icon: Briefcase, accent: '#C5A028' },
  { label: 'Locations', href: '/locations', icon: MapPin, accent: '#C5A028' },
  { label: 'Help', href: '/help', icon: HelpCircle, accent: '#C5A028' },
]

const NAV_SUBPAGES = Object.values(PILLARS).reduce<Record<string, { label: string; href: string; icon?: string }[]>>(
  (acc, pillar) => {
    acc[pillar.url] = pillar.subPages.map((page) => ({
      label: page.label,
      href: `${pillar.url}/${page.slug}`,
      icon: page.icon,
    }))
    return acc
  },
  {},
)

function isActivePath(current: string, target: string): boolean {
  if (current === target) return true
  if (target !== '/' && current.startsWith(target + '/')) return true
  return false
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const location = useLocation()

  const toggleExpanded = (href: string) => {
    const newSet = new Set(expandedItems)
    if (newSet.has(href)) {
      newSet.delete(href)
    } else {
      // Close all others when opening a new one (only one open at a time on mobile)
      newSet.clear()
      newSet.add(href)
    }
    setExpandedItems(newSet)
  }

  useEffect(() => {
    document.body.style.overflow = (menuOpen || searchOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, searchOpen])

  useEffect(() => {
    if (!menuOpen && !searchOpen) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, searchOpen])

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* ── Full-width luxury navbar at top ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[70] bg-[#0D0C0A]/95 border-b border-[#C5A028]/15"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="mx-auto px-8 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <ChefHat className="w-6 h-6 text-[#C5A028] transition-transform group-hover:rotate-12" strokeWidth={1.5} />
            <span
              className="text-[18px] tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", color: '#fff' }}
            >
              my<span className="text-[#C5A028]">CHEF</span>
            </span>
          </Link>

          {/* Desktop nav — hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const active = isActivePath(location.pathname, item.href)
              const subpages = NAV_SUBPAGES[item.href] ?? []
              return (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative flex flex-col items-center gap-1.5 transition-all duration-300 group ${
                      active ? 'text-[#C5A028]' : 'text-white/70 hover:text-[#C5A028]'
                    }`}
                  >
                    <Icon 
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                      strokeWidth={1.5} 
                    />
                    <span
                      className="text-[11px] uppercase tracking-[0.1em] font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.label}
                    </span>
                    {/* Animated underline */}
                    <span className={`absolute -bottom-1 left-0 right-0 h-px bg-[#C5A028] transition-all duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>

                  {subpages.length > 0 && (
                    <div className="absolute left-1/2 top-full z-20 mt-4 w-72 -translate-x-1/2 origin-top pointer-events-none opacity-0 scale-95 blur-[2px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:blur-0">
                      {/* Top accent line */}
                      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-16 h-px bg-[#C5A028]" />
                      
                      <div className="rounded-2xl border border-[#C5A028]/15 bg-white/95 p-3 shadow-2xl shadow-black/35 backdrop-blur-md">
                        <p
                          className="px-3 pb-2 text-[10px] uppercase tracking-[0.28em] text-[#C5A028]"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {item.label} Pages
                        </p>
                        <div className="max-h-[70vh] space-y-1 overflow-y-auto pr-1">
                          {subpages.map((subpage, i) => {
                            const subpageActive = isActivePath(location.pathname, subpage.href)
                            return (
                              <Link
                                key={subpage.href}
                                to={subpage.href}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                                  subpageActive
                                    ? 'bg-[#C5A028]/12 text-[#C5A028]'
                                    : 'text-gray-700 hover:bg-[#C5A028]/8 hover:text-[#C5A028] hover:translate-x-1'
                                }`}
                                style={{ 
                                  fontFamily: "'Playfair Display', serif",
                                  animationDelay: `${i * 50}ms`
                                }}
                              >
                                {subpage.icon && getIconComponent(subpage.icon) && 
                                  (() => {
                                    const Icon = getIconComponent(subpage.icon)
                                    return Icon ? <Icon className="w-4 h-4 flex-shrink-0 transition-transform hover:scale-110" strokeWidth={1.5} /> : null
                                  })()
                                }
                                {subpage.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="group relative p-2 text-white/70 hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              aria-label="Search myCHEF"
            >
              <Search className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              {/* Subtle border circle on hover */}
              <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#C5A028]/30 transition-colors duration-300" />
            </button>

            {/* Book Now Button */}
            <Link
              to={PRIMARY_CTA.href}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C5A028] text-black font-semibold text-[12px] uppercase tracking-[0.08em] transition-all hover:bg-[#D4B43A] hover:shadow-lg hover:shadow-[#C5A028]/30 flex-shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Book Now
              <span className="text-[14px]">→</span>
            </Link>

            {/* Hamburger — mobile/tablet (hidden on lg+) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-[#C5A028] lg:hidden flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
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
        className={`fixed bottom-0 left-0 right-0 top-0 z-[60] transition-all duration-300 lg:hidden bg-white ${
          menuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-md flex-col px-5 pb-7 pt-20">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-5 inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-gray-700 transition-colors hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
          >
            <X className="h-5 w-5 stroke-[1.5]" />
          </button>

          <h2
            className="text-[24px] text-gray-900 mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            myCHEF
          </h2>
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#C5A028] mb-6">Private Dining in Bali</p>
          <div className="h-px bg-gradient-to-r from-[#C5A028]/55 via-[#C5A028]/18 to-transparent mb-6" />

          {/* Mobile nav items — accordion style */}
          <div className="space-y-2 flex-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const active = isActivePath(location.pathname, item.href)
              const subpages = NAV_SUBPAGES[item.href] ?? []
              const isExpanded = expandedItems.has(item.href)

              return (
                <div key={item.href}>
                  {subpages.length > 0 ? (
                    <>
                      {/* Accordion trigger — no navigation, just expand */}
                      <button
                        type="button"
                        onClick={() => toggleExpanded(item.href)}
                        className={`w-full flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                          active ? 'bg-[#C5A028]/10 border border-[#C5A028]/20' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-5 w-5 text-[#C5A028] flex-shrink-0" strokeWidth={1.6} />
                        <span
                          className={`text-[16px] flex-1 text-left ${active ? 'text-[#C5A028]' : 'text-gray-900'}`}
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-gray-600 transition-transform flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Accordion content — visible only when expanded */}
                      {isExpanded && (
                        <div className="ml-6 border-l border-[#C5A028]/20 pl-4 space-y-2 mt-2">
                          {subpages.map((subpage) => {
                            const subpageActive = isActivePath(location.pathname, subpage.href)
                            return (
                              <Link
                                key={subpage.href}
                                to={subpage.href}
                                onClick={() => {
                                  setMenuOpen(false)
                                  setExpandedItems(new Set())
                                }}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
                                  subpageActive
                                    ? 'bg-[#C5A028]/10 text-[#C5A028]'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#C5A028]'
                                }`}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                {subpage.icon && getIconComponent(subpage.icon) && 
                                  (() => {
                                    const Icon = getIconComponent(subpage.icon)
                                    return Icon ? <Icon className="w-4 h-4 text-[#C5A028] flex-shrink-0" strokeWidth={1.5} /> : null
                                  })()
                                }
                                {subpage.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    /* Link without subpages */
                    <Link
                      to={item.href}
                      onClick={() => {
                        setMenuOpen(false)
                        setExpandedItems(new Set())
                      }}
                      className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors ${
                        active ? 'bg-[#C5A028]/10 border border-[#C5A028]/20' : 'hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5 text-[#C5A028] flex-shrink-0" strokeWidth={1.6} />
                      <span
                        className={`text-[16px] ${active ? 'text-[#C5A028]' : 'text-gray-900'}`}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* Book Now in mobile menu */}
          <Link
            to={PRIMARY_CTA.href}
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full px-6 py-3 rounded-full bg-[#C5A028] text-black font-semibold text-[12px] uppercase tracking-[0.1em] transition-all hover:bg-[#D4B43A] text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* ── Top padding spacer (height of navbar) ── */}
    </>
  )
}
