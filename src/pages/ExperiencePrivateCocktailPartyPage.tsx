import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { Wine, Users, Music, Sparkles, Clock, GlassWater } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20cocktail%20party%20at%20my%20Bali%20villa.%20Please%20send%20availability%20and%20pricing.'
const CANONICAL = 'https://mychef.id/experiences/private-cocktail-party'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Cocktail Party Bali',
    title: 'Private Cocktail Party Bali — Your Villa, Our Bar',
    image: '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
    imageAlt: 'Bartender hire Bali service crafting cocktails at a private villa party',
    body: `<p>No queue at the bar. No closing time. No generic drinks list. A myCHEF private cocktail party turns your Bali villa into the only venue that matters: professional bartenders behind a full bar setup, a chef sending out canapés that keep pace with the pouring, and a drinks menu designed around your guests — classics done properly, Bali-inspired signatures, and zero-proof options made with the same care.</p>

    <p>From twelve friends around a Seminyak pool to eighty guests on an Uluwatu clifftop, the scale changes; the standard doesn't. You host. We run the night.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Plan My Cocktail Party — WhatsApp +62 896-7407-2020</a>. Send your date, villa and guest count — we reply within the hour.</p>`,
  },
  {
    id: 'experience',
    type: 'content' as const,
    subtitle: 'What a myCHEF Cocktail Party Looks Like',
    title: 'The Evening From Welcome Cocktail to Last Pour',
    body: `<p>Guests arrive to a welcome cocktail and a bar already set: glassware, ice, garnishes, fresh juices and house-made syrups. Bartenders matched to your headcount keep drinks moving; service staff clear, refresh and reset. The kitchen sends a continuous flow of canapés rather than formal courses, so the party never stops to eat. And when the last drink is poured, we break everything down and leave the villa as we found it — you wake up to memories, not mess.</p>`,
  },
  {
    id: 'packages',
    type: 'content' as const,
    subtitle: 'Packages & Per-Guest Pricing',
    title: 'Transparent Cocktail Party Packages',
    image: '/generated/mychef-cocktail-party-cocktails-canapes-bali-landscape.webp',
    imageAlt: 'Stylish private bar setup at a Bali villa cocktail party',
    body: `<p>Every party is quoted individually, but the structure is transparent:</p>

    <table class="w-full text-left border-collapse my-4">
      <thead>
        <tr class="border-b border-stone-700">
          <th class="py-2 pr-4">Package</th>
          <th class="py-2 pr-4">From price (++)</th>
          <th class="py-2">What it covers</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Bartender Only</td>
          <td class="py-2 pr-4">IDR 250K per hour (4-hour minimum)</td>
          <td class="py-2">Professional bartender with tools; you supply the drinks</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Bar + Mixers</td>
          <td class="py-2 pr-4">Quoted per party</td>
          <td class="py-2">Bartender team, full bar setup, juices, syrups, garnishes, ice — you supply the alcohol or we source it</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">Full Cocktail Party</td>
          <td class="py-2 pr-4">IDR 700K–1.2M per person</td>
          <td class="py-2">Bartenders, service staff, custom cocktail menu, chef-made canapés and grazing, all equipment, setup and clean-down</td>
        </tr>
        <tr>
          <td class="py-2 pr-4 font-semibold">Cocktail Reception Format</td>
          <td class="py-2 pr-4">From IDR 650K per person</td>
          <td class="py-2">Standing reception for 20–80 guests — ideal before a dinner or as a wedding after-party</td>
        </tr>
      </tbody>
    </table>

    <p>All prices ++ (11% government tax + 10% service charge); your quote shows the all-in figure. Staffing scales at roughly one server per ten guests.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Get My Per-Guest Quote — WhatsApp +62 896-7407-2020</a>. See our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">full pricing guide</a> for all cocktail party packages.</p>`,
  },
  {
    id: 'drinks',
    type: 'content' as const,
    subtitle: 'The Drinks — and What\'s in Them',
    title: 'Custom Cocktails, Classic Technique & Zero-Proof Options',
    body: `<p>Your menu is built with you before the party: Negronis, Margaritas, Espresso Martinis and Aperol Spritz alongside signatures built on local arak, pandan, lemongrass, torch ginger and tropical fruit — plus a zero-proof list of house shrubs, cold-pressed juices and herbal infusions so non-drinkers hold something just as considered.</p>

    <p><strong>Alcohol, your way.</strong> Choose a fully supplied package, or bring your own duty-free bottles and we provide the team, mixers and everything else. Either way, we tell you exactly what's being poured — bottle integrity matters in Bali, and your quote states whether spirits are sourced by us or supplied by you.</p>`,
  },
  {
    id: 'food',
    type: 'content' as const,
    subtitle: 'Food That Keeps Pace with the Bar',
    title: 'Chef-Made Canapés & Grazing',
    body: `<p>Our chefs design the food to match the drinks and the mood: passed canapés (tuna tartare on crispy wonton, satay skewers, compressed watermelon with feta), grazing boards with cured meats and local cheeses, and station-style small plates for longer parties. Vegan, gluten-free, halal and allergy requirements are prepared separately and served with the same presentation.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What Is Included',
    title: 'Everything Included in a Private Cocktail Party',
    features: [
      {
        icon: GlassWater,
        title: 'Custom Cocktail Menu',
        desc: 'A drinks list designed around your occasion and guest preferences.',
      },
      {
        icon: Users,
        title: 'Bartender & Service Team',
        desc: 'Professional bartenders and service staff matched to your guest count.',
      },
      {
        icon: Wine,
        title: 'Full Bar Setup',
        desc: 'Glassware, ice, garnishes, syrups, tools and back bar — we bring it all.',
      },
      {
        icon: Sparkles,
        title: 'Canapés & Grazing',
        desc: 'Chef-prepared bites and boards designed to complement the drinks.',
      },
      {
        icon: Music,
        title: 'BYO or Supplied Alcohol',
        desc: 'Fully supplied packages with bottle-level transparency, or BYO duty-free.',
      },
      {
        icon: Clock,
        title: 'End-to-End Management',
        desc: 'Planning, shopping, setup, service and clean-down handled by our team.',
      },
    ],
  },
  {
    id: 'how-it-runs',
    type: 'content' as const,
    subtitle: 'How the Evening Runs',
    title: 'From First Message to Last Drink',
    image: '/generated/mychef-cocktail-party-bartenders-setup-bali-portrait.webp',
    imageAlt: 'Professional bartenders preparing for a private cocktail event in Bali',
    body: `<p><strong>1. Brief us on WhatsApp</strong> — date, villa, guest count, occasion, drink preferences.</p>

    <p><strong>2. We design the plan</strong> — cocktail menu, food pairing, bar location, staffing ratio, timing; supplied vs BYO alcohol decided here.</p>

    <p><strong>3. Confirm with a deposit</strong> [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%] — written confirmation of menu, team and all-in investment.</p>

    <p><strong>4. We arrive early</strong> — bar built, kitchen prepped, welcome cocktails ready before the first guest.</p>

    <p><strong>5. We run the night and restore the villa</strong> — discreet breakdown after the last pour.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where We Host',
    title: 'Bali Villa Settings That Suit a Cocktail Party',
    body: `<p>The best cocktail parties take advantage of Bali's indoor-outdoor villa architecture. A private cocktail party works in almost any villa, but certain settings create particularly memorable results.</p>

    <p><strong>Uluwatu — Clifftop Sundowners:</strong> A Uluwatu villa with ocean views is unbeatable for a sunset cocktail party. Guests arrive as the light turns gold, drinks are served by the infinity pool, and the evening settles into a clifftop dinner if you choose to extend. See our <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu private chef page</a> for more on villa dining in this area.</p>

    <p><strong>Seminyak — Garden & Poolside Elegance:</strong> Seminyak's mature villas with central pools and lush walled gardens are ideal for sophisticated cocktail parties. The contained setting makes service smooth and the atmosphere intimate. See our <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak private chef page</a>.</p>

    <p><strong>Canggu — Contemporary Beachside Energy:</strong> Canggu villas tend to be design-forward and social, with open kitchens, pool decks, and space for music. They suit larger cocktail parties and celebrations with a younger, more energetic crowd. See our <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu private chef page</a>.</p>

    <p><strong>Ubud — Jungle Pavilion Gatherings:</strong> For a cocktail party with a different rhythm, Ubud's jungle villas offer pavilions suspended above valleys and rice terraces. The soundscape is birdsong and river water rather than waves. See our <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef page</a>.</p>

    <p>We host cocktail parties across all Bali villa regions. If your villa is not listed, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> and we will confirm logistics for your specific location.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Bartender Hire Bali Pricing',
    image: '/generated/mychef-cocktail-party-mobile-bar-detail-bali-landscape.webp',
    imageAlt: 'Professional mobile bar setup for bartender hire Bali at a private party',
    body: `<p>Pricing for bartender hire Bali depends on guest count, menu complexity, bar package, service duration, and staffing requirements. Because every event is tailored, we quote each party individually after a brief planning call.</p>

    <p><strong>What is included in a typical cocktail party quote:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Custom cocktail menu design and bartender service</li>
      <li>All bar equipment, glassware, ice, garnishes, and mise en place</li>
      <li>Chef-prepared canapés or grazing boards based on your chosen package</li>
      <li>Service staff for setup, service, and clean-down</li>
      <li>Ingredients and produce sourced fresh for the event</li>
    </ul>

    <p><strong>Starting from IDR 2,500,000 for a 3-hour package</strong> for intimate groups; larger celebrations and premium bar packages are quoted separately.</p>

    <p>Beverages may be billed separately at cost depending on the package structure. Add-ons such as extended service hours, additional bartenders, live stations, themed décor, or photographer coordination can be included on request. For a precise quote for your date and villa, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> — we respond within the hour.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Make It Bigger',
    title: 'Popular Upgrades for Your Cocktail Party',
    body: `<p>Many hosts want to extend the cocktail party into a full evening. The most popular upgrades include a live DJ or playlist curation, a roaming oyster or caviar station, a seated dinner after the reception, and a photographer to capture the night. We can also arrange transport coordination for guests staying at nearby villas.</p>

    <p>If you are planning a corporate event or brand activation, ask about branded cocktail menus, custom glassware, and cocktail competition formats that turn the party into a team activity. Whatever the occasion, the <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">bartender hire Bali</a> team adapts the service to match.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Private Cocktail Party Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Party',
    title: 'Ready to Host Your Bali Cocktail Party?',
    body: `Tell us your date, villa and guest count — we will reply within the hour with a tailored cocktail party plan and an itemised, all-in quote. Just need a bartender? <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">hire a private bartender only</a>. Planning something bigger? See <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">full villa party catering</a>. Want cocktail skills? Ask about <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">custom cocktail menu design</a>. Add an afternoon activity with <a href="/experiences/private-cooking-class" class="text-[#7E6410] hover:underline font-medium">add a cooking class to the afternoon</a>. Venues can see <a href="/bar-services" class="text-[#7E6410] hover:underline font-medium">bar consulting for venues — B2B</a>.`,
    primaryAction: {
      label: 'Plan My Cocktail Party',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Full Pricing Guide',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'How much does a private cocktail party in Bali cost?', answer: 'A full cocktail party with bartenders, staff, cocktails and canapés typically runs IDR 700K–1.2M per person ++. A standing cocktail reception starts from IDR 650K++ per person (20–80 guests). Bartender-only hire starts from IDR 250K per hour with a four-hour minimum.' },
  { question: 'How many guests can you handle?', answer: 'From an intimate 8–12 up to 80+ guests. Bartender and server numbers scale with the headcount.' },
  { question: 'How long does the party run?', answer: 'Most parties book four to six hours of service. Bartender-only hire has a four-hour minimum; extensions are quoted per hour.' },
  { question: 'What\'s included in the full package?', answer: 'Bartenders and service staff, custom cocktail menu, all bar equipment and glassware, fresh juices, syrups and garnishes, chef-made canapés and grazing, setup and full clean-down.' },
  { question: 'Do you supply the alcohol, or do we?', answer: 'Either. Fully supplied packages are quoted with bottle-level transparency; BYO duty-free is welcome — we bring everything else.' },
  { question: 'Can non-drinkers and kids be catered for?', answer: 'Yes — a dedicated zero-proof cocktail list is part of every menu, at no compromise on presentation.' },
  { question: 'What does our villa need to provide?', answer: 'A workable space for the bar and kitchen access. We bring all bar equipment; power and layout needs are confirmed during planning.' },
  { question: 'How far in advance should we book?', answer: 'Two to three weeks is comfortable; four to six for July–August and December. Last-minute requests are often possible — ask.' },
  { question: 'What deposit is required?', answer: 'A deposit confirms your date and team [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]; the balance is due before the event.' },
]

const RELATED_PAGES = [
  { label: 'Private Bartender Hire', href: '/in-villa-service/bartenders', desc: 'Hire a private bartender only for your villa event.' },
  { label: 'Custom Cocktail Menu Design', href: '/in-villa-service/mixology', desc: 'Tailored cocktail menus for villa parties and events.' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Full villa party catering for celebrations of any size.' },
  { label: 'Bar Services', href: '/bar-services', desc: 'Bar consulting and management for venues.' },
]

export default function ExperiencePrivateCocktailPartyPage() {
  return (
    <PremiumPage
      slug="experiences/private-cocktail-party"
      title="Private Cocktail Party Bali | Chef & Bartender at Your Villa"
      description="Host a private cocktail party at your Bali villa: bartender, chef canapés, custom cocktails & full bar setup. Published per-guest pricing. WhatsApp myCHEF."
      seoTitle="Private Cocktail Party Bali | Chef & Bartender at Your Villa"
      seoDescription="Host a private cocktail party at your Bali villa: bartender, chef canapés, custom cocktails & full bar setup. Published per-guest pricing. WhatsApp myCHEF."
      canonicalUrl={CANONICAL}
      h1="Private Cocktail Party Bali — Your Villa, Our Bar"
      subtitle="A Personal Bartender, Custom Cocktails & Canapés at Your Villa"
      heroImage="/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp"
      heroImageAlt="Bartender hire Bali crafting a signature cocktail at a private villa party"
      ogImage="https://mychef.id/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp"
      keywords={[
        'private cocktail party bali',
        'villa cocktail party bali',
        'cocktail party at your villa',
        'mobile cocktail party bali',
        'hens party cocktails bali',
      ]}
      highlights={['Custom Cocktails', 'Canapés & Grazing', 'Full Bar Setup', 'Bali-Wide Service']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Private Cocktail Party Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS),
        serviceSchema(
          'Private Cocktail Party Bali',
          'A private cocktail party at your Bali villa: professional bartenders, custom cocktails, chef-made canapés, full bar setup and clean-down. Full packages from IDR 700K per person ++; bartender-only hire from IDR 250K per hour.',
          CANONICAL
        ),
      ]}
      ctaText="Plan My Cocktail Party"
      ctaSubtext="Tell us your date, villa, and guest count — we will reply within the hour."
    />
  )
}
