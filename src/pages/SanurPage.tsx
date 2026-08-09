import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection, HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner or breakfast in Sanur. Can you send a menu proposal?')

const FAQS = [
  { q: 'Is private chef service available in Sanur?', a: 'Yes — Sanur villas and long-stay homes are covered. <a href="/private-chef/sanur">Private chef Sanur</a>.' },
  { q: 'Are quieter family villas in Sanur a good fit for daily chef service?', a: 'Yes — Sanur’s calmer pace suits weekly meal prep and family menus. Kids plates available.' },
  { q: 'Can you cook lighter, health-focused menus in Sanur?', a: 'Yes — wellness-leaning and simple fresh menus are easy to brief. Plant-forward chefs available on request.' },
  { q: 'Do you cover nearby east-coast villas from Sanur?', a: 'Many nearby addresses are fine; remote east-coast spots may include a travel note on the quote.' },
  { q: 'How do Sanur prices compare to Seminyak?', a: 'Published day rates are the same sitewide; only logistics differ. See <a href="/pricing">pricing</a>.' },
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
    name: 'The beachfront path',
    detail: "A string of relaxed cafés, beach grills and hotel terraces runs along the promenade from Sindhu to Mertasari — unhurried, family-friendly, many with tables on the sand. Quality is pleasant rather than dazzling; the setting does the heavy lifting.",
  },
  {
    name: 'Jalan Danau Tamblingan & the town strip',
    detail: "Sanur's main street holds its most serious kitchens: long-running international restaurants, Indonesian dining rooms, bakeries and wine bars with loyal local followings. This is where the expat community eats, and consistency is the hallmark.",
  },
  {
    name: 'Warungs, markets & breakfast culture',
    detail: 'Around Sindhu Market and the southern lanes, local warungs serve excellent Indonesian breakfasts and lunches at local prices — the same market our chefs shop at first light. Sanur\'s morning food culture is genuinely special: bubur, nasi kuning, fresh tropical fruit, proper coffee.',
  },
]

const SERVICES = [
  {
    name: 'Family villa dinners',
    range: 'From IDR 700K / person',
    for: '4–20 guests',
    detail: 'Indonesian sharing plates and fresh seafood that work for every age.',
  },
  {
    name: 'Sunrise breakfast & private chef',
    range: 'From IDR 1M++ / day',
    for: 'Multi-day stays',
    detail: 'Daily chef meal plans for family holidays — published day rates.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'Birthday free-flow and family celebrations — mobile bar packages at the villa.',
  },
  {
    name: 'Seafood & Indonesian feasts',
    range: 'IDR 700K–800K / person',
    for: '6–30 guests',
    detail: 'Catering formats for reunions and compound dinners.',
  },
]

export default function SanurPage() {
  const canonical = `${SITE}/locations/sanur`

  const localBizSanur = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Family-focused in-villa dining and chef services in Sanur, Bali — sunrise breakfasts, weekly meal plans, HACCP-certified Indonesian chefs, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Sanur, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Sanur Bali Dining Guide | Villas, Restaurants & Chef Options"
        description="Sanur area dining guide for beach villas — restaurants, hosting tips and HACCP-certified chefs — when to book in-villa service. For a dedicated chef see private chef Sanur."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-sanur.webp"
        jsonLd={[
          localBizSanur,
          breadcrumbSchema('Sanur', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-sanur.webp"
            alt="Private dining in Sanur, Bali — in-villa sunrise breakfast by myCHEF"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Sanur Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Sanur Dining Guide — Villas, Restaurants &amp; When to Book a Chef</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Private dining Sanur is the easy family format — early kids’ meals, later adult courses, chef in your beach villa. Sanur is where Bali exhales. The island's original beach resort town runs on a gentler clock: calm protected water, a flat beachfront path that stretches for kilometres, and sunrise over the Lombok Strait instead of sunset crowds. This guide maps where to eat out in Sanur, explains the private dining options for villa guests, and shows why so many families end up taking their best meals at their own table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Plan a Sanur Table
            </a>
            <Link
              to="/private-chef/sanur"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Sanur
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Sanur Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Sanur's dining identity is built on three things. <strong>The morning</strong>: facing east, this is Bali's sunrise coast — breakfast is the day's social meal, and the beachfront path fills with walkers before seven. <strong>The family mix</strong>: few Bali areas host so many three-generation groups, which shapes everything from menu choices to dinner timing (early seatings, not late ones). <strong>The expat backbone</strong>: a large resident community keeps standards steady and prices sane year-round. The airport is about 25 minutes away, the beach is reef-protected and swimmable, and the whole town is mercifully walkable.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Bali's most family-friendly dining town",
              'Sunrise coast — breakfast is the social meal',
              'Walkable beachfront path and calm reef-protected water',
              'Strong expat backbone keeps standards steady',
              'Sindhu Market sourcing for villa dining',
              'No travel surcharge within Sanur',
              'HACCP-certified Indonesian chefs',
              'Fixed upfront pricing quoted ++',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Sanur: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook across Sanur daily; here's the honest map.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Sanur</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Eating out</strong> — easy, walkable and family-friendly, though groups of eight-plus still mean split tables at popular spots, and early bedtimes collide with dinner-hour queues.</li>
              <li><strong>In-villa private dining</strong> — a chef cooks and serves at your villa on your family's schedule: early suppers for the kids, a slower second sitting for the adults, or a sunrise breakfast ready when you return from the beach path.</li>
              <li><strong>Weekly and monthly service</strong> — for long stays, a recurring chef arrangement replaces the restaurant routine entirely.</li>
            </ul>
            <p className="mb-0 leading-relaxed">
              For a family of eight staying a fortnight, the maths and the logistics both favour the villa table more nights than not.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Sanur</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              Our Sanur teams are family-dining specialists: multi-generational menus, mixed dietary needs in one sitting, and timing built around bedtimes rather than booking slots. Produce comes from Sindhu Market each morning; there's no travel surcharge within Sanur. All chefs are Indonesian and HACCP-certified.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices quoted ++ (11% government tax plus 10% service charge), fixed upfront. Menus and availability: <Link to="/private-chef/sanur" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Sanur</Link>. Full rates on our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link> page.
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
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Family Rhythm</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Dining Around a Family's Rhythm</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              The consistent feedback from Sanur families: the villa table outperforms the restaurant not on glamour but on fit. A gluten-free grandparent, a vegan parent and three children who eat beige food can all be served properly, in one sitting, without negotiation. Early suppers happen at five-thirty, not "when a table frees up." And for stays measured in weeks, a <Link to="/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">daily villa chef service</Link> or <Link to="/private-chef-bali" className="text-[#C5A028] hover:underline font-medium">monthly chef arrangements</Link> turn eating well into the default rather than the effort.
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
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your date, villa, guest count — and who you're feeding (ages and dietary needs help us plan) — replies within 2 hours (07:00–22:00 WITA).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong> within about 24 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> A few days' notice is ideal; sunrise breakfasts and weekly plans are best arranged a week ahead.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Sanur Table</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Calm water, good light, and dinner on your family's schedule. Message +62 896-7407-2020 on WhatsApp with your dates and who's coming, and we'll send a menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Sanur Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          
      {/* Keyword ownership: related services */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Related myCHEF Services in Sanur</h2>
        <ul className="space-y-2 text-[#4A4745]">
          <li><Link to="/private-chef/sanur" className="text-[#C5A028] hover:underline font-medium">Private chef sanur</Link> — hire a chef for villa dinners and multi-day cooking.</li>
          <li><Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Catering Bali</Link> — BBQ, buffet and group menus for larger villa parties.</li>
          <li><Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">Fine dining at your villa</Link> — tasting menus and chef’s table formats.</li>
          <li><Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline font-medium">Private dining Bali</Link> — how at-home fine dining works island-wide.</li>
        </ul>
      </section>

          <h2 className="font-playfair text-3xl mb-10">Sanur Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Ubud dining guide', path: '/locations/ubud', desc: 'Jungle villa dining, wellness retreats, Balinese cultural immersion' },
              { label: 'Jimbaran dining guide', path: '/locations/jimbaran', desc: 'Seafood BBQs, fresh Kedonganan catch, sunset bay dinners' },
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: "Beachfront fine dining, villa parties, Bali's most vibrant scene" },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Sanur?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Sanur service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/sanur" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Sanur <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="sanur" cityName="Sanur" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
