import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceProof({ proof }: { proof: BarService['proof'] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader title={proof.title} />
        <div className="grid md:grid-cols-3 gap-6">
          {proof.items.map((item, i) => (
            <div key={i} className="border-l-4 border-amber-500 pl-6">
              <p className="text-lg text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
