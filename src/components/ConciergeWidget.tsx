import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ChefHat, X, UtensilsCrossed, Users, Cake, Briefcase, MessageCircle, Sparkles, Bot, User } from 'lucide-react'
import { trackWhatsAppConversion } from '@/lib/analytics'

const WHATSAPP_NUMBER = '6282237565997'

interface ServiceOption {
  id: string
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
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

function getContextData(pathname: string) {
  const normalized = pathname.toLowerCase()

  if (normalized.startsWith('/fine-dining')) {
    return {
      prefix: 'I\'m interested in your fine dining service. ',
      triggerMsg: 'Interested in a Michelin-level dinner at your villa? I can help with menu selection.',
    }
  }
  if (normalized.startsWith('/catering')) {
    return {
      prefix: 'I\'m interested in your catering service. ',
      triggerMsg: 'Planning a group meal or BBQ? I can send over our catering packages.',
    }
  }
  if (normalized.startsWith('/events')) {
    return {
      prefix: 'I\'m planning an event in Bali. ',
      triggerMsg: 'Organizing a wedding or corporate offsite? Let me help you with the logistics.',
    }
  }
  if (normalized.startsWith('/in-villa')) {
    return {
      prefix: 'I\'m interested in an in-villa chef. ',
      triggerMsg: 'Need professional staff for your stay? I can explain our service levels.',
    }
  }
  if (normalized.startsWith('/staffing')) {
    return {
      prefix: 'I\'m interested in your staffing services. ',
      triggerMsg: 'Looking for a full-time chef or villa manager? I can walk you through our vetting process.',
    }
  }
  if (normalized.startsWith('/pricing')) {
    return {
      prefix: 'I have a question about your pricing. ',
      triggerMsg: 'Need help calculating a budget for your event? Just let me know.',
    }
  }

  return {
    prefix: '',
    triggerMsg: "Hello, I'm here to help you plan your villa dining. Let me hear if I can help you with anything.",
  }
}

export default function ConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [persona, setPersona] = useState<'ai' | 'adriano'>('ai')
  const location = useLocation()
  const popupRef = useRef<HTMLDivElement>(null)

  const { prefix, triggerMsg } = getContextData(location.pathname)

  // Switch personas every 10 seconds or when page changes
  useEffect(() => {
    const timer = setInterval(() => {
      setPersona(p => p === 'ai' ? 'adriano' : 'ai')
    }, 12000)
    return () => clearInterval(timer)
  }, [])

  // Auto-trigger notification bubble after 5 seconds on new page
  useEffect(() => {
    setShowNotification(false)
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const handleServiceClick = (option: ServiceOption) => {
    const fullMessage = prefix + option.baseMessage
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`

    trackWhatsAppConversion(`${option.id}--concierge-widget`)

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
      {/* Auto-trigger Notification Bubble */}
      {showNotification && !isOpen && (
        <div 
          className="fixed bottom-20 right-5 md:bottom-24 md:right-8 z-50 max-w-[240px] animate-in fade-in slide-in-from-bottom-4 duration-500"
          onClick={() => { setIsOpen(true); setShowNotification(false) }}
        >
          <div className="bg-[#0A0908] border border-[#C5A028]/30 rounded-2xl p-4 shadow-2xl cursor-pointer hover:border-[#C5A028] transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C5A028]/10">
                {persona === 'ai' ? (
                  <Bot className="h-3 w-3 text-[#C5A028]" />
                ) : (
                  <User className="h-3 w-3 text-[#C5A028]" />
                )}
              </div>
              <span className="text-[10px] font-bold text-[#C5A028] uppercase tracking-wider">
                {persona === 'ai' ? 'myCHEF AI' : 'Adriano (Founder)'}
              </span>
              <button
                className="ml-auto p-0.5 text-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
                onClick={(e) => { e.stopPropagation(); setShowNotification(false) }}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            <p className="text-xs text-white/90 leading-relaxed font-medium">
              {triggerMsg}
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowNotification(false) }}
        aria-label="Open myCHEF Concierge"
        aria-expanded={isOpen}
        className="fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8 flex items-center gap-2 h-12 px-4 rounded-full bg-[#0D0C0A] border border-[#C5A028]/60 transition-all duration-200 hover:border-[#C5A028] hover:shadow-[0_0_20px_rgba(197,160,40,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A028]"
      >
        <div className="relative">
          <ChefHat className="h-5 w-5 text-[#C5A028] flex-shrink-0" strokeWidth={1.5} />
          {showNotification && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A028] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A028]"></span>
            </span>
          )}
        </div>
        <span className="hidden sm:inline text-sm font-medium text-white tracking-wide">Ask myCHEF</span>
      </button>

      {/* Popup overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Popup panel */}
      <div
        ref={popupRef}
        className={`fixed bottom-[calc(1.25rem+3.25rem)] right-4 md:bottom-[calc(2rem+3.5rem)] md:right-8 z-50 w-[280px] max-h-[80vh] overflow-y-auto rounded-2xl bg-[#0A0908] shadow-2xl border border-[#C5A028]/25 border-t-2 border-t-[#C5A028] transition-all duration-200 ${
          isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0908] px-4 pt-4 pb-3 flex items-center justify-between border-b border-[#C5A028]/15">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#C5A028]/10 overflow-hidden border border-[#C5A028]/20">
              <img
                src={persona === 'ai' ? '/generated/mychef-misc-bali-avatar-ai.webp' : '/generated/mychef-finedining-bali-luna-chef-portrait.webp'}
                alt={persona === 'ai' ? 'myCHEF AI' : 'Adriano'}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xs font-semibold text-white">
                  {persona === 'ai' ? 'myCHEF Concierge' : 'Adriano'}
                </h3>
                {persona === 'ai' && <Sparkles className="h-3 w-3 text-[#C5A028]" />}
              </div>
              <p className="text-[9px] text-white/50 uppercase tracking-widest font-bold">
                {persona === 'ai' ? 'Digital Assistant' : 'Founder & Executive Chef'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="text-white/70 hover:text-white transition-colors p-1.5 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-3 space-y-3">
          <div className="space-y-1 text-[10px] text-white/40 uppercase tracking-widest font-bold px-1">
            Choose a service
          </div>

          {/* Service options */}
          <div className="space-y-1.5">
            {SERVICE_OPTIONS.map((option) => {
              const Icon = option.icon
              return (
                <button
                  key={option.id}
                  onClick={() => handleServiceClick(option)}
                  className="w-full text-left px-3 py-2.5 rounded-lg bg-white/[0.03] hover:bg-[#C5A028]/10 border border-white/[0.06] hover:border-[#C5A028]/40 transition-all duration-150 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  <div className="h-7 w-7 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-[#C5A028]/20 transition-colors">
                    <Icon className="h-3.5 w-3.5 text-[#C5A028] flex-shrink-0" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] font-semibold text-white/90 group-hover:text-white transition-colors">{option.label}</span>
                </button>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="border-t border-[#C5A028]/15 pt-3 space-y-1 text-[10px] text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C5A028]" />
              <span>Replies within 1 hour</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C5A028]" />
              <span>Available across Bali & Jakarta</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
