// SEO redirect map.
//
// Old production URLs we don't want to maintain content for, mapped to the
// closest relevant page on the new site. Google passes ~90-95% of the link
// equity through a real 301, so traffic that already ranks for these URLs
// keeps flowing — just to a more useful destination.
//
// Rules:
//   1) Always redirect to a RELATED page. Redirecting unrelated URLs to "/" is
//      a soft 404 in Google's eyes and gets devalued.
//   2) Redirects emit real 301s via vercel.json + public/_redirects (host config).
//      The React Router fallback below is a UX safety net for client-side nav.
//   3) Once a URL is in this map it is dropped from public/sitemap.xml so we
//      don't tell Google two URLs are canonical.
//
// To remove a redirect (= turn it into a "kept" page with real content), just
// delete the entry here and write the content in the existing template.

export interface Redirect {
  from: string
  to: string
  /** Why this redirect exists — keep the reasoning so future-you doesn't undo it. */
  reason: string
}

export const REDIRECTS: Redirect[] = [
  // --- Systems-plan canonical redirects ---
  { from: '/experience', to: '/fine-dining', reason: 'Systems plan: /experience → /fine-dining/' },
  { from: '/story', to: '/fine-dining/our-chefs', reason: 'Systems plan: /story → /fine-dining/our-chefs/' },
  { from: '/service', to: '/in-villa-service', reason: 'Systems plan: /service → /in-villa-service/' },
  { from: '/join', to: '/staffing', reason: 'Systems plan: /join → /staffing/' },
  { from: '/partners', to: '/staffing/for-villa-managers', reason: 'Systems plan: /partners → /staffing/for-villa-managers/' },

  // --- Areas consolidation & canonicalization → /locations/[area] ---
  { from: '/seminyak', to: '/locations/seminyak', reason: 'Canonicalize to /locations/' },
  { from: '/canggu', to: '/locations/canggu', reason: 'Canonicalize to /locations/' },
  { from: '/uluwatu', to: '/locations/uluwatu', reason: 'Canonicalize to /locations/' },
  { from: '/ubud', to: '/locations/ubud', reason: 'Canonicalize to /locations/' },
  { from: '/sanur', to: '/locations/sanur', reason: 'Canonicalize to /locations/' },
  { from: '/nusa-dua', to: '/locations/nusa-dua', reason: 'Canonicalize to /locations/' },
  { from: '/jimbaran', to: '/locations/jimbaran', reason: 'Canonicalize to /locations/' },
  { from: '/pererenan', to: '/locations/pererenan', reason: 'Canonicalize to /locations/' },
  { from: '/bukit', to: '/locations/bukit', reason: 'Canonicalize to /locations/' },
  { from: '/berawa', to: '/locations/berawa', reason: 'Canonicalize to /locations/' },

  { from: '/kuta', to: '/locations/seminyak', reason: 'Lower-end tourist hub adjacent to Seminyak.' },
  { from: '/legian', to: '/locations/seminyak', reason: 'Adjacent to Seminyak.' },
  { from: '/kerobokan', to: '/locations/seminyak', reason: 'Sub-neighborhood of Seminyak.' },
  { from: '/petitenget', to: '/locations/seminyak', reason: 'Sub-neighborhood of Seminyak.' },
  { from: '/tanah-lot', to: '/locations/canggu', reason: 'West coast cluster with Canggu.' },
  { from: '/tabanan', to: '/locations/canggu', reason: 'West coast — Canggu chefs travel there.' },
  { from: '/denpasar', to: '/locations/denpasar', reason: 'Dedicated DenpasarPage exists at /locations/denpasar — canonicalize there.' },
  { from: '/gianyar', to: '/locations/ubud', reason: 'Gianyar regency — Ubud is the chef base.' },
  { from: '/tegallalang', to: '/locations/ubud', reason: 'Ubud regency.' },
  { from: '/amed', to: '/locations/sanur', reason: 'East coast — limited service from Sanur base.' },
  { from: '/lovina', to: '/locations/sanur', reason: 'North coast — limited service.' },
  { from: '/candidasa', to: '/locations/sanur', reason: 'East Bali — limited service.' },
  { from: '/padang-bai', to: '/locations/sanur', reason: 'East Bali — limited service.' },
  { from: '/ungasan', to: '/locations/bukit', reason: 'Sub-area of the Bukit Peninsula.' },
  { from: '/pecatu', to: '/locations/bukit', reason: 'Sub-area of the Bukit Peninsula.' },

  { from: '/jakarta', to: '/locations/jakarta', reason: 'Canonicalize to /locations/' },
  { from: '/menteng', to: '/locations/menteng', reason: 'Canonicalize to /locations/' },
  { from: '/kemang', to: '/locations/kemang', reason: 'Canonicalize to /locations/' },
  { from: '/scbd', to: '/locations/scbd', reason: 'Canonicalize to /locations/' },
  { from: '/pondok-indah', to: '/locations/pondok-indah', reason: 'Canonicalize to /locations/' },
  { from: '/bsd', to: '/locations/bsd', reason: 'Canonicalize to /locations/' },

  // --- Micro-areas (private-chef variant) → /locations/ ---
  { from: '/echo-beach-private-chef', to: '/locations/canggu', reason: 'Echo Beach is in Canggu.' },
  { from: '/batu-bolong-private-chef', to: '/locations/canggu', reason: 'Batu Bolong is in Canggu.' },
  { from: '/pererenan-private-chef', to: '/locations/pererenan', reason: 'Pererenan private chef page.' },
  { from: '/bingin-private-chef', to: '/locations/uluwatu', reason: 'Bingin is on the Bukit / Uluwatu cluster.' },
  { from: '/balangan-private-chef', to: '/locations/uluwatu', reason: 'Balangan beach is on the Bukit Peninsula.' },
  { from: '/dreamland-private-chef', to: '/locations/uluwatu', reason: 'Dreamland beach is on the Bukit Peninsula.' },
  { from: '/nyang-nyang-private-chef', to: '/locations/uluwatu', reason: 'Nyang Nyang is on the Bukit Peninsula.' },
  { from: '/green-bowl-private-chef', to: '/locations/uluwatu', reason: 'Green Bowl is on the Bukit Peninsula.' },
  { from: '/medewi-private-chef', to: '/locations/canggu', reason: 'Medewi is west coast — closest active area is Canggu.' },
  { from: '/padang-padang-private-chef', to: '/locations/uluwatu', reason: 'Padang Padang is on Bukit.' },
  { from: '/sayan-private-chef', to: '/locations/ubud', reason: 'Sayan is in Ubud.' },
  { from: '/penestanan-private-chef', to: '/locations/ubud', reason: 'Penestanan is in Ubud.' },
  { from: '/sanur-beach-private-chef', to: '/locations/sanur', reason: 'Sanur private chef page.' },

  // --- Indonesia cities that were 404 (footer links) → Jakarta hub ---
  { from: '/surabaya', to: '/locations/jakarta', reason: 'Java city — no dedicated page, redirect to Jakarta hub.' },
  { from: '/bandung', to: '/locations/jakarta', reason: 'Java city — no dedicated page, redirect to Jakarta hub.' },
  { from: '/yogyakarta', to: '/locations/jakarta', reason: 'Java city — no dedicated page, redirect to Jakarta hub.' },

  // --- Services / menus we don't lead with ---
  { from: '/services/romantic-dinners', to: '/fine-dining/romantic-dinner', reason: 'Romantic dinners now under fine-dining pillar.' },
  { from: '/services/family-reunions', to: '/catering', reason: 'Family reunions = catering multi-day.' },
  { from: '/services/cooking-classes', to: '/contact', reason: 'Niche request — drive to contact.' },
  { from: '/services/corporate-events', to: '/events/corporate-events', reason: 'Consolidate into events pillar.' },
  { from: '/services/villa-parties', to: '/events/villa-parties', reason: 'Consolidate into events pillar.' },
  { from: '/services/wedding-celebrations', to: '/events/weddings', reason: 'Consolidate into events pillar.' },
  { from: '/services/birthday-celebrations', to: '/events/birthdays', reason: 'Consolidate into events pillar.' },
  { from: '/services/weekly-meal-prep', to: '/catering', reason: 'Weekly meal prep = catering service.' },

  // --- Menu pages consolidation ---
  { from: '/menus', to: '/fine-dining/menus', reason: 'Consolidate all menus to fine-dining menus pillar.' },
  { from: '/menus/asian-fusion', to: '/fine-dining/menus', reason: 'Consolidate menu pages.' },
  { from: '/menus/vegan', to: '/fine-dining/menus', reason: 'Consolidate menu pages.' },
  { from: '/menus/modern-european', to: '/fine-dining/menus', reason: 'Consolidate menu pages.' },
  { from: '/menus/halal', to: '/fine-dining/menus', reason: 'Consolidate menu pages.' },
  { from: '/guide/bali-cuisine-glossary', to: '/fine-dining/menus', reason: 'Old cuisine guide → fine-dining menus.' },

  // --- Blog posts & journal ---
  { from: '/blog', to: '/journal', reason: 'Old blog hub → new journal.' },
  { from: '/blog/private-chef-bali-cost-breakdown-2026', to: '/pricing', reason: 'Cost breakdown content → pricing page.' },
  { from: '/blog/best-bali-villas-private-chef-kitchen', to: '/partner-platform', reason: 'Villa partner content → partner platform.' },
  { from: '/blog/wedding-rehearsal-dinner-bali', to: '/events/weddings', reason: 'Wedding content → wedding events page.' },
  { from: '/blog/yoga-retreat-chef-bali-meal-planning', to: '/events/retreats', reason: 'Retreat content → retreats events page.' },
  // --- SEO landing pages → most relevant pillar ---
  // (Landing page redirects removed to allow dedicated content to rank)
  { from: '/private-chef-booking-indonesia', to: '/quote', reason: 'Booking SEO → quote form.' },
  { from: '/private-chef-breakfast-bali', to: '/catering', reason: 'Breakfast service → catering.' },

  // --- Pricing pages ---
  { from: '/private-chef-cost-per-day-bali', to: '/pricing', reason: 'Cost inquiry → pricing page.' },
  { from: '/private-chef-cost-bali', to: '/pricing', reason: 'Cost inquiry → pricing page.' },

  // --- Contact & info pages ---
  // (Jakarta and service redirects removed to allow dedicated canonical pages)
  { from: '/reviews', to: '/', reason: 'Old reviews page → homepage (testimonials integrated everywhere).' },

  // --- Legacy utility pages ---
  { from: '/retreats', to: '/events/retreats', reason: 'Consolidate retreat traffic into the dedicated retreats event page.' },
  { from: '/corporate-events', to: '/events/corporate-events', reason: 'Consolidate duplicate corporate events content into the canonical events pillar page.' },
  { from: '/villa-partners', to: '/partner-platform', reason: 'Old partners page → new partner platform.' },
  { from: '/catering/buffet-catering', to: '/catering/buffet', reason: 'Old slug renamed: buffet-catering → buffet to match route.' },

  // --- 2026-06-13: 404s discovered by Mustafa audit ---
  // Keyword targets and nav links returning 404 — fix to prevent lead loss on
  // ranking keywords "private chef Bali" (#27), "Bali private chef hire", "private dining Bali".
  { from: '/services/private-chef', to: '/in-villa-service', reason: 'Keyword target for "private chef Bali" (#27) and "Bali private chef hire" — page never built. Redirect to main service page.' },
  { from: '/services/private-dining', to: '/fine-dining', reason: 'Keyword target for "private dining Bali" (1.4K/mo) — page never built. Redirect to fine-dining pillar.' },
  { from: '/about', to: '/fine-dining/our-chefs', reason: '404 from nav. Redirect to chef profiles as closest "about us" content.' },
  { from: '/menu', to: '/fine-dining/menus', reason: '404 from nav/marketing. Redirect to fine-dining menus pillar.' },
]

/** Lookup map for the React Router fallback. */
export const REDIRECT_MAP: Record<string, string> = Object.fromEntries(
  REDIRECTS.map((r) => [r.from, r.to])
)
