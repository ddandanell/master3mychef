import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Star, Utensils, Users, Flame, Heart, Sparkles } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Festive Season Dining',
    title: 'Private Chef Christmas & New Year Menus in Bali',
    body: `<p>Bali at Christmas and New Year is an experience unlike anywhere else. The villas are full, the energy is electric, and sunset cocktail hours stretch into long communal dinners under the stars — or under covered pavilions when December rains arrive. It is the single busiest dining period of the year for private chefs on the island.</p>
    <p>Whether you're planning an intimate Christmas Eve dinner for four, a villa Christmas Day feast for twenty, or a New Year's Eve event for fifty guests, the approach is different from a standard booking. This guide covers what makes a great festive menu in Bali, which formats work for which event sizes, and how to ensure your holiday dinner is the memory you came here to make. For year-round menu context, see our <a href="/blog/bali-catering-menu" class="text-[#C5A028] hover:underline font-medium">complete Bali catering menu guide</a>.</p>`,
  },
  {
    id: 'what-makes-festive',
    type: 'content' as const,
    subtitle: 'The Festive Approach',
    title: 'What Makes a Great Festive Menu in Bali',
    body: `<p>The best festive menus in Bali don't simply reproduce a European Christmas dinner in a tropical setting — they blend the comfort and ceremony of the festive season with the ingredients and techniques that make Bali exceptional.</p>

    <p><strong>The tension to resolve:</strong> Guests want the emotional resonance of Christmas (turkey, roast, Yule flavours, sparkling wine, proper desserts) but they're in Bali — and the best of what Bali offers is quite different. The chefs who navigate this best create menus where every dish is unmistakably festive, but ingredients are Balinese wherever possible: local duck or suckling pig instead of factory-farmed turkey, kabocha pumpkin in place of butternut squash, palm sugar caramel in the Christmas pudding, pandan-infused rice for the Christmas feast, local sparkling arak cocktails alongside Champagne.</p>

    <p><strong>What season brings:</strong> December and January are wet-season months. Peak wet-season produce (durian, jackfruit, Highland strawberries, Kintamani avocados, wild mushrooms, fresh soursop) is available and at its best. A Christmas dessert featuring fresh Bedugul strawberries and durian cream alongside a classic Yule log is a genuinely special combination — ingredients you cannot get at this quality anywhere else in the world.</p>

    <p><strong>The format question:</strong> Festive events run across the full size range. Christmas Eve dinner is typically intimate — 2–12 guests, plated. Christmas Day is more communal — 8–30 guests, buffet or family-style. New Year's Eve skews large — 20–80 guests, reception format with passed canapés, dinner buffet, and midnight dessert station. See our <a href="/blog/buffet-vs-plated-service-bali" class="text-[#C5A028] hover:underline font-medium">buffet vs plated guide</a> for the full format comparison.</p>`,
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'Sample Menus',
    title: 'Festive Season Menu Examples',
    body: `<p>These menus represent what myCHEF chefs typically design for Christmas and New Year events in Bali. All are fully customisable.</p>

    <p><strong>1. Christmas Eve Dinner (4–8 guests) — Plated, 5 courses</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Amuse: foie gras on brioche, jackfruit chutney, Champagne jelly</li>
      <li>Starter: Jimbaran prawn and Bedugul avocado tart, citrus gel, caviar (optional)</li>
      <li>Soup: wild mushroom consommé, truffle oil, crispy shallots</li>
      <li>Main: Balinese duck breast with orange-tamarind reduction, kabocha purée, roasted Kintamani vegetables</li>
      <li>Dessert: deconstructed Yule log with fresh Bedugul strawberries, durian cream, chocolate soil, edible gold</li>
    </ul>

    <p><strong>2. Christmas Day Feast (12–25 guests) — Hybrid Buffet + Plated Starter</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Cocktail hour: passed canapés (smoked duck blini, prawn crackers with sambal, goat cheese crostini)</li>
      <li>Seated starter for all: plated seared tuna with ponzu and Highland avocado</li>
      <li>Main buffet: whole-roasted suckling pig (babi guling, carving station), braised short rib, roasted Balinese pumpkin, grilled vegetables, rice and bread station</li>
      <li>Dessert table: Christmas pudding with brandy butter, Yule log, fresh fruit pavlova, Bedugul strawberry tarts</li>
    </ul>

    <p><strong>3. New Year's Eve Gala (25–60 guests) — Full Event Format</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>17:00–20:00: cocktail hour with 6 passed canapé varieties, Champagne station, fresh coconut drinks</li>
      <li>20:00–22:30: gala dinner buffet — premium proteins (duck, whole fish, short rib), 4 salads, 3 vegetable dishes, rice and bread, dessert station open throughout</li>
      <li>23:00–midnight: light finger food replenishment, Champagne/arak countdown service</li>
      <li>Midnight: individual plated dessert served simultaneously — mini Champagne panna cotta, gold-dusted, with a sparkler</li>
    </ul>

    <p><strong>4. New Year's Day Recovery Brunch (8–16 guests) — Relaxed Buffet</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Smoothie bar: soursop-coconut, mango-turmeric, green detox</li>
      <li>Eggs station: made-to-order eggs with Highland vegetables</li>
      <li>Grazing board: smoked salmon, Highland avocado, artisan breads, fresh fruit</li>
      <li>Balinese offering: nasi goreng station with crispy egg, prawn crackers, pickles</li>
    </ul>

    <p>For <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">festive pricing details</a> or to discuss a custom menu, <a href="/catering" class="text-[#C5A028] hover:underline font-medium">contact the catering team</a>.</p>`,
  },
  {
    id: 'by-occasion',
    type: 'features' as const,
    subtitle: 'By Event Type',
    title: 'Festive Dining by Occasion',
    features: [
      {
        icon: Heart,
        title: 'Christmas Eve Dinner',
        desc: 'The most intimate of the festive nights — 2–12 guests, plated, candlelit. A 5-course tasting menu with local duck or suckling pig as the centrepiece, festive spicing, and a dramatic dessert featuring seasonal Balinese produce. Book 3–4 weeks in advance — this is the most requested festive slot.',
      },
      {
        icon: Users,
        title: 'Christmas Day Feast',
        desc: 'Groups of 10–30 gather around a shared table. Family-style service or a hybrid (plated starter, buffet mains) works best. A carving station with whole suckling pig or roasted duck is the centrepiece. Afternoon poolside grazing replaces the traditional post-Christmas-dinner collapse.',
      },
      {
        icon: Sparkles,
        title: 'New Year\'s Eve Gala',
        desc: 'Bali\'s most in-demand catering night. Full event catering — cocktail hour, gala dinner, midnight moment. Groups from 20 to 80+ guests. Plan the timeline around fireworks visibility from the villa. A midnight champagne dessert service, served simultaneously to all guests, is the signature touch.',
      },
      {
        icon: Star,
        title: 'New Year\'s Day Brunch',
        desc: 'The morning after requires a restorative spread — light, fresh, hydrating. Smoothie bars, eggs stations, grazing boards, and nasi goreng are the standard structure. Timing is flexible (guests arrive when they\'re ready). This is the most low-pressure event of the festive period.',
      },
      {
        icon: Flame,
        title: 'Festive Cocktail Parties',
        desc: 'Standing receptions for 20–80 guests — canapés, grazing stations, passed drinks. Perfect for villa owners hosting mixed groups of friends and associates. A Champagne tower, arak cocktail bar, and 8–10 canapé varieties with a grazing board centrepiece creates an elegant non-dinner format.',
      },
      {
        icon: Utensils,
        title: 'Multi-Night Villa Stays',
        desc: 'Week-long festive villa stays require menu variety across multiple evenings. A good chef plans the week as a progression: casual first night, building to the Christmas Eve centrepiece, then relaxed recovery meals, climaxing with New Year\'s Eve. Each night should feel distinct.',
      },
    ],
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'Planning & Booking',
    title: 'How to Book a Festive Private Chef in Bali',
    body: `<p>The festive period requires earlier action than any other time of year. Here is the practical guide:</p>

    <p><strong>Book by early December at the absolute latest.</strong> The best myCHEF chefs fill their Christmas Eve, Christmas Day, New Year's Eve, and NYD slots weeks in advance. If you're planning a villa holiday that includes any of these dates, confirm your chef as soon as your villa booking is made — even if that's months ahead. A deposit holds the slot.</p>

    <p><strong>Christmas Eve and New Year's Eve are the hardest slots.</strong> These two evenings are always the first to fill. If you need a chef specifically for 24 December or 31 December, treat those bookings with the same urgency as booking a popular villa or flight — don't leave it until arrival.</p>

    <p><strong>Share your guest list and dietary requirements early.</strong> Festive groups are often the most complex from a dietary perspective — international guests, dietary restrictions across generations, children who won't eat adventurously. Share the full profile at booking, not the day before. Your chef can design around any combination of requirements if they know in advance.</p>

    <p><strong>Discuss the menu approach during the booking call.</strong> Do you want a Bali-forward festive menu (local proteins, Balinese spicing, tropical seasonal produce)? Or a more traditionally Western Christmas menu executed with local ingredients where possible? Or a genuine fusion? There's no wrong answer — but the discussion should happen at booking, not on the day.</p>

    <p><strong>Confirm the event setup.</strong> Covered or open-air? Pool deck or indoor villa dining room? Sound system for music? Festive decorations (some chefs partner with decorating services)? The more your chef knows about the venue and setup, the better they can plan mise-en-place, service flow, and plating logistics.</p>

    <p><strong>Budget for a premium.</strong> Festive pricing reflects the demand, the complexity of events, and the premium produce involved. A standard private chef dinner runs IDR 800,000–1,300,000/person; festive menus typically run IDR 1,200,000–2,500,000/person depending on courses, occasion, and group size. See the <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">full pricing guide</a> for details. New Year's Eve gala format (cocktail hour + dinner) is priced as an event, not per-course — discuss directly with the team.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    title: 'Book Your Festive Chef in Bali',
    body: "Christmas Eve, Christmas Day, New Year's Eve — slots fill weeks in advance. Don't leave it too late.",
    primaryAction: { label: 'Check Festive Availability', href: 'https://wa.me/628113803488?text=Hi%20myCHEF%2C%20I%20want%20to%20book%20a%20festive%20season%20private%20chef' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'How far in advance should I book a private chef for Christmas in Bali?',
    answer: 'Book as soon as your villa is confirmed — ideally 4–6 weeks before Christmas Eve and New Year\'s Eve. These are the two highest-demand slots of the year and the best chefs fill them weeks in advance. A deposit holds your slot.',
  },
  {
    question: 'Can a private chef in Bali cook a traditional Christmas dinner?',
    answer: 'Yes. myCHEF chefs can prepare traditional Western Christmas menus (roast turkey, Christmas pudding, mince pies) or a Bali-forward festive menu using local proteins like duck and suckling pig. Most guests prefer a blend — Christmas flavours and ceremony, but using the best local Balinese ingredients available in December.',
  },
  {
    question: 'How much does a private chef cost for New Year\'s Eve in Bali?',
    answer: 'New Year\'s Eve gala format (cocktail hour + dinner for 20+ guests) is priced as a full event engagement rather than per-course. Intimate NYE dinners (4–12 guests, plated) typically run IDR 1,500,000–2,500,000/person depending on courses and complexity. Contact the myCHEF team for a bespoke quote.',
  },
  {
    question: 'Can a private chef serve both a Christmas dinner and a New Year\'s Eve event?',
    answer: 'Yes — many villa guests book myCHEF for the full festive period, covering Christmas Eve dinner, Christmas Day feast, and New Year\'s Eve gala across a 7–10 day stay. Multi-event bookings allow the chef to plan the week as a culinary journey with natural progression between events.',
  },
  {
    question: 'Are there vegetarian or vegan festive menus available?',
    answer: 'Absolutely. A fully plant-based festive menu in Bali is genuinely exciting — jackfruit as the centrepiece protein, wild mushroom wellington, Highland vegetable roasts, and a seasonal fruit dessert table with Bedugul strawberries and soursop sorbet. Share dietary requirements at booking and the chef will design accordingly.',
  },
  {
    question: 'What happens if it rains on Christmas Eve or New Year\'s Eve?',
    answer: 'December is wet season in Bali. Afternoon showers are common; evening downpours are possible. A covered pavilion, indoor villa dining room, or a large terrace with temporary rain cover handles this gracefully. Your chef prepares regardless — the food experience is unaffected by rain. Discuss setup with your villa and we will design the service flow accordingly.',
  },
]

const RELATED_PAGES = [
  { href: '/blog/bali-catering-menu', label: 'Bali Catering Menu Guide', desc: 'Year-round Bali catering menu ideas, seasonal ingredients, and pricing.' },
  { href: '/blog/wet-season-menu-bali', label: 'Wet Season Menu Guide', desc: 'Durian, jackfruit, and Highland produce — November to March dining.' },
  { href: '/blog/buffet-vs-plated-service-bali', label: 'Buffet vs Plated Service', desc: 'Which catering format is right for your Bali villa event?' },
  { href: '/pricing', label: 'Private Chef Pricing', desc: 'Full pricing guide for private chefs and catering in Bali.' },
]

const extraJsonLd = [
  breadcrumbSchema('Festive Season Menu Guide', 'https://mychef.id/blog/festive-season-menu-bali', 'Journal', 'https://mychef.id/journal'),
  faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Private Chef Christmas & New Year Menus in Bali',
    description: 'Planning a private chef dinner in Bali for Christmas or New Year? Menu ideas, booking advice, and festive season dining guide for villa events.',
    url: 'https://mychef.id/blog/festive-season-menu-bali',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    author: { '@type': 'Organization', name: 'myCHEF Bali' },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF',
      logo: { '@type': 'ImageObject', url: 'https://mychef.id/logo.png' },
    },
    keywords: ['private chef christmas bali', 'new year eve private chef bali', 'christmas dinner bali villa', 'festive menu bali', 'bali new year dinner'],
  },
]

export default function FestiveSeasonMenuPage() {
  return (
    <PremiumPage
      slug="blog/festive-season-menu-bali"
      title="Private Chef Christmas & New Year Menu Bali | Festive Dining Guide"
      description="Plan your Christmas Eve dinner, Christmas Day feast, or New Year's Eve gala with a private chef in Bali. Menu ideas, booking tips, and festive season dining guide."
      seoTitle="Private Chef Christmas & New Year Menu Bali | Festive Dining Guide"
      canonicalUrl="https://mychef.id/blog/festive-season-menu-bali"
      h1="Festive Season Menu Guide"
      subtitle="Christmas & New Year Private Chef Dining in Bali"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Festive private chef dinner at a Bali villa — Christmas and New Year catering"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['private chef christmas bali', 'new year eve private chef bali', 'christmas dinner bali villa', 'festive menu bali', 'bali new year dinner']}
      highlights={['Christmas Eve Dinner', "New Year's Eve Gala", 'Festive Menus', 'Book Early']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={extraJsonLd}
    />
  )
}
