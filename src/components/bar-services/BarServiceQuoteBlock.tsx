import { Quote } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import type { BarService } from '@/data/bar-services'

export function BarServiceQuoteBlock({ service }: { service: BarService }) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,40,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-16 h-16 md:w-20 md:h-20 text-[#C5A028]/20 mx-auto mb-8 rotate-180" strokeWidth={1.5} />

        <blockquote className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#F5F2EB] leading-tight mb-8">
            Great bars don't happen by accident. They happen when seasoned operators design every pour, every process, and every guest moment with intention.
          </p>
          <footer className="text-[#C5A028] text-sm md:text-base uppercase tracking-[0.2em] font-medium">
            — The MyChef Bar Team
          </footer>
        </blockquote>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={buildWhatsAppUrl({ serviceName: service.h1, intent: service.whatsappMessage })}
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-[#C5A028] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,40,0.35)] hover:-translate-y-0.5"
          >
            Start the Conversation
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 hover:border-[#F5F2EB]/50 font-medium rounded transition-all duration-300 hover:-translate-y-0.5"
          >
            Get a Written Quote
          </a>
        </div>
      </div>
    </section>
  )
}
