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
}

/**
 * Fixed 56 px bottom bar visible only on mobile (< md breakpoint).
 * Taps open WhatsApp with a pre-filled message. Prefer passing serviceName/intent
 * so the message is qualified (service + date + guests + area + intent) via the shared helper.
 */
export default function StickyMobileCTA({
  label = 'Get a Free Quote via WhatsApp',
  serviceName,
  intent,
  message = 'Hi! I found you on your website and would like a quote.',
  pageSource,
  serviceType: _serviceType = '',
}: StickyMobileCTAProps) {
  const waUrl = serviceName
    ? buildWhatsAppUrl({ serviceName, intent })
    : `https://wa.me/${PHONE.digits}?text=${encodeURIComponent(message)}`

  return (
    <div data-sticky-mobile-cta className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-source={`${pageSource}--sticky-mobile-cta`}
        className="flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[1.5px] h-14 w-full hover:bg-[#B08F20] active:bg-[#9A7E1C] transition-colors"
        aria-label={label}
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <span>{label}</span>
      </a>
    </div>
  )
}
