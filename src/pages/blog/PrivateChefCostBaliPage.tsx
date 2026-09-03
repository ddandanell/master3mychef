import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, AlertCircle, DollarSign } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/blog/private-chef-cost-bali`

const PRICING_TABLE = [
  {
    service: 'Daily Villa Chef Hire',
    guests: '2–10 guests',
    priceRange: 'IDR 2,700,000++ / day',
    includes: 'Full-day staff: chef + assistant, three flexible meals (each breakfast, lunch or dinner as you choose). Groceries billed separately at cost with receipts. Weekly rate 10% off, monthly rate 20% off the full-day rate only. One meal is catering.',
  },
  {
    service: 'Private Dinner Experience',
    guests: '2–8 guests',
    priceRange: 'IDR 1,500,000 – 5,000,000 total',
    includes: 'Multi-course menu, chef and service staff, setup and cleanup.',
  },
  {
    service: 'Event Catering',
    guests: '20–50 guests',
    priceRange: 'IDR 8,000,000 – 25,000,000 total',
    includes: 'Chef brigade, servers, buffet or plated, full service.',
  },
  {
    service: 'Large Wedding / Event',
    guests: '50+ guests',
    priceRange: 'From IDR 20,000,000',
    includes: 'Full catering team, multi-course dinner, cocktail service.',
  },
]

const WHAT_AFFECTS_PRICE = [
  {
    factor: 'Cuisine Type',
    impact: 'European fine dining (French, Italian) costs more than casual Indonesian or Asian fusion due to ingredient sourcing and technique complexity. A Balinese babi guling feast differs significantly from a 7-course contemporary tasting menu.',
  },
  {
    factor: 'Guest Count',
    impact: 'More guests require more kitchen staff, servers, and equipment. However, per-person cost often decreases as group size grows due to economies of scale on bulk ingredient purchases.',
  },
  {
    factor: 'Location in Bali',
    impact: 'Central areas like Kuta, Seminyak, and Canggu have the best market access and lowest logistics cost. Remote locations like Uluwatu cliffs or inland Ubud may add a small travel or logistics fee.',
  },
  {
    factor: 'Duration of Service',
    impact: 'A 2-hour dinner differs from a full-day retreat with breakfast, lunch, and dinner. Multi-day bookings typically unlock a reduced daily rate versus single-event pricing.',
  },
  {
    factor: 'Peak Season',
    impact: 'July, August, and December see the highest demand. Premium chefs and full brigades book out fast during these months and may carry a seasonal uplift.',
  },
  {
    factor: 'Groceries and Ingredients',
    impact: 'Groceries are usually billed separately at cost. Premium ingredients like imported wagyu, lobster, or truffle add IDR 100,000 to 500,000 or more per person depending on portions.',
  },
]

const FAQS = [
  { q: 'How much is a private chef in Bali per day?', a: 'Stay chef is a full day of staff at <strong>IDR 2,700,000++</strong> (IDR 3,267,000 all-in) for chef + assistant, about 10 guests. Three meals, each breakfast, lunch or dinner as you choose. One meal is catering. <a href="/private-chef-bali">Private chef Bali</a> · <a href="/pricing">Pricing</a>.' },
  { q: 'Are myCHEF chefs HACCP-certified?', a: 'Yes. Culinary teams are HACCP-certified for professional food safety — temperature control, allergen handling and clean kitchen standards on every booking.' },
  { q: 'Are groceries included?', a: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { q: 'What is Chef Rotation?', a: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { q: 'Can the chef cook in our villa kitchen?', a: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { q: 'Is this cheaper than restaurants for groups?', a: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { q: 'Can I request a specific chef?', a: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { q: 'Fine dining vs daily chef?', a: 'Fine dining is multi-course event pricing; daily chef is a full-day staff stay rate. One meal is catering. <a href="/fine-dining">Fine dining</a>.' },
  { q: 'Do you cover my area?', a: 'Island-wide. <a href="/locations">Locations</a>.' },
  { q: 'Kids menus with daily chef?', a: 'Yes — <a href="/kids-menus">kids menus</a> and parallel adult meals.' },
  { q: 'Live-in vs daily chef?', a: 'Live-in is long-term placement (<a href="/staffing/live-in-chef">live-in chef</a>); daily is holiday day-rate hire.' },
  { q: 'Payment methods?', a: 'Bank transfer and major cards; deposit then balance as quoted.' },
  { q: 'Last-minute private chef?', a: 'Often possible outside peak — WhatsApp availability.' },
  { q: 'Where are full prices listed?', a: 'On <a href="/pricing">pricing</a> and the private chef meal-plan table at <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'Daily chef rates?', a: 'Published day rates depend on how many meals you want cooked.' },
  { q: 'What is included vs groceries?', a: 'Daily hire: labor included, groceries at cost. Many event packages include food in the per-person price.' },
  { q: 'Weekly and monthly discounts?', a: '−10% at 7+ days, −20% at 28+ days on daily chef rates.' },
  { q: 'Deposit?', a: 'Usually 50%.' },
  { q: 'Cancellation tiers?', a: 'Full refund 14+ days, 50% at 7–13, none under 7. <a href="/cancellation">Policy</a>.' },
  { q: 'Hidden fees?', a: 'Quotes itemise travel, premium ingredients and add-ons before deposit.' },
  { q: 'Wedding price band?', a: 'Full receptions are quoted per person on the wedding catering pages.' },
]

const WA_MSG = encodeURIComponent('Hi myCHEF! I want to know how much a private chef costs in Bali. Can you send me pricing?')

export default function PrivateChefCostBaliPageBlog() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How Much Does a Private Chef in Bali Cost? [2026 Guide]',
    description: 'Private chef costs in Bali start from IDR 1M/day for a villa chef and assistant pair to IDR 20M+ for large events. Get real 2026 pricing, what is included, and how to book.',
    author: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/og-image.webp`,
      },
    },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL,
    },
    url: CANONICAL,
    image: `${SITE}/og-image.webp`,
  }

  const localBizWithRating = {
    ...localBusinessSchema,
  }

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="How Much Does a Private Chef in Bali Cost? [2026 Guide] — myCHEF"
        description="Private chef costs in Bali start from IDR 1M/day for a villa chef and assistant pair to IDR 20M+ for large events. Get real 2026 pricing, what is included, and how to book."
        canonical={CANONICAL}
        ogType="article"
        ogImage="/og-image.webp"
        jsonLd={[
          localBizWithRating,
          articleSchema,
          breadcrumbSchema('Private Chef Cost Bali', CANONICAL, 'Blog', `${SITE}/blog`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/55 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#C5A028] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/journal" className="hover:text-[#C5A028] transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Private Chef Cost Bali</span>
          </nav>

          <div className="mb-4">
            <span className="text-[#C5A028] text-xs uppercase tracking-[2px] font-semibold">Pricing Guide &middot; 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            How Much Does a Private Chef in Bali Cost?
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed border border-white/15 bg-white/5 rounded-xl px-4 py-3 mb-4">
            <strong className="text-white">Short answer:</strong> stay chef is a full day of staff at <strong className="text-[#C5A028]">IDR 2,700,000++</strong> (IDR 3,267,000 all-in) — three meals, each breakfast, lunch or dinner as you choose. One meal is catering (food included). Fine dining and events are per-person. Groceries at cost with receipts on stay hire. HACCP-certified teams. Full tables below and on <Link to="/pricing" className="text-[#C5A028] hover:underline">pricing</Link>.
          </p>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Real 2026 pricing from IDR 2,700,000++ per day for a stay chef (full day of staff) to IDR 20,000,000+ for large events and weddings. What is included, what affects the price, and how to get your quote.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-6 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              Get Your Custom Quote
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded hover:border-[#C5A028] hover:text-[#C5A028] transition-colors text-sm uppercase tracking-wider"
            >
              Full Pricing Guide
            </Link>
            <Link
              to="/private-chef-bali"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded hover:border-[#C5A028] hover:text-[#C5A028] transition-colors text-sm uppercase tracking-wider"
            >
              Hire a Private Chef
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Summary Bar */}
      <section className="bg-[#C5A028] text-[#1A1A1A] py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">2026 Private Chef Cost Summary — Bali</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded p-4">
              <div className="text-xl font-bold">IDR 2.7M++ /day</div>
              <div className="text-white/80 text-sm mt-1">Full-day stay chef + assistant (three flexible meals; weekly −10%, monthly −20%)</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-xl font-bold">IDR 1.5M – 5M</div>
              <div className="text-white/80 text-sm mt-1">Private dinner (2–8 guests)</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-xl font-bold">IDR 8M – 25M</div>
              <div className="text-white/80 text-sm mt-1">Event catering (20–50 guests)</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-xl font-bold">From IDR 20M</div>
              <div className="text-white/80 text-sm mt-1">Large wedding / 50+ guests</div>
            </div>
          </div>
          <p className="text-white/70 text-xs mt-4">Prices are subject to a 10% service charge and 11% tax, unless quoted nett. Groceries for daily chef hire are charged separately at cost, supported by receipts.</p>
        </div>
      </section>

      {/* Main Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">What Does a Private Chef in Bali Actually Cost?</h2>
          <div className="prose prose-lg text-[#555] max-w-none">
            <p className="mb-4 leading-relaxed">
              Hiring a private chef in Bali is more affordable than most visitors expect — and far more flexible than booking a restaurant. The total price depends on four variables: the type of service (daily hire vs. one-off dinner vs. event catering), the guest count, the cuisine and menu complexity, and whether groceries are included or billed separately.
            </p>
            <p className="mb-4 leading-relaxed">
              This guide uses real 2026 pricing from <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">myCHEF villa dining</Link> and <Link to="/catering" className="text-[#C5A028] hover:underline font-medium">catering services</Link> across Bali. Below you will find every pricing tier, what is included, what drives cost up or down, and how to compare quotes accurately before you book.
            </p>
          </div>
        </section>

        {/* Section 2: Price Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">Private Chef Prices in Bali: Full Breakdown</h2>
          <p className="text-[#666] mb-8">The table below shows all four main service tiers for private chef hire in Bali, based on 2026 bookings through myCHEF.</p>

          <div className="overflow-x-auto rounded-xl border border-[#E8E8E0]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-4 font-semibold">Service</th>
                  <th className="text-left p-4 font-semibold">Guests</th>
                  <th className="text-left p-4 font-semibold text-[#C5A028]">Price Range</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">What is Included</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F0]'}>
                    <td className="p-4 font-medium">{row.service}</td>
                    <td className="p-4 text-[#666]">{row.guests}</td>
                    <td className="p-4 text-[#C5A028] font-semibold">{row.priceRange}</td>
                    <td className="p-4 text-[#666] hidden md:table-cell">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#999] text-xs mt-3">All prices are approximate and in Indonesian Rupiah (IDR). Final pricing is confirmed at booking and depends on menu, guest count, location, and date. Tax and service charges may apply on top (++).</p>
        </section>

        {/* Section 3: What is Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">What is Included in the Price?</h2>
          <p className="text-[#666] mb-8">
            Understanding what is included — and what is not — is the most important step when comparing private chef quotes in Bali. Here is the standard breakdown for a <Link to="/" className="text-[#C5A028] hover:underline font-medium">myCHEF villa dinner or catering booking</Link>.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-[#C5A028]" />
                What is Always Included
              </h3>
              <ul className="space-y-3">
                {[
                  'The chef and a dedicated assistant (always working as a pair)',
                  'All cooking equipment and serving ware',
                  'Full kitchen setup on arrival',
                  'Service staff (waiters included for dinners and events)',
                  'Complete cleanup and kitchen restoration after service',
                  'Menu consultation and dietary accommodation',
                  'Travel within standard Bali service zones',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555]">
                    <span className="text-[#C5A028] font-bold mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-[#999]" />
                Typically Billed Separately
              </h3>
              <ul className="space-y-3">
                {[
                  'Groceries and ingredients (billed at cost)',
                  'Wine, spirits, and premium beverages',
                  'Specialty or imported ingredients (wagyu, lobster, truffle)',
                  'Venue decor, florals, and lighting',
                  'Photography or videography',
                  'Accommodation for chef on multi-day remote retreats',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555]">
                    <span className="text-[#999] font-bold mt-0.5">&#x2717;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F3F0] rounded-xl p-6">
            <div className="flex items-start gap-3">
              <DollarSign size={20} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">Note on Grocery Billing</h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  In Bali, private chef groceries are almost always billed separately at the actual market price. This is standard practice and is more transparent than bundling — you only pay for what was genuinely purchased for your menu. Your chef provides a receipt, and myCHEF applies no markup on groceries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What Affects Price */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">What Affects the Cost of a Private Chef in Bali?</h2>
          <p className="text-[#666] mb-8">Six factors have the most significant impact on your final quote. Understanding them helps you set a realistic budget before reaching out.</p>

          <div className="space-y-4">
            {WHAT_AFFECTS_PRICE.map((item, i) => (
              <div key={i} className="border border-[#E8E8E0] rounded-xl p-6 bg-white">
                <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A]">{item.factor}</h3>
                <p className="text-[#666] leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Tipping */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">Do You Tip a Private Chef in Bali?</h2>
          <div className="bg-white border border-[#E8E8E0] rounded-xl p-6">
            <p className="text-[#666] leading-relaxed mb-4">
              Tipping a private chef in Bali is not mandatory and is not included in any service charge. However, it is a warm and appreciated gesture if the team delivered an exceptional experience.
            </p>
            <p className="text-[#666] leading-relaxed mb-4">
              The standard range is <strong className="text-[#1A1A1A]">10 to 20 percent</strong> of the chef service fee, distributed among the chef, sous chef, and any service staff. For individual tips, IDR 100,000 to 300,000 per team member is appropriate and welcomed.
            </p>
            <p className="text-[#666] leading-relaxed">
              If a 10% service charge is already listed in your quote, this goes to the company rather than directly to the individual staff. Tips given directly to the team are in addition to this and go entirely to the people who served you.
            </p>
          </div>
        </section>

        {/* Section 6: How to Compare Quotes */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">How to Compare Private Chef Quotes in Bali</h2>
          <p className="text-[#666] mb-8 leading-relaxed">
            Not all quotes are structured the same way. Before comparing prices from different providers, check these five things:
          </p>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Nett vs. ++ Pricing',
                body: 'A nett price means all taxes and charges are already included. A "++" price means 11% government tax and 10% service charge are added on top — making the real total approximately 21% higher than the quoted number. Always ask which format applies.',
              },
              {
                step: '2',
                title: 'Are Groceries Included?',
                body: 'Some chefs bundle groceries into their quote. Others bill them separately at cost. Neither is inherently better, but you need to know which applies before comparing two quotes that look similar on the surface.',
              },
              {
                step: '3',
                title: 'How Many Staff are Included?',
                body: 'A solo chef cooking and serving for 10 guests is a different service level than a chef with a sous chef and two dedicated servers. Confirm the team size and whether additional staff can be added if needed.',
              },
              {
                step: '4',
                title: 'What Courses and Duration are Covered?',
                body: 'A 3-course dinner and a 7-course tasting menu are very different engagements. Confirm exactly how many courses, what service duration is planned, and whether drinks or bartending service are part of the scope.',
              },
              {
                step: '5',
                title: 'Travel and Logistics Fees',
                body: 'For villas outside the main tourist zones — remote Uluwatu cliffsides, inland Ubud roads, or outer Denpasar areas — a small logistics fee may apply. Always confirm upfront whether a travel surcharge applies to your location.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C5A028] text-[#1A1A1A] flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: By Location */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">Does Location Affect Private Chef Pricing in Bali?</h2>
          <p className="text-[#666] mb-6 leading-relaxed">
            Location has a modest but real effect on private chef cost in Bali. Central areas with good market access tend to be the most cost-efficient. Remote locations may carry a logistics premium.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { area: 'Kuta & Legian', note: 'Airport proximity, great market access — no surcharge', path: '/private-chef/kuta' },
              { area: 'Seminyak', note: 'Prime area — no surcharge, premium ingredient access', path: '/private-chef/seminyak' },
              { area: 'Canggu', note: 'Core surf zone — no surcharge, fast deployment', path: '/private-chef/canggu' },
              { area: 'Jimbaran', note: 'Seafood coast — no surcharge, local fish market access', path: '/private-chef/jimbaran' },
              { area: 'Nusa Dua', note: 'Resort zone — no surcharge, resort-standard logistics', path: '/private-chef/nusa-dua' },
              { area: 'Sanur', note: 'East coast family area — minimal logistics fee', path: '/private-chef/sanur' },
              { area: 'Uluwatu / Bukit', note: 'Clifftop villas — small logistics premium may apply', path: '/private-chef/bukit' },
              { area: 'Ubud', note: 'Inland cultural centre — small logistics fee for remote villas', path: '/private-chef/ubud' },
            ].map((loc) => (
              <Link
                key={loc.area}
                to={loc.path}
                className="flex items-center gap-3 border border-[#E8E8E0] rounded-xl p-4 hover:border-[#C5A028] transition-colors group bg-white"
              >
                <ChevronRight size={16} className="text-[#C5A028] flex-shrink-0" />
                <div>
                  <div className="font-medium group-hover:text-[#C5A028] transition-colors">Private Chef {loc.area}</div>
                  <div className="text-[#888] text-sm">{loc.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mid-Article CTA */}
        <section className="mb-16 bg-[#1A1A1A] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-light mb-3">Ready to Get a Quote?</h2>
          <p className="text-white/60 mb-6">Tell us your date, villa, guest count, and preferred cuisine. We send a personalised proposal via WhatsApp within 2 hours. New to this? Start with <Link to="/guide/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">the complete private chef Bali guide</Link>.</p>
          <a
            href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-8 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
          >
            <MessageCircle size={16} />
            WhatsApp Us for a Quote
          </a>
        </section>

        {/* Section 8: How to Book */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-4">How to Book a Private Chef in Bali</h2>
          <p className="text-[#666] mb-8 leading-relaxed">The booking process at myCHEF is designed to be fast and clear. Here is what to expect.</p>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Message us on WhatsApp',
                detail: 'Send your date, villa location, guest count, and any dietary notes. We respond within 2 hours during 07:00 to 22:00 WITA.',
              },
              {
                step: '2',
                title: 'Receive your custom proposal',
                detail: 'Within 24 hours we send a full proposal covering the menu, staffing, pricing (nett or ++ clearly marked), and availability confirmation.',
              },
              {
                step: '3',
                title: 'Confirm with 50% deposit',
                detail: 'A 50% deposit locks your chef team and date. We accept bank transfer, credit card, and most major payment methods.',
              },
              {
                step: '4',
                title: 'Final confirmation and menu refinement',
                detail: 'In the week before your event, we confirm dietary requirements, final guest count, and any last-minute preferences.',
              },
              {
                step: '5',
                title: 'Enjoy your experience',
                detail: 'The chef team arrives 90 minutes to 2 hours early to set up. The remaining 50% balance is due on arrival. You relax while we handle everything.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#C5A028] text-[#C5A028] flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#666] mt-8 leading-relaxed">
            For a full step-by-step guide including what questions to ask and how to vet a chef, read our{' '}
            <Link to="/blog/how-to-hire-private-chef-bali-complete-guide" className="text-[#C5A028] hover:underline font-medium">
              complete private chef hiring guide
            </Link>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6">Explore Our Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Fine Dining', path: '/fine-dining', desc: 'Multi-course tasting menus at your villa — specialist head chefs' },
              { label: 'Catering Services', path: '/catering', desc: 'BBQ, buffet, plated, and grazing menus for all group sizes' },
              { label: 'Events', path: '/events', desc: 'Weddings, birthdays, and corporate events with full staffing' },
              { label: 'Getting Started', path: '/help/getting-started', desc: 'New to private chef booking? Start here' },
              { label: 'Pricing Guide', path: '/pricing', desc: 'Transparent starting prices for every service type' },
              { label: 'Private Chef Seminyak', path: '/private-chef/seminyak', desc: 'Beachfront villa dining in Bali\'s premier area' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="border border-[#E8E8E0] rounded-xl p-4 hover:border-[#C5A028] transition-colors group bg-white"
              >
                <div className="font-medium group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#888] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-[#C5A028] to-[#B08F20] text-white rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Ready to Book Your Private Chef?</h2>
              <p className="text-white/80">50% deposit secures your date. Free menu consultation. WhatsApp response in 2 hours.</p>
            </div>
            <a
              href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#C5A028] font-bold px-8 py-3 rounded hover:bg-[#F5F5F0] transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              WhatsApp Us Now
            </a>
          </div>
        </section>

      </article>
    </div>
  )
}
