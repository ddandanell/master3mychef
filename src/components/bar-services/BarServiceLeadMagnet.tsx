import { Download, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function BarServiceLeadMagnet() {
  const checklistUrl = buildWhatsAppUrl({
    serviceName: 'Bar Cost Leak Checklist',
    intent: 'Hi MyChef — please send me the Bar Cost Leak Checklist.',
  })

  return (
    <section className="py-20 md:py-28 bg-[#0F0E0C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#0A0A0A] border border-[#C5A028]/20 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative gold gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A028]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Free resource
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair text-[#F5F2EB] mb-4">
                Get the Bar Cost Leak Checklist
              </h2>
              <p className="text-[#F5F2EB]/60 leading-relaxed max-w-xl">
                A 10-point checklist that shows where most Bali venues lose margin behind the bar — and the exact steps to fix it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[220px]">
              <a
                href={checklistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 bg-[#C5A028] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,40,0.3)]"
              >
                <Download className="w-4 h-4" />
                Send me the checklist
              </a>
              <a
                href={buildWhatsAppUrl({
                  serviceName: 'free 30-minute bar health call',
                  intent: 'Hi MyChef — I would like to book a free 30-minute bar health call.',
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 border border-[#F5F2EB]/20 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 hover:border-[#F5F2EB]/30 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Book a free call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
