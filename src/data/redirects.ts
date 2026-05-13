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
  // --- Areas we don't actively service (redirect to the nearest kept area) ---
  { from: '/kuta', to: '/seminyak', reason: 'Lower-end tourist hub adjacent to Seminyak — same chef pool.' },
  { from: '/legian', to: '/seminyak', reason: 'Adjacent to Seminyak.' },
  { from: '/kerobokan', to: '/seminyak', reason: 'Sub-neighborhood of Seminyak.' },
  { from: '/petitenget', to: '/seminyak', reason: 'Sub-neighborhood of Seminyak.' },
  { from: '/tanah-lot', to: '/canggu', reason: 'West coast cluster with Canggu.' },
  { from: '/tabanan', to: '/canggu', reason: 'West coast — Canggu chefs travel there.' },
  { from: '/denpasar', to: '/sanur', reason: 'Greater Denpasar area — Sanur is closest serviced.' },
  { from: '/gianyar', to: '/ubud', reason: 'Gianyar regency — Ubud is the chef base.' },
  { from: '/tegallalang', to: '/ubud', reason: 'Ubud regency.' },
  { from: '/amed', to: '/sanur', reason: 'East coast — limited service from Sanur base.' },
  { from: '/lovina', to: '/sanur', reason: 'North coast — limited service.' },
  { from: '/candidasa', to: '/sanur', reason: 'East Bali — limited service.' },
  { from: '/padang-bai', to: '/sanur', reason: 'East Bali — limited service.' },
  { from: '/ungasan', to: '/bukit', reason: 'Sub-area of the Bukit Peninsula.' },
  { from: '/pecatu', to: '/bukit', reason: 'Sub-area of the Bukit Peninsula.' },

  // --- Micro-areas → parent area ---
  { from: '/echo-beach-private-chef', to: '/canggu', reason: 'Echo Beach is in Canggu.' },
  { from: '/batu-bolong-private-chef', to: '/canggu', reason: 'Batu Bolong is in Canggu.' },
  { from: '/pererenan-private-chef', to: '/pererenan', reason: 'Duplicate of /pererenan.' },
  { from: '/bingin-private-chef', to: '/uluwatu', reason: 'Bingin is on the Bukit / Uluwatu cluster.' },
  { from: '/padang-padang-private-chef', to: '/uluwatu', reason: 'Padang Padang is on Bukit.' },
  { from: '/sayan-private-chef', to: '/ubud', reason: 'Sayan is in Ubud.' },
  { from: '/penestanan-private-chef', to: '/ubud', reason: 'Penestanan is in Ubud.' },
  { from: '/sanur-beach-private-chef', to: '/sanur', reason: 'Duplicate of /sanur.' },

  // --- Generic SEO keyword landings → closest brand match ---
  { from: '/best-private-chef-indonesia', to: '/', reason: 'Generic — homepage covers the value prop.' },
  { from: '/private-chef-for-events', to: '/events', reason: 'Maps directly to /events.' },
  { from: '/luxury-chef-indonesia', to: '/fine-dining', reason: 'Fine dining = luxury chef positioning.' },
  { from: '/wedding-catering-indonesia', to: '/services/wedding-celebrations', reason: 'Direct service match.' },
  { from: '/private-dining-indonesia', to: '/fine-dining', reason: 'Private dining = fine dining brand.' },
  { from: '/healthy-meal-delivery-indonesia', to: '/services/weekly-meal-prep', reason: 'Closest service.' },
  { from: '/private-chef-booking-indonesia', to: '/quote', reason: 'Booking intent → quote funnel.' },
  { from: '/chef-for-hire-indonesia', to: '/villa-chef', reason: 'Hire intent → villa chef brand page.' },
  { from: '/proposal-dinner', to: '/fine-dining', reason: 'Premium intimate dining = fine dining.' },
  { from: '/honeymoon-chef', to: '/fine-dining', reason: 'Premium intimate dining = fine dining.' },
  { from: '/private-chef-breakfast-bali', to: '/villa-chef', reason: 'Breakfast service belongs to villa chef.' },
  { from: '/private-chef-cost-per-day-bali', to: '/pricing', reason: 'Cost intent → pricing.' },
  { from: '/private-chef-cost-bali', to: '/pricing', reason: 'Cost intent → pricing.' },
  { from: '/jakarta', to: '/contact', reason: 'Not actively serving Jakarta — direct interested leads to contact.' },
  { from: '/private-chef-menteng', to: '/contact', reason: 'Not actively serving Menteng.' },

  // --- Services / menus we don't lead with ---
  { from: '/services/romantic-dinners', to: '/fine-dining', reason: 'Romantic dinners = fine dining offering.' },
  { from: '/services/family-reunions', to: '/villa-chef', reason: 'Family reunions = villa chef multi-day.' },
  { from: '/services/cooking-classes', to: '/contact', reason: 'Niche request — drive to contact.' },
  { from: '/services/corporate-events', to: '/corporate-events', reason: 'Consolidate corporate SEO equity into the dedicated /corporate-events landing page.' },
  { from: '/menus/asian-fusion', to: '/menus', reason: 'Consolidate menu pages.' },
  { from: '/menus/vegan', to: '/menus', reason: 'Consolidate menu pages.' },
  { from: '/menus/modern-european', to: '/menus', reason: 'Consolidate menu pages.' },
  { from: '/menus/halal', to: '/menus', reason: 'Consolidate menu pages.' },

  // --- Long-tail / utility we don't want to maintain ---
  { from: '/retreats', to: '/events', reason: 'Retreats are a kind of event.' },
  { from: '/recommended-services', to: '/contact', reason: 'Partner directory not a priority.' },
  { from: '/join-our-team', to: '/contact', reason: 'Careers funnel via contact for now.' },
  { from: '/reviews', to: '/', reason: 'Homepage has the social proof.' },
  { from: '/why-mychef', to: '/about', reason: 'Same intent as about page.' },
  { from: '/calculator', to: '/quote', reason: 'Calculator superseded by the quote funnel.' },

  // --- Guides + blog (write content later, redirect for now) ---
  { from: '/guide/bali-cuisine-glossary', to: '/menus', reason: 'Glossary article — point to menus until written.' },
  // /guide/private-chef-bali is intentionally kept as the 10-city hub page.
  { from: '/blog/private-chef-bali-cost-breakdown-2026', to: '/pricing', reason: 'Cost article — pricing page covers intent.' },
  { from: '/blog/best-bali-villas-private-chef-kitchen', to: '/partners', reason: 'Villa-focused article → partner pitch.' },
  { from: '/blog/wedding-rehearsal-dinner-bali', to: '/services/wedding-celebrations', reason: 'Wedding intent.' },
  { from: '/blog/yoga-retreat-chef-bali-meal-planning', to: '/events', reason: 'Retreat intent.' },
  { from: '/blog/private-chef-vs-restaurant-bali', to: '/villa-chef', reason: 'Decision article — point to villa chef offer.' },
  { from: '/blog', to: '/', reason: 'Blog index empty until first post is written.' },
]

/** Lookup map for the React Router fallback. */
export const REDIRECT_MAP: Record<string, string> = Object.fromEntries(
  REDIRECTS.map((r) => [r.from, r.to])
)
