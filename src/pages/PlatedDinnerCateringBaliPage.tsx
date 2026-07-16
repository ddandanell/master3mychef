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
A 25% deposit confirms your booking. For events over 40 guests, we request a briefing call to coordinate timing, table layout, and service sequence.

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
  {
    question: 'What is the minimum guest count for plated dinner catering?',
    answer:
      'We can provide plated service for as few as 6 guests. Smaller groups are ideal for intimate proposal dinners, anniversary meals, and birthday dinners. For groups under 10, we often assign a single senior chef who manages both cooking and light service, reducing staffing costs significantly.',
  },
  {
    question: "Can we request a tasting menu or chef's surprise menu?",
    answer:
      "Yes. Many clients request a chef's surprise menu -- where the chef designs the progression based on the best seasonal ingredients available that day. This works especially well for the 5-course and 7-course formats and gives the chef creative flexibility to deliver something exceptional.",
  },
  {
    question: 'How far in advance do we need to book plated dinner catering?',
    answer:
      'For groups under 20, 48--72 hours is typically sufficient. For events over 40 guests, we recommend 1--2 weeks to allow time for menu approval, staffing confirmation, and logistics planning. For villa weddings with plated service for 60+ guests, 3--4 weeks minimum is ideal.',
  },
  {
    question: 'Does plated dinner catering include wine service?',
    answer:
      'Service staff manage water and non-alcoholic beverages. For wine service, clients typically supply their own wine, and we provide the glassware and pour. For a full sommelier-led wine pairing experience, we offer a sommelier add-on who manages wine selection, temperature, and pairing throughout the evening.',
  },
  {
    question: 'Can you do plated service outdoors or at the pool area?',
    answer:
      'Yes. Most Bali villa plated dinners take place outdoors -- the pool terrace, the garden, or an open pavilion. Our team accounts for wind and ambient temperature when designing the menu and coordinating plating timing. For outdoor events after dark, we coordinate with your villa team on lighting if needed.',
  },
]

const relatedPages = [
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Sommelier Hire Bali', href: '/blog/sommelier-hire-bali', desc: 'Wine service and pairing for events' },
  { label: 'Romantic Dinner Bali', href: '/blog/romantic-dinner-bali-private-chef', desc: 'Intimate private dinners for couples' },
  { label: 'Proposal Dinner Bali', href: '/blog/proposal-dinner-bali-private-chef', desc: 'Private proposal dinner planning' },
  { label: 'Villa Party Catering', href: '/blog/villa-party-catering-bali', desc: 'Full catering for villa celebrations' },
  { label: 'Event Staff Bali', href: '/blog/event-staff-bali', desc: 'Professional waiters and event crew' },
]

export default function PlatedDinnerCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/plated-dinner-catering-bali"
      title="Plated Dinner Catering Bali -- Formal Multi-Course Service for Villa Events"
      seoTitle="Plated Dinner Catering Bali -- Formal Table Service for Villa Weddings & Events"
      description="Professional plated dinner catering for villa events in Bali. Multi-course menus, trained service staff, and formal table service for weddings, anniversaries, and milestone dinners."
      seoDescription="Plated dinner catering in Bali for 6--120+ guests. Multi-course menus designed by senior chefs. Formal table service for villa weddings, anniversary dinners, and milestone events."
      h1="Plated Dinner Catering Bali -- Formal Multi-Course Service for Villa Events"
      subtitle="Multi-course plated menus with professional table service -- the refined choice for villa weddings, milestone dinners, and formal occasions in Bali."
      heroImage="/images/blog/plated-dinner-catering-bali.jpg"
      heroImageAlt="Elegant plated dinner course being served by a uniformed waiter at a luxury Bali villa event"
      ogImage="/images/blog/plated-dinner-catering-bali.jpg"
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
      highlights={['3--7 Course Menus', 'Formal Table Service', 'From 6 Guests', 'From IDR 700K/person']}
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
          image: 'https://mychef.id/images/blog/plated-dinner-catering-bali.jpg',
        },
      ]}
    />
  )
}
