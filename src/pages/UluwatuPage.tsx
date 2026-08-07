import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Uluwatu. Can you send a menu proposal?')

const FAQS = [
  { q: 'Do you cook in Uluwatu and Bukit cliff villas?', a: 'Yes — Uluwatu, Pecatu and Bukit peninsula villas are covered. Share gate codes and steep-access notes. <a href="/locations/bukit-peninsula">Bukit guide</a>.' },
  { q: 'Can you run sunset BBQ or clifftop villa dinners?', a: 'Yes when the villa layout is safe for service. Wind and power constraints are planned into the menu. <a href="/catering/bbq-catering">BBQ catering</a>.' },
  { q: 'Is wedding catering available in Uluwatu villas?', a: 'Yes — larger events use our events chefs and full staffing plans. See <a href="/events/weddings">weddings</a>.' },
  { q: 'How far ahead for Uluwatu high-season weekends?', a: 'Book early for July–August and holiday weekends — 2+ weeks recommended for larger groups.' },
  { q: 'Do you combine chef service with airport-area logistics for Nusa Dua guests heading to Uluwatu?', a: 'We can coordinate multi-villa or multi-day plans across South Bali. Share the full itinerary for one proposal.' },
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
    name: 'Clifftop sunset venues',
    detail: 'The famous end of the spectrum: big-view restaurants and beach clubs cantilevered over the ocean, built for sunset sessions with DJs, cocktails and sharing plates. Unforgettable atmosphere — but expect peak-season crowds, minimum spends at golden hour, and a table that\'s very much not your own.',
  },
  {
    name: 'Bingin & Padang-Padang: barefoot seafood',
    detail: 'Down the cliff stairs, the surf beaches run a looser operation: family-run grills and warungs serving the day\'s catch metres from the sand. Unpolished, excellent value, and the freshest eating in the area — the same landings our chefs buy from each morning.',
  },
  {
    name: 'Ungasan & Pecatu: estate dining and local warungs',
    detail: 'Inland and along the resort corridor, the scene thins to hotel restaurants, a few polished independents, and simple local warungs on the main roads. Fine for lunch; thin for a special dinner — one reason so many Bukit villa guests eat in.',
  },
]

const SERVICES = [
  {
    name: 'Clifftop villa dinners',
    range: 'IDR 700K–750K / person',
    for: '2–12 guests',
    detail: 'Multi-course menus with sunset timing included.',
  },
  {
    name: 'Live-fire seafood BBQs',
    range: 'IDR 700K–900K / person',
    for: '8–40 guests',
    detail: 'Lobster, whole snapper and jumbo prawns from the local landings.',
  },
  {
    name: 'Wedding and rehearsal dinners',
    range: 'From IDR 700K / person',
    for: 'Large clifftop events',
    detail: 'With full service brigades.',
  },
  {
    name: 'Surf retreat catering',
    range: 'From IDR 700K / person',
    for: '6–30 guests',
    detail: 'Multi-day packages for active groups.',
  },
]

export default function UluwatuPage() {
  const canonical = `${SITE}/locations/uluwatu`

  const localBizUluwatu = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium clifftop in-villa dining and chef services in Uluwatu, Bali — sunset-timed menus, seafood from local landings, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Uluwatu, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining Uluwatu Bali | Cliff Villa Chef Guide"
        description="Private dining Uluwatu: sunset villa chef dinners, seafood BBQ and clifftop hosting tips. myCHEF cooks in Uluwatu & Bukit villas."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-uluwatu.webp"
        jsonLd={[
          localBizUluwatu,
          breadcrumbSchema('Uluwatu', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-uluwatu.webp"
            alt="Private dining in Uluwatu, Bali — in-villa chef dinner by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Uluwatu Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Dining in Uluwatu — Villa Chef Options & Local Guide
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Private dining Uluwatu is cliff-terrace dining timed to sunset — seafood BBQ or tasting menus on your own headland. Uluwatu does drama better than anywhere else in Bali. The Bukit Peninsula's southern edge is all sheer limestone cliffs, world-famous surf breaks and estates perched above the Indian Ocean. Below: where to eat out across the cliffs, what private dining means in an area with this much sky, and why the best sunset table in Uluwatu might be the one on your own terrace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan an Uluwatu Dinner
            </a>
            <Link
              to="/private-chef/uluwatu"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Uluwatu
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Dining in Uluwatu Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Uluwatu Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Three realities shape eating here. <strong>Distance</strong>: venues are strung along kilometres of cliff road from Balangan to Ungasan — there is no "strip" to stroll, and dinner usually means a drive. <strong>The sun</strong>: the entire area faces west, and golden hour is the daily centrepiece; every venue, and every good villa dinner, is timed around it. <strong>The setting</strong>: clifftop villas here are built with open-air dining pavilions and horizon views that most restaurants would kill for. The airport is roughly 40 minutes away, and the guest mix — luxury villa stays, wedding parties, surf crews — expects the food to match the view.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Dramatic clifftop and open-air villa settings',
              'Sunset is the daily dining centrepiece',
              'Seafood sourced from Bingin and Padang-Padang landings',
              'No walkable dining strip — venues are kilometres apart',
              'HACCP-certified Indonesian cliff-specialist chefs',
              'Sunset-timed course pacing as standard',
              'Fixed upfront pricing quoted ++',
              'Wedding, proposal and surf-retreat catering',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Uluwatu: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook on these cliffs every week; this is the honest layout.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Uluwatu</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Eating out</strong> — unbeatable views at the clifftop venues, traded against crowds, drives and fixed seatings.</li>
              <li><strong>Resort restaurants</strong> — polished and reliable, with resort pricing and other guests.</li>
              <li><strong>In-villa private dining</strong> — a chef team cooks and serves on your own cliff terrace, with courses timed to the sunset you're already watching. In an area where the setting is the restaurant, your villa is often the best room in town.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Uluwatu</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              Our Uluwatu teams are cliff specialists: experienced with open-air kitchens, wind exposure and access-logistics for estate properties. Seafood comes direct from the Bingin and Padang-Padang landings — often within hours of the catch — and menus are paced around the sun: first course as the light drops, mains under the stars. All chefs are Indonesian and HACCP-certified.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices quoted ++ (11% government tax plus 10% service charge), fixed upfront, with any travel allowance for remote headlands confirmed before you book. Full menus and availability: <Link to="/private-chef/uluwatu" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Uluwatu</Link>. See our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link> for the full picture.
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

      {/* Sunset/Wedding */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Milestones</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Sunset Dinners, Proposals & Wedding Tables</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              Uluwatu is where Bali comes for milestones. Elopement dinners for two to ten guests on a private cliff edge; proposal evenings where the ring appears as the horizon turns gold; rehearsal dinners and wedding receptions for up to 150 guests with the ocean as backdrop. We coordinate course pacing with the light, manage wind for open-fire cooking, and handle every logistical detail of clifftop service. For dedicated celebration formats, see our <Link to="/fine-dining/romantic-dinner" className="text-[#C5A028] hover:underline font-medium">private romantic dinner service</Link> and <Link to="/events/weddings" className="text-[#C5A028] hover:underline font-medium">wedding catering in Bali</Link>. And if seafood is the point, <Link to="/locations/jimbaran" className="text-[#C5A028] hover:underline font-medium">the Jimbaran seafood dining guide</Link> covers the bay just north of the cliffs.
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
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your date, villa, guest count and any dietary requirements — replies within 2 hours (07:00–22:00 WITA).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong> within about 24 hours, sunset timing noted.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> Dinners need a few days' notice; weddings and large events should be planned weeks ahead.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Uluwatu Evening</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            The sunset will happen with or without a booking — the question is where you're sitting. Message +62 896-7407-2020 on WhatsApp with your date and headcount, and we'll send a menu proposal, timed to the light, within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Uluwatu Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          
      {/* Keyword ownership: related services */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Related myCHEF Services in Uluwatu</h2>
        <ul className="space-y-2 text-[#4A4745]">
          <li><Link to="/private-chef/uluwatu" className="text-[#C5A028] hover:underline font-medium">Private chef uluwatu</Link> — hire a chef for villa dinners and multi-day cooking.</li>
          <li><Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Catering Bali</Link> — BBQ, buffet and group menus for larger villa parties.</li>
          <li><Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">Fine dining at your villa</Link> — tasting menus and chef’s table formats.</li>
          <li><Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline font-medium">Private dining Bali</Link> — how at-home fine dining works island-wide.</li>
        </ul>
      </section>

          <h2 className="font-playfair text-3xl mb-10">Uluwatu Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Jimbaran dining guide', path: '/locations/jimbaran', desc: 'Bayfront seafood BBQs, fresh Kedonganan catch, sunset bay dinners' },
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: 'Beach clubs, luxury villas, Bali\'s most vibrant dining scene' },
              { label: 'Ubud dining guide', path: '/locations/ubud', desc: 'Jungle villa dining, wellness retreats, Balinese feasts' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Uluwatu?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Uluwatu service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/uluwatu" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Uluwatu <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="uluwatu" cityName="Uluwatu" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
