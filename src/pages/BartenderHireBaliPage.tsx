import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

/**
 * Blog SEO page for “bartender hire Bali” intent.
 * Product model: complete cocktail packages only — never hourly bartender-only hire.
 * SSoT prices: src/data/cocktailServicePackages.ts
 */

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Luxury Cocktail Service in Bali — Packages, Not Hourly Hire',
    body: `Searching for “bartender hire Bali” usually means you want a full bar for a villa party, wedding or private dinner — not a lone person on an hourly timesheet. myCHEF sells **complete cocktail packages**: professional bar team, four chosen cocktails, glassware, ice, garnishes, setup and cleanup, priced **per guest** (minimum 10).

We do **not** sell bartender-only hourly hire for private villas. Packages run from **IDR 500,000++ per guest** (BYO) through free-flow and premium free-flow options. Full commercial tables live on our <a href="/in-villa-service/bartenders">luxury cocktail & bartender service</a> page; craft menus live under <a href="/in-villa-service/mixology">private mixology</a>; occasion planning under <a href="/experiences/private-cocktail-party">private cocktail party</a>.

Coverage: Seminyak, Canggu, Uluwatu, Ubud, Jimbaran, Nusa Dua, Sanur, Pererenan and villa areas island-wide.`,
  },
  {
    id: 'packages',
    type: 'content',
    title: 'Three Complete Cocktail Packages',
    body: `**BYO Cocktail Service — IDR 500,000++ per guest**
Six hours of full bar operation. You supply spirits (we send an itemised shopping list); we supply the bar team, tools, glassware, ice, mixers, juices, syrups and garnishes for four pre-selected cocktails. Minimum 10 guests.

**Cocktail Free Flow — IDR 1,300,000++ per guest**
Four hours free-flow of four cocktails with spirits included for the approved menu, plus the full operating bar package. Minimum 10 guests.

**Premium Cocktail Free Flow — IDR 1,700,000++ per guest**
Six hours free-flow with premium spirits, elevated garnishes and the same complete team + equipment package. Minimum 10 guests.

All prices are **++** (11% government tax + 10% service charge). Optional alcohol sourcing (+15% logistics) if you do not want to buy spirits yourself. Full inclusion lists: <a href="/in-villa-service/bartenders">cocktail service packages</a>.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: "What's Included in Every Package",
    body: `Every villa cocktail package includes:

**Bar team scaled to guest count** — not a single unstaffed “hourly bartender”. Ratios are planned so queues do not form at peak.

**Four cocktails chosen in advance** — classics, tropical signatures or event-themed serves, with zero-proof options available.

**Full operating kit** — shakers, glassware, ice, mixers, fresh fruit, herbs, syrups and garnish prep.

**Setup and cleanup** — bar built before guests arrive; station broken down and guest areas cleared.

**Pre-event briefing** — guest count, timings, dress code, dietary notes and villa access.

**Replacement cover** — if a scheduled team member cannot attend, we send a replacement. You are not left without a bar on event day.`,
  },
  {
    id: 'when-to-book',
    type: 'content',
    title: 'When to Book Cocktail Service',
    body: `Bali peaks in June–September and December–January. Package capacity books out on weekends first.

**Recommended windows:**
- Casual villa cocktail nights: 3–7 days
- Birthdays and celebrations: 1–2 weeks
- Weddings and corporate: 4–8 weeks
- Peak season: add two or more weeks

Last-minute package availability is sometimes possible under 48 hours — message us honestly with date, area and headcount. Many hosts stack cocktail packages with <a href="/private-chef-bali">private chef</a>, <a href="/in-villa-service/waiters">waiters</a> and <a href="/events/villa-parties">villa party catering</a> in one plan.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book Cocktail Packages for Your Bali Villa',
    body: `Tell us your date, villa area, guest count and whether you prefer BYO or free-flow. We reply with a package recommendation and fixed quote — complete cocktail service, not hourly bartender hire.`,
  },
]

const faqs = [
  {
    question: 'Do you sell hourly bartender hire for private villas?',
    answer:
      'No. For private villas we sell complete cocktail packages from IDR 500,000++ per guest (min 10). See <a href="/in-villa-service/bartenders">luxury cocktail service packages</a>. Venue operators needing temporary bar staffing: <a href="/bar-services/temporary-bartender-staffing/">B2B temporary bartender staffing</a>.',
  },
  {
    question: 'How much do cocktail packages cost in Bali?',
    answer:
      'BYO from IDR 500,000++ / guest, free flow IDR 1,300,000++ / guest, premium free flow IDR 1,700,000++ / guest. Minimum 10 guests. Full tables: <a href="/in-villa-service/bartenders">bartenders</a>.',
  },
  {
    question: 'How much do waiters cost?',
    answer:
      'Waiters: contact us for pricing (separate from cocktail packages). <a href="/in-villa-service/waiters">Waiters</a>.',
  },
  {
    question: 'Is alcohol included?',
    answer:
      'BYO packages: client supplies spirits from our list. Free-flow packages include spirits for the approved cocktail menu. We can source licensed stock for a logistics fee.',
  },
  {
    question: 'Minimum guests?',
    answer: 'Cocktail packages require a minimum of 10 guests.',
  },
  {
    question: 'Can we hire staff without food?',
    answer: 'Yes — cocktail packages and waiters work for self-catered or third-party catered villas.',
  },
  {
    question: 'Mixology and signature cocktails?',
    answer: 'Yes — craft and custom design on <a href="/in-villa-service/mixology">mixology</a>.',
  },
  {
    question: 'Private cocktail party planning?',
    answer: 'Yes — occasion timeline and add-ons on <a href="/experiences/private-cocktail-party">private cocktail party</a>.',
  },
  {
    question: 'Areas covered?',
    answer: 'Island-wide. <a href="/locations">Locations</a>.',
  },
  {
    question: 'Combine with private chef?',
    answer: 'Yes — most common luxury setup. <a href="/private-chef-bali">Private chef</a>.',
  },
  {
    question: 'How to book?',
    answer: 'WhatsApp date, area, guest count and package preference (BYO / free flow / premium). Or use <a href="/book">book</a> / <a href="/quote">quote</a>.',
  },
  {
    question: 'Deposit and cancellation?',
    answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.',
  },
]

const relatedPages = [
  { label: 'Cocktail Service Packages', href: '/in-villa-service/bartenders', desc: 'BYO, free flow and premium packages' },
  { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', desc: 'Occasion planning for villa cocktail nights' },
  { label: 'Private Mixology', href: '/in-villa-service/mixology', desc: 'Custom cocktail design and craft sessions' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Food and full production for villa celebrations' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa chef for dinner and events' },
  { label: 'Waiter Hire Bali', href: '/in-villa-service/waiters', desc: 'Floor service for dinners and parties' },
]

export default function BartenderHireBaliPage() {
  return (
    <PremiumPage
      slug="blog/bartender-hire-bali"
      title="Bartender Hire Bali — Luxury Cocktail Packages for Villas"
      seoTitle="Bartender Hire Bali — Cocktail Packages from IDR 500K++ | myCHEF"
      description="Looking for bartender hire in Bali? myCHEF sells complete cocktail packages (not hourly hire) from IDR 500,000++ per guest — team, bar, glassware, ice and cleanup."
      seoDescription="Bartender hire Bali for villa parties means complete cocktail packages from IDR 500,000++ per guest (min 10). BYO, free flow and premium. Not hourly bartender-only hire."
      h1="Bartender Hire Bali — Complete Cocktail Packages for Villas"
      subtitle="Complete mobile cocktail service for villa parties, weddings and private dinners — packages from IDR 500,000++ per guest. We do not sell hourly bartender-only hire."
      heroImage="/images/blog/bartender-hire-bali.jpg"
      heroImageAlt="Professional bartender team running a complete cocktail package at a private Bali villa"
      ogImage="/images/blog/bartender-hire-bali.jpg"
      canonicalUrl="https://mychef.id/blog/bartender-hire-bali"
      keywords={[
        'bartender hire bali',
        'cocktail packages bali',
        'private cocktail service bali',
        'villa bartender bali',
        'mobile bar bali',
        'cocktail free flow bali',
        'private bartender bali',
        'villa cocktail party bali',
      ]}
      highlights={['Packages only', 'From IDR 500K++/guest', 'Min 10 guests', 'Not hourly hire']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Get Cocktail Package Quote"
      ctaSubtext="Share date, guest count and villa area — we recommend BYO, free flow or premium."
      extraJsonLd={[
        breadcrumbSchema('Bartender Hire Bali', 'https://mychef.id/blog/bartender-hire-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bartender Hire Bali — Complete Cocktail Packages for Villas',
          description:
            'Complete cocktail packages for Bali villas from IDR 500,000++ per guest. Not hourly bartender-only hire. BYO, free flow and premium free flow.',
          url: 'https://mychef.id/blog/bartender-hire-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-08-06',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/bartender-hire-bali.jpg',
        },
      ]}
    />
  )
}
