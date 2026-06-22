import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export interface StrategicLinkCard {
  eyebrow?: string
  title: string
  description: string
  href: string
}

interface StrategicLinksSectionProps {
  eyebrow?: string
  title: string
  description: string
  cards: StrategicLinkCard[]
  className?: string
  gridClassName?: string
}

export default function StrategicLinksSection({
  eyebrow = 'Internal links',
  title,
  description,
  cards,
  className = 'py-16 px-6 bg-white border-t border-[#E8E6E3]',
  gridClassName = 'mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4',
}: StrategicLinksSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-[720px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A028]">{eyebrow}</p>
          <h2 className="mt-3 font-playfair text-3xl md:text-4xl text-[#1A1A1A]">{title}</h2>
          <p className="mt-4 text-base leading-7 text-[#4A4745]">{description}</p>
        </div>

        <div className={gridClassName}>
          {cards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="group rounded-[24px] border border-black/5 bg-[#FAFAF8] px-5 py-6 transition hover:border-[#C5A028] hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A028]">
                {card.eyebrow ?? 'myCHEF'}
              </p>
              <h3 className="mt-3 font-playfair text-2xl leading-tight text-[#1A1A1A]">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4A4745]">{card.description}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1A1A1A] transition group-hover:text-[#C5A028]">
                Open page <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
