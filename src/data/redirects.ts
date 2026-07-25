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
  // --- Renames ---
  { from: '/families', to: '/dining-styles', reason: 'Page renamed 2026-07: menu families hub → /dining-styles (same content, new canonical URL)' },

  // --- Systems-plan canonical redirects ---
  { from: '/experience', to: '/fine-dining', reason: 'Systems plan: /experience → /fine-dining/' },
  { from: '/story', to: '/chefs', reason: 'Systems plan: /story → /chefs (chef roster canonical).' },
  { from: '/service', to: '/in-villa-service', reason: 'Systems plan: /service → /in-villa-service/' },
  { from: '/join', to: '/staffing', reason: 'Systems plan: /join → /staffing/' },
  { from: '/partners', to: '/staffing/for-villa-managers', reason: 'Systems plan: /partners → /staffing/for-villa-managers/' },

  // --- Legacy legal/policy aliases → canonical pages (fix direct-access 404; canonical pages are prerendered) ---
  { from: '/terms-of-service', to: '/terms', reason: 'Legacy alias → canonical /terms (was hard 404 on direct access)' },
  { from: '/privacy-policy', to: '/privacy', reason: 'Legacy alias → canonical /privacy (was hard 404 on direct access)' },
  { from: '/payment-terms', to: '/cancellation', reason: 'Legacy alias → canonical /cancellation (same CancellationPage component; was hard 404)' },

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
  { from: '/berawa', to: '/locations/canggu', reason: 'Berawa is part of Canggu; /locations/berawa has no page — go straight to the real Canggu page (no chain).' },

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
  { from: '/blog/private-chef-bali-cost-breakdown-detailed-2026', to: '/blog/private-chef-cost-bali', reason: 'Consolidate duplicate cost guide onto primary cost page.' },
  // /blog/best-bali-villas-private-chef-kitchen — redirect removed 2026-06-27; content expanded to 700w, page now indexable.
  { from: '/blog/wedding-rehearsal-dinner-bali', to: '/events/weddings', reason: 'Wedding content → wedding events page.' },
  // NOTE: /blog/yoga-retreat-chef-bali-meal-planning is intentionally NOT redirected.
  // It renders a unique page (YogaRetreatChefPage) that self-canonicalises, emits
  // Article + BreadcrumbList schema, and is internally linked from
  // DiningByLocationBaliPage. Redirecting it orphaned real, indexable content.
  // --- SEO landing pages → most relevant pillar ---
  // (Landing page redirects removed to allow dedicated content to rank)
  { from: '/private-chef-booking-indonesia', to: '/quote', reason: 'Booking SEO → quote form.' },
  { from: '/private-chef-breakfast-bali', to: '/catering', reason: 'Breakfast service → catering.' },

  // --- Pricing pages ---
  { from: '/private-chef-cost-per-day-bali', to: '/pricing', reason: 'Cost inquiry → pricing page.' },
  { from: '/private-chef-cost-bali', to: '/pricing', reason: 'Cost inquiry → pricing page.' },

  // --- Contact & info pages ---
  // /reviews kept as a real indexable page — ReviewsPage.tsx route exists and is prerendered.

  // --- Legacy utility pages ---
  { from: '/retreats', to: '/events/retreats', reason: 'Consolidate retreat traffic into the dedicated retreats event page.' },
  { from: '/corporate-events', to: '/events/corporate-events', reason: 'Consolidate duplicate corporate events content into the canonical events pillar page.' },
  { from: '/villa-partners', to: '/certified-partner', reason: 'Old partners page → certified partner programme (avoid chain).' },
  { from: '/partner-platform', to: '/certified-partner', reason: 'Consolidate old partner platform → certified partner programme.' },
  { from: '/catering/buffet-catering', to: '/catering/buffet', reason: 'Old slug renamed: buffet-catering → buffet to match route.' },

  // --- 2026-06-13: 404s discovered by Mustafa audit ---
  // Keyword targets and nav links returning 404 — fix to prevent lead loss on
  // ranking keywords "private chef Bali" (#27), "Bali private chef hire", "private dining Bali".
  { from: '/services/private-chef', to: '/in-villa-service', reason: 'Keyword target for "private chef Bali" (#27) and "Bali private chef hire" — page never built. Redirect to main service page.' },
  { from: '/services/private-dining', to: '/fine-dining', reason: 'Keyword target for "private dining Bali" (1.4K/mo) — page never built. Redirect to fine-dining pillar.' },
  { from: '/about', to: '/chefs', reason: '404 from nav. Redirect to chef roster as closest "about us" content.' },
  { from: '/menu', to: '/fine-dining/menus', reason: '404 from nav/marketing. Redirect to fine-dining menus pillar.' },

  // --- Update 2: thin consolidation pages & duplicate chef roster ---
  { from: '/private-tasting-menu-bali', to: '/fine-dining/tasting-menu', reason: 'Thin duplicate → canonical tasting menu page.' },
  { from: '/chef-table-experience-bali', to: '/fine-dining/chefs-table', reason: 'Thin duplicate → canonical chef\'s table page.' },
  { from: '/fine-dining/our-chefs', to: '/chefs', reason: 'Duplicate chef roster → canonical /chefs roster.' },
  { from: '/villa-staff-bali-agency', to: '/staffing/villa-staff', reason: 'Duplicate villa-staff page → canonical staffing owner.' },

  // GA4 (25 May–21 Jun 2026): live URLs hitting the 404 page. Map each to its real equivalent.
  { from: '/romantic-dinner', to: '/fine-dining/romantic-dinner', reason: 'GA4 404 (8 views). Bare URL → real romantic dinner page.' },
  { from: '/corporate-events-catering-bali', to: '/blog/corporate-events-catering-bali', reason: 'GA4 404 (4 views). Page lives under /blog/.' },
  { from: '/events/weddings-bali', to: '/events/weddings', reason: 'GA4 404 (2 views). Old slug → canonical weddings page.' },
  { from: '/chef-placement-bali', to: '/staffing/private-chef-placement', reason: 'GA4 404 (2 views). Old slug → placement page.' },
  { from: '/live-in-chef-bali', to: '/staffing/live-in-chef', reason: 'GA4 404 (2 views). Old slug → live-in chef page.' },
  { from: '/retreat-catering-bali', to: '/catering/retreat-catering', reason: 'GA4 404 (2 views). Old slug → retreat catering page.' },
  { from: '/getting-started', to: '/help/getting-started', reason: 'GA4 404 (2 views). Bare URL → help getting-started page.' },

  // --- SEO audit 2026-06-28: 404 service aliases discovered by crawl ---
  { from: '/events/corporate', to: '/events/corporate-events', reason: 'Crawl 404: /events/corporate → canonical events corporate page.' },
  { from: '/events/proposals', to: '/events', reason: 'Crawl 404: no dedicated proposals page; redirect to events hub.' },
  { from: '/in-villa-service/villa-chef', to: '/villa-chef', reason: 'Crawl 404: alias for villa chef service.' },
  { from: '/in-villa-service/breakfast-service', to: '/catering/floating-breakfast', reason: 'Crawl 404: breakfast service → floating breakfast page.' },
  { from: '/in-villa-service/cooking-class', to: '/contact', reason: 'Crawl 404: cooking classes not offered; redirect to contact.' },
  { from: '/in-villa-service/meal-prep', to: '/villa-chef', reason: 'Crawl 404: meal prep → villa chef service.' },
  { from: '/staffing/chef-recruitment', to: '/staffing/private-chef-placement', reason: 'Crawl 404: chef recruitment → canonical placement page.' },
  { from: '/staffing/event-staff', to: '/staffing/villa-staff', reason: 'Crawl 404: event staff → villa staff page.' },

  // --- Duplicate blog content: /blog/chef-hiring-guide is identical to /blog/chef-qualifications-credentials-bali-hiring ---
  { from: '/blog/chef-hiring-guide', to: '/blog/chef-qualifications-credentials-bali-hiring', reason: 'Duplicate content: identical to chef-qualifications-credentials-bali-hiring. 301 to canonical.' },

  // --- Locations hub links without a dedicated /locations page → real pages (fix 404s) ---
  // The /locations hub iterates every city in LOCATIONS and links to /locations/[slug],
  // but only 12 have a page. Redirect the rest to a real, relevant page so none 404.
  // Targets are all REAL dedicated pages (SeminyakPage/CangguPage/UbudPage/UluwatuPage/
  // SanurPage/BukitPeninsulaPage) — chosen to avoid redirect chains.
  { from: '/locations/berawa', to: '/locations/canggu', reason: 'Berawa is part of Canggu — real Canggu page.' },
  { from: '/locations/kerobokan', to: '/locations/seminyak', reason: 'Kerobokan is part of Seminyak — real Seminyak page.' },
  { from: '/locations/legian', to: '/locations/seminyak', reason: 'Legian is adjacent to Seminyak — real Seminyak page.' },
  { from: '/locations/petitenget', to: '/locations/seminyak', reason: 'Petitenget is part of Seminyak — real Seminyak page.' },
  { from: '/locations/gianyar', to: '/locations/ubud', reason: 'Gianyar regency — Ubud is the chef base (real Ubud page).' },
  { from: '/locations/tegallalang', to: '/locations/ubud', reason: 'Tegallalang is in the Ubud area — real Ubud page.' },
  { from: '/locations/tabanan', to: '/locations/canggu', reason: 'Tabanan is west coast near Canggu — real Canggu page.' },
  { from: '/locations/tanah-lot', to: '/locations/canggu', reason: 'Tanah Lot is west coast near Canggu — real Canggu page.' },
  { from: '/locations/pecatu', to: '/locations/bukit', reason: 'Pecatu is on the Bukit Peninsula — real Bukit page.' },
  { from: '/locations/ungasan', to: '/locations/bukit', reason: 'Ungasan is on the Bukit Peninsula — real Bukit page.' },
  { from: '/locations/padang-bai', to: '/locations/sanur', reason: 'East Bali — served from Sanur base (real Sanur page).' },
  { from: '/locations/amed', to: '/locations/sanur', reason: 'East Bali — served from Sanur base (real Sanur page).' },
  { from: '/locations/candidasa', to: '/locations/sanur', reason: 'East Bali — served from Sanur base (real Sanur page).' },
  { from: '/locations/lovina', to: '/locations/sanur', reason: 'North Bali — served from Sanur base (real Sanur page).' },
  // --- /private-chef-bali/* + Bali keyword-location aliases → canonical pages (added 2026-06-23).
  //     Were soft-404 duplicates of the LocationPages / PrivateChefBaliPage; not internally linked,
  //     not in sitemap. Redirect each to the page it self-canonicals to (no chains). ---
  { from: '/private-chef-bali', to: '/fine-dining/private-chef-bali', reason: 'Duplicate of PrivateChefBaliPage (canonical = /fine-dining/private-chef-bali). Safe-default redirect; not promoted.' },
  // TASK-030 (2026-06-27): /private-chef-bali/[slug] → /private-chef/[slug]
  // New canonical URL pattern per Bali Domination Blueprint.
  // Main areas — redirect to richer /private-chef/[slug] pages
  { from: '/private-chef-bali/seminyak', to: '/private-chef/seminyak', reason: 'TASK-030: new canonical is /private-chef/seminyak (richer 13-section page).' },
  { from: '/private-chef-bali/canggu', to: '/private-chef/canggu', reason: 'TASK-030: new canonical is /private-chef/canggu.' },
  { from: '/private-chef-bali/uluwatu', to: '/private-chef/uluwatu', reason: 'TASK-030: new canonical is /private-chef/uluwatu.' },
  { from: '/private-chef-bali/ubud', to: '/private-chef/ubud', reason: 'TASK-030: new canonical is /private-chef/ubud.' },
  { from: '/private-chef-bali/jimbaran', to: '/private-chef/jimbaran', reason: 'TASK-030: new canonical is /private-chef/jimbaran.' },
  { from: '/private-chef-bali/nusa-dua', to: '/private-chef/nusa-dua', reason: 'TASK-030: new canonical is /private-chef/nusa-dua.' },
  { from: '/private-chef-bali/sanur', to: '/private-chef/sanur', reason: 'TASK-030: new canonical is /private-chef/sanur.' },
  { from: '/private-chef-bali/denpasar', to: '/private-chef/denpasar', reason: 'TASK-030: new canonical is /private-chef/denpasar.' },
  // Sub-areas — redirect to their own /private-chef/[slug] pages (all now published)
  { from: '/private-chef-bali/berawa', to: '/private-chef/berawa', reason: 'TASK-030: Berawa now has own /private-chef/berawa page.' },
  { from: '/private-chef-bali/petitenget', to: '/private-chef/petitenget', reason: 'TASK-030: Petitenget now has own /private-chef/petitenget page.' },
  { from: '/private-chef-bali/legian', to: '/private-chef/legian', reason: 'TASK-030: Legian now has own /private-chef/legian page.' },
  { from: '/private-chef-bali/kerobokan', to: '/private-chef/kerobokan', reason: 'TASK-030: Kerobokan now has own /private-chef/kerobokan page.' },
  { from: '/private-chef-bali/kuta', to: '/private-chef/kuta', reason: 'TASK-030: Kuta now has own /private-chef/kuta page.' },
  // Areas without own /private-chef/ pages yet — nearest published area
  { from: '/private-chef-bali/tanah-lot', to: '/private-chef/canggu', reason: 'West coast cluster — nearest published area is /private-chef/canggu.' },
  { from: '/private-chef-bali/pecatu', to: '/private-chef/bukit', reason: 'Pecatu is on Bukit peninsula — /private-chef/bukit.' },
  { from: '/private-chef-bali/ungasan', to: '/private-chef/bukit', reason: 'Ungasan is on Bukit peninsula — /private-chef/bukit.' },
  { from: '/private-chef-bali/gianyar', to: '/private-chef/ubud', reason: 'Gianyar regency — nearest is /private-chef/ubud.' },
  { from: '/private-chef-bali/tegallalang', to: '/private-chef/ubud', reason: 'Ubud regency — nearest is /private-chef/ubud.' },
  { from: '/private-chef-bali/tabanan', to: '/private-chef/canggu', reason: 'West coast — nearest is /private-chef/canggu.' },
  { from: '/private-chef-bali/padang-bai', to: '/private-chef/sanur', reason: 'East Bali — nearest served area is /private-chef/sanur.' },
  // --- Sitemap audit 2026-06-27: thin/duplicate blog stubs → canonical full articles ---
  { from: '/blog/yoga-retreat-chef-bali-meal-planning', to: '/journal/yoga-retreat-meal-planning-bali', reason: 'Thin stub (16w) covered by the full journal article on yoga retreat meal planning.' },

  // --- 2026-07-01: 39 /blog/* pages routed in App.tsx but NOT in sitemap (404 to Google), yet
  //     internally linked (crawl waste). Assessed as duplicates of live pages → 301 to the canonical
  //     equivalent. Consolidates crawl budget onto the served page. (indonesian-street-food kept & served.) ---
  { from: '/blog/private-chef-seminyak-guide', to: '/private-chef/seminyak', reason: 'Duplicate of live Seminyak private-chef page.' },
  { from: '/blog/private-chef-canggu-guide', to: '/private-chef/canggu', reason: 'Duplicate of live Canggu private-chef page.' },
  { from: '/blog/private-chef-ubud-guide', to: '/private-chef/ubud', reason: 'Duplicate of live Ubud private-chef page.' },
  { from: '/blog/private-chef-jimbaran-guide', to: '/private-chef/jimbaran', reason: 'Duplicate of live Jimbaran private-chef page.' },
  { from: '/blog/private-chef-sanur-guide', to: '/private-chef/sanur', reason: 'Duplicate of live Sanur private-chef page.' },
  { from: '/blog/private-chef-pererenan-guide', to: '/private-chef/pererenan', reason: 'Duplicate of live Pererenan private-chef page.' },
  { from: '/blog/private-chef-denpasar-guide', to: '/private-chef/denpasar', reason: 'Duplicate of live Denpasar private-chef page.' },
  { from: '/blog/private-chef-nusa-dua-guide', to: '/private-chef/nusa-dua', reason: 'Duplicate of live Nusa Dua private-chef page.' },
  { from: '/blog/private-chef-bali-expats', to: '/hire-private-chef-bali-monthly', reason: 'Expat long-stay recurring chef = monthly hire page.' },
  { from: '/blog/daily-chef-service-bali', to: '/hire-private-chef-bali-monthly', reason: 'Regular/recurring home cooking = monthly chef intent.' },
  { from: '/blog/household-chef-bali-hiring-guide', to: '/staffing/household-staff', reason: 'Duplicate of live household-staff staffing page.' },
  { from: '/blog/villa-staff-bali-hiring-guide', to: '/staffing/villa-staff', reason: 'Duplicate of live villa-staff staffing page.' },
  { from: '/blog/chef-placement-agency-bali', to: '/staffing/private-chef-placement', reason: 'Duplicate of live chef-placement staffing page.' },
  { from: '/blog/villa-butler-bali-guide', to: '/in-villa-service/butlers', reason: 'Duplicate of live butler service page.' },
  { from: '/blog/bartender-hire-bali', to: '/in-villa-service/bartenders', reason: 'Duplicate of live bartender service page.' },
  { from: '/blog/mixologist-hire-bali', to: '/in-villa-service/mixology', reason: 'Duplicate of live mixology service page.' },
  { from: '/blog/sommelier-hire-bali', to: '/in-villa-service/sommelier', reason: 'Duplicate of live sommelier service page.' },
  { from: '/blog/waiter-hire-bali', to: '/in-villa-service/waiters', reason: 'Duplicate of live waiter service page.' },
  { from: '/blog/event-staff-bali', to: '/in-villa-service', reason: 'Event waiter/bartender/host crew = in-villa-service hub.' },
  { from: '/blog/large-group-catering-bali', to: '/group-villa-dinner-packages-bali', reason: 'Duplicate of live large-group villa dinner page.' },
  { from: '/blog/bachelorette-party-bali-catering', to: '/events/villa-parties', reason: 'Bachelorette = villa party event.' },
  { from: '/blog/villa-party-catering-bali', to: '/events/villa-parties', reason: 'Duplicate of live villa-parties event page.' },
  { from: '/blog/pool-party-catering-bali', to: '/events/villa-parties', reason: 'Pool party = villa party event variant.' },
  { from: '/blog/baby-shower-catering-bali', to: '/events/baby-showers', reason: 'Duplicate of live baby-showers event page.' },
  { from: '/blog/birthday-party-catering-bali', to: '/events/birthdays', reason: 'Duplicate of live birthdays event page.' },
  { from: '/blog/bali-wellness-retreat-catering', to: '/catering/retreat-catering', reason: 'Duplicate of live retreat-catering page.' },
  { from: '/blog/new-years-eve-bali-private-chef', to: '/blog/holiday-chef-bali', reason: 'NYE = holiday chef; live holiday page in sitemap.' },
  { from: '/blog/christmas-dinner-bali-villa', to: '/blog/holiday-chef-bali', reason: 'Christmas = holiday chef; live holiday page in sitemap.' },
  { from: '/blog/bali-bbq-catering-villa-guide', to: '/catering/bbq-catering', reason: 'Duplicate of live BBQ catering page.' },
  { from: '/blog/grazing-table-bali', to: '/catering/grazing-tables', reason: 'Duplicate of live grazing-tables page.' },
  { from: '/blog/plated-dinner-catering-bali', to: '/catering/plated-catering', reason: 'Duplicate of live plated-catering page.' },
  { from: '/blog/babi-guling-catering-bali', to: '/catering/babi-guling', reason: 'Duplicate of live babi-guling catering page.' },
  { from: '/blog/brunch-catering-bali', to: '/catering', reason: 'Brunch catering → catering hub (breakfast page itself redirects to /catering; link direct, no chain).' },
  { from: '/blog/bali-wedding-catering-budget-guide', to: '/bali-wedding-catering-packages', reason: 'Duplicate of live wedding catering packages page.' },
  { from: '/blog/rehearsal-dinner-bali', to: '/journal/rehearsal-dinner-planning-bali', reason: 'Duplicate of live rehearsal-dinner journal guide.' },
  { from: '/blog/private-dining-bali', to: '/private-dining-indonesia', reason: 'Duplicate of live private-dining page.' },
  { from: '/blog/chefs-table-bali', to: '/fine-dining/chefs-table', reason: "Duplicate of live chef's-table experience page." },
  { from: '/blog/vegan-private-chef-bali', to: '/blog/dietary-specific-chef-bali', reason: 'Vegan = dietary-specific chef; live guide exists.' },

  // --- SEO rebuild 2026-07-24: canonical consolidation redirects ---
  { from: '/blog/corporate-events-catering-bali', to: '/corporate-case-studies', reason: 'Soft-404 consolidation: thin blog page → canonical case-studies page.' },
  { from: '/blog/how-to-hire-private-chef', to: '/blog/how-to-hire-private-chef-bali-complete-guide', reason: 'Soft-404 consolidation: old slug → canonical complete guide.' },
  { from: '/blog/romantic-dinner-at-home-bali-private-chef', to: '/fine-dining/romantic-dinner', reason: 'Duplicate blog content → canonical fine-dining romantic dinner page.' },

  // --- 2026-07-01 (pass 2): remaining broken internal links found by link crawl → 301 to nearest live page.
  //     /services/<pillar> came from ServicePage related-links using pillar slugs (no such /services page). ---
  { from: '/services/catering', to: '/catering', reason: 'Pillar link used /services/ prefix; real page is /catering.' },
  { from: '/services/events', to: '/events', reason: 'Pillar link used /services/ prefix; real page is /events.' },
  { from: '/services/fine-dining', to: '/fine-dining', reason: 'Pillar link used /services/ prefix; real page is /fine-dining.' },
  { from: '/services/in-villa-service', to: '/in-villa-service', reason: 'Pillar link used /services/ prefix; real page is /in-villa-service.' },
  { from: '/services/staffing', to: '/staffing', reason: 'Pillar link used /services/ prefix; real page is /staffing.' },
  { from: '/cancellation-policy', to: '/cancellation', reason: 'Old link; real page is /cancellation.' },
  { from: '/event-planning', to: '/events', reason: 'Old link; event planning → events pillar.' },
  { from: '/how-it-works', to: '/why-mychef', reason: 'Old link; process/why explained on /why-mychef.' },
  { from: '/blog/anniversary-dinner-villa-bali', to: '/events/anniversaries', reason: 'Dead blog link → live anniversaries event page.' },
  { from: '/blog/honeymoon-private-chef-bali', to: '/honeymoon-chef', reason: 'Dead blog link → live honeymoon chef page.' },
  { from: '/blog/proposal-dinner-bali-private-chef', to: '/proposal-dinner', reason: 'Dead blog link → live proposal dinner page.' },
  { from: '/blog/romantic-dinner-bali-private-chef', to: '/fine-dining/romantic-dinner', reason: 'Dead blog link → live romantic dinner page.' },
  { from: '/blog/buffet-vs-plated-service-bali', to: '/catering', reason: 'Dead blog link → catering (service styles).' },
  { from: '/blog/floating-breakfast-bali', to: '/catering/floating-breakfast', reason: 'Dead blog link → live floating breakfast page.' },
  { from: '/blog/bali-villa-cooking-class-private-chef', to: '/fine-dining', reason: 'Dead blog link → fine-dining (chef experience).' },
  { from: '/blog/food-allergies-dietary-requirements-bali', to: '/blog/dietary-specific-chef-bali', reason: 'Dead blog link → live dietary-specific guide.' },
  { from: '/blog/live-in-chef-bali-hiring-guide', to: '/staffing', reason: 'Dead blog link → staffing (live-in chef placement).' },
  { from: '/journal/bali-villa-dinner-party-guide', to: '/private-dining-indonesia', reason: 'Dead journal link → live private dining page.' },
  { from: '/journal/floating-breakfast-bali', to: '/catering/floating-breakfast', reason: 'Dead journal link → live floating breakfast page.' },
  { from: '/journal/wedding-catering-bali-cost', to: '/bali-wedding-catering-packages', reason: 'Dead journal link → live wedding catering packages page.' },

  // --- 2026-07-25: Jakarta focus removed; old city guides → homepage ---
  { from: '/private-chef-menteng', to: '/', reason: 'Jakarta focus removed; redirect to homepage.' },
  { from: '/journal/private-chef-jakarta-guide', to: '/', reason: 'Jakarta no longer a focus; redirect to homepage.' },
  { from: '/blog/private-chef-surabaya-guide', to: '/', reason: 'Surabaya/Jakarta no longer a focus; redirect to homepage.' },
  { from: '/locations/jakarta', to: '/', reason: 'Jakarta location focus removed; redirect to homepage.' },
]

/** Lookup map for the React Router fallback. */
export const REDIRECT_MAP: Record<string, string> = Object.fromEntries(
  REDIRECTS.map((r) => [r.from, r.to])
)
