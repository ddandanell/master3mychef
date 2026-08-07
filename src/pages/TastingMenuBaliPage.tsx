import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Private Tasting Menu in Bali -- Multi-Course Chef\'s Dinner at Your Villa',
    body: `A tasting menu is the purest form of what a private chef does. Across seven to eleven courses, the chef builds a complete culinary narrative -- each dish conceived in relation to the one before and the one after, the pacing set to let the evening unfold rather than rush. It is fine dining as an experience rather than a meal, and in a Bali villa it becomes something restaurants cannot replicate: entirely private, designed entirely around your group, in a setting that no restaurant can match.

myCHEF's private tasting menu service brings this format to villas and residences across Bali. Our chefs work at the intersection of classical European technique and the exceptional ingredients Bali produces year-round: the fish from the morning market, the highland vegetables from Bedugul, the aromatics that define Balinese cooking. The result is a menu that could only exist here, now, for this group.

We deliver private tasting menus across all major villa areas: Seminyak, Canggu, Uluwatu, Jimbaran, Nusa Dua, Sanur, Ubud, and Pererenan.`,
  },
  {
    id: 'what-tasting-menu',
    type: 'content',
    title: 'What a Private Tasting Menu Includes',
    body: `**Seven to Eleven Progressive Courses** -- The number of courses is calibrated to the occasion and your preference. Seven suits a special dinner where the food is a highlight; nine or eleven suits occasions where the meal is the event itself.

**Amuse-Bouche and Opener** -- A single bite or small opener that sets the tone for the evening and prepares the palate. Often the most technically precise course: small format demands precision.

**Two to Three Cold Courses** -- Tartare, crudo, ceviche, or composed cold plates that build through acidity and freshness. This early section typically features the day's best seafood and market produce.

**A Soup or Palate Course** -- A single warm liquid course that transitions from cold to hot and resets the palate between sections.

**Two Warm Savoury Courses** -- The kitchen's strongest work. A fish course followed by a meat or umami-led main, each with its own sauce work and accompaniments. This is where classical technique meets Bali's ingredients most directly.

**A Cheese or Pre-Dessert** -- A brief break from savoury before the sweet conclusion, or a palate-cleansing sorbet course.

**One to Two Dessert Courses** -- From a refreshing sorbet to a constructed plated dessert, the sweet courses close the menu without simply adding sugar. They should feel inevitable given the courses that preceded them.

**Paired Beverages Available** -- Wine pairing, sake pairing, mocktail pairing, or a curated non-alcoholic beverage sequence can be arranged with advance notice. Our sommelier can guide the beverage programme on request.`,
  },
  {
    id: 'design',
    type: 'content',
    title: 'How Your Tasting Menu Is Designed',
    body: `A myCHEF tasting menu is not a fixed set list. It changes because Bali's market changes, and because the best tasting menus are specific to the people eating them.

**Pre-Dinner Consultation** -- Before the event, we discuss your preferences, dietary requirements, flavour preferences (richness vs freshness, classic vs creative), any ingredients you dislike, and the occasion you are celebrating. This shapes every course decision.

**Market-Led Ingredient Selection** -- Our chefs visit the market the morning of the dinner, selecting the day's finest specimens. The snapper that looks best today defines the fish course. The herbs that are at peak this week feature accordingly.

**Dietary Integration** -- If one or two guests have dietary restrictions while others eat everything, we adapt seamlessly. Vegan versions, gluten-free courses, seafood-free menus -- we build these into the progressive structure without designing a lesser experience for restricted guests.

**Course Pacing** -- Across a 3--4 hour tasting menu dinner, pacing is everything. We time each course to conversation: arriving when there is a natural pause, not interrupting. The chef communicates with the service team throughout so the evening flows rather than pushes.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'When to Book a Private Tasting Menu in Bali',
    body: `**Landmark Celebrations** -- A milestone birthday, a significant anniversary, a honeymoon, or a proposal dinner. The tasting menu format signals that the occasion demands the finest food possible in the finest setting available -- your own villa.

**Farewell Dinners** -- The last night of a Bali trip, when the group wants to mark the end of something special with a dinner that matches the quality of the days before it.

**Intimate Group Dining (4--12 people)** -- The tasting menu format works best with groups of 4--12: intimate enough for genuine conversation between courses, large enough to make the full kitchen service and team worthwhile.

**Food-Focused Guests** -- Wine lovers, culinary travellers, chefs on holiday, and food professionals who came to Bali partly for the food scene. A private tasting menu with market-fresh Balinese ingredients gives them the food experience they were hoping to find.

**Corporate and Client Entertainment** -- Executive-level client dinners where the food needs to be exceptional without the logistics of a restaurant booking for a large group. In a private villa setting with a full tasting menu, the dining becomes the hospitality.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Private Tasting Menu Pricing in Bali',
    body: `Private tasting menu pricing is quoted per person and depends on the number of courses, the chef level, and the ingredient specification.

**7-course tasting menu:** From IDR 750,000--1,200,000 per person (chef service only; ingredients billed at market cost)

**9-course tasting menu:** From IDR 950,000--1,500,000 per person

**11-course tasting menu with beverage pairing:** From IDR 1,500,000--2,500,000 per person, depending on beverage specification

Service team (1--2 servers) is included for groups of 6 or more. Ingredient cost is billed transparently at actual market price. We provide a full quote inclusive of all costs before you confirm.`,
  },
]

const faqs = [
  { question: 'How much is fine dining in a Bali villa?', answer: 'Signature tasting paths often from about IDR 2.2M–2.4M++ per person depending on menu. <a href="/fine-dining">Fine dining</a> · <a href="/fine-dining/menus">menus</a>.' },
  { question: 'What is included?', answer: 'Chef brigade, multi-course menu, ingredients (as quoted), service and full cleanup.' },
  { question: 'Wine pairing?', answer: 'Optional add-on (often ~IDR 850K/person) or BYO service.' },
  { question: 'Minimum guests?', answer: 'Tasting menus usually 4–24; couples use <a href="/fine-dining/romantic-dinner">romantic dinner</a>.' },
  { question: 'Dietary adaptations?', answer: 'Yes at no extra charge when briefed.' },
  { question: 'How long does the evening take?', answer: 'Plan roughly 3–4 hours for a five-course tasting with pauses.' },
  { question: 'Chef\'s table option?', answer: 'Yes — <a href="/fine-dining/chefs-table">chef\'s table</a>.' },
  { question: 'Can kids join?', answer: 'With adapted plates, or pair <a href="/kids-menus">kids menus</a>.' },
  { question: 'Difference from daily private chef?', answer: 'Event multi-course vs multi-day meal plans on <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Where do you serve?', answer: 'Villas island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Surprise setups?', answer: 'Yes for proposals and anniversaries — coordinate empty-villa timing.' },
  { question: 'How to book?', answer: 'WhatsApp date, guests, area and menu path — <a href="/quote">quote</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const relatedPages = [
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Chef\'s Table Bali', href: '/fine-dining/chefs-table', desc: 'Interactive dining at the chef\'s counter' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Private romantic dinner for two' },
  { label: 'Private Dining Bali', href: '/private-dining-indonesia', desc: 'Complete in-villa dining experiences' },
  { label: 'Proposal Dinner Bali', href: '/proposal-dinner', desc: 'Private proposal dinner setup' },
  { label: 'Anniversary Dinner Bali', href: '/events/anniversaries', desc: 'Villa anniversary dinner experience' },
]

export default function TastingMenuBaliPage() {
  return (
    <PremiumPage
      slug="blog/tasting-menu-bali"
      title="Private Tasting Menu Bali -- Multi-Course Chef\'s Dinner at Your Villa | myCHEF"
      seoTitle="Private Tasting Menu Bali -- Multi-Course Chef\'s Dinner at Your Villa"
      description="Private tasting menus delivered to Bali villas by executive chefs. 7 to 11 progressive courses with market-fresh Balinese ingredients."
      seoDescription="Private tasting menu in Bali. 7--11 progressive courses by an executive chef in your villa. Market-led menus, dietary adaptation and wine pairing."
      h1="Private Tasting Menus in Bali — What to Expect"
      subtitle="Seven to eleven courses. Market-fresh ingredients. A complete evening built around your group."
      heroImage="/images/blog/tasting-menu-bali.jpg"
      heroImageAlt="Elegantly plated multi-course tasting menu dish prepared by a private chef in a Bali villa dining room"
      ogImage="/images/blog/tasting-menu-bali.jpg"
      canonicalUrl="https://mychef.id/blog/tasting-menu-bali"
      keywords={[
        'tasting menu bali',
        'private tasting menu bali',
        'degustation menu bali',
        'multi course dinner bali',
        'chef tasting menu bali',
        'fine dining tasting menu bali',
        'private chef tasting menu',
        '7 course dinner bali',
        'villa tasting menu bali',
        'degustation dinner bali',
      ]}
      highlights={['7--11 Progressive Courses', 'Market-Led Menus', 'Wine Pairing Available', 'From IDR 750K/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Private Tasting Menu"
      ctaSubtext="Tell us your occasion, guest count, and any dietary requirements -- we will design a menu and send a full quote within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Tasting Menu Bali', 'https://mychef.id/blog/tasting-menu-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Tasting Menu in Bali -- Multi-Course Chef\'s Dinner at Your Villa',
          description: 'Private tasting menu service in Bali. 7 to 11 progressive courses by an executive chef in your villa.',
          url: 'https://mychef.id/blog/tasting-menu-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/tasting-menu-bali.jpg',
        },
      ]}
    />
  )
}
