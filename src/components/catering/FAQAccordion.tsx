import { useId, useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQ {
  q: string
  a: string
  /** Optional stable anchor id. Auto-generated from the question when omitted. */
  id?: string
}

interface FAQAccordionProps {
  items: FAQ[]
  dark?: boolean
  defaultOpenCount?: number
  /** Show jump-link table of contents above the accordion. Default: true when 8+ items. */
  showToc?: boolean
  tocLabel?: string
  /** Insert a conversion CTA after every N FAQs (default 5). Set 0 to disable. */
  ctaEvery?: number
  /** Override CTA markup. When omitted and ctaEvery > 0, a default myCHEF CTA is used. */
  ctaHtml?: string
}

/** Clean HTML id from a question — stable, readable, SEO-friendly anchors. */
export function faqAnchorId(question: string, fallbackIndex = 0): string {
  const base = question
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’"“”!?.,:;()[\]{}]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72)
  return base || `faq-${fallbackIndex + 1}`
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

const DEFAULT_CTA_HTML = `
  <p class="font-medium text-[#1A1A1A] mb-1">Still deciding?</p>
  <p class="text-sm text-[#4A4745] mb-3 leading-relaxed">
    Send your date, guest count and villa area — we reply within 2 hours with a fixed quote.
  </p>
  <div class="flex flex-wrap gap-2">
    <a href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20a%20quote%20for%20a%20private%20chef%20or%20catering%20in%20Bali."
       target="_blank" rel="noopener noreferrer" data-source="faq-inline-cta"
       class="inline-flex min-h-[40px] items-center rounded-full bg-[#C5A028] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#D4B43A] transition-colors">
      Chat with our chef
    </a>
    <a href="/pricing" class="inline-flex min-h-[40px] items-center rounded-full border border-[#E2DDD2] bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:border-[#C5A028] transition-colors">
      View pricing
    </a>
    <a href="/quote" class="inline-flex min-h-[40px] items-center rounded-full border border-[#E2DDD2] bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:border-[#C5A028] transition-colors">
      Request your quote
    </a>
  </div>
`.trim()

export default function FAQAccordion({
  items,
  dark = false,
  defaultOpenCount = 0,
  showToc,
  tocLabel = 'Jump to a question',
  ctaEvery = 5,
  ctaHtml,
}: FAQAccordionProps) {
  const accordionId = useId()
  const [openSet, setOpenSet] = useState<Set<number>>(() => {
    const s = new Set<number>()
    for (let i = 0; i < Math.min(defaultOpenCount, items.length); i++) s.add(i)
    return s
  })

  const resolved = useMemo(() => {
    const used = new Set<string>()
    return items.map((item, i) => {
      let id = item.id?.trim() || faqAnchorId(item.q, i)
      if (used.has(id)) id = `${id}-${i + 1}`
      used.add(id)
      return { ...item, id }
    })
  }, [items])

  const shouldShowToc = showToc ?? resolved.length >= 8

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
  const tocBg = dark ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAFAF8] border-[#E8E2CF]'
  const ctaBg = dark ? 'bg-white/[0.06] border-white/15' : 'bg-[#FAF6E8] border-[#E8E2CF]'

  return (
    <div className="space-y-4">
      {shouldShowToc && (
        <nav
          aria-label={tocLabel}
          className={`${tocBg} rounded-2xl border p-4 md:p-5`}
        >
          <p
            className={`text-xs uppercase tracking-[0.22em] font-semibold mb-3 ${
              dark ? 'text-[#C5A028]' : 'text-[#8A6F15]'
            }`}
          >
            {tocLabel}
          </p>
          <ol className="grid gap-2 sm:grid-cols-2">
            {resolved.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm leading-snug underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded ${
                    dark ? 'text-white/85 hover:text-white' : 'text-[#2C2A28] hover:text-[#1A1A1A]'
                  }`}
                  onClick={() => {
                    const idx = resolved.findIndex((r) => r.id === item.id)
                    if (idx >= 0) {
                      setOpenSet((prev) => new Set(prev).add(idx))
                    }
                  }}
                >
                  {item.q}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="space-y-3">
        {resolved.map((item, i) => {
          const isOpen = openSet.has(i)
          const buttonId = `${accordionId}-button-${i}`
          const panelId = `${accordionId}-panel-${i}`
          const showCta =
            ctaEvery > 0 && (i + 1) % ctaEvery === 0 && i < resolved.length - 1

          return (
            <div key={item.id} className="space-y-3">
              <div
                id={item.id}
                className={`${bgColor} rounded-xl border overflow-hidden transition-all duration-300 scroll-mt-28 ${
                  isOpen ? 'shadow-sm' : ''
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => toggle(i)}
                  className="flex min-h-[52px] w-full items-start justify-between gap-4 p-4 text-left md:items-center md:p-5 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className={`${textColor} font-medium text-sm md:text-base`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    } ${dark ? 'text-white/[50%]' : 'text-[#4A4745]'}`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className={`${mutedColor} text-sm px-4 md:px-5 pb-4 md:pb-5 leading-relaxed [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5`}
                    dangerouslySetInnerHTML={{ __html: item.a }}
                    data-faq-plain={stripHtml(item.a)}
                  />
                </div>
              </div>

              {showCta && (
                <div
                  className={`${ctaBg} rounded-xl border p-4 md:p-5`}
                  dangerouslySetInnerHTML={{ __html: ctaHtml ?? DEFAULT_CTA_HTML }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
