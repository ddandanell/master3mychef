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

  { from: '/jakarta', to: '/locations/jakarta', reason: 'Canonicalize to /locations/' },
  { from: '/menteng', to: '/locations/jakarta', reason: 'No /locations/menteng page; /private-chef-menteng is itself a redirect — go straight to the real Jakarta hub.' },
  { from: '/kemang', to: '/locations/jakarta', reason: 'No /locations/kemang page; go straight to the real Jakarta hub (no chain).' },
  { from: '/scbd', to: '/locations/jakarta', reason: 'No /locations/scbd page; go straight to the real Jakarta hub (no chain).' },
  { from: '/pondok-indah', to: '/locations/jakarta', reason: 'No /locations/pondok-indah page; go straight to the real Jakarta hub (no chain).' },
  { from: '/bsd', to: '/locations/jakarta', reason: 'No /locations/bsd page; go straight to the real Jakarta hub (no chain).' },

  // --- Jakarta area (private-chef variant) → /locations/ ---
  { from: '/private-chef-puri-indah', to: '/locations/jakarta', reason: 'Puri Indah is a West Jakarta neighborhood — no dedicated page, redirect to Jakarta hub.' },
  { from: '/private-chef-kuningan', to: '/locations/jakarta', reason: 'Kuningan is a Central Jakarta business district — no dedicated page. Redirect to Jakarta hub (fixes GSC "duplicate, Google chose different canonical").' },

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

  // --- GA4 (25 May–21 Jun 2026): live URLs hitting the 404 page. Map each to its real equivalent.
  { from: '/romantic-dinner', to: '/fine-dining/romantic-dinner', reason: 'GA4 404 (8 views). Bare URL → real romantic dinner page.' },
  { from: '/corporate-events-catering-bali', to: '/blog/corporate-events-catering-bali', reason: 'GA4 404 (4 views). Page lives under /blog/.' },
  { from: '/events/weddings-bali', to: '/events/weddings', reason: 'GA4 404 (2 views). Old slug → canonical weddings page.' },
  { from: '/chef-placement-bali', to: '/staffing/private-chef-placement', reason: 'GA4 404 (2 views). Old slug → placement page.' },
  { from: '/live-in-chef-bali', to: '/staffing/live-in-chef', reason: 'GA4 404 (2 views). Old slug → live-in chef page.' },
  { from: '/retreat-catering-bali', to: '/catering/retreat-catering', reason: 'GA4 404 (2 views). Old slug → retreat catering page.' },
  { from: '/getting-started', to: '/help/getting-started', reason: 'GA4 404 (2 views). Bare URL → help getting-started page.' },

  // --- Locations hub links without a dedicated /locations page → real pages (fix 404s) ---
  // The /locations hub iterates every city in LOCATIONS and links to /locations/[slug],
  // but only 12 have a page. Redirect the rest to a real, relevant page so none 404.
  // Targets are all REAL dedicated pages (SeminyakPage/CangguPage/UbudPage/UluwatuPage/
  // SanurPage/BukitPeninsulaPage/JakartaPage) — chosen to avoid redirect chains.
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
  { from: '/locations/menteng', to: '/locations/jakarta', reason: 'Jakarta district — real Jakarta hub page.' },
  { from: '/locations/kemang', to: '/locations/jakarta', reason: 'Jakarta district — real Jakarta hub page.' },
  { from: '/locations/scbd', to: '/locations/jakarta', reason: 'Jakarta district — real Jakarta hub page.' },
  { from: '/locations/pondok-indah', to: '/locations/jakarta', reason: 'Jakarta district — real Jakarta hub page.' },
  { from: '/locations/bsd', to: '/locations/jakarta', reason: 'Jakarta district — real Jakarta hub page.' },
  { from: '/locations/bandung', to: '/locations/jakarta', reason: 'Java city — no dedicated page; real Jakarta hub page.' },
  { from: '/locations/surabaya', to: '/locations/jakarta', reason: 'Java city — no dedicated page; real Jakarta hub page.' },
  { from: '/locations/yogyakarta', to: '/locations/jakarta', reason: 'Java city — no dedicated page; real Jakarta hub page.' },

  // --- /private-chef-bali/* + Jakarta keyword-location aliases → canonical pages (added 2026-06-23).
  //     Were soft-404 duplicates of the LocationPages / PrivateChefBaliPage; not internally linked,
  //     not in sitemap. Redirect each to the page it self-canonicals to (no chains). ---
  { from: '/private-chef-bali', to: '/fine-dining/private-chef-bali', reason: 'Duplicate of PrivateChefBaliPage (canonical = /fine-dining/private-chef-bali). Safe-default redirect; not promoted.' },
  { from: '/private-chef-bali/seminyak', to: '/locations/seminyak', reason: 'Same SeminyakPage as /locations/seminyak (its self-canonical).' },
  { from: '/private-chef-bali/canggu', to: '/locations/canggu', reason: 'Same CangguPage as /locations/canggu (canonical).' },
  { from: '/private-chef-bali/uluwatu', to: '/locations/uluwatu', reason: 'Same UluwatuPage as /locations/uluwatu (canonical).' },
  { from: '/private-chef-bali/ubud', to: '/locations/ubud', reason: 'Same UbudPage as /locations/ubud (canonical).' },
  { from: '/private-chef-bali/jimbaran', to: '/locations/jimbaran', reason: 'Same JimbaranPage as /locations/jimbaran (canonical).' },
  { from: '/private-chef-bali/nusa-dua', to: '/locations/nusa-dua', reason: 'Same NusaDuaPage as /locations/nusa-dua (canonical).' },
  { from: '/private-chef-bali/sanur', to: '/locations/sanur', reason: 'Same SanurPage as /locations/sanur (canonical).' },
  { from: '/private-chef-bali/denpasar', to: '/locations/denpasar', reason: 'Same DenpasarPage as /locations/denpasar (canonical).' },
  { from: '/private-chef-bali/berawa', to: '/locations/canggu', reason: 'Berawa is part of Canggu — real Canggu page (mirrors /berawa).' },
  { from: '/private-chef-bali/petitenget', to: '/locations/seminyak', reason: 'Sub-neighborhood of Seminyak (mirrors /petitenget).' },
  { from: '/private-chef-bali/legian', to: '/locations/seminyak', reason: 'Adjacent to Seminyak (mirrors /legian).' },
  { from: '/private-chef-bali/kerobokan', to: '/locations/seminyak', reason: 'Sub-neighborhood of Seminyak (mirrors /kerobokan).' },
  { from: '/private-chef-bali/kuta', to: '/locations/seminyak', reason: 'Adjacent to Seminyak (mirrors /kuta).' },
  { from: '/private-chef-bali/tanah-lot', to: '/locations/canggu', reason: 'West coast cluster with Canggu (mirrors /tanah-lot).' },
  { from: '/private-chef-bali/pecatu', to: '/locations/bukit', reason: 'Pecatu is on the Bukit peninsula (mirrors /pecatu).' },
  { from: '/private-chef-bali/ungasan', to: '/locations/bukit', reason: 'Ungasan is on the Bukit peninsula (mirrors /ungasan).' },
  { from: '/private-chef-bali/gianyar', to: '/locations/ubud', reason: 'Gianyar regency — Ubud base (mirrors /gianyar).' },
  { from: '/private-chef-bali/tegallalang', to: '/locations/ubud', reason: 'Ubud regency (mirrors /tegallalang).' },
  { from: '/private-chef-bali/tabanan', to: '/locations/canggu', reason: 'West coast — Canggu base (mirrors /tabanan).' },
  { from: '/private-chef-bali/padang-bai', to: '/locations/sanur', reason: 'East Bali — served from Sanur base (mirrors /padang-bai).' },
  { from: '/private-chef-bsd', to: '/locations/jakarta', reason: 'Jakarta (BSD) — real Jakarta hub page (mirrors /locations/bsd).' },
  { from: '/private-chef-kemang', to: '/locations/jakarta', reason: 'Jakarta (Kemang) — real Jakarta hub page (mirrors /locations/kemang).' },
  { from: '/private-chef-scbd', to: '/locations/jakarta', reason: 'Jakarta (SCBD) — real Jakarta hub page (mirrors /locations/scbd).' },
  { from: '/private-chef-pondok-indah', to: '/locations/jakarta', reason: 'Jakarta (Pondok Indah) — real Jakarta hub page (mirrors /locations/pondok-indah).' },

  // --- Sitemap audit 2026-06-27: thin/duplicate blog stubs → canonical full articles ---
  { from: '/blog/private-chef-bali-cost-breakdown-2026', to: '/blog/private-chef-cost-bali', reason: 'Thin stub (18w) duplicating the full cost guide. Redirect to canonical /blog/private-chef-cost-bali.' },
  { from: '/blog/wedding-rehearsal-dinner-bali', to: '/journal/rehearsal-dinner-planning-bali', reason: 'Thin stub (15w) covered by the full journal article on rehearsal dinner planning.' },
  { from: '/blog/yoga-retreat-chef-bali-meal-planning', to: '/journal/yoga-retreat-meal-planning-bali', reason: 'Thin stub (16w) covered by the full journal article on yoga retreat meal planning.' },
]

/** Lookup map for the React Router fallback. */
export const REDIRECT_MAP: Record<string, string> = Object.fromEntries(
  REDIRECTS.map((r) => [r.from, r.to])
)
