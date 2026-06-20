import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Leaf, Heart, Users, Sun } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Retreat Nutrition in Bali',
    title: 'Why Retreat Food Is Part of the Practice',
    body: `<p>At a yoga retreat, food is not a side note — it's integral to the experience. The right meals support energy for morning practice, aid muscle recovery, keep digestion calm during pranayama, and reinforce the mindfulness work your guests are doing on the mat.</p>
    <p>A private chef specializing in retreat nutrition plans menus around the retreat schedule, not restaurant convenience. Every meal is timed, balanced, and designed to complement the body's state during a day of movement and rest. In Bali — where local ingredients are extraordinary and plant-forward cooking is deeply culturally embedded — the food can become a highlight of the retreat itself.</p>`,
  },
  {
    id: 'nutrition-principles',
    type: 'features' as const,
    subtitle: 'Retreat Nutrition',
    title: 'Core Principles for Retreat Meal Planning',
    features: [
      { icon: Leaf, title: 'Plant-Forward', desc: 'Emphasis on vegetables, legumes, whole grains, and local fruits. Easy on digestion during practice. Naturally suited to Balinese ingredients.' },
      { icon: Sun, title: 'Energy-Timed', desc: 'Light meals before morning practice; substantial lunches for recovery; lighter, warming dinners for rest. Meals timed around the class schedule.' },
      { icon: Heart, title: 'Gut-Friendly', desc: 'Minimal processed foods, refined sugar, and heavy dairy. Fermented foods (tempeh, coconut yogurt), herbs, and spices that support digestion.' },
      { icon: Users, title: 'Dietary Inclusive', desc: 'Vegan, gluten-free, nut-free, and raw options integrated naturally — not as afterthoughts. Every guest eats from the same table.' },
    ],
  },
  {
    id: 'daily-structure',
    type: 'content' as const,
    subtitle: 'Daily Meal Plan',
    title: 'A Typical Retreat Day: Meal Structure',
    body: `<p><strong>Pre-Practice (6:00–7:00am):</strong> Light options available for early risers — fresh fruit, dates, small smoothie, or herbal tea. Not a full meal; just enough fuel to wake the body without disrupting practice.</p>
    <p><strong>Breakfast (9:00–10:00am, after morning practice):</strong> The most substantial morning meal. Recovery-focused: protein-rich (eggs or plant-based options), complex carbohydrates, tropical fruit, green smoothies. Examples: Balinese congee with herbs, açaí bowl with local toppings, tofu scramble with local greens.</p>
    <p><strong>Lunch (12:30–1:30pm):</strong> The primary fuel meal of the day. Warm, grounding, nourishing. Rice or grain base, legumes or protein, roasted or raw vegetables, dressing or sauce. Buffet-style lets guests self-regulate portions.</p>
    <p><strong>Afternoon Snack (3:00–4:00pm):</strong> Light energy bridge — fresh fruit, homemade energy balls, nut butter with banana, or cold-pressed juice. Supports the afternoon before evening practice.</p>
    <p><strong>Dinner (7:00–8:00pm, after evening practice):</strong> Lighter, warming, restorative. Soups, stews, steamed vegetables, simple grains. Easier to digest before sleep. Ends with herbal tea or golden milk.</p>`,
  },
  {
    id: 'bali-ingredients',
    type: 'content' as const,
    subtitle: 'Local Ingredients',
    title: 'Bali\'s Finest Retreat Ingredients',
    body: `<p><strong>Proteins & Fats:</strong> Tempeh (fermented soy — Balinese staple, excellent for gut health), fresh tofu, coconut cream and oil, eggs from free-range Balinese hens, locally caught fish for pescatarian options.</p>
    <p><strong>Grains & Starches:</strong> Balinese red rice (lower glycemic than white, nutty flavor), organic black rice, sweet potato, cassava, and local corn. Supports stable energy throughout practice days.</p>
    <p><strong>Vegetables:</strong> Water spinach (kangkung), snake beans, banana blossom, young jackfruit, morning glory, local cucumber and eggplant. All available fresh daily at Balinese markets at minimal cost.</p>
    <p><strong>Fruits:</strong> Mangosteen, passion fruit, dragon fruit, salak (snake fruit), rambutan, local bananas — far superior to imported equivalents. Breakfast bowls built around these create extraordinary experiences for international guests.</p>
    <p><strong>Herbs & Spices:</strong> Turmeric (anti-inflammatory), ginger, lemongrass, galangal, fresh turmeric leaves, pandan. Balinese cooking already incorporates these heavily — a retreat chef can build health benefits directly into traditional dishes without forcing "health food" aesthetics.</p>`,
  },
  {
    id: 'group-sizes',
    type: 'content' as const,
    subtitle: 'Logistics',
    title: 'Catering for Retreat Groups: Logistics & Staffing',
    body: `<p><strong>Small Retreats (8–15 guests):</strong> 1 chef + 1 assistant. Buffet or family-style service. Chef handles shopping, prep, cooking, and service coordination. Full daily meal plan. Chef typically arrives 2 hours before each main meal.</p>
    <p><strong>Medium Retreats (15–30 guests):</strong> 1 head chef + 1–2 kitchen assistants + 1 service coordinator. Full buffet service for all meals. Dedicated assistant for dietary variations (vegan, gluten-free, allergies). Shopping done in bulk 2–3 times per week.</p>
    <p><strong>Large Retreats (30–60 guests):</strong> 2 chefs (one savory, one pastry/snacks) + 3–4 assistants + 2 service staff. Multiple stations at lunch and dinner. Requires villa kitchen capable of supporting high volume or supplemental equipment rental.</p>
    <p><strong>Live-In vs. Day Chef:</strong> For multi-week retreats or early-morning schedules, a live-in chef arrangement works best. Discuss with villa management — this is standard practice for retreat venues in Bali.</p>`,
  },
  {
    id: 'budget',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Retreat Catering Costs in Bali',
    body: `<p><strong>Per-Person Daily Rates (3 meals + snacks):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Budget (local ingredients, simple plant-based): IDR 300K–500K/person/day</li>
      <li>Standard (organic where possible, variety, snacks): IDR 500K–800K/person/day</li>
      <li>Premium (certified organic, specialty items, smoothie bars): IDR 800K–1.5M/person/day</li>
    </ul>
    <p><strong>Chef Service Fee (separate from ingredients):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>1 chef for 8–15 guests: IDR 1.5M–2.5M/day</li>
      <li>Chef team for 15–30 guests: IDR 3M–5M/day</li>
      <li>Full team for 30–60 guests: IDR 5M–9M/day</li>
    </ul>
    <p><strong>Example: 20-Guest 7-Day Retreat:</strong> Ingredients (IDR 600K × 20 × 7) = IDR 84M. Chef service (IDR 3.5M × 7) = IDR 24.5M. Total: ~IDR 108M for the full week (~IDR 770K/person/day all-in). This is significantly below equivalent retreat catering costs in Western markets.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Retreat Menu',
    title: 'Design a Retreat Meal Plan for Your Bali Retreat',
    body: 'Share your retreat dates, guest count, dietary approach, and schedule. We match you with a chef experienced in retreat nutrition.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'Browse Chefs', href: '/chefs' },
  },
]

const FAQS = [
  {
    question: 'Can a private chef in Bali handle a fully vegan retreat menu?',
    answer: 'Yes — and Bali is arguably the best place in Asia for it. Tempeh, tofu, local vegetables, coconut products, and extraordinary tropical fruits make plant-based cooking natural and abundant. Most retreat chefs in Bali specialize in plant-forward menus by default.',
  },
  {
    question: 'How do you handle guests with multiple conflicting dietary needs?',
    answer: 'Collect all dietary requirements from guests at registration, at least 3 weeks before the retreat. Share the full list with the chef. A skilled retreat chef designs base meals that accommodate the majority, with clearly labelled variations (vegan, gluten-free, nut-free) served alongside. No guest eats something lesser — just a variation.',
  },
  {
    question: 'Do retreat chefs also handle kitchen cleanup and dishwashing?',
    answer: 'Chef responsibilities cover kitchen prep and cooking cleanup. Dishwashing for large groups is typically handled by a kitchen assistant (IDR 200K–300K/day). For retreats of 20+ guests, budget for 1–2 kitchen helpers beyond the chef team.',
  },
  {
    question: 'Can the chef create raw or living food menus for a raw food retreat?',
    answer: 'Yes, with the right chef. Request specifically a chef with raw food experience — it is a distinct culinary specialization involving dehydrating, sprouting, fermentation, and preparation without heat above 42°C. Not all chefs have this background; mention it explicitly when requesting recommendations.',
  },
  {
    question: 'What notice do you need to plan a retreat catering schedule?',
    answer: '4–6 weeks is ideal. This allows menu planning, ingredient sourcing confirmation (especially for organic produce), staff scheduling, and a pre-retreat consultation call with the retreat leader. For retreats over 30 people or longer than 10 days, 6–8 weeks is recommended.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Find retreat and wellness-focused chefs in Bali.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu styles including plant-based and dietary options.' },
  { label: 'Event Planning', href: '/blog/event-planning-bali', desc: 'Full logistics guide for multi-day Bali events.' },
  { label: 'Food Allergies & Dietary', href: '/blog/food-allergies-dietary-requirements-private-chef-bali', desc: 'Managing complex dietary needs with a private chef.' },
  { label: 'Contact Us', href: '/contact', desc: 'Discuss your retreat catering needs with our team.' },
]

export default function YogaRetreatChefPage() {
  return (
    <PremiumPage
      slug="blog/yoga-retreat-chef-bali-meal-planning"
      title="Yoga Retreat Chef in Bali: Meal Planning & Retreat Nutrition Guide"
      description="Plan nutrient-dense, plant-forward menus for your Bali yoga retreat. Private chef catering for wellness retreats with full IDR pricing."
      seoTitle="Yoga Retreat Chef Bali | Retreat Meal Planning & Nutrition"
      seoDescription="Plan nutrient-dense, plant-forward menus for your Bali yoga retreat. Private chef catering for wellness retreats with full IDR pricing."
      canonicalUrl="https://mychef.id/blog/yoga-retreat-chef-bali-meal-planning"
      h1="Yoga Retreat Chef in Bali"
      subtitle="Meal Planning & Retreat Nutrition Guide"
      heroImage="/generated/mychef-blog-yoga-retreat-chef.webp"
      heroImageAlt="Balinese chef preparing vibrant plant-based wellness meals for yoga retreat in Ubud"
      ogImage="https://mychef.id/generated/mychef-blog-yoga-retreat-chef.webp"
      keywords={['yoga retreat chef bali', 'retreat catering bali', 'wellness retreat food bali']}
      highlights={['Nutrition Planning', 'Daily Meal Structure', 'Local Ingredients', 'Retreat Pricing']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Yoga Retreat Chef Bali', 'https://mychef.id/blog/yoga-retreat-chef-bali-meal-planning', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS),
      ]}
      ctaText="Plan Your Retreat Menu"
      ctaSubtext="Share your retreat dates, group size, and dietary approach — we find the right chef."
    />
  )
}
