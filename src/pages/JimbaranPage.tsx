import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa seafood dinner in Jimbaran. Can you send a menu proposal?')

const FAQS = [
  { q: 'Can we book a seafood-focused private chef in Jimbaran?', a: 'Yes — Jimbaran is ideal for seafood-led villa menus when catch and supply allow. Request a seafood specialist on WhatsApp. <a href="/private-chef/jimbaran">Private chef Jimbaran</a>.' },
  { q: 'Do you cover Jimbaran beach villas and inland estates?', a: 'Yes across Jimbaran villa zones. Beach access and kitchen constraints should be noted in your brief.' },
  { q: 'Can families book casual villa dinners after a beach day?', a: 'Yes — flexible timing and kids plates are common. See <a href="/kids-menus">kids menus</a>.' },
  { q: 'Is Jimbaran good for larger villa celebrations?', a: 'Yes — many estates host 20–80 guest dinners with buffet or BBQ formats. <a href="/catering">Catering</a>.' },
  { q: 'Any travel fee for Jimbaran?', a: 'Jimbaran is core South Bali coverage. Your quote lists any exception for unusually remote access.' },
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
    name: 'The bay\'s sunset fish restaurants',
    detail: 'The institution. Dozens of beachfront grills line the sand, serving chosen-by-weight seafood with rice, vegetables and sambal as the sun drops. It\'s a genuine Bali experience — arrive before sunset, expect tourist pricing and lively crowds, and know that the best tables go early in high season.',
  },
  {
    name: 'Kedonganan: the market end',
    detail: 'For the freshest and cheapest eating, the warungs around the fish market itself serve the catch without the sunset theatre. Lunch here is as local as Jimbaran gets — and it\'s where our chefs select seafood each morning for villa dinners.',
  },
  {
    name: 'Resort dining & the southern cliffs',
    detail: "The bay's luxury resorts run polished seafood restaurants and clifftop dining rooms with flawless service and pricing to match. South along the cliffs, options thin out quickly — one more reason clifftop villa guests so often dine in.",
  },
]

const SERVICES = [
  {
    name: 'Seafood villa dinners',
    range: 'IDR 700K–750K / person',
    for: '2–12 guests',
    detail: "Multi-course menus built on the morning's catch — private chef day rates for multi-day stays.",
  },
  {
    name: 'Bayfront seafood BBQs',
    range: 'IDR 700K–850K / person',
    for: '8–40 guests',
    detail: 'Lobster, whole fish and shellfish over live fire — stack free-flow mobile bar for drinks.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'Sunset free-flow and welcome drinks — complete mobile bar packages we bring to the villa.',
  },
  {
    name: 'Celebration & proposal dinners',
    range: 'IDR 700K–1.5M / person',
    for: '2–30 guests',
    detail: 'Paced to the sunset — chef, catering or fine dining formats.',
  },
]

export default function JimbaranPage() {
  const canonical = `${SITE}/locations/jimbaran`

  const localBizJimbaran = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Seafood-led in-villa dining and chef services in Jimbaran, Bali — same-day catch from Kedonganan fish market, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Jimbaran, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining in Jimbaran | Dining Guide & Chef Services"
        description="Where to eat in Jimbaran: the area dining guide — restaurants, private dining and HACCP-certified in-villa chef services for your Jimbaran stay. By myCHEF."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-jimbaran.webp"
        jsonLd={[
          localBizJimbaran,
          breadcrumbSchema('Jimbaran', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-jimbaran.webp"
            alt="Private dining in Jimbaran, Bali — in-villa seafood dinner by myCHEF"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Jimbaran Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Jimbaran Dining Guide — Where to Eat & When to Book a Chef</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Jimbaran is the one address in Bali where the meal and the map are the same thing. A calm crescent bay fifteen minutes from the airport, the island's busiest fish landing at its northern end, and a shoreline famous for sunset seafood dinners. This guide covers the bay's dining scene honestly, explains the private dining formats beyond a beach table, and shows how the same morning's fish can end up on your own villa terrace instead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Plan a Jimbaran Dinner
            </a>
            <Link
              to="/private-chef/jimbaran"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Jimbaran
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <HaccpTrustLine dark />
          </div>

        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Jimbaran Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Everything starts at Kedonganan, the fish market at the bay's northern end — one of the most active seafood landings on the island. What comes ashore at dawn defines what the whole area eats by dusk: red snapper, tiger prawns, lobster, clams, squid. Around that supply chain, Jimbaran grew a dining culture entirely its own: toes-in-the-sand seafood at sunset, smoke from a hundred charcoal grills, and a guest mix of families and celebration groups rather than the party crowd. The bay faces west, the water is calm, and the villas above it — from the Four Seasons estate zone to the Ayana ridge and Muaya Beach — have terraces built for exactly this kind of evening.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Seafood driven by Kedonganan fish market landings',
              'Calm west-facing bay famous for sunset grills',
              'Same-day catch cooked at your villa table',
              'Bay restaurants, resort dining and in-villa private dining',
              'HACCP-certified Indonesian chefs',
              'Fixed upfront pricing — no per-kilo arithmetic',
              'Sunset-timed course pacing for proposals and celebrations',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A4745]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Where to Eat Out</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Jimbaran: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We source from this bay every day; here's the unvarnished picture.
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

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Formats</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Jimbaran</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>The beach restaurants</strong> — atmosphere you can't manufacture, traded against crowds, hawkers and per-kilo pricing that can surprise.</li>
              <li><strong>Resort restaurants</strong> — polish without privacy.</li>
              <li><strong>In-villa private dining</strong> — the same Kedonganan catch, selected the morning of your dinner, cooked and served at your own villa table with the bay as your backdrop. No crowds, no per-kilo bill shock, no taxi home.</li>
            </ul>
            <p className="mb-0 leading-relaxed">
              The honest summary: come to the beach strip once for the experience. For the dinners that matter — the celebration, the proposal, the family reunion — the villa version wins on freshness, pacing and price clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Jimbaran</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              Our Jimbaran team is built around the market. Chefs select at Kedonganan each morning — whole snapper, local prawns, lobster, shellfish — and build menus around what actually landed. No frozen proteins. Live-fire BBQs run on your villa lawn or terrace with full grill setup, service and cleanup; plated tasting menus run to sunset timing on request. All chefs are Indonesian and HACCP-certified.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices quoted ++ (11% government tax plus 10% service charge), fixed upfront — no per-kilo arithmetic at the end of the night. Menus and availability: <Link to="/private-chef/jimbaran" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Jimbaran</Link>. For dedicated grill formats, see our <Link to="/catering/bbq-catering" className="text-[#C5A028] hover:underline font-medium">BBQ catering service</Link>; full rates on the <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link> page.
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

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Occasions</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Occasions: Sunsets, Proposals & Arrival Feasts</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              Jimbaran's west-facing bay makes it Bali's natural celebration dining room. Proposal dinners timed so the ring appears as the horizon turns gold; anniversary tables on candlelit terraces; milestone birthdays around a seafood BBQ; and the arrival-night feast that sets the tone for a family holiday — Indonesian sharing plates and grilled catch, ready an hour after you've dropped the bags. For dedicated romantic formats, see our <Link to="/fine-dining/romantic-dinner" className="text-[#C5A028] hover:underline font-medium">private romantic dinner service</Link>. Planning a clifftop evening further south? See <Link to="/locations/uluwatu" className="text-[#C5A028] hover:underline font-medium">the Uluwatu dining guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">How It Works</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">How Booking In-Villa Dining Works</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your date, villa, guest count and any dietary requirements — replies within 2 hours (07:00–22:00 WITA). Ask what landed at the market this morning.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong> within about 24 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> For sunset dinners and weekends, a few days to a week ahead is wise.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Jimbaran Table</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Same catch, your villa, no crowds. Message +62 896-7407-2020 on WhatsApp with your date and headcount — ask what's landing this week — and we'll send a menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Jimbaran Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Jimbaran Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Uluwatu dining guide', path: '/locations/uluwatu', desc: 'Clifftop drama, Indian Ocean views, seafood BBQs at the edge' },
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: "Beachfront fine dining, villa parties, Bali's most vibrant scene" },
              { label: 'Nusa Dua dining guide', path: '/locations/nusa-dua', desc: 'Resort villas, corporate dining, polished estate service' },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="group block bg-white border border-[#E8E6E3] rounded-xl p-5 hover:border-[#C5A028] transition-colors">
                <div className="font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#8A8785] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-[960px] mx-auto text-center">
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Jimbaran?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Jimbaran service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/jimbaran" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Jimbaran <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="jimbaran" cityName="Jimbaran" />
    </div>
  )
}
