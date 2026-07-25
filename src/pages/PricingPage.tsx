import PremiumPage from '@/components/PremiumPage'
import PricingCalculator from '@/components/PricingCalculator'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import { siteFacts } from '@/data/siteFacts'
import { ArticleContentSection } from '@/components/shared'

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
    body: `<p>This page publishes our real prices. The figure you see here is the figure your quote is built from — fixed, itemised, and confirmed before you pay anything. All prices are ++ (11% government tax + 10% service charge) unless marked otherwise.</p>
    ${tableWrap(
      thead(['Service', 'Price from', 'Basis']) +
      tbody([
        ['Villa dinner (3–4 courses)', 'IDR 700K', 'per person, 2–10 guests'],
        ['Fine-dining tasting menu', 'IDR 950K–980K', 'per person'],
        ['BBQ &amp; buffet catering', 'IDR 700K', 'per person, groups 8+'],
        ['Wedding catering', 'IDR 1.5M–3M+', 'per person'],
        ['Private chef session (to 6 guests)', 'IDR 1,350K', 'per session, 3–4 courses'],
        ['Weekly meal prep (2 people)', 'IDR 4,500K', 'per week'],
        ['Waiters, bartenders, sommeliers', 'IDR 250K', 'per hour'],
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
    <p class="mt-4">Fine dining from 6 guests (2 for romantic dinners by arrangement). The romantic dinner is a per-couple package; the same evening is also priced per person from the signature menus on the <a href="/fine-dining/romantic-dinner" class="font-semibold hover:underline">romantic dinner page</a> — your quote states which model applies. <a href="/fine-dining/tasting-menu" class="font-semibold hover:underline">See the full tasting menus →</a> · <a href="/michelin-private-chef-bali-prices" class="font-semibold hover:underline">Michelin-tier pricing explained →</a></p>`,
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
    body: `<p>Waiters and servers from IDR 250K/hour (minimum 3 hours) · Bartenders from IDR 350K/hour · Butlers from IDR 400K/hour · Sommelier service quoted per event. One waiter per 10 guests is our standard ratio. For full-time or live-in arrangements, see <a href="/hire-private-chef-bali-monthly" class="font-semibold hover:underline">monthly &amp; long-stay chef hire</a>.</p>`,
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
  {
    question: 'Are groceries included in a private chef booking?',
    answer:
      'For fine dining, catering and events, ingredients are included in the per-person price. For daily villa chef service, groceries are billed at cost with receipts and never marked up.',
  },
  {
    question: 'What does ++ mean in Bali pricing?',
    answer:
      '++ means 11% government tax and 10% service charge are added to the listed price. IDR 700,000++ is approximately IDR 847,000 all-in.',
  },
  {
    question: 'What deposit is required to book a private chef in Bali?',
    answer: `A ${siteFacts.depositPercent}% deposit confirms the booking and locks the chef and date. The remaining 50% is due the day before the event.`,
  },
  {
    question: 'Do dietary requirements cost extra?',
    answer:
      'No. Vegan, gluten-free, halal, allergy-sensitive and kids\' menus are accommodated at no extra charge.',
  },
  {
    question: 'How much does wedding catering cost in Bali?',
    answer:
      'Wedding catering with myCHEF ranges from IDR 1.5M to IDR 3M+ per person depending on menu, staffing and production, quoted as a transparent itemised proposal.',
  },
  {
    question: 'Is there a minimum guest count or spend?',
    answer:
      `Private chef sessions from IDR 1,350K cover up to 6 guests. Fine dining starts at 6 guests (2 for romantic dinners). Corporate catering carries a minimum spend of ${siteFacts.corporateMinSpend}.`,
  },
]

const RELATED_PAGES = [
  { label: 'Fine Dining', href: '/fine-dining', desc: 'In-villa tasting menus and private chef experiences.' },
  { label: 'Catering', href: '/catering', desc: 'Full-service villa catering for any occasion.' },
  { label: 'Events', href: '/events', desc: 'Weddings, retreats, and celebrations across Bali.' },
  { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, butlers, bartenders, and sommeliers per shift.' },
  { label: 'How to Hire a Private Chef', href: '/blog/how-to-hire-private-chef', desc: 'Step-by-step guide to finding, vetting, and booking a chef.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Receive a detailed proposal within 24 hours.' },
]

export default function PricingPage() {
  return (
    <>
      <PremiumPage
        slug="pricing"
      title="Pricing"
      description="Transparent myCHEF pricing: private chef rates, menu prices, catering & event packages in Bali. No hidden fees. Get a quote within 2 hours."
      seoTitle="Private Chef Bali Prices | Catering & Event Pricing | myCHEF"
      seoDescription="Transparent myCHEF pricing: private chef rates, menu prices, catering &amp; event packages in Bali. No hidden fees. Get a quote within 2 hours."
      canonicalUrl="https://mychef.id/pricing"
      h1="Transparent Pricing for Every Experience"
      subtitle="This page publishes our real prices. The figure you see here is the figure your quote is built from — fixed, itemised, and confirmed before you pay anything."
      heroImage="/generated/mychef-catering-bali-catering-hero.webp"
      heroImageAlt="Elegant fine dining dish"
      ogImage="https://mychef.id/generated/mychef-catering-bali-catering-hero.webp"
      keywords={['private chef bali price', 'bali catering cost', 'villa chef rates bali']}
      highlights={['No Hidden Fees', 'Grocery Receipts Provided', '50% Deposit to Book', '24-Hour Quote Delivery']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[PRICING_SERVICE_SCHEMA]}
        ctaText="Get My Fixed Quote"
        ctaSubtext="Send four details and receive an itemised proposal within 24 hours."
      />
      <ArticleContentSection />
    </>
  )
}
