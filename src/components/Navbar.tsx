import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChefHat, UtensilsCrossed, Users, MapPin, Home, Briefcase, CalendarDays, ChevronDown, User, Heart, Crown, BookOpen, Flame, Truck, Leaf, Coffee, Mountain, Music, Baby, Wine, Cake, Mail, Sparkles, MessageCircle, type LucideIcon } from 'lucide-react'
import { PILLARS, LOCATIONS, hasLocationPage, PHONE } from '@/data/siteArchitecture'
import { buildWhatsAppUrlForPath } from '@/lib/whatsapp'


// Map icon names to Lucide React icon components
const iconMap: Record<string, LucideIcon> = {
  User,
  Users,
  Utensils: UtensilsCrossed,
  Heart,
  Crown,
  ChefHat,
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
  Sparkles,
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

// Private Chef leads the navigation: it is the highest-intent term we compete on
// and the pillar page at /private-chef-bali is where that demand should land.
// Contact and Help are merged into a single item to make room without losing
// either page — both remain live and are reachable from the merged dropdown.
const DESKTOP_CORE_ITEMS: NavItem[] = [
  { label: 'Private Chef', href: '/private-chef-bali', icon: ChefHat, accent: '#C5A028' },
  { label: 'Catering', href: '/catering', icon: Users, accent: '#C5A028' },
  { label: 'Fine Dining', href: '/fine-dining', icon: UtensilsCrossed, accent: '#C5A028' },
  { label: 'Locations', href: '/locations', icon: MapPin, accent: '#C5A028' },
  { label: 'Events', href: '/events', icon: CalendarDays, accent: '#C5A028' },
]

const CONTACT_ITEM: NavItem = { label: 'Contact', href: '/contact', icon: Mail, accent: '#C5A028' }

const MOBILE_PRIMARY: NavItem[] = [
  { label: 'Private Chef', href: '/private-chef-bali', icon: ChefHat, accent: '#C5A028' },
  { label: 'Pricing', href: '/pricing', icon: BookOpen, accent: '#C5A028' },
  { label: 'Catering', href: '/catering', icon: Users, accent: '#C5A028' },
  { label: 'Fine Dining', href: '/fine-dining', icon: UtensilsCrossed, accent: '#C5A028' },
  { label: 'Events', href: '/events', icon: CalendarDays, accent: '#C5A028' },
]

const MOBILE_MORE: NavItem[] = [
  { label: 'Locations', href: '/locations', icon: MapPin, accent: '#C5A028' },
  { label: 'Dining Styles', href: '/dining-styles', icon: BookOpen, accent: '#C5A028' },
  { label: 'Experience', href: '/experiences', icon: Heart, accent: '#C5A028' },
  { label: 'In-Villa', href: '/in-villa-service', icon: Home, accent: '#C5A028' },
  { label: 'Staffing', href: '/staffing', icon: Briefcase, accent: '#C5A028' },
  { label: 'Journal', href: '/journal', icon: BookOpen, accent: '#C5A028' },
  { label: 'FAQ', href: '/faq', icon: BookOpen, accent: '#C5A028' },
  { label: 'Contact', href: '/contact', icon: Mail, accent: '#C5A028' },
]

interface NavSubpage {
  label: string
  href: string
  icon?: string
  group?: string
}

const NAV_SUBPAGES: Record<string, NavSubpage[]> = Object.values(PILLARS).reduce<Record<string, NavSubpage[]>>(
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

// SEO rebuild 2026-07-30: supersedes the 2026-07-24 decision to point "Private Chef
// Bali" at the homepage. The pillar now lives at /private-chef-bali and owns the term,
// so the Fine Dining dropdown entry points there instead of at "/".
NAV_SUBPAGES['/fine-dining'] = (NAV_SUBPAGES['/fine-dining'] ?? []).map((page) =>
  page.href === '/fine-dining/private-chef-bali' ? { ...page, href: '/private-chef-bali' } : page
)

// Private Chef dropdown — the pillar plus the paths people actually ask for.
NAV_SUBPAGES['/private-chef-bali'] = [
  { label: 'Private Chef Bali', href: '/private-chef-bali', icon: 'ChefHat' },
  { label: 'Prices & Meal Plans', href: '/private-chef-bali#prices', icon: 'Crown' },
  { label: 'Our Head Chefs', href: '/chefs', icon: 'User' },
  { label: 'Cuisines We Cook', href: '/private-chef-bali#cuisines', icon: 'Utensils' },
  { label: 'Groceries & Sourcing', href: '/private-chef-bali#groceries', icon: 'Leaf' },
  { label: 'Areas We Cover', href: '/private-chef-bali#areas', icon: 'Mountain' },
  { label: 'Full Price List', href: '/pricing', icon: 'BookOpen' },
]

// Contact dropdown — Contact and Help merged into one nav slot. Both pages stay live.
// B2B solution pages are also listed here so venue operators can reach them from the top nav.
NAV_SUBPAGES['/contact'] = [
  { label: 'Contact Us', href: '/contact', icon: 'User' },
  { label: 'Help Centre', href: '/help', icon: 'BookOpen' },
  { label: 'Pricing Guide', href: '/help/pricing', icon: 'Crown' },
  { label: 'FAQ', href: '/faq', icon: 'Utensils' },
  { label: 'B2B Restaurant Solution', href: '/restaurant-kitchen-solutions', icon: 'Utensils' },
  { label: 'B2B Bar Solution', href: '/bar-services/', icon: 'Wine' },
]

// Dining styles dropdown — hand-written (menu collections are not a PILLARS pillar)
NAV_SUBPAGES['/dining-styles'] = [
  { label: 'Fine Dining Menus', href: '/fine-dining/menus', icon: 'Crown' },
  { label: 'Three-Course', href: '/three-course', icon: 'Utensils' },
  { label: 'BBQ Grill', href: '/bbq-grill', icon: 'Flame' },
  { label: "Kids'", href: '/kids-menus', icon: 'Baby' },
]

// Experiences dropdown
NAV_SUBPAGES['/experiences'] = [
  { label: 'All Experiences', href: '/experiences', icon: 'Heart' },
  { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', icon: 'Wine' },
  { label: 'Sushi Masterclass', href: '/experiences/sushi-masterclass', icon: 'Utensils' },
  { label: 'Cooking Class', href: '/experiences/cooking-class', icon: 'ChefHat' },
  { label: 'Kids Birthday Chef Party', href: '/experiences/kids-birthday-chef-party', icon: 'Baby' },
  { label: 'Champagne & Oyster Experience', href: '/experiences/champagne-oyster-experience', icon: 'Crown' },
  { label: 'Caviar Experience', href: '/experiences/caviar-experience', icon: 'Sparkles' },
  { label: 'Whiskey & Cigar Experience', href: '/experiences/whiskey-cigar-experience', icon: 'Wine' },
  { label: 'Romantic Proposal Dinner', href: '/experiences/romantic-proposal-dinner', icon: 'Heart' },
]

NAV_SUBPAGES['/events'] = [
  ...(NAV_SUBPAGES['/events'] ?? []),
  { label: 'Cooking Class', href: '/experiences/cooking-class', icon: 'ChefHat' },
  { label: 'All Experiences', href: '/experiences', icon: 'Heart' },
]

// Locations dropdown — compact view of main areas + link to full directory.
// Filter to slugs that have a real /locations/<slug> page to avoid redirect-source links.
const LOCATION_DROPDOWN_ORDER: Array<keyof typeof LOCATIONS> = [
  'seminyak', 'canggu', 'uluwatu', 'ubud', 'nusa-dua', 'jimbaran', 'sanur', 'berawa', 'pererenan', 'bukit',
]
NAV_SUBPAGES['/locations'] = [
  { label: 'All Locations', href: '/locations', icon: 'MapPin' },
  ...LOCATION_DROPDOWN_ORDER.filter((slug) => hasLocationPage(slug)).map((slug) => ({
    label: LOCATIONS[slug].label,
    href: `/locations/${slug}`,
    icon: 'MapPin',
  })),
]

// Preview images shown beside desktop dropdown links; the picture swaps as subpages are hovered
const PILLAR_PREVIEW_IMAGES: Record<string, string> = {
  '/private-chef-bali': '/generated/mychef-experience-bali-home-hero-ivory-villa.webp',
  '/catering': '/generated/mychef-families-bali-catering-events.webp',
  '/fine-dining': '/generated/mychef-families-bali-fine-dining-experience.webp',
  '/dining-styles': '/generated/mychef-families-bali-classic-set-menus.webp',
  '/events': '/generated/mychef-events-bali-hero-events-new.webp',
  '/experiences': '/generated/private-experiences-bali-hub.webp',
  '/complete-villa-experience': '/generated/mychef-catering-bali-catering-hero.webp',
  '/in-villa-service': '/generated/in-villa-service-hero.webp',
  '/staffing': '/generated/mychef-butlers-1.webp',
}

const SUBPAGE_PREVIEW_IMAGES: Record<string, string> = {
  '/fine-dining/menus': '/generated/mychef-families-bali-classic-set-menus.webp',
  '/three-course': '/generated/mychef-families-bali-three-course.webp',
  '/bbq-grill': '/generated/mychef-families-bali-bbq-grill.webp',
  '/kids-menus': '/generated/mychef-families-bali-kids-menus.webp',
  '/fine-dining/our-chefs': '/generated/chef-made-surya-portrait-bw.webp',
  '/fine-dining/chefs-table': '/generated/mychef-experience-bali-luna-gallery-2.webp',
  '/fine-dining/romantic-dinner': '/generated/mychef-events-bali-anniversary-romantic.webp',
  '/fine-dining/tasting-menu': '/generated/mychef-experience-bali-luna-collage.webp',
  '/fine-dining/private-chef-bali': '/generated/mychef-finedining-bali-luna-plating.webp',
  '/complete-villa-experience': '/generated/mychef-catering-bali-catering-hero.webp',
  '/villa-event-packages': '/generated/mychef-villa-event-packages-hero.webp',
  '/vip-transport-bali': '/generated/mychef-vip-transport-bali-hero.webp',
  '/experiences': '/generated/mychef-experience-bali-aura-hero-v2.webp',
  '/experiences/private-cocktail-party': '/generated/mychef-events-bali-villa-party-night.webp',
  '/experiences/sushi-masterclass': '/generated/mychef-finedining-bali-chefs-hero.webp',
  '/experiences/cooking-class': '/generated/mychef-cooking-class-bali-hero-villa.webp',
  '/experiences/kids-birthday-chef-party': '/generated/mychef-events-bali-party-birthday.webp',
  '/experiences/champagne-oyster-experience': '/generated/mychef-experience-bali-aura-toast.webp',
  '/experiences/caviar-experience': '/generated/mychef-caviar-experience-bali-hero-villa.webp',
  '/experiences/whiskey-cigar-experience': '/generated/mychef-whiskey-cigar-experience-bali-hero-villa.webp',
  '/experiences/romantic-proposal-dinner': '/generated/mychef-misc-bali-section-romantic-dinner.webp',
}

interface DropdownPreview {
  src: string
  caption: string
}

function defaultPreviewFor(item: NavItem): DropdownPreview | null {
  const src = PILLAR_PREVIEW_IMAGES[item.href]
  return src ? { src, caption: `${item.label} · Bali` } : null
}

function isActivePath(current: string, target: string): boolean {
  if (current === target) return true
  if (target !== '/' && current.startsWith(target + '/')) return true
  return false
}

function groupSubpages(subpages: NavSubpage[]): { group: string; items: NavSubpage[] }[] {
  const map = new Map<string, NavSubpage[]>()
  for (const s of subpages) {
    const g = s.group ?? ''
    if (!map.has(g)) map.set(g, [])
    map.get(g)!.push(s)
  }
  return Array.from(map.entries()).map(([group, items]) => ({ group, items }))
}

interface DesktopNavItemProps {
  item: NavItem
  align: 'left' | 'center' | 'right'
  pathname: string
  openDropdown: string | null
  preview: DropdownPreview | null
  openedOnce: boolean
  onOpen: (href: string) => void
  onScheduleClose: () => void
  onNavigate: () => void
  onPreview: (item: NavItem, subpage: { label: string; href: string }) => void
}

function DesktopNavItem({
  item,
  align,
  pathname,
  openDropdown,
  preview,
  openedOnce,
  onOpen,
  onScheduleClose,
  onNavigate,
  onPreview,
}: DesktopNavItemProps) {
  const Icon = item.icon
  const active = isActivePath(pathname, item.href)
  const subpages = NAV_SUBPAGES[item.href] ?? []
  const hasDropdown = subpages.length > 0
  const isOpen = openDropdown === item.href
  const alignClass = align === 'left' ? 'left-0' : align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'

  return (
    <div
      className="relative group shrink-0"
      onMouseEnter={() => hasDropdown && onOpen(item.href)}
      onMouseLeave={() => hasDropdown && onScheduleClose()}
      onFocus={(e) => {
        if (hasDropdown && !e.currentTarget.contains(e.relatedTarget as Node | null)) {
          onOpen(item.href)
        }
      }}
      onBlur={(e) => {
        if (hasDropdown && !e.currentTarget.contains(e.relatedTarget as Node | null)) {
          onScheduleClose()
        }
      }}
    >
      <Link
        to={item.href}
        onClick={onNavigate}
        aria-haspopup={hasDropdown || undefined}
        aria-expanded={hasDropdown ? isOpen : undefined}
        aria-current={active ? 'page' : undefined}
        className={`relative flex items-center gap-1 2xl:gap-1.5 py-1 whitespace-nowrap transition-colors duration-200 ${
          active || isOpen ? 'text-[#C5A028]' : 'text-white/70 hover:text-[#C5A028]'
        }`}
      >
        <Icon
          className="hidden 2xl:block 2xl:w-4 2xl:h-4 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
        <span
          className="text-[10.5px] xl:text-[11px] 2xl:text-[12px] uppercase tracking-[0.06em] 2xl:tracking-[0.12em] font-medium"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {item.label}
        </span>
        {hasDropdown && (
          <ChevronDown
            className={`w-2.5 h-2.5 xl:w-3 xl:h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            strokeWidth={1.5}
          />
        )}
        <span className={`absolute -bottom-0.5 left-0 right-0 h-px bg-[#C5A028] transition-all duration-300 origin-left ${
          active || isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`} />
      </Link>

      {hasDropdown && (
        <div
          className={`absolute top-full z-20 pt-3 transition-all duration-200 ease-out ${alignClass} ${
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none invisible -translate-y-1 opacity-0'
          }`}
        >
          <div className="flex overflow-hidden rounded-2xl border border-[#C5A028]/20 bg-[#0F0E0C]/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="w-64 p-3">
              <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
                {groupSubpages(subpages).map(({ group, items }) => (
                  <div key={group}>
                    <p
                      className="px-3 pb-1.5 pt-1 text-[10px] uppercase tracking-[0.22em] text-[#C5A028]/80"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {group === '' ? `${item.label} Pages` : group}
                    </p>
                    <div className="space-y-0.5">
                      {items.map((subpage) => {
                        const subpageActive = isActivePath(pathname, subpage.href)
                        return (
                          <Link
                            key={subpage.href}
                            to={subpage.href}
                            onClick={onNavigate}
                            onMouseEnter={() => onPreview(item, subpage)}
                            onFocus={() => onPreview(item, subpage)}
                            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                              subpageActive
                                ? 'bg-[#C5A028]/15 text-[#C5A028]'
                                : 'text-white/70 hover:bg-white/5 hover:text-[#C5A028] hover:translate-x-0.5'
                            }`}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {subpage.icon && getIconComponent(subpage.icon) &&
                              (() => {
                                const SubIcon = getIconComponent(subpage.icon)
                                return SubIcon ? <SubIcon className="w-4 h-4 flex-shrink-0 opacity-70" strokeWidth={1.5} /> : null
                              })()
                            }
                            {subpage.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {preview && openedOnce && (
              <div className="relative w-52 overflow-hidden">
                <img
                  key={preview.src}
                  src={preview.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover animate-[nav-image-fade_0.4s_ease]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <p className="absolute inset-x-3 bottom-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/85">
                  {preview.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const location = useLocation()

  // Desktop dropdown hover-intent. The panel opens immediately on hover so the
  // menu feels responsive when the cursor moves over an item; only the close is
  // delayed, which keeps the panel open while the cursor travels from the
  // trigger down into the panel (and across to an adjacent item).
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [dropdownPreviews, setDropdownPreviews] = useState<Record<string, DropdownPreview>>({})
  const [openedOnce, setOpenedOnce] = useState<Set<string>>(new Set())
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearDropdownTimers = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const openDropdownNow = (href: string) => {
    clearDropdownTimers()
    setOpenedOnce((prev) => {
      if (prev.has(href)) return prev
      const next = new Set(prev)
      next.add(href)
      return next
    })
    setOpenDropdown(href)
  }

  const scheduleClose = () => {
    clearDropdownTimers()
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 220)
  }

  const setPreviewFor = (item: NavItem, subpage: { label: string; href: string }) => {
    const src = SUBPAGE_PREVIEW_IMAGES[subpage.href] ?? PILLAR_PREVIEW_IMAGES[item.href]
    if (!src) return
    setDropdownPreviews((prev) => ({ ...prev, [item.href]: { src, caption: subpage.label } }))
  }

  // Close any open dropdown on Escape
  useEffect(() => {
    if (!openDropdown) return undefined
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openDropdown])

  useEffect(() => () => clearDropdownTimers(), [])

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
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <>
      {/* ── Full-width luxury navbar at top ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[70] bg-[#0D0C0A]/95 border-b border-[#C5A028]/15"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="mx-auto px-8 py-2 h-14 flex items-center justify-between gap-8 lg:px-4 lg:gap-3 xl:gap-4 2xl:px-8 2xl:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <ChefHat className="w-6 h-6 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 text-[#C5A028] transition-transform group-hover:rotate-12" strokeWidth={1.5} />
            <span
              className="text-[18px] lg:text-[16px] 2xl:text-[18px] tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", color: '#fff' }}
            >
              my<span className="text-[#C5A028]">CHEF</span>
            </span>
          </Link>

          {/* Desktop core links — Experience/class is not a peer of Private Chef + Catering */}
          <div className="hidden lg:flex items-center gap-3 2xl:gap-6 flex-1 justify-center min-w-0">
            {DESKTOP_CORE_ITEMS.map((item, index) => (
              <DesktopNavItem
                key={item.href}
                item={item}
                align={index === 0 ? 'left' : index >= 4 ? 'right' : 'center'}
                pathname={location.pathname}
                openDropdown={openDropdown}
                preview={dropdownPreviews[item.href] ?? defaultPreviewFor(item)}
                openedOnce={openedOnce.has(item.href)}
                onOpen={openDropdownNow}
                onScheduleClose={scheduleClose}
                onNavigate={() => setOpenDropdown(null)}
                onPreview={setPreviewFor}
              />
            ))}
          </div>

          <div className="flex items-center shrink-0 gap-1">
            <div className="hidden lg:block">
              <DesktopNavItem
                item={CONTACT_ITEM}
                align="right"
                pathname={location.pathname}
                openDropdown={openDropdown}
                preview={dropdownPreviews[CONTACT_ITEM.href] ?? defaultPreviewFor(CONTACT_ITEM)}
                openedOnce={openedOnce.has(CONTACT_ITEM.href)}
                onOpen={openDropdownNow}
                onScheduleClose={scheduleClose}
                onNavigate={() => setOpenDropdown(null)}
                onPreview={setPreviewFor}
              />
            </div>
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

          <Link
            to="/"
            onClick={() => { setMenuOpen(false); setExpandedItems(new Set()) }}
            aria-label="myCHEF home"
            className="mb-1 inline-block focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
          >
            <span
              className="text-[24px] text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              myCHEF
            </span>
          </Link>
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#C5A028] mb-6">Private Dining in Bali</p>
          <div className="h-px bg-gradient-to-r from-[#C5A028]/55 via-[#C5A028]/18 to-transparent mb-6" />

          {/* Mobile nav: Primary 5 first, then More — reduces decision fatigue */}
          <div className="space-y-2 flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1 pb-4">
            <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A028]/90">Primary</p>
            {MOBILE_PRIMARY.map((item) => {
              const Icon = item.icon
              const active = isActivePath(location.pathname, item.href)
              const subpages = NAV_SUBPAGES[item.href] ?? []
              const isExpanded = expandedItems.has(item.href)

              return (
                <div key={`primary-${item.href}`}>
                  {subpages.length > 0 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleExpanded(item.href)}
                        className={`w-full flex items-center gap-4 rounded-2xl px-4 py-3.5 min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
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
                        <div className="ml-6 border-l border-[#C5A028]/20 pl-4 space-y-4 mt-2">
                          {groupSubpages(subpages).map(({ group, items }) => (
                            <div key={group} className="space-y-2">
                              {group !== '' && (
                                <p className="px-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A028]/80">
                                  {group}
                                </p>
                              )}
                              {items.map((subpage) => {
                                const subpageActive = isActivePath(location.pathname, subpage.href)
                                return (
                                  <Link
                                    key={subpage.href}
                                    to={subpage.href}
                                    onClick={() => {
                                      setMenuOpen(false)
                                      setExpandedItems(new Set())
                                    }}
                                    aria-current={subpageActive ? 'page' : undefined}
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
                          ))}
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
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-[48px] items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors ${
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

            <p className="mt-4 px-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">More</p>
            {MOBILE_MORE.map((item) => {
              const Icon = item.icon
              const active = isActivePath(location.pathname, item.href)
              const subpages = NAV_SUBPAGES[item.href] ?? []
              const isExpanded = expandedItems.has(item.href)

              return (
                <div key={`more-${item.href}`}>
                  {subpages.length > 0 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleExpanded(item.href)}
                        className={`flex min-h-[48px] w-full items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                          active ? 'bg-[#C5A028]/10 border border-[#C5A028]/20' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0 text-[#C5A028]" strokeWidth={1.6} />
                        <span
                          className={`flex-1 text-left text-[16px] ${active ? 'text-[#C5A028]' : 'text-gray-900'}`}
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 flex-shrink-0 text-gray-600 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="ml-6 mt-2 space-y-2 border-l border-[#C5A028]/20 pl-4">
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
                                aria-current={subpageActive ? 'page' : undefined}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                                  subpageActive
                                    ? 'bg-[#C5A028]/10 text-[#C5A028]'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#C5A028]'
                                }`}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                {subpage.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => {
                        setMenuOpen(false)
                        setExpandedItems(new Set())
                      }}
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-[48px] items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors ${
                        active ? 'bg-[#C5A028]/10 border border-[#C5A028]/20' : 'hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0 text-[#C5A028]" strokeWidth={1.6} />
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

          <div className="sticky bottom-0 border-t border-black/5 bg-white pt-3">
            <a
              href={buildWhatsAppUrlForPath(location.pathname, {
                serviceName: 'a private chef in Bali',
                intent: 'pricing and availability',
              })}
              target="_blank"
              rel="noopener noreferrer"
              data-source="mobile-nav-whatsapp"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#111]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp quote · reply in 2h
            </a>
            <p className="mt-2 text-center text-[11px] text-gray-400">or call {PHONE.display}</p>
          </div>
        </div>
      </div>
    </>
  )
}
