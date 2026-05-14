import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQ[]
  dark?: boolean
}

export default function FAQAccordion({ items, dark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const bgColor = dark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-[#E8E6E3]'
  const textColor = dark ? 'text-white' : 'text-[#1A1A1A]'
  const mutedColor = dark ? 'text-white/70' : 'text-[#4A4745]'

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`${bgColor} rounded-xl border overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-sm' : ''}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`${textColor} font-medium text-sm md:text-base`}>{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${dark ? 'text-white/50' : 'text-[#4A4745]'}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className={`${mutedColor} text-sm px-4 md:px-5 pb-4 md:pb-5 leading-relaxed`}>
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
