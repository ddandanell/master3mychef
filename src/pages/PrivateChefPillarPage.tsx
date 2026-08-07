/**
 * /private-chef-bali — the Private Chef pillar page.
 *
 * This is the page the whole "private chef" cluster points at. It replaces the
 * old /villa-chef page (301) and is the single place where private chef day
 * rates are published.
 *
 * Pricing rule: every number on this page comes from MEAL_PLANS in
 * src/data/siteFacts.ts. Do not hardcode a rate here — if a price changes,
 * it changes in siteFacts and this page follows.
 *
 * Deliberately has NO calculator. Owner decision 2026-07-30: the three rates
 * are simple enough to read directly, and the two calculators on the site
 * disagreed with each other and with the published table.
 */

import { Link } from 'react-router-dom'
import {
  Check,
  ChefHat,
  Clock,
  MapPin,
  MessageCircle,
  Receipt,
  ShoppingBasket,
  Sparkles,
  Utensils,
} from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  howToSchema,
  personSchema,
  serviceWithAggregateOfferSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import { Breadcrumb, TrustStrip } from '@/components/shared'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { PUBLISHED_AREA_SLUGS } from '@/data/privateChefAreas'
import {
  MEAL_PLANS,
  STAY_DISCOUNTS,
  formatIDR,
  formatIDRPlusPlus,
  planDailyRate,
  planDailyRateAllIn,
  privateChefPricing,
  siteFacts,
} from '@/data/siteFacts'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/private-chef-bali`

const WA = buildWhatsAppUrl({
  serviceName: 'a private chef in Bali',
  intent: 'prices and availability',
})

/* ------------------------------------------------------------------ *
 * Cuisine specialists — the "expert chef in each area" the page leads on.
 * Slugs match src/pages/ChefsPage.tsx so the links resolve.
 * ------------------------------------------------------------------ */
const CUISINE_CHEFS = [
  {
    cuisine: 'Italian & Mediterranean',
    chef: 'Adriano',
    slug: 'adriano',
    role: 'Executive Chef & Founder',
    image: '/generated/chef-adriano-portrait.webp',
    detail: `Fine-dining trained in ${siteFacts.founderTrainingCity}. Hand-rolled pasta, whole grilled fish, and the technique the rest of the team is trained on.`,
    dishes: ['Tagliatelle al tartufo', 'Branzino with salsa verde', 'Tiramisu'],
  },
  {
    cuisine: 'Japanese & Seafood',
    chef: 'Ketut Mahardika',
    slug: 'ketut-mahardika',
    role: 'Head Chef — Seafood & Japanese',
    image: '/generated/chef-ketut-mahardika-portrait.webp',
    detail:
      'Japanese knife technique applied to what came off the boat that morning. Sashimi, robata grilling, and clean broths.',
    dishes: ['Sashimi selection', 'Robata-grilled fish', 'Miso-glazed aubergine'],
  },
  {
    cuisine: 'Indonesian & Balinese',
    chef: 'Ni Putu Asri',
    slug: 'ni-putu-asri',
    role: 'Head Chef — Balinese & Asian Fusion',
    image: '/generated/chef-ni-putu-asri-portrait.webp',
    detail:
      'Gianyar-born, raised in ceremonial cooking. Real Balinese food — the slow-cooked, spice-paste kind, not the hotel version.',
    dishes: ['Bebek betutu', 'Lawar with coconut', 'Nasi goreng kampung'],
  },
  {
    cuisine: 'BBQ & Open Flame',
    chef: 'Bayu Pranata',
    slug: 'bayu-pranata',
    role: 'Head Chef — BBQ & Grill',
    image: '/generated/chef-bayu-pranata-portrait.webp',
    detail:
      'Decades around charcoal in Jimbaran. Wagyu, lobster, whole fish and satay, cooked poolside while everyone watches.',
    dishes: ['Wagyu brisket', 'Jimbaran-style whole fish', 'Lamb ribs with sambal matah'],
  },
  {
    cuisine: 'Plant-Based & Wellness',
    chef: 'Sari Dewi Kusuma',
    slug: 'sari-dewi-kusuma',
    role: 'Wellness & Retreat Chef',
    image: '/generated/chef-sari-dewi-portrait.webp',
    detail:
      'Vegan, raw and Ayurvedic menus built for retreats and long stays — food that supports a programme rather than fighting it.',
    dishes: ['Raw cashew cheese plates', 'Ayurvedic kitchari', 'Cold-pressed juice pairings'],
  },
  {
    cuisine: 'Pastry & Desserts',
    chef: 'Wayan Suarjana',
    slug: 'wayan-suarjana',
    role: 'Head Pastry Chef',
    image: '/generated/chef-wayan-suarjana-portrait.webp',
    detail:
      'Birthday cakes, plated desserts and petit fours made in-house. The reason our dinners do not end on a fruit platter.',
    dishes: ['Celebration cakes', 'Plated desserts', 'Petit fours'],
  },
] as const

/* ------------------------------------------------------------------ *
 * What is and is not in the price. The honesty here is the selling point.
 * ------------------------------------------------------------------ */
const INCLUDED = [
  'One professional chef, plus a dedicated assistant, at your villa every service day',
  'Menu planning around your tastes, allergies and dietary requirements',
  'All grocery sourcing and market runs — planned, shopped and carried for you',
  'Cooking, plating and full table service in your villa',
  'Complete kitchen and dining area cleanup after every meal',
  'A named head chef matched to the cuisine you actually want',
  'Menu changes during your stay at no extra cost',
  'Private chef service anywhere in Bali — we come to your villa',
] as const

/**
 * Groceries are a SERVICE we run, not a chore we hand back to the guest.
 * Owner ruling 2026-07-30: we plan, source and shop across multiple markets every
 * day or every second day as the menu needs. The guest pays only what we paid.
 * Do not reframe this as "groceries not included" — the sourcing IS included,
 * the cost of the food is what is billed separately.
 */
const GROCERY_POINTS = [
  {
    title: 'We plan and shop it — all of it',
    detail:
      'You never go to a supermarket, write a list, or carry a bag. Your chef plans each menu, decides what is needed, and does the run before service.',
  },
  {
    title: 'Fresh every day or every second day',
    detail:
      'Nothing is bulk-bought and left sitting in a villa fridge for a week. We shop to the menu, on the rhythm the food needs — daily for fish and greens, every second day where it makes sense.',
  },
  {
    title: 'Different markets for different things',
    detail:
      'Fish from the coast, produce from the highland markets, specialist and imported items from the suppliers who actually stock them. One shop does not cover a good menu, so we do not pretend it does.',
  },
  {
    title: 'You pay what we pay — nothing added',
    detail: `${siteFacts.groceryPolicy}. Every receipt is handed over. We do not mark food up, and we do not take a supplier commission — the sourcing work is already covered by your day rate.`,
  },
] as const

const NOT_INCLUDED = [
  {
    item: 'The food itself',
    detail:
      'Groceries are sourced and handled entirely by us, then billed separately at cost with receipts. Your daily rate covers the chef, the assistant and all the work — not the price of the ingredients.',
  },
  {
    item: 'Tax and service',
    detail: privateChefPricing.taxExample,
  },
  {
    item: 'Premium ingredients',
    detail:
      'Lobster, imported wagyu, oysters and similar sit outside a normal market budget. We price them for you and get your approval before buying anything.',
  },
  {
    item: 'Alcohol',
    detail:
      'Not included, but we will source it for you at cost like any other ingredient. Add cocktail packages or a sommelier if you want the service side handled too.',
  },
] as const

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell us your dates and villa',
    desc: 'One WhatsApp message. How many people, which area of Bali, how long you are staying. We reply within two hours.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Pick your meals and your chef',
    desc: 'One, two or three meals a day. Tell us the cuisine you want and we match the head chef who specialises in it.',
    icon: ChefHat,
  },
  {
    step: '03',
    title: 'We shop and cook, every day',
    desc: 'Your chef and assistant arrive, cook fresh from that morning’s market run, and serve at the table.',
    icon: ShoppingBasket,
  },
  {
    step: '04',
    title: 'You eat. We clean and leave.',
    desc: 'Kitchen spotless, dishes done. No planning, no supermarket trips, no washing up for the whole stay.',
    icon: Sparkles,
  },
] as const

// Every published area page, pulled from the source of truth rather than a
// hardcoded subset — the pillar is the parent of all 61, so it should link to all 61.
const AREAS = PUBLISHED_AREA_SLUGS

/**
 * Gallery. Four different moments of one chef day, so it reads as a service
 * rather than a menu: breakfast, the grill, a plated dinner, the table.
 * Dimensions are taken from src/lib/imageDimensions.ts to avoid layout shift.
 */
const GALLERY = [
  {
    src: '/generated/mychef-catering-bali-floating-breakfast.webp',
    alt: 'Floating breakfast prepared by a private chef at a Bali villa pool',
    w: 1200,
    h: 1500,
  },
  {
    src: '/generated/mychef-finedining-bali-sol-bbq.webp',
    alt: 'Private chef grilling seafood and meat poolside at a villa in Bali',
    w: 1200,
    h: 1500,
  },
  {
    src: '/generated/mychef-experience-bali-luna-gallery-3.webp',
    alt: 'Plated dinner course served by a private chef inside a Bali villa',
    w: 1200,
    h: 1500,
  },
  {
    src: '/generated/mychef-experience-bali-luna-table.webp',
    alt: 'Villa dining table set for a group before private chef dinner service in Bali',
    w: 1200,
    h: 1500,
  },
] as const

const areaLabel = (slug: string) =>
  slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

/* ------------------------------------------------------------------ *
 * FAQs. WhatsApp + PAA + villa-forum questions, GEO-ready answers.
 * Each answer: one intent, immediate answer first, Bali + internal links.
 * ------------------------------------------------------------------ */
const FAQS = [
  {
    q: 'How much does a private chef cost in Bali?',
    a: `${privateChefPricing.headline} That is a day rate for one professional chef plus a dedicated assistant at your villa — not a per-person marketplace fee. Weekly bookings take ${STAY_DISCOUNTS.weekly.off * 100}% off; monthly take ${STAY_DISCOUNTS.monthly.off * 100}% off. Groceries are billed separately at cost with receipts. See the full table on our <a href="/pricing">pricing page</a> or this page’s <a href="#prices">meal plans</a>.`,
  },
  {
    q: 'What is included in the private chef day rate?',
    a: 'Chef + dedicated assistant, menu planning around your tastes and allergies, grocery sourcing and market runs, cooking, plating, table service, and full kitchen cleanup after every meal. Alcohol, premium ingredients (lobster, imported wagyu) and tax/service (++) sit outside the day rate and are quoted before you confirm. Compare formats on <a href="/private-chef-bali#prices">meal plans</a>.',
  },
  {
    q: 'Are groceries included when I hire a private chef in Bali?',
    a: `The shopping work is included; the food cost is not. Your chef plans the menu and shops fresh — fish from the coast, produce from highland markets, specialist items from the right suppliers. You never go to a supermarket. ${siteFacts.groceryPolicy}; every receipt is handed over. This is the model guests ask about most on villa forums because many competitors bury a markup inside a “package” price.`,
  },
  {
    q: 'What does "++" mean on private chef prices in Bali?',
    a: `${privateChefPricing.taxExample} Every myCHEF quote states the full all-in total before you pay a deposit — no surprise line items after service.`,
  },
  {
    q: 'How do I hire a private chef for my Bali villa?',
    a: 'Message us on WhatsApp with your villa area, dates, guest count and how many meals per day you want. We reply within two hours with an available head chef, a sample menu and the all-in total. A 50% deposit confirms the dates. You do not need to own the villa — most guests are renting Airbnbs or villa complexes. Start on <a href="/book">book</a> or <a href="/quote">request a quote</a>.',
  },
  {
    q: 'Can a private chef cook in our villa kitchen in Bali?',
    a: 'Yes. We cook in your villa kitchen, serve at your table, and leave the kitchen as we found it. A working stove, fridge, sink and basic cookware cover most days; for BBQ nights or fine-dining brigades we bring extra equipment. Tell us the villa link when you enquire so we can plan the setup. For event-scale service see <a href="/catering/villa-catering">villa catering</a>.',
  },
  {
    q: 'Does the private chef clean up after cooking?',
    a: 'Yes — full cleanup is always included. Dishes, pots, counters and the dining area are restored after every meal. You do not wash up on holiday. That is one of the strongest reasons families hire a private chef in Bali instead of self-catering.',
  },
  {
    q: 'Can you accommodate food allergies and dietary requirements?',
    a: 'Yes, at no extra charge. Vegan, vegetarian, gluten-free, dairy-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus are routine. Tell us before we plan the first menu — not on the day — so we can separate prep and label plates. Deep dive: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies guide</a>.',
  },
  {
    q: 'Do you cook for children and picky eaters?',
    a: 'Yes. We run milder spice, familiar dishes (pasta, grilled chicken, rice bowls), early kids’ meal times and adult menus in parallel. Ages and preferences go into the brief so the kids eat while the adults get a proper dinner. See <a href="/kids-menus">kids menus</a> and <a href="/blog/family-kids-menu-private-chef-bali">family dining guide</a>.',
  },
  {
    q: 'Is one meal breakfast, lunch or dinner?',
    a: 'Whichever you want, and you can change it day to day. Most guests take dinner. Families often take breakfast + dinner and eat out at lunch. The One / Two / Three Meals plans are meal-count based, not day-part locked — details under <a href="#prices">prices</a>.',
  },
  {
    q: 'Can I choose the cuisine and a specific chef?',
    a: 'Yes. We match head chefs by cuisine: Italian &amp; Mediterranean, Japanese &amp; seafood, Indonesian &amp; Balinese, BBQ &amp; open flame, plant-based &amp; wellness, and pastry. For multi-day stays you can request a named chef; for single dinners we match the best available specialist. Meet the team on <a href="/chefs">our chefs</a>.',
  },
  {
    q: 'What is Chef Rotation on weekly private chef bookings?',
    a: 'On any booking of 7 days or longer, Chef Rotation is included at no extra charge. Request a different specialist for any day — Japanese Tuesday, Balinese Wednesday, Italian Thursday — day by day, not a fixed schedule. Tell us the night before (or that morning) and we match the next day’s chef to what you feel like eating.',
  },
  {
    q: 'Do you cover Seminyak, Canggu, Ubud, Uluwatu and other Bali areas?',
    a: 'Yes — island-wide private chef service. Core areas with no South Bali travel surcharge include Seminyak, Canggu, Berawa, Pererenan, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, Denpasar, Kerobokan and Umalas. Remote areas (Amed, Lovina, Munduk) get a distance component quoted upfront. Browse <a href="/locations">locations</a>.',
  },
  {
    q: 'How far in advance should I book a private chef in Bali?',
    a: 'Three to seven days is comfortable for most dates. For July–August, Christmas and New Year, book two to four weeks out. Same-day and next-day private chef requests are often possible outside peak — message WhatsApp and we will say yes or no within two hours.',
  },
  {
    q: 'Can I book a last-minute private chef in Bali?',
    a: 'Often yes for one or two meals if a chef is free in your area. Large multi-day programmes and peak-season dates need more notice. For event-scale last-minute food without full service, <a href="/catering/drop-off-catering">drop-off catering</a> can be a faster backup.',
  },
  {
    q: 'What deposit do you require and when is the balance due?',
    a: `A ${siteFacts.depositPercent}% deposit confirms your chef and dates. The remaining balance is due ${siteFacts.balanceTiming}, by bank transfer or credit card. Your written quote shows the full all-in total before you pay anything.`,
  },
  {
    q: 'What is the cancellation and refund policy?',
    a: `${siteFacts.cancellationPolicy} Full policy: <a href="/cancellation">cancellation page</a>.`,
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Bank transfer (IDR) and major credit cards. International transfers are fine; we send clear bank details and an invoice with the deposit request. Corporate clients can receive NPWP-ready documentation on request.',
  },
  {
    q: 'Is hiring a private chef cheaper than restaurants in Bali?',
    a: 'For couples on one dinner, it is a luxury choice rather than a pure saving. For groups of six or more on two meals a day, the day rate split per person is often less than one mid-range Seminyak dinner — plus no taxis, no tables, no “what shall we eat” debate. Worked example above on this page; full maths on <a href="/blog/private-chef-cost-bali">private chef cost guide</a>.',
  },
  {
    q: 'What if our chef cannot make it on the day?',
    a: 'We send a verified replacement of equivalent calibre within two hours — same menu brief — or you receive a 100% refund for that service. Your evening is protected. Why guests trust the model: <a href="/why-mychef">why myCHEF</a>.',
  },
  {
    q: 'Do I need a fully equipped kitchen for a private chef in Bali?',
    a: 'A standard villa kitchen is enough. We bring specialised tools when the menu needs them (induction, plating kits, BBQ gear). Hotel rooms without kitchens are not suitable; if your rental only has a mini-kitchen, tell us early so we can design a realistic menu or suggest <a href="/catering/drop-off-catering">drop-off</a>.',
  },
  {
    q: 'When does the chef arrive and how long do they stay?',
    a: 'For a single dinner, expect arrival about 2–3 hours before service. For multi-meal days the team works to your schedule — breakfast prep can start early, dinner service later. After the last plate they clean and leave; they do not sleep at the villa unless you book <a href="/staffing/live-in-chef">live-in chef</a> placement.',
  },
  {
    q: 'Can you handle BBQ nights and open-flame cooking at the villa?',
    a: 'Yes. Our BBQ head chef runs poolside and garden grills — seafood, mixed grill, wagyu and Indonesian flame dishes. For larger BBQ parties use <a href="/catering/bbq-catering">BBQ catering</a> or <a href="/bbq-grill">BBQ grill menus</a>; for multi-day stays BBQ can be one of your Chef Rotation days.',
  },
  {
    q: 'What is the difference between a daily private chef and fine dining in Bali?',
    a: 'Daily private chef is a meal-count day rate (from IDR 1,000,000++/day) with groceries at cost — ideal for stays. Fine dining is a multi-course tasting experience with a larger brigade and all ingredients included in the per-person price. See <a href="/fine-dining">fine dining</a> and <a href="/fine-dining/tasting-menu">tasting menus</a>.',
  },
  {
    q: 'Can I hire a private chef for a wedding or large event in Bali?',
    a: 'For 20–200 guests we recommend event catering with full staffing rather than a single daily chef. Wedding packages run from roughly IDR 1.5M–3M+ per person depending on menu and production. Start at <a href="/events/weddings">wedding catering</a> or <a href="/bali-wedding-catering-packages">wedding packages</a>.',
  },
  {
    q: 'Do you offer weekly or monthly private chef hire in Bali?',
    a: `Yes. Book 7+ days for ${STAY_DISCOUNTS.weekly.off * 100}% off the daily rate, or 28+ days for ${STAY_DISCOUNTS.monthly.off * 100}% off. Weekly stays include Chef Rotation at no extra charge. Long-stay and expat households can also explore <a href="/staffing/live-in-chef">live-in chef</a> placement.`,
  },
  {
    q: 'Can you add waiters, a bartender or a butler to our private chef booking?',
    a: 'Yes. Waiters, hosts, bartenders, butlers and sommeliers can be added to any dinner or multi-day stay. Typical ratios start at one waiter per 10 guests; cocktail packages from IDR 500,000++ per guest. See <a href="/in-villa-service">in-villa service</a> and <a href="/in-villa-service/bartenders">bartenders</a>.',
  },
  {
    q: 'Is alcohol included with a private chef in Bali?',
    a: 'No. You may bring your own wine and spirits (we open and serve) or ask us to source at cost. For full bar service add <a href="/in-villa-service/bartenders">cocktail packages</a> or explore <a href="/bar-services/">bar services</a>. Fine-dining wine pairing is an optional add-on on tasting menus.',
  },
  {
    q: 'How is myCHEF different from freelance marketplace private chefs?',
    a: `Marketplace listings are usually one freelance cook for one meal, often without an assistant, table service or cleanup guarantee. myCHEF is a chef + assistant day rate, named head-chef matching, grocery receipts at cost, supervised teams, and a replacement-or-refund promise. ${siteFacts.reviewFraming}. Compare options on <a href="/why-mychef">why myCHEF</a>.`,
  },
  {
    q: 'Can you cook Indonesian and Balinese food as well as Western cuisines?',
    a: 'Yes. Head Chef Ni Putu Asri leads ceremonial Balinese and Indonesian menus (bebek betutu, lawar, nasi goreng kampung and feast formats) alongside Italian, Mediterranean, Japanese, BBQ and plant-based specialists. Request the cuisine when you book — or rotate day by day on weekly stays.',
  },
  // AnswerSocrates / SEO guest questions (customer intent only — not chef job/salary queries)
  {
    q: 'How much does it cost to hire a private chef in Bali per day?',
    a: 'Daily villa chef hire (chef + assistant) is published as three plans: one meal from IDR 1,000,000++/day, two meals IDR 1,800,000++/day, three meals IDR 2,700,000++/day. Groceries are at cost with receipts. Single celebration dinners are often quoted per person instead — see the tables on this page and <a href="/pricing">pricing</a>.',
  },
  {
    q: 'How much does a private chef cost per month in Bali?',
    a: 'Longer stays use the same day rates with monthly discount (−20% from 28+ days) or a live-in placement for full-time households. Message dates and meal pattern for a fixed monthly proposal. <a href="/private-chef-bali">Day rates →</a> · <a href="/staffing/live-in-chef">Live-in chef →</a>',
  },
  {
    q: 'Does a private chef live with you?',
    a: 'Usually no for holiday villa bookings — the team arrives, cooks, serves, cleans and leaves. Live-in chef placement is a separate long-term staffing option for households that want a chef on-site. <a href="/staffing/live-in-chef">Live-in chef →</a>',
  },
  {
    q: 'Do private chefs buy the food and wash the dishes?',
    a: 'Yes on myCHEF villa bookings: we shop (groceries at cost with receipts on daily hire), cook, serve and leave the kitchen clean. You do not need to market-shop or do the washing-up after service.',
  },
  {
    q: 'Do I tip a private chef in Bali?',
    a: 'Tips are optional and appreciated for exceptional service, but never required. Service charge may already appear as “++” on quoted prices (11% tax + 10% service). Your written quote states what is included.',
  },
  {
    q: 'What is a private chef — and what is jasa private chef?',
    a: 'A private chef is a professional cook who works for your group only — typically in a villa or home — not in a public restaurant. In Indonesian, “jasa private chef” means private-chef service: we plan the menu, shop, cook and clean so you host without kitchen work. That is myCHEF’s core offer across Bali.',
  },
  {
    q: 'What is the difference between a personal chef and a private chef?',
    a: 'People use both terms loosely. On this site: a private chef booking is often one occasion or a short stay; a personal / daily chef arrangement covers recurring meals across days or weeks (our meal-count day rates). Both are available. <a href="/private-chef-bali">Daily plans →</a> · <a href="/fine-dining">Occasion fine dining →</a>',
  },
  {
    q: 'Is hiring a private chef worth it in Bali?',
    a: 'For villa groups it is often the easiest way to eat well without taxis, queues or “where shall we go?” debate — and for six-plus people on multi-meal days the per-person maths frequently beats restaurants. For a couple’s single celebration dinner it is a luxury choice; published prices let you decide before you book. <a href="/blog/private-chef-cost-bali">Cost guide →</a>',
  },
  {
    q: 'Can I hire a private chef for my villa in Bali?',
    a: 'Yes. Message WhatsApp with date, area, guest count and whether you want one dinner or multi-meal days. We reply within about two hours with availability and a clear quote. <a href="/book">Book →</a> · <a href="/quote">Quote →</a>',
  },
  {
    q: 'Can I hire a private chef and a bartender together in Bali?',
    a: 'Yes — a very common stack. Book the chef (or catering) and add cocktail packages from IDR 500,000++ per guest (min 10). Waiters and butlers are quoted on request. <a href="/in-villa-service/bartenders">Cocktail packages →</a> · <a href="/in-villa-service">In-villa service →</a>',
  },
] as const

export default function PrivateChefPillarPage() {
  const meta = getPageMeta('private-chef-bali')

  const schemas = [
    serviceWithAggregateOfferSchema({
      name: 'Private Chef Bali',
      description:
        'Hire a private chef in Bali for your villa. One, two or three meals a day cooked and served by a named head chef and a dedicated assistant. Transparent day rates, groceries at cost.',
      url: CANONICAL,
      lowPrice: String(planDailyRate(MEAL_PLANS[0], 'monthly')),
      highPrice: String(MEAL_PLANS[MEAL_PLANS.length - 1].daily),
      priceCurrency: 'IDR',
      unitText: 'per day',
    }),
    // Each meal plan as its own Offer, so the three rates are individually
    // machine-readable rather than collapsing into a single price range.
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Private chef meal plans in Bali',
      url: `${CANONICAL}#prices`,
      itemListElement: MEAL_PLANS.map((plan, i) => ({
        '@type': 'Offer',
        position: i + 1,
        name: plan.name,
        description: plan.summary,
        price: String(plan.daily),
        priceCurrency: 'IDR',
        url: `${CANONICAL}#prices`,
        availability: 'https://schema.org/InStock',
        eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'per day' },
      })),
    },
    howToSchema({
      name: 'How to hire a private chef in Bali',
      description:
        'Four steps to book a private chef for your Bali villa, from first message to the chef arriving.',
      totalTime: 'PT2H',
      steps: HOW_IT_WORKS.map(({ title, desc }) => ({ name: title, text: desc })),
    }),
    // Named head chefs carry the expertise claims on this page, so declare them
    // as people rather than leaving them as decorative cards.
    ...CUISINE_CHEFS.map((c) =>
      personSchema({
        name: c.chef,
        jobTitle: c.role,
        description: c.detail,
        url: `${SITE}/chefs/${c.slug}`,
        image: `${SITE}${c.image}`,
        knowsAbout: [c.cuisine, ...c.dishes],
        worksFor: { '@type': 'Organization', name: siteFacts.businessName, url: SITE },
      }),
    ),
    faqPageSchema(FAQS.map(({ q, a }) => ({ question: q, answer: a }))),
    breadcrumbSchema('Private Chef Bali', CANONICAL),
  ]

  return (
    <>
      <SeoHead
        title={meta?.title ?? 'Private Chef Bali | Prices From IDR 1,000,000++ Per Day | myCHEF'}
        description={
          meta?.description ??
          'Hire a private chef in Bali. One meal IDR 1M++, two meals IDR 1.8M++, three meals IDR 2.7M++ per day. Chef + assistant, groceries at cost. WhatsApp myCHEF.'
        }
        canonical={CANONICAL}
        ogImage={`${SITE}/generated/mychef-experience-bali-home-hero-ivory-villa.webp`}
        jsonLd={schemas}
      />

      {/* ---------------------------------------------------------- HERO */}
      <section className="relative min-h-[86vh] flex items-end overflow-hidden bg-[#0E0E0E]">
        <OptimizedImage
          src="/generated/mychef-experience-bali-home-hero-ivory-villa.webp"
          alt="Private chef cooking and serving dinner in a Bali villa for a group of guests"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.72]"
          width={1600}
          height={1067}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/55 to-[#0E0E0E]/10" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-16 pt-32 w-full">
          <Breadcrumb items={[{ label: 'Private Chef Bali' }]} theme="dark" />

          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] sm:text-xs uppercase mt-6 mb-4">
            Private Chef Hire · Villas Across All of Bali
          </p>

          <h1 className="text-white font-playfair font-normal leading-[1.05] text-[2.4rem] sm:text-6xl lg:text-7xl max-w-4xl">
            Private Chef in Bali
          </h1>
          {/* Price kept outside H1 so crawlers never see “BaliFrom …” concatenation, and H1 stays the clean head term. */}
          <p className="text-[#C5A028] italic font-playfair text-2xl sm:text-3xl mt-3 max-w-4xl">
            From {formatIDR(MEAL_PLANS[0].daily)} a day.
          </p>

          <p className="text-white/75 text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
            Hire a private chef for your Bali villa. A named head chef and a dedicated assistant
            arrive at your villa, source the ingredients fresh, cook, serve at your table and clean
            the kitchen. You choose one, two or three meals a day. Every rate is published below —
            you do not have to send an enquiry to find out what it costs.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={WA}
              data-source="private-chef-pillar-hero"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#0E0E0E] px-7 py-4 text-sm font-semibold tracking-wide hover:bg-[#d4af37] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Check Your Dates on WhatsApp
            </a>
            <a
              href="#prices"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors"
            >
              See All Prices
            </a>
          </div>

          <p className="text-white/45 text-xs sm:text-sm mt-6">
            {siteFacts.reviewFraming} · Reply within 2 hours
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* -------------------------------------------------------- PRICES */}
      <section id="prices" className="bg-[#FAF8F4] py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] uppercase mb-4">Prices</p>
          <h2 className="text-3xl sm:text-5xl font-playfair text-[#1A1A1A] leading-tight max-w-3xl">
            How much does a private chef in Bali cost?
          </h2>
          <p className="text-[#1A1A1A]/65 mt-5 max-w-2xl leading-relaxed">
            One rate, per day, based on how many meals you want cooked. Most private chef companies
            in Bali make you send an enquiry to find out what they charge — here is the whole thing.
            Every rate covers one professional chef plus a dedicated assistant, at your villa, for a
            full service day.
          </p>

          {/* Three plan cards */}
          <div className="grid gap-5 md:grid-cols-3 mt-12">
            {MEAL_PLANS.map((plan, i) => (
              <div
                key={plan.key}
                className={`relative border p-7 flex flex-col ${
                  i === 1
                    ? 'border-[#C5A028] bg-white shadow-[0_2px_30px_rgba(197,160,40,0.12)]'
                    : 'border-[#1A1A1A]/12 bg-white'
                }`}
              >
                {i === 1 && (
                  <span className="absolute -top-3 left-7 bg-[#C5A028] text-[#0E0E0E] text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1">
                    Most booked
                  </span>
                )}

                <p className="text-[#C5A028] text-[11px] tracking-[0.2em] uppercase">
                  {plan.meals} {plan.meals === 1 ? 'meal' : 'meals'} a day
                </p>
                <h3 className="text-2xl font-playfair text-[#1A1A1A] mt-2">{plan.name}</h3>

                <p className="text-4xl font-playfair text-[#1A1A1A] mt-6 tabular-nums">
                  {formatIDR(plan.daily)}
                  <span className="text-base text-[#1A1A1A]/45 font-normal">++</span>
                </p>
                <p className="text-[#1A1A1A]/45 text-sm mt-1">per day</p>
                <p className="text-[#1A1A1A]/60 text-sm mt-1">
                  {formatIDR(Math.round(plan.daily * 1.21))} all-in
                </p>

                <p className="text-[#1A1A1A]/70 text-sm mt-6 leading-relaxed flex-1">
                  {plan.summary}
                </p>

                <div className="mt-6 pt-5 border-t border-[#1A1A1A]/10 space-y-2 text-sm">
                  <p className="flex gap-2 text-[#1A1A1A]/70">
                    <Utensils className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                    {plan.covers}
                  </p>
                  <p className="flex gap-2 text-[#1A1A1A]/70">
                    <Check className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                    Chef + dedicated assistant
                  </p>
                  <p className="flex gap-2 text-[#1A1A1A]/70">
                    <Receipt className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                    Groceries at cost, receipts given
                  </p>
                </div>

                <p className="text-[#1A1A1A]/50 text-xs mt-5 italic">Best for: {plan.bestFor}</p>

                <a
                  href={WA}
                  data-source={`private-chef-pillar-plan-${plan.key}`}
                  className={`mt-6 text-center py-3.5 text-sm font-semibold tracking-wide transition-colors ${
                    i === 1
                      ? 'bg-[#C5A028] text-[#0E0E0E] hover:bg-[#d4af37]'
                      : 'border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  Book {plan.name}
                </a>
              </div>
            ))}
          </div>

          {/* Length-of-stay table */}
          <h3 className="text-2xl font-playfair text-[#1A1A1A] mt-20 mb-3">
            Staying longer? The day rate drops.
          </h3>
          <p className="text-[#1A1A1A]/60 max-w-2xl text-sm leading-relaxed mb-7">
            Book seven days or more and every day costs {STAY_DISCOUNTS.weekly.off * 100}% less.
            Twenty-eight days or more and it drops {STAY_DISCOUNTS.monthly.off * 100}%. The discount
            applies automatically — you do not have to ask for it.
          </p>

          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="w-full min-w-[620px] border-collapse bg-white border border-[#1A1A1A]/12">
              <caption className="sr-only">
                Private chef Bali day rates by meal plan and length of stay, in Indonesian rupiah
                before tax and service charge
              </caption>
              <thead>
                <tr className="bg-[#1A1A1A] text-white text-left">
                  <th scope="col" className="p-4 text-xs tracking-[0.14em] uppercase font-medium">
                    Meals per day
                  </th>
                  <th scope="col" className="p-4 text-xs tracking-[0.14em] uppercase font-medium">
                    1–6 days
                  </th>
                  <th scope="col" className="p-4 text-xs tracking-[0.14em] uppercase font-medium">
                    7+ days <span className="text-[#C5A028]">(−10%)</span>
                  </th>
                  <th scope="col" className="p-4 text-xs tracking-[0.14em] uppercase font-medium">
                    28+ days <span className="text-[#C5A028]">(−20%)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MEAL_PLANS.map((plan) => (
                  <tr key={plan.key} className="border-t border-[#1A1A1A]/10">
                    <th scope="row" className="p-4 text-left font-medium text-[#1A1A1A]">
                      {plan.name}
                      <span className="block text-[#1A1A1A]/45 text-xs font-normal mt-0.5">
                        {plan.covers}
                      </span>
                    </th>
                    {(['daily', 'weekly', 'monthly'] as const).map((stay) => (
                      <td key={stay} className="p-4 tabular-nums align-top">
                        <span className="text-[#1A1A1A] font-medium">
                          {formatIDRPlusPlus(planDailyRate(plan, stay))}
                        </span>
                        <span className="block text-[#1A1A1A]/45 text-xs mt-0.5">
                          {formatIDR(planDailyRateAllIn(plan, stay))} all-in
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#1A1A1A]/55 text-xs sm:text-sm mt-5 leading-relaxed max-w-3xl">
            All rates are per day and cover one chef plus one dedicated assistant.{' '}
            {privateChefPricing.qualifier} A {siteFacts.depositPercent}% deposit confirms your dates;
            the balance is due {siteFacts.balanceTiming}.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/pricing" className="text-[#C5A028] font-medium hover:underline">
              Full price list for events and catering →
            </Link>
            <Link to="/fine-dining" className="text-[#C5A028] font-medium hover:underline">
              One-off fine dining dinner instead? →
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- REVIEWS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] uppercase mb-4">
            Guest reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
            Rated five stars by the guests we cook for
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            <blockquote className="border border-[#1A1A1A]/10 bg-[#FAF8F4] p-6">
              <p className="text-[#C5A028] text-sm tracking-[0.2em]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
                “We had a great meal of babi guling at our villa from the team. The staff were very
                helpful and friendly and all of our team enjoyed the food!”
              </p>
              <footer className="text-sm text-[#1A1A1A]/55 mt-4">Luke Walker · Google review</footer>
            </blockquote>
            <blockquote className="border border-[#1A1A1A]/10 bg-[#FAF8F4] p-6">
              <p className="text-[#C5A028] text-sm tracking-[0.2em]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
                “Great service, very professional and reliable. Highly recommend!”
              </p>
              <footer className="text-sm text-[#1A1A1A]/55 mt-4">Mátyás · Google review</footer>
            </blockquote>
            <blockquote className="border border-[#1A1A1A]/10 bg-[#FAF8F4] p-6">
              <p className="text-[#C5A028] text-sm tracking-[0.2em]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
                “The chef worked around two coeliacs and a nut allergy without reducing the ambition
                of the menu at all. We booked again before we left.”
              </p>
              <footer className="text-sm text-[#1A1A1A]/55 mt-4">Amelia · Canggu · April 2025</footer>
            </blockquote>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={siteFacts.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A028] font-medium hover:underline"
            >
              Read our reviews on Google →
            </a>
            <Link to="/reviews" className="text-[#C5A028] font-medium hover:underline">
              All dated, located guest reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- WHAT IS / ISN'T IN IT */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
              What your daily rate covers
            </h2>
            <ul className="mt-8 space-y-3.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-[#1A1A1A]/75 leading-relaxed">
                  <Check className="w-5 h-5 text-[#C5A028] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
              What is billed separately
            </h2>
            <p className="text-[#1A1A1A]/60 text-sm mt-3">
              Published here rather than buried in a quote, because this is where most people get
              caught out.
            </p>
            <dl className="mt-8 space-y-6">
              {NOT_INCLUDED.map(({ item, detail }) => (
                <div key={item} className="border-l-2 border-[#C5A028]/40 pl-5">
                  <dt className="font-medium text-[#1A1A1A]">{item}</dt>
                  <dd className="text-[#1A1A1A]/70 text-sm mt-1.5 leading-relaxed">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ GROCERIES */}
      <section id="groceries" className="bg-[#FAF8F4] py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] uppercase mb-4">
            Ingredients &amp; sourcing
          </p>
          <h2 className="text-3xl sm:text-5xl font-playfair text-[#1A1A1A] leading-tight max-w-3xl">
            We do the shopping. You only pay what it cost us.
          </h2>
          <p className="text-[#1A1A1A]/65 mt-5 max-w-2xl leading-relaxed">
            This is the part people misunderstand, so here it is plainly. Sourcing your food is a
            job we do for you — planning, markets, suppliers, carrying it — and that work is already
            paid for in your day rate. What is billed separately is the food itself, at exactly what
            we paid for it.
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] items-start mt-12">
            <div className="grid gap-6 sm:grid-cols-2">
              {GROCERY_POINTS.map(({ title, detail }) => (
                <div key={title} className="bg-white border border-[#1A1A1A]/10 p-7">
                  <ShoppingBasket className="w-6 h-6 text-[#C5A028]" />
                  <h3 className="text-lg font-medium text-[#1A1A1A] mt-4">{title}</h3>
                  <p className="text-[#1A1A1A]/70 text-sm mt-2.5 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <figure className="lg:sticky lg:top-24">
              <OptimizedImage
                src="/generated/mychef-finedining-bali-sol-produce.webp"
                alt="Fresh Balinese market produce sourced that morning by a myCHEF private chef"
                className="w-full aspect-square object-cover"
                width={900}
                height={900}
              />
              <figcaption className="text-[#1A1A1A]/50 text-xs mt-3 leading-relaxed">
                A normal morning shop. Sourced to the menu, not to a shopping list you had to
                write.
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 border-l-2 border-[#C5A028] pl-6 max-w-3xl">
            <p className="text-[#1A1A1A]/75 leading-relaxed">
              <strong className="text-[#1A1A1A]">Why we do it this way.</strong> Most chef services
              in Bali fold an ingredient budget into the headline price, which means you cannot see
              what your food actually cost — and you have no way of knowing whether the markup is
              10% or 40%. We separate the two so the day rate is honest and the food is at cost.
              What your groceries come to depends entirely on the menu you choose, so we build the
              estimate with you before your stay rather than publishing a number that would not
              apply to you.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ CUISINES */}
      <section id="cuisines" className="bg-[#0E0E0E] py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] uppercase mb-4">Our chefs</p>
          <h2 className="text-3xl sm:text-5xl font-playfair text-white leading-tight max-w-3xl">
            A specialist head chef for every cuisine.
          </h2>
          <p className="text-white/65 mt-5 max-w-2xl leading-relaxed">
            Most agencies send whoever is available. We do not. Each cuisine has its own head chef
            who has cooked it for years — so if you want Japanese on Tuesday and Balinese on
            Wednesday, you get the person who actually specialises in each one.
          </p>
          <p className="text-white/65 mt-4 max-w-2xl leading-relaxed">
            That's <strong className="text-white">Chef Rotation</strong> — included at no extra
            charge on any booking of 7 days or longer. You're not locked into one chef or one
            cuisine for the whole stay; request a different specialist for any day, decided
            day by day as you go.
          </p>
          <p className="text-white/65 mt-4 max-w-2xl leading-relaxed">
            The six below are our <strong className="text-white">head chefs</strong>. Each one runs
            their own brigade, and behind them sits a team of{' '}
            <strong className="text-white">50+ professional chefs</strong> — sous chefs, commis,
            pastry and kitchen staff trained to the same standard. Whoever cooks in your villa is
            working to a head chef&rsquo;s recipes and a head chef&rsquo;s standard, not improvising
            on their own.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {CUISINE_CHEFS.map((c) => (
              <article
                key={c.slug}
                className="bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col"
              >
                <OptimizedImage
                  src={c.image}
                  alt={`${c.chef}, ${c.role} at myCHEF Bali`}
                  className="w-full aspect-[4/5] object-cover object-top"
                  width={900}
                  height={900}
                />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#C5A028] text-[11px] tracking-[0.18em] uppercase">
                    {c.cuisine}
                  </p>
                  <h3 className="text-xl font-playfair text-white mt-2">{c.chef}</h3>
                  <p className="text-white/45 text-xs mt-1">{c.role}</p>
                  <p className="text-white/70 text-sm mt-4 leading-relaxed flex-1">{c.detail}</p>
                  <p className="text-white/40 text-xs mt-4 italic">{c.dishes.join(' · ')}</p>
                  <Link
                    to={`/chefs/${c.slug}`}
                    className="text-[#C5A028] text-sm font-medium mt-5 hover:underline"
                  >
                    Meet {c.chef.split(' ')[0]} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Owner ruling 2026-07-30: make the depth of the team explicit — the six
              cards are head chefs only, each fronting a brigade, 50+ chefs in total. */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3 border-t border-white/10 pt-10">
            {[
              { n: '50+', l: 'Professional chefs on the team' },
              { n: '6', l: 'Head chefs, each leading their own brigade' },
              { n: '1–2', l: 'Support chefs on every booking, minimum' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="text-4xl font-playfair text-[#C5A028]">{n}</p>
                <p className="text-white/60 text-sm mt-1.5 leading-relaxed">{l}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/chefs" className="text-[#C5A028] font-medium hover:underline">
              See the full chef team →
            </Link>
            <Link to="/fine-dining/menus" className="text-[#C5A028] font-medium hover:underline">
              Browse signature set menus →
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- HOW IT WORKS */}
      <section className="bg-[#FAF8F4] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
            How to hire a private chef in Bali
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }) => (
              <div key={step}>
                <Icon className="w-7 h-7 text-[#C5A028]" />
                <p className="text-[#C5A028]/60 text-xs tracking-[0.2em] mt-4">{step}</p>
                <h3 className="text-lg font-medium text-[#1A1A1A] mt-1.5">{title}</h3>
                <p className="text-[#1A1A1A]/65 text-sm mt-2.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- VALUE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
            Is hiring a private chef in Bali worth it?
          </h2>
          <div className="prose prose-lg mt-7 text-[#1A1A1A]/75 max-w-none space-y-5 leading-relaxed">
            <p>
              For two people taking one dinner a day, a private chef is a treat rather than a saving
              — IDR 1,000,000++ plus groceries against a restaurant bill of maybe IDR 600,000. You
              are paying for the villa setting, the tailored menu and not having to book a car.
            </p>
            <p>
              For a group, the maths changes completely. Six people on two meals a day is IDR
              1,800,000++ for the chef team, which is around IDR 300,000 each for the day before food.
              A single mid-range dinner for six in Seminyak costs more than that, and you still have
              breakfast to sort out. By the time you are eight or ten people, a chef is comfortably
              cheaper than eating out and considerably less hassle.
            </p>
            <p>
              The other thing worth naming: the marketplace platforms quote per person per event,
              which looks cheaper on a landing page because it is a different product. Those bookings
              are a single freelance chef, cooking one meal, usually without table service or a
              second pair of hands. Our rate is a chef and an assistant, for a full day, with service
              and cleanup — which is why it is a day rate and not a headcount.
            </p>
          </div>

          <div className="mt-10 border border-[#C5A028]/30 bg-[#FAF8F4] p-7">
            <p className="text-[#1A1A1A] font-medium">Worked example — family of six, seven days</p>
            <p className="text-[#1A1A1A]/70 text-sm mt-3 leading-relaxed">
              Two meals a day at the weekly rate:{' '}
              <strong className="text-[#1A1A1A]">
                {formatIDRPlusPlus(planDailyRate(MEAL_PLANS[1], 'weekly'))} per day
              </strong>{' '}
              ={' '}
              <strong className="text-[#1A1A1A]">
                {formatIDR(planDailyRate(MEAL_PLANS[1], 'weekly') * 7)}++
              </strong>{' '}
              for the week, or{' '}
              <strong className="text-[#1A1A1A]">
                {formatIDR(planDailyRateAllIn(MEAL_PLANS[1], 'weekly') * 7)}
              </strong>{' '}
              all-in. Groceries on top at cost. That is roughly{' '}
              {formatIDR(Math.round((planDailyRateAllIn(MEAL_PLANS[1], 'weekly') * 7) / 6 / 7))} per
              person per day for the chef team.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- AREAS */}
      <section id="areas" className="bg-[#FAF8F4] py-20 sm:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] uppercase mb-4">
            We come to you
          </p>
          <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
            Private chef service for villas across all of Bali
          </h2>
          <p className="text-[#1A1A1A]/65 mt-5 max-w-2xl leading-relaxed">
            Same rates everywhere in South Bali, with no travel surcharge. Remote areas carry a
            distance component that we quote before you commit, never after.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-9">
            {AREAS.slice(0, 12).map((slug) => (
              <Link
                key={slug}
                to={`/private-chef/${slug}`}
                className="border border-[#1A1A1A]/15 bg-white px-4 py-2.5 text-sm text-[#1A1A1A]/80 hover:border-[#C5A028] hover:text-[#1A1A1A] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 inline-block mr-1.5 text-[#C5A028]" />
                Private Chef {areaLabel(slug)}
              </Link>
            ))}
            <Link
              to="/locations"
              className="border border-[#C5A028] bg-[#C5A028]/10 px-4 py-2.5 text-sm text-[#1A1A1A] font-medium hover:bg-[#C5A028]/20 transition-colors"
            >
              All areas →
            </Link>
          </div>
          <details className="mt-5">
            <summary className="cursor-pointer text-sm text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A] transition-colors">
              Show every area we cover
            </summary>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {AREAS.slice(12).map((slug) => (
                <Link
                  key={slug}
                  to={`/private-chef/${slug}`}
                  className="border border-[#1A1A1A]/15 bg-white px-4 py-2.5 text-sm text-[#1A1A1A]/80 hover:border-[#C5A028] hover:text-[#1A1A1A] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 inline-block mr-1.5 text-[#C5A028]" />
                  Private Chef {areaLabel(slug)}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ------------------------------------------------------- GALLERY */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight">
            What a private chef day in a Bali villa looks like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10">
            {GALLERY.map(({ src, alt, w, h }) => (
              <OptimizedImage
                key={src}
                src={src}
                alt={alt}
                className="w-full aspect-[4/5] object-cover"
                width={w}
                height={h}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- FAQ */}
      <section id="faq" className="bg-white py-20 sm:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair text-[#1A1A1A] leading-tight mb-4">
            Private chef Bali — frequently asked questions
          </h2>
          <p className="text-[#4A4745] text-sm md:text-base leading-relaxed mb-10">
            Pricing, groceries, villa kitchens, allergies, kids, deposits and long-stay chef hire — the questions guests ask before booking a private chef in Bali.
          </p>
          <FAQAccordion items={FAQS.map(({ q, a }) => ({ q, a }))} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* -------------------------------------------------------- BOOKING */}
      <section id="book" className="bg-[#0E0E0E] py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-[#C5A028] tracking-[0.28em] text-[11px] uppercase mb-4 text-center">
            Book your chef
          </p>
          <h2 className="text-3xl sm:text-5xl font-playfair text-white leading-tight text-center">
            Tell us your dates.
          </h2>
          <p className="text-white/60 text-center mt-5 max-w-xl mx-auto leading-relaxed">
            {privateChefPricing.headline} We reply within two hours with your chef, a sample menu and
            the all-in total.
          </p>

          {/*
            BookingForm styles itself for a light surface — its labels are #6B5F52 and
            its input text is #2C2419 on a transparent background. Dropped straight onto
            this section's #0E0E0E it rendered black on black and was unreadable.
            AuraPage already solved this by hosting the form in a white card; same here.
          */}
          <div className="mt-12 rounded-2xl border border-[#E5E3E0] bg-white p-6 sm:p-8">
            <BookingForm universe="sol" />
          </div>

          <div className="mt-10 text-center">
            <a
              href={WA}
              data-source="private-chef-pillar-final-cta"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#0E0E0E] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#d4af37] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Or message us on WhatsApp
            </a>
            <p className="text-white/40 text-xs mt-5 flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              Replies within 2 hours · {siteFacts.phoneDisplay}
            </p>
          </div>
        </div>
      </section>


      <StickyMobileCTA
        pageSource="private-chef-bali"
        serviceType="private-chef"
        serviceName="a private chef in Bali"
        intent="prices and availability"
        label="Get Private Chef Prices"
      />
    </>
  )
}
