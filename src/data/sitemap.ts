// Single source of truth for all indexable URLs on mychef.id.
// Mirrors the production sitemap.xml exactly so that organic traffic is preserved.
// Each entry drives:
//   1) the React Router route
//   2) the per-page SEO meta + JSON-LD
//   3) the public/sitemap.xml output
// When adding a new page, add it here first.

import { PILLARS, LOCATIONS, JOURNAL_POSTS } from './siteArchitecture'

export type PageType =
  | 'home'
  | 'area'           // city/neighbourhood landing pages: /seminyak, /canggu...
  | 'micro-area'    // narrower neighbourhood pages: /echo-beach-private-chef...
  | 'service'        // /services/* — what we offer
  | 'menu'           // /menus + /menus/*
  | 'landing'        // SEO keyword landing pages: /best-private-chef-indonesia...
  | 'guide'          // /guide/*
  | 'blog-index'
  | 'blog-post'
  | 'info'           // /about, /chefs, /faq, /why-mychef, /reviews, /pricing...
  | 'legal'
  | 'tool'           // /quote, /calculator

export interface SitemapEntry {
  path: string
  type: PageType
  /** H1 + browser title base */
  title: string
  /** meta description */
  description: string
  /** sitemap.xml priority 0–1 */
  priority: number
  /** sitemap.xml changefreq */
  changefreq: 'weekly' | 'monthly' | 'yearly'
  /** For area / micro-area pages — the human area name (used in H1, copy, schema) */
  area?: string
  /** For services + menus — short slug-friendly key */
  slug?: string
  /** Optional alias paths that should also resolve to this page (redirects in code) */
  aliases?: string[]
}

export const AREAS: { slug: string; name: string }[] = [
  { slug: 'seminyak', name: 'Seminyak' },
  { slug: 'canggu', name: 'Canggu' },
  { slug: 'ubud', name: 'Ubud' },
  { slug: 'sanur', name: 'Sanur' },
  { slug: 'nusa-dua', name: 'Nusa Dua' },
  { slug: 'uluwatu', name: 'Uluwatu' },
  { slug: 'jimbaran', name: 'Jimbaran' },
  { slug: 'kuta', name: 'Kuta' },
  { slug: 'legian', name: 'Legian' },
  { slug: 'kerobokan', name: 'Kerobokan' },
  { slug: 'petitenget', name: 'Petitenget' },
  { slug: 'berawa', name: 'Berawa' },
  { slug: 'pererenan', name: 'Pererenan' },
  { slug: 'bukit', name: 'Bukit Peninsula' },
  { slug: 'tanah-lot', name: 'Tanah Lot' },
  { slug: 'tabanan', name: 'Tabanan' },
  { slug: 'denpasar', name: 'Denpasar' },
  { slug: 'gianyar', name: 'Gianyar' },
  { slug: 'tegallalang', name: 'Tegallalang' },
  { slug: 'amed', name: 'Amed' },
  { slug: 'lovina', name: 'Lovina' },
  { slug: 'candidasa', name: 'Candidasa' },
  { slug: 'padang-bai', name: 'Padang Bai' },
  { slug: 'ungasan', name: 'Ungasan' },
  { slug: 'pecatu', name: 'Pecatu' },
]

export const MICRO_AREAS: { slug: string; name: string }[] = [
  { slug: 'echo-beach-private-chef', name: 'Echo Beach' },
  { slug: 'batu-bolong-private-chef', name: 'Batu Bolong' },
  { slug: 'bingin-private-chef', name: 'Bingin' },
  { slug: 'sayan-private-chef', name: 'Sayan' },
  { slug: 'padang-padang-private-chef', name: 'Padang Padang' },
  { slug: 'pererenan-private-chef', name: 'Pererenan Beach' },
  { slug: 'sanur-beach-private-chef', name: 'Sanur Beach' },
  { slug: 'penestanan-private-chef', name: 'Penestanan' },
]

export const SERVICES: { slug: string; name: string; description: string }[] = [
  { slug: 'villa-parties', name: 'Villa Parties', description: 'Full-service villa parties with private chef, bar, and event coordination.' },
  { slug: 'romantic-dinners', name: 'Romantic Dinners', description: 'Candlelit private chef dinners for two — perfect for anniversaries, proposals, and honeymoons.' },
  { slug: 'birthday-celebrations', name: 'Birthday Celebrations', description: 'Private chef birthday dinners and parties from intimate gatherings to 50-guest celebrations.' },
  { slug: 'family-reunions', name: 'Family Reunions', description: 'Multi-day private chef services for family reunions and multi-generational villa stays.' },
  { slug: 'corporate-events', name: 'Corporate Events', description: 'Executive dinners, team retreats, and corporate hospitality with full-service catering.' },
  { slug: 'wedding-celebrations', name: 'Wedding Celebrations', description: 'Wedding catering for intimate ceremonies to 200-guest receptions across Bali.' },
  { slug: 'cooking-classes', name: 'Cooking Classes', description: 'Hands-on private cooking classes in your villa kitchen with one of our chefs.' },
  { slug: 'weekly-meal-prep', name: 'Weekly Meal Prep', description: 'Regular chef visits for weekly meal preparation and stocking your villa kitchen.' },
]

export const MENUS: { slug: string; name: string; description: string }[] = [
  { slug: 'mediterranean', name: 'Mediterranean Menu', description: 'Italian and Mediterranean menus — fresh seafood, handmade pasta, olive oil, basil, and seasonal produce.' },
  { slug: 'balinese', name: 'Balinese Menu', description: 'Traditional Balinese menus — nasi campur, sate lilit, bebek betutu, and modern interpretations of island classics.' },
  { slug: 'asian-fusion', name: 'Asian Fusion Menu', description: 'Modern Asian fusion menus drawing from Japanese, Thai, Vietnamese, and Indonesian cuisine.' },
  { slug: 'vegan', name: 'Vegan Menu', description: 'Fully plant-based menus using local Balinese produce, tropical fruits, and creative substitutions.' },
  { slug: 'modern-european', name: 'Modern European Menu', description: 'Contemporary European tasting menus with French, Italian, and Nordic influences.' },
  { slug: 'halal', name: 'Halal Menu', description: 'Certified halal menus prepared with care for Muslim guests visiting Bali.' },
]

export const LANDING_PAGES: { slug: string; title: string; description: string; date?: string; content?: string }[] = [
  {
    slug: 'best-private-chef-indonesia',
    title: 'Best Private Chef in Indonesia',
    description: 'Top-rated private chefs across Indonesia — Bali, Jakarta, and beyond. Background-checked, fluent in international cuisine.',
    date: '2025-03-01',
    content: `<h2>What Makes a Private Chef the Best?</h2>
<p>The best private chef in Indonesia is not necessarily the one with the longest CV. It is the one who shows up on time, communicates clearly, adapts to your dietary needs without fuss, and leaves your kitchen cleaner than they found it. Formal training helps — myCHEF's founder Adriano trained under a Michelin-starred chef in Milan — but the real standard is consistency across 12,000+ guest experiences.</p>
<h2>How myCHEF Vets Every Chef</h2>
<p>Every chef on the myCHEF team goes through a multi-stage selection. Practical cooking test at our Seminyak kitchen. Background check and professional reference call. Language assessment (English + one more). Trial service with supervision before solo deployment. Ongoing feedback loop from guest ratings after every booking.</p>
<p>Only 1 in 8 applicants completes onboarding. The team currently stands at 50+ hospitality professionals anchored in <a href="/locations/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak</a> and serving Bali and Jakarta.</p>
<h2>Private Chef Specialties We Cover</h2>
<ul>
<li><strong>Indonesian & Balinese</strong> — Ceremonial dishes, modern interpretations, regional specialties from all 17,000 islands</li>
<li><strong><a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">Mediterranean & European</a></strong> — Italian, French, Spanish — chef-founder Adriano's primary training</li>
<li><strong>Japanese & Pan-Asian</strong> — Sushi, teppanyaki, Thai, Vietnamese, Korean <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">barbecue</a></li>
<li><strong>Plant-based & Therapeutic</strong> — Vegan, keto, paleo, FODMAP, low-FODMAP, allergen-controlled</li>
<li><strong>Pastry & Baking</strong> — Croissants, sourdough, custom celebration cakes, plated desserts</li>
</ul>
<h2>Coverage Across Indonesia</h2>
<p>Primary operations in Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua. Jakarta expansion active in Menteng, Kemang, and Pondok Indah. Destination events covered across the archipelago with advance notice. Lombok and the Gili Islands on request.</p>`,
  },
  {
    slug: 'private-chef-for-events',
    title: 'Private Chef for Events',
    description: 'Hire a private chef for weddings, corporate events, birthdays, and milestone celebrations across Indonesia.',
    date: '2025-03-05',
    content: `<h2>What Type of Events Do Private Chefs Handle?</h2>
<p>A private chef for events is not the same as a catering company. The private chef model means one primary creative — the chef — who owns the menu from concept through clean-up. The result is food with a point of view, not a banquet hall uniform.</p>
<p>myCHEF handles events from 2 to 500 guests. The service model scales, but the quality threshold does not.</p>
<h2>Event Types myCHEF Covers</h2>
<ul>
<li><strong><a href="/events/weddings" class="text-[#C5A028] hover:underline font-medium">Weddings & receptions</a></strong> — Full wedding catering, cocktail hours, rehearsal dinners, and day-after brunches</li>
<li><strong><a href="/events/corporate-events" class="text-[#C5A028] hover:underline font-medium">Corporate events</a></strong> — Working lunches, client entertainment, team dinners, product launches, and conferences</li>
<li><strong><a href="/events/birthday-party-catering" class="text-[#C5A028] hover:underline font-medium">Milestone birthdays</a></strong> — 30th, 40th, 50th, 60th — custom menus matched to the guest of honour's taste</li>
<li><strong>Proposal dinners</strong> — Private, candlelit, discreet — with ring placement coordination on request</li>
<li><strong>Yoga retreats & wellness events</strong> — Macro-balanced, plant-forward menus designed around the retreat programme</li>
<li><strong>Holiday villa parties</strong> — Christmas, New Year's Eve, Nyepi (silent day) dinners, Eid celebrations</li>
</ul>
<h2>How Far in Advance Should You Book?</h2>
<p>For small dinners (2–10 guests): 48 hours notice is usually sufficient. For events above 30 guests: 2 weeks minimum. For weddings and large productions: 4–8 weeks recommended to allow menu design, staffing, and logistics coordination. High-season Bali (July–August, December) books out earlier — contact us as soon as a date is set.</p>`,
  },
  {
    slug: 'luxury-chef-indonesia',
    title: 'Luxury Private Chef in Indonesia',
    description: 'Michelin-trained luxury private chefs for villa dining, yacht charters, and high-net-worth hospitality in Indonesia.',
    date: '2025-03-10',
    content: `<h2>Michelin-Standard Cooking Outside a Michelin-Starred Room</h2>
<p>Luxury private chef service in Indonesia means the restaurant comes to you — not a delivery service, but a full mise en place, a chef who trained in Michelin-standard kitchens, and a service model where the only person being looked after is you. myCHEF was founded on exactly this premise: extraordinary food should not require leaving your villa, especially when our <a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">in-villa service</a> brings the entire experience home.</p>
<h2>What "Luxury" Actually Means in Private Dining</h2>
<p>Luxury in a restaurant context is defined by environment and exclusivity. In private dining, the environment is already yours. What luxury means here is precision — timing, temperature, presentation, and the absence of mistakes. It means a chef who has cooked Wagyu beef enough times to know the exact variance between black Angus and Japanese A5. A chef who knows to ask about the youngest guest's allergies before designing the amuse-bouche.</p>
<h2>Luxury Formats myCHEF Provides</h2>
<ul>
<li><strong><a href="/fine-dining/tasting-menu" class="text-[#C5A028] hover:underline font-medium">Fine dining tasting menus</a></strong> — 6, 7, or 9 courses with wine pairing suggestions, amuse-bouche, and petit fours</li>
<li><strong><a href="/fine-dining/private-dinner" class="text-[#C5A028] hover:underline font-medium">Private dinners</a></strong> — Open kitchen, live commentary, interactive plating experience</li>
<li><strong>Yacht catering</strong> — Full galley service for day charters and liveaboards in Indonesian waters</li>
<li><strong>Villa residency</strong> — Week-long or month-long private chef arrangements for extended stays</li>
<li><strong>Corporate executive dining</strong> — Client entertainment, board dinners, C-suite hospitality</li>
</ul>
<h2>Sourcing at Luxury Level</h2>
<p>Wagyu from certified Indonesian farms. Japanese seafood flown in for omakase events. Seasonal truffles for special occasion menus. Daily market produce sourced at 6am from Badung Market in Denpasar. Wine pairings coordinated with select importers on request. The sourcing chain is visible and verifiable.</p>`,
  },
  {
    slug: 'wedding-catering-indonesia',
    title: 'Wedding Catering in Indonesia',
    description: 'Full-service wedding catering across Bali and Jakarta — from intimate ceremonies to grand receptions.',
    date: '2025-02-14',
    content: `<h2><a href="/events/weddings" class="text-[#C5A028] hover:underline font-medium">Wedding</a> Catering That Reflects Your Story</h2>
<p>Wedding food is remembered. Not always the food itself — but the moment: a dish that tasted like something from the honeymoon city, the grandmother's recipe adapted for 200 guests, the dessert table that became the photograph everyone shared. myCHEF designs wedding menus around the couple, not around what is logistically easiest to produce at scale.</p>
<h2>How Wedding <a href="/catering" class="text-[#C5A028] hover:underline font-medium">Catering</a> Works With myCHEF</h2>
<p>Initial consultation: 30–60 minutes, in person at your villa or over WhatsApp/Zoom. Menu design session: chef-led tasting of 3–5 shortlisted courses. Final menu sign-off: 4 weeks before the event. <a href="/staffing" class="text-[#C5A028] hover:underline font-medium">Staffing</a> confirmed: 2 weeks before. Day-of coordination: head chef on-site from 6am through final service. Clean-up and kitchen handback: within 2 hours of service end.</p>
<h2>Wedding Menu Formats</h2>
<ul>
<li><strong>Sit-down plated dinner</strong> — 3 to 7 courses, formal service, ideal for intimate weddings under 80 guests</li>
<li><strong>Buffet stations</strong> — Live carving, pasta, sushi, and dessert stations — best for 80–300 guests</li>
<li><strong>Cocktail reception</strong> — Canapés, small bites, passed platters — standalone or pre-dinner</li>
<li><strong>Indonesian feast style</strong> — Long table sharing menus for jungle or garden settings</li>
<li><strong>Late-night snacks</strong> — Nasi goreng station, sliders, local street food to close the night</li>
</ul>
<h2>Venues Covered</h2>
<p>Private villa estates in Seminyak, Ubud, Uluwatu, and Canggu. Clifftop venues in Bukit. Jungle clearings in Tegallalang. Beach venues on request. Hotel ballrooms for Jakarta events. Off-grid locations — we bring everything including the kitchen infrastructure.</p>`,
  },
  {
    slug: 'private-dining-indonesia',
    title: 'Private Dining in Indonesia',
    description: 'Private dining experiences in your villa, hotel suite, or private residence anywhere in Indonesia.',
    date: '2025-02-20',
    content: `<h2>Why Private Dining Is the Better Dinner</h2>
<p>A private dining experience removes every variable that makes restaurants inconsistent: a loud neighbouring table, a slow kitchen on a full Saturday, a waiter who does not know what is in the sauce. Private dining at your villa means the kitchen is working only for your table, and a <a href="/fine-dining/private-dinner" class="text-[#C5A028] hover:underline font-medium">private dinner</a> format keeps the timing and menu focused entirely on your group.</p>
<h2>The myCHEF Private Dining Experience</h2>
<p>Chef arrives 90 minutes before service. Mise en place is completed in your kitchen — all chopping, seasoning, and prep — so the dining room remains calm. The first course is served at the time you specified. Each course is plated with the same attention given to a restaurant kitchen — garnish, temperature, portion balance. Between courses, the kitchen runs quietly. No shouting, no smoke, no disruption. After the final course, the kitchen is cleaned to hotel standard and handed back.</p>
<h2>Setting Formats</h2>
<ul>
<li><strong>Villa pool terrace</strong> — Sunset timing, candles, the sound of the pool — Bali's signature private dining setup</li>
<li><strong>Indoor dining room</strong> — Air-conditioned, formal, ideal for <a href="/fine-dining/tasting-menu" class="text-[#C5A028] hover:underline font-medium">tasting menus</a> requiring multiple temperature-sensitive courses</li>
<li><strong>Garden or clifftop</strong> — Dramatic setting, requires advance lighting and table setup coordination</li>
<li><strong>Hotel suite or penthouse</strong> — Available with hotel kitchen access or portable equipment</li>
</ul>
<h2>Minimum Guest Count</h2>
<p>Private dining works from 2 guests upward. For solo or <a href="/fine-dining/romantic-dinner" class="text-[#C5A028] hover:underline font-medium">couple bookings</a>, expect minimum order values to apply — the chef's time is the same regardless of guest count. Most economical from 4 guests. Sweet spot for tasting menu experiences: 6–12 people.</p>`,
  },
  {
    slug: 'healthy-meal-delivery-indonesia',
    title: 'Healthy Meal Delivery in Indonesia',
    description: 'Private chef meal prep and healthy meal services — keto, paleo, vegan, and macro-balanced menus.',
    date: '2025-03-15',
    content: `<h2>Private Chef Meal Prep vs Meal Delivery Apps</h2>
<p>Meal delivery services give you food that was made hours ago in a central kitchen, packed in plastic, and optimised for delivery logistics. A private chef <a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">in-villa service</a> gives you food made in your kitchen this morning, stored correctly in your own refrigerator, and portioned exactly to <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">your plan</a>. The difference in quality is significant. The difference in health impact is measurable.</p>
<h2>How myCHEF Meal Prep Works</h2>
<p>You share your dietary goals, allergens, and preferences. Our chef designs a weekly menu aligned to your targets — macros, calories, specific diets, or simply "clean and seasonal." The chef arrives at your villa or residence, prepares 5–7 days of meals, labels everything clearly (ingredients, macros, reheating instructions), and hands over. No plastic packaging beyond what is necessary. No preservatives. No mystery ingredients. If you have complex allergies or dietary questions, our <a href="/faq" class="text-[#C5A028] hover:underline font-medium">FAQ</a> covers how the team handles them.</p>
<h2>Diet Frameworks We Support</h2>
<ul>
<li><strong>Keto & low-carb</strong> — Under 30g net carbs daily, high healthy fat, adequate protein</li>
<li><strong>Paleo</strong> — Whole foods, no grains, legumes, dairy, or refined sugars</li>
<li><strong>Vegan & plant-based</strong> — Full plant-based with complete protein focus</li>
<li><strong>Macro-tracked</strong> — Gram-accurate protein, carb, and fat targets per meal</li>
<li><strong>Anti-inflammatory</strong> — Turmeric, ginger, omega-3 focused, no seed oils</li>
<li><strong>FODMAP-controlled</strong> — For digestive sensitivity and IBS management</li>
</ul>
<h2>Who Uses This Service</h2>
<p>Long-stay villa guests wanting to eat well for a month in Bali. Expat families in Jakarta managing children's allergens. Athletes in training camps. Retreat participants extending their programme. Executives requiring consistent nutrition during high-workload periods. Anyone who has tried to eat healthily in a hotel and failed.</p>`,
  },
  {
    slug: 'private-chef-booking-indonesia',
    title: 'Private Chef Booking in Indonesia',
    description: 'Book a vetted private chef in minutes. Transparent pricing, dietary customization, and same-day responses.',
    date: '2025-03-20',
    content: `<h2>How to Book a Private Chef in Indonesia</h2>
<p>Booking a private chef with myCHEF takes under 5 minutes. Message us on WhatsApp with your date, guest count, location, and any dietary requirements. We respond within 2 hours during business hours (8am–8pm Bali time). For standard bookings with 48+ hours notice, confirmation comes within 24 hours. Same-day bookings are sometimes possible — message us and we will check availability. If you want a quick estimate first, try the <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">price calculator</a> before messaging.</p>
<h2>What Happens After You Book</h2>
<p>You receive a booking confirmation with chef name, arrival time, and menu summary. The chef contacts you directly 24 hours before the booking to confirm any last-minute dietary notes. On the day, the chef arrives at the agreed time with all ingredients and equipment. After service, you receive a receipt itemising <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">chef fee</a> and grocery cost separately. Payment is made after service via bank transfer or cash.</p>
<h2>What We Need From You</h2>
<ul>
<li><strong>Date and time</strong> — When you want to eat, not when you want the chef to arrive (we calculate backwards)</li>
<li><strong>Guest count</strong> — Including ages of any children</li>
<li><strong>Dietary requirements</strong> — Allergies (serious ones flagged clearly), preferences, and things you definitely do not want</li>
<li><strong>Location</strong> — Villa name or Google Maps pin</li>
<li><strong>Kitchen equipment</strong> — Gas or induction, size of oven, if you have it — we bring what is missing</li>
</ul>
<h2>Cancellation Policy</h2>
<p>Free cancellation up to 24 hours before the booking start time. Within 24 hours: 50% of chef fee. No-show or cancellation within 2 hours: full chef fee applies. Groceries purchased for your booking are billed regardless of cancellation timing. For general booking questions, see the <a href="/faq" class="text-[#C5A028] hover:underline font-medium">FAQ</a>.</p>`,
  },
  {
    slug: 'chef-for-hire-indonesia',
    title: 'Chef for Hire in Indonesia',
    description: 'Hire a professional chef by the hour, day, or trip. Single events, recurring visits, and long-term arrangements.',
    date: '2025-03-25',
    content: `<h2>Hiring a Chef by the Hour, Day, or Week</h2>
<p>Not every booking is a dinner party. Some clients need a chef for a single breakfast. Some need daily meal prep for three months. Some need a chef on-call for an entire villa holiday. myCHEF structures hiring around your actual need — hourly, daily, or long-stay retainer — without requiring a minimum spend that does not make sense for your situation.</p>
<h2>Hourly Chef Hire</h2>
<p>IDR 600,000 per hour, minimum 3 hours. Best for: quick brunches, single meals, <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">small intimate dinners</a>. The chef handles everything within the time window — prep, cook, serve, clean. Groceries are separate at market cost. No hidden service charges on the hourly rate.</p>
<h2>Full-Day Chef Hire</h2>
<p>IDR 1,800,000–2,400,000 for a full day (8 hours), depending on event complexity. Covers: breakfast, lunch, snacks, dinner, and kitchen management throughout the day. Ideal for villa <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">house parties</a>, full-day wellness retreats, and family holidays where you want someone managing food without you thinking about it.</p>
<h2>Long-Stay Retainer</h2>
<p>Weekly or monthly arrangements for extended villa stays, expat residences, and long-term hospitality needs. Rate structured on days-per-week and service scope. Includes a recurring chef (same person, building familiarity with your preferences) rather than <a href="/staffing" class="text-[#C5A028] hover:underline font-medium">rotating staff</a>. Minimum commitment: 2 weeks. Most popular with families staying in Bali 1–3 months.</p>
<h2>What the Chef Brings</h2>
<p>All knives and cooking equipment. Tableware and serving platters. Groceries sourced from morning market. Cleaning products for kitchen handback. No need to supply anything except a working kitchen and access to cold water.</p>`,
  },
  {
    slug: 'proposal-dinner',
    title: 'Proposal Dinner Private Chef in Bali',
    description: 'Plan the perfect proposal dinner — candlelit beachfront menus, ring boxes, and discreet service.',
    date: '2025-01-20',
    content: `<h2>Why a Private Chef Makes the Difference for a Proposal</h2>
<p>A restaurant proposal hands control to a venue. The waiter knows. The neighbouring tables can see. The timing depends on a kitchen you cannot influence. A private chef proposal puts everything back in your hands, and our <a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">in-villa service</a> keeps the evening discreet from start to finish.</p>
<h2>How myCHEF Handles Proposals</h2>
<p>Tell us it is a proposal and we keep it between us. The chef will not mention anything, interact with a ring, or reference the occasion unless you ask. What we do: design a menu you know your partner will love, time the courses so the proposal can happen naturally — usually between the main and dessert, when the setting feels complete — and make sure the environment is right: candles, flowers if you want them, the right music level.</p>
<h2>Ring Coordination</h2>
<p>On request, myCHEF can arrange ring delivery as a dessert course — hidden in a petit four box and presented during a <a href="/fine-dining/private-dinner" class="text-[#C5A028] hover:underline font-medium">private dinner</a> with a glass of champagne. This requires advance planning (at least 3 days) and clear briefing. We have done this successfully. We have also done this and it almost worked — which is why we recommend a full brief call before committing to the theatrical version. A quiet, personal proposal with good food is often more memorable than a staged one.</p>
<h2>Location Options</h2>
<ul>
<li><strong><a href="/fine-dining/romantic-dinner" class="text-[#C5A028] hover:underline font-medium">Your villa pool terrace</a></strong> — Private, lit at sunset, the classic Bali proposal setting</li>
<li><strong>Clifftop in Uluwatu or Bukit</strong> — Ocean views, dramatic backdrop, requires a private villa or arranged location</li>
<li><strong>Beachside setup</strong> — Requires a villa with beach access or a private beach area</li>
<li><strong>Garden table</strong> — Intimate and green, works well for daytime proposals</li>
</ul>`,
  },
  {
    slug: 'honeymoon-chef',
    title: 'Honeymoon Private Chef in Bali',
    description: 'Honeymoon villa chef packages — breakfast in bed, sunset dinners, and private romantic menus.',
    date: '2025-01-25',
    content: `<h2>The Honeymoon You Actually Remember</h2>
<p>Honeymoons are not about doing as much as possible. They are about being somewhere extraordinary without anything going wrong. Food is the moment that anchors a day — the breakfast on the terrace, the dinner when you finally stop looking at your phones. myCHEF designs honeymoon chef packages around the rhythm of a honeymoon, not a corporate schedule.</p>
<h2>What a Honeymoon Chef Package Includes</h2>
<ul>
<li><strong>Breakfast in bed or on the terrace</strong> — Tropical fruit platters, fresh-squeezed juices, pastries baked that morning, eggs any style</li>
<li><strong><a href="/fine-dining/romantic-dinner" class="text-[#C5A028] hover:underline font-medium">Romantic sunset dinner</a></strong> — 4-course <a href="/fine-dining/tasting-menu" class="text-[#C5A028] hover:underline font-medium">tasting menu</a>, candle-lit, timed to the Bali sunset (typically 6:00–6:30pm)</li>
<li><strong><a href="/fine-dining/private-dinner" class="text-[#C5A028] hover:underline font-medium">Mid-stay private dinner</a></strong> — Open kitchen dinner where the chef cooks in front of you and tells the story of each dish</li>
<li><strong>Farewell brunch</strong> — A slow, indulgent morning meal before your travel day</li>
</ul>
<h2>Menu Design for Two</h2>
<p>Small guest counts change the entire dynamic of a private chef experience. For two, the chef can cook with more precision, more attentiveness to preference, and more creativity. Tell us if there is a dish from the wedding, from the first date, or from a place you love together — we will find a way to reference it in the menu.</p>
<h2>Extras Available</h2>
<p>Fresh flowers arranged on the table and around the pool. Champagne or prosecco chilled on arrival. Personalised menu cards with your names. A small dessert with a note if you want to continue the celebration. These extras are coordinated separately and can be added to any booking.</p>`,
  },
  {
    slug: 'private-chef-breakfast-bali',
    title: 'Private Chef Breakfast in Bali',
    description: 'Wake up to a chef-prepared breakfast in your Bali villa — tropical fruits, fresh pastries, eggs any style.',
    date: '2025-02-05',
    content: `<h2>Breakfast Is the Meal Bali Gets Right</h2>
<p>Bali does breakfast well because the ingredients are extraordinary: rambutans and mangosteens picked yesterday, eggs from free-range chickens in the highlands, coconuts cracked to order. A private chef breakfast in Bali simply takes those ingredients and applies professional technique. The result is the best breakfast of your holiday — often the most talked-about moment of the whole stay.</p>
<h2>What a Chef-Prepared Breakfast Looks Like</h2>
<p>The chef arrives at 7am (or your requested time). By 8am your table is set with freshly squeezed orange and watermelon juice, a platter of tropical fruit arranged by season, warm pastries from the morning bakery run, and eggs made to order — shakshuka, eggs Benedict with hollandaise made from scratch, a French omelette, or soft-scrambled on sourdough. Coffee is brewed using your villa machine or a portable pour-over setup the chef brings.</p>
<h2>Menu Options</h2>
<ul>
<li><strong><a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">Tropical Bali breakfast</a></strong> — Fruit platter, overnight oats, jamu shot, nasi goreng with fried egg</li>
<li><strong>Continental spread</strong> — Pastries, charcuterie, soft cheeses, fresh breads, fruit</li>
<li><strong>American-style</strong> — Pancakes or waffles, bacon, eggs your way, hash browns</li>
<li><strong>Healthy & clean</strong> — Açaí bowl, chia pudding, green smoothie, avocado toast</li>
<li><strong>Indonesian traditional</strong> — Bubur ayam (chicken congee), lontong sayur, gado-gado</li>
</ul>
<h2>Booking a Breakfast Chef</h2>
<p>Breakfast bookings start from 3-hour minimum. Chef arrives 60 minutes before your requested eating time. Larger groups often combine breakfast with our <a href="/catering/villa-catering" class="text-[#C5A028] hover:underline font-medium">villa catering</a> support, which may require a sous chef. If you have dietary or equipment questions before booking, see the <a href="/faq" class="text-[#C5A028] hover:underline font-medium">FAQ</a>.</p>`,
  },
  {
    slug: 'private-chef-cost-per-day-bali',
    title: 'Private Chef Cost Per Day in Bali',
    description: 'What does a private chef cost per day in Bali? Transparent daily rates, hourly breakdowns, and grocery pass-through.',
    date: '2025-02-10',
    content: `<h2>Daily Rate vs Hourly Rate: Which Applies to You?</h2>
<p>The <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing model</a> depends on what you are actually asking the chef to do. A <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">single dinner engagement</a> is priced by meal type and guest count. A full day of cooking — breakfast through dinner, kitchen management, and meal prep — is priced as a day rate. Here is how to read each structure.</p>
<h2>myCHEF Daily Rate (2026)</h2>
<ul>
<li><strong>Half-day (4 hours)</strong> — IDR 900,000–1,200,000 depending on service type and complexity</li>
<li><strong>Full day (8 hours)</strong> — IDR 1,800,000–2,400,000 including all meals from breakfast through dinner</li>
<li><strong>Extended day (10+ hours)</strong> — IDR 2,200,000–3,000,000 for <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">event days</a> requiring full-day kitchen presence</li>
</ul>
<p>These rates cover chef time only. Groceries are passed through at market cost — we buy at the same price as you would, with no markup. You receive receipts for everything purchased.</p>
<h2>What a Full Day Actually Includes</h2>
<p>A full-day booking means the chef is yours for 8 hours. Typically structured as: morning market run (7am), breakfast service (8–9am), lunch prep and service (12–1pm), snack and refreshment management (3pm), dinner prep begins (5pm), dinner service (7–8pm), kitchen clean-up and handback (9pm). The schedule is flexible — we build it around your day.</p>
<h2>Grocery Cost Estimates</h2>
<p>Budget IDR 150,000–300,000 per person per meal for groceries, depending on protein selection. A seafood and wagyu dinner for 4 guests will cost more in groceries than a pasta night. We provide a grocery estimate when you share your menu preferences during booking. Actual grocery cost is confirmed the day before and never exceeds the estimate by more than 10% without your approval.</p>`,
  },
  {
    slug: 'private-chef-cost-bali',
    title: 'Private Chef Cost in Bali',
    description: 'Detailed cost breakdown for hiring a private chef in Bali — chef fee, groceries, service charges, and tax.',
    date: '2025-02-12',
    content: `<h2>The Three Components of Private Chef Cost in Bali</h2>
<p>Every private chef booking in Bali has three cost elements: the chef service fee, grocery cost, and any additional charges (staffing, equipment, flowers). Understanding each one makes the final invoice predictable and removes the confusion that often comes from opaque "all-inclusive" packages that bundle everything without showing the breakdown.</p>
<h2>Chef Service Fee — 2026 Rates</h2>
<ul>
<li><strong><a href="/fine-dining/tasting-menu" class="text-[#C5A028] hover:underline font-medium">Fine dining tasting menu (5–7 courses)</a></strong> — IDR 1,800,000–2,400,000 per person</li>
<li><strong><a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">BBQ or grill night (2–3 items)</a></strong> — IDR 450,000–650,000 per person</li>
<li><strong>Chef by the hour</strong> — IDR 600,000 per hour (3-hour minimum)</li>
<li><strong>Drop-off catering (cold platters, grazing)</strong> — From IDR 250,000 per person</li>
<li><strong>Cooking class (2 hours, 2–8 participants)</strong> — IDR 1,500,000 flat</li>
</ul>
<h2>Grocery Cost</h2>
<p>Groceries are always separate and passed through at exact market cost — no markup. We buy from Badung Market in Denpasar each morning. Typical grocery cost per person per meal:</p>
<ul>
<li>Standard protein (chicken, fish): IDR 80,000–150,000</li>
<li>Premium protein (prawns, seabass): IDR 150,000–250,000</li>
<li>Wagyu or lobster: IDR 300,000–600,000+</li>
<li>Vegetables, carbs, condiments: IDR 40,000–80,000</li>
</ul>
<h2>Service Charges and Tax</h2>
<p>myCHEF does not add a percentage service charge. What you see in the <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">quote</a> is what you pay. No 21% restaurant tax. No 10% service charge. If you wish to tip the chef, it is always appreciated but never expected. The culture within myCHEF is that tips go directly and entirely to the chef, not pooled.</p>`,
  },
  {
    slug: 'private-chef-menteng',
    title: 'Private Chef in Menteng, Jakarta',
    description: 'Private chef services in Menteng, Central Jakarta — for residences, expats, and corporate hospitality.',
    date: '2025-04-01',
    content: `<h2>Private Chef Services in Menteng</h2>
<p>Menteng is Central Jakarta's most established residential neighbourhood — tree-lined streets, Dutch-colonial architecture, proximity to the Sudirman corridor. Its residents include senior diplomats, long-term expats, and Jakarta's established professional class. The demand for private chef services in Menteng has grown steadily as the neighbourhood's international population has grown. myCHEF expanded to Jakarta specifically to serve this demand.</p>
<h2>What Private Chef Service Looks Like in Menteng</h2>
<p>The model is the same as Bali: the chef comes to your home or serviced apartment, shops at the nearest quality market (Kemchicks in Kemang, Ranch Market in Pasaraya Grande), and prepares meals in your kitchen. Jakarta's wet market produce is different to Bali's — larger portions, more variety, a broader international food import channel. The quality ceiling is actually higher for certain ingredients, particularly Japanese imports and Korean produce.</p>
<h2>Services Available in Menteng</h2>
<ul>
<li><strong>Recurring meal prep</strong> — Weekly or bi-weekly, for expat families and professionals managing nutrition</li>
<li><strong><a href="/fine-dining/private-dinner" class="text-[#C5A028] hover:underline font-medium">Dinner parties</a></strong> — From 4 to 30 guests in your residence or garden</li>
<li><strong><a href="/events/corporate-events" class="text-[#C5A028] hover:underline font-medium">Corporate events</a></strong> and client entertainment — For nearby offices and the diplomatic quarter</li>
<li><strong>Cooking classes</strong> — Indonesian cuisine, pastry, or chef-led market tours in Pasar Santa or Pasar Minggu</li>
</ul>
<h2>Coverage Area</h2>
<p>Primary coverage: Menteng, Gondangdia, Cikini. Extended coverage: Kemang, Dharmawangsa, Pondok Indah, Kuningan, Senopati. For locations outside these areas, review our <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing</a> and message us for a custom travel quote.</p>`,
  },
]

export const GUIDES: { slug: string; title: string; description: string; date?: string; content?: string }[] = [
  {
    slug: 'guide/bali-cuisine-glossary',
    title: 'Bali Cuisine Glossary',
    description: 'A complete glossary of Balinese cuisine — ingredients, dishes, cooking techniques, and regional specialties.',
    date: '2025-01-15',
    content: `<h2>Essential Balinese Ingredients</h2>
<p><strong>Base Genep</strong> — Bali's foundational spice paste, made from shallots, garlic, galangal, ginger, turmeric, lemongrass, candlenut, and chilli. Almost every traditional dish begins here. Each family and chef has a slightly different ratio, which is where personal cooking identity lives.</p>
<p><strong>Basa Wangen</strong> — A fragrant spice mix used in ceremonial cooking. Heavier on the aromatic roots, lighter on heat. Used in offerings and festive dishes where warmth matters more than fire.</p>
<p><strong>Kencur (Sand Ginger)</strong> — A rhizome with a clean, camphor-like flavour. Used sparingly — too much overwhelms. Common in bumbu (spice pastes) and jamu (herbal tonics). Difficult to substitute.</p>
<p><strong>Salam Leaf</strong> — The Indonesian bay leaf. Slightly earthier than Mediterranean varieties, it anchors broths and braised dishes. Do not confuse with salaam or curry leaf — the flavour is different.</p>
<h2>Core Balinese Dishes</h2>
<p><strong>Babi Guling</strong> — Whole roasted pig, seasoned with base genep pushed under the skin, slow-turned over coconut wood. The ceremonial version feeds hundreds; the restaurant version is served over rice with crispy skin, satay, and lawar. myCHEF brings this as a centrepiece dish for <a href="/events" class="text-[#C5A028] hover:underline font-medium">events</a> of 20 guests and above.</p>
<p><strong>Bebek Betutu</strong> — Duck (or chicken) packed with spice paste, wrapped in banana leaf and coconut husks, cooked low and slow for 6–8 hours. The result is deeply tender and aromatic. A real betutu takes a full day to prepare — it is a commitment dish, not a quick service option.</p>
<p><strong>Lawar</strong> — A ceremonial salad of minced meat or vegetables, shredded coconut, and raw spice paste. Traditionally made with fresh blood (merah) or without (putih). Villa guests are usually served the putih version. The flavour is complex and slightly funky — nothing like a Western salad.</p>
<p><strong>Nasi Campur</strong> — Mixed rice, the everyday expression of Balinese cooking. A small portion of rice surrounded by 6–10 rotating accompaniments — satay, tempeh, sambal, vegetables, fried protein, and something pickled. Every warung has its own version. myCHEF adapts this format for group brunches and Indonesian feast menus.</p>
<p><strong>Sate Lilit</strong> — Minced fish or pork pressed around flat lemongrass skewers and <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">grilled over charcoal</a>. The lemongrass infuses the meat as it cooks. Much finer in texture than sate ayam. A Balinese ceremonial staple and crowd favourite at villa events.</p>
<h2>Cooking Techniques</h2>
<p><strong>Megoreng (Stir-frying)</strong> — High heat, wok technique, fast oil. Used for nasi goreng, mie goreng, and quick vegetable dishes. Requires a seasoned wok and temperature control that most villa kitchens cannot deliver — this is where having a trained chef matters.</p>
<p><strong>Megibung (Communal Feast Style)</strong> — A North Balinese tradition of sharing dishes from one large plate. myCHEF adapts this for family-style villa dinners where the table becomes the centrepiece.</p>
<p><strong>Ngaben Cooking</strong> — Ceremonial cooking for cremation feasts. Large-scale, traditional recipes, multiple days of preparation. Not common in <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">private dining</a> but deeply important to understanding Balinese food culture.</p>
<h2>Regional Differences Within Bali</h2>
<p>North Bali (Buleleng) cooks with more salt and less palm sugar, producing sharper, drier dishes. South Bali (Denpasar, Badung) leans sweeter with heavier coconut milk use. Ubud cooking sits between the two, with a stronger ceremonial influence and a broader use of fresh vegetables from the highland farms. Understanding this geography helps when designing menus that feel authentically placed.</p>`,
  },
  {
    slug: 'guide/private-chef-bali',
    title: 'Private Chef in Bali — Complete Guide',
    description: 'Everything you need to know about hiring a private chef in Bali — costs, what to expect, how to choose.',
    date: '2025-02-01',
    content: `<h2>What Does a Private Chef in Bali Actually Do?</h2>
<p>A private chef in Bali comes to your villa, sets up in your kitchen, prepares a full meal from scratch, serves it, and cleans up after. You stay at your table. The experience is the same standard as a restaurant — often better, because the chef has one audience instead of fifty.</p>
<p>myCHEF chefs arrive 90–120 minutes before service. They bring all equipment, tableware, and produce sourced that morning from Bali's markets. Nothing is pre-cooked or reheated. The mise en place happens in your villa.</p>
<h2>How Much Does a Private Chef Cost in Bali?</h2>
<p>Private chef pricing in Bali operates on a per-person or per-hour model depending on the service type:</p>
<ul>
<li><strong><a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">Fine dining tasting menus</a></strong> — IDR 1.8M–2.4M per person, depending on course count and menu (Mediterranean, Wagyu, seafood-focused)</li>
<li><strong>Villa chef by the hour</strong> — IDR 600K per hour, with groceries passed through at market cost</li>
<li><strong><a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">BBQ catering for groups</a></strong> — IDR 450K–650K per person depending on protein selection</li>
<li><strong>Drop-off catering</strong> — from IDR 250K per person for cold platters and grazing</li>
</ul>
<p>All prices are all-inclusive for chef service, equipment, and tableware. Groceries are separate at cost price — no markup. This is how myCHEF keeps pricing transparent and predictable.</p>
<h2>How Far in Advance Should You Book?</h2>
<p>For a villa dinner of 2–8 guests, 24 hours is usually enough. For events above 12, or when wine pairing, live cooking stations, or specific menus are required, 3–7 days is safer. Weddings and corporate events need 2+ weeks so the right team can be assembled and logistics confirmed.</p>
<p>myCHEF confirms availability within 1 hour of your WhatsApp message and sends a full proposal within 24 hours.</p>
<h2>What Areas of Bali Does a Private Chef Cover?</h2>
<p>myCHEF serves all major villa zones: <a href="/locations/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak</a>, Canggu, Pererenan, Berawa, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, and surrounding areas. Travel fees may apply for remote or eastern Bali locations.</p>
<h2>How to Choose the Right Service</h2>
<p>If you want a memorable tasting experience with courses and plated service, choose fine dining. If you want daily cooking for a villa stay — breakfast, lunch, dinner — choose the hourly villa chef model. If you are feeding a group of 15+ for a celebration, BBQ or buffet catering is more practical and often better value.</p>
<p>The clearest way to choose is to send your date, guest count, villa area, and occasion to myCHEF on WhatsApp. The team will recommend the right format and send a detailed proposal.</p>`,
  },
]

export const BLOG_POSTS: { slug: string; title: string; description: string; date?: string; content?: string }[] = [
  {
    slug: 'blog/private-chef-bali-cost-breakdown-2026',
    title: 'Private Chef Bali — Cost Breakdown 2026',
    description: 'Full 2026 cost breakdown for hiring a private chef in Bali — chef fees, groceries, service charges, and tipping.',
    date: '2026-01-10',
    content: `<h2><a href="/pricing" class="text-[#C5A028] hover:underline font-medium">What You Actually Pay For</a></h2>
<p>A private chef booking in Bali has three cost components: the chef service fee, groceries, and any extras (wine, special equipment, additional staff). Understanding how each is charged removes 90% of the sticker shock.</p>
<h2>Chef Service Fee (2026 Rates)</h2>
<p>myCHEF charges per person for fixed menus, or per hour for flexible villa cooking:</p>
<ul>
<li><strong>Mediterranean <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">Fine Dining</a> (7-course)</strong> — IDR 2,200,000 per person</li>
<li><strong>Wagyu Fine Dining</strong> — IDR 2,400,000 per person</li>
<li><strong>Private Villa Chef (hourly)</strong> — IDR 600,000 per hour (minimum 3 hours)</li>
<li><strong><a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">BBQ Catering</a></strong> — from IDR 450,000 per person</li>
<li><strong>Drop-Off Catering</strong> — from IDR 250,000 per person</li>
</ul>
<p>The service fee covers the chef, all equipment, all tableware, and full cleanup. No hidden service charges on top.</p>
<h2>Groceries: Passed at Cost</h2>
<p>myCHEF sources fresh every morning from Bali's local markets and suppliers. Grocery costs are passed through at market price with zero markup. For a typical 4-person dinner with quality ingredients, expect IDR 400,000–800,000 depending on protein (seafood and wagyu push higher).</p>
<h2>Optional Extras</h2>
<p>Wine pairing (tailored selection, IDR 300,000–600,000 per person), service staff such as waiters (IDR 250,000 per person per event), and bartenders (market rate) are all available as add-ons. Glassware and linen are included.</p>
<h2>Tipping</h2>
<p>Tipping is appreciated but not expected. A IDR 100,000–200,000 tip per chef is a meaningful gesture for good service in the Bali context.</p>
<h2>Total Cost Example: 6-Person Villa Dinner</h2>
<p>Mediterranean tasting menu × 6: IDR 13,200,000 · Groceries: IDR 600,000 · Optional wine: IDR 1,800,000 · <strong>Total: IDR 15,600,000</strong> (approx USD 960 / EUR 890). Per person this is IDR 2,600,000 — less than a comparable restaurant experience when you factor in transport, service charges, and the fact that you never leave your villa.</p>`,
  },
  {
    slug: 'blog/best-bali-villas-private-chef-kitchen',
    title: 'Best Bali Villas with a Private Chef Kitchen',
    description: 'Our pick of the best Bali villas with chef-friendly kitchens — gas hobs, professional ranges, prep space, and storage.',
    date: '2025-11-20',
    content: `<h2>What Makes a Kitchen Chef-Friendly?</h2>
<p>A chef-friendly kitchen has four things: adequate heat output (gas preferred, induction acceptable), a large prep surface, proper ventilation, and enough refrigeration for a day's mise en place. Most luxury Bali villas tick at least three of these. Where they fall short, myCHEF brings portable equipment.</p>
<h2>The Heat Question</h2>
<p>Gas hobs are preferred for high-heat cooking — stir-fries, searing, and wok work require flame response that induction cannot fully replicate. However, myCHEF chefs are trained to work on induction and ceramic hobs and adjust technique accordingly. No villa should feel excluded from a chef experience because of the cooktop.</p>
<h2>Prep Space</h2>
<p>The minimum for a tasting menu for 6 is roughly 2m² of clear, clean prep surface. Villas with butler's kitchens or outdoor preparation areas are ideal. Island-style layouts that face the dining area allow guests to watch the cooking — this is part of the experience for <a href="/fine-dining/private-dinner" class="text-[#C5A028] hover:underline font-medium">private dinners</a>.</p>
<h2>What myCHEF Brings</h2>
<p>Regardless of kitchen spec, myCHEF arrives with: all cookware and baking equipment, tableware and glassware, a portable gas burner for wok stations, prep boards, and a full kit of professional knives. The only things needed from the villa are running water, electricity, and refrigerator space.</p>
<h2>What to Tell the Chef When Booking</h2>
<p>When you plan an <a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">in-villa service</a>, mention: how many hobs are available, whether the kitchen is gas or induction, any restrictions on cooking smells (some villa managers prefer no strong aromas near the pool area), and whether there is outdoor prep or serving space. This lets the chef plan the mise en place timeline precisely.</p>
<h2>Villas With Outstanding Kitchen Setups</h2>
<p>From myCHEF's experience across 560+ villas in Bali: larger luxury estates in Seminyak and Canggu most consistently have full-sized refrigerators, gas ranges, and proper ventilation. Ubud jungle villas often have open-sided kitchens that create excellent airflow for long cooking days. Uluwatu cliff villas frequently have spectacular outdoor grilling terraces that work perfectly for <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">BBQ</a> and seafood events.</p>`,
  },
  {
    slug: 'blog/wedding-rehearsal-dinner-bali',
    title: 'Wedding Rehearsal Dinner in Bali — Planning Guide',
    description: 'How to plan a wedding rehearsal dinner in Bali — venue tips, menu ideas, and timeline templates.',
    date: '2025-10-05',
    content: `<h2>Why a Rehearsal Dinner Matters More in Bali</h2>
<p><a href="/events/weddings" class="text-[#C5A028] hover:underline font-medium">Wedding</a> guests travelling to Bali often arrive 2–3 days before the ceremony. The rehearsal dinner is the first real moment to gather the group — a chance to shake off jet lag, get people talking, and set the emotional tone for the celebration ahead. Getting it right is more important than many couples expect.</p>
<h2>Venue Options</h2>
<p>Three formats work well for Bali rehearsal dinners: the wedding villa itself (intimate, convenient, builds familiarity with the space), a separate private villa rented for the evening (more formal, different visual context from the ceremony), or a beach club with a private dining buyout (for larger parties who want a more social, animated setting). myCHEF can <a href="/catering" class="text-[#C5A028] hover:underline font-medium">cater</a> all three.</p>
<h2>Menu Ideas for a Rehearsal Dinner</h2>
<p>The rehearsal dinner should feel slightly more relaxed than the wedding itself. A long family-style dinner with sharing plates is the most popular format — it naturally encourages conversation across the table. Good options include: a Mediterranean spread with handmade pasta, grilled seafood and antipasti; a Balinese feast with babi guling, satay, and lawar; or a <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">BBQ-style evening</a> with whole fish, wagyu, and grilled vegetables. Avoid elaborate tasting menus here — save the theatre for the wedding dinner.</p>
<h2>Timeline Template</h2>
<p><strong>6:00pm</strong> — Guests arrive. Welcome drinks (sparkling, mocktails, local beer). myCHEF service staff in position.<br/>
<strong>6:30pm</strong> — Canapes and light starters served during mingling.<br/>
<strong>7:15pm</strong> — Seated dinner begins. Sharing platters brought to the table family-style.<br/>
<strong>8:45pm</strong> — Speeches if needed (rehearsal dinners in Bali often skip formal speeches).<br/>
<strong>9:00pm</strong> — Dessert and coffee. Relaxed wind-down.<br/>
<strong>10:00pm</strong> — Close. Guests return to their villas or hotel for an early night before the wedding.</p>
<h2>Logistics to Confirm Early</h2>
<p>Guest dietary requirements (especially vegetarian, vegan, allergies — collect these on the RSVP form), final head count (needed 48 hours before service), table setup preferences, and whether the venue has outdoor lighting for an evening event. myCHEF handles all food, staffing, glassware, and cleanup — the venue just needs to be booked and accessible.</p>`,
  },
  {
    slug: 'blog/yoga-retreat-chef-bali-meal-planning',
    title: 'Yoga Retreat Chef in Bali — Meal Planning',
    description: 'Meal planning for yoga retreats in Bali — plant-based menus, ayurvedic principles, and post-asana nutrition.',
    date: '2025-09-18',
    content: `<h2>Why Food Is Part of the Retreat Design</h2>
<p><a href="/events" class="text-[#C5A028] hover:underline font-medium">At a yoga retreat</a>, meals are not breaks from the programme — they are part of it. Guests are usually more conscious of what they eat than usual, more responsive to flavour and texture, and more likely to comment on food quality in reviews. The kitchen is a significant lever for overall retreat satisfaction.</p>
<h2>Principles of Retreat Meal Planning</h2>
<p>Retreat nutrition should follow the rhythm of the practice schedule. Morning yoga sessions need a light pre-practice option (fruit, tea, perhaps a small smoothie) followed by a more substantial post-practice breakfast. Midday meals should be nourishing but not heavy — guests have afternoon sessions ahead. Dinners can be more substantial, as the body is in recovery mode for the night.</p>
<h2>Plant-Based Menus for Yoga Retreats</h2>
<p>myCHEF builds <a href="/catering" class="text-[#C5A028] hover:underline font-medium">plant-based retreat catering</a> around: whole grains (brown rice, quinoa, millet), legumes (tempeh is ideal — it is fermented, protein-dense, and local to Bali), fresh vegetables roasted or lightly dressed, tropical fruits for natural sweetness, and coconut-based sauces and dressings. These menus are designed to keep energy stable rather than spiked.</p>
<h2>Ayurvedic Considerations</h2>
<p>Ayurveda-aligned retreat menus reduce raw foods (especially at dinner), favour warm and cooked preparations, avoid excessive garlic and onion in favour of asafoetida and ginger, and use warming spices like cumin, coriander, and turmeric. myCHEF chefs can adapt the base Balinese spice repertoire to align with these principles without losing flavour.</p>
<h2>Practical Logistics for <a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">Multi-Day In-Villa Retreats</a></h2>
<p>For retreats of 5 days or more, myCHEF assigns a dedicated chef team for consistency. Menus rotate daily so guests are not eating the same breakfast on day 3 as day 1. Dietary notes (allergies, intolerances, preferences) are collected before arrival and baked into every meal plan. The kitchen team operates quietly and efficiently — retreats have a stillness that good hospitality professionals understand how to respect.</p>`,
  },
  {
    slug: 'blog/private-chef-vs-restaurant-bali',
    title: 'Private Chef vs Restaurant in Bali — Which Is Better?',
    description: 'A side-by-side comparison of hiring a private chef versus dining at a restaurant in Bali — cost, experience, and convenience.',
    date: '2025-08-12',
    content: `<h2>The Price Question — Closer Than You Think</h2>
<p>The headline number for a private chef in Bali looks higher than a restaurant menu. But the total comparison rarely works out that way. A restaurant meal for 6 in Bali includes: transport (and Bali traffic, both ways), service charges and taxes (typically 21%), beverage markup (wine at 3–4x retail), and the variable of whether you get the chef's best work or their 40th table that night.</p>
<p>A private chef setup priced through our <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">price calculator</a> includes none of those friction points. The chef has one table. Groceries are at market cost. You stay in your villa. For occasions that matter, the comparison usually lands within IDR 200,000–400,000 per person — and the <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">private experience</a> wins on every non-price dimension.</p>
<h2>Experience Quality</h2>
<p>Restaurants are optimised for throughput. A private chef is optimised for your table. Menu personalisation, course timing, dietary substitutions, pace of service — all of these are controlled by you and your chef together. This is the difference between hospitality and service.</p>
<p>myCHEF chefs discuss the menu before arriving. If you want the pasta course skipped and an extra seafood course added, that happens. If someone in the group cannot eat gluten, the whole menu is restructured — not just one plate swapped out.</p>
<h2>When a Restaurant Is the Right Choice</h2>
<p>Restaurants win when: the social energy of a public space is part of the appeal, you want to support a specific chef's creative work, you are a solo traveller or couple who wants to meet people, or you want to eat at a specific iconic Bali venue. These are legitimate reasons to book a table.</p>
<h2>When a Private Chef Is the Right Choice</h2>
<p>A private chef wins when: your group is 4 or more people, the occasion is a <a href="/catering" class="text-[#C5A028] hover:underline font-medium">celebration</a> (birthday, anniversary, proposal, honeymoon), you have children or guests with serious dietary restrictions, you are jet-lagged and do not want to leave the villa, or you want food quality that consistently reflects your group's preferences rather than a standard menu.</p>
<h2>The Simple Test</h2>
<p>If the occasion matters enough to remember, a private chef is worth the consideration. If you are looking for a quick lunch with flexibility to explore the neighbourhood, a restaurant serves that better. Both have their place — the question is which one serves the moment you are actually in.</p>`,
  },
]

// --- Info / utility pages ----------------------------------------------------

export const INFO_PAGES: SitemapEntry[] = [
  // Legacy brand pages — kept for SEO continuity (redirects handle canonical migration)
  { path: '/villa-chef', type: 'info', title: 'Bali Villa Catering | Private Chef in Your Villa — Daily Dining', description: 'Bali villa catering with a private chef in your kitchen — daily breakfast, lunch, and dinner for the length of your stay. Groceries at cost. From IDR 600,000 per hour.', priority: 0.95, changefreq: 'weekly' },
  { path: '/contact', type: 'info', title: 'Contact myCHEF | Concierges by Service — Bali Private Chef', description: 'Speak directly with the right person — Sofia for fine dining, Daniel for villa catering, Olivia for events, Marco for partnerships and staffing.', priority: 0.75, changefreq: 'monthly' },

  // Supporting info pages
  { path: '/about', type: 'info', title: 'About myCHEF — Bali Private Chef Team', description: 'About myCHEF — our story, our team, and our mission to bring extraordinary food to villas across Bali and Indonesia.', priority: 0.7, changefreq: 'monthly' },
  { path: '/chefs', type: 'info', title: 'Our Chefs | myCHEF Bali Private Chef Team', description: 'Meet our team of professional private chefs in Bali — backgrounds, specialties, and what they cook best.', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', type: 'info', title: 'FAQ | Private Chef Bali — Bookings, Pricing & Dietary', description: 'Answers to common questions about private chef services in Bali — bookings, pricing, dietary needs, and logistics.', priority: 0.7, changefreq: 'monthly' },
  { path: '/why-mychef', type: 'info', title: 'Why 560+ Villas Choose myCHEF | Trusted Private Chef Bali', description: 'Discover why 560+ villas trust myCHEF — Michelin-trained leadership, 50+ local professionals, same-day confirmation, and villa-ready service across Bali.', priority: 0.7, changefreq: 'monthly' },
  { path: '/press', type: 'info', title: 'Press & Media | myCHEF.id Bali', description: 'Press coverage, media kit, and PR contact for myCHEF.id — Bali\'s premier private chef and catering service. Request press kit via WhatsApp.', priority: 0.4, changefreq: 'monthly' },
  { path: '/reviews', type: 'info', title: 'Reviews | myCHEF Bali Private Chef Guests', description: 'Real reviews from real guests — read what families, couples, and event hosts say about myCHEF villa dining and catering in Bali.', priority: 0.7, changefreq: 'monthly' },
  { path: '/pricing', type: 'info', title: 'Pricing | Private Chef Bali, Villa Catering & Events', description: 'Transparent pricing for private chef services in Bali — hourly rates, menu pricing, fine dining, and full event packages.', priority: 0.8, changefreq: 'monthly' },
  { path: '/jakarta', type: 'area', title: 'Private Chef in Jakarta — Residences & Corporate Hospitality', description: 'Private chef services in Jakarta for residences, expat households, and corporate hospitality — Menteng, Kemang, SCBD, Pondok Indah.', priority: 0.75, changefreq: 'weekly', area: 'Jakarta' },
  { path: '/retreats', type: 'info', title: 'Retreat Catering in Bali | Yoga, Wellness & Corporate Offsites', description: 'Multi-day retreat catering across Bali for yoga retreats, wellness retreats, and corporate offsites — full-board menus and on-site coordination.', priority: 0.7, changefreq: 'monthly' },
  { path: '/recommended-services', type: 'info', title: 'Build Your Perfect Villa Experience | myCHEF Concierge Bali', description: 'Not sure what you need? Let myCHEF guide you to the right Bali villa service — fine dining, events, catering, or staffing.', priority: 0.4, changefreq: 'monthly' },
  { path: '/join-our-team', type: 'info', title: "Join Bali's #1 Private Chef Team | myCHEF Careers", description: 'Apply to join the myCHEF team in Bali — private chef, bartender, event coordinator, and villa host opportunities.', priority: 0.3, changefreq: 'monthly' },
  { path: '/quote', type: 'tool', title: 'Get a Custom Quote | Private Chef Bali by myCHEF', description: 'Tell us about your event and receive a personalized private chef quote — villa dining, party, corporate, or wedding — within 24 hours.', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', type: 'info', title: 'Private Chef Services in Bali | Villa, Weddings, Corporate | myCHEF', description: 'Eight ways myCHEF brings extraordinary food to your villa in Bali — villa parties, romantic dinners, birthdays, family reunions, corporate events, weddings, classes, and meal prep.', priority: 0.85, changefreq: 'monthly' },
  // /staffing is now generated from PILLARS in buildSitemap() — removed duplicate
  { path: '/partner-platform', type: 'info', title: 'Partner Platform | myCHEF — Bali Villa Operator Dining', description: 'A villa dining partner platform for luxury villas, villa management companies, boutique hospitality brands, and premium operators across Bali. Co-branded or white-label.', priority: 0.85, changefreq: 'monthly' },
  { path: '/corporate-events', type: 'info', title: 'Corporate Events Bali | Luxury Corporate Catering & Event Dining', description: 'Premium corporate events in Bali with luxury catering, cocktails, staffing, chefs, and full event support for conferences, executive dinners, gala events, and company celebrations.', priority: 0.9, changefreq: 'monthly' },
  { path: '/calculator', type: 'tool', title: 'Private Chef Bali Pricing Calculator | myCHEF', description: 'Estimate the cost of a private chef in Bali — guests, meals, cuisine, and add-ons — in under a minute.', priority: 0.85, changefreq: 'monthly' },
  { path: '/blog', type: 'blog-index', title: 'Bali Hosting & Private Chef Guides | myCHEF Blog', description: 'Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchains, retreats, and rehearsal dinners.', priority: 0.75, changefreq: 'monthly' },
]

export const STATIC_SERVICE_PAGES: SitemapEntry[] = [
  {
    path: '/catering/villa-catering',
    type: 'info',
    title: 'Villa Catering Bali | Private Chef & Event Catering',
    description:
      'Private villa catering in Bali with chef-led menus, setup, service, drinks, and cleanup for birthdays, family dinners, retreats, and villa events.',
    priority: 0.7,
    changefreq: 'monthly',
  },
]

export const LEGAL_PAGES: SitemapEntry[] = [
  { path: '/privacy-policy', type: 'legal', title: 'Privacy Policy', description: 'How myCHEF collects, stores, and protects your personal information.', priority: 0.2, changefreq: 'monthly', aliases: ['/privacy'] },
  { path: '/terms-of-service', type: 'legal', title: 'Terms of Service', description: 'The terms that govern your use of myCHEF services.', priority: 0.2, changefreq: 'monthly', aliases: ['/terms'] },
  { path: '/cancellation', type: 'legal', title: 'Cancellation Policy', description: 'Cancellation and refund policy for myCHEF bookings, including deposits, balance payments, and refund timelines.', priority: 0.2, changefreq: 'monthly', aliases: ['/payment-terms'] },
]

// Build the full flat sitemap from the structured arrays above.
export function buildSitemap(): SitemapEntry[] {
  const home: SitemapEntry = {
    path: '/',
    type: 'home',
    title: 'myCHEF.id — Private Chef & Event Experiences in Bali',
    description: 'Private chefs, villa catering, and full-service events in Bali. Italian fine dining and Michelin-trained leadership across Seminyak, Canggu, Ubud, Uluwatu, and Sanur.',
    priority: 1.0,
    changefreq: 'weekly',
  }

  const areas: SitemapEntry[] = AREAS.map((a) => ({
    path: `/${a.slug}`,
    type: 'area',
    title: `Private Chef in ${a.name}, Bali`,
    description: `Private chef services in ${a.name}, Bali. Custom menus, transparent pricing, same-day responses. Background-checked chefs.`,
    priority: 0.8,
    changefreq: 'weekly',
    area: a.name,
    slug: a.slug,
  }))

  const microAreas: SitemapEntry[] = MICRO_AREAS.map((m) => ({
    path: `/${m.slug}`,
    type: 'micro-area',
    title: `Private Chef in ${m.name}, Bali`,
    description: `Private chef in ${m.name}, Bali. Villa dinners, weekly meal prep, events. Trusted by 1000+ guests.`,
    priority: 0.8,
    changefreq: 'monthly',
    area: m.name,
    slug: m.slug,
  }))

  const services: SitemapEntry[] = SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    type: 'service',
    title: s.name,
    description: s.description,
    priority: 0.7,
    changefreq: 'monthly',
    slug: s.slug,
  }))

  const menus: SitemapEntry[] = [
    { path: '/menus', type: 'menu', title: 'All Sample Menus', description: 'Browse every cuisine we cook — Mediterranean, Balinese, Asian fusion, vegan, modern European, and halal.', priority: 0.8, changefreq: 'monthly' },
    ...MENUS.map<SitemapEntry>((m) => ({
      path: `/menus/${m.slug}`,
      type: 'menu',
      title: m.name,
      description: m.description,
      priority: 0.8,
      changefreq: 'monthly',
      slug: m.slug,
    })),
  ]

  const landing: SitemapEntry[] = LANDING_PAGES.map((l) => ({
    path: `/${l.slug}`,
    type: 'landing',
    title: l.title,
    description: l.description,
    priority: 0.7,
    changefreq: 'monthly',
    slug: l.slug,
  }))

  const guides: SitemapEntry[] = GUIDES.map((g) => ({
    path: `/${g.slug}`,
    type: 'guide',
    title: g.title,
    description: g.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: g.slug,
  }))

  const blogPosts: SitemapEntry[] = BLOG_POSTS.map((b) => ({
    path: `/${b.slug}`,
    type: 'blog-post',
    title: b.title,
    description: b.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: b.slug,
  }))

  // --- System-plan pages ----------------------------------------------------

  const pillarPages: SitemapEntry[] = Object.values(PILLARS).map((p) => ({
    path: p.url,
    type: 'info',
    title: p.title,
    description: p.description,
    priority: 0.9,
    changefreq: 'monthly',
  }))

  const pillarSubPages: SitemapEntry[] = Object.values(PILLARS).flatMap((p) =>
    p.subPages.map((s) => ({
      path: `${p.url}/${s.slug}`,
      type: 'info' as const,
      title: s.title,
      description: s.description,
      priority: 0.7,
      changefreq: 'monthly',
    }))
  )

  const locationHub: SitemapEntry = {
    path: '/locations',
    type: 'info',
    title: 'Private Chef Locations Bali | Seminyak, Canggu, Ubud, Uluwatu — myCHEF',
    description: 'Hire a private chef across Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran and Sanur. Villa dining, catering and events in every region.',
    priority: 0.8,
    changefreq: 'monthly',
  }

  const locationPages: SitemapEntry[] = Object.values(LOCATIONS).map((l) => ({
    path: `/locations/${l.slug}`,
    type: 'area',
    title: l.title,
    description: l.description,
    priority: 0.7,
    changefreq: 'monthly',
    area: l.label,
    slug: l.slug,
  }))

  const journalIndex: SitemapEntry = {
    path: '/journal',
    type: 'blog-index',
    title: 'Journal | Bali Private Chef Guides, Menus & Hosting Tips — myCHEF',
    description: 'Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchens, retreats, and rehearsal dinners.',
    priority: 0.8,
    changefreq: 'weekly',
  }

  const journalPosts: SitemapEntry[] = JOURNAL_POSTS.map((p) => ({
    path: `/journal/${p.slug}`,
    type: 'blog-post',
    title: p.title,
    description: p.excerpt,
    priority: 0.75,
    changefreq: 'monthly',
    slug: p.slug,
  }))

  const bookPage: SitemapEntry = {
    path: '/book',
    type: 'info',
    title: 'Book | Private Chef, Catering & Events Bali — myCHEF',
    description: 'Book a private chef, catering, event or staffing in Bali. Same-day WhatsApp confirmation.',
    priority: 0.8,
    changefreq: 'monthly',
  }

  return [
    home,
    ...areas,
    ...microAreas,
    ...services,
    ...menus,
    ...landing,
    ...guides,
    ...blogPosts,
    ...pillarPages,
    ...pillarSubPages,
    ...STATIC_SERVICE_PAGES,
    locationHub,
    ...locationPages,
    journalIndex,
    ...journalPosts,
    bookPage,
    ...INFO_PAGES,
    ...LEGAL_PAGES,
  ]
}

export const SITEMAP = buildSitemap()
