import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Wine, ChefHat, Sparkles, Clock, Shield, MapPin, UtensilsCrossed, Heart } from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Fine Dining in Bali',
    title: 'The Art of the Tasting Menu in Your Private Villa',
    body: `<p>Fine dining is more than a meal — it's a curated, multi-course culinary journey. In Bali, fine dining takes on a unique character. Rather than rigid fine dining establishments, you can experience Michelin-caliber cuisine in the intimate setting of a <a href="/in-villa-service" class="text-[#7E6410] hover:underline font-medium">private villa</a>, with a dedicated chef tailoring every course to your preferences.</p>
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
    id: 'why-choose',
    type: 'features' as const,
    subtitle: 'Why Choose Villa Fine Dining',
    title: 'Why Fine Dining at Your Villa Beats a Restaurant',
    features: [
      { icon: Shield, title: 'Total Privacy', desc: 'No neighbouring tables, no ambient noise, no strangers. Your villa is your private restaurant — the experience belongs entirely to you and your guests.' },
      { icon: UtensilsCrossed, title: 'Fully Customised Menu', desc: 'Every course is designed around your preferences, dietary requirements, and culinary curiosity. Nothing on the menu is there by accident.' },
      { icon: MapPin, title: 'No Travel Required', desc: 'Your chef arrives at your villa with all ingredients and equipment. You dress how you like, start when you like, and end when you feel like it.' },
      { icon: Heart, title: 'Chef Dedication', desc: 'A restaurant chef is cooking for 40 tables simultaneously. Your private chef is cooking exclusively for your table — every plate gets full attention.' },
    ],
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Popular Occasions',
    title: 'Perfect Fine Dining Occasions at Your Villa',
    body: `<p>A private fine dining experience in Bali elevates any special occasion. Here are the celebrations guests love most:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Honeymoon Dinner:</strong> The most intimate meal of your marriage. Your chef sets the table, dims the lights, and creates a menu that tells the story of your first days together. <a href="/events/anniversaries" class="text-[#7E6410] hover:underline font-medium">Learn about romantic events</a>.</li>
      <li><strong>Proposal Dinner:</strong> Propose over a candlelit 7-course menu designed for the moment — flowers, champagne, and a chef who disappears after each course so you have complete privacy. <a href="/events" class="text-[#7E6410] hover:underline font-medium">Browse our events services</a>.</li>
      <li><strong>Anniversary Celebration:</strong> Mark the years with a dining experience that matches the milestone. Recreate a dish from a past trip, or explore something entirely new together.</li>
      <li><strong>Birthday Dinner:</strong> Gift the birthday guest a bespoke tasting menu centred on their favourite cuisines, with a dedicated chef and sommelier for the evening. <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">Birthday catering options</a>.</li>
      <li><strong>Corporate Entertaining:</strong> Impress clients or reward a leadership team with a private chef dinner in your villa — far more memorable than any restaurant booking. <a href="/events/corporate-events" class="text-[#7E6410] hover:underline font-medium">Corporate events in Bali</a>.</li>
    </ul>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where We Serve',
    title: 'Fine Dining Available Across Bali',
    body: `<p>Our fine dining chefs are available throughout the island, coming directly to your villa no matter where you are staying:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak</a> — The original luxury heartland of Bali. Boutique villas, sophisticated guests, and the highest density of fine dining requests on the island.</li>
      <li><a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu</a> — Modern, creative, and increasingly upscale. Canggu villa guests love progressive and fusion tasting menus.</li>
      <li><a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud</a> — Jungle retreats and rice terrace villas. Fine dining in Ubud often features Balinese-inspired menus and farm-to-table ingredients sourced from local markets.</li>
    </ul>
    <p style="margin-top:0.75rem;">We also cover Nusa Dua, Uluwatu, Jimbaran, and beyond. <a href="/help/getting-started" class="text-[#7E6410] hover:underline font-medium">See how to get started</a> and check availability for your villa address.</p>`,
  },
  {
    id: 'price-guide-cta',
    type: 'custom' as const,
    subtitle: '',
    title: '',
    body: '',
    render: <EmailCaptureBar />,
  },
  {
    id: 'how-to-plan',
    type: 'content' as const,
    subtitle: 'Planning Your Experience',
    title: 'Steps to a Perfect Tasting Menu',
    body: `<p><strong>1. Define Your Vision:</strong> How many guests? What cuisines excite you? Do you want interactive cooking or surprise courses?</p>
    <p><strong>2. Choose Your Chef:</strong> <a href="/chefs" class="text-[#7E6410] hover:underline font-medium">Browse chef portfolios</a>, ask about past clients, schedule a consultation.</p>
    <p><strong>3. Co-Create the Menu:</strong> Discuss themes, preferences, and story arc. Agree on pacing and wine pairings.</p>
    <p><strong>4. Handle Logistics:</strong> Confirm head count, kitchen access, service timing, and payment.</p>
    <p><strong>5. Day-Of:</strong> Chef arrives early for prep. You relax and experience the meal.</p>`,
  },
  {
    id: 'cost-and-booking',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Cost & Booking a Fine Dining Experience',
    body: `<p><strong>Emerging Chef:</strong> IDR 1.2M–1.8M per person for 4–5 courses. Talented, less portfolio depth.</p>
    <p><strong>Established Chef:</strong> IDR 1.8M–2.7M per person for 6–8 courses. Michelin-trained, strong reviews.</p>
    <p><strong>Celebrity Chef:</strong> IDR 2.7M–4.8M+ per person for 8–10 courses. Michelin stars, international fame.</p>
    <p>Group size discounts apply — 4 guests cost ~IDR 8M total; 8 guests cost ~IDR 13M (price per person drops as numbers rise).</p>
    <p>Additional costs: wine pairing (+IDR 400K–800K/person), ingredient upgrades like truffle or caviar (+IDR 300K–1.5M), multi-day events (negotiate per-day rates).</p>
    <p><a href="/pricing" class="text-[#7E6410] hover:underline font-medium">Pricing and availability</a>: booking timeline 4–6 weeks ahead. Acceptable: 2–3 weeks. Rush: 1 week (premium surcharge may apply).</p>`,
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
  { question: 'Is this guide free?', answer: 'Yes — educational content to help you plan. Booking is optional.' },
  { question: 'Can myCHEF deliver what this guide describes?', answer: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { question: 'How do I get prices after reading?', answer: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { question: 'Does advice apply across Bali?', answer: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { question: 'Allergies covered in real bookings?', answer: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { question: 'Daily chef vs one dinner?', answer: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { question: 'How to book after this guide?', answer: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { question: 'Related services?', answer: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
  { question: 'Cancellation if I book?', answer: 'See <a href="/cancellation">cancellation policy</a>.' },
  { question: 'Who writes the operational standards?', answer: 'myCHEF operations and chef leadership in Bali.' },
  { question: 'Can villa managers share this guide?', answer: 'Yes — free to share with guests.' },
  { question: 'More FAQs?', answer: 'Central hub: <a href="/faq">FAQ</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet Luna, Sol, Aura, and other leading fine dining chefs.' },
  { label: 'Events & Special Occasions', href: '/events', desc: 'Proposals, anniversaries, birthdays, corporate dinners and more.' },
  { label: 'Getting Started', href: '/help/getting-started', desc: 'How to book a private chef in Bali — step by step.' },
  { label: 'Fine Dining in Seminyak', href: '/locations/seminyak', desc: 'Private chef fine dining for Seminyak villa guests.' },
  { label: 'Fine Dining in Canggu', href: '/locations/canggu', desc: 'Tasting menus and private dining in Canggu villas.' },
  { label: 'Fine Dining in Ubud', href: '/locations/ubud', desc: 'Farm-to-table and Balinese-inspired fine dining in Ubud.' },
  { label: 'How to Hire a Chef', href: '/blog/how-to-hire-private-chef-bali-complete-guide', desc: 'Complete guide to vetting and booking private chefs.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu styles beyond fine dining.' },
  { label: 'Menus', href: '/fine-dining/menus', desc: 'Browse all available menu options.' },
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
      h1="Fine Dining in Bali: The Ultimate Guide"
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
        breadcrumbSchema('Fine Dining Guide', 'https://mychef.id/blog/fine-dining-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Fine Dining in Bali: Ultimate Guide to Private Chef Tasting Menus',
          description: 'Discover fine dining in Bali with private chefs. Curated tasting menus, wine pairings, and luxury culinary experiences for villa stays.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-08-01',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-misc-bali-hub-fine-dining.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/fine-dining-guide' },
          url: 'https://mychef.id/blog/fine-dining-guide',
        },
      ]}
      ctaText="Reserve Your Tasting Menu"
      ctaSubtext="Browse our fine dining chefs and plan your private culinary experience."
    />
  )
}
