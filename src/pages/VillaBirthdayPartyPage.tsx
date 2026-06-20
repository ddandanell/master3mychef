import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Cake, Users, ChefHat, Calendar } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Villa Birthday Planning',
    title: 'Why a Bali Villa Birthday Party Beats Any Restaurant',
    body: `<p>A private villa birthday party in Bali gives you complete control over every detail — guest list, ambiance, timing, menu, and budget. No venue minimums, no shared space with strangers, no set menus. Your villa, your rules, your celebration.</p>
    <p>With a private chef handling catering, the birthday person enjoys the party instead of worrying about food. A professional team manages every course, dietary need, and service detail — leaving you free to celebrate.</p>`,
  },
  {
    id: 'party-sizes',
    type: 'features' as const,
    subtitle: 'Event Scale',
    title: 'Planning by Party Size',
    features: [
      { icon: Users, title: 'Intimate (10–20 Guests)', desc: 'Plated dinner or grazing table. 1 chef + 1–2 staff. Full personalization. IDR 900K–1.8M/person. Best for milestone birthdays.' },
      { icon: Cake, title: 'Medium (25–50 Guests)', desc: 'Buffet or stations + cocktail hour. 1–2 chefs + 3–4 staff. Mix of cuisines possible. IDR 750K–1.5M/person.' },
      { icon: ChefHat, title: 'Large (50–100 Guests)', desc: 'Full buffet or multi-station setup. 2–3 chefs + 5–8 staff. Requires villa garden or pavilion space. IDR 600K–1.2M/person.' },
      { icon: Calendar, title: 'Multi-Day Celebration', desc: 'Pre-party dinner + main event + day-after brunch. Same chef team for consistency. Negotiate per-day rates for multi-event booking.' },
    ],
  },
  {
    id: 'menu-ideas',
    type: 'content' as const,
    subtitle: 'Menu Options',
    title: 'Catering Menus for Every Birthday Style',
    body: `<p><strong>Tropical Bali Feast:</strong> The classic villa birthday. Babi guling (slow-roasted suckling pig) as centerpiece, sate lilit, lawar salad, rice, and sambal. Adds cultural authenticity and spectacle. Guests eat together in communal style — festive and social.</p>
    <p><strong>International BBQ / Grill:</strong> Wood-fire grilled proteins (lobster, wagyu beef, whole fish), seasonal vegetables, corn, flatbreads. Casual, social, theatrical. Guests gather around the grill. Great for sunset parties.</p>
    <p><strong>Grazing & Cocktail:</strong> Charcuterie boards, cheese, dips, crudités, sliders, dessert bites — laid out for guests to graze over 3–4 hours. Flexible and interactive. Pairs well with a cocktail hour format.</p>
    <p><strong>Fine Dining Plated:</strong> Multi-course surprise menu designed around the birthday person's favorite cuisines. Intimate, celebratory, memorable. Best for 10–20 guests. Pairs with wine, cocktails, and dessert theater.</p>
    <p><strong>Themed Birthday Menus:</strong> Italian night (fresh pasta, antipasti, tiramisu), Japanese omakase, Mediterranean meze, or a specific decade theme. The chef builds every element around the concept.</p>`,
  },
  {
    id: 'timeline',
    type: 'content' as const,
    subtitle: 'Planning Guide',
    title: 'Birthday Party Planning Timeline',
    body: `<p><strong>4–6 Weeks Before:</strong> Confirm villa, lock in guest count, book chef and catering team. The most popular Bali villas and chefs fill 6–8 weeks ahead for weekends.</p>
    <p><strong>3 Weeks Before:</strong> Finalize menu concept with chef. Discuss dietary restrictions (collect from all guests by this point). Confirm service style and equipment needs.</p>
    <p><strong>2 Weeks Before:</strong> Lock the menu. Order any specialty ingredients requiring advance sourcing (imported meat, specialty wine, specialty dessert). Confirm with villa on kitchen access and timing.</p>
    <p><strong>1 Week Before:</strong> Final headcount. Brief chef on the birthday person's favorites, any surprises planned, and the event timeline. Coordinate with other vendors (DJ, decorator, photographer).</p>
    <p><strong>Day Before:</strong> Chef may pre-prep some items. Confirm arrival time, parking, and setup schedule. Ensure kitchen is accessible and cleared for catering.</p>`,
  },
  {
    id: 'cake-desserts',
    type: 'content' as const,
    subtitle: 'The Cake',
    title: 'Birthday Cake & Dessert Integration',
    body: `<p>Most private chefs can create a custom birthday cake or work alongside an external patisserie. Options:</p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li><strong>Chef-Made Cake:</strong> Designed to match menu theme. Discuss flavors 2+ weeks ahead. Cost included in catering budget or IDR 500K–1.5M extra for elaborate designs.</li>
      <li><strong>External Patisserie:</strong> Commission a Bali bakery for a custom design. Chef coordinates timing and presentation. Recommend confirming delivery logistics 1 week ahead.</li>
      <li><strong>Dessert Table:</strong> Instead of a single cake — an arrangement of mini cakes, tarts, chocolates, and macarons. Highly photogenic, guests love grazing. Chef can build this as part of the catering package.</li>
    </ul>
    <p>For surprise cakes: tell the chef privately. They handle the timing, hiding the cake, and the reveal — so the birthday person is genuinely surprised.</p>`,
  },
  {
    id: 'budget',
    type: 'content' as const,
    subtitle: 'Pricing',
    title: 'Villa Birthday Party Catering Costs',
    body: `<p><strong>Budget Range by Party Size:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>10–20 guests (plated dinner): IDR 18M–36M total (IDR 900K–1.8M/person)</li>
      <li>25–50 guests (buffet): IDR 19M–75M total (IDR 750K–1.5M/person)</li>
      <li>50–100 guests (multi-station): IDR 30M–120M total (IDR 600K–1.2M/person)</li>
    </ul>
    <p><strong>What's Included:</strong> Chef service, kitchen team, all food preparation, service staff, kitchen cleanup.</p>
    <p><strong>Additional Costs:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Premium ingredients (imported proteins, specialty items): +IDR 100K–500K/person</li>
      <li>Beverage/bar management: +IDR 2M–8M depending on selections</li>
      <li>Equipment rental (extra ovens, serving ware): +IDR 2M–5M</li>
      <li>Custom birthday cake or dessert table: +IDR 500K–3M</li>
    </ul>
    <p><strong>Money-Saving Tips:</strong> Buffet over plated. Daytime party over evening (lower base rate). Local ingredients over imported. Skip formal service staff for under 20 guests (chef self-manages).</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Plan the Perfect Villa Birthday Party in Bali',
    body: 'Tell us the date, guest count, venue, and the birthday person\'s food preferences. We match you with the right chef for an unforgettable celebration.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'Browse Chefs', href: '/chefs' },
  },
]

const FAQS = [
  {
    question: 'How much does a private chef cost for a birthday party in Bali?',
    answer: 'Budget IDR 600K–1.8M per person for catering depending on menu style, guest count, and service format. Smaller intimate dinners (10–20 guests) tend to cost more per person than larger buffet-style parties. Contact us for a custom quote based on your headcount and vision.',
  },
  {
    question: 'Can the chef do a surprise birthday dinner?',
    answer: 'Yes — and this is one of the most common requests. Book under your own name, share dietary details for the birthday person, and the chef coordinates with you to keep everything hidden until the moment. Surprise cakes, personalized menu cards, and timed reveals are all part of the experience.',
  },
  {
    question: 'What if some guests are vegan and others want a meat-heavy BBQ?',
    answer: 'A professional private chef handles mixed dietary needs routinely. Vegan guests get dedicated plated options or labelled buffet dishes; meat-eaters get their BBQ. Confirm all dietary requirements at booking — the chef plans around every guest.',
  },
  {
    question: 'Can the chef coordinate with an external DJ or event decorator?',
    answer: 'Chefs focus on food — but they communicate with other vendors on timing (when to stop music for speeches, when to clear for cake reveal). You manage overall event coordination; the chef manages the catering timeline within it.',
  },
  {
    question: 'How far in advance should I book for a birthday party?',
    answer: '4–6 weeks for a weekend party is recommended. Popular Bali villas and experienced chefs book up quickly during high season (June–September). For a large event (50+ guests) or a milestone birthday with custom menu requirements, 6–8 weeks gives the best chef selection and ingredient lead time.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet our event-experienced private chefs.' },
  { label: 'Event Planning Guide', href: '/blog/event-planning-bali', desc: 'Full event logistics guide for Bali.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore buffet, plated, and grazing menu options.' },
  { label: 'Corporate Events', href: '/blog/corporate-events-catering-bali', desc: 'Team celebrations and corporate events in Bali.' },
  { label: 'Contact Us', href: '/contact', desc: 'Discuss your birthday party details with our team.' },
]

export default function VillaBirthdayPartyPage() {
  return (
    <PremiumPage
      slug="blog/how-to-plan-villa-birthday-party-bali"
      title="How to Plan a Villa Birthday Party in Bali with a Private Chef"
      description="Plan an unforgettable birthday party in your Bali villa. Private chef catering, menu ideas, planning timeline, and full pricing in IDR."
      seoTitle="Villa Birthday Party Bali | Private Chef Catering Guide"
      seoDescription="Plan an unforgettable birthday party in your Bali villa. Private chef catering, menu ideas, planning timeline, and full pricing in IDR."
      canonicalUrl="https://mychef.id/blog/how-to-plan-villa-birthday-party-bali"
      h1="Villa Birthday Party in Bali"
      subtitle="Private Chef Catering Guide"
      heroImage="/generated/mychef-blog-villa-birthday-party.webp"
      heroImageAlt="Private chef presenting elegant birthday celebration dinner at a luxury Bali villa pool terrace"
      ogImage="https://mychef.id/generated/mychef-blog-villa-birthday-party.webp"
      keywords={['villa birthday party bali', 'birthday catering bali', 'private chef birthday bali']}
      highlights={['Party Sizes', 'Menu Options', 'Planning Timeline', 'Pricing Guide']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Villa Birthday Party Bali', 'https://mychef.id/blog/how-to-plan-villa-birthday-party-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS),
      ]}
      ctaText="Plan Your Birthday Party"
      ctaSubtext="Share your date, guest count, and vision — we find the perfect chef for your celebration."
    />
  )
}
