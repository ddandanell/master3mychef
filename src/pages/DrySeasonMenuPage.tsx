import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Sun, Utensils, Fish, Leaf, Users, Star } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Bali Dry Season Dining',
    title: 'The Best Private Chef Menu for Bali\'s Dry Season (April–October)',
    body: `<p>Bali's dry season — April through October — is when the island runs at full throttle. Villa occupancy peaks, wedding season is in full swing, and every evening feels designed for outdoor dining. The skies are clear, the air is warm but not oppressive, and Bali's markets overflow with the best produce of the year.</p>
    <p>A private chef who understands the dry season doesn't just cook — they source. The difference between a memorable dry-season dinner and a generic hotel buffet lies almost entirely in what arrives from the market at 5am. This guide covers which ingredients are at their peak, which dishes make the most of them, and how to structure a menu that takes full advantage of Bali at its best. See our <a href="/blog/bali-catering-menu" class="text-[#7E6410] hover:underline font-medium">complete Bali catering menu guide</a> for year-round context.</p>`,
  },
  {
    id: 'ingredients',
    type: 'content' as const,
    subtitle: 'Seasonal Produce',
    title: 'What\'s in Season April–October',
    body: `<p>Dry-season Bali delivers the island's most celebrated fruits alongside the freshest seafood of the year, as calmer seas mean fishing boats go out daily.</p>

    <p><strong>Tropical fruits at their peak:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>Mangosteen (manggis)</strong> — Bali's most prized fruit. Available May–July, intensely aromatic, sweet-tart white flesh. At its best eaten straight or as a sorbet, compressed in a sauce, or served alongside a fresh cheese course.</li>
      <li><strong>Salak (snake fruit)</strong> — native to Bali, harvest peaks May–October. Crunchy, astringent, honey-sweet. Excellent raw, in ceviche-style salads, or caramelised as a plated dessert component.</li>
      <li><strong>Rambutan</strong> — juicy, lychee-adjacent. Best June–August. Works beautifully in cold starters, cocktail garnishes, or alongside duck and pork.</li>
      <li><strong>Local papaya and banana varieties</strong> — available year-round but peak sweetness in the dry season. Ideal for breakfast spreads, smoothie bowls, and desserts.</li>
      <li><strong>Starfruit (belimbing)</strong> — tart and crunchy, excellent in fresh salads and as a garnish for grilled fish.</li>
    </ul>

    <p><strong>Seafood:</strong> Calm dry-season seas mean daily catches. Tuna from the Jimbaran fishing village, red snapper, barramundi, squid, and prawns are all at their freshest. Your chef should be sourcing direct from the Jimbaran fish market or through a trusted fishmonger who buys that morning.</p>

    <p><strong>Vegetables and herbs:</strong> Dry-season heat brings excellent long beans, eggplant varieties, local corn, banana blossom, and cassava leaves. Highlands produce (Bedugul and Kintamani) delivers sweet potatoes, cabbages, carrots, and shiitake mushrooms even during dry months.</p>

    <p><strong>Proteins:</strong> Babi guling (suckling pig) and ayam betutu (ceremonial spiced chicken) are available year-round, but dry-season events make ceremonial presentation easier — outdoor setups, whole-roast service, and carving stations work best in guaranteed-dry weather.</p>`,
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'Menu Ideas',
    title: 'Dry Season Menu Concepts Worth Booking',
    body: `<p>These four menus represent the best of what Bali's dry season makes possible. Each is designed for a private villa setting and can be tailored by your myCHEF chef based on group size and dietary requirements.</p>

    <p><strong>1. Sunset Pool Dinner (4–8 guests) — Plated, 5 courses</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Amuse: fresh mangosteen with lime cream on a betel leaf</li>
      <li>Starter: Jimbaran tuna crudo, compressed salak, starfruit, chilli oil</li>
      <li>Soup: chilled coconut gazpacho with lemongrass and basil oil</li>
      <li>Main: charcoal-grilled barramundi, cassava purée, sambal matah, banana blossom slaw</li>
      <li>Dessert: rambutan panna cotta, caramelised salak, coconut tuile</li>
    </ul>

    <p><strong>2. Tropical Garden Feast (10–20 guests) — Balinese Buffet</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Nasi campur station with 8 rotating condiments and accompaniments</li>
      <li>Whole-roasted suckling pig (babi guling), carved at the table</li>
      <li>Jimbaran-style grilled seafood platter: prawns, squid, snapper</li>
      <li>Gado-gado with house peanut sauce and crackers</li>
      <li>Fresh tropical fruit platter: mangosteen, rambutan, salak, papaya</li>
      <li>Black rice pudding with palm sugar and coconut cream</li>
    </ul>

    <p><strong>3. Healthy Retreat Menu (4–12 guests) — Light Plated</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Acai and mixed berry bowl with granola and fresh highland fruit</li>
      <li>Smoothie bar: mango-turmeric, dragon fruit, green papaya-ginger</li>
      <li>Lunch: sesame tuna bowl, cucumber ribbon, edamame, pickled daikon</li>
      <li>Afternoon: cold-pressed coconut water and fruit platters</li>
      <li>Dinner: grilled barramundi, roasted root vegetables, tamarind glaze</li>
    </ul>

    <p><strong>4. Villa Wedding Menu (30–60 guests) — Hybrid Format</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Cocktail hour: passed canapés, fresh coconut drinks, Champagne station</li>
      <li>Seated starter: plated tuna crudo for every guest simultaneously</li>
      <li>Main buffet: two whole proteins, three vegetable dishes, rice and bread station</li>
      <li>Dessert grazing table: tropical tarts, chocolate bark with local fruit, mini pavlovas</li>
    </ul>

    <p>For pricing on each format, see our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">private chef pricing guide</a> or the <a href="/catering" class="text-[#7E6410] hover:underline font-medium">catering service overview</a>.</p>`,
  },
  {
    id: 'by-occasion',
    type: 'features' as const,
    subtitle: 'By Occasion',
    title: 'Dry Season Dining by Event Type',
    features: [
      {
        icon: Sun,
        title: 'Pool Lunches & Day Parties',
        desc: 'The dry season\'s predictable weather is made for all-day pool events. Light menus work best: fresh seafood, salads, cold noodle bowls, fruit platters, and frozen drinks. Plan for 12:30–15:00 service to catch guests before afternoon sun becomes strong.',
      },
      {
        icon: Star,
        title: 'Weddings (Peak Season)',
        desc: 'June–September is Bali\'s peak wedding season. Full outdoor setups are reliably safe. Menus should lean into seasonal abundance: tropical fruit centrepieces, fresh-catch seafood starters, and a babi guling carving station create an unmistakably Balinese celebration.',
      },
      {
        icon: Fish,
        title: 'Sunset Dinner Parties',
        desc: 'Bali\'s dry season sunsets are spectacular. A plated 4–5 course menu timed to finish as the sun dips below the Indian Ocean horizon is a signature experience. Tuna crudo, grilled barramundi, and fresh fruit desserts make full use of peak-season produce.',
      },
      {
        icon: Users,
        title: 'Corporate & Retreat Groups',
        desc: 'April–October brings significant corporate retreat and wellness group traffic. These groups often want a mix: light, healthy daytime menus (smoothie bowls, salads, grilled fish) and one celebratory communal dinner — typically a full Balinese feast on the final evening.',
      },
      {
        icon: Leaf,
        title: 'Yoga & Wellness Retreats',
        desc: 'Dry season is peak retreat season in Ubud and Canggu. Menu focus: plant-forward, low-oil, high-freshness. Local highland vegetables, tempeh, sprouted grains, and fresh tropical fruits with minimal processing. The chef coordinates timing around morning and afternoon sessions.',
      },
      {
        icon: Utensils,
        title: 'Anniversary & Romantic Dinners',
        desc: 'The combination of reliable weather, peak seasonal produce, and long golden evenings makes dry season ideal for intimate dinners for two. A 5-course plated menu on a villa terrace, with mangosteen-based dessert and a Champagne pairing, is a signature myCHEF experience.',
      },
    ],
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'Planning Tips',
    title: 'How to Plan a Dry Season Menu: Practical Advice',
    body: `<p>The dry season is when myCHEF is busiest. Chefs and event slots book up quickly in May for June–September events. Here is what experienced villa guests do to get the best outcome:</p>

    <p><strong>Book at least 2 weeks in advance.</strong> During peak season (July–August), the best chefs are booked 3–4 weeks out. If you have a fixed event date, confirm your chef as soon as your villa booking is confirmed.</p>

    <p><strong>Share your dietary requirements upfront.</strong> Dry season events often involve mixed groups — some vegetarian, some with allergies, international guests with varied preferences. Sharing the full guest list dietary profile at booking time allows your chef to plan a menu that works for everyone without last-minute substitutions.</p>

    <p><strong>Trust the seasonal produce, not the fixed menu.</strong> Ask your chef what is best at market the week of your event rather than locking into a rigid menu months ahead. A good chef in Bali builds menus around what arrives from the market, not the other way around. The best dry-season meals are those that respond to what is available, not what was planned in January.</p>

    <p><strong>Plan your timing around the setting sun.</strong> Dry-season sunset times in Bali range from 17:50 (April) to 18:20 (September). For a sunset dinner, aim to have the final course serving by 18:30, or time the first course arrival at 17:30 so guests are at the table when the sky turns. Your chef can time mise-en-place to match.</p>

    <p><strong>Consider a Balinese market tour the morning before.</strong> myCHEF chefs can take small groups to the Ubud market (morning) or Jimbaran fish market (pre-dawn) before preparing the day's menu. This is a popular add-on for guests who want to understand where their food comes from.</p>

    <p>Ready to plan your dry season dinner? <a href="/catering" class="text-[#7E6410] hover:underline font-medium">View catering options</a> or <a href="/blog/buffet-vs-plated-service-bali" class="text-[#7E6410] hover:underline font-medium">choose between buffet and plated service</a> before you book.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    title: 'Plan Your Dry Season Menu',
    body: "Bali's best produce is waiting — let's build your menu around it.",
    primaryAction: { label: 'Get a Menu Proposal', href: 'https://wa.me/62089674072020?text=Hi%20myCHEF%2C%20I%20want%20to%20plan%20a%20dry%20season%20dinner%20menu' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'When exactly is Bali\'s dry season?',
    answer: 'Bali\'s dry season runs from approximately April to October. The driest months are July and August. Occasional brief showers can occur even in dry season, but outdoor dining is reliably safe from May through September.',
  },
  {
    question: 'What fruit is in season in Bali during the dry season?',
    answer: 'Peak dry-season fruits include mangosteen (May–July), salak/snake fruit (May–October), rambutan (June–August), starfruit, and various banana and papaya varieties. Your chef can incorporate these into every course from starter to dessert.',
  },
  {
    question: 'Is dry season the best time to book a private chef in Bali?',
    answer: 'Dry season is the best time for outdoor dining, but it is also peak booking season. The produce is exceptional, weather is reliable for outdoor events, and the long golden evenings are perfect for sunset dinners. Book at least 2 weeks in advance — July and August chefs fill quickly.',
  },
  {
    question: 'Can a private chef in Bali source fresh seafood daily?',
    answer: 'Yes — during dry season, calm seas mean Jimbaran fishing boats go out every day. myCHEF chefs source fish the morning of your dinner where possible. You can request a specific species (tuna, barramundi, snapper) and we will confirm availability based on that morning\'s catch.',
  },
  {
    question: 'How much does a dry season private chef dinner cost in Bali?',
    answer: 'Dry season pricing does not differ from standard rates. A plated private chef dinner starts from IDR 800,000–1,300,000/person depending on courses and complexity. A Balinese buffet feast starts from IDR 450,000–750,000/person. See our full pricing guide for details.',
  },
  {
    question: 'What is the most popular dry season menu at a Bali villa?',
    answer: 'The most requested dry season menu is a 4–5 course plated sunset dinner for 4–8 guests featuring fresh tuna crudo, grilled Jimbaran seafood as the main, and a tropical fruit dessert with mangosteen or salak. For groups of 15+, the full Balinese feast with whole roasted suckling pig is the standout choice.',
  },
]

const RELATED_PAGES = [
  { href: '/blog/bali-catering-menu', label: 'Bali Catering Menu Guide', desc: 'Year-round Bali catering menu ideas, seasonal ingredients, and pricing.' },
  { href: '/blog/buffet-vs-plated-service-bali', label: 'Buffet vs Plated Service', desc: 'Which catering format is right for your Bali villa event?' },
  { href: '/pricing', label: 'Private Chef Pricing', desc: 'Full pricing guide for private chefs and catering in Bali.' },
  { href: '/catering', label: 'Catering Services', desc: 'Full-service catering for villa events, weddings, and retreats.' },
]

const extraJsonLd = [
  breadcrumbSchema('Dry Season Menu Guide', 'https://mychef.id/blog/dry-season-menu-bali', 'Journal', 'https://mychef.id/journal'),
  faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Best Private Chef Menu for Bali\'s Dry Season (April–October)',
    description: 'What to eat during Bali\'s dry season: peak seasonal ingredients, private chef menu ideas, and planning advice for villa dining April–October.',
    url: 'https://mychef.id/blog/dry-season-menu-bali',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    author: { '@type': 'Organization', name: 'myCHEF Bali' },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF',
      logo: { '@type': 'ImageObject', url: 'https://mychef.id/logo.png' },
    },
    keywords: ['bali dry season menu', 'private chef bali dry season', 'bali seasonal ingredients', 'villa dinner bali dry season', 'bali peak season food'],
  },
]

export default function DrySeasonMenuPage() {
  return (
    <PremiumPage
      slug="blog/dry-season-menu-bali"
      title="Bali Dry Season Menu Guide | Private Chef April–October"
      description="Discover what to eat during Bali's dry season. Peak seasonal ingredients, private chef menu ideas, and planning tips for villa dining April–October."
      seoTitle="Bali Dry Season Menu Guide | Private Chef April–October"
      canonicalUrl="https://mychef.id/blog/dry-season-menu-bali"
      h1="Dry Season Menu Guide"
      subtitle="Bali's Best Seasonal Produce & Dining April–October"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Fresh tropical fruits and grilled seafood — Bali dry season private chef menu"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['bali dry season menu', 'private chef bali dry season', 'bali seasonal ingredients', 'villa dinner bali dry season', 'bali peak season food']}
      highlights={['Peak Season Ingredients', 'Plated & Buffet Menus', 'Planning Tips', 'Sunset Dinners']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={extraJsonLd}
    />
  )
}
