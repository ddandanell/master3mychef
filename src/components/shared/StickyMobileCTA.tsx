import { MessageCircle } from 'lucide-react'
import { PHONE } from '@/data/siteArchitecture'
import { trackWhatsAppClick } from '@/lib/analytics'

interface StickyMobileCTAProps {
  /** Short label shown on the button */
  label?: string
  /** WhatsApp pre-filled message */
  message?: string
  /** GA4 page_source value */
  pageSource: string
  /** GA4 service_type value */
  serviceType?: string
}

/**
 * Fixed 56 px bottom bar visible only on mobile (< md breakpoint).
 * Taps open WhatsApp with a pre-filled message.
 */
export default function StickyMobileCTA({
  label = 'Get a Free Quote via WhatsApp',
  message = 'Hi! I found you on your website and would like a quote.',
  pageSource,
  serviceType = '',
}: StickyMobileCTAProps) {
  const waUrl = `https://wa.me/${PHONE.digits}?text=${encodeURIComponent(message)}`

  function handleClick() {
    trackWhatsAppClick(`${pageSource}--sticky-mobile-cta`)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[1.5px] h-14 w-full hover:bg-[#B08F20] active:bg-[#9A7E1C] transition-colors"
        aria-label={label}
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <span>{label}</span>
      </a>
    </div>
  )
}
