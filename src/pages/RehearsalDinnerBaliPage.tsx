import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Rehearsal Dinner Bali -- Private Chef Catering for the Night Before Your Wedding',
    body: `The rehearsal dinner is one of the most intimate moments in a wedding week. It's the last evening before everything changes -- a gathering of your closest family and wedding party in a setting that feels like yours, not a restaurant's. In Bali, where weddings often span multiple days and bring guests from across the world, the rehearsal dinner is frequently one of the most memorable events of the entire celebration.

myCHEF provides complete catering for Bali rehearsal dinners: a private chef who designs a menu tailored to the evening's tone, service staff to manage a seamless dinner, and coordination with your villa's setup to create the atmosphere you're after.

Whether you're hosting 10 immediate family members or 40 of your closest friends, we make the rehearsal dinner effortless -- so you can be present rather than managing catering logistics the night before your wedding.`,
  },
  {
    id: 'formats',
    type: 'content',
    title: 'Rehearsal Dinner Formats for Bali Villas',
    body: `The tone of a rehearsal dinner is typically more relaxed than the wedding itself -- but it still deserves a menu that feels special. Common formats in Bali:

**Casual Garden Dinner (10--25 guests)**
A long-table outdoor setup with shared plates, family-style service, and a relaxed atmosphere. The chef prepares a menu that feels abundant rather than formal -- think wood-grilled proteins, beautifully dressed salads, and communal side dishes. Wine and cocktails served by a dedicated bartender or sommelier. The most popular format for intimate rehearsal dinners.

**Intimate Plated Dinner (6--20 guests)**
For immediate family and closest friends. A multi-course plated dinner by the villa pool or in an open pavilion. Your private chef designs 3--4 courses that reflect your taste -- whether that's modern European, modern Asian, or a Balinese feast with local ingredients elevated to fine dining standards.

**Welcome Cocktail Party (20--50 guests)**
For larger wedding parties arriving from multiple countries, a welcome cocktail party works better than a formal seated dinner. A mixologist manages the bar, grazing tables provide continuous food, and the atmosphere is social rather than structured.

**Balinese Feast (any size)**
For couples who want to give their guests an authentically Balinese experience before the wedding, a traditional feast -- including babi guling or a full Balinese spread -- creates a culturally immersive evening that guests remember long after the wedding.`,
  },
  {
    id: 'menu',
    type: 'content',
    title: 'Menu Ideas for a Bali Rehearsal Dinner',
    body: `The rehearsal dinner menu often differs from the wedding menu in feel. Where the wedding reception might be formal and multicultural, the rehearsal dinner can be more personal, playful, and reflective of who you are.

**The Long Table Italian** -- Burrata and heirloom tomato, fresh pasta dishes, slow-roasted lamb or whole fish, tiramisu served in the centre. Relaxed, convivial, and works beautifully outdoors.

**The Asian Feast** -- Dim sum to start, a whole steamed fish and spiced prawns for the table, fried rice and stir-fried greens, mango sticky rice for dessert. Social and abundant.

**The Indonesian Heritage Dinner** -- A curated Indonesian menu: gado-gado salad, beef rendang, ayam betutu (Balinese slow-spiced chicken), lawar, and nasi kuning. A genuine introduction to Balinese food for international guests.

**The Garden BBQ** -- Wood-fired grill with whole cuts and freshly caught seafood. Informal, interactive, and perfect for younger wedding parties.

**Custom Chef's Menu** -- Your chef designs the menu entirely around your preferences. Many couples use the rehearsal dinner to serve dishes they personally love, creating an evening that feels distinctly like them.`,
  },
  {
    id: 'logistics',
    type: 'content',
    title: 'Logistics -- How We Coordinate a Rehearsal Dinner',
    body: `We coordinate all catering logistics so your rehearsal dinner runs smoothly even with a full wedding-week schedule:

**Timeline and team briefing** -- We confirm the timeline with your wedding planner or venue coordinator to ensure catering service aligns with the rehearsal ceremony and any speeches or toasts planned.

**Menu finalization** -- Your chef finalizes the menu 48--72 hours before the dinner, based on the freshest available ingredients and your confirmed dietary requirements.

**Setup** -- The kitchen team and service staff arrive 2--3 hours before dinner to set up, style the table, and begin preparation. We coordinate with the villa to ensure the outdoor setup is complete before guests arrive.

**Service** -- For a relaxed dinner, service staff manage drinks, clear between courses, and keep the table replenished. For a plated dinner, full table service follows the same protocol as any formal event.

**Speeches and toasts** -- We brief the service team on any planned speech or toast moments so service pauses at the right times, and Champagne or wine is in hand when the toast begins.

**Cleanup** -- Full kitchen and venue cleanup is included. We leave no trace.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Rehearsal Dinner Catering Pricing',
    body: `Cost depends on the format, guest count, menu complexity, and staff requirements:

- **Casual shared dinner (10--20 guests)**: from IDR 700,000/person including chef, ingredients, and 2 service staff
- **Plated multi-course dinner (up to 20 guests)**: from IDR 750,000/person
- **Welcome cocktail party (20--50 guests)**: from IDR 700,000/person including grazing table, bar staff, and 2 waiters
- **Full Balinese feast (any size)**: from IDR 7,500,000 for 20 guests, scaling with group

All pricing includes chef, ingredients, service staff, and cleanup. Alcohol is supplied by the client. Bar staff and sommelier are available as add-ons.

A 50% deposit confirms the booking. Balance is due the day before the event.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Plan Your Bali Rehearsal Dinner',
    body: `Tell us your wedding date, rehearsal dinner date, villa location, guest count, and the kind of evening you're envisioning. We'll design a catering proposal within 24 hours.`,
  },
]

const faqs = [
  {
    question: 'How far in advance should we book rehearsal dinner catering?',
    answer:
      'For weddings during peak season (June--September, December--January), book rehearsal dinner catering at the same time as your wedding catering -- ideally 4--8 weeks in advance. During quieter periods, 2 weeks is typically sufficient. Because rehearsal dinners are coordinated alongside the main wedding, having one point of contact for both events simplifies logistics significantly.',
  },
  {
    question: 'Can myCHEF cater both the rehearsal dinner and the wedding reception?',
    answer:
      'Yes, and many clients prefer this. When we cater both events, we know your preferences, have established relationships with your villa team, and can design menus that are complementary without being repetitive. There is also typically a package discount for booking both events together.',
  },
  {
    question: "What's the typical size of a Bali rehearsal dinner?",
    answer:
      'Most Bali rehearsal dinners range from 10--40 guests -- immediate family, the wedding party, and close friends who have traveled for the occasion. The more intimate the guest list, the more personal and relaxed the atmosphere tends to be. For couples with 60+ attending the wedding, a welcome cocktail format often works better than a seated rehearsal dinner at this scale.',
  },
  {
    question: 'Can we include a traditional Balinese element for international guests?',
    answer:
      'Absolutely -- this is one of the most memorable things you can do for guests arriving from overseas. A Balinese welcome offering, traditional flower arrangements, a musician playing gamelan softly in the background, or a menu built around traditional Balinese dishes all create a cultural experience that feels genuinely placed. Our chefs are Balinese and can guide the authentic elements.',
  },
  {
    question: 'What if our guest list changes close to the rehearsal dinner?',
    answer:
      'Guest count changes are normal in the week before a wedding. We build a small buffer into our sourcing quantities. Additions of up to 10% of the confirmed guest count can typically be accommodated with 24 hours\' notice. Larger additions should be communicated as early as possible so we can adjust staffing.',
  },
]

const relatedPages = [
  { label: 'Bali Wedding Catering', href: '/bali-wedding-catering-packages', desc: 'Full guide to wedding catering costs' },
  { label: 'Private Chef Bali', href: '/', desc: 'In-villa private chef service' },
  { label: 'Plated Dinner Catering', href: '/catering/plated-catering', desc: 'Formal multi-course dinner service' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'End-to-end villa event catering' },
  { label: 'Sommelier Hire Bali', href: '/in-villa-service/sommelier', desc: 'Wine service and pairing for events' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Professional event crew hire' },
]

export default function RehearsalDinnerBaliPage() {
  return (
    <PremiumPage
      slug="blog/rehearsal-dinner-bali"
      title="Rehearsal Dinner Bali -- Private Chef Catering for the Night Before Your Wedding"
      seoTitle="Rehearsal Dinner Bali -- Private Chef Catering for Wedding Week Events"
      description="Private chef catering for Bali rehearsal dinners. Intimate villa dinners, garden feasts, and cocktail welcome parties for 10--50 guests."
      seoDescription="Rehearsal dinner catering in Bali for 10--50 guests. Private chef, service staff and full coordination for the night before your villa wedding."
      h1="Rehearsal Dinner Bali -- Private Chef Catering for the Night Before Your Wedding"
      subtitle="Intimate villa dinners and garden feasts for the wedding party -- the most personal evening of your wedding week."
      heroImage="/images/blog/rehearsal-dinner-bali.jpg"
      heroImageAlt="Long table outdoor rehearsal dinner setup with candles and tropical flowers at a Bali villa the night before a wedding"
      ogImage="/images/blog/rehearsal-dinner-bali.jpg"
      canonicalUrl="https://mychef.id/blog/rehearsal-dinner-bali"
      keywords={[
        'rehearsal dinner bali',
        'rehearsal dinner catering bali',
        'wedding rehearsal dinner bali',
        'pre wedding dinner bali',
        'rehearsal dinner villa bali',
        'wedding eve dinner bali',
        'rehearsal party catering bali',
        'private rehearsal dinner bali',
        'bali rehearsal dinner ideas',
        'wedding week dinner bali',
      ]}
      highlights={['10--50 Guests', 'Custom Menu Design', 'Full Event Coordination', 'From IDR 700K/person']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Plan My Rehearsal Dinner"
      ctaSubtext="Tell us your wedding week dates and vision -- we'll design a catering proposal within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Rehearsal Dinner Bali', 'https://mychef.id/blog/rehearsal-dinner-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Rehearsal Dinner Bali -- Private Chef Catering for the Night Before Your Wedding',
          description:
            'Private chef catering for Bali rehearsal dinners. Intimate villa dinners, garden feasts, and cocktail welcome parties for 10--50 guests. Full service coordination.',
          url: 'https://mychef.id/blog/rehearsal-dinner-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/rehearsal-dinner-bali.jpg',
        },
      ]}
    />
  )
}
