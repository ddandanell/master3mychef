import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function BarServiceLeadMagnet() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-serif mb-4">
          Get the Bar Cost Leak Checklist
        </h2>
        <p className="text-gray-700 mb-8">
          A 10-point checklist that shows where most Bali venues lose margin behind the bar — and how to fix it.
        </p>
        <a
          href={buildWhatsAppUrl({ serviceName: 'Bar Cost Leak Checklist', intent: 'Hi MyChef — please send me the Bar Cost Leak Checklist.' })}
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded"
        >
          Send me the checklist
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Or book a free 30-minute bar health call.
        </p>
      </div>
    </section>
  )
}
