import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Droplets, Utensils, Leaf, Users, Heart, Star } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Bali Wet Season Dining',
    title: 'Dining in Bali\'s Wet Season (November–March): What to Eat',
    body: `<p>Bali's wet season runs November through March, peaking in January and February. It doesn't mean constant rain — it means afternoon and evening tropical downpours, emerald-green landscapes, and a very different set of produce on market stalls. Visitor numbers drop, villa rates are lower, and the island feels intimate and unhurried.</p>
    <p>Wet season dining is a different experience — heavier warming dishes, distinct ingredients that only appear at this time of year, and indoor or covered terrace setups that feel cosy rather than compromised. A skilled private chef adapts the menu to what the season genuinely offers rather than fighting it. This guide covers what to expect, what's in season, and how to get the best private dining experience during Bali's rainy months. For year-round context, see our <a href="/blog/bali-catering-menu" class="text-[#7E6410] hover:underline font-medium">complete Bali catering menu guide</a>.</p>`,
  },
  {
    id: 'ingredients',
    type: 'content' as const,
    subtitle: 'Seasonal Produce',
    title: 'What\'s in Season November–March',
    body: `<p>The wet season delivers some of Bali's most unique produce — ingredients that dry-season guests never encounter. Rain-fed highland vegetables are at their best, and certain tropical fruits reach peak season only in these wetter months.</p>

    <p><strong>Wet-season fruits:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>Durian</strong> — the wet season's most legendary fruit. Harvest peaks December–February. Rich, custard-like, intensely aromatic. Exceptional eaten fresh, folded into sticky rice (durian sticky rice is a classic), or incorporated into a bold dessert by a chef who knows how to balance its intensity.</li>
      <li><strong>Jackfruit (nangka)</strong> — peaks December–March. Young jackfruit is a prized savoury ingredient (pulled "jackfruit" preparations, curries, rice dishes). Ripe jackfruit is sweet and fragrant — excellent in desserts and smoothies.</li>
      <li><strong>Langsat and duku</strong> — small, translucent, grape-like fruits available January–March. Delicate, sweet-sour flavour. Underused by tourist menus but beloved locally.</li>
      <li><strong>Soursop (sirsak)</strong> — creamy white flesh, citrus-tropical flavour. Available wet season through early dry season. Superb in ice creams, sorbets, and fresh juices.</li>
      <li><strong>Avocado</strong> — Bali's highland avocados peak in the wet season, particularly in the Kintamani and Bedugul areas. Far richer and creamier than imported varieties.</li>
    </ul>

    <p><strong>Vegetables:</strong> Wet-season rains boost production in Bali's highland farming villages. Kintamani delivers excellent tomatoes, corn, and leafy greens. Bedugul is the source for strawberries (yes, genuinely available December–February), capsicum, broccoli, and cabbage varieties that don't survive dry-season heat.</p>

    <p><strong>Mushrooms:</strong> The wet season is prime mushroom season across Bali's forested highland regions. Oyster mushrooms, shiitake, and wild forest varieties appear in markets from November onward — far superior to imported dried alternatives.</p>

    <p><strong>Seafood note:</strong> Rougher wet-season seas mean fishing is more restricted, particularly January–February. Fresh tuna and snapper are still available from the Jimbaran market on calm days, but your chef will confirm availability based on that morning's conditions. Farmed barramundi and prawns are consistent year-round alternatives.</p>`,
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'Menu Ideas',
    title: 'Wet Season Menu Concepts for Villa Dining',
    body: `<p>These menus are designed for covered terrace or indoor villa dining — the best wet-season experience uses the rain as atmosphere rather than avoiding it entirely.</p>

    <p><strong>1. Warming Comfort Dinner (4–8 guests) — Plated, 4 courses</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Starter: roasted pumpkin soup, toasted coconut cream, crispy shallots</li>
      <li>Second: pan-roasted duck breast, jackfruit chutney, wild mushroom sauce</li>
      <li>Main: slow-braised beef rendang, steamed jasmine rice, pickled cucumber ribbon</li>
      <li>Dessert: durian sticky rice with coconut cream and palm sugar, or soursop sorbet for a lighter finish</li>
    </ul>

    <p><strong>2. Highland Vegetarian Menu (4–12 guests) — Plated or Family Style</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Sharing boards: roasted Bedugul vegetables, Highland avocado on toast, fresh strawberry vinaigrette salad</li>
      <li>Main: jackfruit rendang, wild mushroom stir-fry, Balinese pelecing kangkung</li>
      <li>Dessert: strawberry pavlova with Kintamani passion fruit curd</li>
    </ul>

    <p><strong>3. Intimate Rainy Evening Dinner (2–4 guests) — Plated, 5 courses</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Amuse: Highland avocado velouté with crispy tempeh</li>
      <li>Starter: soursop and fresh langsat salad, lime dressing</li>
      <li>Soup: spiced pumpkin bisque with lemongrass foam</li>
      <li>Main: slow-roasted duck, jackfruit galette, wild mushroom jus</li>
      <li>Dessert: durian panna cotta, Bedugul strawberries, coconut tuile</li>
    </ul>

    <p><strong>4. Low-Season Group Feast (15–30 guests) — Balinese Buffet</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Ayam betutu (ceremonial whole-spiced chicken), slow-cooked overnight</li>
      <li>Beef rendang with steamed rice and pandan</li>
      <li>Jackfruit curry with fresh coconut milk</li>
      <li>Pelecing kangkung (water spinach, tomato sambal, roasted coconut)</li>
      <li>Wild mushroom and tempeh stir-fry</li>
      <li>Fresh highland fruit platter: strawberries, avocado dishes, soursop drinks</li>
    </ul>

    <p>For format guidance (buffet vs plated), see our <a href="/blog/buffet-vs-plated-service-bali" class="text-[#7E6410] hover:underline font-medium">buffet vs plated comparison</a>. For pricing, see the <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">private chef pricing guide</a>.</p>`,
  },
  {
    id: 'by-occasion',
    type: 'features' as const,
    subtitle: 'By Occasion',
    title: 'Wet Season Dining by Event Type',
    features: [
      {
        icon: Droplets,
        title: 'Intimate Villa Dinners',
        desc: 'The wet season is peak season for intimate 2–8 person dinners. Fewer tourists, quieter villas, lower prices, and a cosy indoor ambiance created by the sound of rain. The best romantic dinners at Bali villas often happen between November and February.',
      },
      {
        icon: Leaf,
        title: 'Yoga & Wellness Retreats',
        desc: 'November–March is popular for smaller wellness groups who want Bali without crowds. Menu focus: warm but clean — highland vegetables, mushrooms, jackfruit proteins, minimal oil. Ayurvedic-influenced menus using local spices (turmeric, ginger, galangal) work beautifully in the wetter, cooler months.',
      },
      {
        icon: Heart,
        title: 'Honeymoons & Anniversaries',
        desc: 'The wet season is a secret for couples — fewer crowds, better villa rates, and evenings that feel genuinely private. A covered terrace dinner for two with durian-based desserts, warm spiced duck, and locally sourced Highland produce is a signature wet-season experience.',
      },
      {
        icon: Users,
        title: 'Small Corporate Retreats',
        desc: 'Off-peak pricing and quieter Bali make November–March ideal for internal corporate retreats and team offsites (not events for clients). Groups of 8–20 can book full villas at lower rates and have the place to themselves. Communal family-style dinners work well for team bonding.',
      },
      {
        icon: Star,
        title: 'Festive Celebrations (Dec–Jan)',
        desc: 'December and early January are an exception to the quiet-season rule — Christmas and New Year bring a spike in visitors. Villa parties for Christmas Eve, New Year\'s Eve, and NYD are popular. Festive menus blend Western Christmas traditions with Balinese seasonal ingredients. See our dedicated festive menu guide.',
      },
      {
        icon: Utensils,
        title: 'Long-Stay Guest Meals',
        desc: 'Long-stay villa guests (2+ weeks) benefit most from wet-season variety — a chef who changes the menu based on what\'s fresh at market that morning will produce far more interesting meals than a fixed weekly rotation. The wet season\'s unique produce makes this especially rewarding.',
      },
    ],
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'Planning Tips',
    title: 'Wet Season Dining: What to Know Before You Book',
    body: `<p>The wet season surprises most visitors in positive ways. Here is how to make the most of it from a dining perspective:</p>

    <p><strong>Plan for indoor or covered dining.</strong> Afternoon rains are predictable (typically 14:00–17:00), but evening showers can arrive unexpectedly. A covered terrace, pavilion, or indoor villa dining room is the right setup for wet-season dinner parties rather than exposed pool-deck tables. Most quality Bali villas have covered pavilions that actually feel more atmospheric in the rain.</p>

    <p><strong>Embrace the unique produce.</strong> Ask specifically for durian, jackfruit, soursop, Highland strawberries, and wild mushrooms — these are things you cannot get at the same quality during dry season. A wet-season dinner built around these ingredients is more interesting and more authentically seasonal than a generic tropical menu.</p>

    <p><strong>Flexibility with seafood.</strong> On stormy days, fresh ocean catch may be limited. Your chef will know the morning of your dinner and will have alternatives ready. Farmed barramundi, freshwater prawns, and consistent produce alternatives mean wet-season menus rarely feel like a compromise — they just taste different.</p>

    <p><strong>Book in advance despite lower occupancy.</strong> The best myCHEF chefs work year-round and their schedules fill even in quiet months. A 7–10 day lead time is standard; festive-period bookings (Christmas and New Year) should be made 3–4 weeks in advance regardless of season.</p>

    <p><strong>Consider a morning cooking class.</strong> Wet-season mornings are almost always clear and sunny. A market visit and cooking class before an afternoon lunch is one of the most popular experiences for wet-season guests — and the morning's market finds often dictate the best menu options for the afternoon meal.</p>

    <p>Ready to plan your wet season dining? <a href="/catering" class="text-[#7E6410] hover:underline font-medium">Explore catering options</a> or <a href="/blog/dry-season-menu-bali" class="text-[#7E6410] hover:underline font-medium">compare with the dry season menu guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    title: 'Plan Your Wet Season Menu',
    body: "Durian, jackfruit, Highland strawberries — let's build a menu around what's actually in season.",
    primaryAction: { label: 'Get a Menu Proposal', href: 'https://wa.me/628113803488?text=Hi%20myCHEF%2C%20I%20want%20to%20plan%20a%20wet%20season%20dinner%20menu' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Is it worth hiring a private chef in Bali during wet season?',
    answer: 'Absolutely. The wet season offers unique produce (durian, jackfruit, Highland strawberries, wild mushrooms), lower villa rates, and a more intimate atmosphere. Indoor and covered terrace dining in the wet season is often more atmospheric than outdoor dining in peak season.',
  },
  {
    question: 'When does it rain in Bali?',
    answer: 'Wet season runs November–March, with January–February the wettest months. Rain typically falls in the afternoons (14:00–17:00) and evenings. Mornings are usually clear and sunny. Evening downpours can arrive unexpectedly, so covered dining setups are recommended.',
  },
  {
    question: 'What fruit is available in Bali during the wet season?',
    answer: 'Wet-season fruits include durian (December–February), jackfruit (December–March), langsat and duku (January–March), soursop, and Highland avocado. Bedugul also produces fresh strawberries December–February — a surprising and delicious find for seasonal menus.',
  },
  {
    question: 'Can I still get fresh seafood from a private chef in Bali during wet season?',
    answer: 'Fresh ocean fish is available on calm days even in wet season. Jimbaran tuna, snapper, and barramundi are often still sourced fresh. On stormy days, farmed alternatives (barramundi, freshwater prawns) are excellent substitutes. Your chef will confirm the morning of your dinner.',
  },
  {
    question: 'What is durian sticky rice and can a myCHEF private chef make it?',
    answer: 'Durian sticky rice is a classic Balinese and Southeast Asian dessert — glutinous rice cooked in coconut milk, served warm with fresh durian flesh and a palm sugar drizzle. Yes, myCHEF chefs can prepare this during durian season (December–February). It\'s one of the most requested wet-season dishes.',
  },
  {
    question: 'Is wet season a good time for a villa party in Bali?',
    answer: 'Wet season villa parties work well for covered or indoor venues. Groups of 15–30 guests using a pavilion or indoor dining hall can have a full catered event — the lower visitor numbers actually make staffing easier and villas more available. Avoid fully exposed pool-deck setups.',
  },
]

const RELATED_PAGES = [
  { href: '/blog/bali-catering-menu', label: 'Bali Catering Menu Guide', desc: 'Year-round Bali catering menu ideas, seasonal ingredients, and pricing.' },
  { href: '/blog/dry-season-menu-bali', label: 'Dry Season Menu Guide', desc: 'Peak-season produce and menu ideas for Bali April–October.' },
  { href: '/blog/festive-season-menu-bali', label: 'Festive Season Menu Guide', desc: 'Christmas and New Year private chef dining in Bali.' },
  { href: '/catering', label: 'Catering Services', desc: 'Full-service catering for villa events, weddings, and retreats.' },
]

const extraJsonLd = [
  breadcrumbSchema('Wet Season Menu Guide', 'https://mychef.id/blog/wet-season-menu-bali', 'Journal', 'https://mychef.id/journal'),
  faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Dining in Bali\'s Wet Season (November–March): What to Eat',
    description: 'What to eat during Bali\'s wet season. Seasonal ingredients like durian, jackfruit, and Highland strawberries, with private chef menu ideas for villa dining November–March.',
    url: 'https://mychef.id/blog/wet-season-menu-bali',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    author: { '@type': 'Organization', name: 'myCHEF Bali' },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF',
      logo: { '@type': 'ImageObject', url: 'https://mychef.id/logo.png' },
    },
    keywords: ['bali wet season menu', 'bali monsoon dining', 'private chef bali wet season', 'bali seasonal ingredients wet season', 'durian bali private chef'],
  },
]

export default function WetSeasonMenuPage() {
  return (
    <PremiumPage
      slug="blog/wet-season-menu-bali"
      title="Bali Wet Season Menu Guide | Private Chef November–March"
      description="What to eat during Bali's wet season. Seasonal ingredients including durian, jackfruit, and Highland strawberries, with private chef menu ideas November–March."
      seoTitle="Bali Wet Season Menu Guide | Private Chef November–March"
      canonicalUrl="https://mychef.id/blog/wet-season-menu-bali"
      h1="Wet Season Menu Guide"
      subtitle="Bali's Best Seasonal Produce & Dining November–March"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Durian, jackfruit and Highland produce — Bali wet season private chef menu"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['bali wet season menu', 'bali monsoon dining', 'private chef bali wet season', 'bali seasonal ingredients wet season', 'durian bali private chef']}
      highlights={['Durian & Jackfruit Season', 'Highland Produce', 'Indoor Villa Dining', 'Warming Menus']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={extraJsonLd}
    />
  )
}
