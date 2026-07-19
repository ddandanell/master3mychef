import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Grazing Tables in Bali — Styled Boards for Villa Events, Weddings & Celebrations',
    body: `A grazing table has become one of Bali's most requested event catering formats. Whether you're planning a villa wedding, a birthday celebration, a baby shower, or a corporate function, a beautifully styled grazing board creates a centrepiece that is as visual as it is delicious.

myCHEF designs and delivers custom grazing tables across Bali — from intimate boards for 10 guests to sprawling 6-metre tables for weddings with 150+ attendees. Every arrangement is built around fresh, seasonal ingredients sourced from Bali's local markets, layered with artisanal cheeses, cured meats, tropical fruits, crackers, dips, and edible florals.

The result is a format that guests graze from throughout the event, encourages conversation, photographs beautifully, and reduces the pressure of formal sit-down service. It works equally well as the sole food offering at a cocktail party or as a welcome board alongside a full catered dinner.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: 'What Goes on a myCHEF Grazing Table',
    body: `Our grazing tables are built in layers, combining textures, colours, and flavours that work together as a whole. A typical arrangement includes:

**Cheese selection** — A mix of hard and soft styles: aged Gouda, brie, camembert, manchego, and local Indonesian dairy cheeses where available. We accommodate dairy-free requests with nut-based alternatives.

**Charcuterie and proteins** — Prosciutto, salami, smoked salmon, bresaola, and grilled chicken skewers. For halal events, we substitute pork products with beef alternatives. Fully plant-based boards are available on request.

**Fresh and dried fruits** — Seasonal Bali fruits: rambutan, mangosteen, dragon fruit, starfruit, alongside international staples like grapes, figs, strawberries, and dried apricots.

**Crackers, breads, and crisps** — Variety of textures: water crackers, sourdough rounds, rice crackers, flatbreads, and flavoured crisps.

**Dips, spreads, and condiments** — Hummus, labneh, beetroot dip, honey, fruit preserves, whole-grain mustard, and Balinese sambals for a local flavour.

**Edible garnishes and florals** — Fresh herbs, micro greens, and edible flowers styled throughout the board for visual impact and photography.

**Accompaniments on request** — Sushi rolls, gado-gado skewers, spring rolls, mini sliders, or bruschetta can be added to expand the offering.`,
  },
  {
    id: 'sizing',
    type: 'content',
    title: 'Grazing Table Sizes and Guest Coverage',
    body: `We size grazing tables by guest count and event duration. As a general guide:

**Small Board (serves 10–20 guests)**
A single styled board, approximately 80cm × 50cm. Ideal for intimate villa dinners, small birthday celebrations, and baby showers. From IDR 1,200,000.

**Medium Table (serves 20–50 guests)**
A full table arrangement, approximately 2m × 80cm. Covers cocktail receptions, villa parties, and milestone celebrations. From IDR 2,800,000.

**Large Table (serves 50–100 guests)**
A multi-section arrangement spanning 3–4 metres. Popular for villa weddings, corporate events, and sizeable birthday parties. From IDR 5,500,000.

**Event-Scale Installation (100–200+ guests)**
Custom multi-table format with tiered displays, floral styling, and live replenishment by our team. Price on enquiry.

All sizes include delivery and setup at your venue. A setup fee applies for venues outside South Bali (Ubud, Amed, outer islands). Boards are designed to graze over 2–3 hours; longer events require replenishment planning.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'Popular Occasions for Grazing Tables in Bali',
    body: `**Villa Weddings** — Grazing tables work exceptionally well as welcome boards at villa wedding reception entries, as cocktail-hour food stations, or as a late-night snack spread after formal dinner service. Guests who aren't ready for the main meal, or who want something lighter, always find their way back.

**Birthday Celebrations** — A styled grazing table is a statement piece at any birthday villa party. Guests photograph it, gather around it, and remember it. It reduces the pressure of timing food service around speeches and entertainment.

**Baby Showers and Gender Reveals** — Grazing boards have replaced formal catering at many Bali baby showers. The relaxed format works perfectly with the social, informal energy of these events. We can theme colours and florals to match your event palette.

**Corporate Events and Product Launches** — Grazing tables at corporate events signal sophistication without the formality of sit-down catering. They work well for networking events, brand activations, team celebrations, and press functions.

**Hen Parties and Bachelorette Brunches** — A grazing board at a villa brunch is a relaxed, social way to feed a group without the structure of a full meal. Pairs naturally with Champagne service.

**Retreat Welcome Events** — Wellness and yoga retreats often use grazing tables for arrival welcome drinks, creating a gentle, abundant first impression for incoming guests.`,
  },
  {
    id: 'logistics',
    type: 'content',
    title: 'Delivery, Setup, and Logistics',
    body: `myCHEF handles all logistics from sourcing to setup:

**Sourcing** — Ingredients are purchased fresh on the day of your event from Bali's best markets and import suppliers. We confirm the final shopping list 48 hours before your event.

**Setup time** — Allow 45–90 minutes for setup depending on table size. We arrive at your villa with the full kit: board, risers, props, florals, and all ingredients. You don't need to supply anything.

**Staffing** — For events under 50 guests, the grazing table is styled and left for guests to serve themselves. For larger events, we can include a dedicated food station attendant who replenishes, restyles, and manages the table throughout the event.

**Dietary accommodations** — Halal, vegan, gluten-free, dairy-free, and nut-free versions are available. Communicate requirements when booking and we'll design accordingly.

**Return service** — We can return at the end of your event to clean up the table area, dispose of packaging, and leave the space clear.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book Your Grazing Table in Bali',
    body: `Share your event date, guest count, location, and any dietary requirements. We'll design a grazing proposal and confirm availability within a few hours.`,
  },
]

const faqs = [
  {
    question: 'How far in advance should I book a grazing table?',
    answer:
      'For standard events, 3–5 days is usually sufficient. For weddings and large events (50+ guests), 2–3 weeks is recommended to secure your date and plan sourcing. During peak season (June–September, December–January), add extra lead time.',
  },
  {
    question: 'Can you do a fully vegan or halal grazing table?',
    answer:
      'Yes. Our team designs fully vegan grazing boards using plant-based cheeses, seasonal fruits, vegetable-forward dips, and plant proteins. Halal boards replace all pork products with certified halal beef and chicken alternatives. Communicate your requirements when booking.',
  },
  {
    question: 'Do you deliver to villas outside Seminyak and Canggu?',
    answer:
      'We deliver across South Bali (Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua) at standard rates. Ubud and Pererenan have a delivery surcharge. For Amed, Lovina, and outer islands, contact us to confirm feasibility.',
  },
  {
    question: 'Can a grazing table feed guests as the main meal at a party?',
    answer:
      'A grazing table works well as the sole catering for cocktail-style events where guests mingle and graze continuously. For events where guests need a full meal, we recommend pairing the grazing table with our catering service (hot dishes, BBQ, or plated). We can design a combined offering.',
  },
  {
    question: 'How long does the grazing table last before food needs replenishing?',
    answer:
      'A well-stocked grazing table typically lasts 2–2.5 hours for the stated guest count. For longer events, we recommend a replenishment package — a second round of fresh ingredients delivered mid-event. We can staff a table attendant who manages replenishment continuously for large events.',
  },
]

const relatedPages = [
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Full catering for villa celebrations' },
  { label: 'BBQ Catering Bali', href: '/catering/bbq-catering', desc: 'Poolside and garden BBQ packages' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Waiters and service staff for your event' },
  { label: 'Baby Shower Catering', href: '/events/baby-showers', desc: 'Relaxed catering for baby showers' },
  { label: 'Bartender Hire Bali', href: '/in-villa-service/bartenders', desc: 'Professional bar staff for events' },
  { label: 'Large Group Catering', href: '/group-villa-dinner-packages-bali', desc: 'Catering solutions for 30+ guests' },
]

export default function GrazingTableBaliPage() {
  return (
    <PremiumPage
      slug="blog/grazing-table-bali"
      title="Grazing Table Bali — Styled Boards for Villa Weddings, Parties & Events"
      seoTitle="Grazing Table Bali — Custom Boards for Weddings & Parties | myCHEF"
      description="Custom grazing tables and charcuterie boards for villa events in Bali. Weddings, birthday parties, baby showers, corporate events."
      seoDescription="Grazing tables and charcuterie boards for villa events in Bali. Styled with local and imported ingredients. From IDR 1.2M. Delivery & setup included."
      h1="Grazing Table Bali — Styled Charcuterie Boards for Villa Events & Weddings"
      subtitle="Custom grazing boards for villa weddings, birthday parties, baby showers, and corporate events — built fresh, styled beautifully, delivered to your door."
      heroImage="/images/blog/grazing-table-bali.jpg"
      heroImageAlt="Styled grazing table with charcuterie, tropical fruits, cheese and edible florals at a Bali villa wedding"
      ogImage="/images/blog/grazing-table-bali.jpg"
      canonicalUrl="https://mychef.id/blog/grazing-table-bali"
      keywords={[
        'grazing table bali',
        'grazing platter bali',
        'grazing board bali',
        'charcuterie bali',
        'cheese platter bali',
        'grazing box bali',
        'wedding grazing table bali',
        'event grazing platter bali',
        'charcuterie board bali',
        'grazing table villa bali',
      ]}
      highlights={['From IDR 1.2M', 'Delivery & Setup Included', 'Halal & Vegan Options', '10–200+ Guests']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Order a Grazing Table"
      ctaSubtext="Share your event details and guest count — we'll design a custom grazing proposal."
      extraJsonLd={[
        breadcrumbSchema('Grazing Table Bali', 'https://mychef.id/blog/grazing-table-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Grazing Table Bali — Styled Charcuterie Boards for Villa Events & Weddings',
          description:
            'Custom grazing tables and charcuterie boards for villa events in Bali. Weddings, birthday parties, baby showers, corporate events. Halal and vegan options available.',
          url: 'https://mychef.id/blog/grazing-table-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/grazing-table-bali.jpg',
        },
      ]}
    />
  )
}
