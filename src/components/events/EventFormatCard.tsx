import { Check } from 'lucide-react'
import type { ReactNode } from 'react'

interface EventFormatCardProps {
  title: string
  price: ReactNode
  guestRange: string
  description: string
  features: string[]
  accent?: string
  highlighted?: boolean
}

export default function EventFormatCard({
  title,
  price,
  guestRange,
  description,
  features,
  accent = '#C5A028',
  highlighted = false,
}: EventFormatCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 transition-all hover:shadow-lg ${
        highlighted
          ? 'bg-[#0A0A0A] border-[#C5A028]/30 text-white'
          : 'bg-white border-[#E8E6E3] text-[#1A1A1A]'
      }`}
    >
      <h3
        className={`text-xl md:text-2xl mb-2 ${highlighted ? 'text-white' : 'text-[#1A1A1A]'}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="font-semibold text-lg mb-1" style={{ color: accent }}>
        {price}
      </p>
      <p className={`text-sm mb-4 ${highlighted ? 'text-white/60' : 'text-[#4A4745]'}`}>
        {guestRange}
      </p>
      <p className={`text-sm mb-5 leading-relaxed ${highlighted ? 'text-white/70' : 'text-[#4A4745]'}`}>
        {description}
      </p>
      <div className="space-y-2">
        {features.map((item) => (
          <div key={item} className={`flex items-center gap-2 text-sm ${highlighted ? 'text-white/80' : 'text-[#4A4745]'}`}>
            <Check className="w-4 h-4 flex-shrink-0" style={{ color: accent }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
