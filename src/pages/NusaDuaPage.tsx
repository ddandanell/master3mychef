import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '628113803488'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Nusa Dua. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Nusa Dua?',
    a: "Yes — myCHEF operates throughout Nusa Dua's gated estates, branded residences, ITDC compounds, Geger Beach villas, and Sawangan properties. We coordinate security entry and logistics for the area's secure-access estates as standard.",
  },
  {
    q: 'Can you match five-star hotel standards for private villa dining in Nusa Dua?',
    a: 'That is exactly what we are built for. Our Nusa Dua service is modelled on five-star resort operations — precise run sheets, polished waitstaff, refined plating, and zero visible friction during the dining experience. Guests upgrading a resort stay with a private villa dinner consistently tell us it exceeds what they received at the hotel restaurant.',
  },
  {
    q: 'How much does a private chef cost in Nusa Dua?',
    a: 'Fine-dining dinners in Nusa Dua start at IDR 500K–900K per person for 2–20 guests. Corporate and executive dining formats range from IDR 450K–800K per person. Event and celebration packages from IDR 700K–2M per person depending on production complexity. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Do you cater for corporate offsites and executive groups in Nusa Dua?',
    a: 'Yes — Nusa Dua is one of our primary corporate dining zones. We regularly cater board-level dinners, team retreat meals, and business breakfasts at private estates and conference villas. We supply all chefs, waiting staff, equipment, and run to your agenda — not ours.',
  },
  {
    q: "Can you handle security and access coordination for Nusa Dua's gated estates?",
    a: "Absolutely. We are experienced with the security protocols of Nusa Dua's ITDC zone and branded residential estates. We pre-register our team, coordinate vehicle access, and arrive with time to set up before guests arrive. No logistical surprises.",
  },
  {
    q: 'Are your Nusa Dua chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. They are experienced with the expectations of five-star hotel guests, corporate executives, and international families who expect hotel-grade service in a private setting.',
  },
]

const AREAS = [
  { name: 'ITDC Nusa Dua', note: 'The core gated resort zone. Precision coordination for secure-estate access, large-team setups, and plated fine-dining.' },
  { name: 'Geger Beach', note: 'Beachfront compounds and boutique villas. Intimate dinners, sunrise breakfasts, and relaxed group brunches.' },
  { name: 'Sawangan', note: 'Larger estate villas and branded residences. Corporate offsites, executive dinners, and multi-day catering.' },
  { name: 'Benoa Side Estates', note: 'Quieter residential zone adjacent to Nusa Dua. Family villas and private compound hosting.' },
  { name: 'Nusa Dua Beach Hotel Zone', note: 'Resort-adjacent villas where guests upgrade to private dining. Hotel-grade standards, genuine privacy.' },
  { name: 'Bali Collection District', note: 'Central Nusa Dua coverage with easy access for all service formats from breakfast through late dinner.' },
]

const SERVICES = [
  {
    name: 'Resort-Style Villa Fine Dining',
    range: 'IDR 500K–900K / person',
    for: '2–20 guests',
    detail: 'Multi-course tasting menus executed with hotel-grade precision. Polished waitstaff, refined plating, and quiet professional service — the experience of a five-star restaurant inside your private villa.',
  },
  {
    name: 'Corporate & Executive Catering',
    range: 'IDR 450K–800K / person',
    for: '10–60 guests',
    detail: 'Structured breakfasts, working lunches, and plated executive dinners with precise run sheets. We coordinate security entry, villa setup, and service timing to match your business agenda exactly.',
  },
  {
    name: 'Celebration Events',
    range: 'IDR 700K–2M / person',
    for: '10–100 guests',
    detail: 'Anniversaries, milestone birthdays, and corporate receptions with full F&B production — chefs, waitstaff, bartenders, linen, and complete cleanup. Event-grade organisation at villa-level intimacy.',
  },
  {
    name: 'Polished Brunch & Breakfast',
    range: 'IDR 350K–600K / person',
    for: '2–30 guests',
    detail: 'Recovery brunches after long event nights, team breakfasts to open an offsite, or family mornings for multi-generational villa stays. Premium but relaxed — the perfect counterpoint to the evening before.',
  },
]

export default function NusaDuaPage() {
  const canonical = `${SITE}/locations/nusa-dua`

  const localBizNusaDua = {
    ...localBusinessSchema,
    name: 'myCHEF.id Nusa Dua',
    description: 'Private chef, resort-style fine dining, corporate catering, and executive event service in Nusa Dua, Bali',
    areaServed: { '@type': 'Place', name: 'Nusa Dua, Bali' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '390',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Nusa Dua | Resort Villa & Executive Dining — myCHEF"
        description="Hire a private chef in Nusa Dua for resort-grade villa dining, corporate offsites & celebration events. Indonesian chefs, five-star precision, full logistics. WhatsApp for quotes."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-nusa-dua.webp"
        jsonLd={[
          localBizNusaDua,
          breadcrumbSchema('Private Chef Nusa Dua', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['nusa-dua'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Nusa Dua',
            description: "Premium private chef, resort-style fine dining, corporate catering, and celebration events across Nusa Dua's gated estates, Geger Beach, and Sawangan.",
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Nusa Dua, Bali' },
            url: canonical,
          },
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-nusa-dua.webp"
            alt="Luxury resort-style villa in Nusa Dua, Bali prepared for a private chef fine-dining dinner"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Nusa Dua</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Chef<br />in Nusa Dua</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Resort-grade precision in your private villa. Five-star plating, polished service, and corporate-level coordination for Nusa Dua's most demanding estates and executive guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              data-source="nusa-dua-cta"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get a Nusa Dua Quote
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Nusa Dua's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Nusa Dua</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Nusa Dua operates at a different standard from the rest of Bali. The area is built around five-star resorts, gated residential estates, and private compounds where access, timing, and presentation are non-negotiable. Guests who stay here — executive families, corporate groups, destination wedding parties, and international travellers upgrading from hotel suites — expect the quality they see in the restaurant to be matched or exceeded in the private villa setting.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF approaches every Nusa Dua booking as a resort-level operation. That means we coordinate security entry documentation in advance, arrive with time to fully stage the dining area before guests sit down, and run a timed service that flows exactly as briefed. We bring the chefs, waitstaff, and all equipment. The villa simply provides the space and the view.
            </p>
            <p className="mb-0 leading-relaxed">
              For corporate and executive formats, we build around your agenda: structured breakfasts that open a working day, efficient lunches that do not break the rhythm, and polished evening dinners that close a deal. For families and celebration guests, we offer everything from intimate two-person anniversary dinners to full milestone-event production for a hundred guests. Every chef on our Nusa Dua team is Indonesian, internationally trained, and experienced with the expectations that come with this address.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Security and access coordination for gated Nusa Dua estates',
              'Corporate and executive dining with precise run sheets',
              'Resort-standard plating and professional waitstaff',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Nusa Dua</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Nusa Dua Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Nusa Dua team covers the full estate and resort corridor — from the core ITDC gated zone to the Sawangan beachfront compounds and Benoa-adjacent residences. We are experienced with every access format in the area.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Nusa Dua Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Send us your date, villa, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Nusa Dua Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Nusa Dua Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['nusa-dua'].faqs].map((faq, i) => (
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
              { label: 'Private Chef Jimbaran', path: '/locations/jimbaran', desc: 'Bayfront seafood BBQs, fresh catch from Kedonganan, sunset dinners' },
              { label: 'Private Chef Uluwatu', path: '/locations/uluwatu', desc: 'Clifftop drama, Indian Ocean views, wedding and event catering' },
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: "Beachfront fine dining, villa parties, Bali's most vibrant scene" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="group block bg-white border border-[#E8E6E3] rounded-xl p-5 hover:border-[#C5A028] transition-colors">
                <div className="font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#8A8785] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
          <CityDeepDive slug="nusa-dua" cityName="Nusa Dua" />
</main>
  )
}
