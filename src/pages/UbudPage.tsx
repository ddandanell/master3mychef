import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Ubud. Can you send a menu proposal?')

const FAQS = [
  { q: 'Do you provide private chefs in Ubud jungle villas?', a: 'Yes — Ubud and nearby hillside villas are covered. Share access notes (steep driveways, no lift) so we plan equipment and timing. <a href="/private-chef/ubud">Private chef Ubud</a>.' },
  { q: 'Can you cater yoga and wellness retreats in Ubud?', a: 'Yes — plant-forward and multi-day retreat menus are a strength. See <a href="/catering/retreat-catering">retreat catering</a> and our wellness chefs.' },
  { q: 'Is there a travel fee for Ubud from South Bali?', a: 'Ubud is a regular service zone. Exact logistics depend on villa location; any travel component is quoted upfront on your proposal.' },
  { q: 'Can we book a Balinese feast for guests new to Ubud?', a: 'Yes — cultural Indonesian and Balinese villa dinners are popular. Ask for an Indonesian specialist chef on WhatsApp.' },
  { q: 'How does Ubud dining at the villa compare to restaurant reservations?', a: 'In-villa service skips traffic and queues, with a menu built for your group. Compare styles in our <a href="/blog/private-chef-seminyak-canggu-ubud-comparison">area comparison</a> when relevant.' },
  { q: 'Do you serve this Bali area?', a: 'Yes — private chef, catering and events operate across major villa regions. Hub: <a href="/locations">locations</a> · <a href="/private-chef-bali">private chef</a>.' },
  { q: 'Is there a travel fee?', a: 'Core South Bali is usually included; remote spots may add a distance fee quoted upfront.' },
  { q: 'Can you cook in Airbnb villas here?', a: 'Yes with a workable kitchen — share the listing.' },
  { q: 'Same prices as other areas?', a: 'Published day rates and menu starts apply; only remote logistics may differ.' },
  { q: 'Fine dining available here?', a: 'Yes — <a href="/fine-dining">fine dining</a>.' },
  { q: 'BBQ and parties?', a: 'Yes — <a href="/catering/bbq-catering">BBQ catering</a> · <a href="/events/villa-parties">villa parties</a>.' },
  { q: 'Daily chef for a week?', a: 'Yes — meal plans on <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'Staff and mobile bar?', a: 'Waiters/butlers: contact for pricing. Mobile cocktail bar packages from IDR 500K++/guest (min 10). <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { q: 'How far ahead to book here?', a: 'A few days typical; peak season longer.' },
  { q: 'Last-minute possible?', a: 'Often yes — WhatsApp the area and date.' },
  { q: 'Kids-friendly service?', a: 'Yes — <a href="/kids-menus">kids menus</a>.' },
  { q: 'How to book for this area?', a: 'WhatsApp villa pin, dates and guests — <a href="/book">book</a>.' },
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const SCENE = [
  {
    name: 'Destination fine dining',
    detail: "Ubud holds Bali's most decorated dining rooms — intimate counters and tasting-menu houses where local ingredients are treated with near-ceremonial seriousness. These are book-weeks-ahead tables with prices to match, and for a special night in town they're worth it. What they can't offer is the jungle-villa setting you're already paying for.",
  },
  {
    name: 'Plant-based & wellness cafés',
    detail: 'The corridor around the town centre and Penestanan is stacked with whole-food cafés: smoothie bowls, fermentation bars, raw desserts, and genuinely expert vegan cooking. This is the default fuel for the retreat and yoga crowd, and quality is reliably high at modest prices.',
  },
  {
    name: 'Warungs & the market-table tradition',
    detail: "The Ubud morning market feeds the town's warungs, where babi guling, lawar and nasi campur are eaten at shared tables for a few thousand rupiah. It's the most direct line into Balinese food culture — and the same markets our chefs shop when they cook in your villa.",
  },
]

const SERVICES = [
  {
    name: 'Jungle villa dinners',
    range: 'From IDR 700K / person',
    for: '2–10 guests',
    detail: 'Market-to-table Balinese, modern Indonesian tasting courses, or plant-forward wellness menus.',
  },
  {
    name: 'Retreat catering & private chef',
    range: 'Custom daily package',
    for: '6–40 guests',
    detail: 'Plant-based multi-day plans — or daily chef rates for villa stays.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'Pavilion parties and welcome drinks — complete mobile bar packages.',
  },
  {
    name: 'Traditional Balinese feasts',
    range: 'IDR 700K–800K / person',
    for: '8–50 guests',
    detail: 'Babi Guling, Megibung, rijsttafel — stack bar service for celebrations.',
  },
]

export default function UbudPage() {
  const canonical = `${SITE}/locations/ubud`

  const localBizUbud = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium in-villa dining, wellness and retreat chef services in Ubud, Bali — Indonesian chefs, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Ubud, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Ubud Bali Dining Guide | Jungle Villas, Restaurants & Chef Options"
        description="Ubud dining guide — jungle villas, restaurants and HACCP-certified in-villa chefs. For a dedicated chef see private chef Ubud."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-ubud.webp"
        jsonLd={[
          localBizUbud,
          breadcrumbSchema('Ubud', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-ubud.webp"
            alt="Private dining in Ubud, Bali — in-villa chef dinner by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Ubud Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Ubud Dining Guide — Jungle Villas, Restaurants &amp; When to Book a Chef</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Private dining Ubud is built for jungle villas and wellness stays — farm-to-table menus without the drive home. Ubud is the one place in Bali where dinner can be a cultural event, a wellness practice and a world-class meal in the same week. This guide covers where to eat out in Ubud, how private dining works in a town of spread-out jungle properties, and when a chef cooking in your villa is the right answer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan an Ubud Dinner
            </a>
            <Link
              to="/private-chef/ubud"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Ubud
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <HaccpTrustLine dark />
          </div>

        </div>
      </section>

      {/* What Makes Dining in Ubud Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Ubud Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Ubud's food identity rests on three pillars. <strong>Culture</strong>: this is Bali's artistic and ceremonial heartland, and its kitchens guard the island's most traditional cooking — slow-roasted Babi Guling, communal Megibung feasts, jamu tonics, market spices. <strong>Wellness</strong>: the world's retreat economy runs through Ubud, and the café scene has evolved to match — raw, vegan, Ayurvedic and macrobiotic menus are mainstream here, not niche. <strong>Geography</strong>: villas are scattered across the Sayan and Penestanan valleys, the Campuhan ridge and the Tegallalang terraces. Beautiful, but dispersed — the opposite of Seminyak's walkable strip. Roughly 75–90 minutes from the airport, Ubud rewards guests who plan their evenings rather than improvise them.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Cultural and ceremonial heartland of Bali',
              'World-class destination tasting-menu restaurants',
              'Plant-based, raw, Ayurvedic and macrobiotic cafés as standard',
              'Villas spread across jungle valleys and rice terraces',
              'Morning market sourcing and organic valley growers',
              'HACCP-certified Indonesian chefs',
              'Fixed upfront pricing quoted ++',
              'Retreat and wellness full-board programmes',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A4745]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scene by Category */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Where to Eat Out</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Ubud: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We've cooked across the Ubud region for years; this is the honest map.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {SCENE.map((s, i) => (
              <div key={i} className="border border-[#E8E6E3] rounded-2xl p-6 hover:border-[#C5A028] transition-colors">
                <h3 className="font-playfair text-xl mb-2">{s.name}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining Options */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Formats</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Ubud</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Eating out</strong> — superb for one or two destination meals; requires transport planning for out-of-town villas, and most kitchens close earlier than the south.</li>
              <li><strong>In-villa private dining</strong> — a chef comes to your jungle villa, sources from the morning market and local organic farms, and serves at your terrace table. No drive home down unlit valley roads.</li>
              <li><strong>Retreat dining programmes</strong> — full-board chef service for groups of 6–40, with menus built around the retreat's nutritional intent.</li>
            </ul>
            <p className="mb-0 leading-relaxed">
              For couples in remote Sayan or Tegallalang villas, in-villa dining is often less a luxury than the obvious logistical answer. For retreats, it's the difference between a venue kitchen lottery and a controlled, dietary-precise menu.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Ubud</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              Our Ubud teams shop the morning market, work with organic growers in the Sayan and Penestanan valleys, and build extra time into jungle logistics so service starts on schedule — wherever your villa sits. All chefs are Indonesian, HACCP-certified, and as fluent in traditional Balinese cooking as in contemporary wellness cuisine.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices are quoted ++ (11% government tax plus 10% service charge), fixed upfront. Remote villas beyond central Ubud carry a small travel allowance — always quoted before you confirm. For menus and availability, see how to <Link to="/private-chef/ubud" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Ubud</Link>; rates sit on our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link> page.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={i} className="border border-[#E8E6E3] rounded-2xl p-6 hover:border-[#C5A028] transition-colors">
                <h3 className="font-playfair text-xl mb-2">{svc.name}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C5A028] font-semibold text-sm">{svc.range}</span>
                  <span className="text-[#8A8785] text-sm">· {svc.for}</span>
                </div>
                <p className="text-[#4A4745] text-sm leading-relaxed">{svc.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-[#999] text-xs mt-6">All prices quoted ++ (11% government tax plus 10% service charge). Final pricing depends on guest count, menu complexity, and date.</p>
        </div>
      </section>

      {/* Retreats & Wellness */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Retreats & Wellness</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Dining for Retreats & Wellness Stays</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              Ubud's signature dining challenge is the multi-day group: six to forty people, three meals a day, with dietary profiles ranging from raw vegan to "just feed me well." A dedicated chef team solves it — breakfast before morning practice, recovery lunches, communal dinners, and nutritional consistency across the whole programme. For longer personal stays, a <Link to="/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">multi-day villa chef service</Link> brings the same rhythm to a private household. Full retreat logistics, staffing and sample programmes live on our <Link to="/catering/retreat-catering" className="text-[#C5A028] hover:underline font-medium">retreat catering programmes</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">How It Works</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">How Booking In-Villa Dining Works</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your date, villa location, guest count and dietary profile — replies within 2 hours (07:00–22:00 WITA).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong> — usually within 24 hours, including any travel allowance for remote villas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> For retreats, allow one to two weeks of lead time; dinners need only a few days.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Ubud Table</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether it's a tasting menu in town or a Babi Guling feast above your own gorge, Ubud rewards a little planning. Read <Link to="/journal/private-chef-ubud-villa-dining" className="text-[#C5A028] hover:underline font-medium">our Ubud villa dining guide</Link> for more — or message +62 896-7407-2020 on WhatsApp and we'll send a menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Ubud Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          
      {/* Keyword ownership: related services */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Related myCHEF Services in Ubud</h2>
        <ul className="space-y-2 text-[#4A4745]">
          <li><Link to="/private-chef/ubud" className="text-[#C5A028] hover:underline font-medium">Private chef ubud</Link> — hire a chef for villa dinners and multi-day cooking.</li>
          <li><Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Catering Bali</Link> — BBQ, buffet and group menus for larger villa parties.</li>
          <li><Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">Fine dining at your villa</Link> — tasting menus and chef’s table formats.</li>
          <li><Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline font-medium">Private dining Bali</Link> — how at-home fine dining works island-wide.</li>
        </ul>
      </section>

          <h2 className="font-playfair text-3xl mb-10">Ubud Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: 'Beach clubs, luxury villas, Bali\'s most vibrant dining scene' },
              { label: 'Canggu dining guide', path: '/locations/canggu', desc: 'Surf culture, healthy menus, poolside BBQs and retreat catering' },
              { label: 'Uluwatu dining guide', path: '/locations/uluwatu', desc: 'Clifftop seafood BBQs, weddings, and sunset tasting menus' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group block bg-white border border-[#E8E6E3] rounded-xl p-5 hover:border-[#C5A028] transition-colors"
              >
                <div className="font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#8A8785] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to private-chef page */}
      <section className="py-12 px-6">
        <div className="max-w-[960px] mx-auto text-center">
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Ubud?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Ubud service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/ubud" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Ubud <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="ubud" cityName="Ubud" />
    </div>
  )
}
