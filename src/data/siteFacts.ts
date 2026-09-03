/**
 * Single source of truth for mychef.id facts.
 *
 * Use these constants anywhere the site states founding year, founder training,
 * deposit terms, cancellation policy, grocery policy, or operational review
 * stats. Do not hardcode contradictory values elsewhere.
 */

export const siteFacts = {
  /** Defensible founding year used across the site. */
  foundingYear: 2019,

  /** City where the founder completed formal Michelin-kitchen training. */
  founderTrainingCity: 'Milan',

  /** Deposit percentage required to confirm a booking. */
  depositPercent: 50,

  /** When the remaining balance is due. */
  balanceTiming: 'the day before the event',

  /** Minimum spend for corporate events and corporate catering programmes. */
  corporateMinSpend: 'IDR 15,000,000',

  /**
   * Cancellation policy wording, taken verbatim from /cancellation.
   * Cancellations made 14 or more days before the event receive a full refund.
   * Cancellations between 7–13 days before receive a 50% refund.
   * Cancellations less than 7 days before are non-refundable.
   */
  cancellationPolicy:
    'Cancellations made 14 or more days before the event receive a full refund. Cancellations between 7–13 days before receive a 50% refund. Cancellations less than 7 days before are non-refundable.',

  /** Short cancellation policy summary for cards/accordions. */
  cancellationPolicyShort:
    'Full refund 14+ days before. 50% refund 7–13 days. No refund under 7 days.',

  /** Grocery billing policy. */
  groceryPolicy: 'Groceries are billed at cost, no markup',

  /**
   * Operational social-proof framing.
   * No Google rating, no review count, no unverifiable platform claims.
   */
  reviewFraming: '560+ events served · 12,000+ guests · 500+ villa bookings',

  /** Individual stat lines derived from reviewFraming. */
  eventsServed: '560+ events served',
  guestsServed: '12,000+ guests served',
  villaBookings: '500+ villa bookings',

  /** WhatsApp contact number (E.164 without +). */
  whatsappNumber: '6289674072020',

  /** Display phone number. Use this in every schema `telephone` field. */
  phoneDisplay: '+62 896-7407-2020',

  /** tel: href value (E.164 with +). */
  phoneHref: '+6289674072020',

  /** Business email. */
  email: 'bali@mychef.id',

  /**
   * Canonical business name for schema `name` fields.
   * Verified 2026-07-29 against the live Google Business Profile — an exact
   * match is what lets Google tie this site to that listing.
   * If the GBP name is ever changed, change this in the same session.
   */
  businessName: 'myCHEF. - Private Chef and Catering',

  /** Brand name used in visible UI copy and marketing. */
  brandName: 'myCHEF.id',

  /** Registered entity name used in legal documents (privacy policy, terms). */
  legalName: 'myCHEF Indonesia',

  /**
   * Food-safety claim used on city pages, pillars and trust strips.
   * Keep wording consistent site-wide for E-E-A-T and schema alignment.
   */
  haccpLabel: 'HACCP-certified',
  haccpShort: 'HACCP-certified chefs',
  haccpSentence:
    'All myCHEF culinary teams are HACCP-certified for professional food safety — temperature control, allergen handling and clean kitchen standards in every villa.',

  /**
   * Name variants used across the site and third-party profiles.
   * Declared as schema `alternateName` so Google resolves them to one entity.
   */
  alternateNames: ['myCHEF.id', 'myCHEF', 'myCHEF Bali'],

  /**
   * Canonical postal address — the single source of truth for NAP.
   *
   * Indonesian address hierarchy: Panjer (kelurahan) sits inside
   * Denpasar Selatan (kecamatan) inside Kota Denpasar (city).
   * schema.org `addressLocality` takes the CITY, so sub-district detail
   * belongs in `streetAddress`.
   *
   * Any change here must be mirrored on the Google Business Profile.
   */
  address: {
    streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan',
    addressLocality: 'Denpasar',
    addressRegion: 'Bali',
    postalCode: '80226',
    addressCountry: 'ID',
  },

  /** One-line address for visible on-page text. */
  addressDisplay:
    'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Bali 80226',

  /**
   * Business coordinates, taken from the Google Business Profile pin
   * (verified 2026-07-29). The previous values (-8.6905, 115.2126) sat about
   * 1.2 km from the listing, which is a conflicting local signal.
   * GBP plus code: 868M+P2 Panjer, Denpasar City, Bali.
   */
  geo: { latitude: -8.6832483, longitude: 115.2325315 },

  /**
   * Consumer cocktail service floor (owner-approved retail = supplier × 2).
   * Complete packages only — not hourly bartender-only hire.
   * Source of truth: src/data/cocktailServicePackages.ts
   */
  bartenderRate: 'IDR 500,000++',

  /** Per-guest package floor wording for cocktail service. */
  bartenderRateHourly: 'from IDR 500,000++ per guest',

  /** @deprecated Hourly bartender-only hire is retired for consumer pages. */
  bartenderRateLegacyHourly: 'RETIRED — cocktail packages from IDR 500,000++ per guest',

  /** Direct Google Business Profile / Maps URL. */
  googleBusinessProfileUrl:
    'https://www.google.com/maps/place/myCHEF.+-+Private+Chef+and+Catering/data=!4m2!3m1!1s0x0:0x84318764e9490ac2?sa=X',

  /**
   * Entity graph sameAs — used in Organization / LocalBusiness JSON-LD.
   * Keep Instagram/Facebook/Maps/WhatsApp stable so Google can merge brand signals.
   */
  sameAs: [
    'https://www.instagram.com/mychef.id',
    'https://www.facebook.com/mychef.id',
    'https://wa.me/6289674072020',
    'https://www.google.com/maps/place/myCHEF.+-+Private+Chef+and+Catering/data=!4m2!3m1!1s0x0:0x84318764e9490ac2?sa=X',
  ],
} as const

/* ------------------------------------------------------------------ *
 * PRIVATE CHEF PRICING — SINGLE SOURCE OF TRUTH
 *
 * Owner-confirmed 30 July 2026. These rates REPLACE the previous
 * half-day / full-day / complete-full-day ladder
 * (IDR 2,500,000 / 3,500,000 / 4,200,000 per day), which is retired.
 *
 * Owner ruling 3 Sep 2026 (David): stay chef is a FULL-DAY STAFF MINIMUM.
 * The bookable stay product is the existing THREE-MEAL day rate only.
 *   Full day of staff (3 flexible meals) = IDR 2,700,000++ per day
 *     (IDR 3,267,000 all-in). Chef + assistant, ~10 guests.
 *   Those three meals are credits: each can be breakfast, lunch or dinner
 *     (including three breakfasts). Not locked to B+L+D.
 *   Weekly −10% and monthly −20% apply to that full-day rate only.
 *
 * One lunch / dinner / party is CATERING (food included) — not a stay-chef SKU.
 * Historic 1-meal (IDR 1,000,000++ / IDR 1,210,000) and 2-meal
 * (IDR 1,800,000++ / IDR 2,178,000) figures stay in this file so numbers
 * never drift, but they are not sold as stay-chef plans.
 *
 * All figures are ++ (11% government tax + 10% service charge, ×1.21).
 * Groceries are billed separately at cost with receipts, never marked up.
 *
 * Never hardcode these numbers in a component. Import from here.
 * ------------------------------------------------------------------ */

/** Multiplier that turns a ++ price into the all-in price (11% tax + 10% service). */
export const TAX_SERVICE_MULTIPLIER = 1.21

/** Length-of-stay discounts applied to the standard daily rate. */
export const STAY_DISCOUNTS = {
  weekly: { minDays: 7, off: 0.1, label: 'Weekly rate (7+ days)' },
  monthly: { minDays: 28, off: 0.2, label: 'Monthly rate (28+ days)' },
} as const

export type MealPlanKey = 'one-meal' | 'two-meals' | 'three-meals'

export interface MealPlan {
  key: MealPlanKey
  /** Short name used in headings and tables. */
  name: string
  /** Number of meals cooked and served per day. */
  meals: number
  /** One-line description of what the guest gets. */
  summary: string
  /** Which meals this typically covers. */
  covers: string
  /** Standard daily rate in IDR, before tax and service. */
  daily: number
  /** Best for — used in the comparison table. */
  bestFor: string
}

export const MEAL_PLANS: readonly MealPlan[] = [
  {
    key: 'one-meal',
    name: 'One Meal',
    meals: 1,
    summary:
      'Not a stay-chef booking. One lunch, dinner or party is catering — food included.',
    covers: 'Catering — food included',
    daily: 1_000_000,
    bestFor: 'One meal or party — book catering, not a stay chef',
  },
  {
    key: 'two-meals',
    name: 'Two Meals',
    meals: 2,
    summary:
      'Not a stay-chef product. Stay chef starts at a full day of staff — three flexible meals at the three-meal rate.',
    covers: 'Not the stay minimum',
    daily: 1_800_000,
    bestFor: 'If you want two sittings, you still book the full-day stay chef',
  },
  {
    key: 'three-meals',
    name: 'Full-day stay chef',
    meals: 3,
    summary:
      'A full day of staff. You get three meals; use each as breakfast, lunch or dinner however you want — including three breakfasts.',
    covers: 'Three flexible meals — breakfast, lunch or dinner as you choose',
    daily: 2_700_000,
    bestFor: 'Villa stays. We inspect the kitchen first so it meets our standard.',
  },
] as const

/** The only bookable stay-chef SKU — existing three-meal / full-day rate. */
export const STAY_CHEF_PLAN: MealPlan = MEAL_PLANS[2]

/** Rounds to the nearest rupiah. All our rates divide cleanly, so no cents appear. */
const idr = (n: number) => Math.round(n)

/** Daily rate for a plan at a given stay length. */
export function planDailyRate(plan: MealPlan, stay: 'daily' | 'weekly' | 'monthly'): number {
  if (stay === 'weekly') return idr(plan.daily * (1 - STAY_DISCOUNTS.weekly.off))
  if (stay === 'monthly') return idr(plan.daily * (1 - STAY_DISCOUNTS.monthly.off))
  return plan.daily
}

/** Same rate, with 11% tax and 10% service already added. */
export function planDailyRateAllIn(plan: MealPlan, stay: 'daily' | 'weekly' | 'monthly'): number {
  return idr(planDailyRate(plan, stay) * TAX_SERVICE_MULTIPLIER)
}

/** "IDR 1,000,000" — Indonesian thousands separators, no decimals. */
export function formatIDR(value: number): string {
  return `IDR ${Math.round(value).toLocaleString('en-US')}`
}

/** "IDR 1,000,000++" */
export function formatIDRPlusPlus(value: number): string {
  return `${formatIDR(value)}++`
}

/**
 * Convenience constants for copy, meta descriptions and schema.
 * Derived, so they can never drift from MEAL_PLANS.
 */
export const privateChefPricing = {
  /** Stay-chef published day rate, ++ (full day of staff). */
  fromDaily: STAY_CHEF_PLAN.daily,
  /** Same as fromDaily — stay chef has one published day rate. */
  toDaily: STAY_CHEF_PLAN.daily,
  /** Cheapest stay-chef rate (full-day, monthly). */
  lowestAnyRate: planDailyRate(STAY_CHEF_PLAN, 'monthly'),
  /** "IDR 2,700,000++" */
  fromDailyLabel: formatIDRPlusPlus(STAY_CHEF_PLAN.daily),
  /** "IDR 2.7M++" — for meta descriptions where characters are scarce. */
  fromDailyShort: 'IDR 2.7M++',
  /** Standard sentence used across the site. Keep wording identical everywhere. */
  headline:
    'Stay chef starts at a full day of staff: IDR 2,700,000++ per day (IDR 3,267,000 all-in) for chef + assistant, about 10 guests. Three meals — each breakfast, lunch or dinner as you choose. One lunch, dinner or party is catering.',
  /** The qualifier that must accompany every published rate. */
  qualifier:
    'Per day, ++ (11% government tax + 10% service charge). Groceries billed separately at cost with receipts. Weekly −10% and monthly −20% on the full-day rate only.',
  /** Short qualifier for cards and strips. */
  qualifierShort: 'Full-day ++ · groceries at cost · weekly −10% · monthly −20%',
  /** Worked example proving the ++ maths, reused in FAQs. */
  taxExample:
    'IDR 2,700,000++ is IDR 3,267,000 all-in — 11% government tax and 10% service charge added to the listed price.',
} as const

export default siteFacts
