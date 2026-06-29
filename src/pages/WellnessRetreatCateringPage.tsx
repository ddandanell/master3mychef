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
        desc: '100% vegan, whole food, seasonal. Every meal built around Bali\'s extraordinary plant diversity — from jackfruit curries and tempeh satay to raw cacao smoothie bowls and coconut-braised black rice. IDR 380K/person/day (3 meals + 2 snacks).',
      },
      {
        icon: Droplets,
        title: 'Detox & Cleanse Program',
        desc: 'Raw, cold-pressed juiced, and lightly cooked meals designed to minimise digestive load while maximising micronutrient density. Morning green juice, raw nori wraps, lightly steamed vegetables with miso broth. IDR 420K/person/day.',
      },
      {
        icon: Heart,
        title: 'Balanced Wellness',
        desc: 'Plant-forward with optional fish and eggs for guests who want broader protein sources. The most popular programme for mixed groups — satisfies vegan purists and flexitarians simultaneously with smart menu design. IDR 350K/person/day.',
      },
      {
        icon: Dumbbell,
        title: 'Active Retreat Fuel',
        desc: 'High-protein, performance-focused menus designed for surf, yoga, CrossFit, or active training retreats. Higher protein density at every meal, complex carbohydrates timed around sessions, mineral-rich post-workout recovery options. IDR 400K/person/day.',
      },
    ],
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Locations',
    title: 'Where myCHEF Serves Retreat Catering Across Bali',
    body: `<p>myCHEF operates retreat catering across all of Bali's major retreat destinations, each with its own food culture and logistical character.</p>

    <p><strong>Ubud</strong> is Bali's retreat heartland and our most active location for programme catering. The surrounding rice terraces and jungle valleys host dozens of dedicated wellness villas and retreat centres. Crucially, Ubud sits close to Bali's strongest organic farming community — direct access to fresh, seasonal, chemical-free produce that forms the backbone of every wellness menu. The <a href="/private-chef/ubud" class="text-[#C5A028] hover:underline font-medium">Ubud private chef</a> team knows local suppliers by name.</p>

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
      href: 'https://wa.me/4915234561712?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20wellness%20retreat%20in%20Bali%20and%20need%20a%20catering%20team.',
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Can you cater a 7-day retreat with no repeated meals?',
    answer: 'Yes, this is standard for our retreat programs. We design variety across the full program — no main dish repeats across a 7-day stay for breakfast, lunch, or dinner. We build a full meal matrix before the retreat begins.',
  },
  {
    question: 'Do you cook on-site at the retreat villa?',
    answer: 'Yes, our chefs cook on-site in the retreat kitchen daily. We do not deliver pre-cooked meals. On-site cooking ensures freshness, allows real-time adjustments, and gives guests the option to interact with the chef.',
  },
  {
    question: 'What is the minimum group size for retreat catering?',
    answer: '6 guests minimum for a dedicated retreat catering program. Smaller groups can be accommodated but may incur a minimum daily fee rather than a per-person rate.',
  },
  {
    question: 'Can you accommodate multiple dietary restrictions simultaneously?',
    answer: 'Yes — we handle vegan, gluten-free, nut-free, and sugar-free simultaneously as standard. Accommodation is built into the menu design from the start, not managed as an afterthought. Our upfront dietary mapping process captures every restriction before the programme begins.',
  },
  {
    question: 'Do you provide snacks and drinks as well as meals?',
    answer: 'Yes, retreat packages include morning snack, afternoon snack, herbal tea station, and filtered water service as standard. Cold-pressed juices and wellness shots are available as add-ons for Detox & Cleanse programs.',
  },
  {
    question: 'Can we visit the kitchen and see the cooking?',
    answer: 'Yes, many retreats incorporate a cooking demonstration or farmers market visit as part of the program experience. This is available as a paid add-on and can be a highlight of the retreat — guests learn about Balinese ingredients and preparation techniques directly from our chef.',
  },
]

const RELATED_PAGES = [
  { label: 'Yoga Retreat Chef', href: '/blog/yoga-retreat-chef-bali-meal-planning', desc: 'Dedicated meal planning guide for yoga retreat organisers in Bali.' },
  { label: 'Private Chef Ubud', href: '/private-chef/ubud', desc: 'Ubud private chef service — the heart of Bali\'s wellness scene.' },
  { label: 'Food Allergies Guide', href: '/blog/food-allergies-dietary-requirements-private-chef-bali', desc: 'How myCHEF handles dietary requirements and food allergies.' },
  { label: 'Cooking Class Bali', href: '/blog/bali-villa-cooking-class-private-chef', desc: 'Add a Balinese cooking class experience to your retreat programme.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all catering formats and programme types.' },
  { label: 'Floating Breakfast', href: '/blog/floating-breakfast-bali', desc: 'The iconic Bali floating breakfast — add it to your retreat stay.' },
]

export default function WellnessRetreatCateringPage() {
  return (
    <PremiumPage
      slug="blog/bali-wellness-retreat-catering"
      title="Wellness Retreat Catering Bali | Plant-Based & Nourishing Meals for Retreat Guests"
      description="Private chef catering for wellness and yoga retreats in Bali. Plant-based menus, detox programs, macro-balanced meals. From IDR 350K/person/day. Ubud, Canggu, Uluwatu."
      seoTitle="Wellness Retreat Catering Bali | Private Chef for Yoga Retreats | myCHEF"
      seoDescription="Private chef catering for wellness and yoga retreats in Bali. Plant-based menus, detox programs, macro-balanced meals. From IDR 350K/person/day. Ubud, Canggu, Uluwatu."
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
          description: 'Private chef catering for wellness and yoga retreats in Bali. Plant-based menus, detox programs, macro-balanced meals from IDR 350K/person/day.',
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
          wordCount: 1400,
          keywords: 'wellness retreat catering bali, yoga retreat chef bali, plant based catering bali retreat, detox retreat chef bali',
        },
      ]}
      ctaText="Plan Your Retreat Menu"
      ctaSubtext="Share your retreat dates, guest count, and dietary philosophy — we'll design a full program menu within 48 hours."
    />
  )
}
