import { useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChefHat, X, UtensilsCrossed, Users, Cake, Briefcase, MessageCircle, Sparkles, Bot, User } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/analytics'
import { useOverlayAccessibility } from '@/hooks/useOverlayAccessibility'

import OptimizedImage from '@/components/OptimizedImage'
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
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const firstActionRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  const optionsId = useId()

  useOverlayAccessibility({ active: isOpen, containerRef: popupRef, onClose: () => setIsOpen(false) })

  const { prefix, triggerMsg } = getContextData(location.pathname)

  const closeWidget = () => setIsOpen(false)
  const openWidget = () => {
    setIsOpen(true)
    setShowNotification(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setPersona((p) => (p === 'ai' ? 'adriano' : 'ai'))
    }, 12000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setShowNotification(false)
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [isOpen, location.pathname])

  useEffect(() => {
    if (!isOpen) return

    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 50)
    return () => window.clearTimeout(timer)
  }, [isOpen])

  const handleServiceClick = (option: ServiceOption) => {
    const fullMessage = prefix + option.baseMessage
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`

    trackWhatsAppClick(`${option.id}--concierge-widget`)

    window.open(waUrl, '_blank', 'noopener,noreferrer')
    closeWidget()
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        closeWidget()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {showNotification && !isOpen && (
        <div className="fixed bottom-20 right-5 z-50 max-w-[240px] animate-in fade-in slide-in-from-bottom-4 duration-500 md:bottom-24 md:right-8">
          <div className="group rounded-2xl border border-[#C5A028]/30 bg-[#0A0908] p-4 shadow-2xl transition-all hover:border-[#C5A028]">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C5A028]/10">
                {persona === 'ai' ? (
                  <Bot className="h-3 w-3 text-[#C5A028]" aria-hidden="true" />
                ) : (
                  <User className="h-3 w-3 text-[#C5A028]" aria-hidden="true" />
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A028]">
                {persona === 'ai' ? 'myCHEF AI' : 'Adriano (Founder)'}
              </span>
              <button
                type="button"
                className="ml-auto rounded-full p-0.5 text-white/40 hover:text-white"
                aria-label="Dismiss concierge notification"
                onClick={() => setShowNotification(false)}
              >
                <X className="h-3 w-3" aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              onClick={openWidget}
              className="w-full text-left text-xs font-medium leading-relaxed text-white/90"
            >
              {triggerMsg}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen((prev) => !prev)
          setShowNotification(false)
        }}
        aria-label="Open myCHEF Concierge"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="concierge-widget-dialog"
        className="fixed bottom-6 right-5 z-50 flex h-12 items-center gap-2 rounded-full border border-[#C5A028]/60 bg-[#0D0C0A] px-4 transition-all duration-200 hover:border-[#C5A028] hover:shadow-[0_0_20px_rgba(197,160,40,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A028] md:bottom-8 md:right-8"
      >
        <div className="relative">
          <ChefHat className="h-5 w-5 flex-shrink-0 text-[#C5A028]" strokeWidth={1.5} aria-hidden="true" />
          {showNotification && (
            <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A028] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C5A028]"></span>
            </span>
          )}
        </div>
        <span className="hidden text-sm font-medium tracking-wide text-white sm:inline">Ask myCHEF</span>
      </button>

      {isOpen && <div className="fixed inset-0 z-40" onClick={closeWidget} />}

      <div
        id="concierge-widget-dialog"
        ref={popupRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        aria-hidden={!isOpen}
        tabIndex={-1}
        className={`fixed bottom-[calc(1.5rem+3.5rem)] right-5 z-50 max-h-[90vh] w-[320px] overflow-y-auto rounded-2xl border border-[#C5A028]/25 border-t-2 border-t-[#C5A028] bg-[#0A0908] shadow-2xl transition-all duration-200 md:bottom-[calc(2rem+3.5rem)] md:right-8 ${
          isOpen ? 'visible scale-100 opacity-100' : 'invisible pointer-events-none scale-95 opacity-0'
        }`}
      >
        <button type="button" onClick={() => firstActionRef.current?.focus()} className="skip-link z-[60]">
          Skip to concierge options
        </button>
        <p id={descriptionId} className="sr-only">
          Concierge support dialog. Choose a service to start a WhatsApp conversation, or press Escape to close.
        </p>

        <div className="sticky top-0 flex items-start justify-between border-b border-[#C5A028]/15 bg-[#0A0908] px-5 pb-4 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#C5A028]/20 bg-[#C5A028]/10">
              <OptimizedImage
                src={persona === 'ai' ? '/generated/avatar-ai.webp' : '/generated/luna-chef-portrait.webp'}
                alt={persona === 'ai' ? 'myCHEF AI' : 'Adriano'}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 id={titleId} className="text-sm font-semibold text-white">
                  {persona === 'ai' ? 'myCHEF Concierge' : 'Adriano'}
                </h3>
                {persona === 'ai' && <Sparkles className="h-3 w-3 text-[#C5A028]" aria-hidden="true" />}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                {persona === 'ai' ? 'Digital Assistant' : 'Founder & Executive Chef'}
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeWidget}
            aria-label="Close concierge panel"
            className="p-1 text-white/60 transition-colors hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-4 px-5 py-4">
          <div className="rounded-xl border border-white/5 bg-white/5 p-3">
            <p className="text-xs font-medium leading-relaxed text-white/90">
              {persona === 'ai'
                ? triggerMsg
                : "Hello, I'm Adriano. I oversee every menu at myCHEF. Let me know if I can help you plan something special."}
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#C5A028]">
              {persona === 'ai' ? '⚡ AI Reply' : '✓ Verified Founder'}
            </p>
          </div>

          <div id={optionsId} className="space-y-1 px-1 text-[10px] font-bold uppercase tracking-widest text-white/40">
            Choose a service to chat
          </div>

          <div className="space-y-2" aria-labelledby={optionsId}>
            {SERVICE_OPTIONS.map((option, index) => {
              const Icon = option.icon
              return (
                <button
                  key={option.id}
                  ref={index === 0 ? firstActionRef : undefined}
                  type="button"
                  onClick={() => handleServiceClick(option)}
                  className="group flex w-full items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-left transition-all duration-150 hover:border-[#C5A028]/40 hover:bg-[#C5A028]/10 focus-visible:border-[#C5A028]/60 focus-visible:bg-[#C5A028]/10"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-[#C5A028]/20 group-focus-visible:bg-[#C5A028]/20">
                    <Icon className="h-4 w-4 flex-shrink-0 text-[#C5A028]" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 transition-colors group-hover:text-white group-focus-visible:text-white">{option.label}</span>
                </button>
              )
            })}
          </div>

          <div className="space-y-2 border-t border-[#C5A028]/15 pt-4 text-[11px] font-medium text-white/60">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C5A028]" aria-hidden="true" />
              <span>Replies within 1 hour</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C5A028]" aria-hidden="true" />
              <span>Available across Bali & Jakarta</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
