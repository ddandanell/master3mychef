import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection, HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner on the Bukit Peninsula. Can you send a menu proposal?')

const FAQS = [
  { q: 'Which Bukit areas do you cover?', a: 'Uluwatu, Pecatu, Bingin, Padang Padang, Ungasan and nearby Bukit villa zones. See also <a href="/locations/uluwatu">Uluwatu dining</a>.' },
  { q: 'Can cliff villas host full catering teams?', a: 'Often yes with access planning — stairs, buggies and power matter. Send villa notes early.' },
  { q: 'Are sunset BBQs realistic on the Bukit?', a: 'Yes when wind and safety allow; we adapt menu and setup. <a href="/catering/bbq-catering">BBQ</a>.' },
  { q: 'How do you handle peak surf-season demand on the Bukit?', a: 'Book early for July–August and holiday weeks. Flexible midweek dates are easier.' },
  { q: 'Can one proposal cover multiple Bukit villa nights?', a: 'Yes — multi-night chef or catering programmes for villa takeovers are common.' },
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
    name: 'Clifftop day clubs & sunset venues',
    detail: 'The Bukit\'s famous format: infinity edges on the limestone rim, DJ sets, sharing plates and cocktails at a premium. Spectacular for golden hour; expect minimum spends for prime sunset spots and little privacy for a real conversation.',
  },
  {
    name: 'Resort restaurants (Karma & Meliá area)',
    detail: 'The resorts along the Ungasan coast run polished restaurants with serious wine lists and prices quoted ++. Reliable service and dramatic settings — but you\'re dining in someone else\'s room, on their schedule, and outside guests should book ahead.',
  },
  {
    name: 'Bingin, Padang Padang & Balangan local scene',
    detail: 'The surf-coast villages hide the Bukit\'s best-value eating: beach cafés, grilled-fish warungs and small family kitchens where the day\'s catch decides the menu. Casual, cash-friendly, and the freshest seafood on the peninsula.',
  },
]

const SERVICES = [
  {
    name: 'Villa dinners and tasting menus',
    range: 'From IDR 700K / person',
    for: '2–10 guests',
    detail: 'Multi-course dinners paced around the Bukit sunset, served on your own clifftop terrace.',
  },
  {
    name: 'Villa weddings and event dining',
    range: 'Custom event quote',
    for: '10–80 guests',
    detail: 'Full F&B production — chefs, catering, mobile bar and waitstaff.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'Clifftop welcome drinks and reception free-flow — packages we bring to the estate.',
  },
  {
    name: 'Weekly private chef',
    range: 'From IDR 1M++ / day',
    for: '7+ day stays',
    detail: 'A dedicated chef for longer peninsula stays — published meal-plan rates.',
  },
]

const OCCASIONS = [
  {
    name: 'Villa weddings & elopements',
    detail: 'The Bukit is Bali\'s villa-wedding capital. Clifftop estates host ceremonies, receptions and next-day brunches in one private setting — we run the full F&B production around your planner\'s run sheet.',
  },
  {
    name: 'Milestone celebrations',
    detail: 'Birthdays, anniversaries and reunions suit the peninsula\'s big terraces. One long table, the ocean below, no other guests — the celebration the estate was built for.',
  },
  {
    name: 'Surf-group feasts',
    detail: 'Groups based around Bingin, Padang Padang and Balangan want generous, fuel-heavy shared dinners after sunset sessions. Family-style formats keep it easy and social.',
  },
  {
    name: 'Corporate & retreat groups',
    detail: 'Estate buyouts for offsites and retreats need plated dinners, cocktail receptions and reliable staffing across multiple days — handled by one team that knows the terrain.',
  },
]

export default function BukitPeninsulaPage() {
  const canonical = `${SITE}/locations/bukit`

  const localBizBukit = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium in-villa dining and chef services on the Bukit Peninsula, Bali — Indonesian chefs, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Bukit Peninsula, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining in Bukit | Dining Guide & Chef Services"
        description="Where to eat in Bukit: the area dining guide — restaurants, private dining and HACCP-certified in-villa chef services for your Bukit stay. By myCHEF."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-bukit.webp"
        jsonLd={[
          localBizBukit,
          breadcrumbSchema('Bukit', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-bukit.webp"
            alt="Private dining on the Bukit Peninsula, Bali — in-villa chef dinner by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Bukit Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Bukit Peninsula Dining Guide — Bingin to Balangan
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            The Bukit is Bali&apos;s dramatic southern peninsula — limestone cliffs, estate villas and the island&apos;s biggest sunsets. This guide covers dining across Ungasan, Pecatu, Balangan and Dreamland, the private dining options beyond a restaurant booking, and why the Bukit is the island&apos;s villa-event capital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Bukit Dinner
            </a>
            <Link
              to="/private-chef/bukit"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Bukit
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <HaccpTrustLine dark />
          </div>

        </div>
      </section>

      {/* What Makes Dining on the Bukit Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining on the Bukit Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Three things define dining on the peninsula. First, <strong>space</strong>: Bukit villas are estates — event lawns, clifftop terraces and full kitchens built for entertaining at a scale the Seminyak grid can&apos;t match. Second, <strong>distance</strong>: nothing on the Bukit is walkable-together; dinner plans involve a driver, which makes &quot;the restaurant coming to you&quot; unusually attractive. Third, <strong>the sunset</strong>: the whole west rim faces the Indian Ocean, and every serious dinner here is timed around golden hour.
            </p>
            <p className="mb-0 leading-relaxed">
              The Bukit is also where Bali&apos;s villa events happen — weddings, elopements and estate celebrations — because the properties are purpose-built for them. For a full comparison of dining across Bali&apos;s villa districts, see our <Link to="/blog/dining-by-location-bali-neighborhood-guide" className="text-[#C5A028] hover:underline font-medium">Bali neighborhood dining guide</Link>. For sunset-and-clifftop dining specifically, our <Link to="/locations/uluwatu" className="text-[#C5A028] hover:underline font-medium">Uluwatu dining guide</Link> covers that strip in detail.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Estate villas built for events — lawns, terraces, real kitchens',
              'Whole-peninsula coverage: Ungasan, Pecatu, Balangan, Dreamland',
              'Sunset-facing west rim — dinners timed to golden hour',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat on the Bukit: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook across this peninsula every week, so this is a working picture rather than a listicle.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options on the Bukit</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              &quot;Private dining&quot; on the Bukit spans four formats, in ascending order of privacy:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li><strong>Resort restaurant tables</strong> — polished and scenic, but shared rooms, set time slots and resort price lists.</li>
              <li><strong>Clifftop venue buyouts</strong> — spectacular for large events; priced for productions rather than dinners.</li>
              <li><strong>Day-club event spaces</strong> — great energy for parties, with minimum spends and other guests nearby.</li>
              <li><strong>In-villa private dining</strong> — a professional chef cooks and serves at your own estate. No minimum spend, no time slot, no other guests, and the sunset is yours alone.</li>
            </ol>
            <p className="mb-0 leading-relaxed">
              On a peninsula where every restaurant means a drive, the maths tilts toward the villa quickly — and for groups of six or more, the experience does too.
            </p>
          </div>
        </div>
      </section>

      {/* Bukit Villa Weddings & Events */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The Events Angle</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Bukit Villa Weddings & Events: Dining Logistics Done Right</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Most Bukit estates run event rules — banjar (community) coordination, security deposits, music curfews commonly somewhere between 22:00 and midnight, power and generator planning for larger setups, and a rain plan for the wet season. The specifics change property by property, and they shape everything from menu timing to staffing.
            </p>
            <p className="mb-0 leading-relaxed">
              We work within these rules daily. Our teams plan clifftop wind exposure, equipment access down long private driveways, and service pacing that lands dinner before the curfew conversation starts. Planning a celebration here? See our <Link to="/events/weddings" className="text-[#C5A028] hover:underline font-medium">Bali wedding catering</Link> production for ceremonies, receptions and next-day brunches — then message us with your villa and date.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services on the Bukit</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              This is what myCHEF does across the peninsula every week. Our Indonesian chefs shop that morning — south-Bali markets and the fish landings around Padang Padang and Bingin — arrive with their own equipment, cook in your villa kitchen, serve, and leave the kitchen spotless. HACCP-certified food safety comes as standard.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices are quoted ++ (11% government tax plus 10% service charge) and fixed upfront — no surprises at the end of the evening. For menus and availability, see how to <Link to="/private-chef/bukit" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Bukit</Link>, or check our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link>. For the full white-tablecloth version, our <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">in-villa fine dining</Link> service runs tasting evenings with wine pairing.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Bukit Dining by Occasion</h2>
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
          <h2 className="font-playfair text-3xl mb-4">Plan Your Bukit Evening</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether it&apos;s a clifftop dinner for two or an estate wedding for eighty, plan it before the sunset dates fill. Browse <Link to="/locations" className="text-[#C5A028] hover:underline font-medium">all Bali dining areas</Link> — then message +62 896-7407-2020 on WhatsApp and we&apos;ll have a menu proposal with you within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Bukit Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Bukit Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Uluwatu dining guide', path: '/locations/uluwatu', desc: 'Sunset and clifftop dining on the Bukit\'s western rim' },
              { label: 'Jimbaran dining guide', path: '/locations/jimbaran', desc: 'Bay seafood, Kedonganan market sourcing, welcome dinners' },
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: 'Bali\'s densest restaurant strip and villa district' },
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
          <p className="text-center text-[#8A8785] text-sm mt-8">
            Chef teams by neighbourhood: <Link to="/private-chef/ungasan" className="text-[#C5A028] hover:underline font-medium">Ungasan</Link> · <Link to="/private-chef/pecatu" className="text-[#C5A028] hover:underline font-medium">Pecatu</Link> · <Link to="/private-chef/balangan" className="text-[#C5A028] hover:underline font-medium">Balangan</Link>
          </p>
        </div>
      </section>

      {/* Cross-link to private-chef page */}
      <section className="py-12 px-6">
        <div className="max-w-[960px] mx-auto text-center">
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef on the Bukit?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa or estate event, our Bukit service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/bukit" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Bukit <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="bukit" cityName="Bukit" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
