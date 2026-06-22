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

  // --- Areas consolidation → /locations/[area] ---
  { from: '/kuta', to: '/locations/seminyak', reason: 'Lower-end tourist hub adjacent to Seminyak — consolidated under locations.' },
  { from: '/legian', to: '/locations/seminyak', reason: 'Adjacent to Seminyak.' },
  { from: '/kerobokan', to: '/locations/seminyak', reason: 'Sub-neighborhood of Seminyak.' },
  { from: '/petitenget', to: '/locations/seminyak', reason: 'Sub-neighborhood of Seminyak.' },
  { from: '/tanah-lot', to: '/locations/canggu', reason: 'West coast cluster with Canggu.' },
  { from: '/tabanan', to: '/locations/canggu', reason: 'West coast — Canggu chefs travel there.' },
  { from: '/denpasar', to: '/locations/sanur', reason: 'Greater Denpasar area — Sanur is closest serviced.' },
  { from: '/gianyar', to: '/locations/ubud', reason: 'Gianyar regency — Ubud is the chef base.' },
  { from: '/tegallalang', to: '/locations/ubud', reason: 'Ubud regency.' },
  { from: '/amed', to: '/locations/sanur', reason: 'East coast — limited service from Sanur base.' },
  { from: '/lovina', to: '/locations/sanur', reason: 'North coast — limited service.' },
  { from: '/candidasa', to: '/locations/sanur', reason: 'East Bali — limited service.' },
  { from: '/padang-bai', to: '/locations/sanur', reason: 'East Bali — limited service.' },
  { from: '/ungasan', to: '/locations/bukit', reason: 'Sub-area of the Bukit Peninsula.' },
  { from: '/pecatu', to: '/locations/bukit', reason: 'Sub-area of the Bukit Peninsula.' },

  // --- Micro-areas (private-chef variant) → /locations/ ---
  { from: '/echo-beach-private-chef', to: '/locations/canggu', reason: 'Echo Beach is in Canggu.' },
  { from: '/batu-bolong-private-chef', to: '/locations/canggu', reason: 'Batu Bolong is in Canggu.' },
  { from: '/pererenan-private-chef', to: '/locations/pererenan', reason: 'Pererenan private chef page.' },
  { from: '/bingin-private-chef', to: '/locations/uluwatu', reason: 'Bingin is on the Bukit / Uluwatu cluster.' },
  { from: '/padang-padang-private-chef', to: '/locations/uluwatu', reason: 'Padang Padang is on Bukit.' },
  { from: '/sayan-private-chef', to: '/locations/ubud', reason: 'Sayan is in Ubud.' },
  { from: '/penestanan-private-chef', to: '/locations/ubud', reason: 'Penestanan is in Ubud.' },
  { from: '/sanur-beach-private-chef', to: '/locations/sanur', reason: 'Sanur private chef page.' },

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
  { from: '/blog/private-chef-vs-restaurant-bali', to: '/catering', reason: 'Service comparison → catering hub.' },

  // --- SEO landing pages → most relevant pillar ---
  { from: '/best-private-chef-indonesia', to: '/', reason: 'Top-level SEO landing page → homepage.' },
  { from: '/private-chef-for-events', to: '/events', reason: 'Events SEO landing → events pillar.' },
  { from: '/luxury-chef-indonesia', to: '/fine-dining', reason: 'Luxury chef SEO landing → fine-dining.' },
  { from: '/wedding-catering-indonesia', to: '/events/weddings', reason: 'Wedding catering SEO → wedding events.' },
  { from: '/private-dining-indonesia', to: '/fine-dining', reason: 'Private dining SEO → fine-dining.' },
  { from: '/healthy-meal-delivery-indonesia', to: '/catering', reason: 'Meal delivery SEO → catering.' },
  { from: '/private-chef-booking-indonesia', to: '/quote', reason: 'Booking SEO → quote form.' },
  { from: '/chef-for-hire-indonesia', to: '/catering', reason: 'Hire chef SEO → catering.' },
  { from: '/proposal-dinner', to: '/fine-dining', reason: 'Proposal dinner request → fine-dining.' },
  { from: '/honeymoon-chef', to: '/fine-dining', reason: 'Honeymoon request → fine-dining.' },
  { from: '/private-chef-breakfast-bali', to: '/catering', reason: 'Breakfast service → catering.' },

  // --- Pricing pages ---
  { from: '/private-chef-cost-per-day-bali', to: '/pricing', reason: 'Cost inquiry → pricing page.' },
  { from: '/private-chef-cost-bali', to: '/pricing', reason: 'Cost inquiry → pricing page.' },

  // --- Contact & info pages ---
  { from: '/jakarta', to: '/contact', reason: 'Jakarta office page → contact form.' },
  { from: '/private-chef-menteng', to: '/contact', reason: 'Menteng location → contact.' },
  { from: '/recommended-services', to: '/contact', reason: 'Service recommendations → contact.' },
  { from: '/join-our-team', to: '/contact', reason: 'Recruitment → contact/staffing.' },
  { from: '/reviews', to: '/', reason: 'Old reviews page → homepage (testimonials integrated everywhere).' },

  // --- Legacy utility pages ---
  { from: '/retreats', to: '/events/retreats', reason: 'Consolidate retreat traffic into the dedicated retreats event page.' },
  { from: '/corporate-events', to: '/events/corporate-events', reason: 'Consolidate duplicate corporate events content into the canonical events pillar page.' },
  { from: '/villa-partners', to: '/partner-platform', reason: 'Old partners page → new partner platform.' },
  { from: '/why-mychef', to: '/about', reason: 'Why choose us → about page.' },
  { from: '/calculator', to: '/quote', reason: 'Old price calculator → quote form.' },
  { from: '/catering/buffet-catering', to: '/catering/buffet', reason: 'Old slug renamed: buffet-catering → buffet to match route.' },
]

/** Lookup map for the React Router fallback. */
export const REDIRECT_MAP: Record<string, string> = Object.fromEntries(
  REDIRECTS.map((r) => [r.from, r.to])
)
