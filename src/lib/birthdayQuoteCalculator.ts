/**
 * Birthday quote calculator — pure logic (food-first pricing model).
 * Prices are recommended sell rates before tax & service (++).
 */

export type FoodPackageId = 'indonesian' | 'international' | 'surfturf'
export type DecorLevel = 'none' | 'essential' | 'standard' | 'premium'

export const FOOD_PACKAGES: Record<
  FoodPackageId,
  { id: FoodPackageId; name: string; shortName: string; baseRate: number; description: string; highlights: string[] }
> = {
  indonesian: {
    id: 'indonesian',
    name: 'Indonesian',
    shortName: 'Indonesian',
    baseRate: 650_000,
    description:
      'Classic Indonesian BBQ & buffet favourites — sate, ikan bakar, nasi kuning, gado-gado and more.',
    highlights: ['Sate & ikan bakar', 'Nasi kuning / rice', 'Gado-gado & sides', 'Standard birthday cake'],
  },
  international: {
    id: 'international',
    name: 'International',
    shortName: 'International',
    baseRate: 800_000,
    description:
      'Premium international BBQ — Australian beef, lamb, salmon, prawns and gourmet sides. Most popular mid-tier.',
    highlights: ['Australian beef & lamb', 'Salmon & prawns', 'Gourmet sides', 'Standard birthday cake'],
  },
  surfturf: {
    id: 'surfturf',
    name: 'Surf & Turf / Seafood',
    shortName: 'Surf & Turf',
    baseRate: 1_050_000,
    description:
      'Highest tier — Wagyu or premium steak with lobster / king prawns / premium fish and elevated sides.',
    highlights: ['Wagyu or premium steak', 'Lobster / king prawns', 'Elevated sides', 'Standard birthday cake'],
  },
}

export const FOOD_INCLUSIONS = [
  'Professional chef + kitchen team',
  'All ingredients',
  'Cooking equipment',
  'Service staff',
  'Full setup and complete cleanup',
  'Standard birthday cake',
] as const

export const MIN_GUESTS = 10
export const CAKE_UPGRADE_DEFAULT = 3_000_000
export const CAKE_UPGRADE_MIN = 2_500_000
export const CAKE_UPGRADE_MAX = 4_000_000

export const ADDON_PRICES = {
  dj: 6_500_000,
  decorEssential: 2_200_000,
  decorStandard: 4_500_000,
  decorPremium: 7_500_000,
  openBarPerPerson: 550_000,
  photographer: 3_200_000,
  coordinator: 2_000_000,
} as const

export interface BirthdayQuoteInput {
  guests: number
  food: FoodPackageId | null
  dj: boolean
  decor: DecorLevel
  openBar: boolean
  photographer: boolean
  coordinator: boolean
  cakeUpgrade: boolean
  cakeUpgradePrice?: number
}

export interface BirthdayLineItem {
  key: string
  label: string
  detail?: string
  amount: number
}

export interface BirthdayQuoteResult {
  valid: boolean
  error?: string
  guests: number
  food: FoodPackageId | null
  baseRate: number
  discount: number
  discountLabel: string | null
  effectiveRate: number
  foodTotal: number
  lines: BirthdayLineItem[]
  subtotal: number
  estimatedWithTaxService: number
}

/** Full Indonesian-style amount: IDR 18.240.000 */
export function formatIDRFull(n: number): string {
  return `IDR ${Math.round(n).toLocaleString('id-ID')}`
}

export function foodVolumeDiscount(guests: number): number {
  if (guests >= 40) return 0.1
  if (guests >= 20) return 0.05
  return 0
}

export function foodVolumeDiscountLabel(guests: number): string | null {
  if (guests >= 40) return '10% volume discount applied'
  if (guests >= 20) return '5% volume discount applied'
  return null
}

export function decorAmount(decor: DecorLevel): number {
  if (decor === 'essential') return ADDON_PRICES.decorEssential
  if (decor === 'standard') return ADDON_PRICES.decorStandard
  if (decor === 'premium') return ADDON_PRICES.decorPremium
  return 0
}

export function decorLabel(decor: DecorLevel): string | null {
  if (decor === 'essential') return 'Decoration – Essential'
  if (decor === 'standard') return 'Decoration – Standard Villa'
  if (decor === 'premium') return 'Decoration – Premium Themed'
  return null
}

export function calculateBirthdayQuote(input: BirthdayQuoteInput): BirthdayQuoteResult {
  const guests = Math.floor(Number(input.guests) || 0)

  if (guests < MIN_GUESTS) {
    return {
      valid: false,
      error: 'Minimum 10 guests required',
      guests,
      food: input.food,
      baseRate: 0,
      discount: 0,
      discountLabel: null,
      effectiveRate: 0,
      foodTotal: 0,
      lines: [],
      subtotal: 0,
      estimatedWithTaxService: 0,
    }
  }

  if (!input.food) {
    return {
      valid: false,
      error: 'Select a food package to see your total',
      guests,
      food: null,
      baseRate: 0,
      discount: 0,
      discountLabel: null,
      effectiveRate: 0,
      foodTotal: 0,
      lines: [],
      subtotal: 0,
      estimatedWithTaxService: 0,
    }
  }

  const pkg = FOOD_PACKAGES[input.food]
  const baseRate = pkg.baseRate
  const discount = foodVolumeDiscount(guests)
  const discountLabel = foodVolumeDiscountLabel(guests)
  const effectiveRate = Math.round(baseRate * (1 - discount))
  const foodTotal = effectiveRate * guests

  const lines: BirthdayLineItem[] = [
    {
      key: 'food',
      label: `Food (${pkg.shortName})`,
      detail: `${guests} guests × ${formatIDRFull(effectiveRate).replace('IDR ', '')}`,
      amount: foodTotal,
    },
  ]

  if (input.dj) {
    lines.push({
      key: 'dj',
      label: 'DJ Package (4 hours)',
      amount: ADDON_PRICES.dj,
    })
  }

  const dLabel = decorLabel(input.decor)
  const dAmt = decorAmount(input.decor)
  if (dLabel && dAmt > 0) {
    lines.push({
      key: 'decor',
      label: dLabel,
      amount: dAmt,
    })
  }

  if (input.openBar) {
    const openBarTotal = ADDON_PRICES.openBarPerPerson * guests
    lines.push({
      key: 'openBar',
      label: 'Open Bar (3 hours)',
      detail: `${guests} guests × ${formatIDRFull(ADDON_PRICES.openBarPerPerson).replace('IDR ', '')}`,
      amount: openBarTotal,
    })
  }

  if (input.photographer) {
    lines.push({
      key: 'photographer',
      label: 'Photographer (2 hours)',
      amount: ADDON_PRICES.photographer,
    })
  }

  if (input.coordinator) {
    lines.push({
      key: 'coordinator',
      label: 'Day-of Coordinator',
      amount: ADDON_PRICES.coordinator,
    })
  }

  if (input.cakeUpgrade) {
    const cakePrice = Math.min(
      CAKE_UPGRADE_MAX,
      Math.max(CAKE_UPGRADE_MIN, input.cakeUpgradePrice ?? CAKE_UPGRADE_DEFAULT),
    )
    lines.push({
      key: 'cake',
      label: 'Custom 3-Tier Cake Upgrade',
      amount: cakePrice,
    })
  }

  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0)
  // 11% tax + 10% service ≈ ×1.21 for estimate only (not shown as official total)
  const estimatedWithTaxService = Math.round(subtotal * 1.21)

  return {
    valid: true,
    guests,
    food: input.food,
    baseRate,
    discount,
    discountLabel,
    effectiveRate,
    foodTotal,
    lines,
    subtotal,
    estimatedWithTaxService,
  }
}

export function buildBirthdayWhatsAppMessage(result: BirthdayQuoteResult, area = 'not sure yet', date = 'not sure yet'): string {
  if (!result.valid || !result.food) {
    return `Hi myCHEF, I'm interested in birthday catering in Bali. Guests: ${result.guests || 'TBC'}. Area: ${area}. Date: ${date}. I'd like a fixed quote.`
  }

  const pkg = FOOD_PACKAGES[result.food]
  const lines = result.lines
    .map((l) => `• ${l.label}${l.detail ? ` (${l.detail})` : ''}: ${formatIDRFull(l.amount)}`)
    .join('\n')

  return [
    `Hi myCHEF, I'd like a fixed birthday quote.`,
    `Food: ${pkg.name}`,
    `Guests: ${result.guests}`,
    `Date: ${date}`,
    `Area: ${area}`,
    '',
    'Selection:',
    lines,
    '',
    `Subtotal (before ++): ${formatIDRFull(result.subtotal)}`,
    result.discountLabel ? `(${result.discountLabel})` : '',
    'Please send the official quote including tax + service.',
  ]
    .filter(Boolean)
    .join('\n')
}
