import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowRight, Utensils, MapPin, ChefHat, Sparkles } from 'lucide-react'
import { PILLARS, LOCATIONS } from '../data/siteArchitecture'
import { useOverlayAccessibility } from '../hooks/useOverlayAccessibility'

interface SearchResult {
  title: string
  subtitle: string
  url: string
  category: 'Service' | 'Location' | 'Guide'
  icon: any
}

const POPULAR_SEARCHES = ['Villa BBQ', 'Wedding Menus', 'Canggu', 'Ubud', 'Staffing', 'Pricing']

// Build static search index from architecture
const SEARCH_INDEX: SearchResult[] = [
  ...Object.values(PILLARS).map((p) => ({
    title: p.navLabel,
    subtitle: p.description.split('.')[0],
    url: p.url,
    category: 'Service' as const,
    icon: ChefHat,
  })),
  ...Object.values(PILLARS).flatMap((p) => p.subPages.map((sub) => ({
    title: sub.label,
    subtitle: `${p.navLabel} specialisation`,
    url: `${p.url}/${sub.slug}`,
    category: 'Service' as const,
    icon: Utensils,
  }))),
  ...Object.values(LOCATIONS).map((l) => ({
    title: l.label,
    subtitle: `Private chef services in ${l.label}, Bali`,
    url: `/locations/${l.slug}`,
    category: 'Location' as const,
    icon: MapPin,
  })),
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  const resultsId = useId()
  const searchInputId = `${titleId}-input`

  useOverlayAccessibility({ active: isOpen, containerRef: panelRef, onClose })

  useEffect(() => {
    if (isOpen) {
      const frame = window.requestAnimationFrame(() => inputRef.current?.focus())
      document.body.style.overflow = 'hidden'
      return () => {
        window.cancelAnimationFrame(frame)
        document.body.style.overflow = ''
      }
    }

    document.body.style.overflow = ''
    setQuery('')
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const q = query.toLowerCase()
    const filtered = SEARCH_INDEX.filter(
      (item) => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q),
    ).slice(0, 8)

    setResults(filtered)
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />

      <div
        id="search-overlay"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className="relative flex h-full w-full max-w-md flex-col border-l border-[#C5A028]/20 bg-[#0D0C0A] shadow-2xl animate-in slide-in-from-right duration-500"
      >
        <button type="button" onClick={() => inputRef.current?.focus()} className="skip-link z-[110]">
          Skip to search field
        </button>
        <p id={descriptionId} className="sr-only">
          Search services, locations, and guides. Press Escape to close the search dialog.
        </p>

        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C5A028]" aria-hidden="true" />
            <h2 id={titleId} className="text-white font-playfair text-xl tracking-wide">Search myCHEF</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search overlay"
            className="rounded-full p-2 text-white/40 transition-colors hover:text-white focus-visible:text-white"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="p-6">
          <label htmlFor={searchInputId} className="sr-only">Search services, areas, and guides</label>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C5A028]" aria-hidden="true" />
            <input
              id={searchInputId}
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, areas, guides..."
              aria-controls={resultsId}
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-white/30 transition-all focus:border-[#C5A028]/50 focus:bg-white/[0.08] focus:outline-none"
            />
          </div>
        </div>

        <div id={resultsId} className="flex-1 overflow-y-auto px-6 pb-6 space-y-6" aria-live="polite">
          {query && results.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-sm text-white/40">No results found for "{query}"</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-[#C5A028] transition-colors hover:text-white"
              >
                Clear Search
              </button>
            </div>
          )}

          {!query && (
            <div className="space-y-4">
              <p className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 transition-all hover:border-[#C5A028]/40 hover:text-[#C5A028]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-3">
              <p className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A028]">Matches Found</p>
              <ul className="space-y-3">
                {results.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={`${item.url}-${index}`}>
                      <Link
                        to={item.url}
                        onClick={onClose}
                        className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition-all duration-200 hover:border-[#C5A028]/30 hover:bg-[#C5A028]/5 focus-visible:border-[#C5A028]/60 focus-visible:bg-[#C5A028]/10"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-[#C5A028]/10 group-focus-visible:bg-[#C5A028]/10">
                          <Icon className="h-5 w-5 text-[#C5A028]/60 group-hover:text-[#C5A028] group-focus-visible:text-[#C5A028]" strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-0.5 flex items-center justify-between gap-3">
                            <h3 className="truncate text-sm font-medium text-white">{item.title}</h3>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{item.category}</span>
                          </div>
                          <p className="truncate text-[11px] text-white/40">{item.subtitle}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 -translate-x-2 text-[#C5A028] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" aria-hidden="true" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 bg-white/[0.02] p-6 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-widest text-white/30">Immediate Support</p>
          <a
            href="https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I%20have%20a%20question..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A028] transition-colors hover:text-white"
          >
            Chat with Concierge →
          </a>
        </div>
      </div>
    </div>
  )
}
