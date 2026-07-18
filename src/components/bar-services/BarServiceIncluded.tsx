import { Check } from 'lucide-react'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceIncluded({ included }: { included: BarService['included'] }) {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="What's included"
          title="Everything in the programme"
        />
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
