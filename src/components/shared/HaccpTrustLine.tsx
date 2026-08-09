import { ShieldCheck } from 'lucide-react'
import { siteFacts } from '@/data/siteFacts'

interface HaccpTrustLineProps {
  /** Dark hero overlay (white text) vs light sections */
  dark?: boolean
  /** Compact single-line vs multi-chip */
  variant?: 'line' | 'chips'
  className?: string
}

/**
 * Reusable HACCP trust signal for city heroes, pillars and commercial hubs.
 */
export default function HaccpTrustLine({
  dark = true,
  variant = 'chips',
  className = '',
}: HaccpTrustLineProps) {
  const text = dark ? 'text-white/80' : 'text-[#4A4745]'
  const chip =
    dark
      ? 'border border-white/25 bg-white/5 text-white/85'
      : 'border border-[#E8E6E3] bg-white text-[#1A1A1A]'
  const icon = dark ? 'text-[#C5A028]' : 'text-[#6B8E5A]'

  if (variant === 'line') {
    return (
      <p className={`flex items-center gap-2 text-sm ${text} ${className}`}>
        <ShieldCheck className={`w-4 h-4 shrink-0 ${icon}`} aria-hidden />
        <span>
          <strong className={dark ? 'text-white' : 'text-[#1A1A1A]'}>{siteFacts.haccpShort}</strong>
          {' — '}food safety standard on every booking
        </span>
      </p>
    )
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="list" aria-label="Trust signals">
      <span
        role="listitem"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide ${chip}`}
      >
        <ShieldCheck className={`w-3.5 h-3.5 ${icon}`} aria-hidden />
        {siteFacts.haccpLabel} chefs
      </span>
      <span
        role="listitem"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-medium ${chip}`}
      >
        Fixed upfront pricing
      </span>
      <span
        role="listitem"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-medium ${chip}`}
      >
        Full kitchen cleanup
      </span>
    </div>
  )
}
