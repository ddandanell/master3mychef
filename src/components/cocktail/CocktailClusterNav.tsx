import { Link } from 'react-router-dom'
import {
  COCKTAIL_CLUSTER,
  cocktailClusterLinksFrom,
  type CocktailClusterSlug,
} from '@/data/cocktailSeoCluster'

interface CocktailClusterNavProps {
  /** Current page in the cluster — siblings are linked with their primary keyword anchors */
  current: CocktailClusterSlug
  dark?: boolean
  className?: string
  title?: string
}

/**
 * Cross-links the three cocktail URLs using each TARGET page's inbound keyword.
 * Prevents identical anchors and reinforces keyword ownership.
 */
export default function CocktailClusterNav({
  current,
  dark = false,
  className = '',
  title = 'Related cocktail experiences on myCHEF',
}: CocktailClusterNavProps) {
  const links = cocktailClusterLinksFrom(current)
  const self = COCKTAIL_CLUSTER[current]
  const card = dark
    ? 'bg-white/[0.05] border-white/10 hover:border-[#C5A028]/50'
    : 'bg-white border-[#E8E6E3] hover:border-[#C5A028]'
  const heading = dark ? 'text-white' : 'text-[#1A1A1A]'
  const muted = dark ? 'text-white/65' : 'text-[#4A4745]'

  return (
    <nav className={className} aria-label="Cocktail service cluster">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[0.25em] mb-2">
          Keyword-focused cluster
        </p>
        <h2 className={`font-playfair text-2xl md:text-3xl mb-2 ${heading}`}>{title}</h2>
        <p className={`text-sm ${muted}`}>
          This page focuses on <strong className={heading}>{self.primary}</strong>. The links below use
          each sibling page&apos;s own main keyword so Google and guests get a clear path.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`block rounded-2xl border p-6 transition-colors ${card}`}
          >
            <p className="text-[#C5A028] text-xs uppercase tracking-wider mb-2 font-semibold">
              {COCKTAIL_CLUSTER[link.to].cardLabel}
            </p>
            <p className={`font-semibold text-lg mb-2 ${heading}`}>{link.anchor}</p>
            <p className={`text-sm leading-relaxed ${muted}`}>{link.blurb}</p>
          </Link>
        ))}
      </div>
    </nav>
  )
}
