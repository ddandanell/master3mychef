import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Babi Guling Catering in Bali — Authentic Balinese Suckling Pig for Your Event',
    body: `Babi guling — Bali's iconic whole-roasted suckling pig — is one of the most celebrated dishes in Indonesian cuisine. A ceremonial food turned cultural feast, babi guling has long been the centrepiece of Balinese celebrations: royal ceremonies, temple festivals, village weddings, and family gatherings.

For visitors and residents hosting events in Bali, a babi guling feast is the ultimate way to offer guests an authentic, memorable, and deeply local culinary experience. myCHEF organises traditional babi guling catering for villa events, destination weddings, corporate functions, and private group dinners across Bali.

We work with experienced Balinese juru babi guling — traditional suckling pig specialists — who prepare the pig using time-honoured spice pastes, slow-roasted over wood fire for 4–5 hours until the skin is crisp and the meat is tender. Served with lawar, nasi kuning, sate lilit, and traditional condiments, a babi guling feast is an experience that no restaurant can replicate.`,
  },
  {
    id: 'what-is',
    type: 'content',
    title: 'What Is Babi Guling? A Cultural Context for Guests',
    body: `Babi guling translates literally as "rotating pig" — referring to the traditional method of rotating the whole pig on a bamboo spit over an open wood fire. The preparation is as ceremonial as the eating. The pig is rubbed inside and out with a complex base genep spice paste: turmeric, ginger, galangal, lemongrass, garlic, shallots, chilli, and aromatic herbs. It then roasts slowly for four to five hours, basted repeatedly until the skin achieves its legendary crispiness.

In Balinese Hindu tradition, babi guling is a sacred offering prepared for religious ceremonies and rites of passage. Over time it has become one of Bali's most famous culinary exports, with visitors making pilgrimages to legendary babi guling stalls in Gianyar and Denpasar.

For your event, serving babi guling signals cultural fluency and generosity. Guests who have tried restaurant versions are often astonished by the quality of a freshly prepared ceremonial-style babi guling — the flavour is simply different when prepared by a Balinese specialist with the right spice paste, fire, and time.`,
  },
  {
    id: 'what-served',
    type: 'content',
    title: 'What\'s Served with Babi Guling at a Feast',
    body: `A complete babi guling feast includes the whole roasted pig plus a spread of traditional Balinese accompaniments:

**The Pig** — Carved tableside into crispy skin (the most prized part), tender meat, offal satay, and sausage. Every part is served.

**Nasi Kuning** — Yellow turmeric rice, steamed and formed into a festive cone (tumpeng) as the traditional feast centrepiece.

**Lawar** — Finely chopped mixed vegetables, herbs, coconut, and spiced minced meat. Comes in two versions: white lawar (no blood) and traditional lawar. We serve white lawar by default at events.

**Sate Lilit** — Minced fish or pork mixed with grated coconut and spices, shaped onto lemongrass skewers and grilled. A Balinese speciality distinct from the peanut-sauce sate found elsewhere in Indonesia.

**Pesan Bali** — Spiced minced meat or fish wrapped in banana leaf and steamed. Fragrant and complex.

**Crispy Skin** — Served separately in generous portions. The most requested and fastest-disappearing element of any babi guling feast.

**Sambal Matah** — Bali's signature raw shallot and lemongrass sambal. Essential accompaniment.

**Plecing Kangkung** — Water spinach with tomato and shrimp paste sambal. A classic Balinese vegetable side.

**Drinks** — We coordinate traditional Balinese arak cocktails (arak madu — honey arak), fresh coconut water, and non-alcoholic options.`,
  },
  {
    id: 'sizing',
    type: 'content',
    title: 'Babi Guling Feast Sizing and Pricing',
    body: `One whole pig typically feeds 40–60 people as part of a full feast spread. For smaller or larger groups, we adjust accordingly:

**Small Group (20–30 guests)**
Half pig + full accompaniment spread. Ideal for intimate villa dinners and private family celebrations. From IDR 5,500,000 total.

**Medium Group (30–60 guests)**
One whole pig + full Balinese feast spread. The classic format. From IDR 9,500,000 total.

**Large Group (60–120 guests)**
Two whole pigs + expanded side dishes. Requires advance notice for sourcing. From IDR 18,000,000 total.

**Event-Scale (120+ guests)**
Multiple pigs with dedicated roasting team on-site. Price on enquiry. Requires 2+ weeks advance booking.

All packages include spice preparation, wood-fire roasting, transportation to your villa, carving service, and presentation of all accompaniments. Serving staff are included in larger packages; add service staff for smaller bookings at standard event staff rates.

A 50% deposit holds your booking. Balance due the day before the event.`,
  },
  {
    id: 'logistics',
    type: 'content',
    title: 'How We Organise a Babi Guling Feast at Your Villa',
    body: `**Step 1 — Confirm your order**
We confirm guest count, event date, villa location, and any dietary restrictions. Note: babi guling is a pork dish and is not suitable for Muslim or Jewish guests. For mixed groups, we always supplement with non-pork dishes so all guests are catered for.

**Step 2 — Pig preparation begins the night before**
The juru babi guling prepares the spice paste and begins marinating the pig the evening before your event. This cannot be rushed — the 12+ hour marination is what makes the flavour exceptional.

**Step 3 — Roasting day (4–5 hours)**
On the morning of your event, roasting begins at the specialist's kitchen. The pig rotates slowly over wood fire for 4–5 hours. Your chef and team arrive at your villa 1.5–2 hours before the feast to set up, prepare accompaniments, and arrange the presentation.

**Step 4 — Tableside carving and service**
The whole pig is presented at the table before carving. Guests choose their cuts and portions. Service staff assist with distribution.

**Step 5 — Cleanup**
All setup materials, food waste, and kitchen equipment are removed by the team before departure.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book Babi Guling Catering for Your Bali Event',
    body: `Tell us your event date, location, and approximate guest count. We'll confirm availability with our specialist team and send a full feast proposal within 24 hours.`,
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
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'Full catering for villa celebrations' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Large Group Catering', href: '/group-villa-dinner-packages-bali', desc: 'Catering solutions for 30+ guests' },
  { label: 'Indonesian Street Food', href: '/blog/indonesian-street-food-private-chef-bali', desc: 'Authentic Indonesian cuisine at your villa' },
  { label: 'BBQ Catering Bali', href: '/catering/bbq-catering', desc: 'Outdoor grill and BBQ packages' },
  { label: 'Grazing Table Bali', href: '/catering/grazing-tables', desc: 'Styled boards and charcuterie for events' },
]

export default function BabiGulingCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/babi-guling-catering-bali"
      title="Babi Guling Catering Bali — Traditional Balinese Suckling Pig Feast for Events"
      seoTitle="Babi Guling Catering Bali — Whole Roasted Suckling Pig | myCHEF"
      description="Authentic babi guling catering for villa events in Bali. Traditional Balinese suckling pig feast with lawar, sate lilit, and ceremonial accompaniments."
      seoDescription="Babi guling catering for villa events in Bali. Authentic whole-roasted suckling pig by Balinese specialists. Feast spread: lawar, sate lilit, nasi kuning."
      h1="Babi Guling Catering Bali — Authentic Suckling Pig Feast for Villa Events"
      subtitle="Traditional Balinese suckling pig, slow-roasted by specialists and served with a full ceremonial feast spread — the ultimate cultural dining experience for villa guests."
      heroImage="/images/blog/babi-guling-catering-bali.jpg"
      heroImageAlt="Whole roasted babi guling suckling pig being carved at a Bali villa feast with traditional Balinese accompaniments"
      ogImage="/images/blog/babi-guling-catering-bali.jpg"
      canonicalUrl="https://mychef.id/blog/babi-guling-catering-bali"
      keywords={[
        'babi guling bali',
        'babi guling catering bali',
        'suckling pig bali',
        'roast pig catering bali',
        'babi guling event bali',
        'traditional balinese catering',
        'balinese feast bali',
        'suckling pig feast bali',
        'babi guling villa bali',
        'whole pig catering bali',
      ]}
      highlights={['Wood-Fire Roasted', 'Balinese Specialists', 'Full Feast Spread', 'From IDR 5.5M']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Babi Guling Feast"
      ctaSubtext="Tell us your event date and guest count — we'll confirm with our specialist team within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Babi Guling Catering Bali', 'https://mychef.id/blog/babi-guling-catering-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Babi Guling Catering Bali — Traditional Suckling Pig Feast for Villa Events',
          description:
            'Authentic babi guling catering for villa events in Bali. Traditional Balinese whole-roasted suckling pig prepared by specialists, with full ceremonial feast spread.',
          url: 'https://mychef.id/blog/babi-guling-catering-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/babi-guling-catering-bali.jpg',
        },
      ]}
    />
  )
}
