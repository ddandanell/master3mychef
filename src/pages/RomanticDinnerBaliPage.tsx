import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Heart, Sparkles, Clock, Wine } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Romantic Dining in Bali',
    title: 'A Private Chef Changes Everything About Romantic Dining',
    body: `<p>A romantic dinner at home differs fundamentally from a restaurant experience. With a private chef, you control every detail — ambiance, pacing, personalization, and privacy. In Bali, where villas offer oceanfront terraces, infinity pools, and tropical gardens, a private chef turns dinner into an unforgettable memory.</p>
    <p>No crowds. No noise. No rush between courses. Just the two of you, a world-class chef in your villa kitchen, and an evening designed entirely around your relationship.</p>`,
  },
  {
    id: 'advantages',
    type: 'features' as const,
    subtitle: 'Why Private Chef',
    title: 'What Makes This Better Than a Restaurant',
    features: [
      { icon: Heart, title: 'Complete Privacy', desc: 'Dine in your villa with zero distractions. No neighboring tables, no background noise, no rushing for reservations.' },
      { icon: Sparkles, title: 'Full Customization', desc: 'Menu tailored to both partners\' preferences, dietary needs, and love story. Every dish designed with you in mind.' },
      { icon: Clock, title: 'Your Pace', desc: 'Each course timed for conversation and connection — not table turnover. Linger over dessert as long as you like.' },
      { icon: Wine, title: 'Wine & Beverage', desc: 'Bring your own bottles or ask the chef to source. Curate the perfect pairing for each course without cellar restrictions.' },
    ],
  },
  {
    id: 'menu-formats',
    type: 'content' as const,
    subtitle: 'Menu Options',
    title: 'Classic Fine Dining vs. Relaxed Bali Format',
    body: `<p><strong>Classic Fine-Dining Tasting (3.5–4 hours, 5–7 courses):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li><strong>Aperitif & Canapés (20 min):</strong> Welcome toast, light appetizers, champagne or cocktail</li>
      <li><strong>First Course (20 min):</strong> Seafood or vegetable starter — light, elegant, sets the tone</li>
      <li><strong>Palate Cleanser (10 min, optional):</strong> Citrus sorbet or light intermediate course</li>
      <li><strong>Main Course (40 min):</strong> Prime protein (filet, lobster, scallops), seasonal sides, refined presentation</li>
      <li><strong>Cheese Course (20 min, optional):</strong> Artisanal selection with accompaniments</li>
      <li><strong>Dessert (20 min):</strong> Personalized creation — chocolate, tropical fruit, or a surprise element</li>
      <li><strong>Coffee & Digestif (20 min):</strong> Handcrafted coffee, petit fours, after-dinner drink</li>
    </ul>
    <p><strong>Relaxed Bali Format (2.5–3 hours, 3 courses):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li><strong>Sunset Canapés (20 min):</strong> Light passed appetizers by the pool at golden hour</li>
      <li><strong>Main Course (45 min):</strong> A generous, memorable dish — fresh Bali fish, traditional curry, or modern fusion</li>
      <li><strong>Dessert & Wine (30+ min):</strong> Shareable dessert (chocolate fondue, tropical fruit creation) with dessert wine — no rush</li>
    </ul>`,
  },
  {
    id: 'personalization',
    type: 'content' as const,
    subtitle: 'Personal Touches',
    title: 'How to Personalize Your Romantic Dinner',
    body: `<p><strong>What to Tell Your Chef:</strong> Share your story — how you met, what makes the occasion special, favorite ingredients or dishes, any meaningful memories tied to food. The more context, the more intentional every detail becomes.</p>
    <p><strong>Surprise Elements the Chef Can Coordinate:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>"Will you marry me?" written in chocolate on the dessert plate</li>
      <li>A dish that references a city or restaurant from your relationship history</li>
      <li>Your favorite ingredient sourced specially for the evening</li>
      <li>Wine from a region meaningful to you both</li>
      <li>A milestone year referenced in the menu design (anniversary number, birth year)</li>
    </ul>
    <p><strong>Ambiance Coordination:</strong> The chef manages food; you manage décor. Coordinate: candle placement (chef needs working light), table setup (chef needs serving space), music timing (sync playlist with course pacing), and whether you want the chef visible (tableside plating) or discreet (serves and withdraws).</p>`,
  },
  {
    id: 'bali-settings',
    type: 'content' as const,
    subtitle: 'Bali Venue Advantages',
    title: 'Best Villa Settings for a Romantic Dinner',
    body: `<p><strong>Oceanfront Villas (Seminyak, Jimbaran, Uluwatu):</strong> Aperitifs at sunset, dinner under stars with ocean horizon. Reserve the terrace table facing west for golden-hour cocktails, then move to a candlelit dinner position as the sky darkens. Chef sets up in the villa kitchen; service happens poolside.</p>
    <p><strong>Garden Villas (Ubud, Canggu):</strong> Tropical flowers, lantern lighting, and natural seclusion create intimate romance. Ubud gardens offer the added magic of rice terrace or jungle backdrop. Farm-to-table Balinese menus work beautifully here.</p>
    <p><strong>Pool Terrace Villas (Anywhere):</strong> Candlelit reflection on the water creates naturally romantic ambiance. A floating floral arrangement in the pool requires zero extra investment and looks extraordinary in photos.</p>
    <p><strong>Seasonal Note:</strong> Dry season (April–October) allows fully outdoor setup. Rainy season (November–March) plan for a covered terrace or indoor-with-garden-views arrangement — the chef adapts either way.</p>`,
  },
  {
    id: 'cost',
    type: 'content' as const,
    subtitle: 'Pricing',
    title: 'Romantic Dinner for 2: Cost in Bali',
    body: `<p><strong>Base Pricing (per dinner for 2):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Chef Service (3–4 hours): IDR 2M–3.2M</li>
      <li>Premium Ingredients (2 people): IDR 1M–2.4M</li>
      <li>Wine or Beverage Allowance: IDR 500K–1.3M</li>
    </ul>
    <p><strong>Total: IDR 3.5M–7M</strong> depending on menu complexity and ingredient sourcing.</p>
    <p><strong>Optional Add-Ons:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Wine Pairing (sommelier-curated per course): +IDR 500K–960K</li>
      <li>Multi-Course Tasting Upgrade (7+ courses, premium ingredients): +IDR 800K–1.6M</li>
      <li>Specialty Ingredients (truffle, premium Bali lobster, imported wagyu): +IDR 500K–2M depending on selection</li>
      <li>Proposal / surprise element coordination: No extra charge — discuss with chef at booking</li>
    </ul>
    <p><strong>Booking Timeline:</strong> 2 weeks ahead is ideal for ingredient sourcing and menu planning. 1 week is possible for most menus. Same-day requests for specialty ingredients may not be achievable.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Evening',
    title: 'Design Your Romantic Dinner in Bali',
    body: 'Tell us your date, villa location, and the story behind the occasion. We match you with the right chef to make it unforgettable.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'Browse Chefs', href: '/chefs' },
  },
]

const FAQS = [
  {
    question: 'How far in advance should I book for a romantic dinner?',
    answer: '2 weeks is ideal — it gives the chef time to source premium ingredients and design a personalized menu. 1 week is possible for most menus. If you want specialty items (imported wagyu, Bali lobster, specific wine) plan 3+ weeks ahead.',
  },
  {
    question: 'Can I keep the menu a surprise for my partner?',
    answer: 'Absolutely. Book alone, share any dietary restrictions or allergies for your partner, and let the chef design a surprise menu around the occasion. The chef will reveal each course at the table.',
  },
  {
    question: 'Does the chef stay during the entire dinner?',
    answer: 'Yes — the chef prepares in your villa kitchen and is available throughout service to plate and time each course. You can request they stay discreet between courses or engage tableside. Discuss your preference at booking.',
  },
  {
    question: 'What if my partner has dietary restrictions I forgot to mention?',
    answer: 'Mention all known restrictions at booking. If something comes up day-of, communicate with the chef immediately — a skilled private chef can adapt within the available ingredients in most cases.',
  },
  {
    question: 'Can the chef arrange a marriage proposal surprise?',
    answer: 'Yes, and many of our chefs have orchestrated proposals. Share the plan confidentially — the chef will time the dessert reveal, coordinate with villa staff, and keep the surprise secure. This is one of the most common requests we receive.',
  },
  {
    question: 'Is wine included or do I need to buy it separately?',
    answer: 'Typically separate. You can bring your own bottles (no corkage fee with a private chef), or the chef can source wine and add it to the ingredient budget. For curated pairings per course, request this at booking and the chef builds a pairing list for your approval.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet private chefs who specialize in intimate dining.' },
  { label: 'Fine Dining Guide', href: '/blog/fine-dining-guide', desc: 'Tasting menus, courses, and pricing explained.' },
  { label: 'Private Chef Cost', href: '/blog/private-chef-cost-bali', desc: 'Full pricing breakdown for private chefs in Bali.' },
  { label: 'Event Planning', href: '/blog/event-planning-bali', desc: 'Planning for larger celebrations and events.' },
  { label: 'Contact Us', href: '/contact', desc: 'Tell us about your occasion and we\'ll find the right chef.' },
]

export default function RomanticDinnerBaliPage() {
  return (
    <PremiumPage
      slug="blog/romantic-dinner-at-home-bali-private-chef"
      title="Romantic Dinner at Home in Bali: Private Chef Experience"
      description="Plan an unforgettable romantic dinner in your Bali villa with a private chef. Tasting menus, personalization ideas, and pricing in IDR."
      seoTitle="Romantic Dinner Bali | Private Chef at Your Villa"
      seoDescription="Plan an unforgettable romantic dinner in your Bali villa with a private chef. Tasting menus, personalization ideas, and pricing in IDR."
      canonicalUrl="https://mychef.id/blog/romantic-dinner-at-home-bali-private-chef"
      h1="Romantic Dinner at Home in Bali"
      subtitle="Private Chef Experience for Two"
      heroImage="/generated/mychef-misc-bali-hub-fine-dining.webp"
      heroImageAlt="Romantic dinner table set for two in Bali villa with candlelight"
      ogImage="https://mychef.id/generated/mychef-misc-bali-hub-fine-dining.webp"
      keywords={['romantic dinner bali', 'private chef romantic dinner bali', 'bali villa dinner for two']}
      highlights={['Complete Privacy', 'Custom Menus', 'Bali Settings', 'Pricing Guide']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Romantic Dinner Bali', 'https://mychef.id/blog/romantic-dinner-at-home-bali-private-chef', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS),
      ]}
      ctaText="Book Your Romantic Dinner"
      ctaSubtext="Tell us your date and occasion — we find the perfect chef for your evening."
    />
  )
}
