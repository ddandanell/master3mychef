// The 10 top Bali cities where we actively sell catering, events, and fine dining.
// Used by AreaPage (each city links to the other nine) and by the Bali hub page
// at /guide/private-chef-bali.
//
// Each entry carries the short "why people go there" hook used as page copy.

export interface TopCity {
  slug: string
  name: string
  /** One-line positioning shown on the hub + as the intro line on the area page. */
  hook: string
  /** Two-sentence body used in the area page intro and on the hub. */
  blurb: string
  /** Local highlight that hints we know the area — markets, beaches, landmarks. */
  signature: string
}

export const TOP_CITIES: TopCity[] = [
  {
    slug: 'seminyak',
    name: 'Seminyak',
    hook: 'Beach hub. Restaurants, design hotels, sunset cocktails.',
    blurb: 'Seminyak is the original Bali villa scene — Petitenget and Oberoi-area villas, walk-to-beach addresses, and a dense restaurant culture. We cook fine dining for groups who came for the food scene and want one private evening that beats every restaurant on the strip.',
    signature: 'We shop Pasar Seminyak and Jl. Petitenget producers each morning.',
  },
  {
    slug: 'canggu',
    name: 'Canggu',
    hook: 'Surf, expats, brunch culture, family-friendly villas.',
    blurb: 'Canggu villas are larger, often family-run, with great kitchens. We cook weekly meal prep for long-stay families, casual poolside lunches, and Mediterranean dinners that work as well for kids as for parents.',
    signature: 'We know every villa kitchen layout from Echo Beach to Batu Bolong.',
  },
  {
    slug: 'ubud',
    name: 'Ubud',
    hook: 'Culture, rice fields, yoga retreats, wellness escape.',
    blurb: 'Ubud villas are spread through Sayan, Penestanan, and the rice terraces. We cook plant-based menus for wellness travellers, Balinese tasting menus for first-time visitors, and full-board catering for yoga retreats.',
    signature: 'We source produce from the Ubud organic farms and Sukawati market.',
  },
  {
    slug: 'uluwatu',
    name: 'Uluwatu',
    hook: 'Clifftop villas, world-class surf, sunset sundowners.',
    blurb: 'Uluwatu villas hang on cliffs above the Indian Ocean. We bring fine dining experiences that match the view — Wagyu under the stars, seafood the night it was caught, wine pairings that respect the setting.',
    signature: 'We work with the Bingin and Padang Padang fish landings.',
  },
  {
    slug: 'sanur',
    name: 'Sanur',
    hook: 'Calm beach, family-friendly, the original Bali resort town.',
    blurb: 'Sanur villas favour multi-generational families and longer stays. We cook gentle, classic menus — handmade pasta, fresh seafood, simple Balinese — and weekly meal plans that handle dietary needs across three generations.',
    signature: 'We shop Pasar Sindhu at first light for produce and reef fish.',
  },
  {
    slug: 'nusa-dua',
    name: 'Nusa Dua',
    hook: 'Luxury resorts, private estate villas, conference hospitality.',
    blurb: 'Nusa Dua is the home of Bali\'s gated luxury villas and resort hospitality. We cater corporate retreats, executive dinners, and high-end private events with the same precision as the surrounding five-star kitchens.',
    signature: 'We coordinate with the major estate kitchens and bring full service teams.',
  },
  {
    slug: 'jimbaran',
    name: 'Jimbaran',
    hook: 'Sunset seafood, fishing village heritage, beachfront villas.',
    blurb: 'Jimbaran is where Bali eats seafood. We cook from the morning landing at Kedonganan — barramundi, lobster, prawns, snapper — straight to your villa table, with the salt still on the catch.',
    signature: 'We bring the boat-to-villa supply chain to every Jimbaran booking.',
  },
  {
    slug: 'berawa',
    name: 'Berawa',
    hook: 'Newer-build villas, expat families, beach club culture.',
    blurb: 'Berawa villas are modern, well-equipped, and built for entertaining. We cook villa parties for 20–80 guests, birthday dinners, and Mediterranean menus that complement the beach-club aesthetic.',
    signature: 'We handle the logistics for the bigger-than-Canggu villa events.',
  },
  {
    slug: 'pererenan',
    name: 'Pererenan',
    hook: 'Quiet, fast-growing, design-forward villas.',
    blurb: 'Pererenan is what Canggu was five years ago — quieter, more design-led, and full of new villas with great kitchens. We cook romantic dinners, small-group fine dining, and weekly meal prep for the long-stayers.',
    signature: 'We know every chef-friendly villa Pererenan has come online with.',
  },
  {
    slug: 'bukit',
    name: 'Bukit Peninsula',
    hook: 'Bingin, Padang Padang, Ungasan — clifftop premium villas.',
    blurb: 'The Bukit Peninsula is Bali\'s premium clifftop region — Bingin, Padang Padang, Ungasan, Pecatu. We cook fine dining for elopements, surf-trip groups, and milestone celebrations against the Indian Ocean horizon.',
    signature: 'We service every Bukit clifftop villa with a full team.',
  },
]
