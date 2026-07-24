/**
 * Prerender every route's rendered body into its static HTML (SEO / Ch 9.3.1).
 *
 * Problem: this is a Vite SPA — the served HTML is a meta-only shell with an
 *   empty <div id="root">. Googlebot's HTML pass sees no content and no
 *   internal <a href> links (Ch 9.3.4). All content is client-rendered.
 *
 * Solution: after `vite build` + `inject-meta`, boot `vite preview`, render
 *   every SITEMAP route in headless Chromium, and splice the rendered
 *   #root markup INTO the inject-meta'd dist/<route>/index.html — keeping the
 *   controlled static <head> (canonical / OG / JSON-LD) AND adding real body
 *   content, H1, and crawlable internal links.
 *
 * Output path matches what Vercel serves: dist/<route>/index.html.
 * Runs in CI (GitHub Actions) where full Chromium is available; the prebuilt
 * dist is then deployed to Vercel via `vercel deploy --prebuilt`.
 *
 * Env:
 *   PRERENDER_LIMIT=<n>   only render the first n routes (local verification)
 *   SKIP_PRERENDER=1      skip entirely (emergency escape hatch)
 */

import { chromium, type Browser } from 'playwright'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn, type ChildProcess } from 'node:child_process'

import { SITEMAP } from '../src/data/sitemap'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, '..', 'dist')
const BASE_URL = 'http://127.0.0.1:4173'
const ROOT_EMPTY = '<div id="root"></div>'
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY ?? 8)
const LIMIT = process.env.PRERENDER_LIMIT ? Number(process.env.PRERENDER_LIMIT) : Infinity

// Critical pages to prerender (kept for reference; rendered dynamically from sitemap)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ROUTES = [
  { path: '/', file: 'index.html' },
  { path: '/fine-dining', file: 'fine-dining.html' },
  { path: '/catering', file: 'catering.html' },
  { path: '/events', file: 'events.html' },
  { path: '/events/villa-parties', file: 'events-villa-parties.html' },
  { path: '/events/weddings', file: 'events-weddings.html' },
  { path: '/fine-dining/private-chef-bali', file: 'private-chef-bali.html' },
  { path: '/faq', file: 'faq.html' },
  { path: '/pricing', file: 'pricing.html' },
  { path: '/pricing-calculator', file: 'pricing-calculator.html' },
  { path: '/chefs', file: 'chefs.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' },
  { path: '/book', file: 'book.html' },
  { path: '/reviews', file: 'reviews.html' },
  { path: '/partner-platform', file: 'partner-platform.html' },
  { path: '/corporate-case-studies', file: 'corporate-case-studies.html' },
  { path: '/certified-partner', file: 'certified-partner.html' },
  { path: '/press', file: 'press.html' },
  { path: '/retreats', file: 'retreats.html' },
  // Service & utility pages that were internally linked but 404'd on direct access
  { path: '/villa-chef', file: 'villa-chef.html' },
  { path: '/recommended-services', file: 'recommended-services.html' },
  { path: '/join-our-team', file: 'join-our-team.html' },
  // Staffing
  { path: '/staffing', file: 'staffing.html' },
  // In-villa service
  { path: '/in-villa-service', file: 'in-villa-service.html' },
  // Locations hub
  { path: '/locations', file: 'locations.html' },
  // Locations
  { path: '/seminyak', file: 'seminyak.html' },
  { path: '/canggu', file: 'canggu.html' },
  { path: '/ubud', file: 'ubud.html' },
  { path: '/uluwatu', file: 'uluwatu.html' },
  { path: '/nusa-dua', file: 'nusa-dua.html' },
  { path: '/jimbaran', file: 'jimbaran.html' },
  { path: '/sanur', file: 'sanur.html' },
  { path: '/berawa', file: 'berawa.html' },
  { path: '/pererenan', file: 'pererenan.html' },
  { path: '/bukit', file: 'bukit.html' },
  // Legal / policies
  { path: '/cancellation', file: 'cancellation.html' },
  { path: '/privacy', file: 'privacy.html' },
  { path: '/terms', file: 'terms.html' },
  // Guides
  { path: '/guide/bali-cuisine-glossary', file: 'guide-bali-cuisine-glossary.html' },
  { path: '/guide/private-chef-bali', file: 'guide-private-chef-bali.html' },
  // Blog posts
  { path: '/blog/private-chef-bali-cost-breakdown-2026', file: 'blog-private-chef-bali-cost-breakdown-2026.html' },
  { path: '/blog/wedding-rehearsal-dinner-bali', file: 'blog-wedding-rehearsal-dinner-bali.html' },
  { path: '/blog/yoga-retreat-chef-bali-meal-planning', file: 'blog-yoga-retreat-chef-bali-meal-planning.html' },
  { path: '/blog/private-chef-vs-restaurant-bali', file: 'blog-private-chef-vs-restaurant-bali.html' },
  { path: '/blog/how-to-plan-villa-birthday-party-bali', file: 'blog-how-to-plan-villa-birthday-party-bali.html' },
  { path: '/blog/how-to-hire-private-chef-bali-complete-guide', file: 'blog-how-to-hire-private-chef-bali-complete-guide.html' },
  { path: '/blog/chef-qualifications-credentials-bali-hiring', file: 'blog-chef-qualifications-credentials-bali-hiring.html' },
  { path: '/blog/wedding-private-chef-bali-planning-guide', file: 'blog-wedding-private-chef-bali-planning-guide.html' },
  { path: '/blog/corporate-events-catering-bali-team-dining', file: 'blog-corporate-events-catering-bali-team-dining.html' },
  { path: '/blog/romantic-dinner-bali-private-chef', file: 'blog-romantic-dinner-bali-private-chef.html' },
  { path: '/blog/dining-by-location-bali-neighborhood-guide', file: 'blog-dining-by-location-bali-neighborhood-guide.html' },
  { path: '/blog/buffet-vs-plated-service-bali', file: 'blog-buffet-vs-plated-service-bali.html' },
  { path: '/blog/dry-season-menu-bali', file: 'blog-dry-season-menu-bali.html' },
  { path: '/blog/wet-season-menu-bali', file: 'blog-wet-season-menu-bali.html' },
  { path: '/blog/festive-season-menu-bali', file: 'blog-festive-season-menu-bali.html' },
  { path: '/blog/proposal-dinner-bali-private-chef', file: 'blog-proposal-dinner-bali-private-chef.html' },
  { path: '/blog/honeymoon-private-chef-bali', file: 'blog-honeymoon-private-chef-bali.html' },
  { path: '/blog/anniversary-dinner-villa-bali', file: 'blog-anniversary-dinner-villa-bali.html' },
  { path: '/blog/floating-breakfast-bali', file: 'blog-floating-breakfast-bali.html' },
  { path: '/blog/private-dinner-party-bali', file: 'blog-private-dinner-party-bali.html' },
  { path: '/blog/bali-villa-cooking-class-private-chef', file: 'blog-bali-villa-cooking-class-private-chef.html' },
  { path: '/blog/corporate-catering-bali-case-studies', file: 'blog-corporate-catering-bali-case-studies.html' },
  { path: '/blog/live-in-chef-bali-hiring-guide', file: 'blog-live-in-chef-bali-hiring-guide.html' },
  { path: '/blog/private-chef-bali-expats', file: 'blog-private-chef-bali-expats.html' },
  { path: '/blog/bachelor-party-bali-private-chef', file: 'blog-bachelor-party-bali-private-chef.html' },
  { path: '/blog/bachelorette-party-bali-catering', file: 'blog-bachelorette-party-bali-catering.html' },
  { path: '/blog/new-years-eve-bali-private-chef', file: 'blog-new-years-eve-bali-private-chef.html' },
  { path: '/blog/baby-shower-catering-bali', file: 'blog-baby-shower-catering-bali.html' },
  { path: '/blog/large-group-catering-bali', file: 'blog-large-group-catering-bali.html' },
  { path: '/blog/villa-staff-bali-hiring-guide', file: 'blog-villa-staff-bali-hiring-guide.html' },
  { path: '/blog/bali-wellness-retreat-catering', file: 'blog-bali-wellness-retreat-catering.html' },
  { path: '/blog/christmas-dinner-bali-villa', file: 'blog-christmas-dinner-bali-villa.html' },
  { path: '/blog/villa-butler-bali-guide', file: 'blog-villa-butler-bali-guide.html' },
  { path: '/blog/birthday-party-catering-bali', file: 'blog-birthday-party-catering-bali.html' },
  { path: '/blog/bali-bbq-catering-villa-guide', file: 'blog-bali-bbq-catering-villa-guide.html' },
  { path: '/blog/private-chef-seminyak-canggu-ubud-comparison', file: 'blog-private-chef-seminyak-canggu-ubud-comparison.html' },
  { path: '/blog/indonesian-street-food-private-chef-bali', file: 'blog-indonesian-street-food-private-chef-bali.html' },
  { path: '/blog/bali-wedding-catering-budget-guide', file: 'blog-bali-wedding-catering-budget-guide.html' },
  { path: '/blog/private-chef-nusa-dua-guide', file: 'blog-private-chef-nusa-dua-guide.html' },
  { path: '/blog/private-chef-ubud-guide', file: 'blog-private-chef-ubud-guide.html' },
  { path: '/blog/private-chef-canggu-guide', file: 'blog-private-chef-canggu-guide.html' },
  { path: '/blog/private-chef-seminyak-guide', file: 'blog-private-chef-seminyak-guide.html' },
  { path: '/blog/household-chef-bali-hiring-guide', file: 'blog-household-chef-bali-hiring-guide.html' },
  { path: '/blog/private-chef-jimbaran-guide', file: 'blog-private-chef-jimbaran-guide.html' },
  { path: '/blog/private-chef-roles-responsibilities-explained', file: 'blog-private-chef-roles-responsibilities-explained.html' },
  { path: '/blog/fine-dining-trends-bali-2026-innovations', file: 'blog-fine-dining-trends-bali-2026-innovations.html' },
  { path: '/blog/private-chef-sanur-guide', file: 'blog-private-chef-sanur-guide.html' },
  { path: '/blog/private-chef-pererenan-guide', file: 'blog-private-chef-pererenan-guide.html' },
  { path: '/blog/private-chef-denpasar-guide', file: 'blog-private-chef-denpasar-guide.html' },
  { path: '/blog/chef-placement-agency-bali', file: 'blog-chef-placement-agency-bali.html' },
  { path: '/blog/event-staff-bali', file: 'blog-event-staff-bali.html' },
  { path: '/blog/bartender-hire-bali', file: 'blog-bartender-hire-bali.html' },
  { path: '/blog/daily-chef-service-bali', file: 'blog-daily-chef-service-bali.html' },
  { path: '/blog/grazing-table-bali', file: 'blog-grazing-table-bali.html' },
  { path: '/blog/villa-party-catering-bali', file: 'blog-villa-party-catering-bali.html' },
  { path: '/blog/babi-guling-catering-bali', file: 'blog-babi-guling-catering-bali.html' },
  { path: '/blog/plated-dinner-catering-bali', file: 'blog-plated-dinner-catering-bali.html' },
  { path: '/blog/mixologist-hire-bali', file: 'blog-mixologist-hire-bali.html' },
  { path: '/blog/sommelier-hire-bali', file: 'blog-sommelier-hire-bali.html' },
  { path: '/blog/rehearsal-dinner-bali', file: 'blog-rehearsal-dinner-bali.html' },
  { path: '/blog/waiter-hire-bali', file: 'blog-waiter-hire-bali.html' },
  { path: '/blog/private-dining-bali', file: 'blog-private-dining-bali.html' },
  { path: '/blog/chefs-table-bali', file: 'blog-chefs-table-bali.html' },
  { path: '/blog/brunch-catering-bali', file: 'blog-brunch-catering-bali.html' },
  { path: '/blog/pool-party-catering-bali', file: 'blog-pool-party-catering-bali.html' },
  { path: '/blog/vegan-private-chef-bali', file: 'blog-vegan-private-chef-bali.html' },
  { path: '/partner', file: 'partner.html' },
  // Journal index
  { path: '/journal', file: 'journal.html' },
  // Journal posts (all 16)
  { path: '/journal/michelin-training-bali', file: 'journal-michelin-training-bali.html' },
  { path: '/journal/sustainable-sourcing', file: 'journal-sustainable-sourcing.html' },
  { path: '/journal/private-chef-vs-villa-staff-bali', file: 'journal-private-chef-vs-villa-staff-bali.html' },
  { path: '/journal/bali-private-chef-cost-guide-2026', file: 'journal-bali-private-chef-cost-guide-2026.html' },
  { path: '/journal/villa-wedding-catering-logistics-bali', file: 'journal-villa-wedding-catering-logistics-bali.html' },
  { path: '/journal/yoga-retreat-meal-planning-bali', file: 'journal-yoga-retreat-meal-planning-bali.html' },
  { path: '/journal/private-chef-seminyak-guide', file: 'journal-private-chef-seminyak-guide.html' },
  { path: '/journal/private-chef-canggu-guide', file: 'journal-private-chef-canggu-guide.html' },
  { path: '/journal/private-chef-ubud-villa-dining', file: 'journal-private-chef-ubud-villa-dining.html' },
  { path: '/journal/bali-wedding-catering-complete-guide', file: 'journal-bali-wedding-catering-complete-guide.html' },
  { path: '/journal/rehearsal-dinner-planning-bali', file: 'journal-rehearsal-dinner-planning-bali.html' },
  { path: '/journal/live-in-chef-vs-daily-service', file: 'journal-live-in-chef-vs-daily-service.html' },
  { path: '/journal/bbq-catering-cost-breakdown-bali', file: 'journal-bbq-catering-cost-breakdown-bali.html' },
  { path: '/journal/italian-tasting', file: 'journal-italian-tasting.html' },
  { path: '/journal/wagyu-experience', file: 'journal-wagyu-experience.html' },
  // /private-chef/[slug] — Bali Domination Blueprint area landing pages (TASK-027)
  { path: '/private-chef/seminyak', file: 'private-chef-seminyak.html' },
  { path: '/private-chef/canggu', file: 'private-chef-canggu.html' },
  { path: '/private-chef/ubud', file: 'private-chef-ubud.html' },
  { path: '/private-chef/uluwatu', file: 'private-chef-uluwatu.html' },
  { path: '/private-chef/jimbaran', file: 'private-chef-jimbaran.html' },
  { path: '/private-chef/nusa-dua', file: 'private-chef-nusa-dua.html' },
  { path: '/private-chef/sanur', file: 'private-chef-sanur.html' },
  { path: '/private-chef/denpasar', file: 'private-chef-denpasar.html' },
  { path: '/private-chef/berawa', file: 'private-chef-berawa.html' },
  { path: '/private-chef/pererenan', file: 'private-chef-pererenan.html' },
  { path: '/private-chef/kerobokan', file: 'private-chef-kerobokan.html' },
  { path: '/private-chef/petitenget', file: 'private-chef-petitenget.html' },
  { path: '/private-chef/kuta', file: 'private-chef-kuta.html' },
  { path: '/private-chef/legian', file: 'private-chef-legian.html' },
  { path: '/private-chef/bukit', file: 'private-chef-bukit.html' },
  // Phase 1 Tier 1 expansion
  { path: '/private-chef/umalas', file: 'private-chef-umalas.html' },
  { path: '/private-chef/batu-belig', file: 'private-chef-batu-belig.html' },
  { path: '/private-chef/pecatu', file: 'private-chef-pecatu.html' },
  { path: '/private-chef/ungasan', file: 'private-chef-ungasan.html' },
  { path: '/private-chef/tanjung-benoa', file: 'private-chef-tanjung-benoa.html' },
  { path: '/private-chef/sayan', file: 'private-chef-sayan.html' },
  { path: '/private-chef/tegallalang', file: 'private-chef-tegallalang.html' },
  { path: '/private-chef/renon', file: 'private-chef-renon.html' },
  { path: '/private-chef/tanah-lot', file: 'private-chef-tanah-lot.html' },
  { path: '/private-chef/nusa-lembongan', file: 'private-chef-nusa-lembongan.html' },
  { path: '/private-chef/nusa-penida', file: 'private-chef-nusa-penida.html' },
  // Phase 1 Tier 1 completion — Gianyar, Tabanan, Islands
  { path: '/private-chef/mas', file: 'private-chef-mas.html' },
  { path: '/private-chef/penestanan', file: 'private-chef-penestanan.html' },
  { path: '/private-chef/nyanyi', file: 'private-chef-nyanyi.html' },
  { path: '/private-chef/cemagi', file: 'private-chef-cemagi.html' },
  { path: '/private-chef/seseh', file: 'private-chef-seseh.html' },
  { path: '/private-chef/nusa-ceningan', file: 'private-chef-nusa-ceningan.html' },
  // Phase 2 Tier 2 expansion — Badung Bukit, Gianyar, Tabanan, Karangasem, Buleleng, Bangli
  { path: '/private-chef/balangan', file: 'private-chef-balangan.html' },
  { path: '/private-chef/bingin', file: 'private-chef-bingin.html' },
  { path: '/private-chef/padang-padang', file: 'private-chef-padang-padang.html' },
  { path: '/private-chef/sukawati', file: 'private-chef-sukawati.html' },
  { path: '/private-chef/payangan', file: 'private-chef-payangan.html' },
  { path: '/private-chef/keramas', file: 'private-chef-keramas.html' },
  { path: '/private-chef/bedugul', file: 'private-chef-bedugul.html' },
  { path: '/private-chef/jatiluwih', file: 'private-chef-jatiluwih.html' },
  { path: '/private-chef/tabanan', file: 'private-chef-tabanan.html' },
  { path: '/private-chef/amed', file: 'private-chef-amed.html' },
  { path: '/private-chef/sidemen', file: 'private-chef-sidemen.html' },
  { path: '/private-chef/candidasa', file: 'private-chef-candidasa.html' },
  { path: '/private-chef/tulamben', file: 'private-chef-tulamben.html' },
  { path: '/private-chef/lovina', file: 'private-chef-lovina.html' },
  { path: '/private-chef/singaraja', file: 'private-chef-singaraja.html' },
  { path: '/private-chef/pemuteran', file: 'private-chef-pemuteran.html' },
  { path: '/private-chef/kintamani', file: 'private-chef-kintamani.html' },
  // Phase 3 Tier 3 — luxury villa villages & emerging areas
  { path: '/private-chef/kedewatan', file: 'private-chef-kedewatan.html' },
  { path: '/private-chef/nyuh-kuning', file: 'private-chef-nyuh-kuning.html' },
  { path: '/private-chef/lodtunduh', file: 'private-chef-lodtunduh.html' },
  { path: '/private-chef/tirta-gangga', file: 'private-chef-tirta-gangga.html' },
  { path: '/private-chef/munduk', file: 'private-chef-munduk.html' },
  { path: '/private-chef/gianyar', file: 'private-chef-gianyar.html' },
  { path: '/private-chef/padang-bai', file: 'private-chef-padang-bai.html' },
  { path: '/private-chef/baturiti', file: 'private-chef-baturiti.html' },
  { path: '/private-chef/mengwi', file: 'private-chef-mengwi.html' },
  { path: '/private-chef/ketewel', file: 'private-chef-ketewel.html' },
  { path: '/private-chef/abiansemal', file: 'private-chef-abiansemal.html' },
  { path: '/private-chef/cepaka', file: 'private-chef-cepaka.html' },
  // New landing pages from latest commit
  { path: '/baby-shower-catering-bali', file: 'baby-shower-catering-bali.html' },
  { path: '/bachelor-party-bali', file: 'bachelor-party-bali.html' },
  { path: '/bachelorette-party-catering', file: 'bachelorette-party-catering.html' },
  { path: '/large-group-catering-bali', file: 'large-group-catering-bali.html' },
  { path: '/new-years-eve-bali', file: 'new-years-eve-bali.html' },
  { path: '/villa-staff-bali-guide', file: 'villa-staff-bali-guide.html' },
  { path: '/wellness-retreat-catering', file: 'wellness-retreat-catering.html' },
  // Utility & info pages
  { path: '/quote', file: 'quote.html' },
  { path: '/calculator', file: 'calculator.html' },
  { path: '/menus', file: 'menus.html' },
  { path: '/services', file: 'services.html' },
  { path: '/why-mychef', file: 'why-mychef.html' },
  // Help centre guides
  { path: '/help', file: 'help.html' },
  { path: '/help/getting-started', file: 'help-getting-started.html' },
  { path: '/help/pricing', file: 'help-pricing.html' },
  { path: '/help/menu-guide', file: 'help-menu-guide.html' },
  { path: '/help/wedding-guide', file: 'help-wedding-guide.html' },
  { path: '/help/corporate-guide', file: 'help-corporate-guide.html' },
  { path: '/help/staffing-guide', file: 'help-staffing-guide.html' },
  { path: '/help/managing-booking', file: 'help-managing-booking.html' },
  // Fine-dining sub-pages
  { path: '/fine-dining/romantic-dinner', file: 'fine-dining-romantic-dinner.html' },
  { path: '/fine-dining/tasting-menu', file: 'fine-dining-tasting-menu.html' },
  { path: '/fine-dining/chefs-table', file: 'fine-dining-chefs-table.html' },
  { path: '/fine-dining/menus', file: 'fine-dining-menus.html' },
  { path: '/fine-dining/our-chefs', file: 'fine-dining-our-chefs.html' },
  // Catering sub-pages
  { path: '/catering/bbq-catering', file: 'catering-bbq-catering.html' },
  { path: '/catering/buffet', file: 'catering-buffet.html' },
  { path: '/catering/plated-catering', file: 'catering-plated-catering.html' },
  { path: '/catering/drop-off-catering', file: 'catering-drop-off-catering.html' },
  { path: '/catering/babi-guling', file: 'catering-babi-guling.html' },
  { path: '/catering/grazing-tables', file: 'catering-grazing-tables.html' },
  { path: '/catering/villa-catering', file: 'catering-villa-catering.html' },
  { path: '/catering/corporate-catering', file: 'catering-corporate-catering.html' },
  { path: '/catering/retreat-catering', file: 'catering-retreat-catering.html' },
  { path: '/catering/floating-breakfast', file: 'catering-floating-breakfast.html' },
  // Events sub-pages
  { path: '/events/birthdays', file: 'events-birthdays.html' },
  { path: '/events/anniversaries', file: 'events-anniversaries.html' },
  { path: '/events/corporate-events', file: 'events-corporate-events.html' },
  { path: '/events/retreats', file: 'events-retreats.html' },
  { path: '/events/baby-showers', file: 'events-baby-showers.html' },
  // In-villa service sub-pages
  { path: '/in-villa-service/waiters', file: 'in-villa-service-waiters.html' },
  { path: '/in-villa-service/butlers', file: 'in-villa-service-butlers.html' },
  { path: '/in-villa-service/bartenders', file: 'in-villa-service-bartenders.html' },
  { path: '/in-villa-service/mixology', file: 'in-villa-service-mixology.html' },
  { path: '/in-villa-service/sommelier', file: 'in-villa-service-sommelier.html' },
  { path: '/in-villa-service/host-hostess', file: 'in-villa-service-host-hostess.html' },
  // Staffing sub-pages
  { path: '/staffing/private-chef-placement', file: 'staffing-private-chef-placement.html' },
  { path: '/staffing/live-in-chef', file: 'staffing-live-in-chef.html' },
  { path: '/staffing/villa-staff', file: 'staffing-villa-staff.html' },
  { path: '/staffing/household-staff', file: 'staffing-household-staff.html' },
  { path: '/staffing/for-villa-managers', file: 'staffing-for-villa-managers.html' },
  { path: '/staffing/for-hotels-restaurants', file: 'staffing-for-hotels-restaurants.html' },
  // Locations sub-pages
  { path: '/locations/seminyak', file: 'locations-seminyak.html' },
  { path: '/locations/canggu', file: 'locations-canggu.html' },
  { path: '/locations/ubud', file: 'locations-ubud.html' },
  { path: '/locations/uluwatu', file: 'locations-uluwatu.html' },
  { path: '/locations/nusa-dua', file: 'locations-nusa-dua.html' },
  { path: '/locations/jimbaran', file: 'locations-jimbaran.html' },
  { path: '/locations/sanur', file: 'locations-sanur.html' },
  { path: '/locations/berawa', file: 'locations-berawa.html' },
  { path: '/locations/pererenan', file: 'locations-pererenan.html' },
  { path: '/locations/bukit', file: 'locations-bukit.html' },
  { path: '/locations/kuta', file: 'locations-kuta.html' },
  { path: '/locations/denpasar', file: 'locations-denpasar.html' },
  // Private-chef area pages (top 25 completion)
  { path: '/private-chef/echo-beach', file: 'private-chef-echo-beach.html' },
  { path: '/private-chef/batu-bolong', file: 'private-chef-batu-bolong.html' },
  // Key blog pages
  { path: '/blog/private-chef-cost-bali', file: 'blog-private-chef-cost-bali.html' },
  { path: '/blog/best-bali-villas-private-chef-kitchen', file: 'blog-best-bali-villas-private-chef-kitchen.html' },
  // Key landing pages
  { path: '/villa-bbq-catering-bali', file: 'villa-bbq-catering-bali.html' },
  { path: '/bali-wedding-catering-packages', file: 'bali-wedding-catering-packages.html' },
  { path: '/michelin-private-chef-bali-prices', file: 'michelin-private-chef-bali-prices.html' },
  { path: '/private-tasting-menu-bali', file: 'private-tasting-menu-bali.html' },
  { path: '/chef-table-experience-bali', file: 'chef-table-experience-bali.html' },
]

function distFileForRoute(routePath: string): string {
  // Mirrors inject-meta.ts: dist/<route>/index.html ( '/' -> dist/index.html )
  const clean = routePath.replace(/^\/+|\/+$/g, '')
  return clean ? join(DIST_DIR, clean, 'index.html') : join(DIST_DIR, 'index.html')
}

function startPreviewServer(): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    console.log('🌐 Starting preview server...')
    const server = spawn('pnpm', ['exec', 'vite', 'preview', '--host', '127.0.0.1', '--port', '4173'], {
      cwd: join(__dirname, '..'),
      stdio: 'pipe',
      shell: true,
    })
    let settled = false
    const ready = () => {
      if (settled) return
      settled = true
      setTimeout(() => resolve(server), 1500)
    }
    const onData = (data: Buffer) => {
      const msg = data.toString()
      if (/Local:|ready in|http:\/\//.test(msg)) ready()
      if (/EADDRINUSE/.test(msg)) {
        console.log('  ℹ Port 4173 already in use — reusing existing server')
        ready()
      }
    }
    server.stdout?.on('data', onData)
    server.stderr?.on('data', onData)
    server.on('error', reject)
    setTimeout(() => reject(new Error('Preview server start timeout (45s)')), 45000)
  })
}

// Routes that are intentionally client-only forms; they never carry prerendered body content.
const CLIENT_ONLY_ROUTES = new Set(['/book'])

function isValidPrerender(routePath: string, rootHtml: string | null | undefined): boolean {
  if (!rootHtml || rootHtml.length < 1000) return false
  if (CLIENT_ONLY_ROUTES.has(routePath)) return true
  // Most indexable pages should have an H1 after React renders. A missing H1 is a strong
  // signal that only the Layout/Navbar shell hydrated and the page body never mounted.
  return /<h1[\s>]/i.test(rootHtml)
}

async function renderRoute(browser: Browser, route: Route): Promise<{ ok: boolean; reason?: string }> {
  const distFile = distFileForRoute(route.path)
  if (!existsSync(distFile)) {
    return { ok: false, reason: 'inject-meta output missing (run inject-meta first)' }
  }

  const page = await browser.newPage({
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    viewport: { width: 1280, height: 1024 },
  })

  async function captureRoot(timeoutMs: number): Promise<string | null> {
    await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 20000 })
    // Wait for the React app to actually render content into #root.
    await page.waitForSelector('#root > *', { timeout: 10000 })
    // Settle for headings / above-the-fold content (no networkidle — GSAP never idles).
    await page.waitForTimeout(timeoutMs)
    return page.$eval('#root', (el) => el.innerHTML).catch(() => null)
  }

  try {
    // Block resources that don't affect the rendered DOM (images, fonts, media) and
    // third-party scripts (GTM, analytics). These are slow/flaky in CI and were
    // causing the prerender to hang. We only need the app's own JS to run React.
    await page.route('**/*', (r) => {
      const type = r.request().resourceType()
      const url = r.request().url()
      if (type === 'image' || type === 'media' || type === 'font') return r.abort()
      if (/googletagmanager|google-analytics|analytics\.google|vercel-scripts|vercel-insights|fonts\.googleapis|fonts\.gstatic|doubleclick|facebook|hotjar/i.test(url)) return r.abort()
      return r.continue()
    })

    let rootHtml = await captureRoot(400)
    if (!isValidPrerender(route.path, rootHtml)) {
      // Retry once with a longer settle window; some routes mount their main content after
      // secondary data/layout effects resolve.
      rootHtml = await captureRoot(1500)
    }
    if (!isValidPrerender(route.path, rootHtml)) {
      return { ok: false, reason: `rendered #root too small or missing H1 (${rootHtml?.length ?? 0} bytes)` }
    }

    const shell = readFileSync(distFile, 'utf-8')
    if (!shell.includes(ROOT_EMPTY)) {
      // Already filled (re-run without a fresh inject-meta). Validate existing content and
      // overwrite if it is only a shell render from a previous flaky run.
      if (shell.includes('<div id="root">')) {
        const existingRoot = shell.match(/<div\b[^>]*\bid=["']root["'][^>]*>([\s\S]*)<\/div>\s*<\/body>/)?.[1] ?? ''
        if (isValidPrerender(route.path, existingRoot)) {
          return { ok: true }
        }
        // Overwrite with the newly captured content.
        const merged = shell.replace(/<div\b[^>]*\bid=["']root["'][^>]*>[\s\S]*<\/div>/, `<div id="root">${rootHtml}</div>`)
        writeFileSync(distFile, merged, 'utf-8')
        return { ok: true }
      }
      return { ok: false, reason: 'no root div in shell' }
    }
    // Splice rendered body into the controlled inject-meta <head> shell.
    const merged = shell.replace(ROOT_EMPTY, `<div id="root">${rootHtml}</div>`)
    writeFileSync(distFile, merged, 'utf-8')
    return { ok: true }
  } catch (err) {
    return { ok: false, reason: (err as Error).message }
  } finally {
    await page.close()
  }
}

async function runPool(browser: Browser, routes: Route[]): Promise<{ success: number; failures: Array<{ path: string; reason: string }> }> {
  let cursor = 0
  let success = 0
  const failures: Array<{ path: string; reason: string }> = []

  async function worker(): Promise<void> {
    while (cursor < routes.length) {
      const route = routes[cursor++]
      const res = await renderRoute(browser, route)
      if (res.ok) {
        success++
        if (success % 20 === 0) console.log(`  …${success}/${routes.length} rendered`)
      } else {
        failures.push({ path: route.path, reason: res.reason ?? 'unknown' })
        console.warn(`  ✗ ${route.path}: ${res.reason}`)
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, routes.length) }, () => worker()))
  return { success, failures }
}

async function main(): Promise<void> {
  if (process.env.SKIP_PRERENDER === '1') {
    console.log('⏭  SKIP_PRERENDER=1 — leaving inject-meta shells as-is')
    return
  }

  const routes: Route[] = SITEMAP
    .map((entry: { path: string }, index: number) => ({ path: entry.path, index }))
    .filter((_: Route, i: number) => i < LIMIT)

  console.log(`🚀 Prerendering ${routes.length} routes (concurrency ${CONCURRENCY})`)

  let server: ChildProcess | null = null
  let browser: Browser | null = null
  try {
    server = await startPreviewServer()
    // Fail fast if the preview server isn't actually reachable (turns a silent
    // 250×timeout hang into an instant, clear failure).
    const health = await fetch(`${BASE_URL}/`).then((r) => r.status).catch((e) => `ERR ${(e as Error).message}`)
    console.log(`  ✅ Preview server ready (GET / → ${health})\n`)
    if (health !== 200) throw new Error(`Preview server not serving (GET / → ${health})`)

    try {
      browser = await chromium.launch({ headless: true })
    } catch (e) {
      // No Chromium available (e.g. a build env without browser support) — skip
      // rather than hard-fail the whole build. CI installs Chromium, so it runs there;
      // the workflow's verify step still guards against shipping an unprerendered build.
      console.log(`  ⏭  Chromium unavailable — skipping prerender (${(e as Error).message})`)
      return
    }

    const { success, failures } = await runPool(browser, routes)

    console.log(`\n✅ Prerender complete: ${success}/${routes.length} routes`)
    if (failures.length) {
      console.log(`⚠️  ${failures.length} routes failed:`)
      for (const f of failures) console.log(`   - ${f.path}: ${f.reason}`)
      // Fail the build only if a large share failed (a few flaky routes shouldn't block deploy).
      const failRate = failures.length / routes.length
      if (failRate > 0.1) {
        throw new Error(`Prerender fail rate ${(failRate * 100).toFixed(1)}% exceeds 10% threshold`)
      }
    }
  } finally {
    if (browser) await browser.close().catch(() => {})
    // SIGKILL the preview server outright — SIGTERM + a timer left the child (and
    // thus the event loop) alive, so `npm run prerender` never returned and the
    // whole build hung after "Prerender complete". Force-kill, then hard-exit below.
    if (server) server.kill('SIGKILL')
  }
}

// Explicit exit: lingering handles (preview-server child, Playwright internals)
// otherwise keep Node alive and hang the build. Success = 0, failure = 1.
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Fatal prerender error:', err)
    process.exit(1)
  })
