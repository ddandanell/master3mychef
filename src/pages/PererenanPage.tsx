import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Pererenan. Can you send a menu proposal?')

const FAQS = [
  { q: 'Is Pererenan covered for private chefs?', a: 'Yes — Pererenan and north Canggu design villas are a regular zone. <a href="/private-chef/pererenan">Private chef Pererenan</a>.' },
  { q: 'Can long-stay guests book weekly cooking in Pererenan?', a: 'Yes — weekly and multi-day meal prep is popular for quieter Pererenan stays.' },
  { q: 'Do travel fees apply between Canggu and Pererenan?', a: 'Usually treated as core extended Canggu coverage; any exception is quoted upfront.' },
  { q: 'Are intimate fine-dining dinners available in Pererenan villas?', a: 'Yes — tasting menus and small-group dinners. <a href="/fine-dining">Fine dining</a>.' },
  { q: 'Can we book chef service for a Pererenan wedding villa?', a: 'Yes for villa weddings and welcome dinners — events team for larger guest counts. <a href="/events/weddings">Weddings</a>.' },
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
    name: 'The village strip',
    detail: 'Jalan Pantai Pererenan and its side lanes now hold a compact run of cafés, brunch spots, bakeries and a handful of chef-led casual restaurants — quality-led and design-conscious, matching the guest profile. The scene is good and getting better, but choice narrows quickly after a week.',
  },
  {
    name: 'Pererenan Beach & Echo Beach edge',
    detail: 'The black-sand beach at the end of the village road has a small cluster of sunset bars and casual seafood spots, with Echo Beach\'s larger grill scene a short walk along the sand. Barefoot, unhurried, and busiest at golden hour.',
  },
  {
    name: 'Seseh & the rice-field lanes',
    detail: 'North and inland, dining thins to a few warungs and village eateries. Guests in the estate villas out here eat in more often than not — by choice as much as geography.',
  },
]

const SERVICES = [
  {
    name: 'Designer villa dinners',
    range: 'From IDR 700K / person',
    for: '2–10 guests',
    detail: 'Clean, precise tasting menus and intimate chef-table evenings.',
  },
  {
    name: 'Relaxed group feasts',
    range: 'IDR 700K–800K / person',
    for: '8–30 guests',
    detail: 'Arrival dinners, birthdays, shared-plate celebrations.',
  },
  {
    name: 'Weekly chef service',
    range: 'Custom daily rate',
    for: 'Long stays · 1–15 guests',
    detail: 'A consistent chef who learns your household.',
  },
  {
    name: 'Healthy retreat catering',
    range: 'From IDR 700K / person',
    for: '6–20 guests',
    detail: 'For wellness and remote-work groups.',
  },
]

export default function PererenanPage() {
  const canonical = `${SITE}/locations/pererenan`

  const localBizPererenan = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Design-led in-villa dining and weekly chef services in Pererenan, Bali — HACCP-certified Indonesian chefs, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Pererenan, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining in Pererenan | Dining Guide & Chef Services"
        description="Where to eat in Pererenan: the area dining guide — restaurants, private dining and in-villa chef services for your Pererenan stay. By myCHEF."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-pererenan.webp"
        jsonLd={[
          localBizPererenan,
          breadcrumbSchema('Pererenan', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-pererenan.webp"
            alt="Private dining in Pererenan, Bali — in-villa chef dinner by myCHEF"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Pererenan Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Dining in Pererenan: Where to Eat & In-Villa Chef Options</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pererenan is what Canggu was before the beach clubs arrived — and the people who stay here like it that way. On the quiet north-west edge of the Canggu orbit, this is Bali's emerging design-villa enclave. This guide maps where to eat in and around Pererenan, explains the private dining formats that suit the area's villa-first character, and shows why a chef in your own kitchen is often the natural answer here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Plan a Pererenan Dinner
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Pererenan Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Pererenan's dining identity is defined by contrast. The scene is <strong>young</strong> — new cafés and restaurants open along the village road every season, but the total is still counted in dozens, not hundreds. The villas are <strong>exceptional</strong> — newer, larger and more thoughtfully built than central Canggu's, with proper kitchens and open-air dining pavilions designed for long evening meals. And the stays are <strong>longer</strong> — weeks rather than nights, which changes the dining question from "where tonight?" to "how do we eat well for a month?" The airport is roughly an hour away; the nearest crowds are ten minutes south and easily declined.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Emerging design-villa enclave on the quiet edge of Canggu',
              'Compact, quality-led village strip',
              'Villas built for long evening meals: open-air kitchens and dining pavilions',
              'Long-stay guests favour weekly chef service',
              'Sourcing from Canggu markets and local organic suppliers',
              'HACCP-certified Indonesian chefs',
              'Fixed upfront pricing quoted ++',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Pererenan: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook across this neighbourhood weekly; here's the current picture.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Pererenan</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Eating out</strong> — a strong and growing local strip, plus the full Canggu scene ten minutes away; expect to repeat favourites within a week.</li>
              <li><strong>In-villa private dining</strong> — a chef cooks and serves at your villa, using the kitchen and dining pavilion these houses were designed around. In a neighbourhood built for privacy, it's the format that matches the architecture.</li>
              <li><strong>Weekly chef service</strong> — a consistent chef across your stay: breakfast prep, healthy lunches, kids' meals, dinners that evolve with your preferences.</li>
            </ul>
            <p className="mb-0 leading-relaxed">
              Pererenan guests tend to arrive intending to eat out and leave having eaten in — the villas simply invite it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Pererenan</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              Our Pererenan teams know these properties well — the open-air kitchens, the long dining tables, the rice-field access lanes. Chefs source from Canggu's markets and local organic suppliers, and every service is run quietly and precisely, in keeping with the neighbourhood. All chefs are Indonesian and HACCP-certified.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices quoted ++ (11% government tax plus 10% service charge), fixed upfront; any travel consideration for the most remote lanes is confirmed before you book. Menus and availability: <Link to="/private-chef/pererenan" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Pererenan</Link>.
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
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Long Stays</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The Long-Stay Table: Weekly Chef Service</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              Pererenan's signature product isn't a single dinner — it's the month. A weekly arrangement gives you the same Indonesian chef across your stay: learning the household's preferences, managing the shopping and the fridge, building menus that evolve rather than repeat. Many of our Pererenan clients book this way, and it's the service the area's villas were quietly built for. For format detail, see our <Link to="/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">daily villa chef service</Link> and <Link to="/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">monthly chef arrangements</Link>; for coverage further south, our team also runs <Link to="/private-chef/canggu" className="text-[#C5A028] hover:underline font-medium">private chef services across Canggu</Link>.
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
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your dates, villa, guest count and length of stay — replies within 2 hours (07:00–22:00 WITA).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong> within about 24 hours; weekly services get a proposed schedule and rotating menu.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> Dinners need a few days; weekly services are best arranged a week or more ahead.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Pererenan Table</h2>
          <p className="text-white/60 mb-8 leading-relaxed">The quiet end of Canggu, served properly. Message +62 896-7407-2020 on WhatsApp with your dates and how long you're staying — we'll send a menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Pererenan Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Pererenan Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Canggu dining guide', path: '/locations/canggu', desc: 'Surf culture, healthy menus, poolside BBQs and retreat catering' },
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: "Beachfront fine dining, villa parties, Bali's most vibrant scene" },
              { label: 'Ubud dining guide', path: '/locations/ubud', desc: 'Jungle villa dining, wellness retreats, Balinese feasts' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Pererenan?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Pererenan service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/pererenan" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Pererenan <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="pererenan" cityName="Pererenan" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
