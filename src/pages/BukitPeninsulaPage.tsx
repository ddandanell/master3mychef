import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '491635080236'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef on the Bukit Peninsula. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you cover the whole Bukit Peninsula for private chef services?',
    a: 'Yes — myCHEF covers the entire southern Bukit Peninsula including Pecatu, Ungasan, Bingin, Padang-Padang, Balangan, and the broader Uluwatu clifftop zone. The Bukit page is designed for guests who know they are staying somewhere on the peninsula but want one team that understands the full terrain.',
  },
  {
    q: 'What is private chef dining like on the Bukit Peninsula?',
    a: "The Bukit is defined by elevation, drama, and isolation. Clifftop villas sit on limestone edges with unobstructed Indian Ocean views, long private driveways, and outdoor dining terraces designed for sunset experiences. Every dinner on the Bukit is as much about the setting as the food — we plan menus, service timing, and setup around that.",
  },
  {
    q: 'How much does a private chef cost on the Bukit Peninsula?',
    a: 'Intimate clifftop dinners start at IDR 450K–800K per person for 2–12 guests. Surf-group and retreat catering ranges from IDR 400K–700K per person for 6–30 guests. Celebration and event packages range from IDR 600K–1.8M per person depending on production. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you cater weddings and elopements on the Bukit?',
    a: 'Yes — clifftop elopements and villa weddings are one of our most requested Bukit formats. We work with couples planning intimate ceremonies, rehearsal dinners, and post-wedding brunches across Pecatu, Ungasan, and the Uluwatu clifftop. Full F&B production including chefs, waitstaff, and bar service available.',
  },
  {
    q: 'Do you cater for surf retreats and group stays on the Bukit?',
    a: 'Absolutely. The Bukit attracts surf groups, wellness retreats, and yoga communities who want structured multi-day catering. We build three-meals-a-day packages that fuel active guests without compromise — whole-food breakfasts, light working lunches, and generous shared dinners after sunset sessions.',
  },
  {
    q: 'Are your Bukit Peninsula chefs Indonesian?',
    a: "Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. Our Bukit team is experienced with cliff-access properties, wind-aware outdoor cooking, and the diverse expectations of the peninsula's international villa guests — from honeymooners to surf groups.",
  },
]

const AREAS = [
  { name: 'Pecatu', note: 'Large estate villas and cliff-edge properties. Full catering teams, sunset dinners, and group celebrations.' },
  { name: 'Ungasan', note: 'Elevated south Bukit zone. Premium villas, long-stay guests, and retreat catering packages.' },
  { name: 'Bingin', note: 'Intimate surf-break village. Smaller villas, seafood BBQs, and relaxed fine dining for surfers and couples.' },
  { name: 'Padang-Padang', note: 'Boutique enclave with direct fish landing access. Freshest seafood on the Bukit — lobster and snapper on the day.' },
  { name: 'Balangan', note: 'White-sand cliff approach. Private dinners for couples and quiet family groups in secluded properties.' },
  { name: 'Melasti & South Bukit', note: 'Remote clifftop access. Ultra-private dining for guests who want complete exclusivity.' },
]

const SERVICES = [
  {
    name: 'Clifftop Tasting Menu',
    range: 'IDR 450K–800K / person',
    for: '2–12 guests',
    detail: 'Multi-course dinners paced around the Bukit sunset. First courses land as the sun drops, mains served under stars, dessert with the sound of the Indian Ocean below. Seafood-forward or balanced menus available.',
  },
  {
    name: 'Surf Group & Retreat Feast',
    range: 'IDR 400K–700K / person',
    for: '6–30 guests',
    detail: 'Multi-day catering for surf groups, yoga retreats, and wellness communities. Fuelling breakfasts, light working lunches, and generous shared evening dinners. Dietary flexibility built in — plant-based, gluten-free, high-protein.',
  },
  {
    name: 'Wedding & Elopement Dining',
    range: 'IDR 650K–1.8M / person',
    for: '2–80 guests',
    detail: 'Clifftop elopements, rehearsal dinners, and intimate villa weddings with full F&B production. Chefs, waitstaff, bar service, linen, florals coordination, and complete cleanup. Ceremony-to-brunch packages available.',
  },
  {
    name: 'Villa BBQ Celebration',
    range: 'IDR 500K–900K / person',
    for: '10–50 guests',
    detail: 'Live-fire BBQ for groups — whole fish from Padang-Padang, grilled meats, and sharing sides on the terrace. The social format of a seafood beach restaurant, elevated and entirely private.',
  },
]

export default function BukitPeninsulaPage() {
  const canonical = `${SITE}/locations/bukit`

  const localBizBukit = {
    ...localBusinessSchema,
    name: 'myCHEF.id Bukit Peninsula',
    description: 'Private chef, clifftop tasting menus, surf retreat catering, and wedding dining on the Bukit Peninsula, Bali',
    areaServed: { '@type': 'Place', name: 'Bukit Peninsula, Bali' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '520',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Bukit Peninsula Bali | Clifftop Villas — myCHEF"
        description="Hire a private chef on the Bukit Peninsula for clifftop dinners, surf retreat catering & wedding events. Covers Pecatu, Ungasan, Bingin, Padang-Padang. WhatsApp for quotes."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-bukit.webp"
        jsonLd={[
          localBizBukit,
          breadcrumbSchema('Private Chef Bukit Peninsula', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['bukit'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Bukit Peninsula',
            description: 'Premium private chef, clifftop tasting menus, surf retreat catering, and wedding event dining across the Bukit Peninsula including Pecatu, Ungasan, Bingin, and Padang-Padang.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Bukit Peninsula, Bali' },
            url: canonical,
          },
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-bukit.webp"
            alt="Dramatic clifftop villa on Bali's Bukit Peninsula set for a sunset private chef dinner over the Indian Ocean"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Bukit Peninsula</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Chef<br />Bukit Peninsula</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Clifftop tasting menus, surf retreat catering, and wedding dining across Bali's most dramatic peninsula. One team. Pecatu, Ungasan, Bingin, Padang-Padang — all covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get a Bukit Quote
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Bukit Peninsula's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard on the Bukit</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              The Bukit Peninsula is the most dramatic address in Bali. Limestone cliffs fall into the Indian Ocean, private driveways descend to villas perched at the edge of the world, and guests arrive expecting the sunset to be part of the service. Every private-chef booking here is a logistics project as much as a culinary one — navigating cliff access, managing wind exposure for outdoor cooking, sourcing from the Padang-Padang and Bingin fish landings, and timing a multi-course dinner so the best course arrives at the precise moment the horizon turns gold.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF has operated across the Bukit Peninsula since our founding. We cover the entire southern clifftop belt — from the large estate villas in Pecatu and Ungasan through the boutique surf-break villages of Bingin and Padang-Padang to the most remote clifftop access points at Balangan and beyond. This breadth means one team handles all your logistics regardless of where exactly on the peninsula you are staying.
            </p>
            <p className="mb-0 leading-relaxed">
              Our Bukit service spans intimate couples' dinners, surf retreat catering for twenty guests across multiple days, and full villa wedding production for eighty people — all with the same operational discipline and culinary standard. Every chef on our Bukit team is Indonesian, experienced with cliff-facing property logistics, and trained in both Balinese seafood traditions and European fine-dining technique.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Full Bukit coverage — Pecatu, Ungasan, Bingin, Padang-Padang',
              'Cliff-access villa specialists with local logistics knowledge',
              'Direct sourcing from Padang-Padang and Bingin fish landings',
              'HACCP-certified kitchen practices, same-day food safety',
              '50% deposit to secure your date — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'Full service team: chefs, waitstaff, sommelier on request',
              'Indonesian chefs trained to international culinary standards',
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
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services on the Bukit Peninsula</h2>
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
          <p className="text-[#999] text-xs mt-6">All prices subject to 11% tax + 10% service charge (++). Final pricing depends on guest count, menu complexity, and date.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Coverage Area</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Bukit Peninsula Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Bukit team covers the full southern peninsula from Pecatu and Ungasan through the clifftop villages to the most remote access points. We know every road, every villa layout, and every logistics challenge this terrain presents.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AREAS.map((a, i) => (
              <div key={i} className="flex items-start gap-3 border border-[#E8E6E3] rounded-xl p-4">
                <ChevronRight className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">Private Chef {a.name}</div>
                  <div className="text-[#8A8785] text-sm leading-snug">{a.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Get Your Bukit Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Send us your date, villa location, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Bukit Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Bukit Peninsula Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['bukit'].faqs].map((faq, i) => (
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
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Locations</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Uluwatu', path: '/locations/uluwatu', desc: "The clifftop icon — Indian Ocean views, seafood BBQs, weddings" },
              { label: 'Private Chef Jimbaran', path: '/locations/jimbaran', desc: 'Bay seafood, Kedonganan fish market, sunset celebration dinners' },
              { label: 'Private Chef Canggu', path: '/locations/canggu', desc: 'Surf culture, poolside BBQs, healthy menus for longer stays' },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="group block bg-white border border-[#E8E6E3] rounded-xl p-5 hover:border-[#C5A028] transition-colors">
                <div className="font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#8A8785] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
          <CityDeepDive slug="bukit" cityName="Bukit" />
</main>
  )
}
