import { buildWhatsAppUrl } from '@/lib/whatsapp'
import OptimizedImage from '@/components/OptimizedImage'
import type { BarService } from '@/data/bar-services'

export function BarServiceHero({ service }: { service: BarService }) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <OptimizedImage
        src={service.heroImage}
        alt={service.heroAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative container mx-auto px-4 py-24">
        <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
          {service.eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-3xl">
          {service.h1}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          {service.valueProp}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={buildWhatsAppUrl({ serviceName: service.h1, intent: service.whatsappMessage })}
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
          >
            WhatsApp Us
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded"
          >
            Get a Written Quote
          </a>
        </div>
      </div>
    </section>
  )
}
