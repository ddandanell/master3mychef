import PremiumPage from '@/components/PremiumPage'
import PricingCalculator from '@/components/PricingCalculator'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import { siteFacts } from '@/data/siteFacts'

const PRICING_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Private chef services in Bali',
  provider: { '@id': 'https://mychef.id/#business' },
  areaServed: 'Bali, Indonesia',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'IDR',
    lowPrice: '700000',
    highPrice: '3500000',
    offerCount: '7',
    description:
      'Per-person pricing from IDR 700K (villa dinners) to IDR 3.5M++ (Chef\'s Table), subject to 11% government tax + 10% service charge.',
  },
}

const tableWrap = (children: string) =>
  `<div class="w-full overflow-x-auto"><table class="w-full text-left border-collapse">${children}</table></div>`

const thead = (cells: string[]) =>
  `<thead><tr class="bg-stone-100 border-b border-stone-200">${cells.map((c) => `<th class="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">${c}</th>`).join('')}</tr></thead>`

const tbody = (rows: string[][]) =>
  `<tbody>${rows.map((row, i) => `<tr class="border-b border-stone-100 ${i % 2 === 1 ? 'bg-stone-50' : ''}">${row.map((c) => `<td class="px-4 py-3 text-sm text-stone-600">${c}</td>`).join('')}</tr>`).join('')}</tbody>`

const SECTIONS = [
  {
    id: 'short-answer',
    type: 'content' as const,
    subtitle: 'The Short Answer',
    title: 'Transparent Pricing at a Glance',
    body: `<p>This page publishes our real prices. The figure you see here is the figure your quote is built from — fixed, itemised, and confirmed before you pay anything. All prices are ++ (11% government tax + 10% service charge) unless marked otherwise. Every culinary team is <strong>HACCP-certified</strong> for professional food safety.</p>
    ${tableWrap(
      thead(['Service', 'Price from', 'Basis']) +
      tbody([
        ['Villa dinner (3–4 courses)', 'IDR 700K', 'per person, 2–10 guests'],
        ['Fine-dining tasting menu', 'IDR 950K–980K', 'per person'],
        ['BBQ &amp; buffet catering', 'IDR 700K', 'per person, groups 8+'],
        ['Wedding catering', 'IDR 1.5M–3M+', 'per person'],
        ['Private chef stay (full day of staff)', 'IDR 2,700,000++', 'per day, chef + assistant, three flexible meals'],
        ['Stay chef, weekly rate', 'IDR 2,430,000++/day', '10% off the full-day rate'],
        ['Waiters & butlers', 'Contact us', 'for pricing'],
        ['Cocktail packages', 'From IDR 500K++', 'per guest (min 10)'],
      ])
    )}
    <p class="text-sm text-stone-600 mt-4">All ++ (11% government tax + 10% service charge). A ${siteFacts.depositPercent}% deposit confirms your booking.</p>`,
  },
  {
    id: 'pricing-calculator',
    type: 'custom' as const,
    subtitle: 'Quick Estimate',
    title: 'Build Your Estimate in Seconds',
    body: 'Choose a service type, guest range, duration and any add-ons to see a live starting price before you message us on WhatsApp.',
    render: (
      <>
        <PricingCalculator hideHeader />
        <div className="mt-6 max-w-[600px] mx-auto">
          <PriceDisclaimer />
        </div>
      </>
    ),
  },
  {
    id: 'group-size-math',
    type: 'content' as const,
    subtitle: 'Villa Dinners &amp; Group Catering',
    title: 'The Group-Size Math',
    body: `<p>Dinners are priced per person, so the math is simple. A 3–4 course villa dinner from IDR 700K per person ++ means:</p>
    ${tableWrap(
      thead(['Guests', 'Estimated total (from)']) +
      tbody([
        ['2 guests (intimate dinner)', 'IDR 1.4M ++'],
        ['4 guests', 'IDR 2.8M ++'],
        ['8 guests', 'IDR 5.6M ++'],
        ['12 guests', 'IDR 8.4M ++'],
      ])
    )}
    <p class="mt-4">Poolside BBQs and buffet catering for larger groups run IDR 700K–800K per person ++, with group minimums depending on format. Premium ingredients (lobster, imported beef, oysters) are quoted separately — always before you commit. <a href="/catering" class="font-semibold hover:underline">Explore catering services →</a></p>`,
  },
  {
    id: 'fine-dining-menus',
    type: 'content' as const,
    subtitle: 'Fine Dining',
    title: 'In-Villa Tasting Menu Pricing',
    body: `<p>Two service levels, same chef, same ingredients:</p>
    ${tableWrap(
      thead(['Menu', 'Kitchen-Service (your kitchen &amp; tableware)', 'Full-Service (we bring everything)']) +
      tbody([
        ['Mediterranean Sea (5-course seafood)', 'IDR 1,750K++', 'IDR 2,200K++'],
        ['Italian Experience', 'IDR 1,750K++', 'IDR 2,200K++'],
        ['French Experience', 'IDR 1,900K++', 'IDR 2,400K++'],
        ['Wagyu Experience (4-course)', 'IDR 1,950K++', 'IDR 2,400K++'],
        ['Custom menu', 'from IDR 1,600K++', 'from IDR 2,000K++'],
        ["Chef's Table (6 guests, interactive)", '—', 'IDR 3,500K++'],
        ['Romantic dinner for two (per-couple package)', 'IDR 2,800K / couple', 'IDR 3,500K / couple'],
        ['Wine pairing (4–5 glasses)', '+IDR 850K per guest', '+IDR 850K per guest'],
      ])
    )}
    <p class="mt-4">Fine dining from 5 guests (2 for romantic dinners by arrangement). The romantic dinner is a per-couple package; the same evening is also priced per person from the signature menus on the <a href="/fine-dining/romantic-dinner" class="font-semibold hover:underline">romantic dinner page</a> — your quote states which model applies. <a href="/fine-dining/tasting-menu" class="font-semibold hover:underline">See the full tasting menus →</a> · <a href="/michelin-private-chef-bali-prices" class="font-semibold hover:underline">Michelin-tier pricing explained →</a> · <a href="/private-dining-indonesia" class="font-semibold hover:underline">Private dining across Indonesia →</a></p>`,
  },
  {
    id: 'events-weddings',
    type: 'content' as const,
    subtitle: 'Events, Weddings &amp; Retreats',
    title: 'Event &amp; Wedding Pricing',
    body: `<p>Every event is quoted individually — you receive a transparent, itemised proposal before any deposit.</p>
    ${tableWrap(
      thead(['Format', 'Price from']) +
      tbody([
        ['Wedding catering', 'IDR 1.5M–3M+ per person'],
        ['Corporate events', `${siteFacts.corporateMinSpend} total (min. spend)`],
        ['Birthday celebrations', 'IDR 8M total'],
        ['Retreat catering (full board)', 'Contact us for a custom proposal'],
      ])
    )}
    <p class="mt-4"><a href="/events/weddings" class="font-semibold hover:underline">Wedding catering details →</a></p>`,
  },
  {
    id: 'in-villa-staff',
    type: 'content' as const,
    subtitle: 'In-Villa Staff',
    title: 'Service Staff Rates',
    body: `<p>Waiters and butlers priced on request · Cocktail packages from IDR 500,000++ per guest · Sommelier service quoted per event. One waiter per 10 guests is our standard ratio. For full-time or live-in arrangements, see <a href="/private-chef-bali" class="font-semibold hover:underline">monthly &amp; long-stay chef hire</a>.</p>`,
  },
  {
    id: 'what-includes',
    type: 'content' as const,
    subtitle: 'What You Get',
    title: 'Every Booking Includes',
    body: `<ul class="list-disc pl-5 space-y-1">
      <li>✓ Menu planning &amp; customisation</li>
      <li>✓ Fresh ingredient shopping</li>
      <li>✓ Cooking &amp; plating in your villa</li>
      <li>✓ Professional service</li>
      <li>✓ Full kitchen clean-up</li>
      <li>✓ Dietary accommodation at no extra cost</li>
      <li>✓ WhatsApp concierge</li>
    </ul>
    <p class="mt-4"><strong>Not included:</strong> alcohol (except booked wine pairing), venue decorations, and travel to remote areas outside standard zones — always quoted upfront if applicable.</p>`,
  },
  {
    id: 'plusplus',
    type: 'content' as const,
    subtitle: 'Tax &amp; Service',
    title: 'What "++" Means',
    body: `<p>"++" adds 11% government tax and 10% service charge to the listed price. Example: IDR 700,000++ ≈ IDR 847,000 all-in per person; IDR 2,200,000++ ≈ IDR 2,662,000 per person. A "nett" price already includes both. We always tell you which format applies.</p>`,
  },
  {
    id: 'deposit-terms',
    type: 'content' as const,
    subtitle: 'Payment',
    title: 'Deposit &amp; Payment Terms',
    body: `<ul class="list-disc pl-5 space-y-1">
      <li><strong>${siteFacts.depositPercent}% deposit</strong> confirms your booking and locks your chef and date.</li>
      <li><strong>Balance</strong> is settled before or on the day of service.</li>
      <li><strong>Groceries</strong> for daily villa chef service are billed at cost — receipts provided, never marked up.</li>
      <li>Bank transfer (IDR or USD), Wise, and credit card via secure link.</li>
    </ul>`,
  },
  {
    id: 'what-changes-price',
    type: 'content' as const,
    subtitle: 'Why Prices Vary',
    title: 'What Changes the Price',
    body: `<p>Guest count · menu tier &amp; premium ingredients · staffing level · service style (drop-off vs plated) · villa location &amp; kitchen setup · date and notice period. Your quote shows each line separately — you see exactly what you're paying for, before you commit.</p>`,
  },
]

const FAQS = [
  { question: 'Where are full prices listed?', answer: 'On <a href="/pricing">pricing</a> and the private chef meal-plan table at <a href="/private-chef-bali">private chef Bali</a>.' },
  { question: 'Daily chef rates?', answer: 'Stay chef is a full day of staff: IDR 2,700,000++ (IDR 3,267,000 all-in). Three flexible meals. One meal is catering.' },
  { question: 'What is included vs groceries?', answer: 'Daily hire: labor included, groceries at cost. Many event packages include food in the per-person price.' },
  { question: 'Weekly and monthly discounts?', answer: '−10% at 7+ days, −20% at 28+ days on daily chef rates.' },
  { question: 'Deposit?', answer: 'Usually 50%.' },
  { question: 'Cancellation tiers?', answer: 'Full refund 14+ days, 50% at 7–13, none under 7. <a href="/cancellation">Policy</a>.' },
  { question: 'Hidden fees?', answer: 'Quotes itemise travel, premium ingredients and add-ons before deposit.' },
  { question: 'Wedding price band?', answer: 'Often IDR 1.5M–3M++ per person for full receptions.' },
  { question: 'Staff hourly rates?', answer: 'Waiters and butlers priced on request. Cocktail packages from IDR 500,000++ per guest (min 10 guests).' },
  { question: 'How to get an exact total?', answer: 'Share date, guests, area and format for a fixed quote.' },
  { question: 'Currency?', answer: 'IDR pricing; international transfers accepted as invoiced.' },
  { question: 'Compare formats?', answer: 'Use <a href="/dining-styles">dining styles</a> and <a href="/services">services</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  // AnswerSocrates guest cost questions (not chef-salary career queries)
  { question: 'How much does it cost to hire a chef in Bali?', answer: 'Two common models: (1) stay chef — a full day of staff at IDR 2,700,000++/day (IDR 3,267,000 all-in) with chef + assistant and three flexible meals, groceries at cost; (2) one lunch, dinner or party is catering, from about IDR 700K per person ++, food included. Fine dining from about IDR 950K–1.25M++ depending on menu. <a href="/private-chef-bali">Stay chef →</a>' },
  { question: 'How much does a private chef cost per day?', answer: 'Stay chef is a full day of staff: IDR 2,700,000++ (IDR 3,267,000 all-in) for chef + assistant, about 10 guests. Three meals, each breakfast, lunch or dinner as you choose. Food is separate at cost with receipts. One meal is catering.' },
  { question: 'How much does a private chef cost per month?', answer: 'Use daily rates with monthly discount (−20% from 28+ days), or request a live-in / household proposal. Share meal pattern and villa area for a fixed monthly figure.' },
  { question: 'How much does a private chef cost per hour?', answer: 'We do not sell a simple “chef hourly” product for villa guests. Stay chef is a full day of staff; one meal is catering (food included). That keeps shopping, cooking, service and cleanup in one clear package.' },
  { question: 'Are private chefs expensive / is a private chef worth it?', answer: 'For groups and multi-meal villa days, cost per person often competes with restaurants once transport and time are counted. For a single couple’s dinner it is a premium experience — prices are published so you can decide before deposit. <a href="/blog/private-chef-cost-bali">Cost guide →</a>' },
  { question: 'What does a private chef cost for a year?', answer: 'Year-round households usually need a custom monthly or live-in plan, not a one-night menu price. Contact us with how many meals per week and we will model a 12-month budget. <a href="/staffing/live-in-chef">Live-in chef →</a>' },
  // AnswerSocrates guest F&B cost questions (not career salary)
  { question: 'What is the cost of food and drink in Bali for a villa event?', answer: 'Food catering floors from about IDR 700K++ per person (BBQ/buffet/drop-off). Cocktail packages from IDR 500K++ per guest (BYO, min 10) or IDR 1.3M–1.7M++ free-flow with spirits. Stay chef is a separate full-day staff rate (IDR 2,700,000++/day). <a href="/catering">Catering →</a> · <a href="/in-villa-service/bartenders">Drinks packages →</a>' },
  { question: 'What is the average drink price in Bali for private cocktail service?', answer: 'For villa free-flow, budget about IDR 1,300,000–1,700,000++ per guest when spirits are included, or from IDR 500,000++ per guest if you supply the alcohol (BYO package). That is package pricing — not a single beach-club cocktail. <a href="/in-villa-service/bartenders">Cocktail packages →</a>' },
  { question: 'How much does Bali drinks catering cost?', answer: 'Complete bar catering packages from IDR 500,000++ per guest (min 10). Not hourly bartender-only hire. Stack with food on <a href="/catering">catering</a> or plan a full night on <a href="/experiences/private-cocktail-party">private cocktail party</a>.' },
  // Long-tail catering cost keywords (guest intent)
  { question: 'What is the average catering cost per person in Bali?', answer: 'Food catering floors from about IDR 700K++ per person (BBQ/buffet/drop-off); plated from ~IDR 800K++. Wedding reception production often IDR 1.5M–3M++ per person. Your fixed quote is the real number. <a href="/catering">Catering packages →</a>' },
  { question: 'How much does catering cost for 50 or 100 people?', answer: 'Using published food floors: ~50 guests ≈ IDR 35M–47.5M++ (buffet band); ~100 guests ≈ IDR 70M–95M++ before bar, travel and upgrades. <a href="/catering">Catering →</a> · <a href="/quote">Quote →</a>' },
  { question: 'How much is catering for a wedding in Bali?', answer: 'Intimate formats near food floors from ~IDR 700K++ per person; full villa receptions often IDR 1.5M–3M++ with production. <a href="/events/weddings">Wedding catering →</a> · <a href="/bali-wedding-catering-packages">Packages →</a>' },
]

const RELATED_PAGES = [
  { label: 'Fine Dining', href: '/fine-dining', desc: 'In-villa tasting menus and private chef experiences.' },
  { label: 'Catering', href: '/catering', desc: 'Full-service villa catering for any occasion.' },
  { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Party bar packages from IDR 500K++ per guest — we come to your villa.' },
  { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', desc: 'Occasion plan for villa parties with the same bar packages.' },
  { label: 'Events', href: '/events', desc: 'Weddings, retreats, and celebrations across Bali.' },
  { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, butlers, mobile bar and sommeliers.' },
  { label: 'Private Chef Bali Day Rates', href: '/private-chef-bali', desc: 'Stay chef: full-day staff, three flexible meals, chef + assistant.' },
  { label: 'How to Hire a Private Chef', href: '/blog/how-to-hire-private-chef-bali-complete-guide', desc: 'Step-by-step guide to finding, vetting, and booking a chef.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Receive a detailed proposal within 24 hours.' },
]

export default function PricingPage() {
  return (
    <>
      <PremiumPage
        slug="pricing"
      title="Pricing"
      description="Transparent myCHEF pricing: private chef rates, menu prices, catering & event packages in Bali. HACCP-certified chefs. No hidden fees. Get a quote within 2 hours."
      seoTitle="Private Chef Bali Prices | Catering & Event Pricing | myCHEF"
      seoDescription="Transparent myCHEF pricing: private chef rates, menu prices, catering &amp; event packages in Bali. HACCP-certified chefs. No hidden fees. Get a quote within 2 hours."
      canonicalUrl="https://mychef.id/pricing"
      h1="Private Chef, Catering & Event Pricing in Bali"
      subtitle="This page publishes our real prices. The figure you see here is the figure your quote is built from — fixed, itemised, and confirmed before you pay anything."
      heroImage="/generated/mychef-catering-bali-catering-hero.webp"
      heroImageAlt="Elegant fine dining dish"
      ogImage="https://mychef.id/generated/mychef-catering-bali-catering-hero.webp"
      keywords={[
        'private chef bali price',
        'bali catering cost',
        'villa chef rates bali',
        'bali drinks catering price',
        'cost of food and drink in bali',
        'average drink price in bali',
      ]}
      highlights={['HACCP-Certified Chefs', 'No Hidden Fees', 'Grocery Receipts Provided', '50% Deposit to Book']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[PRICING_SERVICE_SCHEMA]}
        ctaText="Get My Fixed Quote"
        ctaSubtext="Send four details and receive an itemised proposal within 24 hours."
      />
    </>
  )
}
