import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Plated Dinner Catering in Bali -- Formal Service for Villa Events & Weddings',
    body: `A plated dinner is the gold standard of event catering: individually portioned courses, presented at the table, served by a professional team. For villa weddings, milestone dinners, proposal evenings, and high-end corporate receptions, plated service creates an atmosphere that buffets and grazing tables simply cannot replicate.

myCHEF provides professional plated dinner catering across Bali's villa areas -- from intimate dinners for 8 to formal receptions for 120. Your private chef designs a custom multi-course menu, our service team is trained on European plated service standards, and every plate is timed, presented, and delivered to the table simultaneously.

We operate across Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'menu-formats',
    type: 'content',
    title: 'Plated Dinner Menu Formats',
    body: `**3-Course Plated Dinner**
The most popular format for villa dinner parties and intimate celebrations. Entrée, main course, and dessert. Typically 1.5--2 hours of table service. From IDR 700,000/person (menu and ingredient cost included; staff quoted separately).

**4-Course Plated Dinner**
Adds an intermediate course -- typically a soup or intermediate between entrée and main. Popular for milestone birthdays, anniversary dinners, and villa wedding receptions. From IDR 750,000/person.

**5-Course Tasting Menu**
Progressively portioned courses showcasing the chef's range -- amuse-bouche, entrée, fish course, main, pre-dessert, and dessert. Paired with wine on request. From IDR 1,100,000/person.

**7-Course Chef's Table Experience**
For exceptional occasions. Small portion sizes, maximum flavour progression. Requires advance planning of 72+ hours for sourcing. From IDR 1,800,000/person.

All menus include a pre-dinner canapé pass and table water service. Bread service is optional. Wine pairing available with a sommelier add-on.`,
  },
  {
    id: 'staffing',
    type: 'content',
    title: 'Staffing a Plated Dinner -- What You Need',
    body: `Plated service is more labour-intensive than buffet or grazing formats. Precise timing and simultaneous plating require a larger, coordinated team:

**Up to 10 guests** -- 1 chef + 1 kitchen assistant + 2 waiters. Service is smooth and intimate.

**10--20 guests** -- 1 chef + 1 kitchen assistant + 3 waiters. Allows simultaneous plate delivery and dedicated sommelier or wine service if required.

**20--40 guests** -- 2 chefs + 2 kitchen assistants + 4--5 waiters + 1 event lead. All courses timed to within 3 minutes across all tables.

**40--80 guests** -- Full production team: 2 chefs + 3 kitchen assistants + 6--8 waiters + 1 event lead + optional sommelier. Requires a formal briefing session 24 hours before the event.

**80+ guests** -- Full event catering production. Price and staffing plan on enquiry. Requires 3+ weeks advance notice.

Staff are trained in European plated service: left-hand delivery, simultaneous unveiling for formal settings, and careful timing between courses. All staff are uniformed, briefed, and arrive 2 hours before service begins.`,
  },
  {
    id: 'cuisine',
    type: 'content',
    title: 'Menu Styles and Cuisine Options',
    body: `Our chefs cook across a wide range of styles for plated events:

**Modern European / French-inspired** -- The most frequently requested for formal occasions. Think butter-poached seafood, French-trimmed lamb, classical sauces, and precision plating. Our senior chefs trained in European kitchens and bring that discipline to your villa.

**Modern Asian** -- Pan-Asian fine dining: Japanese-influenced plating, Indonesian heritage techniques, Southeast Asian ingredients elevated to restaurant standards. Popular for fusion weddings and corporate events.

**Balinese Heritage** -- Traditional Balinese flavours reimagined for formal plated service. Spiced duck, fish in banana leaf, slow-cooked pork -- presented with the elegance of fine dining but the depth of ceremonial cooking.

**Mediterranean / Middle Eastern** -- Mezze-inspired entrées, grilled proteins, roasted vegetables with tahini and preserved lemon. Popular for outdoor evening settings.

**Custom and Dietary** -- All menus can be designed around dietary requirements: vegan, gluten-free, kosher, halal, and elimination diet protocols. We require dietary information at least 48 hours in advance.`,
  },
  {
    id: 'logistics',
    type: 'content',
    title: 'How a Plated Dinner Works with myCHEF',
    body: `**Step 1 -- Enquiry and menu design (72h before)**
Tell us your guest count, event date, preferred cuisine style, and any dietary restrictions. We assign a senior chef and send a menu proposal within 24 hours. You review, adjust, and approve.

**Step 2 -- Confirmation and deposit**
A 50% deposit confirms your booking. The balance is due the day before the event. For events over 40 guests, we request a briefing call to coordinate timing, table layout, and service sequence.

**Step 3 -- Shopping and prep (event day)**
Your chef sources all ingredients fresh on the day of the event. The kitchen team arrives 3--4 hours before service to begin prep. Service staff arrive 2 hours before to set the table.

**Step 4 -- Service**
Canapé pass begins when guests are seated. Courses are timed by the event lead. Plates are served simultaneously across all tables. Clearing between courses is handled seamlessly.

**Step 5 -- Closure**
After dessert service, the kitchen team begins breakdown and full cleanup. All waste is removed. The villa is returned to its original condition before the team departs.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Plan Your Plated Dinner in Bali',
    body: `Share your event date, guest count, occasion, and any cuisine preferences. We'll design a multi-course menu proposal and confirm availability within 24 hours.`,
  },
]

const faqs = [
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
  { question: 'Can we add a mobile cocktail bar?', answer: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { question: 'Kids and allergies?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { question: 'How do I book catering?', answer: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { question: 'Rain plan?', answer: 'Covered setups and indoor pivots planned ahead.' },
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
  { label: 'Sommelier Hire Bali', href: '/in-villa-service/sommelier', desc: 'Wine service and pairing for events' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Intimate private dinners for couples' },
  { label: 'Proposal Dinner Bali', href: '/proposal-dinner', desc: 'Private proposal dinner planning' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Full catering for villa celebrations' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Professional waiters and event crew' },
]

export default function PlatedDinnerCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/plated-dinner-catering-bali"
      title="Plated Dinner Catering Bali -- Formal Multi-Course Service for Villa Events"
      seoTitle="Plated Dinner Catering Bali -- Formal Table Service | myCHEF"
      description="Professional plated dinner catering for villa events in Bali. Multi-course menus, trained service staff, and formal table service for weddings, anniversaries."
      seoDescription="Plated dinner catering in Bali for 6--120+ guests. Multi-course menus designed by senior chefs. Formal table service for villa weddings, anniversaries and."
      h1="Plated Dinner Catering Bali -- Formal Multi-Course Service for Villa Events"
      subtitle="Multi-course plated menus with professional table service -- the refined choice for villa weddings, milestone dinners, and formal occasions in Bali."
      heroImage="/generated/mychef-catering-bali-hero-plated.webp"
      heroImageAlt="Elegant plated dinner course being served by a uniformed Indonesian waiter at a luxury Bali villa event"
      ogImage="/generated/mychef-catering-bali-hero-plated.webp"
      canonicalUrl="https://mychef.id/blog/plated-dinner-catering-bali"
      keywords={[
        'plated dinner bali',
        'plated dinner catering bali',
        'formal dinner catering bali',
        'multi course dinner bali',
        'villa dinner service bali',
        'sit down dinner catering bali',
        'plated wedding dinner bali',
        'private plated dinner bali',
        'formal catering bali',
        'table service bali',
      ]}
      highlights={['3--7 Course Menus', 'Formal Table Service', 'From 5 Guests', 'From IDR 700K/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Plan My Plated Dinner"
      ctaSubtext="Share your event details and we'll design a custom multi-course menu proposal within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Plated Dinner Catering Bali', 'https://mychef.id/blog/plated-dinner-catering-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Plated Dinner Catering Bali -- Formal Multi-Course Service for Villa Events',
          description:
            'Professional plated dinner catering for villa events in Bali. Multi-course menus, trained service staff, and formal table service for weddings, anniversaries, and milestone occasions.',
          url: 'https://mychef.id/blog/plated-dinner-catering-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-plated.webp',
        },
      ]}
    />
  )
}
