import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { Wine, ChefHat, Sparkles, Clock } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Fine Dining in Bali',
    title: 'The Art of the Tasting Menu in Your Private Villa',
    body: `<p>Fine dining is more than a meal — it's a curated, multi-course culinary journey. In Bali, fine dining takes on a unique character. Rather than rigid fine dining establishments, you can experience Michelin-caliber cuisine in the intimate setting of a private villa, with a dedicated chef tailoring every course to your preferences.</p>
    <p>Your villa becomes a private restaurant. No formal dress codes, no tables inches apart, no time pressure between courses. Just you, your guests, and world-class cooking in bare feet by your pool.</p>`,
  },
  {
    id: 'whats-fine-dining',
    type: 'content' as const,
    subtitle: 'Definition',
    title: 'What Is Fine Dining & Tasting Menus?',
    body: `<p>A tasting menu (or degustation) is the hallmark of fine dining, featuring 6–10 small courses that showcase technique, ingredient quality, and flavor progression. Each course pairs with wine, commentary, or both, creating a narrative from appetizer to dessert.</p>
    <p>Fine dining is craftsmanship. Every element — plate temperature, sauce consistency, garnish placement, service timing — is deliberate. A tasting menu tells a story through food.</p>`,
  },
  {
    id: 'private-vs-restaurant',
    type: 'features' as const,
    subtitle: 'Comparison',
    title: 'Private Chef Fine Dining vs. Restaurant Dining',
    features: [
      { icon: Sparkles, title: 'Customization', desc: 'Private: Fully customized menu tailored to your tastes, allergies, and preferences. Restaurant: Fixed menu designed for hundreds.' },
      { icon: Wine, title: 'Wine Pairings', desc: 'Private: Curated selections you choose. Restaurant: Cellar-determined offerings.' },
      { icon: ChefHat, title: 'Flexibility', desc: 'Private: 8–10 courses without time pressure. Restaurant: Standardized pace for table turnover.' },
      { icon: Clock, title: 'Experience', desc: 'Private: Bespoke, never repeated. Restaurant: Same experience 500 times per year.' },
    ],
  },
  {
    id: 'how-to-plan',
    type: 'content' as const,
    subtitle: 'Planning Your Experience',
    title: 'Steps to a Perfect Tasting Menu',
    body: `<p><strong>1. Define Your Vision:</strong> How many guests? What cuisines excite you? Do you want interactive cooking or surprise courses?</p>
    <p><strong>2. Choose Your Chef:</strong> Review portfolios, ask about past clients, schedule a consultation.</p>
    <p><strong>3. Co-Create the Menu:</strong> Discuss themes, preferences, and story arc. Agree on pacing and wine pairings.</p>
    <p><strong>4. Handle Logistics:</strong> Confirm head count, kitchen access, service timing, and payment.</p>
    <p><strong>5. Day-Of:</strong> Chef arrives early for prep. You relax and experience the meal.</p>`,
  },
  {
    id: 'cost-and-booking',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Cost & Booking a Fine Dining Experience',
    body: `<p><strong>Emerging Chef:</strong> $80–120 per person for 4–5 courses. Talented, less portfolio depth.</p>
    <p><strong>Established Chef:</strong> $120–180 per person for 6–8 courses. Michelin-trained, strong reviews.</p>
    <p><strong>Celebrity Chef:</strong> $180–300+ per person for 8–10 courses. Michelin stars, international fame.</p>
    <p>Group size discounts apply — 4 guests cost ~$500 total; 8 guests cost ~$800 (price per person drops as numbers rise).</p>
    <p>Additional costs: wine pairing (+$25–50/person), ingredient upgrades like truffle or caviar (+$20–100), multi-day events (negotiate per-day rates).</p>
    <p>Ideal booking timeline: 4–6 weeks ahead. Acceptable: 2–3 weeks. Rush: 1 week (premium surcharge may apply).</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Experience It',
    title: 'Plan Your Fine Dining Experience in Bali',
    body: 'Browse our chef profiles, explore sample menus, or contact our team to design a custom tasting menu for your villa.',
    primaryAction: { label: 'Browse Our Chefs', href: '/chefs' },
    secondaryAction: { label: 'Contact Us', href: '/contact' },
  },
]

const FAQS = [
  {
    question: 'What is the difference between a tasting menu and a regular dinner?',
    answer: 'A tasting menu features 6–10 small courses designed to showcase technique, progression, and flavor storytelling. Regular dinners are typically 2–3 courses with larger portions.',
  },
  {
    question: 'How long does a fine dining tasting menu take?',
    answer: 'Expect 2–3 hours. Courses are paced to allow conversation between services, wine appreciation, and palate cleansing.',
  },
  {
    question: 'Can I request dietary accommodations in a tasting menu?',
    answer: 'Absolutely. Share all dietary restrictions, allergies, and preferences in advance. The chef will design alternatives for each course.',
  },
  {
    question: 'Do I need to provide wine, or can the chef arrange it?',
    answer: 'You can bring your own, or the chef can source wine. Discuss pairings in the planning consultation.',
  },
  {
    question: 'What is the minimum group size for fine dining?',
    answer: "Fine dining works beautifully for 2–4 people for intimacy, or larger groups for shared experience. There's no minimum, but pricing is per person.",
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet Luna, Sol, Aura, and other leading fine dining chefs.' },
  { label: 'How to Hire a Chef', href: '/blog/how-to-hire-private-chef', desc: 'Complete guide to vetting and booking private chefs.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu styles beyond fine dining.' },
  { label: 'Menus', href: '/menus', desc: 'Browse all available menu options.' },
  { label: 'Contact', href: '/contact', desc: 'Chat with our team about your preferences.' },
]

export default function FineDiningGuidePage() {
  return (
    <PremiumPage
      slug="blog/fine-dining-guide"
      title="Fine Dining in Bali: Ultimate Guide to Private Chef Tasting Menus"
      description="Discover fine dining in Bali with private chefs. Curated tasting menus, wine pairings, and luxury culinary experiences for villa stays."
      seoTitle="Fine Dining in Bali | Private Chef Tasting Menus & Experiences"
      seoDescription="Explore fine dining in Bali with private chefs. Curated tasting menus, wine pairings, and luxury culinary experiences for villa stays."
      canonicalUrl="https://mychef.id/blog/fine-dining-guide"
      h1="Fine Dining in Bali"
      subtitle="Ultimate Guide to Private Chef Tasting Menus"
      heroImage="/generated/mychef-misc-bali-hub-fine-dining.webp"
      heroImageAlt="Fine dining tasting menu plating by private chef in Bali villa"
      ogImage="https://mychef.id/generated/mychef-misc-bali-hub-fine-dining.webp"
      keywords={['fine dining bali', 'private chef tasting menu', 'bali villa dining']}
      highlights={['Tasting Menus', 'Wine Pairings', 'Chef Profiles', 'Cost & Booking']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Fine Dining Guide', 'https://mychef.id/blog/fine-dining-guide'),
      ]}
      ctaText="Reserve Your Tasting Menu"
      ctaSubtext="Browse our fine dining chefs and plan your private culinary experience."
    />
  )
}
