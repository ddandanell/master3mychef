import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Seminyak. Can you send a menu proposal?')

const FAQS = [
  { q: 'How much does private dining cost in Seminyak?', a: 'Published starts live on <a href="/pricing">pricing</a>. Seminyak is core coverage. For chef-led villa dinners see <a href="/private-chef/seminyak">private chef Seminyak</a>.' },
  { q: 'Do you serve Petitenget and Oberoi-area villas?', a: 'Yes — Seminyak, Petitenget and nearby villa streets are standard service zones with no remote surcharge.' },
  { q: 'Can you handle VIP and discreet villa dinners in Seminyak?', a: 'Yes — privacy-first service for high-profile guests is routine. Request a senior chef via WhatsApp and note discretion requirements.' },
  { q: 'Fine dining vs casual villa dinner in Seminyak — which should I book?', a: 'Tasting menus via <a href="/fine-dining">fine dining</a>; relaxed grill or family-style via private chef or <a href="/catering">catering</a>. Tell us the occasion and guest mix.' },
  { q: 'Can Seminyak villa parties add a mobile cocktail bar?', a: 'Yes — complete mobile bar packages from IDR 500,000++ per guest (min 10). Stack with catering or private chef. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
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
    name: 'The Oberoi & Petitenget strip',
    detail: 'The fine-dining heartland. Expect multi-course European and modern Asian menus, serious wine lists and prices quoted ++. The best rooms book out days ahead in high season, and the most famous tables turn two or three seatings a night — polished, but rarely private.',
  },
  {
    name: 'Sunset beach clubs',
    detail: 'The venues along Seminyak Beach and up toward Petitenget and Batu Belig are built for golden hour: daybeds, DJ sets, sharing plates and cocktails at a premium. Wonderful for the atmosphere; less suited to quiet conversation, and minimum spends climb sharply for groups at sunset.',
  },
  {
    name: 'Cafés, brunch & back-lane warungs',
    detail: 'Behind the strip — Laksmana, Basangkasa, and the lanes toward Kerobokan — is Seminyak\'s everyday engine: specialty coffee, long brunches, and local warungs serving nasi campur at a fraction of strip prices. This is where resident expats actually eat, and the best-value dining in the district.',
  },
]

const SERVICES = [
  {
    name: 'Villa dinners and tasting menus',
    range: 'From IDR 700K / person',
    for: '2–10 guests',
    detail: 'Multi-course menus that rival the strip\'s best tables, for 2–10 guests.',
  },
  {
    name: 'Catering & villa parties',
    range: 'From IDR 700K / person',
    for: '10–80 guests',
    detail: 'BBQ, buffet and receptions — stack a mobile cocktail bar for drinks.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'We bring a complete bar to Seminyak villas — BYO or free-flow packages.',
  },
  {
    name: 'Weekly private chef',
    range: 'From IDR 1M++ / day',
    for: '7+ day stays',
    detail: 'A dedicated chef for multi-day stays — meal plans on private chef Bali.',
  },
]

const OCCASIONS = [
  {
    name: 'Romantic dinners',
    detail: 'A candlelit tasting menu beside your own pool beats a two-seating restaurant slot; courses can be timed to the sunset.',
  },
  {
    name: 'Family gatherings',
    detail: 'One table, every generation, no splitting the group across a busy dining room; children\'s plates handled without negotiation.',
  },
  {
    name: 'Groups and celebrations',
    detail: 'Birthdays, bachelorettes and reunions are Seminyak\'s signature; villa terraces here comfortably host 60–80 guests for catered events.',
  },
  {
    name: 'Corporate hosting',
    detail: 'Cocktail receptions and plated dinners with full service staff, for teams who want the evening handled.',
  },
]

export default function SeminyakPage() {
  const canonical = `${SITE}/locations/seminyak`

  const localBizSeminyak = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium in-villa dining and chef services in Seminyak, Bali — Indonesian chefs, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Seminyak, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Seminyak Bali Dining Guide | Restaurants, Villas & Chef Options"
        description="Seminyak dining guide — restaurants, villa hosting tips and when to hire HACCP-certified chefs. For a dedicated chef see private chef Seminyak."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-seminyak.webp"
        jsonLd={[
          localBizSeminyak,
          breadcrumbSchema('Seminyak', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-seminyak.webp"
            alt="Private dining in Seminyak, Bali — in-villa chef dinner by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Seminyak Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Seminyak Dining Guide — Restaurants, Villas &amp; When to Book a Chef</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Private dining Seminyak means restaurant-level food at your villa table — the format most of our Petitenget and Oberoi guests choose. Seminyak is where Bali learned to dress for dinner. The island's original luxury villa district packs more restaurants per square kilometre than anywhere else in Bali. This guide covers the Seminyak dining scene by category, the private dining options beyond a restaurant booking, and when an in-villa chef dinner is the better table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Seminyak Dinner
            </a>
            <Link
              to="/private-chef/seminyak"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Seminyak
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <HaccpTrustLine dark />
          </div>

        </div>
      </section>

      {/* What Makes Dining in Seminyak Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Seminyak Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Three things set Seminyak apart. First, <strong>density</strong>: Petitenget, Oberoi and the lanes between them hold hundreds of restaurants, cafés and bars within a walkable grid — no other Balinese neighbourhood comes close. Second, <strong>the crowd</strong>: villa groups, design-conscious couples and long-term expats, which keeps standards high and reservations competitive. Third, <strong>the villas themselves</strong>: elegant compounds with pools, dining pavilions and proper kitchens — meaning "eating in" here is not a compromise but a genuinely different format.
            </p>
            <p className="mb-0 leading-relaxed">
              Seminyak sits roughly 30–40 minutes from the airport, and its beach faces due west: sunset is the area's daily main event. For a full comparison of dining across Bali's villa districts, see our <Link to="/blog/dining-by-location-bali-neighborhood-guide" className="text-[#C5A028] hover:underline font-medium">Bali neighborhood dining guide</Link>.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'More restaurants per square kilometre than anywhere else in Bali',
              'Walkable Petitenget, Oberoi and Kayu Aya dining strip',
              'Sunset beach clubs and back-lane warungs in the same neighbourhood',
              'Villas built for private dining: pools, pavilions and real kitchens',
              'HACCP-certified Indonesian chefs available in-villa',
              'Fixed upfront pricing — no per-kilo bill surprises',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Seminyak: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook in this neighbourhood every week, so this is a working picture rather than a listicle.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Seminyak</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              "Private dining" in Seminyak spans four formats, in ascending order of privacy:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li><strong>Restaurant private rooms</strong> — a handful of strip venues have them; expect set menus, minimum spends and fixed time slots.</li>
              <li><strong>Beach club buyouts</strong> — impressive, but priced for events rather than dinners.</li>
              <li><strong>Resort and hotel restaurants</strong> — reliable service, though you're still sharing the room.</li>
              <li><strong>In-villa private dining</strong> — a professional chef cooks and serves at your own villa table. No minimum spend, no time slot, no other guests.</li>
            </ol>
            <p className="mb-0 leading-relaxed">
              For two people, a restaurant usually wins on simplicity. For groups of six or more, the maths and the experience both flip toward the villa.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Seminyak</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              This is what myCHEF does across Seminyak every day. Our Indonesian chefs shop that morning — Pasar Seminyak and the producers along Jalan Petitenget — arrive with their own equipment, cook in your villa kitchen, serve, and leave the kitchen spotless. HACCP-certified food safety comes as standard.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices are quoted ++ (11% government tax plus 10% service charge) and fixed upfront — no surprises at the end of the evening. A waiter or sommelier can be added from around IDR 250K per hour, and a bartender from around IDR 500,000++ per guest. For menus and availability, see how to <Link to="/private-chef/seminyak" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Seminyak</Link>, or check our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link>. For the full white-tablecloth version, our <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">in-villa fine dining</Link> service runs tasting evenings with wine pairing.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Seminyak Dining by Occasion</h2>
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
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> The chef shops, cooks, serves and cleans up; you sit down.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Seminyak Evening</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether your best night in Seminyak is out on the strip or around your own pool, plan it before the sunset slots fill. Browse <Link to="/locations" className="text-[#C5A028] hover:underline font-medium">all Bali dining areas</Link>, read <Link to="/journal/private-chef-seminyak-guide" className="text-[#C5A028] hover:underline font-medium">our Seminyak local</Link>, or compare <Link to="/blog/private-chef-seminyak-canggu-ubud-comparison" className="text-[#C5A028] hover:underline font-medium">Seminyak vs Canggu vs Ubud — which area fits your chef dinner</Link> — then message +62 896-7407-2020 on WhatsApp and we'll have a menu proposal with you within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Seminyak Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          
      {/* Keyword ownership: related services */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Related myCHEF Services in Seminyak</h2>
        <ul className="space-y-2 text-[#4A4745]">
          <li><Link to="/private-chef/seminyak" className="text-[#C5A028] hover:underline font-medium">Private chef seminyak</Link> — hire a chef for villa dinners and multi-day cooking.</li>
          <li><Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Catering Bali</Link> — BBQ, buffet and group menus for larger villa parties.</li>
          <li><Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">Fine dining at your villa</Link> — tasting menus and chef’s table formats.</li>
          <li><Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline font-medium">Private dining Bali</Link> — how at-home fine dining works island-wide.</li>
          <li><Link to="/experiences/cooking-class#seminyak" className="text-[#C5A028] hover:underline font-medium">Cooking class in Seminyak</Link> — private Balinese cooking classes in your design villa; a popular pre-dinner activity for groups, hen parties and couples.</li>
        </ul>
      </section>

          <h2 className="font-playfair text-3xl mb-10">Seminyak Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Canggu dining guide', path: '/locations/canggu', desc: 'Surf culture, healthy menus, poolside BBQs and retreat catering' },
              { label: 'Uluwatu dining guide', path: '/locations/uluwatu', desc: 'Clifftop seafood BBQs, weddings, and sunset tasting menus' },
              { label: 'Ubud dining guide', path: '/locations/ubud', desc: 'Jungle villa dinners, wellness retreats, Balinese feasts' },
              { label: 'Kuta & Legian dining guide', path: '/locations/kuta', desc: 'Beachfront dining, sunset BBQs and lively group catering near the airport' },
              { label: 'Denpasar dining guide', path: '/locations/denpasar', desc: 'City villa dining, authentic Balinese feasts and family events' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Seminyak?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Seminyak service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/seminyak" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Seminyak <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="seminyak" cityName="Seminyak" />
    </div>
  )
}
