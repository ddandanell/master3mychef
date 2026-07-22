import { ChevronDown, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import OptimizedImage from '@/components/OptimizedImage'
import type { BarService } from '@/data/bar-services'

export function BarServiceHero({ service }: { service: BarService }) {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden pt-16 md:pt-20">
      {/* Cinematic background image */}
      <OptimizedImage
        src={service.heroImage}
        alt={service.heroAlt}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />

      {/* Strong dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/30" />

      {/* Warm noise/texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        {/* Amber eyebrow pill */}
        <span className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#0A0A0A] bg-[#C5A028] rounded-full">
          {service.eyebrow}
        </span>

        {/* Large serif headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-[#F5F2EB] mb-6 max-w-4xl">
          {service.h1}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#F5F2EB]/85 max-w-2xl mb-10 leading-relaxed">
          {service.valueProp}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={buildWhatsAppUrl({ serviceName: service.h1, intent: service.whatsappMessage })}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 bg-[#C5A028] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,40,0.35)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 hover:border-[#F5F2EB]/50 font-medium rounded transition-all duration-300 hover:-translate-y-0.5"
          >
            Get a Written Quote
          </a>
        </div>
      </div>

      {/* Scroll-down chevron */}
      <a
        href="#content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5F2EB]/60 hover:text-[#C5A028] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
