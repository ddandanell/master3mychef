import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Sparkles, Heart, Star, Camera } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Hen Party Bali',
    title: 'Why Bali Is Every Bride-to-Be\'s Dream Destination',
    body: `<p>Bali has become the undisputed capital of the global bachelorette party circuit — and for good reason. Infinity-pool villas, warm evenings, tropical flowers everywhere, and an energy that blends luxury with effortless fun. But as any seasoned Bali traveller knows, the difference between a great hen party and an unforgettable one often comes down to one thing: the food.</p>

    <p>Booking a restaurant for a group of 10–20 women on a bachelorette? That means fixed menus, shared tables with strangers, no control over the music, no room for decorations, and the inevitable wait for a table that isn't quite ready. A private chef changes everything. Your villa becomes the venue. The pool becomes the backdrop. The grazing table goes right where you want it — beside the pool, on the terrace, or spilling across the living room island.</p>

    <p>A myCHEF private chef arrives hours before your guests, transforms your villa kitchen and dining space, and creates food that looks as extraordinary as it tastes. Everything is styled to photograph. Colours are considered. Presentation is part of the service. And when the food is incredible, the whole atmosphere lifts — guests relax, champagne flows more freely, and the bride-to-be feels genuinely celebrated.</p>

    <p>We work with hen parties of 6 to 30 guests across Seminyak, Canggu, Ubud, Uluwatu, and Nusa Dua. Whether you want a lazy bottomless brunch beside the pool, an epic grazing table that takes over the terrace, a candlelit dinner party for 12, or a styled picnic with bouquets and personalised touches — we have done it dozens of times and we know exactly how to make it exceptional.</p>

    <p>Below you will find our most popular bachelorette packages, what goes into a myCHEF grazing table, how we approach food presentation for Instagram-worthy results, and all the practical answers you need to book with confidence. We cater hen parties across Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and Jimbaran.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: 'Hen Parties Designed by a Team That Gets It',
    body: `<p>myCHEF has served more than 560 villas across Bali, and bachelorette parties are one of our favourite events to cater. We understand that a hen party is as much about the photographs as the food — so every grazing table, every brunch spread, and every dessert display is styled to match your aesthetic. Our chefs have built tables for bridal parties of every size, from intimate groups of 6 to full villa takeovers of 30.</p>

    <p>We operate across Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and Jimbaran, bringing the same attention to detail whether your villa is a clifftop estate in Uluwatu or a jungle retreat in Ubud. From the first setup photo to the final clean-up, we handle the logistics so the bride and her guests can simply enjoy the day.</p>`,
  },
  {
    id: 'experiences',
    type: 'features' as const,
    subtitle: 'Signature Packages',
    title: 'Bachelorette Experiences We Love to Create',
    features: [
      {
        icon: Sparkles,
        title: 'Bottomless Brunch',
        desc: 'Mimosas, eggs benedict, tropical fruit platters, acai bowls, avocado toast, crêpe station, fresh juice bar, and a grazing spread to keep things flowing. The ultimate lazy-morning-by-the-pool experience. IDR 700K/person — alcohol client-supplied or we advise local suppliers.',
      },
      {
        icon: Heart,
        title: 'Grazing Table Goddess',
        desc: 'An epic styled grazing table built around the villa aesthetic: aged cheeses, cured meats, seasonal fruits, honeycomb, artisan crackers, dips, sweets, and fresh flowers woven throughout. A centrepiece that doubles as content. IDR 700K/person for groups of 8–30.',
      },
      {
        icon: Star,
        title: 'Champagne Dinner Party',
        desc: 'An elegant 4-course dinner served to your table. Champagne on arrival, rose petal entrance, a menu that moves from light starter through to a showstopper dessert. Perfect for the bride who wants the full sit-down experience. IDR 700K/person.',
      },
      {
        icon: Camera,
        title: 'Insta-Perfect Picnic',
        desc: 'A fully styled poolside or garden picnic spread with low cushion seating, wicker baskets, fresh bouquets, personalised name tags, and a curated grazing and charcuterie spread. Built for content, built for memories. IDR 700K/person.',
      },
    ],
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'Menu Ideas',
    title: 'What Makes Bachelorette Food Special',
    body: `<p>Bachelorette catering is different from a standard dinner party in one important way: the food needs to perform visually, not just taste exceptional. Guests will photograph every course. The spread will appear on Instagram stories before anyone has taken a single bite. myCHEF chefs understand this completely — and they design each service accordingly.</p>

    <p><strong>Colour and freshness first:</strong> tropical fruits (dragon fruit, mango, rambutan, passion fruit), edible flowers, microgreens, and vibrant sauces create the palette. Everything is plated with the same care you would expect at a fine dining restaurant, even when the format is relaxed and grazing.</p>

    <p><strong>Brunch favourites that always land:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Açai bowls with fresh tropical granola, coconut flakes, and fruit</li>
      <li>Smashed avocado on sourdough with poached eggs and dukkah</li>
      <li>Live crêpe station — sweet and savoury, made to order</li>
      <li>Fresh juice and smoothie bar: watermelon, pineapple, green, mango</li>
      <li>Eggs benedict with house hollandaise (classic, salmon, or truffle)</li>
      <li>Miniature pastry selection: croissants, danishes, brioche buns</li>
    </ul>

    <p><strong>Dessert moments worth planning around:</strong> Tiramisu served in individual glass cups (photographs beautifully), a croquembouche tower for the bride's table, macarons in the wedding colour palette, individual chocolate fondants served warm with vanilla gelato, and a naked cake with fresh flowers for the cutting moment.</p>

    <p><strong>Grazing table deep-dive:</strong> A myCHEF grazing table is not a cheese board scaled up. It is a designed installation. The chef builds the table in layers — height variations using wooden boards and slate platters, ingredient clusters that create visual texture, fresh florals and greenery tucked between food items, drizzled honeys and scattered nuts as finishing details. Build time is 1.5–2 hours for a standard table; up to 3 hours for large-format (20+ guests). The table is then maintained and replenished throughout service. Guests return to it again and again rather than clearing it in one pass.</p>`,
  },
  {
    id: 'grazing',
    type: 'content' as const,
    subtitle: 'Grazing Tables',
    title: 'myCHEF Grazing Tables: What\'s Included & Pricing',
    body: `<p>Our grazing tables are one of the most requested bachelorette products we offer — and one we are genuinely proud of. Here is what goes into each one and how pricing scales with group size.</p>

    <p><strong>What every grazing table includes:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>3–4 cheese varieties (aged cheddar, brie or camembert, manchego, a local Balinese artisan cheese)</li>
      <li>2–3 cured meat selections (prosciutto, salami, bresaola)</li>
      <li>Seasonal fresh fruit (grapes, berries, figs, sliced stone fruit)</li>
      <li>Mixed nuts, dried fruits, and honeycomb</li>
      <li>Artisan crackers, sourdough slices, and grissini</li>
      <li>3–4 dips and spreads (hummus, whipped feta, fig jam, olive tapenade)</li>
      <li>Fresh florals woven into the display (coordination with florists available at additional cost)</li>
      <li>Custom signage available (bride's name, wedding date, "wifey for lifey" — you choose)</li>
    </ul>

    <p><strong>Sizing and pricing guide:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>6–8 guests: 1.2m table — IDR 2,800,000 total</li>
      <li>10–15 guests: 2m table — IDR 4,500,000 total</li>
      <li>16–20 guests: 3m table — IDR 6,500,000 total</li>
      <li>21–30 guests: 4–5m table — IDR 9,000,000–12,000,000 total</li>
    </ul>

    <p>Setup time is included. The largest table we have built was 6 metres for a villa wedding with 80 guests. For parties of 30+, we recommend pairing the grazing table with a hot canapé or buffet station to ensure guests are well fed across a longer event.</p>

    <p>All grazing tables are built on-site at your villa on the morning of the event. We bring all equipment, serving boards, and props. You supply the table surface; we supply everything else.</p>`,
  },
  {
    id: 'photography',
    type: 'content' as const,
    subtitle: 'Food Presentation',
    title: 'Instagram-Ready Food for Your Hen Party',
    body: `<p>Bali bachelorettes are photographed more thoroughly than almost any other event type we cater. Every dish, every spread, every toast moment will be captured and shared. myCHEF chefs treat food styling as a core part of the service — not an afterthought.</p>

    <p><strong>Coordinating with your party theme:</strong> Before any event, we ask about your colour palette and aesthetic. White and gold bridal chic? We plate on white marble, use gold serving spoons, and lean toward light creams and soft florals. Tropical maximalist? Banana leaf liners, bright fruit towers, orchid garnishes throughout. Boho neutral? Earthy terracotta platters, dried pampas accents, warm tones in every ingredient choice. The food becomes part of the overall event design — not something separate that clashes with the table settings.</p>

    <p><strong>How our chefs approach food presentation for hen parties:</strong> Every chef is briefed that bachelorette events are content-first occasions. That means height and dimension on every platter, generous layering on grazing tables, consistent colour accent work, and clean plating edges on served dishes. We also time courses to sync with photo moments — the crêpe station opens after the first toast so guests are ready and present, the dessert display comes out with a champagne pour.</p>

    <p>The result is food that looks as good as it tastes — and gives your villa the editorial quality that hen party memories deserve.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Booking Your Hen Party Catering in Three Steps',
    body: `<p><strong>Step 1 — Share your vision:</strong> Message us on WhatsApp with your villa, group size, date, and any theme or colour palette. We send package options and menu inspiration within 2 hours.</p>

    <p><strong>Step 2 — Design your menu:</strong> We tailor the grazing table, brunch spread, or dinner menu to your aesthetic and dietary requirements. You confirm once, and we lock in the chef and team.</p>

    <p><strong>Step 3 — Celebrate:</strong> The chef and team arrive 2–3 hours before guests, build the table, set the drinks station, and manage everything from the first photograph to the final toast. You host; we handle the rest.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Questions',
    title: 'Frequently Asked',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Event',
    title: 'Let\'s Make Your Hen Party Unforgettable',
    body: 'Tell us your villa, group size, and vision — we will send menu inspiration and a quote within 2 hours.',
    primaryAction: {
      label: 'Plan Your Hen Party Feast',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20bachelorette%20party%20at%20a%20Bali%20villa%20and%20need%20catering.',
      external: true,
    },
    secondaryAction: { label: 'Get a Quote', href: '/quote' },
  },
]

const FAQS = [
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

const RELATED_PAGES = [
  { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Private chef and catering options for bachelor parties at Bali villas.' },
  { label: 'Proposal Dinner Bali', href: '/proposal-dinner', desc: 'Romantic proposal dinner setup with private chef at your Bali villa.' },
  { label: 'Anniversary Dinner', href: '/events/anniversaries', desc: 'Intimate anniversary dinner catering for couples at Bali villas.' },
  { label: 'Grazing Table Bali', href: '/catering/grazing-tables', desc: 'Full details on myCHEF grazing tables — sizing, pricing, and styling options.' },
  { label: 'Pricing Guide', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and group sizes.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for planning a villa event in Bali.' },
]

export default function BachelorettePartyCateringPage() {
  return (
    <PremiumPage
      slug="blog/bachelorette-party-bali-catering"
      title="Bachelorette Party Bali: Catering & Private Chef"
      description="Gorgeous catering for your Bali bachelorette party. Bottomless brunch, grazing tables, champagne setups, themed dessert bars. Groups 6–30. From IDR 700K/person."
      seoTitle="Bachelorette Party Bali | Catering, Grazing Tables & Brunch | myCHEF"
      seoDescription="Gorgeous catering for your Bali bachelorette party. Bottomless brunch, grazing tables, champagne setups, themed dessert bars. Groups 6–30. From IDR 700K/person."
      canonicalUrl="https://mychef.id/blog/bachelorette-party-bali-catering"
      h1="Bachelorette Party Bali: Catering & Private Chef"
      subtitle="Gorgeous Food, Bottomless Brunch & Grazing Tables for Your Hen Party"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Beautiful grazing table setup for a bachelorette party at a Bali villa by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['bachelorette party bali', 'hen party bali catering', 'hens night bali chef', 'bachelorette catering bali villa', 'bridal party bali food']}
      highlights={['Experiences', 'Menu Ideas', 'Grazing Tables', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Bachelorette Party Bali Catering', 'https://mychef.id/blog/bachelorette-party-bali-catering', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bachelorette Party Bali: Catering & Private Chef',
          description: 'Gorgeous catering for your Bali bachelorette party. Bottomless brunch, grazing tables, champagne setups, themed dessert bars. Groups 6–30. From IDR 700K/person.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bachelorette-party-bali-catering' },
          url: 'https://mychef.id/blog/bachelorette-party-bali-catering',
          wordCount: 1700,
          keywords: 'bachelorette party bali, hen party bali catering, hens night bali chef',
        },
      ]}
      ctaText="Plan Your Hen Party Feast"
      ctaSubtext="Tell us your villa, group, and vision — we'll send inspiration and a quote within 2 hours."
    />
  )
}
