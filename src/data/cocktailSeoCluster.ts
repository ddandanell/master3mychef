/**
 * Cocktail SEO cluster — keyword ownership for the three consumer bar URLs.
 *
 * Research basis (SERP / competitor patterns Aug 2026):
 * - Competitors rank "cocktail party package", "bartender hire", "mixologist" as mixed intents.
 * - We split intent deliberately so pages do not cannibalise each other.
 *
 * STRICT RULE: each page owns one primary intent. Other cluster pages may be
 * linked with the TARGET page's primary keyword as anchor — never steal
 * another page's primary into your H1/title.
 */

export type CocktailClusterSlug = 'bartenders' | 'mixology' | 'cocktail-party'

export interface CocktailClusterPage {
  slug: CocktailClusterSlug
  path: string
  /** SERP primary — only this page should rank for it */
  primary: string
  /** Supporting phrases allowed in body, not as H1 of siblings */
  secondary: string[]
  /** Phrases this page must NOT primary-target */
  doNotPrimary: string[]
  /** Recommended title tag */
  title: string
  /** Meta description */
  description: string
  /** On-page H1 */
  h1: string
  /** Short label for nav cards */
  cardLabel: string
  /** One-line role for cluster nav */
  role: string
  /** Anchor text other pages should use when linking HERE */
  inboundAnchor: string
}

export const COCKTAIL_CLUSTER: Record<CocktailClusterSlug, CocktailClusterPage> = {
  bartenders: {
    slug: 'bartenders',
    path: '/in-villa-service/bartenders',
    primary: 'luxury cocktail service bali',
    secondary: [
      'villa cocktail packages bali',
      'mobile cocktail bar bali',
      'mobile bar bali',
      'mobile bar service bali',
      'bali bar catering',
      'bar catering bali',
      'bali drinks catering',
      'bali cocktails',
      'harga cocktail bali',
      'cocktail free flow bali',
      'byo cocktail service bali',
      'complete cocktail service bali',
      'party bar service bali',
    ],
    doNotPrimary: [
      'private cocktail party bali',
      'private mixology bali',
      'mixologist hire bali',
      'cocktail masterclass bali',
    ],
    title: 'Mobile Cocktail Bar Bali | Villa Packages from IDR 500K++ | myCHEF',
    description:
      'Mobile bar & luxury cocktail service for Bali villas and parties: BYO, free-flow and premium packages from IDR 500,000++ per guest. Team, glassware, ice, setup — not hourly hire.',
    h1: 'Mobile Cocktail Bar in Bali — Complete Packages for Villa Parties',
    cardLabel: 'Mobile cocktail bar packages',
    role: 'Commercial package page — mobile bar prices, inclusions, free flow, BYO vs premium',
    inboundAnchor: 'mobile cocktail bar packages in Bali',
  },
  mixology: {
    slug: 'mixology',
    path: '/in-villa-service/mixology',
    primary: 'private mixology bali',
    secondary: [
      'mixologist hire bali',
      'custom cocktail menu bali',
      'signature cocktails bali villa',
      'cocktail class villa bali',
      'zero proof cocktails bali',
      'bali botanical cocktails',
    ],
    doNotPrimary: [
      'private cocktail party bali',
      'luxury cocktail service bali',
      'cocktail free flow bali',
      'villa cocktail packages bali',
    ],
    title: 'Private Mixology Bali | Custom Cocktails & Craft Experiences | myCHEF',
    description:
      'Private mixology in Bali: custom cocktail menus, Bali botanical signatures, zero-proof craft and interactive villa sessions. Masterclasses by custom quote. Full free-flow packages linked separately.',
    h1: 'Private Mixology in Bali — Custom Cocktails & Craft Experiences',
    cardLabel: 'Private mixology & craft',
    role: 'Expertise page — signatures, ingredients, interactive craft, zero-proof',
    inboundAnchor: 'private mixology and custom cocktail design in Bali',
  },
  'cocktail-party': {
    slug: 'cocktail-party',
    path: '/experiences/private-cocktail-party',
    primary: 'private cocktail party bali',
    secondary: [
      'villa cocktail party bali',
      'pool cocktail party bali',
      'hens party cocktails bali',
      'cocktail reception villa bali',
      'birthday cocktail party bali villa',
      'mobile bar party bali',
      'villa party drinks bali',
    ],
    doNotPrimary: [
      'private mixology bali',
      'mixologist hire bali',
      'luxury cocktail service bali',
      'bartender hire bali hourly',
    ],
    title: 'Private Cocktail Party Bali | Mobile Bar at Your Villa | myCHEF',
    description:
      'Private cocktail party with a mobile bar at your Bali villa: packages from IDR 500K++ per guest, optional catering, waiters and entertainment. Pool, hens, wedding welcomes, birthdays.',
    h1: 'Private Cocktail Party in Bali — Mobile Bar at Your Villa',
    cardLabel: 'Private cocktail party',
    role: 'Occasion page — night timeline, guest planning, food & entertainment add-ons',
    inboundAnchor: 'private cocktail party at your Bali villa',
  },
}

/** Links FROM a page TO its two siblings — anchors always use the target's inbound keyword. */
export function cocktailClusterLinksFrom(from: CocktailClusterSlug): {
  to: CocktailClusterSlug
  href: string
  anchor: string
  blurb: string
}[] {
  const others = (Object.keys(COCKTAIL_CLUSTER) as CocktailClusterSlug[]).filter((s) => s !== from)
  return others.map((to) => {
    const page = COCKTAIL_CLUSTER[to]
    return {
      to,
      href: page.path,
      anchor: page.inboundAnchor,
      blurb: page.role,
    }
  })
}

export const BARTENDERS_AREAS = [
  {
    name: 'Seminyak & Petitenget',
    body: 'Mature villa stock, garden courtyards and pool decks that suit free-flow and premium packages for 10–40 guests. Load-in is usually straightforward; noise rules vary by street — we plan last call with your villa manager.',
  },
  {
    name: 'Canggu, Berawa & Pererenan',
    body: 'Design-forward villas and longer social nights. Popular for birthday free flow and BYO packages when hosts already stock duty-free spirits. Confirm driveway access for ice and glassware crates.',
  },
  {
    name: 'Uluwatu, Pecatu & the Bukit',
    body: 'Sunset cliff and ocean-view estates. Premium six-hour packages are common for wedding welcome drinks and receptions. Wind and stairs affect bar placement — we brief that on every Bukit quote.',
  },
  {
    name: 'Ubud & hillside villas',
    body: 'Pavilion and jungle settings with cooler evenings. Botanical garnishes pair well with free flow; travel timing from South Bali is built into the proposal when needed.',
  },
  {
    name: 'Nusa Dua, Jimbaran & Sanur',
    body: 'Resort-adjacent villas and gated estates. Security lists and loading bays need guest names early. Complete cocktail service still runs on the same three packages island-wide.',
  },
]

export const MIXOLOGY_INGREDIENTS = [
  {
    title: 'Tropical fruit & citrus',
    body: 'Passionfruit, mango, young coconut, kaffir lime, calamansi and local citrus — used for juice, cordials and garnish that taste like Bali, not a generic bar rail.',
  },
  {
    title: 'Herbs & botanicals',
    body: 'Lemongrass, pandan, mint, basil, torch ginger and house infusions that give signature drinks a clear point of view.',
  },
  {
    title: 'Spice & depth',
    body: 'Palm sugar, tamarind, chili, nutmeg and carefully dosed spice for spirit-forward and sour builds without overwhelming the base spirit.',
  },
  {
    title: 'Local spirit pathways',
    body: 'Where the menu calls for it, we work with licensed arak and quality imported bases. We never invent luxury brand claims that are not on your written quote.',
  },
]

export const COCKTAIL_PARTY_OCCASIONS = [
  {
    title: 'Pool & sunset parties',
    body: 'The classic Bali villa night: welcome drink as the light drops, free flow or BYO through the evening, optional canapés so guests never leave the deck.',
  },
  {
    title: 'Hens, bucks & birthdays',
    body: 'Signature serves, zero-proof options for mixed groups, and a clear package choice so hosts are not guessing bar cost mid-chat.',
  },
  {
    title: 'Wedding welcome drinks & receptions',
    body: 'Premium packages for longer service windows, couple-named signatures on request via mixology, and coordination with planners on timing.',
  },
  {
    title: 'Corporate & offsite receptions',
    body: 'Controlled free flow, professional pacing, and optional branding — without turning the bar into an open free-for-all.',
  },
  {
    title: 'Cocktail hour before dinner',
    body: 'Shorter free-flow or BYO window before a chef-led dinner. Pair with fine dining or BBQ when you want the full arc.',
  },
]

export const COCKTAIL_PARTY_TIMELINE = [
  { t: 'T−90 min', d: 'Team load-in, ice, glassware polish, station build, tasting check.' },
  { t: 'T−30 min', d: 'Welcome cocktail batch ready; host walk-through of last call and zero-proof options.' },
  { t: 'Guest arrival', d: 'First pours, garnish station live, optional canapé pass begins if booked.' },
  { t: 'Peak hour', d: 'Second bartender on volume packages; stock watch on free-flow menus.' },
  { t: 'Last call', d: 'Agreed wind-down; no service to intoxicated guests; soft drinks continue.' },
  { t: 'Breakdown', d: 'Bar packed, glassware cleared, villa service areas restored.' },
]
