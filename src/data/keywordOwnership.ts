/**
 * Keyword ownership map — derived from SEOdata analysis_964 export
 * (GSC window ~May–Jul 2026) + commercial priority.
 *
 * RULES
 * 1. Each primary keyword has exactly ONE owner path.
 * 2. Supporting keywords may appear on the owner page only (or in body copy
 *    of children that link up to the owner — never as competing title/H1).
 * 3. Redirected/historical URLs (Jakarta, romantic-dinners alias, chef-table
 *    alias) must not be re-targeted.
 * 4. When adding a new page, pick a free primary or expand an existing owner.
 */

export interface KeywordOwner {
  /** Primary search phrase this URL should win */
  primary: string
  /** Secondary phrases allowed in title/desc/H1 (not used as primary elsewhere) */
  secondary?: string[]
  /** Paths that must NOT target this primary (cannibalization watchlist) */
  doNotTarget?: string[]
  /** Notes from the report */
  note?: string
}

/** path → ownership */
export const KEYWORD_OWNERSHIP: Record<string, KeywordOwner> = {
  '/': {
    primary: 'private chef bali',
    secondary: ['bali private chef', 'my chef', 'mychef', 'chef bali', 'home chef'],
    doNotTarget: ['/private-chef-bali', '/private-dining-indonesia', '/fine-dining/private-chef-bali'],
    note: 'Home owns brand + head term. Highest impressions in report (1,158).',
  },
  '/private-chef-bali': {
    primary: 'hire private chef bali',
    secondary: ['private chef bali price', 'private chef daily rate bali', 'villa chef bali'],
    doNotTarget: ['/'],
    note: 'Pricing / hire intent — differentiates from homepage brand page.',
  },
  '/private-dining-indonesia': {
    primary: 'private dining',
    secondary: ['private dining bali', 'book private dining', 'at home fine dining bali'],
    doNotTarget: [
      '/fine-dining/romantic-dinner',
      '/fine-dining',
      '/services/romantic-dinners',
      '/',
    ],
    note: '94 imp @ pos 23 for “private dining” — best non-brand commercial gap.',
  },
  '/fine-dining/chefs-table': {
    primary: 'chefs table bali',
    secondary: ["chef's table bali", "bali chef's table", 'private chef table bali'],
    doNotTarget: ['/chef-table-experience-bali'],
    note: 'Alias /chef-table-experience-bali already 301s here. Own the query.',
  },
  '/fine-dining/romantic-dinner': {
    primary: 'romantic dinner bali',
    secondary: ['private romantic dinner bali', 'bali romantic dinner', 'bali private dinner for two'],
    doNotTarget: ['/private-dining-indonesia', '/services/romantic-dinners'],
    note: 'Do not target “private dining bali” — that belongs to private-dining-indonesia.',
  },
  '/fine-dining/tasting-menu': {
    primary: 'tasting menu bali',
    secondary: ['private tasting menu bali', 'villa tasting menu bali'],
    doNotTarget: ['/blog/tasting-menu-bali', '/private-tasting-menu-bali'],
  },
  '/fine-dining': {
    primary: 'fine dining bali villa',
    secondary: ['private fine dining bali', 'fine dining at home bali'],
    doNotTarget: ['/fine-dining/private-chef-bali'],
  },
  '/fine-dining/private-chef-bali': {
    primary: 'michelin tasting menu bali',
    secondary: ['michelin private chef bali', 'fine dining tasting menu villa bali'],
    doNotTarget: ['/', '/private-chef-bali'],
  },
  '/catering': {
    primary: 'catering bali',
    secondary: ['villa catering bali', 'event catering bali'],
    doNotTarget: ['/catering/villa-catering', '/catering/buffet', '/catering/bbq-catering'],
  },
  '/catering/buffet': {
    primary: 'buffet catering bali',
    secondary: ['buffet bali', 'bali buffet catering'],
    doNotTarget: ['/catering'],
    note: 'Owns “buffet” impressions (pos ~9).',
  },
  '/catering/bbq-catering': {
    primary: 'bbq catering bali',
    secondary: ['villa bbq catering', 'live grill catering bali'],
    doNotTarget: ['/villa-bbq-catering-bali'],
  },
  '/villa-bbq-catering-bali': {
    primary: 'villa bbq party bali',
    secondary: ['poolside bbq bali', 'villa grill night bali'],
    doNotTarget: ['/catering/bbq-catering'],
  },
  '/catering/villa-catering': {
    primary: 'bali villa catering',
    secondary: ['villa meal plan bali', 'multi day villa catering bali'],
    doNotTarget: ['/catering'],
  },
  // Head term reassigned 2026-08-10 (PB-001). This registry previously gave
  // 'wedding catering bali' to /events/weddings and left the packages page on
  // long-tail only — the reverse of what the data supports, and the root cause of
  // the cluster's cannibalisation. GSC 1 Jun–8 Aug 2026 for "bali wedding
  // catering": packages 180 impressions @ position 28.4 vs weddings 171 @ 42.5;
  // across the whole cluster the packages page took 7 of 10 clicks. The head term
  // now sits with the page already winning it.
  //
  // /events/weddings keeps 'villa wedding catering bali' on evidence, not
  // preference: it ranks position 1.85 for that query. Its other terms move to the
  // multi-day production intent its content actually covers (welcome dinner,
  // ceremony day, recovery brunch, mobile kitchens, power, rain plan).
  '/events/weddings': {
    primary: 'villa wedding catering bali',
    secondary: ['bali villa wedding production', 'wedding welcome dinner bali', 'wedding recovery brunch bali'],
    doNotTarget: ['/bali-wedding-catering-packages'],
  },
  '/bali-wedding-catering-packages': {
    primary: 'bali wedding catering',
    secondary: [
      'wedding catering bali',
      'bali wedding catering packages',
      'bali wedding catering prices',
      'wedding catering cost bali',
    ],
    doNotTarget: ['/events/weddings'],
  },
  '/events/corporate-events': {
    primary: 'corporate event catering bali',
    secondary: ['corporate catering bali', 'conference catering bali', 'company dinner bali'],
    doNotTarget: ['/blog/corporate-events-catering-bali'],
  },
  '/in-villa-service/butlers': {
    primary: 'butler service bali',
    secondary: ['hire butler bali', 'bali butler service', 'butler bali'],
    note: 'Strong CTR opportunity @ pos ~6 for butler service.',
  },
  '/in-villa-service/bartenders': {
    primary: 'luxury cocktail service bali',
    secondary: [
      'villa cocktail packages bali',
      'mobile cocktail bar bali',
      'cocktail free flow bali',
      'byo cocktail service bali',
      'complete cocktail service bali',
    ],
    doNotTarget: ['/in-villa-service/mixology', '/experiences/private-cocktail-party'],
    note: 'Commercial package page. Do not primary-target private cocktail party or mixology masterclass.',
  },
  '/in-villa-service/mixology': {
    primary: 'private mixology bali',
    secondary: [
      'mixologist hire bali',
      'custom cocktail menu bali',
      'signature cocktails bali villa',
      'cocktail class villa bali',
      'zero proof cocktails bali',
    ],
    doNotTarget: ['/in-villa-service/bartenders', '/experiences/private-cocktail-party'],
    note: 'Craft/expertise page. Packages linked down-page only; no free-flow as H1.',
  },
  '/experiences/private-cocktail-party': {
    primary: 'private cocktail party bali',
    secondary: [
      'villa cocktail party bali',
      'pool cocktail party bali',
      'hens party cocktails bali',
      'cocktail reception villa bali',
    ],
    doNotTarget: ['/in-villa-service/bartenders', '/in-villa-service/mixology'],
    note: 'Occasion page. Bar packages shared but H1 stays cocktail party.',
  },
  '/locations/canggu': {
    primary: 'private dining canggu',
    secondary: ['private chef canggu dining', 'canggu villa dining', 'eat and cook villa canggu'],
    doNotTarget: ['/private-chef/canggu', '/canggu'],
    note: 'Location guide owns dining intent; /private-chef/canggu owns hire intent.',
  },
  '/locations/ubud': {
    primary: 'private dining ubud',
    secondary: ["chef's table ubud", 'private dining ubud bali'],
    doNotTarget: ['/private-chef/ubud', '/ubud'],
  },
  '/locations/nusa-dua': {
    primary: 'private dining nusa dua',
    secondary: ['corporate dinner nusa dua', 'company dinner nusa dua', 'nusa dua villa catering'],
    doNotTarget: ['/private-chef/nusa-dua', '/nusa-dua'],
  },
  '/locations/uluwatu': {
    primary: 'private dining uluwatu',
    secondary: ['uluwatu villa dining', 'private chef dining uluwatu'],
    doNotTarget: ['/private-chef/uluwatu', '/uluwatu'],
  },
  '/locations/seminyak': {
    primary: 'private dining seminyak',
    secondary: ['seminyak villa dining', 'private chef dining seminyak'],
    doNotTarget: ['/private-chef/seminyak', '/seminyak'],
  },
  '/locations/sanur': {
    primary: 'private dining sanur',
    secondary: ['sanur villa dining'],
    doNotTarget: ['/private-chef/sanur', '/sanur'],
  },
  '/private-chef/canggu': {
    primary: 'private chef canggu',
    secondary: ['hire private chef canggu', 'canggu villa chef'],
    doNotTarget: ['/locations/canggu'],
  },
  '/private-chef/ubud': {
    primary: 'private chef ubud',
    secondary: ['hire private chef ubud', 'ubud villa chef'],
    doNotTarget: ['/locations/ubud'],
  },
  '/private-chef/uluwatu': {
    primary: 'private chef uluwatu',
    secondary: ['hire private chef uluwatu'],
    doNotTarget: ['/locations/uluwatu'],
  },
  '/private-chef/seminyak': {
    primary: 'private chef seminyak',
    secondary: ['hire private chef seminyak'],
    doNotTarget: ['/locations/seminyak'],
  },
  '/private-chef/nusa-dua': {
    primary: 'private chef nusa dua',
    secondary: ['hire private chef nusa dua'],
    doNotTarget: ['/locations/nusa-dua'],
  },
  '/chef-for-hire-indonesia': {
    primary: 'chef for hire indonesia',
    secondary: ['personal chef indonesia', 'private chef indonesia'],
  },
  '/staffing': {
    primary: 'villa staff bali',
    secondary: ['villa staff placement bali', 'hospitality staffing bali'],
  },
  '/staffing/live-in-chef': {
    primary: 'live in chef bali',
    secondary: ['live-in private chef bali', 'residential chef bali'],
    doNotTarget: ['/staffing/private-chef-placement'],
  },
  '/staffing/private-chef-placement': {
    primary: 'chef placement agency bali',
    secondary: ['private chef recruitment bali'],
    doNotTarget: ['/staffing/live-in-chef'],
  },
}

/** Reverse lookup: primary keyword → path */
export const PRIMARY_KEYWORD_TO_PATH: Record<string, string> = Object.fromEntries(
  Object.entries(KEYWORD_OWNERSHIP).map(([path, o]) => [o.primary.toLowerCase(), path]),
)

export function getKeywordOwner(path: string): KeywordOwner | undefined {
  return KEYWORD_OWNERSHIP[path]
}
