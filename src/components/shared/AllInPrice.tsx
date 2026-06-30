interface AllInPriceProps {
  price: number
  suffix?: string
  showPlusPlus?: boolean
  className?: string
}

export function formatIDR(n: number): string {
  if (n >= 1_000_000_000) return `IDR ${(n / 1_000_000_000).toFixed(n % 1_000_000_000 === 0 ? 0 : 1)}B`
  if (n >= 1_000_000) return `IDR ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
  if (n >= 1_000) return `IDR ${n.toLocaleString('id-ID')}`
  return `IDR ${n}`
}

export function formatIDRShort(n: number): string {
  if (n >= 1_000_000) {
    const val = n / 1_000_000
    return val % 1 === 0 ? `${val.toFixed(0)}M` : `${val.toFixed(1)}M`
  }
  if (n >= 1_000) {
    const val = n / 1_000
    return val % 1 === 0 ? `${val.toFixed(0)}K` : `${val.toFixed(0)}K`
  }
  return `${n}`
}

export function calculateAllIn(price: number): number {
  return Math.round(price * 1.21)
}

export default function AllInPrice({ price, suffix = '/person', showPlusPlus = true, className = '' }: AllInPriceProps) {
  const allIn = calculateAllIn(price)

  return (
    <span className={`inline-flex items-baseline gap-1.5 flex-wrap ${className}`}>
      {showPlusPlus && (
        <span className="text-[#4A4745]/60 line-through text-sm">
          {formatIDR(price)}++{suffix}
        </span>
      )}
      <span className="text-[#1A1A1A] font-semibold">
        {formatIDR(allIn)} all-in{suffix}
      </span>
    </span>
  )
}
