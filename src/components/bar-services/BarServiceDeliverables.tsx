import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceDeliverables({
  deliverables,
}: {
  deliverables: BarService['deliverables']
}) {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="What you get"
          title="What we deliver"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-gray-600">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
