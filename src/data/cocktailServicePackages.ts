/**
 * Consumer cocktail service packages — single source of truth.
 *
 * Blueprint supplier floor rates were doubled (+100%) for myCHEF retail
 * pricing (owner direction Aug 2026). Never sell hourly bartender-only hire
 * on consumer pages — these complete packages are the product.
 *
 * All published prices are ++ (10% service + 11% government tax).
 */

import { TAX_SERVICE_MULTIPLIER } from '@/data/siteFacts'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

export type CocktailPackageId = 'byo' | 'free-flow' | 'premium'

export interface CocktailPackage {
  id: CocktailPackageId
  name: string
  shortName: string
  /** Net package price per guest before ++ */
  priceIdr: number
  priceDisplay: string
  durationHours: number
  durationLabel: string
  minGuests: number
  alcoholRule: string
  alcoholShort: string
  highlight?: boolean
  bestFor: string
  inclusions: string[]
  exclusions: string[]
  image: string
  imageAlt: string
  allInExampleIdr: number
  allInDisplay: string
}

export interface CocktailMenuGroup {
  id: string
  name: string
  role: string
  examples: string[]
}

const formatIdr = (n: number) =>
  `IDR ${n.toLocaleString('en-US')}`

/** Retail packages (supplier blueprint × 2). */
export const COCKTAIL_PACKAGES: CocktailPackage[] = [
  {
    id: 'byo',
    name: 'BYO Cocktail Service',
    shortName: 'BYO',
    priceIdr: 500_000,
    priceDisplay: 'IDR 500,000++',
    durationHours: 6,
    durationLabel: '6 hours',
    minGuests: 10,
    alcoholRule:
      'Client supplies spirits. myCHEF supplies the full operating bar service and all non-alcohol components.',
    alcoholShort: 'Client supplies spirits',
    bestFor: 'Hosts who already have bottles or prefer duty-free / own-sourced spirits',
    inclusions: [
      'Four cocktails selected in advance',
      'Professional bartender team scaled to guest count',
      'Mobile bar tools and service equipment',
      'Cocktail glassware',
      'Soft drinks, juices and mixers',
      'Good-quality ice',
      'Fresh fruits, herbs, syrups and garnishes for the selected menu',
      'Preparation, bar setup, service and standard cleanup',
      'Itemized spirits shopping list (bottle types and estimated quantities)',
    ],
    exclusions: [
      'Spirits / alcohol',
      'Premium or rare bottle upgrades',
      'Venue rental, furniture or decorative bar counter (unless quoted)',
      'Food, entertainment and guest transport outside the included service area',
      'Overtime beyond six hours',
      'Replacement costs for client-caused breakage',
    ],
    image: '/generated/byo-cocktail-service-bali.webp',
    imageAlt: 'BYO cocktail bar setup with mixers, glassware and fresh garnishes at a Bali villa',
    allInExampleIdr: Math.round(500_000 * TAX_SERVICE_MULTIPLIER),
    allInDisplay: formatIdr(Math.round(500_000 * TAX_SERVICE_MULTIPLIER)),
  },
  {
    id: 'free-flow',
    name: 'Cocktail Free Flow',
    shortName: 'Free Flow',
    priceIdr: 1_300_000,
    priceDisplay: 'IDR 1,300,000++',
    durationHours: 4,
    durationLabel: '4 hours free flow',
    minGuests: 10,
    alcoholRule: 'Standard spirits included for the approved four-cocktail menu.',
    alcoholShort: 'Standard spirits included',
    highlight: true,
    bestFor: 'Villa parties, birthdays, sunset gatherings and celebrations',
    inclusions: [
      'Four pre-selected cocktails',
      'Standard spirits included for the approved menu',
      'Professional bartender team',
      'Complete mobile bar tools and equipment',
      'Cocktail glassware',
      'Soft drinks, juices and mixers',
      'Good-quality ice',
      'Fresh garnishes, herbs and syrups',
      'Setup, continuous service and standard cleanup',
    ],
    exclusions: [
      'Premium or rare bottle upgrades beyond the standard spirit tier',
      'Food, entertainment and decorative bar structures unless quoted',
      'Overtime beyond four hours',
      'Service to minors or intoxicated guests',
    ],
    image: '/generated/free-flow-cocktails-bali.webp',
    imageAlt: 'Guests enjoying four-hour free-flow cocktails at a Bali villa party',
    allInExampleIdr: Math.round(1_300_000 * TAX_SERVICE_MULTIPLIER),
    allInDisplay: formatIdr(Math.round(1_300_000 * TAX_SERVICE_MULTIPLIER)),
  },
  {
    id: 'premium',
    name: 'Premium Cocktail Free Flow',
    shortName: 'Premium',
    priceIdr: 1_700_000,
    priceDisplay: 'IDR 1,700,000++',
    durationHours: 6,
    durationLabel: '6 hours free flow',
    minGuests: 10,
    alcoholRule: 'Premium spirit tier included for the approved menu, with elevated presentation.',
    alcoholShort: 'Premium spirits included',
    bestFor: 'Weddings, high-end villas, milestone birthdays and corporate receptions',
    inclusions: [
      'Four pre-selected cocktails',
      'Premium spirit tier for the approved menu',
      'Six-hour free-flow service window',
      'Professional bartender team scaled to the event',
      'Complete mobile bar equipment and cocktail glassware',
      'Soft drinks, premium mixers and fresh juices',
      'Good-quality ice',
      'Fresh garnishes, herbs, house syrups and elevated presentation',
      'Setup, service and standard cleanup',
    ],
    exclusions: [
      'Named luxury brands not confirmed in the written quote',
      'Food, entertainment and decorative structures unless quoted',
      'Overtime beyond six hours',
      'Service to minors or intoxicated guests',
    ],
    image: '/generated/premium-cocktail-service-bali.webp',
    imageAlt: 'Premium six-hour cocktail service for a Bali wedding or luxury villa event',
    allInExampleIdr: Math.round(1_700_000 * TAX_SERVICE_MULTIPLIER),
    allInDisplay: formatIdr(Math.round(1_700_000 * TAX_SERVICE_MULTIPLIER)),
  },
]

export const COCKTAIL_MENU_GROUPS: CocktailMenuGroup[] = [
  {
    id: 'fresh-classics',
    name: 'Fresh classics',
    role: 'Fast, recognizable, villa-friendly',
    examples: ['Mojito', 'Margarita', 'Daiquiri', 'Moscow Mule'],
  },
  {
    id: 'modern-favorites',
    name: 'Modern favorites',
    role: 'Premium perception and broad appeal',
    examples: ['Espresso Martini', 'Cosmopolitan', 'Whiskey Sour', 'Aperol Spritz'],
  },
  {
    id: 'tropical',
    name: 'Tropical',
    role: 'Bali setting and pool parties',
    examples: ['Piña Colada', 'Mai Tai', 'Passionfruit Martini', 'Mango Mojito'],
  },
  {
    id: 'spirit-forward',
    name: 'Spirit-forward',
    role: 'Best for premium package or controlled service',
    examples: ['Negroni', 'Old Fashioned'],
  },
  {
    id: 'zero-proof',
    name: 'Zero-proof',
    role: 'Non-drinkers, drivers, families and wellness events',
    examples: ['Virgin Mojito', 'Tropical Cooler', 'Citrus Fizz', 'Lychee Sparkler'],
  },
  {
    id: 'bali-signatures',
    name: 'Bali signatures',
    role: 'Local ingredients and a Bali story',
    examples: [
      'Lemongrass and Kaffir Gimlet',
      'Spiced Tamarind Margarita',
      'Young Coconut Colada',
    ],
  },
]

export const COCKTAIL_TAX_NOTE =
  'All package prices are ++ (10% service charge + 11% government tax). Your written quote states the full all-in total.'

export const COCKTAIL_FREE_FLOW_NOTE =
  '“Free flow” means unlimited preparation from the agreed four-cocktail menu during the booked window, subject to stock planning, responsible service, guest safety and venue rules. We do not serve minors or intoxicated guests.'

export const COCKTAIL_CHOOSE_FOUR_NOTE =
  'Choose four cocktails. We recommend the best combination for your package, guest profile and event style. Sparkling wine, premium liqueurs, egg white, rare bitters or labour-intensive garnishes may require an upgrade confirmed on the quote.'

export const COCKTAIL_MIN_GUESTS = 10
export const COCKTAIL_PRICE_FLOOR_DISPLAY = 'IDR 500,000++'
export const COCKTAIL_PRICE_FLOOR_IDR = 500_000
export const COCKTAIL_PRICE_CEILING_IDR = 1_700_000

/**
 * Prefer proven live cocktail-party assets for hero/proof (high-end villa style),
 * plus style-matched package shots for the commercial grid.
 */
export const COCKTAIL_IMAGE_PATHS = {
  /** Live page hero — keep for brand consistency */
  hero: '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
  heroAlt:
    'Professional bartender pouring a cocktail at a luxury Bali villa infinity pool at sunset',
  /** Live page mobile bar detail */
  process: '/generated/mychef-cocktail-party-mobile-bar-detail-bali-landscape.webp',
  processAlt: 'Premium cocktail tools and spirit bottles on a candlelit villa bar cart',
  menu: '/generated/four-cocktail-menu-bali.webp',
  menuAlt: 'Selection of four handcrafted cocktails for a private Bali villa event',
  /** Live page team/setup portrait */
  team: '/generated/mychef-cocktail-party-bartenders-setup-bali-portrait.webp',
  teamAlt: 'myCHEF bartenders preparing glassware and ice at a luxury Bali villa bar',
  /** Live page cocktails + canapés */
  crossSell: '/generated/mychef-cocktail-party-cocktails-canapes-bali-landscape.webp',
  crossSellAlt: 'Cocktails and canapés on a villa counter overlooking infinity pool and ocean',
  /** OG / social */
  og: '/generated/bartender-hire-bali-cocktail-party.webp',
  ogAlt: 'Private cocktail party at a luxury Bali villa poolside bar at night',
} as const

export function getCocktailPackage(id: CocktailPackageId): CocktailPackage {
  const pkg = COCKTAIL_PACKAGES.find((p) => p.id === id)
  if (!pkg) throw new Error(`Unknown cocktail package: ${id}`)
  return pkg
}

export function cocktailPackageWaMessage(
  packageId: CocktailPackageId | 'recommend' = 'recommend',
): string {
  const packageLabel =
    packageId === 'recommend'
      ? 'please recommend'
      : packageId === 'byo'
        ? 'BYO 500K++'
        : packageId === 'free-flow'
          ? '4-hour free flow 1.3M++'
          : '6-hour premium 1.7M++'

  return (
    `Hello myCHEF, I would like a cocktail-service quote. ` +
    `Date: __. Villa/area: __. Guests: __. ` +
    `Package: ${packageLabel}. Event type: __.`
  )
}

export function cocktailPackageWaUrl(
  packageId: CocktailPackageId | 'recommend' = 'recommend',
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    cocktailPackageWaMessage(packageId),
  )}`
}

/** Schema.org Service + AggregateOffer for the three packages. */
export function cocktailServiceAggregateOfferSchema(params: {
  name: string
  description: string
  url: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: 'myCHEF',
      url: 'https://mychef.id',
      telephone: '+62 896-7407-2020',
      email: 'bali@mychef.id',
    },
    areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Bali'],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: String(COCKTAIL_PRICE_FLOOR_IDR),
      highPrice: String(COCKTAIL_PRICE_CEILING_IDR),
      offerCount: String(COCKTAIL_PACKAGES.length),
      unitText: 'per guest',
      description:
        'BYO Cocktail Service IDR 500,000++ / guest (6h); Cocktail Free Flow IDR 1,300,000++ / guest (4h); Premium Cocktail Free Flow IDR 1,700,000++ / guest (6h). Minimum 10 guests. Subject to 10% service + 11% tax.',
      availability: 'https://schema.org/InStock',
      url: params.url,
    },
    url: params.url,
  }
}
