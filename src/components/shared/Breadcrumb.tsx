import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: Crumb[]
  className?: string
  theme?: 'light' | 'dark'
  /** Visual-only copy (no nav landmark, hidden from a11y tree). Use when a page shows
   *  the breadcrumb twice — keep one as the real landmark, mark the other decorative. */
  decorative?: boolean
}

export default function Breadcrumb({ items, className = '', theme = 'light', decorative = false }: BreadcrumbProps) {
  const linkClass =
    theme === 'dark'
      ? 'text-white/[60%] hover:text-white'
      : 'text-[#4A4745]/80 hover:text-[#1A1A1A]'
  const currentClass = theme === 'dark' ? 'text-white font-medium' : 'text-[#1A1A1A] font-medium'
  const separatorClass = theme === 'dark' ? 'text-white/[30%]' : 'text-[#4A4745]/30'

  const Wrapper = (decorative ? 'div' : 'nav') as 'div'

  return (
    <Wrapper aria-label={decorative ? undefined : 'Breadcrumb'} aria-hidden={decorative || undefined} className={cn('py-4 px-6', className)}>
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li>
          <Link
            to="/"
            className={cn('inline-flex items-center justify-center gap-1 min-h-[48px] min-w-[48px] lg:min-h-[44px] lg:min-w-[44px] px-2 -ml-2 rounded transition-colors', linkClass)}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className={cn('w-3.5 h-3.5 flex-shrink-0', separatorClass)} />
            {item.href ? (
              <Link to={item.href} className={cn('inline-flex items-center min-h-[48px] lg:min-h-[32px] px-1 rounded transition-colors', linkClass)}>
                {item.label}
              </Link>
            ) : (
              <span className={cn('inline-flex items-center min-h-[48px] lg:min-h-[32px] px-1', currentClass)}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </Wrapper>
  )
}
