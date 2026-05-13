// Reusable "Best Partner 2026" diploma badge.
// Dark variant (default) shows the badge as-is (grey laurel on light/transparent).
// Light variant inverts it for dark page backgrounds.

interface Props {
  /** "dark" = page has a light background (use badge as-is, dark ink on transparent).
   *  "light" = page has a dark background (badge inverted to white ink). */
  variant?: 'dark' | 'light'
  /** Approximate displayed width in px (preserves aspect). */
  width?: number
  className?: string
}

export default function BestPartnerBadge({ variant = 'dark', width = 220, className = '' }: Props) {
  return (
    <img
      src="/generated/best-partner-2026.png"
      alt="Awarded Best Partner 2026 — myCHEF Private Villa Dining"
      width={width}
      style={{
        width,
        height: 'auto',
        filter: variant === 'light' ? 'invert(1) brightness(1.4) opacity(0.9)' : 'opacity(0.9)',
      }}
      className={`inline-block select-none ${className}`}
      loading="lazy"
    />
  )
}
