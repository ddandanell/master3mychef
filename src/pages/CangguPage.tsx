import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Canggu. Can you send a menu proposal?')

const FAQS = [
  { q: 'How much does a private chef cost in Canggu?', a: 'Day rates and per-person catering starts are published on <a href="/pricing">pricing</a>. Canggu–Berawa is core coverage without remote travel fees. Weekly chef service is popular for longer stays — see <a href="/private-chef/canggu">private chef Canggu</a>.' },
  { q: 'Do you cover Berawa, Batu Bolong and Pererenan from Canggu?', a: 'Yes — Berawa and Batu Bolong are core Canggu coverage. Pererenan is adjacent; see also <a href="/locations/pererenan">Pererenan dining</a> and <a href="/private-chef/pererenan">private chef Pererenan</a>.' },
  { q: 'Can I book a weekly chef while working remotely from Canggu?', a: 'Yes — multi-day meal prep and daily chef service are common for long-stay Canggu villas. Share dietary preferences and work-from-home schedule on WhatsApp.' },
  { q: 'Is poolside BBQ popular in Canggu villas?', a: 'Very — surf groups and birthday villas book BBQ often. See <a href="/catering/bbq-catering">BBQ catering</a> and add <a href="/in-villa-service/bartenders">cocktail packages</a>.' },
  { q: 'How early to book a chef for Canggu peak season?', a: 'High season and Saturday nights: 1–2 weeks is safer. Midweek and low season can often be confirmed in a few days.' },
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
    name: 'Batu Bolong & the café strip',
    detail: 'The busiest corridor — brunch institutions, taco joints, pizza ovens and chef-led bistros shoulder to shoulder. Quality is high; so are the queues. The best-known dinner spots fill by 7pm and parking is a contact sport. Book ahead or eat early.',
  },
  {
    name: 'Echo Beach & sunset spots',
    detail: 'The western end trades café polish for salt air: grilled-seafood warungs on the sand, sunset bars, and casual dining terraces above the break. The mood is flip-flop formal — great for groups who want atmosphere over ceremony.',
  },
  {
    name: 'Health food, plant-based & everyday warungs',
    detail: "Canggu's real signature. Dedicated vegan kitchens, macro bowls, cold-pressed everything — alongside excellent local warungs on the quieter lanes of Babakan and Nelayan where a nasi campur costs less than a flat white on Batu Bolong. Berawa adds a boutique row of bakeries and wine bars between the two.",
  },
]

const SERVICES = [
  {
    name: 'Villa and pool dinners',
    range: 'From IDR 700K / person',
    for: '2–12 guests',
    detail: 'Fresh seafood, modern Asian, or a classic grill.',
  },
  {
    name: 'Poolside BBQ catering',
    range: 'IDR 700K–800K / person',
    for: '10–40 guests',
    detail: 'Live grill — stack free-flow mobile bar for drinks.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'Complete mobile bar for Canggu villa parties and sunset free-flow.',
  },
  {
    name: 'Weekly private chef',
    range: 'From IDR 1M++ / day',
    for: 'Multi-day stays',
    detail: 'Daily meals for surf families and long stays — published day rates.',
  },
]

export default function CangguPage() {
  const canonical = `${SITE}/locations/canggu`

  const localBizCanggu = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium in-villa dining, chef services and weekly meal prep in Canggu, Bali — Indonesian chefs, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Canggu, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Canggu Bali Dining Guide | Restaurants, Villas & When to Book a Chef"
        description="Canggu dining guide — Batu Bolong spots, villa hosting and HACCP-certified private chefs. For a dedicated chef see private chef Canggu."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-canggu.webp"
        jsonLd={[
          localBizCanggu,
          breadcrumbSchema('Canggu', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-canggu.webp"
            alt="Canggu Bali dining guide — villa terrace and neighbourhood food scene by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Canggu Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Canggu Dining Guide — Restaurants, Villas &amp; When to Book a Chef
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Canggu eats the way it lives: early, healthy and outdoors. This guide maps where to eat out, how villa hosting works, and when the smartest table is already inside your villa. Need a dedicated cook? Use our{' '}
            <Link to="/private-chef/canggu" className="text-[#C5A028] hover:underline font-medium">private chef in Canggu</Link> page for rates and meal plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Canggu Dinner
            </a>
            <Link
              to="/private-chef/canggu"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Canggu
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <HaccpTrustLine dark />
          </div>

        </div>
      </section>

      {/* What Makes Dining in Canggu Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Canggu Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Canggu is not one strip but a sprawl. Batu Bolong, Echo Beach and Berawa each have their own centre of gravity, connected by scooter-clogged shortcuts that make a ten-minute drive feel like an expedition at dinner hour. The food culture skews fresh and functional — smoothie bowls and specialty coffee by day, charcoal grills and natural wine by night — with more plant-based, gluten-free and high-protein options than anywhere else in Bali.
            </p>
            <p className="mb-0 leading-relaxed">
              The other defining fact: people stay. A week in Canggu is common; a month is normal. That changes the dining question from "where do we eat tonight?" to "how do we eat well all month?" — and it's why in-villa dining and weekly chef services matter more here than in any other Bali neighbourhood. The airport is roughly 45–60 minutes away, and sunsets over Echo Beach set the evening's timetable. See how Canggu compares to Seminyak, Ubud and Uluwatu in our <Link to="/blog/dining-by-location-bali-neighborhood-guide" className="text-[#C5A028] hover:underline font-medium">Bali neighborhood dining guide</Link>.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Sprawling scene from Batu Bolong to Berawa and Pererenan',
              'Highest density of plant-based, gluten-free and high-protein menus in Bali',
              'Long-stay guests shift the dining question to monthly eating well',
              'Canggu-based chefs: faster confirmation, no travel surcharge within Canggu–Berawa',
              'HACCP-certified Indonesian chefs',
              'Fixed upfront pricing quoted ++',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'Weekly meal prep and retreat catering available',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Canggu: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook in Canggu kitchens daily, so consider this a local's working map.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Canggu</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Eating out</strong> — unbeatable variety, but with queues, split tables for groups of eight-plus, and the nightly scooter shuffle.</li>
              <li><strong>Takeaway and delivery</strong> — abundant, though quality drops fast for anything grilled or plated.</li>
              <li><strong>In-villa private dining</strong> — a chef cooks and serves at your villa: restaurant-standard food, zero logistics, and the pool all to yourselves.</li>
            </ul>
            <p className="mb-0 leading-relaxed">
              For a single night out, Batu Bolong wins on energy. For a group dinner, a celebration, or day twelve of a month-long stay, the villa table usually wins on everything else.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Canggu</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              myCHEF is based in Canggu — which means faster confirmation, no travel surcharge within Canggu–Berawa, and chefs who already know the villa layouts from Echo Beach to the Pererenan border. Our Indonesian chefs shop fresh each morning, cook in your kitchen, and clean up completely. HACCP-certified food safety comes as standard.
            </p>
            <p className="mb-0 leading-relaxed">
              Prices are quoted ++ (11% government tax plus 10% service charge) and fixed upfront. Dietary requirements — vegan, paleo, gluten-free, Ayurvedic — are planned in, not worked around. Full menus and availability: <Link to="/private-chef/canggu" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Canggu</Link>. Rates are on our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link> page.
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

      {/* Long Stay */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Long Stays</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Eating Well on a Long Canggu Stay</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              If you're here for weeks, eating out twice a day gets old — and expensive — fast. The pattern that works for most long-stay households: cafés and warungs for spontaneous lunches, and a <Link to="/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">daily villa chef service</Link> for the meals that matter. A consistent chef learns your household's preferences, manages the shopping and fridge, and builds menus that evolve across the stay. For the quieter end of the neighbourhood, see <Link to="/locations/pererenan" className="text-[#C5A028] hover:underline font-medium">the quieter Pererenan dining guide</Link>.
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
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your date, villa area, guest count and dietary needs — replies within 2 hours (07:00–22:00 WITA).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong>, usually within 24 hours. No deposit required to enquire.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> Same-day and next-day dinners are often possible in Canggu.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Canggu Table</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Skip the Batu Bolong queue once this trip. Read <Link to="/journal/private-chef-canggu-guide" className="text-[#C5A028] hover:underline font-medium">our Canggu local</Link> for more area detail, or — <Link to="/blog/private-chef-seminyak-canggu-ubud-comparison" className="text-[#C5A028] hover:underline font-medium">still deciding between Canggu, Seminyak and Ubud?</Link> — message +62 896-7407-2020 on WhatsApp with your date and headcount, and we'll send a menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Canggu Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          
      {/* Keyword ownership: related services */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Related myCHEF Services in Canggu</h2>
        <ul className="space-y-2 text-[#4A4745]">
          <li><Link to="/private-chef/canggu" className="text-[#C5A028] hover:underline font-medium">Private chef canggu</Link> — hire a chef for villa dinners and multi-day cooking.</li>
          <li><Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Catering Bali</Link> — BBQ, buffet and group menus for larger villa parties.</li>
          <li><Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">Fine dining at your villa</Link> — tasting menus and chef’s table formats.</li>
          <li><Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline font-medium">Private dining Bali</Link> — how at-home fine dining works island-wide.</li>
          <li><Link to="/experiences/cooking-class#canggu" className="text-[#C5A028] hover:underline font-medium">Cooking class in Canggu</Link> — hands-on private Balinese cooking classes in your Berawa or Pererenan villa; a favourite with surf-trip groups and long-stay nomads.</li>
        </ul>
      </section>

          <h2 className="font-playfair text-3xl mb-10">Canggu Dining FAQ</h2>
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
              { label: 'Pererenan dining guide', path: '/locations/pererenan', desc: 'Quiet north Canggu enclave, design villas, weekly chef service' },
              { label: 'Ubud dining guide', path: '/locations/ubud', desc: 'Jungle villa dining, wellness retreats, Balinese feasts' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Canggu?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Canggu service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/canggu" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Canggu <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="canggu" cityName="Canggu" />
    </div>
  )
}
