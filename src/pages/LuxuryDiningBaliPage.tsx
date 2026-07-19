import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Luxury Private Dining in Bali -- Ultra-Premium In-Villa Chef Experiences',
    body: `Luxury dining in Bali has moved beyond restaurants. The finest food experiences the island now offers happen in private villas: a clifftop infinity pool in Uluwatu, a rice terrace pavilion in Ubud, a beachfront estate in Seminyak. The setting is better than any restaurant. The food, with the right chef, can be too.

myCHEF's luxury dining service connects ultra-high-net-worth guests, VIP visitors, and discerning villa owners with Bali's finest culinary talent -- executive chefs with backgrounds at Michelin-starred restaurants, international luxury hotels, and elite private residences. Everything is bespoke: the menu is written for you, the ingredients sourced specifically for your event, the service choreographed to your evening.

We deliver luxury private dining experiences across Bali's most prestigious villa corridors: Uluwatu, Seminyak, Nusa Dua, Jimbaran, Canggu, and Ubud.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: 'What a myCHEF Luxury Dining Experience Includes',
    body: `**Executive Chef Selection** -- We match you with a chef whose background, style, and specialisation fits the occasion. For a Japanese kaiseki experience, we provide a chef trained in Japan. For classical European fine dining, a chef with European luxury hotel credentials. For contemporary Balinese, a chef who has worked with the island's finest produce for years.

**Bespoke Menu Consultation** -- Before the event, we conduct a detailed consultation: your flavour preferences, any ingredients you love or avoid, the occasion you are celebrating, the mood you want the evening to carry. The menu is written from scratch. Nothing is template.

**Market-Fresh Ingredient Sourcing** -- Our chefs source from the same suppliers that supply Bali's best restaurants: the Jimbaran fish market for that morning's catch, highland farms in Bedugul for premium vegetables, specialist importers for European cheeses, Japanese wagyu, or champagne. Ingredient quality at luxury level.

**Full Front-of-House Service** -- A luxury dining experience requires service to match the food. We provide a dedicated service team: uniformed server(s), sommelier on request, and in-villa setup including table linens, polished glassware, and a mise-en-place that looks as considered as a five-star restaurant's.

**Wine and Beverage Programme** -- Our sommelier can design a complete beverage programme: wine pairing by the course, champagne service, curated cocktail hour, or premium non-alcoholic pairings. We source from specialist importers and can procure specific bottles on request.

**End-to-End Logistics** -- From equipment to setup to breakdown, we handle everything. You receive the evening; we handle the production behind it.`,
  },
  {
    id: 'chef-profiles',
    type: 'content',
    title: 'Our Luxury Tier Chefs',
    body: `myCHEF's luxury tier chefs are a small, carefully curated group. Each has demonstrated credentials at the highest level of professional cooking before joining our network.

**International Fine Dining Background** -- Our luxury chefs hold experience at Michelin-starred restaurants, Relais & Châteaux properties, or equivalent institutions in Europe, Japan, Australia, or the United States. They have cooked for heads of state, royalty, and global celebrity guests.

**Private Estate Experience** -- Beyond restaurant backgrounds, our top chefs have worked as private chefs for high-net-worth families and estates. They understand the demands of private service: discretion, flexibility, the ability to deliver perfection in a kitchen environment that is not their own.

**Indonesian Culinary Knowledge** -- Despite international backgrounds, our luxury chefs combine global technique with deep knowledge of Indonesian ingredients and culinary tradition. The result is menus that could only be created in Bali -- not fine dining imported to the tropics, but fine dining rooted here.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'Occasions for Luxury Private Dining',
    body: `**VIP and Celebrity Visits** -- When the guest list demands absolute discretion and absolute quality, a private villa dinner is the only appropriate setting. No public restaurant, no press attention. A completely private experience at the level the guest expects.

**Milestone Celebrations at Highest Level** -- A significant anniversary, a landmark birthday, a honeymoon at a luxury villa. The occasion demands the best food and service available. A myCHEF luxury dining experience is the answer.

**Corporate Entertainment and Board Dinners** -- Senior executives, international board members, high-value clients. A private fine dining experience in a Bali villa communicates that the relationship and the occasion matter. More powerful than any restaurant booking.

**Proposal and Romantic Occasions** -- The most important dinner of a relationship deserves the most considered setting. We design the table, the menu, the timing, and the service around the moment you are creating.

**Culinary Tourism Experiences** -- Food-focused travellers who have experienced the world's finest restaurants and want the equivalent in Bali. A private tasting menu with the island's best chef in a world-class villa location.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Luxury Dining Pricing',
    body: `Luxury tier private dining is priced to reflect the calibre of talent and ingredients involved. Pricing is quoted on request based on your specific requirements.

**Indicative price ranges:**

- **Premium evening with executive chef (4 courses + canapes):** From IDR 1,500,000--2,500,000 per person, chef fee inclusive, ingredients at market cost
- **Multi-course tasting menu (7--11 courses), executive chef:** From IDR 2,000,000--4,000,000 per person, dependent on ingredients and beverage pairing
- **Full luxury experience with sommelier, full front-of-house team, and premium ingredient specification:** From IDR 3,500,000--6,000,000+ per person

All pricing is quoted transparently before confirmation. There are no hidden costs. Ingredient cost is billed at actual market price with receipts provided.

We work with a number of Bali's most prestigious villa estates and can coordinate with villa management for table setup, florals, and additional styling on request.`,
  },
  {
    id: 'areas',
    type: 'content',
    title: 'Luxury Dining Locations in Bali',
    body: `Our luxury tier service covers all of Bali's premium villa corridors.

**Uluwatu and Bukit Peninsula** -- Clifftop villas with infinity pools and ocean views. The dramatic setting of Uluwatu's cliff-edge estates creates an environment that no restaurant can replicate. Our most requested luxury dining location.

**Seminyak and Petitenget** -- Bali's established luxury corridor. Large villa compounds, sophisticated guest profiles, and easy ingredient logistics make Seminyak a natural home for luxury private dining.

**Nusa Dua** -- The formal luxury resort precinct. We serve private villa estates and residences across Nusa Dua and Tanjung Benoa, including guests staying at attached villas at major resort properties.

**Jimbaran** -- Premium seafood dining with access to the Jimbaran fish market and stunning bay views. The bay-facing villas of Jimbaran are among Bali's most atmospheric dining settings.

**Ubud** -- For guests seeking a wellness-luxury synthesis, Ubud's jungle and rice terrace villas offer a completely different aesthetic. Our luxury organic and plant-forward menus are particularly well suited here.

**Canggu and Pererenan** -- Bali's creative-luxury overlap. Contemporary villa estates hosting guests who want luxury with a less formal aesthetic.`,
  },
]

const faqs = [
  {
    question: 'What makes myCHEF luxury dining different from a standard private chef booking?',
    answer:
      "myCHEF's luxury tier involves a specific selection of chefs: those with Michelin-starred, Relais & Châteaux, or equivalent international fine dining experience. The menu is entirely bespoke, the ingredients are sourced at the highest specification, and the front-of-house service matches the food quality. It is a complete fine dining experience, not a restaurant meal relocated to a villa.",
  },
  {
    question: 'Can you provide full table service and sommelier for luxury dining?',
    answer:
      'Yes. A luxury dining experience includes a uniformed service team, sommelier on request, polished glassware, and table setup. We can also coordinate with your villa manager on florals, additional styling, and any specific setup requirements for the evening.',
  },
  {
    question: 'How much advance notice is needed for a luxury dining experience?',
    answer:
      'For luxury tier experiences, we recommend a minimum of 72 hours. For experiences requiring specific imported ingredients (premium wagyu, European cheeses, specific wine orders), 5--7 days allows us to source at the appropriate level. For the most ambitious requests, 10 days or more is ideal.',
  },
  {
    question: 'Do your luxury chefs maintain discretion for VIP and celebrity guests?',
    answer:
      'Absolute discretion is a non-negotiable standard for our luxury tier chefs and service teams. We do not share guest information, do not discuss engagements publicly, and can execute NDAs with villa estates or personal security teams on request.',
  },
  {
    question: 'Can you design a fully plant-based luxury tasting menu?',
    answer:
      "Yes. A plant-based luxury tasting menu is a genuine specialty, not a compromise. Bali's produce is exceptional for high-end plant-based fine dining: rare tropical fruits, highland vegetables, mushrooms, and extraordinary aromatics. Our chefs can design a fully plant-based multi-course menu at the same technical and aesthetic level as any meat-and-fish menu.",
  },
  {
    question: 'What areas in Bali do you cover for luxury dining?',
    answer:
      'We cover all of Bali\'s premium villa corridors: Uluwatu, Seminyak, Petitenget, Nusa Dua, Jimbaran, Ubud, Canggu, and Pererenan. For exceptional occasions, we can also arrange luxury dining experiences in other areas of Bali with sufficient advance notice.',
  },
]

const relatedPages = [
  { label: 'Private Tasting Menu Bali', href: '/blog/tasting-menu-bali', desc: '7--11 course multi-course chef\'s dinner' },
  { label: 'Chef\'s Table Bali', href: '/blog/chefs-table-bali', desc: 'Interactive dining at the chef\'s counter' },
  { label: 'Fine Dining at Home Bali', href: '/blog/fine-dining-at-home-bali', desc: 'Restaurant-quality dining at your villa' },
  { label: 'Private Dining Bali', href: '/blog/private-dining-bali', desc: 'Complete in-villa dining experiences' },
  { label: 'Romantic Dinner Bali', href: '/blog/romantic-dinner-bali-private-chef', desc: 'Private romantic dinner for two' },
  { label: 'Sommelier Hire Bali', href: '/blog/sommelier-hire-bali', desc: 'Professional wine service and pairing' },
]

export default function LuxuryDiningBaliPage() {
  return (
    <PremiumPage
      slug="blog/luxury-dining-bali"
      title="Luxury Private Dining Bali -- Ultra-Premium In-Villa Chef Experience | myCHEF"
      seoTitle="Luxury Private Dining Bali -- Ultra-Premium In-Villa Chef Experience"
      description="Luxury private dining in Bali delivered by executive chefs with Michelin and international fine dining credentials."
      seoDescription="Luxury private dining Bali. Executive chefs with Michelin and fine dining backgrounds, bespoke menus, premium sourcing, sommelier and full table service."
      h1="Luxury Private Dining in Bali -- Ultra-Premium In-Villa Chef Experiences"
      subtitle="Executive chefs. Bespoke menus. Restaurant-grade service in Bali's finest villas."
      heroImage="/images/blog/luxury-dining-bali.jpg"
      heroImageAlt="Beautifully plated luxury fine dining course prepared by an executive private chef in an Uluwatu clifftop villa"
      ogImage="/images/blog/luxury-dining-bali.jpg"
      canonicalUrl="https://mychef.id/blog/luxury-dining-bali"
      keywords={[
        'luxury dining bali',
        'luxury private dining bali',
        'luxury chef bali',
        'fine dining bali villa',
        'executive chef bali',
        'vip chef bali',
        'private fine dining bali',
        'luxury in-villa dining',
        'bespoke dinner bali',
        'gourmet dining bali',
      ]}
      highlights={['Executive Chefs Only', 'Bespoke Menus', 'Sommelier Available', 'Full Table Service']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Request a Luxury Dining Experience"
      ctaSubtext="Tell us your occasion, guest count, villa area, and the level of experience you are looking for. We will match you with the right chef and send a detailed proposal within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Luxury Dining Bali', 'https://mychef.id/blog/luxury-dining-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Luxury Private Dining Bali -- Ultra-Premium In-Villa Chef Experience',
          description: 'Luxury private dining in Bali. Executive chefs with Michelin and fine dining backgrounds, bespoke menus, and full service.',
          url: 'https://mychef.id/blog/luxury-dining-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/luxury-dining-bali.jpg',
        },
      ]}
    />
  )
}
