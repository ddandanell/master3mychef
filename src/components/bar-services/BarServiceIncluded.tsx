import { Check } from 'lucide-react'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceIncluded({ included }: { included: BarService['included'] }) {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BarServiceSectionHeader
          eyebrow="What's included"
          title="Everything in the programme"
          variant="dark"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {included.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-[#1A1A1A]/50 border border-[#F5F2EB]/10 backdrop-blur-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:bg-[#1A1A1A]/70"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-[#C5A028]" strokeWidth={2.5} />
              </span>
              <span className="text-[#F5F2EB]/90 text-sm md:text-base leading-relaxed pt-1">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
