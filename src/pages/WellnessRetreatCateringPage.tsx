import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Leaf, Droplets, Heart, Dumbbell } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Why Retreat Food Is Different',
    title: 'Retreat Catering Is Not Event Catering — And the Difference Matters',
    body: `<p>At a villa birthday dinner or a corporate cocktail reception, the food is one element of a single evening. Guests eat, enjoy the moment, and go home. Retreat catering is a fundamentally different challenge: your guests are eating three meals a day, every day, for five to ten days. That changes everything about how the food must be designed, sourced, and delivered.</p>

    <p>The first challenge is nutritional sustainability. A retreat guest needs meals that provide genuine nourishment — not just pleasure — across an extended stay. If breakfasts are too heavy, guests feel sluggish heading into morning yoga. If lunches lack protein, energy crashes before the afternoon session. If dinners are nutritionally thin, sleep quality suffers. Every meal is part of a larger physiological system, and the chef must think in program terms, not course terms.</p>

    <p>The second challenge is variety. Repeating the same avocado toast for seven mornings is not acceptable. Guests notice quickly, morale dips, and the experience of the retreat itself is coloured by the food monotony. A properly designed 7-day retreat program has no repeated main dish across the entire stay — breakfast, lunch, dinner, and snacks must all rotate through a matrix of flavours, textures, protein sources, and cooking methods.</p>

    <p>The third challenge is allergy and dietary mapping. In a weekend event setting, you can accommodate one or two dietary exceptions with advance notice and careful plating. In a retreat setting with ten guests over ten days, you may have four distinct dietary tracks running simultaneously — vegan, gluten-free, nut-free, low-sugar — and every meal must satisfy every track, every time. This requires systematic upfront mapping, not reactive adjustments.</p>

    <p>myCHEF approaches retreat catering as a programme, not a service. Before we cook anything, we build the full menu matrix: every meal, every day, mapped to every dietary profile in the group. We work with local organic farms to plan ingredient sourcing seasonally. We brief our chef on the retreat schedule so meal timing supports, rather than disrupts, the programme flow. The result is food that functions as part of the retreat experience rather than an afterthought.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: 'Retreat Catering Built on Programme Thinking, Not One-Off Events',
    body: `<p>myCHEF has served more than 560 villas across Bali, and wellness retreats are where our programme-grade approach shines. We do not treat a retreat as a series of individual meals — we design a complete nutritional matrix that supports your guests from day one to day ten. Our chefs are trained in macro-balanced cooking, anti-inflammatory ingredient use, and the systematic accommodation of multiple dietary tracks running simultaneously.</p>

    <p>We serve retreats across Ubud, Canggu, Uluwatu, Amed, and Munduk — the full spectrum of Bali's wellness destinations. Wherever your retreat is hosted, we establish local organic supplier relationships, build seasonal menus, and brief the chef on your programme schedule so meal timing supports rather than disrupts your flow.</p>`,
  },
  {
    id: 'philosophy',
    type: 'content' as const,
    subtitle: 'Menu Philosophy',
    title: 'How myCHEF Designs Wellness Retreat Food',
    body: `<p>myCHEF's approach to wellness retreat menus is built around five principles that distinguish programme-grade nutrition from standard catering. These principles are non-negotiable for us — they are baked into every retreat menu we design, regardless of the programme style.</p>

    <p><strong>Whole foods first.</strong> We use minimal processing and maximise seasonal Balinese produce. Local tempeh and tofu replace processed protein alternatives. Fresh turmeric, galangal, lemongrass, and kaffir lime leaf add depth and anti-inflammatory benefit simultaneously. Coconut in all its forms — fresh, milk, water, oil — appears throughout the programme as a healthy fat and cultural anchor.</p>

    <p><strong>Macro awareness on every plate.</strong> Each meal is designed with protein, carbohydrate, and fat balance in mind. This is not calorie counting — it is intentional composition. A breakfast bowl of seasonal fruit with coconut cream is beautiful but incomplete without tempeh scramble or black bean protein alongside it. Our chefs are trained to think in macros, not just flavours.</p>

    <p><strong>Anti-inflammatory focus.</strong> Turmeric, ginger, coconut, leafy greens, and omega-3-rich seeds feature prominently across all programme types. We avoid refined sugar, minimise processed oils, and design around ingredients that support rather than burden the body's recovery and repair systems.</p>

    <p><strong>Variety across the full programme.</strong> No main dish repeats across a 7-day stay. We build a full ingredient rotation matrix before the retreat begins, ensuring flavour diversity, cultural variety (Balinese, pan-Asian, Mediterranean-inspired), and cooking method range (raw, steamed, roasted, sautéed) across every meal of the programme.</p>

    <p><strong>Accommodation is the default.</strong> Vegan, gluten-free, sugar-free, and nut-free are treated as standard programme options, not exceptions to be managed. When a guest has a dietary requirement, the response is never "we'll do something different for you" — it is simply which version of the standard menu they will receive.</p>`,
  },
  {
    id: 'programs',
    type: 'features' as const,
    subtitle: 'Programs',
    title: 'Retreat Catering Programs',
    features: [
      {
        icon: Leaf,
        title: 'Plant-Based Program',
        desc: '100% vegan, whole food, seasonal. Every meal built around Bali\'s extraordinary plant diversity — from jackfruit curries and tempeh satay to raw cacao smoothie bowls and coconut-braised black rice.'
      },
      {
        icon: Droplets,
        title: 'Detox & Cleanse Program',
        desc: 'Raw, cold-pressed juiced, and lightly cooked meals designed to minimise digestive load while maximising micronutrient density. Morning green juice, raw nori wraps, lightly steamed vegetables with miso broth.'
      },
      {
        icon: Heart,
        title: 'Balanced Wellness',
        desc: 'Plant-forward with optional fish and eggs for guests who want broader protein sources. The most popular programme for mixed groups — satisfies vegan purists and flexitarians simultaneously with smart menu design.'
      },
      {
        icon: Dumbbell,
        title: 'Active Retreat Fuel',
        desc: 'High-protein, performance-focused menus designed for surf, yoga, CrossFit, or active training retreats. Higher protein density at every meal, complex carbohydrates timed around sessions, mineral-rich post-workout recovery options.'
      },
    ],
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Locations',
    title: 'Where myCHEF Serves Retreat Catering Across Bali',
    body: `<p>myCHEF operates retreat catering across all of Bali's major retreat destinations, each with its own food culture and logistical character.</p>

    <p><strong>Ubud</strong> is Bali's retreat heartland and our most active location for programme catering. The surrounding rice terraces and jungle valleys host dozens of dedicated wellness villas and retreat centres. Crucially, Ubud sits close to Bali's strongest organic farming community — direct access to fresh, seasonal, chemical-free produce that forms the backbone of every wellness menu. The <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef</a> team knows local suppliers by name.</p>

    <p><strong>Canggu</strong> has evolved into Bali's surf-and-yoga hub, attracting active retreats with a younger, health-conscious crowd. Our Canggu catering leans toward active programme menus — higher protein, smoothie bars, açaí-style bowls — in line with the neighbourhood's food culture and retreat demographic.</p>

    <p><strong>Uluwatu</strong> hosts some of Bali's most spectacular clifftop retreat villas. Food sourcing requires more forward planning due to the peninsula's distance from Ubud's organic belt, but the dramatic setting rewards the effort. Our Uluwatu retreat menus emphasise coastal ingredients — fresh fish (for non-vegan programmes), seaweed-infused dishes, and tropical fruit in abundance.</p>

    <p><strong>Amed</strong> on Bali's quieter east coast attracts dive and mindfulness retreats seeking genuine seclusion. Smaller groups, longer programmes, and a locally sourced Balinese ingredient palette define our Amed retreat menus. Access to fresh catch from local fishing boats adds a distinctive coastal quality.</p>

    <p><strong>Munduk</strong> in Bali's mountain highlands is rising as a destination for forest bathing and slow wellness retreats. The cooler climate supports different produce — coffee, cloves, vanilla — and menus at this altitude lean toward warming, mineral-rich soups, herbal broths, and roasted root vegetables alongside the standard wellness core.</p>`,
  },
  {
    id: 'sourcing',
    type: 'content' as const,
    subtitle: 'Ingredient Sourcing',
    title: 'Local Organic Sourcing: How myCHEF Sources Retreat Ingredients',
    body: `<p>Bali has one of Southeast Asia's most developed organic farming communities, and we use it systematically. Key suppliers include Bali Buda, Pyramid Organics, and a network of independent Ubud-area farmers whose produce reaches the Ubud Organic Farmers Market each Saturday. For retreats, we establish weekly supplier relationships before the programme begins — not day-before purchasing from general markets.</p>

    <p>Sourcing for a retreat requires seasonal availability planning. Balinese produce availability shifts across the wet and dry seasons, and a menu designed in April for a July retreat needs ingredient substitution built in from the start. We maintain a seasonal availability calendar and flag potential gaps in the menu planning phase, not the week of arrival.</p>

    <p>We practice full ingredient transparency with retreat organisers. Before each programme, we provide the sourcing brief: which farms supplied which ingredients, whether any item is conventional versus organic, and where substitutions were made and why. For retreats with guests who have strong preferences about ingredient provenance — raw food programmes, certified organic requirements — this documentation matters and we provide it.</p>

    <p>When a local organic option is unavailable for a specific ingredient, we substitute rather than compromise. The guest experience and nutritional integrity of the programme take precedence over menu rigidity. We communicate changes in advance, not on the plate.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Booking Your Retreat Catering Programme in Three Steps',
    body: `<p><strong>Step 1 — Share your programme:</strong> Message us on WhatsApp with your retreat dates, guest count, dietary philosophy, and location. We send a full programme menu proposal within 48 hours, including a day-by-day meal matrix.</p>

    <p><strong>Step 2 — Map every dietary track:</strong> We use our dietary intake form to capture every guest's requirements — vegan, gluten-free, nut-free, sugar-free, and any allergies. The menu is built around these tracks from the start, not adjusted as an afterthought.</p>

    <p><strong>Step 3 — Cook on-site, every day:</strong> The chef arrives at the retreat villa daily, sources fresh ingredients from local organic farms, and prepares every meal in your kitchen. Snacks, herbal tea stations, and filtered water are included as standard. You run the retreat; we run the nutrition.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Questions',
    title: 'Common Questions About Retreat Catering',
    body: '',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Retreat Menu',
    title: 'Plan Your Retreat Menu',
    body: 'Share your retreat dates, guest count, and dietary philosophy — we\'ll design a full program menu within 48 hours.',
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20wellness%20retreat%20in%20Bali%20and%20need%20a%20catering%20team.',
    },
    secondaryAction: { label: 'Get a Quote', href: '/quote' },
  },
]

const FAQS = [
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
  { question: 'Can we add bartenders?', answer: 'Yes — <a href="/in-villa-service/bartenders">bartenders</a>.' },
  { question: 'Kids and allergies?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { question: 'How do I book catering?', answer: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { question: 'Rain plan?', answer: 'Covered setups and indoor pivots planned ahead.' },
  { question: 'Corporate catering price range?', answer: 'Dinners often IDR 700K–1.2M++ per person; multi-day programmes quoted. <a href="/events/corporate">Corporate events</a>.' },
  { question: 'NPWP invoices?', answer: 'Yes on request.' },
  { question: 'Multi-day retreats?', answer: 'Yes — <a href="/catering/retreat-catering">retreat catering</a>.' },
  { question: 'Guest counts?', answer: 'From leadership dinners to 100–200+ programmes.' },
  { question: 'Dietary for mixed teams?', answer: 'Yes when headcount by diet is shared.' },
  { question: 'Villa and venue work?', answer: 'Yes — share access rules.' },
  { question: 'Bartenders and waiters?', answer: 'Yes — <a href="/in-villa-service">in-villa service</a>.' },
  { question: 'Case studies?', answer: 'Yes — <a href="/corporate-case-studies">case studies</a>.' },
]

const RELATED_PAGES = [
  { label: 'Yoga Retreat Chef', href: '/journal/yoga-retreat-meal-planning-bali', desc: 'Dedicated meal planning guide for yoga retreat organisers in Bali.' },
  { label: 'Private Chef Ubud', href: '/private-chef/ubud', desc: 'Ubud private chef service — the heart of Bali\'s wellness scene.' },
  { label: 'Food Allergies Guide', href: '/blog/food-allergies-dietary-requirements-private-chef-bali', desc: 'How myCHEF handles dietary requirements and food allergies.' },
  { label: 'Cooking Class Bali', href: '/fine-dining', desc: 'Add a Balinese cooking class experience to your retreat programme.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all catering formats and programme types.' },
  { label: 'Floating Breakfast', href: '/catering/floating-breakfast', desc: 'The iconic Bali floating breakfast — add it to your retreat stay.' },
]

export default function WellnessRetreatCateringPage() {
  return (
    <PremiumPage
      slug="blog/bali-wellness-retreat-catering"
      title="Wellness Retreat Catering Bali | Plant-Based & Nourishing Meals for Retreat Guests"
      description="Private chef catering for wellness and yoga retreats in Bali. Plant-based menus, detox programs, macro-balanced meals. Contact us for a tailored proposal."
      seoTitle="Wellness Retreat Catering Bali | Yoga Retreat Chef | myCHEF"
      seoDescription="Private chef catering for wellness and yoga retreats in Bali. Plant-based menus, detox programs, macro-balanced meals. Contact us for a tailored proposal."
      canonicalUrl="https://mychef.id/blog/bali-wellness-retreat-catering"
      h1="Wellness Retreat Catering Bali"
      subtitle="Plant-Based, Nourishing & Macro-Conscious Meals for Bali Retreat Guests"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Nourishing plant-based retreat meal spread at a Bali wellness villa by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['wellness retreat catering bali', 'yoga retreat chef bali', 'plant based catering bali retreat', 'detox retreat chef bali', 'bali retreat food catering']}
      highlights={['Menu Philosophy', 'Programs', 'Locations', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Wellness Retreat Catering Bali', 'https://mychef.id/blog/bali-wellness-retreat-catering', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Wellness Retreat Catering Bali: Plant-Based, Nourishing & Macro-Conscious Meals',
          description: 'Private chef catering for wellness and yoga retreats in Bali. Plant-based menus, detox programs, macro-balanced meals. Contact us for a tailored proposal.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bali-wellness-retreat-catering' },
          url: 'https://mychef.id/blog/bali-wellness-retreat-catering',
          wordCount: 1700,
          keywords: 'wellness retreat catering bali, yoga retreat chef bali, plant based catering bali retreat, detox retreat chef bali',
        },
      ]}
      ctaText="Plan Your Retreat Menu"
      ctaSubtext="Share your retreat dates, guest count, and dietary philosophy — we'll design a full program menu within 48 hours."
    />
  )
}
