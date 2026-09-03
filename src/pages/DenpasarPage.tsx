import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { ArticleContentSection, HaccpTrustLine } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I\'m planning a private dinner at home in Denpasar. Can you send a menu proposal?')

const FAQS = [
  { q: 'Do you serve private chef clients in Denpasar?', a: 'Yes — residential Denpasar and nearby hosts are covered. <a href="/private-chef/denpasar">Private chef Denpasar</a>.' },
  { q: 'Can local families book celebration dinners at home?', a: 'Yes — birthdays, gatherings and multi-course home dinners are common. Indonesian and international menus available.' },
  { q: 'Is corporate lunch catering available in Denpasar offices?', a: 'Yes for suitable formats — discuss headcount, timing and building access. <a href="/catering/corporate-catering">Corporate catering</a>.' },
  { q: 'Do you require a full villa kitchen in Denpasar homes?', a: 'A workable kitchen is required. Compact homes may suit simpler menus; share photos for advice.' },
  { q: 'How does booking work for residents vs tourists?', a: 'Same process — WhatsApp dates, guest count and address. Residents often book recurring weekly service.' },
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
    name: 'Renon expat dining',
    detail: 'Around the Renon green and the embassy quarter: specialty coffee, bakeries, Japanese and Korean kitchens, and relaxed international restaurants where Bali\'s resident professionals actually eat. Quietly the best everyday dining in the city.',
  },
  {
    name: 'Local institutions & night markets',
    detail: 'Denpasar feeds its own — long-running warungs, babi guling addresses with lunch queues, and the night markets where residents graze after dark. Unpolished, excellent, and a fraction of tourist-zone prices.',
  },
  {
    name: 'Sanur-edge corridor',
    detail: 'The city\'s eastern edge runs into Sanur\'s beachside strip — family restaurants, sunset-facing cafés and hotel dining rooms. The closest thing Denpasar has to a night out by the water, ten minutes from Renon.',
  },
]

const SERVICES = [
  {
    name: 'In-home dinners and tasting menus',
    range: 'From IDR 700K / person',
    for: '2–10 guests',
    detail: 'Restaurant-standard multi-course dinners cooked and served in your own kitchen.',
  },
  {
    name: 'Residence & embassy hosting',
    range: 'Custom event quote',
    for: '10–60 guests',
    detail: 'Plated dinners and receptions — stack mobile bar for free-flow receptions.',
  },
  {
    name: 'Mobile cocktail bar',
    range: 'From IDR 500K++ / guest',
    for: 'Min 10 guests',
    detail: 'Reception free-flow for residences and compounds — complete packages.',
  },
  {
    name: 'Weekly private chef',
    range: 'From IDR 2.7M++ / day',
    for: 'Households & expats',
    detail: 'A recurring chef for busy households — published day rates.',
  },
]

const OCCASIONS = [
  {
    name: 'Family dinners & milestones',
    detail: 'Birthdays, anniversaries and multi-generation gatherings at the family compound — one table at home, every generation comfortable, no restaurant logistics in city traffic.',
  },
  {
    name: 'Embassy & residence hosting',
    detail: 'The Renon diplomatic quarter hosts working dinners and receptions at private residences. Discreet, professional service with full staffing — the format hotels can\'t make personal.',
  },
  {
    name: 'Expat weekly rhythm',
    detail: 'Long-stay professionals use a recurring chef the way they\'d use a cleaner — weekly cooking, planned menus and a fridge that stocks itself around a working schedule.',
  },
  {
    name: 'Corporate residence dinners',
    detail: 'Client hosting at a private address beats a restaurant function room for discretion and impact. Run-sheeted service, professional timing, proper invoicing.',
  },
]

export default function DenpasarPage() {
  const canonical = `${SITE}/locations/denpasar`

  const localBizDenpasar = {
    ...localBusinessSchema,
    name: 'myCHEF',
    description: 'Premium in-home dining and chef services in Denpasar, Bali — Indonesian chefs, HACCP-certified, fixed upfront pricing.',
    areaServed: { '@type': 'Place', name: 'Denpasar, Bali' },
    priceRange: 'IDR 700,000+ per person',
    url: canonical,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Dining in Denpasar | Dining Guide & Chef Services"
        description="Where to eat in Denpasar: the area dining guide — restaurants, private dining and HACCP-certified in-villa chef services for your Denpasar stay. By myCHEF."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-denpasar.webp"
        jsonLd={[
          localBizDenpasar,
          breadcrumbSchema('Denpasar', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-denpasar.webp"
            alt="Private dining in Denpasar, Bali — in-home chef dinner by myCHEF"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Denpasar Dining Guide</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Denpasar Dining Guide — Where to Eat & When to Book a Chef
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Denpasar is where Bali actually lives — the expat tables of Renon, the local institutions residents queue for, and a residential private-dining scene the villa districts never see. myCHEF is based in Panjer: this is our home turf. This guide covers where to eat and how private dining works in the city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Denpasar Dinner
            </a>
            <Link
              to="/private-chef/denpasar"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Private Chef in Denpasar
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <HaccpTrustLine dark />
          </div>

        </div>
      </section>

      {/* What Makes Dining in Denpasar Different */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What Makes It Different</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">What Makes Dining in Denpasar Different</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Denpasar is a city, not a resort strip. The dining scene serves residents first: <strong>Renon&apos;s expat quarter</strong> around the green, the embassy residences, and local institutions that have fed the same families for decades. Prices follow the local economy, not the tourist one — and nobody is performing for a sunset crowd.
            </p>
            <p className="mb-0 leading-relaxed">
              It&apos;s also our home: <strong>myCHEF is based in Panjer, Denpasar</strong>. That means no travel games, the fastest response in the city, and a team that shops these markets every morning. Residential bookings — houses and apartments, not just tourist villas — are standard here, not an exception. For dining across Bali&apos;s villa districts, see our <Link to="/blog/dining-by-location-bali-neighborhood-guide" className="text-[#C5A028] hover:underline font-medium">Bali neighborhood dining guide</Link>.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Home base: myCHEF HQ is in Panjer, Denpasar',
              'Fastest response in the city — no travel games',
              'Houses and apartments served, not just tourist villas',
              'HACCP-certified Indonesian chefs available in-home',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Where to Eat in Denpasar: The Scene by Category</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We shop and cook in this city every day, so this is a working picture rather than a listicle.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Your Private Dining Options in Denpasar</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              &quot;Private dining&quot; in Denpasar spans four formats, in ascending order of privacy:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li><strong>Restaurant tables</strong> — easy for two, but the city has few true private rooms and none built for occasions.</li>
              <li><strong>Hotel function spaces</strong> — reliable for corporate groups; atmosphere is what function rooms are.</li>
              <li><strong>Sanur-edge beachfront venues</strong> — scenic sections and decks, shared with the public at peak hours.</li>
              <li><strong>In-home private dining</strong> — a professional chef cooks and serves in your own kitchen, house or apartment. No room hire, no time slot, no drive across the city.</li>
            </ol>
            <p className="mb-0 leading-relaxed">
              For residents, the in-home format isn&apos;t a luxury version of eating out — it&apos;s simply how a city entertains when the alternative is traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Private Dining */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The Residential Angle</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Private Dining at Home: Residences, Not Just Villas</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Most Bali chef services market to tourist villas and treat city homes as an afterthought. We do the opposite here. Ordinary kitchens in <Link to="/private-chef/renon" className="text-[#C5A028] hover:underline font-medium">Renon</Link>, Panjer and south Denpasar host our dinners weekly — family milestones, embassy-residence receptions, recurring weekly cooking for expat households. Houses and apartments are standard bookings for us in Denpasar, with menus planned around your kitchen and your schedule.
            </p>
            <p className="mb-0 leading-relaxed">
              For corporate and government-adjacent hosting at a private address, our <Link to="/catering/corporate-catering" className="text-[#C5A028] hover:underline font-medium">corporate catering</Link> team runs plated residence dinners with professional run sheets. For everything else, the service page below has menus and fixed pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The In-Home Answer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The In-Home Answer: Chef Services in Denpasar</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none mb-10">
            <p className="mb-4 leading-relaxed">
              This is what myCHEF does across Denpasar every day — from our own base in Panjer. Our Indonesian chefs shop the city&apos;s markets that morning, arrive with their own equipment, cook in your kitchen, serve, and leave everything spotless. HACCP-certified food safety comes as standard.
            </p>
            <p className="mb-0 leading-relaxed">
              All prices are quoted ++ (11% government tax plus 10% service charge) and fixed upfront — no surprises at the end of the evening. For menus and availability, see how to <Link to="/private-chef/denpasar" className="text-[#C5A028] hover:underline font-medium">hire a private chef in Denpasar</Link>, or check our <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">transparent per-person pricing</Link>. For the full white-tablecloth version, our <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">in-villa fine dining</Link> service runs tasting evenings with wine pairing.
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Denpasar Dining by Occasion</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">How Booking In-Home Dining Works</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C5A028] text-black text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span className="text-[#4A4745]"><strong>Message us on WhatsApp</strong> — +62 896-7407-2020 — with your date, address, guest count and any dietary requirements. We reply within 2 hours (07:00–22:00 WITA).</span>
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
          <h2 className="font-playfair text-3xl mb-4">Plan Your Denpasar Evening</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether it&apos;s a family milestone in Panjer or an embassy-residence dinner in Renon, our home base means the fastest answer in the city. Browse <Link to="/locations" className="text-[#C5A028] hover:underline font-medium">all Bali dining areas</Link> — then message +62 896-7407-2020 on WhatsApp and we&apos;ll have a menu proposal with you within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Denpasar Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Denpasar Dining FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Dining Areas</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Sanur dining guide', path: '/locations/sanur', desc: 'Family villa dining on the calm east coast, minutes away' },
              { label: 'Seminyak dining guide', path: '/locations/seminyak', desc: 'Bali\'s densest restaurant strip and villa district' },
              { label: 'Ubud dining guide', path: '/locations/ubud', desc: 'Jungle villa dinners and wellness retreat tables' },
              { label: 'Kuta & Legian dining guide', path: '/locations/kuta', desc: 'Beachfront dining, sunset BBQs and lively group catering near the airport' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Looking for a Dedicated Private Chef in Denpasar?</h3>
          <p className="text-gray-600 mb-6">If you already know you want a private chef for your home, our Denpasar service page has menus, formats and fixed pricing.</p>
          <Link to="/private-chef/denpasar" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            Hire a private chef in Denpasar <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="denpasar" cityName="Denpasar" />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
