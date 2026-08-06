import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Mixologist Hire in Bali -- Cocktail Experts for Villa Events and Weddings',
    body: `A professional mixologist transforms a bar from a drinks station into an experience. Whether you're hosting a villa wedding, a birthday party, a bachelorette celebration, or a corporate cocktail reception, a skilled mixologist brings craft cocktail knowledge, showmanship, and the ability to read a crowd -- creating drinks that become a talking point of the evening.

myCHEF connects you with vetted, experienced mixologists across Bali. Our bar specialists have backgrounds in Bali's best hospitality venues and can execute everything from signature cocktail menus to interactive flair bartending to non-alcoholic mocktail programmes. Every mixologist arrives with their own kit and is ready to work in any villa bar setup.

We cover Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'what-mixologists-do',
    type: 'content',
    title: 'What a Mixologist Provides at Your Bali Event',
    body: `A mixologist is more than a bartender who knows cocktail recipes. The distinction matters:

**Signature Cocktail Design** -- Before your event, your mixologist works with you to create 2--4 bespoke cocktails that reflect the event theme, your preferences, or a story you want to tell. A tropical wedding might have a lychee and lemongrass martini. A corporate launch might have a branded cocktail tied to the company's identity.

**Pre-Event Batch Preparation** -- For larger events, the mixologist pre-batches cocktail bases so service is fast. Guests don't wait 4 minutes for a drink during peak service hours.

**Live Cocktail Station** -- For smaller events or premium experiences, a live cocktail station where guests can interact with the mixologist and watch the craft is the preferred setup. Works especially well for intimate dinners, hen parties, and chef's table experiences.

**Mocktail Programmes** -- Not all guests drink alcohol. A skilled mixologist designs equally complex, flavour-forward mocktail alternatives so non-drinking guests feel included.

**Wine and Spirits Knowledge** -- Mixologists can advise on spirits sourcing, bar stock quantities, and glassware -- saving you from over- or under-stocking.

**Flair Bartending (on request)** -- For entertainment-focused events, we have certified flair bartenders who combine bottle juggling and showmanship with genuine cocktail skill.`,
  },
  {
    id: 'packages',
    type: 'content',
    title: 'Mixologist Hire Packages',
    body: `**Half-Day Event (up to 4 hours)**
Ideal for cocktail receptions, brunch parties, and afternoon events. Includes pre-event consultation, signature cocktail design, setup, service, and breakdown. From IDR 1,200,000 for one mixologist.

**Full-Day Event (up to 8 hours)**
For all-day weddings, villa parties, and corporate events. Two service windows (arrival drinks + evening cocktail bar). From IDR 2,000,000 for one mixologist.

**Multi-Mixologist Events**
For events over 80 guests, we recommend two mixologists working a split bar or dual stations. This keeps service flowing during peak arrival and post-dinner periods. From IDR 3,500,000 for two mixologists (full day).

**Add-Ons**
- Signature cocktail design session (pre-event): IDR 350,000
- Mobile bar equipment rental: IDR 500,000--1,500,000 (if villa doesn't have bar setup)
- Flair bartending performance set (30 minutes): IDR 800,000

Note: clients supply their own spirits and alcohol. Mixologists bring their tools, garnishes, ice, and non-alcoholic mixers. We can assist with spirits sourcing at cost + a small logistics fee.`,
  },
  {
    id: 'signature-cocktails',
    type: 'content',
    title: 'Creating Your Signature Cocktail Menu',
    body: `A signature cocktail menu is one of the most memorable personalisation elements at any Bali event. Here's how we typically approach it:

**Discovery** -- Your mixologist asks about your preferences (spirit bases you love, flavours you avoid, event theme, colour palette if relevant) and the event format.

**Proposal** -- They propose 3--4 cocktail concepts with names, base spirits, key flavours, and a brief description. You select 2--3 to develop.

**Refinement** -- For premium bookings, we arrange a 1-hour tasting session at your villa (additional fee applies) where you taste and fine-tune each cocktail.

**Batch sheet** -- The mixologist creates a scaled batch recipe for each cocktail based on expected guest count and service windows, ensuring consistent quality throughout the event.

Popular signature cocktail styles for Bali villas include: tropical rum/gin with local fruits (salak, rambutan, passionfruit), spiced arak-based cocktails, Japanese-influenced low-ABV serves, and zero-waste cocktails that use the kitchen's excess fruits and herbs.`,
  },
  {
    id: 'what-you-need',
    type: 'content',
    title: 'What You Need to Provide (and What We Handle)',
    body: `**You provide:**
- Spirits, wine, beer, and alcohol for the event
- A bar counter, table, or outdoor bar area at the villa
- Ice (or we can arrange ice delivery)
- Glassware (most villas have adequate stock; we can supplement)

**We handle:**
- The mixologist's own professional bar kit (shakers, strainers, jiggers, muddlers, bar spoons, fine strainers)
- Fresh garnishes, syrups, citrus, and non-alcoholic mixers
- Setup and breakdown
- Signature cocktail recipes and service

**Optional upgrades we manage:**
- Mobile bar unit rental
- Full glassware kit rental (for events where villa stock is insufficient)
- Spirits sourcing and delivery
- Bar linen and ice sculpture coordination`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Hire a Mixologist for Your Bali Event',
    body: `Tell us your event date, location, guest count, and any cocktail preferences. We'll match you with an available mixologist and confirm within a few hours.`,
  },
]

const faqs = [
  { question: 'How much do waiters and bartenders cost in Bali?', answer: 'Waiters from about IDR 250K/hour; cocktail packages from IDR 500,000++ per guest (min 10). <a href="/in-villa-service">In-villa service</a>.' },
  { question: 'Minimum booking?', answer: 'Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters.' },
  { question: 'Can we hire staff without food?', answer: 'Yes — self-catered or third-party caterer support is normal.' },
  { question: 'What do staff wear?', answer: 'Professional uniforms matched to event formality.' },
  { question: 'Alcohol included?', answer: 'No — BYO or sourced at cost; hire covers the professional.' },
  { question: 'Waiter ratio?', answer: 'About one waiter per 10 guests for formal service.' },
  { question: 'Butler service?', answer: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
  { question: 'Mixology and signature cocktails?', answer: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
  { question: 'Areas covered?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Combine with private chef?', answer: 'Yes — most common luxury setup.' },
  { question: 'Vetted staff?', answer: 'Employed/supervised teams with replacement-or-refund cover.' },
  { question: 'How to book staff?', answer: 'WhatsApp date, area, headcount and roles needed.' },
  { question: 'What bar services do you offer?', answer: 'Villa bartenders, mixology, and B2B bar solutions. <a href="/in-villa-service/bartenders">Bartenders</a> · <a href="/bar-services/">bar services</a>.' },
  { question: 'Cocktail package rate?', answer: 'From IDR 500,000++ per guest (min 10) for complete cocktail packages — not hourly hire. <a href="/in-villa-service/bartenders">Packages →</a>' },
  { question: 'Do you supply alcohol?', answer: 'Usually client-supplied or sourced at cost.' },
  { question: 'Mobile bar setup?', answer: 'Yes — stations, glassware plans and tools as scoped.' },
  { question: 'Zero-proof cocktails?', answer: 'Yes — full zero-proof menus available.' },
  { question: 'Wedding bar teams?', answer: 'Yes — scaled for guest count.' },
  { question: 'B2B for venues?', answer: 'Yes — consulting and bar programmes on <a href="/bar-services/">bar services</a>.' },
  { question: 'Cleanup?', answer: 'Stations broken down and guest areas cleared.' },
]

const relatedPages = [
  { label: 'Cocktail Service Packages', href: '/in-villa-service/bartenders', desc: 'Complete cocktail packages for villas' },
  { label: 'Sommelier Hire Bali', href: '/in-villa-service/sommelier', desc: 'Wine service and pairing expertise' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Full catering for villa celebrations' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Waiters and event crew hire' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Private chef for bachelor parties' },
]

export default function MixologistHireBaliPage() {
  return (
    <PremiumPage
      slug="blog/mixologist-hire-bali"
      title="Mixologist Hire Bali -- Craft Cocktail Experts for Villa Events & Weddings"
      seoTitle="Mixologist Hire Bali -- Signature Cocktails | myCHEF"
      description="Hire a professional mixologist in Bali for villa events and weddings. Signature cocktails, mocktail menus, flair bartending and craft bar service."
      seoDescription="Mixologist hire in Bali for villa weddings and events. Signature cocktail menus, mocktail programmes and flair bartending. From IDR 1.2M. All Bali villa areas."
      h1="Mixologist Hire Bali -- Craft Cocktail Experts for Villa Events & Weddings"
      subtitle="Signature cocktail menus, custom bar programmes, and showmanship for villa weddings, birthday parties, and corporate events in Bali."
      heroImage="/images/blog/mixologist-hire-bali.jpg"
      heroImageAlt="Professional Balinese mixologist crafting a signature cocktail at an outdoor villa bar in Bali"
      ogImage="/images/blog/mixologist-hire-bali.jpg"
      canonicalUrl="https://mychef.id/blog/mixologist-hire-bali"
      keywords={[
        'mixologist hire bali',
        'mixologist bali',
        'cocktail bartender bali',
        'hire mixologist bali',
        'private mixologist bali',
        'cocktail service bali',
        'flair bartender bali',
        'signature cocktails bali villa',
        'cocktail menu bali event',
        'mobile cocktail bar bali',
      ]}
      highlights={['Signature Cocktail Design', 'Mocktail Programmes', 'Flair Bartending Available', 'From IDR 1.2M']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Hire a Mixologist"
      ctaSubtext="Tell us your event date and guest count -- we'll match you with an available cocktail expert."
      extraJsonLd={[
        breadcrumbSchema('Mixologist Hire Bali', 'https://mychef.id/blog/mixologist-hire-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Mixologist Hire Bali -- Craft Cocktail Experts for Villa Events & Weddings',
          description:
            'Hire a professional mixologist in Bali for villa events. Signature cocktail design, mocktail programmes, and flair bartending for weddings, parties, and corporate receptions.',
          url: 'https://mychef.id/blog/mixologist-hire-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/mixologist-hire-bali.jpg',
        },
      ]}
    />
  )
}
