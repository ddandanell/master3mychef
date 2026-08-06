import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Kuta / Legian. Can you send a menu proposal?')

const FAQS = [
  { q: 'Do you offer private chefs in Kuta and Legian?', a: 'Yes for villas and suitable kitchens in Kuta, Legian and nearby streets. Share kitchen photos if the space is compact.' },
  { q: 'Can hotel rooms book a private chef?', a: 'Private chefs need a real kitchen — pure hotel rooms usually do not work. Villas and apartment kitchens do.' },
  { q: 'Is BBQ possible for Kuta group villas?', a: 'Yes when outdoor space and rules allow. <a href="/catering/bbq-catering">BBQ catering</a>.' },
  { q: 'Can bachelor or group trips book chef + bartender packages?', a: 'Yes — popular for group villas. See <a href="/events/villa-parties">villa parties</a> and <a href="/in-villa-service/bartenders">cocktail packages</a>.' },
  { q: 'How last-minute can Kuta bookings be?', a: 'Often same-week; same-day depends on chef inventory. WhatsApp is the fastest path.' },
  { q: 'Do you serve this Bali area?', a: 'Yes — private chef, catering and events operate across major villa regions. Hub: <a href="/locations">locations</a> · <a href="/private-chef-bali">private chef</a>.' },
  { q: 'Is there a travel fee?', a: 'Core South Bali is usually included; remote spots may add a distance fee quoted upfront.' },
  { q: 'Can you cook in Airbnb villas here?', a: 'Yes with a workable kitchen — share the listing.' },
  { q: 'Same prices as other areas?', a: 'Published day rates and menu starts apply; only remote logistics may differ.' },
  { q: 'Fine dining available here?', a: 'Yes — <a href="/fine-dining">fine dining</a>.' },
  { q: 'BBQ and parties?', a: 'Yes — <a href="/catering/bbq-catering">BBQ catering</a> · <a href="/events/villa-parties">villa parties</a>.' },
  { q: 'Daily chef for a week?', a: 'Yes — meal plans on <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'Staff and bartenders?', a: 'Yes — <a href="/in-villa-service">in-villa service</a>.' },
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
  { q: 'Can this combine with other services?', a: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

const SCENE = [
  {
    name: 'Legian & Double Six',
    detail: 'The real villa zone — and the best dining in the Kuta area. Beachfront restaurants along Double Six beach do sunset dinners properly, and the lanes behind them hide relaxed cafés and warungs. This is where villa groups actually eat out.',
  },
  {
    name: 'Kuta strip & Tuban',
    detail: 'High-energy, high-convenience: big casual restaurants, surf cafés and hotel dining rooms minutes from the airport. Perfect for arrival-night dinners and feeding a tired group fast — less suited to a special-occasion table.',
  },
  {
    name: 'Seminyak-south edge',
    detail: 'The boundary between Legian and Seminyak blurs into serious restaurant territory. When the group wants a proper night out — reservations, wine lists, dressed-up dinners — this edge is a five-minute drive from most Legian villas.',
  },
]

const SERVICES = [
  {
    name: 'Villa BBQs and sharing feasts',
    range: 'From IDR 700K / person',
    for: '6–30 guests',
    detail: 'Poolside grills and family-style feasts — the Kuta-Legian signature format.',
  },
  {
    name: 'Party dinners and celebrations',
    range: 'From IDR 700K / person',
    for: '10–50 guests',
    detail: 'Birthdays, bucks and hens nights — with waiters and bartenders available.',
  },
  {
    name: 'Weekly chef service',
    range: 'Custom daily package',
    for: '7+ day stays',
    detail: 'A dedicated chef for the whole holiday week, from breakfast through dinner.',
  },
]

const OCCASIONS = [
  {
    name: 'Bucks & hens parties',
    detail: 'The Kuta-Legian corridor is Bali\'s party-villa heartland. A catered feast before the night out — with a bartender mixing at your own pool — beats queuing for a group table anywhere on the strip.',
  },
  {
    name: 'Birthday celebrations',
    detail: 'Villa birthday dinners scale from ten friends to fifty: sharing feasts, BBQ stations and full staffing so the host never leaves the party.',
  },
  {
    name: 'Family holiday dinners',
    detail: 'Big mixed groups, early seatings, kids\' plates sorted without negotiation — one table at the villa keeps every generation together and on schedule.',
  },
  {
    name: 'Arrival & farewell nights',
    detail: 'Ten minutes from the airport, Kuta and Tuban are where Bali trips begin and end. A chef dinner at the villa turns the first or last night into part of the holiday instead of logistics.',
  },
]

export default function KutaPage() {
  const canonical = `${SITE}/locations/kuta`

  const localBizKuta = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium in-villa dining and chef services in Kuta and Legian, Bali — Indonesian chefs, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Kuta, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining in Kuta | Dining Guide & Chef Services"
        description="Where to eat in Kuta: the area dining guide — restaurants, private dining and in-villa chef services for your Kuta stay. By myCHEF."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-kuta.webp"
        jsonLd={[
          localBizKuta,
          breadcrumbSchema('Kuta', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-kuta.webp"
            alt="Private dining in Kuta and Legian, Bali — in-villa chef dinner by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Kuta Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Dining in Kuta: Where to Eat & In-Villa Chef Options
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kuta is where Bali trips begin — and Legian is where the villas actually are. This guide covers eating out across Kuta, Legian, Double Six and Tuban, the private dining options beyond a restaurant booking, and how party groups get fed properly without leaving the villa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Kuta Dinner
            </a>
            <Link
              to="/private-chef/kuta"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Kuta
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Dining in Kuta Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Kuta Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              First, a local truth: <strong>Kuta itself is villa-poor</strong>. The private-villa stock that drives group dining sits in <Link to="/private-chef/legian" className="text-[#C5A028] hover:underline font-medium">Legian</Link> — around Double Six beach and the lanes toward Seminyak-south — while Kuta proper is hotels, suites and the famous strip. Second, <strong>the crowd</strong>: Australian families, surf groups and party crews — bucks, hens and birthday groups who want generous food, cold drinks and zero fuss. Third, <strong>the airport</strong>: ten minutes away, which makes Kuta and Tuban the natural home of arrival-night and farewell dinners.
            </p>
            <p className="mb-0 leading-relaxed">
              Dining here is relaxed by design — poolside BBQs and sharing feasts over plated formality — but the standards don&apos;t have to drop. For a comparison with Bali&apos;s other villa districts, see our <Link to="/blog/dining-by-location-bali-neighborhood-guide" className="text-[#C5A028] hover:underline font-medium">Bali neighborhood dining guide</Link>.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Legian & Double Six — the real villa dining zone',
              'Party-group specialists: bucks, hens, birthdays',
              'Ten minutes from Ngurah Rai airport — arrival-night friendly',
              'HACCP-certified Indonesian chefs available in-villa',
              '50% deposit to secure your date — balance due the day before the event',
              'Fixed upfront pricing — no bill surprises at the end of the night',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'All dietary requirements planned before we shop',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Kuta: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook across this corridor every week, so this is a working picture rather than a listicle.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Kuta</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              &quot;Private dining&quot; around Kuta spans four formats, in ascending order of privacy:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li><strong>Restaurant group tables</strong> — easy to book, but a big group gets split, rushed and upsold on a busy strip night.</li>
              <li><strong>Beachfront venue sections</strong> — reserved daybeds and deck space along Double Six; fun, but minimum spends apply and the public is all around you.</li>
              <li><strong>Hotel private rooms</strong> — reliable service in Kuta and Tuban; convenient for suite stays, limited in atmosphere.</li>
              <li><strong>In-villa private dining</strong> — a professional chef cooks and serves at your own Legian villa. No minimum spend, no curfew on your table, no splitting the group.</li>
            </ol>
            <p className="mb-0 leading-relaxed">
              For groups of six or more — which is most Kuta bookings — the villa format wins on both cost per head and the night itself.
            </p>
          </div>
        </div>
      </section>

      {/* Party Dining */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The Party Angle</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Party Dining in Kuta & Legian, Done Properly</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              This corridor runs on celebrations — bucks and hens trips, milestone birthdays, surf-crew reunions. The pattern that works: a proper catered feast at the villa first, drinks mixed at your own pool, then the night out with a full stomach and a home base to return to. We plan party timelines around each villa&apos;s noise rules — most enforce music curfews somewhere between 22:00 and midnight — and we can advise on safe, honest alcohol sourcing for your group.
            </p>
            <p className="mb-0 leading-relaxed">
              For the full production, see our <Link to="/events/villa-parties" className="text-[#C5A028] hover:underline font-medium">villa party catering</Link>, add a professional <Link to="/in-villa-service/bartenders" className="text-[#C5A028] hover:underline font-medium">bartender</Link> from IDR 500,000++ per guest (min 10 guests), or go straight for a poolside <Link to="/catering/bbq-catering" className="text-[#C5A028] hover:underline font-medium">BBQ catering</Link> spread — the Kuta-Legian signature.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Kuta</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              This is what myCHEF does across Kuta, Legian and Tuban every week. Our Indonesian chefs shop that morning, arrive with their own equipment, cook in your villa kitchen or at the poolside grill, serve, and leave everything spotless. HACCP-certified food safety comes as standard.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices are quoted ++ (11% government tax plus 10% service charge) and fixed upfront — no surprises at the end of the evening. For menus and availability, see how to <Link to="/private-chef/kuta" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Kuta</Link>, or check our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link>. For the full white-tablecloth version, our <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">in-villa fine dining</Link> service runs tasting evenings with wine pairing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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

      {/* Dining by Occasion */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">By Occasion</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Kuta Dining by Occasion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {OCCASIONS.map((o, i) => (
              <div key={i} className="border border-[#E8E6E3] rounded-2xl p-6 hover:border-[#C5A028] transition-colors">
                <h3 className="font-playfair text-xl mb-2">{o.name}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{o.detail}</p>
              </div>
            ))}
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
              <span className="text-[#4A4745]"><strong>Message us on WhatsApp</strong> — +62 896-7407-2020 — with your date, villa location, guest count and any dietary requirements. We reply within 2 hours (07:00–22:00 WITA).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong>, usually within 24 hours. No deposit is required to enquire.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit</strong> — the balance is due the day before the event. The chef shops, cooks, serves and cleans up; you sit down.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Kuta Evening</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether the plan is a Legian pool feast before a big night out or a quiet family dinner after the flight, lock it in early. Browse <Link to="/locations" className="text-[#C5A028] hover:underline font-medium">all Bali dining areas</Link> — then message +62 896-7407-2020 on WhatsApp and we&apos;ll have a menu proposal with you within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Kuta Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Kuta Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: 'Bali\'s densest restaurant strip, ten minutes north' },
              { label: 'Canggu dining guide', path: '/locations/canggu', desc: 'Surf culture, healthy menus and poolside BBQs' },
              { label: 'Jimbaran dining guide', path: '/locations/jimbaran', desc: 'Bay seafood and welcome dinners near the airport' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Kuta?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Kuta service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/kuta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Kuta <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="kuta" cityName="Kuta" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
