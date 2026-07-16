import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Kuta Bali. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Kuta Bali?',
    a: 'Yes — Kuta is fully covered by myCHEF. We serve all Kuta areas including Legian, Tuban, and the Kartika Plaza strip. Because Kuta is close to our central operations and the airport, we can often confirm bookings within 24 hours and offer one of the fastest deployment times in south Bali.',
  },
  {
    q: 'What kind of food does a private chef in Kuta typically cook?',
    a: 'Kuta guests tend to want relaxed, crowd-pleasing menus: poolside BBQs with fresh seafood and grills, Indonesian sharing feasts, family-friendly villa dinners, and birthday celebration menus. We adapt fully to your preferences — just tell us your group profile and dietary needs.',
  },
  {
    q: 'How much does a private chef cost in Kuta Bali?',
    a: 'Daily villa chef hire in Kuta starts from IDR 600,000 to IDR 1,500,000 per day. Private dinners for 2 to 8 guests range from IDR 1,500,000 to IDR 5,000,000 total. Event catering for 20 to 50 guests typically runs IDR 8,000,000 to IDR 25,000,000. Groceries are billed separately at cost. Tax and service charge may apply on top (++).',
  },
  {
    q: 'Can you cater a villa birthday party or BBQ in Kuta?',
    a: 'Absolutely — poolside BBQ parties and villa birthday celebrations are among our most popular bookings in Kuta. We provide the full setup: chef, grill equipment, servers, and cleanup. Whether it is a 10-person poolside BBQ or a 40-person birthday feast, we scale the team to your group size.',
  },
  {
    q: 'Is Kuta close to your main service area?',
    a: 'Yes. Kuta is one of the most convenient locations for myCHEF service. The airport is 5 minutes away and Seminyak is 15 minutes north. We maintain low travel fees and fast response times for all Kuta, Legian, and Tuban bookings.',
  },
  {
    q: 'Can I book a private chef for a family villa holiday in Kuta?',
    a: 'Yes — family villa cooking is one of our core strengths in Kuta. We build menus that work for adults and children together, including kids-friendly options alongside the adult menu. We handle dietary restrictions, picky eaters, and allergy management at no extra charge.',
  },
]

const AREAS = [
  { name: 'Kuta Beach Strip', note: 'High-volume holiday zone. Fast chef deployment, poolside BBQs, and birthday feasts.' },
  { name: 'Legian', note: 'Kuta\'s calmer northern neighbour. Family villas, relaxed villa dinners, and group celebrations.' },
  { name: 'Tuban', note: 'Airport-adjacent zone. Ideal for arrival-night dinners and short-stay holiday villas.' },
  { name: 'Kartika Plaza Area', note: 'Beachfront hotel and villa strip. Events, corporate groups, and larger catering.' },
  { name: 'Kuta Square Area', note: 'Central convenience. Same-day bookings and fast chef access for spontaneous dinners.' },
  { name: 'Kuta Reef & South Kuta', note: 'Quieter southern zone. Family compounds, poolside entertaining, surf-group feasts.' },
]

const SERVICES = [
  {
    name: 'Poolside BBQ Party',
    range: 'IDR 700K – 1.2M / person',
    for: '10–50 guests',
    detail: 'Live-fire seafood and grill BBQs at your Kuta villa pool. Fresh prawns, barramundi, chicken satay, and sides. Full setup, chef, servers, and cleanup included.',
  },
  {
    name: 'Villa Birthday Celebration',
    range: 'IDR 800K – 1.5M / person',
    for: '10–40 guests',
    detail: 'Themed birthday menus with cocktail canapés, a sharing feast or plated dinner, and full event staffing. We handle setup and cleanup so the host can enjoy the night.',
  },
  {
    name: 'Family Villa Dining',
    range: 'IDR 700K – 1M / person',
    for: '4–20 guests',
    detail: 'Multi-course villa dinners and casual family feasts with kids-friendly options. Healthy menus, allergy management, and flexible meal timings to suit every family member.',
  },
  {
    name: 'Daily Chef Service',
    range: 'IDR 600K – 1.5M / day',
    for: '4–15 guests',
    detail: 'A daily visiting chef for your full Kuta villa stay. Breakfast and dinner service, grocery management, and menu variety across your holiday.',
  },
]

export default function KutaPage() {
  const canonical = `${SITE}/locations/kuta`

  const localBizKuta = {
    ...localBusinessSchema,
    name: 'myCHEF.id Kuta',
    description: 'Private chef, villa BBQ parties, family villa dining, and event catering in Kuta, Legian, and Tuban, Bali',
    areaServed: {
      '@type': 'Place',
      name: 'Kuta, Bali',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -8.7183,
        longitude: 115.1677,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Kuta Bali | Villa Dining & Event Catering — myCHEF"
        description="Hire a private chef in Kuta Bali for villa dinners, BBQ parties, and celebrations. myCHEF serves Kuta, Legian, and Tuban from IDR 600k/day."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-kuta.webp"
        jsonLd={[
          localBizKuta,
          breadcrumbSchema('Private Chef Kuta', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['kuta'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Kuta Bali',
            description: 'Private chef, villa BBQ catering, family villa dining, and event catering in Kuta, Legian, and Tuban, Bali.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Kuta, Bali' },
            url: canonical,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-kuta.webp"
            alt="Luxury villa pool in Kuta Bali set up for a private chef BBQ party"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF &middot; Kuta</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Kuta Bali
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Poolside BBQ parties, family villa dinners, and birthday celebrations across Kuta, Legian, and Tuban. Chef, team, equipment, and cleanup — all in one booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Kuta Quote
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why myCHEF in Kuta */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Kuta&apos;s Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Kuta</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Kuta is where most of Bali starts. Home to the island's most famous beach, closest to the airport, and packed with holiday villas that draw Australian families, young groups, and first-time visitors who want the full Bali experience without the complexity of more remote locations. The energy here is high, the villas are generous, and the guest profile is refreshingly real.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF brings the same standard to Kuta as we bring to <Link to="/locations/seminyak" className="text-[#C5A028] hover:underline font-medium">Seminyak</Link> or Canggu — vetted professional chefs, all equipment provided, full cleanup included. What changes is the tone. Kuta calls for poolside BBQs over plated tasting menus, shared feasting tables over formal service, and menus that work for mixed groups including children. We do all of this well, and we respond fast because Kuta is one of our most efficiently served zones.
            </p>
            <p className="mb-0 leading-relaxed">
              Whether you are planning a <Link to="/events" className="text-[#C5A028] hover:underline font-medium">villa birthday party</Link>, a poolside BBQ for 20, a family dinner that needs a kids menu, or just want a great chef for your Kuta villa week — we cover it all. Browse our <Link to="/catering" className="text-[#C5A028] hover:underline font-medium">catering services</Link> or message us on WhatsApp to get a quote within 2 hours.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Same-day bookings often available (subject to availability)',
              '5 minutes from Ngurah Rai International Airport',
              'Poolside BBQ and villa party specialists',
              'Kids-friendly menus built around your children',
              'HACCP-certified food safety on every booking',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'All equipment provided — no villa kitchen surprises',
              'Indonesian chefs trained to international standards',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A4745]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Kuta Bali</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={i} className="border border-[#E8E6E3] rounded-2xl p-6 hover:border-[#C5A028] transition-colors">
                <h3 className="font-playfair text-xl mb-2">{svc.name}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C5A028] font-semibold text-sm">{svc.range}</span>
                  <span className="text-[#8A8785] text-sm">&middot; {svc.for}</span>
                </div>
                <p className="text-[#4A4745] text-sm leading-relaxed">{svc.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-[#999] text-xs mt-6">All prices subject to 11% tax + 10% service charge (++) unless quoted nett. Groceries billed separately at cost. Final pricing confirmed at booking.</p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Coverage Area</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Kuta Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cover all of Kuta and its immediate surrounds. From the beachfront holiday strip to the quieter residential lanes of south Kuta, we deploy fast with low travel fees.
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

      {/* CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl mb-4">Get Your Kuta Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, villa, guest count, and what kind of experience you want. We respond within 2 hours and send a full menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Kuta Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Kuta Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['kuta'].faqs].map((faq, i) => (
              <details key={i} className="border border-[#E8E6E3] rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1A1A1A] hover:bg-[#F9F9F6] transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-[#C5A028] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-[#4A4745] leading-relaxed border-t border-[#E8E6E3] pt-4 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Resources */}
      <section className="py-16 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Guides &amp; Resources</p>
          <h2 className="font-playfair text-2xl mb-8">Helpful reads for Kuta guests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Private chef costs in Bali', path: '/blog/private-chef-cost-bali', desc: 'Real 2025 pricing for villa dinners, events, and daily hire' },
              { label: 'How to hire a private chef', path: '/blog/how-to-hire-private-chef', desc: 'What credentials to check and red flags to avoid' },
              { label: 'BBQ catering Bali', path: '/catering/bbq-catering', desc: 'Poolside BBQ parties with live grill and fresh seafood' },
              { label: 'Villa birthday parties Bali', path: '/blog/how-to-plan-villa-birthday-party-bali', desc: 'Complete guide to planning a Bali villa birthday celebration' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group block bg-[#FAFAF8] border border-[#E8E6E3] rounded-xl p-5 hover:border-[#C5A028] transition-colors"
              >
                <div className="font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#8A8785] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to other locations */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore Nearby Bali Locations</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: '15 minutes north — beachfront villa dining and fine dining events' },
              { label: 'Fine Dining Bali', path: '/fine-dining', desc: 'Michelin-standard tasting menus at your villa, anywhere in Bali' },
              { label: 'Event Catering Bali', path: '/events', desc: 'Birthdays, weddings, and corporate events with full chef brigade' },
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
          <CityDeepDive slug="kuta" cityName="Kuta" />
</div>
  )
}
