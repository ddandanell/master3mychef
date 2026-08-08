import { Link } from 'react-router-dom'

export interface PriceCardItem {
  title: string
  price: string
  detail: string
  href?: string
}

const DEFAULT_CARDS: PriceCardItem[] = [
  {
    title: 'Daily villa chef',
    price: 'IDR 1,000,000++',
    detail: '1 meal / day · chef + assistant · groceries at cost',
    href: '/private-chef-bali',
  },
  {
    title: 'Villa dinner',
    price: 'IDR 700K++ / person',
    detail: '3–4 courses · 2–10 guests · full service & cleanup',
    href: '/pricing',
  },
  {
    title: 'BBQ & group catering',
    price: 'IDR 700K++ / person',
    detail: 'Live grill · sides · staffing as scoped',
    href: '/catering/bbq-catering',
  },
]

interface PriceCardsProps {
  cards?: PriceCardItem[]
  /** Show link to full pricing tables */
  showFullLink?: boolean
  className?: string
}

/** Mobile-first price presentation — cards instead of wide tables. */
export default function PriceCards({
  cards = DEFAULT_CARDS,
  showFullLink = true,
  className = '',
}: PriceCardsProps) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map((card) => {
          const inner = (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--u-text-muted)' }}>
                {card.title}
              </p>
              <p className="mt-2 text-xl font-semibold sm:text-2xl" style={{ color: 'var(--u-text)' }}>
                {card.price}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
                {card.detail}
              </p>
            </>
          )
          const shellClass =
            'block rounded-2xl border p-4 sm:p-5 transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A028]'
          const shellStyle = { borderColor: 'var(--u-border)', background: 'var(--u-surface)' as const }
          return card.href ? (
            <Link key={card.title} to={card.href} className={shellClass} style={shellStyle}>
              {inner}
            </Link>
          ) : (
            <div key={card.title} className={shellClass} style={shellStyle}>
              {inner}
            </div>
          )
        })}
      </div>
      {showFullLink && (
        <p className="mt-4 text-center text-sm" style={{ color: 'var(--u-text-muted)' }}>
          All prices ++ (11% tax + 10% service). Groceries at cost with receipts.{' '}
          <Link
            to="/pricing"
            className="font-semibold underline-offset-4 hover:text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
          >
            Full price tables →
          </Link>
        </p>
      )}
    </div>
  )
}
