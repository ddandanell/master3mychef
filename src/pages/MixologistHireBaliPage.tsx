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
  {
    question: "What's the difference between a bartender and a mixologist?",
    answer:
      'A bartender serves drinks from a standard menu efficiently. A mixologist brings cocktail craft knowledge -- the ability to design original recipes, balance flavour profiles, and create custom menus. For events where the bar experience matters as much as the food, a mixologist elevates the occasion significantly. For straightforward service (beer, wine, standard cocktails), a bartender is more cost-effective.',
  },
  {
    question: 'Can the mixologist create an alcohol-free cocktail menu?',
    answer:
      'Yes. Non-alcoholic cocktail menus (mocktails) are increasingly popular at Bali events, especially wellness retreats, baby showers, and events with mixed drinking and non-drinking guests. Our mixologists design mocktail menus with the same complexity and craft as their alcoholic counterparts -- using shrubs, kombucha bases, fresh juices, and botanicals.',
  },
  {
    question: 'How many cocktails can a mixologist serve per hour?',
    answer:
      'A skilled mixologist serving pre-batched cocktails can serve 30--50 drinks per hour. For hand-crafted, made-to-order cocktails, 15--25 per hour per mixologist is realistic. For large events (60+ guests), we always recommend two mixologists to ensure service speed during peak periods.',
  },
  {
    question: 'Do we need to provide the alcohol or do you supply it?',
    answer:
      "Clients supply their own alcohol -- this keeps the costs transparent and avoids venue-style markups. We'll provide a recommended spirits list and quantities based on your guest count and event duration. For a logistics fee, we can source and deliver spirits to your villa if you prefer a hands-off approach.",
  },
  {
    question: 'Can we book a mixologist without a chef?',
    answer:
      "Absolutely. Mixologist hire is available as a standalone service. Many clients book a mixologist for welcome drinks while the chef handles the dinner, or add one to an event that already has catering from another provider. We're flexible -- contact us with whatever combination suits your event.",
  },
]

const relatedPages = [
  { label: 'Bartender Hire Bali', href: '/in-villa-service/bartenders', desc: 'Bar staff hire for events' },
  { label: 'Sommelier Hire Bali', href: '/in-villa-service/sommelier', desc: 'Wine service and pairing expertise' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Full catering for villa celebrations' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Waiters and event crew hire' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'In-villa private chef service' },
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
