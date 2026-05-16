import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ChefHat, X, UtensilsCrossed, Users, Cake, Briefcase, MessageCircle } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/analytics'

const WHATSAPP_NUMBER = '6282237565997'

interface ServiceOption {
  id: string
  label: string
  icon: React.ComponentType<any>
  baseMessage: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'dinner',
    label: 'Private Dinner in My Villa',
    icon: UtensilsCrossed,
    baseMessage: 'Hello myCHEF, I\'m interested in a private dinner at my villa. Please send me menu options, pricing, and availability.',
  },
  {
    id: 'catering',
    label: 'Catering for a Group',
    icon: Users,
    baseMessage: 'Hello myCHEF, I\'m interested in catering for a group. Please help me with menu options and pricing.',
  },
  {
    id: 'event',
    label: 'Event or Celebration',
    icon: Cake,
    baseMessage: 'Hello myCHEF, I\'m planning an event in Bali and would like to discuss private chef, catering, and service options.',
  },
  {
    id: 'chef',
    label: 'In-Villa Chef',
    icon: Briefcase,
    baseMessage: 'Hello myCHEF, I\'m looking for an in-villa chef for several days. Please help me understand the options.',
  },
  {
    id: 'question',
    label: 'Ask a Question',
    icon: MessageCircle,
    baseMessage: 'Hello myCHEF, I have a question about your private chef service in Bali.',
  },
]

function getContextPrefix(pathname: string): string {
  const normalized = pathname.toLowerCase()

  if (normalized.startsWith('/fine-dining')) {
    return 'I\'m interested in your fine dining service. '
  }
  if (normalized.startsWith('/catering')) {
    return 'I\'m interested in your catering service. '
  }
  if (normalized.startsWith('/events')) {
    return 'I\'m planning an event in Bali. '
  }
  if (normalized.startsWith('/in-villa')) {
    return 'I\'m interested in an in-villa chef. '
  }
  if (normalized.startsWith('/staffing')) {
    return 'I\'m interested in your staffing services. '
  }

  return ''
}

export default function ConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const popupRef = useRef<HTMLDivElement>(null)

  const contextPrefix = getContextPrefix(location.pathname)

  const handleServiceClick = (option: ServiceOption) => {
    const fullMessage = contextPrefix + option.baseMessage
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`

    trackWhatsAppClick(`${option.id}--concierge-widget`)

    window.open(waUrl, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open myCHEF Concierge"
        aria-expanded={isOpen}
        className="fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8 flex items-center gap-2 h-12 px-4 rounded-full bg-[#0D0C0A] border border-[#C5A028]/60 transition-all duration-200 hover:border-[#C5A028] hover:shadow-[0_0_20px_rgba(197,160,40,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A028]"
      >
        <ChefHat className="h-5 w-5 text-[#C5A028] flex-shrink-0" strokeWidth={1.5} />
        <span className="hidden sm:inline text-sm font-medium text-white tracking-wide">Ask myCHEF</span>
      </button>

      {/* Popup overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Popup panel */}
      <div
        ref={popupRef}
        className={`fixed bottom-[calc(1.5rem+3rem)] right-5 md:bottom-[calc(2rem+3rem)] md:right-8 z-50 w-[320px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0A0908] shadow-2xl border border-[#C5A028]/25 border-t-2 border-t-[#C5A028] transition-all duration-200 ${
          isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0908] px-5 pt-5 pb-4 flex items-start justify-between border-b border-[#C5A028]/15">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#C5A028]/10">
              <ChefHat className="h-4 w-4 text-[#C5A028]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">myCHEF Concierge</h3>
              <p className="text-xs text-white/60">Private dining support</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-4">
          <div>
            <p className="text-xs text-white/80 leading-relaxed">
              Hello, I'm here to help you plan your villa dining. What would you like to arrange?
            </p>
          </div>

          {/* Service options */}
          <div className="space-y-2">
            {SERVICE_OPTIONS.map((option) => {
              const Icon = option.icon
              return (
                <button
                  key={option.id}
                  onClick={() => handleServiceClick(option)}
                  className="w-full text-left px-3 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#C5A028]/30 transition-all duration-150 flex items-center gap-3"
                >
                  <Icon className="h-4 w-4 text-[#C5A028] flex-shrink-0" strokeWidth={1.8} />
                  <span className="text-xs font-medium text-white/90">{option.label}</span>
                </button>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="border-t border-[#C5A028]/15 pt-3 space-y-1.5 text-[11px] text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A028]">✓</span>
              <span>Replies within 1 hour</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#C5A028]">✓</span>
              <span>Available across Bali</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
