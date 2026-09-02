import { useState, useEffect, useCallback } from 'react'
import { MessageCircle, X, Gift } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { PHONE } from '@/data/siteArchitecture'
import { trackEvent } from '@/lib/analytics'

const SESSION_KEY = 'mychef_exit_popup_shown'

// Pages where the popup should NOT fire (booking flow, legal, utility)
const EXCLUDED_PATHS = new Set([
  '/quote',
  '/book',
  '/calculator',
  '/privacy',
  '/terms',
  '/cancellation',
  '/contact',
  '/404',
  '/experiences/cooking-class',
  '/experiences/private-cooking-class',
])

const HOME_TIMER_MS = 25_000
const OTHER_TIMER_MS = 25_000

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  const shouldSkip = useCallback(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return true
    if (EXCLUDED_PATHS.has(location.pathname)) return true
    return false
  }, [location.pathname])

  const trigger = useCallback(() => {
    if (shouldSkip()) return
    setVisible(true)
    sessionStorage.setItem(SESSION_KEY, '1')
    trackEvent('exit_intent_shown', { page_source: location.pathname })
  }, [shouldSkip, location.pathname])

  useEffect(() => {
    if (shouldSkip()) return

    const isHome = location.pathname === '/'
    let armed = !isHome
    let timer: ReturnType<typeof setTimeout> | undefined

    const startTimer = () => {
      if (timer) return
      timer = setTimeout(trigger, isHome ? HOME_TIMER_MS : OTHER_TIMER_MS)
    }

    const arm = () => {
      if (armed) return
      armed = true
      startTimer()
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && armed) trigger()
    }

    if (!isHome) {
      startTimer()
      document.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave)
        if (timer) clearTimeout(timer)
      }
    }

    // Homepage: never cover the hero or the first-screen chef vs catering cards.
    // Arm only after those cards have been scrolled past, then allow the 25s
    // timer and top-edge exit intent.
    const pastFirstScreen = () => {
      const cores = document.getElementById('two-cores')
      if (cores) {
        const rect = cores.getBoundingClientRect()
        return rect.bottom < 48
      }
      return window.scrollY >= window.innerHeight
    }

    const onScroll = () => {
      if (pastFirstScreen()) arm()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timer) clearTimeout(timer)
    }
  }, [shouldSkip, trigger, location.pathname])

  if (!visible) return null

  const waUrl = `https://wa.me/${PHONE.digits}?text=${encodeURIComponent(
    "Hi myCHEF! I'd love to get the free Bali Private Chef Price Guide and learn about your services."
  )}`

  function handleClose() {
    setVisible(false)
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free Bali Private Chef Price Guide"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div
        className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(197,160,40,0.12)' }}>
          <Gift className="w-7 h-7" style={{ color: '#C5A028' }} />
        </div>

        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-2"
          style={{ color: '#C5A028', fontFamily: "'Cormorant Garamond', serif" }}
        >
          Free Resource
        </p>

        {/* Headline */}
        <h2
          className="text-2xl font-bold mb-3 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
        >
          Bali Private Chef<br />Price Guide 2026
        </h2>

        {/* Body */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Exact pricing by service type, guest count &amp; Bali area — plus the questions
          every guest forgets to ask before booking. Built from 560+ events and 500+ villa bookings.
        </p>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-source="exit-intent-popup"
          onClick={handleClose}
          className="flex items-center justify-center gap-2 w-full px-6 py-4 text-[#1A1A1A] font-semibold text-sm uppercase tracking-widest rounded-full transition-colors mb-3"
          style={{ background: '#C5A028' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#B08F20')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#C5A028')}
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          Send Me the Price Guide
        </a>

        {/* Dismiss */}
        <button
          onClick={handleClose}
          className="text-xs text-gray-400 hover:text-gray-500 transition-colors"
        >
          No thanks, I'll figure it out myself
        </button>
      </div>
    </div>
  )
}
