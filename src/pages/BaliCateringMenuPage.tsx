import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Utensils, Leaf, Flame, Users } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Bali Catering',
    title: 'Bali Catering Menus: Traditional & Modern Options for Your Villa',
    body: `<p>Balinese cuisine is a complex blend of spices, fresh herbs, and cooking techniques developed over centuries. Eating traditionally in Bali is an immersion into island identity—food carries cultural meaning, ritual, and flavor depth rarely found in fusion interpretations.</p>
    <p>Whether you prefer traditional Balinese, modern fusion, or international cuisine, this guide explores menu styles, dietary accommodations, and how to choose the right approach for your event.</p>`,
  },
  {
    id: 'balinese-tradition',
    type: 'content' as const,
    subtitle: 'Traditional Cuisine',
    title: 'Balinese Traditional: Iconic Dishes & Flavors',
    body: `<p><strong>Babi Guling (Roasted Suckling Pig):</strong> Whole young pig seasoned with turmeric, coriander, and garlic paste, then roasted over charcoal. Served with rice, vegetables, and sambal.</p>
    <p><strong>Sate Lilit (Minced Meat Satay):</strong> Ground meat mixed with coconut, spices, and shallots, molded onto lemongrass stalks. Grilled until charred.</p>
    <p><strong>Lawar (Minced Meat Salad):</strong> Finely chopped raw or cooked meat mixed with grated coconut, spices, blood, and greens. A ritual dish for ceremonies.</p>
    <p><strong>Sambal (Chili Paste):</strong> Fresh chilies blended with shallots, garlic, galangal, and lime. Served with nearly every meal. Customizable from mild to fiery.</p>
    <p><strong>Rijsttafel (Indonesian Rice Table):</strong> 12–20 small dishes served around a central rice bowl—curries, salads, grilled items, sambals. Guests mix and match, creating personalized plates.</p>`,
  },
  {
    id: 'fusion-menus',
    type: 'features' as const,
    subtitle: 'Modern Fusion',
    title: 'Modern Fusion Menus for Contemporary Tastes',
    features: [
      { icon: Flame, title: 'Mediterranean-Balinese', desc: 'Italian, Spanish, Moroccan techniques applied to Balinese ingredients. Charred octopus with sambal, turmeric risotto, wood-fired fish.' },
      { icon: Utensils, title: 'Contemporary Balinese', desc: 'French plating and ingredient focus applied to Balinese cooking. Deconstructed sate lilit, galangal-poached fish, slow-cooked pork with modern plating.' },
      { icon: Users, title: 'Asian Contemporary', desc: 'Stir-fries, noodle dishes, dumpling preparation with modern presentation. Budget-friendly, versatile for large groups.' },
      { icon: Leaf, title: 'Farm-to-Table', desc: 'Seasonal vegetables, grilled proteins, artisanal breads. Ingredient-focused, straightforward, familiar to guests.' },
    ],
  },
  {
    id: 'dietary-accommodations',
    type: 'content' as const,
    subtitle: 'Dietary Options',
    title: 'Accommodations: Vegetarian, Vegan, Gluten-Free',
    body: `<p><strong>Vegetarian:</strong> Traditional gado-gado, sambal goreng, pasta, risotto, grilled vegetables. Protein from legumes, tofu, tempeh, eggs, dairy. Same pricing as omnivore menus.</p>
    <p><strong>Vegan:</strong> Plant-based Balinese with sambal vegetables, turmeric curries without coconut milk, grilled vegetables. Legumes, tofu, tempeh, nuts, seeds. Coconut milk and cashew cream widely available. Cost: +IDR 150K–300K/person.</p>
    <p><strong>Gluten-Free:</strong> Balinese naturally gluten-free (rice-based). Watch soy sauce—use tamari or coconut aminos. Rice noodles, polenta, potatoes instead of wheat. Cost: +IDR 75K–225K/person.</p>
    <p><strong>Keto/Low-Carb:</strong> Grilled fish, vegetables, sambal, skip rice. Easily adaptable. Cost: Same or lower.</p>
    <p><strong>Allergen-Free (Nut, Shellfish, Dairy):</strong> Plan ahead. Requires chef coordination and careful sourcing. Cost: +IDR 300K–600K/person.</p>`,
  },
  {
    id: 'menu-styles',
    type: 'features' as const,
    subtitle: 'Presentation',
    title: 'Menu Styles: Plated, Buffet, Grazing, BBQ',
    features: [
      { icon: Utensils, title: 'Plated (Formal)', desc: 'Each course individually plated and served. Elegant, photographs beautifully. Cost: +20–30% over buffet. Best for 4–8 guests.' },
      { icon: Users, title: 'Buffet (Casual)', desc: 'All dishes laid out; guests serve themselves. Flexible timing, relaxed vibe. Standard rate. Best for 8+ guests.' },
      { icon: Leaf, title: 'Grazing', desc: 'Small plates, cheeses, fruits, breads on boards. Bohemian, interactive. Cost: 30–40% less. Best for 4–6 people.' },
      { icon: Flame, title: 'BBQ/Wood-Fire', desc: 'Proteins grilled tableside. Theater and participation. Cost: 15–25% premium. Best for 6–12 guests.' },
    ],
  },
  {
    id: 'how-to-choose',
    type: 'content' as const,
    subtitle: 'Selection Guide',
    title: 'How to Choose the Right Menu for Your Event',
    body: `<p><strong>Group Size & Composition:</strong> 2 people → fine dining, intimate menus. 4–6 → balanced between interactive and elegant. 8+ → buffet or grazing (easier scaling).</p>
    <p><strong>Cuisine Preferences:</strong> Adventurous → Balinese traditional or fusion. Conservative → international, familiar flavors.</p>
    <p><strong>Dietary Restrictions:</strong> Affects menu design and chef selection.</p>
    <p><strong>Occasion:</strong> Anniversary → fine dining, plated. Family gathering → buffet, mix of styles. Corporate → buffet, neutral flavors.</p>
    <p><strong>Venue:</strong> Outdoor + weather risk → lighter, flexible BBQ or grazing. Indoor → any style works.</p>
    <p><strong>Budget Per Person:</strong> IDR 750K–1.2M → casual, local ingredients, buffet. IDR 1.2M–1.8M → mix of local and imported, some creativity. IDR 1.8M+ → fine dining, specialty chefs, plated.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Plan',
    title: 'Design a Custom Catering Menu for Your Villa Event',
    body: 'Browse menu options, connect with our chefs, and create a personalized culinary experience for your guests.',
    primaryAction: { label: 'Browse Menus', href: '/menus' },
    secondaryAction: { label: 'Chat With Chefs', href: '/contact' },
  },
]

const FAQS = [
  {
    question: 'Is Balinese cuisine very spicy?',
    answer: 'Balinese cuisine uses chilies, but heat level is customizable. We can adjust sambal intensity from mild to fiery based on guest preferences.',
  },
  {
    question: 'Can I mix Balinese and international cuisine?',
    answer: 'Absolutely. Many guests prefer a hybrid approach—opening with Balinese traditional, then offering familiar international options.',
  },
  {
    question: 'How much advance notice for dietary accommodations?',
    answer: 'Provide dietary restrictions at booking time. Last-minute changes are harder to accommodate, so earlier notice helps the chef source appropriately.',
  },
  {
    question: "What's the difference between a catering menu and a fine dining menu?",
    answer: 'Catering menus focus on volume, variety, and group accommodation. Fine dining menus emphasize artistry, precision, and smaller portions across more courses.',
  },
  {
    question: 'Can I do a tasting menu with a buffet format?',
    answer: 'Not traditionally. Tasting menus are plated and paced. Buffets work best for casual dining. You could do a hybrid with pre-plated appetizer + buffet main courses.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet our specialized chefs for different cuisine styles.' },
  { label: 'Fine Dining Guide', href: '/blog/fine-dining-guide', desc: 'Learn about premium tasting menus.' },
  { label: 'Event Planning', href: '/blog/event-planning-bali', desc: 'Plan your next Bali event with full logistics.' },
  { label: 'Menus', href: '/menus', desc: 'Browse all available menu options.' },
  { label: 'Contact', href: '/contact', desc: 'Discuss custom menus with our team.' },
]

export default function BaliCateringMenuPage() {
  return (
    <PremiumPage
      slug="blog/bali-catering-menu"
      title="Bali Catering Menus: Traditional & Modern Options for Your Villa"
      description="Explore Bali catering menus for weddings, events, and group stays. Traditional Balinese, fusion, and international cuisine options."
      seoTitle="Bali Catering Menus | Traditional & Modern Cuisine for Villas"
      seoDescription="Explore Bali catering menus for weddings, events, and group stays. Traditional Balinese, fusion, and international cuisine options."
      canonicalUrl="https://mychef.id/blog/bali-catering-menu"
      h1="Bali Catering Menus"
      subtitle="Traditional & Modern Options for Your Villa"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Balinese traditional dishes and modern fusion cuisine"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['bali catering menu', 'balinese cuisine', 'wedding menu bali']}
      highlights={['Traditional Balinese', 'Fusion Menus', 'Dietary Options', 'Menu Styles']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Catering Menus Bali', 'https://mychef.id/blog/bali-catering-menu', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bali Catering Menus: Traditional and Modern Options for Your Villa',
          description: 'Explore Bali catering menus for weddings, events, and group stays. Traditional Balinese, fusion, and international cuisine options.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-05-01',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bali-catering-menu' },
          url: 'https://mychef.id/blog/bali-catering-menu',
        },
      ]}
      ctaText="Browse Menu Options"
      ctaSubtext="Explore catering menus and connect with our chefs."
    />
  )
}
