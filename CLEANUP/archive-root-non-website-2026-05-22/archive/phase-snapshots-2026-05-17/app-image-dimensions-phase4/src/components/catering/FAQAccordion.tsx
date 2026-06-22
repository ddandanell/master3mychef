import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQ[]
  dark?: boolean
  defaultOpenCount?: number
}

export default function FAQAccordion({ items, dark = false, defaultOpenCount = 0 }: FAQAccordionProps) {
  const accordionId = useId()
  const [openSet, setOpenSet] = useState<Set<number>>(() => {
    const s = new Set<number>()
    for (let i = 0; i < Math.min(defaultOpenCount, items.length); i++) s.add(i)
    return s
  })

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const bgColor = dark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-[#E8E6E3]'
  const textColor = dark ? 'text-white' : 'text-[#1A1A1A]'
  const mutedColor = dark ? 'text-white/[70%]' : 'text-[#4A4745]'

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openSet.has(i)
        const buttonId = `${accordionId}-button-${i}`
        const panelId = `${accordionId}-panel-${i}`

        return (
          <div
            key={i}
            className={`${bgColor} rounded-xl border overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-sm' : ''}`}
          >
            <button
              type="button"
              id={buttonId}
              onClick={() => toggle(i)}
              className="flex min-h-[52px] w-full items-start justify-between gap-4 p-4 text-left md:items-center md:p-5"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className={`${textColor} font-medium text-sm md:text-base`}>{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${dark ? 'text-white/[50%]' : 'text-[#4A4745]'}`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'}`}
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
