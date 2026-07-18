import { buildWhatsAppUrl } from '@/lib/whatsapp'
import type { BarService } from '@/data/bar-services'

export function BarServiceQuoteBlock({ service }: { service: BarService }) {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Request a quote for {service.h1}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Tell us about your venue and we'll reply with a tailored proposal within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
