import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, ArrowRight, Utensils, MapPin, ChefHat, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PILLARS, LOCATIONS } from '@/data/siteArchitecture'

interface SearchResult {
  title: string
  subtitle: string
  url: string
  category: 'Service' | 'Location' | 'Guide'
  icon: LucideIcon
}

// Build static search index from architecture
const SEARCH_INDEX: SearchResult[] = [
  // Core Pillars
  ...Object.values(PILLARS).map(p => ({
    title: p.navLabel,
    subtitle: p.description.split('.')[0],
    url: p.url,
    category: 'Service' as const,
    icon: ChefHat,
  })),
  // Sub-pages
  ...Object.values(PILLARS).flatMap(p => p.subPages.map(sub => ({
    title: sub.label,
    subtitle: `${p.navLabel} specialisation`,
    url: `${p.url}/${sub.slug}`,
    category: 'Service' as const,
    icon: Utensils,
  }))),
  // Locations
  ...Object.values(LOCATIONS).map(l => ({
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
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const q = query.toLowerCase()
    const filtered = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.subtitle.toLowerCase().includes(q)
    ).slice(0, 8)
    
    setResults(filtered)
  }, [query])

  const handleItemClick = (url: string) => {
    navigate(url)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className="relative w-full max-w-md h-full bg-[#0D0C0A] border-l border-[#C5A028]/20 shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C5A028]" />
            <h2 className="text-white font-playfair text-xl tracking-wide">Search myCHEF</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close search (Escape)"
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Input Area */}
        <div className="p-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A028] w-5 h-5" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, areas, guides..."
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A028]/50 focus:bg-white/[0.08] transition-all"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
          {query && results.length === 0 && (
            <div className="text-center py-10">
              <p className="text-white/40 text-sm">No results found for "{query}"</p>
              <button 
                onClick={() => setQuery('')}
                className="text-[#C5A028] text-xs uppercase tracking-widest font-bold mt-4"
              >
                Clear Search
              </button>
            </div>
          )}

          {!query && (
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold px-2">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Villa BBQ', 'Wedding Menus', 'Canggu', 'Ubud', 'Staffing', 'Pricing'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:border-[#C5A028]/40 hover:text-[#C5A028] transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold px-2">Matches Found</p>
              {results.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.url + i}
                    onClick={() => handleItemClick(item.url)}
                    className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C5A028]/30 hover:bg-[#C5A028]/5 cursor-pointer transition-all duration-200 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C5A028]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#C5A028]/60 group-hover:text-[#C5A028]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-white font-medium text-sm truncate">{item.title}</h4>
                        <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{item.category}</span>
                      </div>
                      <p className="text-[11px] text-white/40 truncate">{item.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C5A028] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-white/[0.02] text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Immediate Support</p>
          <a
            href="https://wa.me/491635080236?text=Hi%20myCHEF%2C%20I%20have%20a%20question..."
            target="_blank"
            rel="noopener noreferrer"
            data-source="search-overlay-cta"
            className="inline-flex items-center gap-2 text-[#C5A028] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            Chat with Concierge →
          </a>
        </div>
      </div>
    </div>
  )
}
