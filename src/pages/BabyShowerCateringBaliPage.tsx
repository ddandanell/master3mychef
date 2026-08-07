import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Heart, Star, UtensilsCrossed, Sparkles } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Villa Baby Showers in Bali',
    title: 'Why Bali Villas Are the Perfect Setting for a Baby Shower',
    body: `<p>There is something quietly magical about celebrating new life in Bali. The island's lush greenery, warm light, and unhurried atmosphere create a backdrop that no restaurant can replicate — and a villa baby shower lets you inhabit all of it. No restaurant background noise, no fixed table time, no strangers walking past your group at the most personal moments. Just your people, a private pool area, and a setting that feels genuinely special.</p>

    <p>Bali villas offer the kind of physical space that makes a baby shower actually comfortable. There is room for guests to move, for children to run around if siblings are invited, for a dedicated grazing table, for a drinks station, and still for everyone to sit together without feeling cramped. The natural backdrops — tropical gardens, infinity pools, rice-field views — mean every photograph becomes memorable without any effort. The light at a Seminyak or Canggu villa at 11am is something a studio would charge thousands to replicate.</p>

    <p>A private chef transforms the gathering into a genuinely considered celebration. This is not just about food delivery — it is about someone who understands the occasion, who has briefed themselves on pregnancy dietary guidelines, who will lay out a grazing table that becomes the first thing guests photograph when they walk in. The myCHEF approach centres on three principles: beautiful food that is also safe for expectant mothers, themed presentation that matches your colour scheme and aesthetic, and a calm, professional service that removes logistics from the host's day entirely.</p>

    <p>Groups of 8–40 guests work comfortably in a villa format. The chef and team arrive early, set up while you prepare, and manage everything from arrival through to the final dessert. You host; we handle the rest. We serve baby shower groups across Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and Jimbaran.</p>`,
  },
  {
    id: 'why-mychef',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: 'Experience You Can Trust for Villa Baby Showers',
    body: `<p>myCHEF has served more than 560 villas across Bali, and baby showers are one of our most requested celebrations. Our chefs understand that this is not just another dinner — it is a gathering built around a guest of honour who deserves special care. Every baby shower brief is reviewed with pregnancy dietary guidelines in mind, every dish is clearly labelled, and every setup is designed to photograph beautifully from the moment guests arrive.</p>

    <p>We operate across Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, and Jimbaran — wherever your villa is located, we arrive early, set up quietly, and let you host without worrying about a single detail. From the first grazing table to the final clean-up, our team handles the logistics so you can focus on celebrating.</p>`,
  },
  {
    id: 'menu-safety',
    type: 'content' as const,
    subtitle: 'Pregnancy-Safe Catering',
    title: 'Food Safety for Expectant Mothers: What We Get Right',
    body: `<p>Catering for a baby shower is not the same as catering for any other gathering. When the guest of honour is pregnant, every dish on the table requires a second level of consideration — and in a group setting, clarity matters as much as safety itself. At myCHEF, all baby shower briefs include a specific pregnancy dietary guidelines review with the assigned chef before any planning begins.</p>

    <p><strong>What we avoid completely:</strong> raw or lightly-seared fish, sashimi, and raw shellfish are off the menu entirely. Soft, unpasteurised cheeses (brie, camembert, blue cheese) are replaced with safe alternatives. Raw or undercooked eggs — which can appear in aioli, hollandaise, and some dressings — are not used. Processed and cured meats without heating are also excluded. Any dish that could cause uncertainty is simply replaced with a safer version that is equally delicious.</p>

    <p><strong>What we actively feature:</strong> Fresh tropical fruits presented on boards or in elegant arrangements are always the visual centrepiece — Bali's mango, papaya, dragon fruit, and rambutan are spectacular and completely safe. Yogurt parfaits with granola and seasonal fruit are a crowd favourite at morning baby showers. Well-cooked seafood (grilled prawns, baked fish, seafood skewers) provides protein and elegance. Wholesome pastries, sandwiches, scones, and savoury tarts round out a spread that guests of all dietary backgrounds enjoy.</p>

    <p>We also label all dishes clearly on the day, noting which are pregnancy-safe so guests can guide the guest of honour confidently. Low-mercury fish options such as salmon and snapper are available for seafood components. All dishes are thoroughly cooked and temperature-managed throughout service. The result is a table that is not just safe — it is genuinely beautiful.</p>`,
  },
  {
    id: 'packages',
    type: 'features' as const,
    subtitle: 'Catering Packages',
    title: 'Baby Shower Catering Packages',
    features: [
      {
        icon: Heart,
        title: 'Grazing & Bubbles',
        desc: 'An elegant grazing table spread paired with a mocktail and sparkling station. Artisan boards of seasonal fruits, house-baked pastries, savoury bites, and dips — the ultimate social centrepiece. IDR 700K/person.',
      },
      {
        icon: Star,
        title: 'Afternoon Tea Party',
        desc: 'Classic afternoon tea format: finger sandwiches, freshly baked scones with clotted cream and jam, mini pastries, a celebration cake, and a selection of herbal and iced teas. Seated and elegant. IDR 700K/person.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Full Luncheon',
        desc: 'A three-course seated lunch with themed presentation. Starter, main, and dessert, all pregnancy-safe and beautifully plated. Table styling coordinated with your colour scheme. IDR 700K/person.',
      },
      {
        icon: Sparkles,
        title: 'Grand Celebration',
        desc: 'The full baby shower experience: grazing table on arrival, three-course seated lunch, and a dedicated dessert station. For groups who want the complete celebration with everything included. IDR 750K/person.',
      },
    ],
  },
  {
    id: 'styling',
    type: 'content' as const,
    subtitle: 'Food Presentation & Styling',
    title: 'When the Table Becomes the Decoration',
    body: `<p>In Bali villa baby showers, the food table is not just where guests eat — it is the first thing they see when they walk in, the backdrop for group photographs, and the visual centrepiece of the entire celebration. myCHEF chefs approach this with full awareness of the occasion.</p>

    <p><strong>Colour coordination:</strong> Whether you are planning a classic pink-and-white gender reveal, a serene yellow-and-white neutral palette, or a fresh tropical Bali aesthetic, the food presentation is calibrated to match. Fruits are selected by colour. Florals and greenery are coordinated with the food display. Custom dessert labels and printed tags carry the theme through to every detail.</p>

    <p><strong>The grazing table as focal piece:</strong> Our signature grazing presentations are built to photograph. Each board is arranged with height variation, colour contrast, and visual flow. Guests arrive and immediately reach for their phones — this is the reaction we design for. Fresh tropical flowers, woven baskets, and Balinese serving ware give the spread an unmistakably local luxury feel.</p>

    <p><strong>The golden hour photograph moment:</strong> For afternoon baby showers, the natural Bali light between 10am and noon creates the perfect conditions for photography without filters. We time the grazing table setup to be at its most pristine precisely when the first guests arrive. The result is photographs that look like a professional shoot — without a professional photographer needed.</p>`,
  },
  {
    id: 'mocktails',
    type: 'content' as const,
    subtitle: 'Drinks Station',
    title: 'Mocktails, Fresh Juices & the Non-Alcoholic Drinks Station',
    body: `<p>The drinks station is one of the most photographed elements of any baby shower, and for good reason — a beautifully set-up non-alcoholic bar signals that this celebration was thought through. At myCHEF, the mocktail and drinks station is our default setup for baby shower packages. No one has to ask for a non-alcoholic option; the non-alcoholic option IS the hero.</p>

    <p><strong>Our tropical mocktail menu includes:</strong> Virgin mojito with fresh mint and lime, watermelon cooler with basil and elderflower, lychee spritz with coconut water and citrus, coconut water punch with tropical fruit and ginger, and sparkling elderflower with sliced citrus garnish. Each drink is made with fresh Bali produce and presented in the same style as cocktails — garnished, chilled, and visually striking.</p>

    <p>We also set up a fresh juice bar with seasonal Bali fruits, herbal iced teas (hibiscus, lemongrass, ginger), and still and sparkling water stations with infused water options. The drinks table is styled to match the food presentation — coordinated colours, florals, and labelling. Guests who also want wine or spirits can be accommodated; we simply ensure the non-alcoholic options are equally celebrated rather than an afterthought.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'Booking Your Baby Shower Chef in Three Steps',
    body: `<p><strong>Step 1 — Share your plans:</strong> Message us on WhatsApp with your villa location, date, guest count, and any dietary requirements. We respond within 2 hours during business hours with availability and package options.</p>

    <p><strong>Step 2 — Review your proposal:</strong> We send a customised menu proposal with pregnancy-safe options, drinks station details, and styling notes. You confirm once, and we lock in the chef and team.</p>

    <p><strong>Step 3 — Relax on the day:</strong> The chef and team arrive 2–3 hours before guests, build the grazing table, set up the drinks station, and manage everything from arrival through to final clean-up. You host; we handle the rest.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    title: 'FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Plan Your Baby Shower Catering',
    body: 'Tell us the date, guest count, and any dietary needs — we\'ll handle the rest.',
    primaryAction: {
      label: 'Plan Your Baby Shower Catering',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20baby%20shower%20at%20a%20Bali%20villa%20and%20need%20catering.',
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
  { label: 'Bachelorette Party Catering', href: '/events/villa-parties', desc: 'Private chef catering for bachelorette parties at Bali villas.' },
  { label: 'Villa Dinner Party', href: '/blog/private-dinner-party-bali', desc: 'How to host an elegant private dinner party at your Bali villa.' },
  { label: 'Kids Birthday Party', href: '/blog/how-to-plan-villa-birthday-party-bali', desc: 'Complete guide to planning a villa birthday party in Bali.' },
  { label: 'Grazing Tables', href: '/catering/grazing-tables', desc: 'Signature grazing table catering for Bali villa events.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing guide for all myCHEF catering packages.' },
  { label: 'Event Planning Bali', href: '/blog/event-planning-bali', desc: 'Complete logistics guide for Bali villa events.' },
]

export default function BabyShowerCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/baby-shower-catering-bali"
      title="Baby Shower Catering Bali"
      description="Beautiful baby shower catering at your Bali villa. Themed spreads, mocktail stations, pregnancy-safe menus. Groups 8–40. Private chef handles everything."
      seoTitle="Baby Shower Catering Bali | Villa Baby Shower Chef | myCHEF"
      seoDescription="Beautiful baby shower catering at your Bali villa. Themed spreads, mocktail stations, pregnancy-safe menus. Groups 8–40. Private chef handles everything."
      canonicalUrl="https://mychef.id/blog/baby-shower-catering-bali"
      h1="Baby Shower Catering Bali"
      subtitle="Beautiful Villa Baby Showers with Private Chef Catering"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Elegant baby shower catering spread at a Bali villa by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['baby shower bali', 'baby shower catering bali', 'baby shower bali villa', 'private chef baby shower bali', 'bali baby shower ideas']}
      highlights={['Menu Ideas', 'Safety', 'Styling', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Baby Shower Catering Bali', 'https://mychef.id/blog/baby-shower-catering-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Baby Shower Catering Bali — Beautiful Villa Baby Showers with Private Chef Catering',
          description: 'Beautiful baby shower catering at your Bali villa. Themed spreads, mocktail stations, pregnancy-safe menus. Groups 8–40. Private chef handles everything.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/baby-shower-catering-bali' },
          url: 'https://mychef.id/blog/baby-shower-catering-bali',
          wordCount: 1600,
          keywords: 'baby shower bali, baby shower catering bali, baby shower bali villa, private chef baby shower bali',
        },
      ]}
      ctaText="Plan Your Baby Shower Catering"
      ctaSubtext="Tell us the date, guest count, and any dietary needs — we'll handle the rest."
    />
  )
}
