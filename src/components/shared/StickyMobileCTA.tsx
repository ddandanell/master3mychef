import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { PHONE } from '@/data/siteArchitecture'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

interface StickyMobileCTAProps {
  /** Short label shown on the button */
  label?: string
  /** Preferred: service the page is about, e.g. "a private chef in Bali" — builds a qualified message via the shared helper. */
  serviceName?: string
  /** What the visitor wants next, e.g. "pricing and availability". */
  intent?: string
  /** Fallback raw WhatsApp message when serviceName is not provided. */
  message?: string
  /** GA4 page_source value */
  pageSource: string
  /** GA4 service_type value */
  serviceType?: string
  /** Also pin on desktop after the hero has scrolled away. Mobile stays always-on. */
  pinOnDesktop?: boolean
}

/**
 * Fixed 56 px bottom bar visible only on mobile (< md breakpoint) by default.
 * Taps open WhatsApp with a pre-filled message. Prefer passing serviceName/intent
 * so the message is qualified (service + date + guests + area + intent) via the shared helper.
 */
export default function StickyMobileCTA({
  label = 'WhatsApp quote · reply in 2h',
  serviceName,
  intent = 'pricing and availability',
  message = 'Hi myCHEF, I found you on your website and would like a quote.',
  pageSource,
  serviceType: _serviceType = '',
  pinOnDesktop = false,
}: StickyMobileCTAProps) {
  const [desktopPinned, setDesktopPinned] = useState(false)
  const waUrl = serviceName
    ? buildWhatsAppUrl({ serviceName, intent })
    : `https://wa.me/${PHONE.digits}?text=${encodeURIComponent(message)}`

  useEffect(() => {
    if (!pinOnDesktop) return
    const onScroll = () => {
      setDesktopPinned(window.scrollY > Math.min(window.innerHeight * 0.55, 520))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pinOnDesktop])

  const desktopClass = pinOnDesktop
    ? desktopPinned
      ? ''
      : 'md:hidden'
    : 'md:hidden'

  return (
    <div
      data-sticky-mobile-cta
      className={`fixed bottom-0 left-0 right-0 z-50 ${desktopClass}`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-source={`${pageSource}--sticky-mobile-cta`}
        className="flex h-14 min-h-[52px] w-full items-center justify-center gap-2 bg-[#C5A028] text-sm font-semibold uppercase tracking-[1.5px] text-[#1A1A1A] transition-colors hover:bg-[#B08F20] active:bg-[#9A7E1C]"
        aria-label={label}
      >
        <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        <span>{label}</span>
      </a>
    </div>
  )
}
