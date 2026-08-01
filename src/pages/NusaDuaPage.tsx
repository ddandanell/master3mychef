import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection } from '@/components/shared'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning an in-villa dinner in Nusa Dua. Can you send a menu proposal?')

const FAQS = [
  {
    q: 'Where should we eat out in Nusa Dua?',
    a: 'Bali Collection for the easiest walkable choice, resort dining rooms for formal occasions, and Tanjung Benoa for casual local seafood. Estate guests often find in-villa dining the best overall answer.',
  },
  {
    q: 'Is Nusa Dua expensive for dining?',
    a: 'Resort and precinct restaurants price at international hotel levels, with tax and service added. In-villa chef dinners start from IDR 700K per person ++ — often comparable or better for groups, with privacy included.',
  },
  {
    q: 'How much does private dining in Nusa Dua cost?',
    a: 'Villa fine dining runs IDR 700K–900K per person, corporate catering IDR 700K–800K, and celebrations from IDR 700K up depending on production — all quoted ++ (11% tax plus 10% service) and fixed upfront.',
  },
  {
    q: 'How do you handle gated-estate access?',
    a: 'We coordinate security entry documentation with estate management in advance, arrive early to stage, and run service to the agreed brief. It\'s standard procedure for our peninsula teams.',
  },
  {
    q: 'Can you cater a corporate offsite or board dinner?',
    a: `Yes — structured breakfasts, working lunches and executive dinners for 10–60 guests, with full-board options for multi-day programmes and precise run sheets. Corporate programmes carry a minimum spend of ${siteFacts.corporateMinSpend}.`,
  },
  {
    q: 'Which areas do you cover?',
    a: 'The full peninsula: the ITDC zone, Geger, Sawangan, the Benoa-side estates and Tanjung Benoa, plus nearby Bukit villas.',
  },
]

const SCENE = [
  {
    name: 'Resort dining rooms',
    detail: "The five-star hotels run the area's most formal kitchens — international fine dining, Japanese, Italian, grand seafood buffets. Standards are high and so are prices, and every bill arrives with tax and service on top. Hotel restaurants are open to outside guests, but booking ahead is wise in high season.",
  },
  {
    name: 'Bali Collection & the ITDC precinct',
    detail: "The open-air dining and shopping precinct inside the ITDC zone is the area's de facto restaurant row: a walkable loop of mid-range to upscale venues — Indonesian, Asian, European, cafés and dessert bars. It's the easiest evening out for villa guests: safe, stroller-friendly, and varied enough to please a mixed group.",
  },
  {
    name: 'Beyond the gates: Tanjung Benoa & local warungs',
    detail: "Just north, Tanjung Benoa's watersports strip adds casual seafood spots and local warungs at local prices — the best value eating near the peninsula, and where our own teams eat on days off.",
  },
]

const SERVICES = [
  {
    name: 'Resort-style villa fine dining',
    range: 'IDR 700K–900K / person',
    for: '2–20 guests',
    detail: 'Multi-course tasting menus with polished waitstaff.',
  },
  {
    name: 'Corporate & executive catering',
    range: 'IDR 700K–800K / person',
    for: '10–60 guests',
    detail: `With precise run sheets. Minimum spend ${siteFacts.corporateMinSpend} for corporate programmes.`,
  },
  {
    name: 'Celebration events',
    range: 'IDR 700K–2M / person',
    for: '10–100 guests',
    detail: 'Anniversaries, milestone birthdays, receptions.',
  },
  {
    name: 'Brunch & breakfast service',
    range: 'From IDR 700K / person',
    for: '2–30 guests',
    detail: 'Recovery brunches, team breakfasts, family mornings.',
  },
]

export default function NusaDuaPage() {
  const canonical = `${SITE}/locations/nusa-dua`

  const localBizNusaDua = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Resort-grade in-villa dining, chef services and corporate catering across the Nusa Dua peninsula, Bali — HACCP-certified Indonesian chefs, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Nusa Dua, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining Nusa Dua Bali | Villa & Corporate Hosting"
        description="Private dining Nusa Dua for resort villas and corporate dinners. In-villa chef service, company events and polished hosting with myCHEF."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-nusa-dua.webp"
        jsonLd={[
          localBizNusaDua,
          breadcrumbSchema('Nusa Dua', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-nusa-dua.webp"
            alt="Private dining in Nusa Dua, Bali — in-villa chef dinner by myCHEF"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Nusa Dua Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Dining in Nusa Dua — Villa Chef & Corporate Options</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Private dining Nusa Dua suits resort villas and corporate dinners that need hotel polish without the hotel dining room. Nusa Dua runs to a different standard from the rest of Bali — and dining here follows suit. The peninsula is a purpose-built enclave of five-star resorts, gated residential estates and manicured beachfront, twenty minutes from the airport and a world away from the island's usual happy chaos. This guide maps where to eat out in the enclave, what private dining looks like behind those gates, and when an in-villa chef dinner outclasses even the resort restaurants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              data-source="nusa-dua-cta"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Plan a Nusa Dua Dinner
            </a>
            <Link
              to="/private-chef/nusa-dua"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Nusa Dua
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Nusa Dua Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Unlike Seminyak or Canggu, this is not a neighbourhood you wander. The dining geography splits cleanly into three zones: the resort strip along the beach, the Bali Collection precinct in the ITDC gated zone, and the residential estates — Sawangan, Geger and the Benoa side — where the area's villas sit. Everything is landscaped, secure and calm. The upside: flawless infrastructure and a genuinely relaxed beach. The trade-off: less spontaneity, fewer independent restaurants, and resort pricing almost everywhere you sit down.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Purpose-built resort and gated-estate enclave',
              'Three zones: resort strip, Bali Collection ITDC, residential estates',
              'Security access coordination handled in advance',
              'Resort-grade service standards for villa dining',
              'HACCP-certified Indonesian chefs',
              'Fixed upfront pricing quoted ++',
              'Corporate and executive dining specialists',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Nusa Dua: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cook across the peninsula every week; here is the working picture.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Nusa Dua</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Resort restaurants</strong> — polished and reliable, with hotel pricing and other guests.</li>
              <li><strong>Bali Collection</strong> — the flexible mid-range option for evenings out.</li>
              <li><strong>In-villa private dining</strong> — a professional chef team cooks and serves in your estate villa, with the same precision the area's resorts promise, and a privacy they can't. For groups of eight or more, the per-person maths frequently beats a resort dining room — before you count the wine markup and the transport.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Villa Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Villa Answer: Chef Services in Nusa Dua</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              Our peninsula teams run every booking like a resort operation: security entry documentation coordinated in advance, dining areas fully staged before guests sit down, and service that flows to a timed brief. All chefs are Indonesian, HACCP-certified, and experienced with the expectations that come with this address.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices quoted ++ (11% government tax plus 10% service charge), fixed upfront. Waiters and sommeliers can be added from around IDR 250K per hour, and bartenders from around IDR 350K per hour. Menus and availability: <Link to="/private-chef/nusa-dua" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Nusa Dua</Link>. Full rates on our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link> page.
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
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Corporate</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Corporate & Executive Dining in the Estate Zone</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-0 leading-relaxed">
              The peninsula is Bali's boardroom, and food is part of the agenda. We build corporate formats around your programme: structured breakfasts that open a working day, efficient lunches that don't break rhythm, plated executive dinners that close it — plus full-board catering for multi-day offsites and <Link to="/events/corporate-events" className="text-[#C5A028] hover:underline font-medium">corporate event catering</Link> for larger functions. Access coordination, villa setup and service timing are handled against your run sheet, not ours. For a genuinely special closing dinner, our <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">in-villa fine dining</Link> team runs multi-course tasting evenings with wine pairing.
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
              <span className="text-[#4A4745]"><strong>WhatsApp +62 896-7407-2020</strong> with your date, estate or villa, guest count and dietary requirements — replies within 2 hours (07:00–22:00 WITA). Corporate enquiries: include your headcount and agenda outline.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span className="text-[#4A4745]"><strong>Receive a menu proposal and fixed quote</strong> within about 24 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span className="text-[#4A4745]"><strong>Confirm with a 50% deposit.</strong> Allow one to two weeks for corporate functions and celebrations; intimate dinners can often be arranged in days.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Plan Your Nusa Dua Table</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Resort standards, your own dining room. Message +62 896-7407-2020 on WhatsApp with your date, headcount and — for corporate programmes — your agenda, and we'll return a fixed quote within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Nusa Dua Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          
      {/* Keyword ownership: related services */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Related myCHEF Services in Nusa Dua</h2>
        <ul className="space-y-2 text-[#4A4745]">
          <li><Link to="/private-chef/nusa-dua" className="text-[#C5A028] hover:underline font-medium">Private chef nusa dua</Link> — hire a chef for villa dinners and multi-day cooking.</li>
          <li><Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Catering Bali</Link> — BBQ, buffet and group menus for larger villa parties.</li>
          <li><Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">Fine dining at your villa</Link> — tasting menus and chef’s table formats.</li>
          <li><Link to="/private-dining-indonesia" className="text-[#C5A028] hover:underline font-medium">Private dining Bali</Link> — how at-home fine dining works island-wide.</li>
        </ul>
      </section>

          <h2 className="font-playfair text-3xl mb-10">Nusa Dua Dining FAQ</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="border border-[#E8E6E3] rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1A1A1A] hover:bg-[#F9F9F6] transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-[#C5A028] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-[#4A4745] leading-relaxed border-t border-[#E8E6E3] pt-4 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Jimbaran dining guide', path: '/locations/jimbaran', desc: 'Bayfront seafood BBQs, fresh Kedonganan catch, sunset bay dinners' },
              { label: 'Uluwatu dining guide', path: '/locations/uluwatu', desc: 'Clifftop drama, Indian Ocean views, wedding and event catering' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Nusa Dua?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your villa, our Nusa Dua service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/nusa-dua" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Nusa Dua <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="nusa-dua" cityName="Nusa Dua" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
