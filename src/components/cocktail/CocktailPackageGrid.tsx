import { Link } from 'react-router-dom'
import { Check, MessageCircle } from 'lucide-react'
import OptimizedImage from '@/components/OptimizedImage'
import {
  COCKTAIL_FREE_FLOW_NOTE,
  COCKTAIL_PACKAGES,
  COCKTAIL_TAX_NOTE,
  cocktailPackageWaUrl,
  type CocktailPackage,
} from '@/data/cocktailServicePackages'

interface CocktailPackageGridProps {
  /** Heading above the grid */
  title?: string
  subtitle?: string
  /** Show full inclusion bullets (default true) */
  showInclusions?: boolean
  /** Compact mode for secondary pages */
  compact?: boolean
  dark?: boolean
  className?: string
}

function PackageCard({
  pkg,
  showInclusions,
  dark,
}: {
  pkg: CocktailPackage
  showInclusions: boolean
  dark: boolean
}) {
  const card = dark
    ? 'bg-white/[0.04] border-white/10 text-white'
    : 'bg-white border-[#E8E6E3] text-[#1A1A1A]'
  const muted = dark ? 'text-white/70' : 'text-[#4A4745]'
  const priceColor = dark ? 'text-[#C5A028]' : 'text-[#8A6F15]'

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm ${card} ${
        pkg.highlight ? 'ring-2 ring-[#C5A028]/70' : ''
      }`}
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C5A028] px-3 py-0.5 text-xs font-semibold text-[#1A1A1A]">
          Most popular
        </span>
      )}
      <div className="mb-4 overflow-hidden rounded-xl">
        <OptimizedImage
          src={pkg.image}
          alt={pkg.imageAlt}
          width={600}
          height={450}
          className="h-40 w-full object-cover"
        />
      </div>
      <h3 className="font-playfair text-xl md:text-2xl mb-1">{pkg.name}</h3>
      <p className={`text-sm mb-3 ${muted}`}>{pkg.bestFor}</p>
      <p className={`font-semibold text-2xl mb-1 ${priceColor}`}>{pkg.priceDisplay}</p>
      <p className={`text-xs mb-3 ${muted}`}>per guest · min {pkg.minGuests} guests</p>
      <ul className={`text-sm space-y-1.5 mb-4 ${muted}`}>
        <li>
          <strong className={dark ? 'text-white' : 'text-[#1A1A1A]'}>Duration:</strong>{' '}
          {pkg.durationLabel}
        </li>
        <li>
          <strong className={dark ? 'text-white' : 'text-[#1A1A1A]'}>Alcohol:</strong>{' '}
          {pkg.alcoholShort}
        </li>
        <li>
          <strong className={dark ? 'text-white' : 'text-[#1A1A1A]'}>All-in example:</strong>{' '}
          {pkg.allInDisplay} (incl. tax &amp; service)
        </li>
      </ul>
      {showInclusions && (
        <ul className={`space-y-2 text-sm mb-6 flex-1 ${muted}`}>
          {pkg.inclusions.slice(0, 6).map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#C5A028]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href={cocktailPackageWaUrl(pkg.id)}
        target="_blank"
        rel="noopener noreferrer"
        data-source={`cocktail-package-${pkg.id}`}
        className="mt-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-5 py-3 text-sm font-semibold text-[#1A1A1A] hover:bg-[#D4B43A] transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Quote {pkg.shortName} on WhatsApp
      </a>
    </article>
  )
}

export default function CocktailPackageGrid({
  title = 'Cocktail service packages',
  subtitle = 'Complete mobile cocktail service — not bartender-only hire. Choose four cocktails, then pick BYO, free flow or premium.',
  showInclusions = true,
  compact = false,
  dark = false,
  className = '',
}: CocktailPackageGridProps) {
  const heading = dark ? 'text-white' : 'text-[#1A1A1A]'
  const muted = dark ? 'text-white/70' : 'text-[#4A4745]'

  return (
    <div className={className} id="packages">
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-10">
          {title && (
            <h2 className={`font-playfair text-3xl md:text-4xl mb-3 ${heading}`}>{title}</h2>
          )}
          {subtitle && <p className={`text-base md:text-lg leading-relaxed ${muted}`}>{subtitle}</p>}
        </div>
      )}

      <div
        className={`grid gap-6 ${
          compact ? 'md:grid-cols-3' : 'md:grid-cols-3'
        } max-w-6xl mx-auto`}
      >
        {COCKTAIL_PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} showInclusions={showInclusions && !compact} dark={dark} />
        ))}
      </div>

      <div className={`max-w-3xl mx-auto mt-8 space-y-3 text-sm text-center ${muted}`}>
        <p>{COCKTAIL_TAX_NOTE}</p>
        <p>{COCKTAIL_FREE_FLOW_NOTE}</p>
        <p>
          Prefer craft and custom menus first? See{' '}
          <Link
            to="/in-villa-service/mixology"
            className="text-[#C5A028] hover:underline font-medium"
          >
            private mixology and custom cocktail design in Bali
          </Link>
          . Planning a full social night with food and entertainment?{' '}
          <Link
            to="/experiences/private-cocktail-party"
            className="text-[#C5A028] hover:underline font-medium"
          >
            private cocktail party at your Bali villa
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
