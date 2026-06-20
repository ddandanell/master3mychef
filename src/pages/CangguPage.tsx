import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'
const WA = '491635080236'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Canggu. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Canggu?',
    a: 'Yes — Canggu is one of our core service areas. Our chefs are based here and cover everything from Batu Bolong and Echo Beach to Berawa, Babakan, and the Pererenan border. We offer same-day booking for simple dinners and fast confirmation for groups.',
  },
  {
    q: 'What kind of food does a private chef in Canggu typically cook?',
    a: 'Canggu guests tend to want healthy, high-protein, and globally-influenced menus. We specialise in plant-forward dinners, fresh seafood grills, Asian fusion tasting menus, and casual poolside BBQs. We adapt completely to your preferences — just tell us your dietary requirements.',
  },
  {
    q: 'How much does a private chef cost in Canggu?',
    a: 'Villa dinners start at IDR 400K–700K per person for a 3–4 course dinner (2–10 guests). Poolside BBQs for larger groups run IDR 450K–800K per person. Multi-day retreat packages have dedicated pricing. All prices are subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can I book a chef for a surf retreat or group stay in Canggu?',
    a: 'Absolutely — multi-day retreat catering is a specialty. We build full-board programmes (breakfast, lunch, dinner) tailored for surf groups, yoga retreats, and digital nomad communities doing extended stays. High-protein, recovery-focused menus are our default for active groups.',
  },
  {
    q: 'How quickly can you set up in Canggu?',
    a: 'Because our chefs are Canggu-based, we can often confirm same-day for simple dinners (subject to availability). Standard villa dinners work best with 24–48 hours notice. BBQs and group events benefit from 2–3 days of lead time for market sourcing.',
  },
  {
    q: 'Are your Canggu chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals. They understand Canggu\'s international food culture intimately, from paleo and gluten-free to vegan and Ayurvedic, and deliver Michelin-standard execution from your villa kitchen.',
  },
]

const AREAS = [
  { name: 'Batu Bolong', note: 'Canggu\'s creative heart. High villa density, coffee culture, and post-surf dinner vibes.' },
  { name: 'Echo Beach', note: 'Beachfront access. Seafood grills, casual BBQs, and group dinners with ocean views.' },
  { name: 'Berawa', note: 'Boutique hotel belt and luxury villas. Elegant dinners and wellness-focused menus.' },
  { name: 'Babakan & Nelayan', note: 'Quieter rice-field lanes. Spacious compounds perfect for retreat catering.' },
  { name: 'Pererenan', note: 'Northern Canggu. Emerging villa zone. Fast service from our local team.' },
  { name: 'Seseh', note: 'Black-sand beach escape. Remote villa dinners for couples and small groups.' },
]

const SERVICES = [
  {
    name: 'Villa & Pool Dinners',
    range: 'IDR 400K–700K / person',
    for: '2–12 guests',
    detail: 'Casual-luxury private dinners at your Canggu villa — fresh seafood, modern Asian fusion, or a classic BBQ. Relaxed service, chef in residence, full cleanup included.',
  },
  {
    name: 'Surf Retreat Catering',
    range: 'IDR 350K–600K / person',
    for: '6–30 guests',
    detail: 'High-protein, recovery-focused meal programmes for surf groups and active retreat guests. Breakfast, lunch, and dinner daily packages with full dietary accommodation.',
  },
  {
    name: 'Poolside BBQ Feast',
    range: 'IDR 450K–800K / person',
    for: '10–40 guests',
    detail: 'Live-fire grilling of whole seafood, local beef cuts, and vegetable skewers. Best for the social energy of Canggu\'s large villa pools. Full bar service available on request.',
  },
  {
    name: 'Weekly Meal Prep & Hosting',
    range: 'IDR 300K–550K / person',
    for: 'Daily for 1–10 guests',
    detail: 'Daily breakfast, lunches, and dinners for long-stay digital nomads, families, or wellness travellers. Grocery management and fridge stocking included in all packages.',
  },
]

export default function CangguPage() {
  const canonical = `${SITE}/locations/canggu`

  const localBizCanggu = {
    ...localBusinessSchema,
    name: 'myCHEF.id Canggu',
    description: 'Private chef, villa dining, surf retreat catering, and poolside BBQ in Canggu, Bali',
    areaServed: {
      '@type': 'Place',
      name: 'Canggu, Bali',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '620',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Canggu | Villa Dining &amp; Surf Retreats — myCHEF"
        description="Book a private chef in Canggu for villa dinners, poolside BBQs &amp; surf retreat catering. Indonesian chefs, healthy menus, same-day availability. Get a quote."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-locations-sunset.webp"
        jsonLd={[
          localBizCanggu,
          breadcrumbSchema('Private Chef Canggu', canonical),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Canggu',
            description: 'Private chef, villa dining, poolside BBQs, surf retreat catering, and weekly meal prep in Canggu including Batu Bolong, Echo Beach, Berawa, and Pererenan.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Canggu, Bali' },
            url: canonical,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'AggregateRating',
            itemReviewed: {
              '@type': 'LocalBusiness',
              name: 'myCHEF.id',
              url: 'https://mychef.id',
            },
            ratingValue: '4.9',
            bestRating: '5',
            worstRating: '1',
            ratingCount: '287',
            reviewCount: '287',
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-locations-sunset.webp"
            alt="Modern pool villa in Canggu, Bali set for a casual private chef BBQ dinner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Canggu</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Canggu
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fresh, healthy, globally-influenced cooking for Canggu's surf villas and creative compounds. Poolside BBQs, retreat catering, and villa dinners — from 2 to 40 guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Canggu Quote
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Why myCHEF in Canggu */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Canggu's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Canggu</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Canggu is where surf culture meets villa living — a sprawling neighbourhood of modern pool villas, organic cafés, and long-stay guests who eat with intention. The food scene here is among Bali's best for healthy international cooking, and our Canggu guests expect the same from a private chef: fresh, nutrient-dense, globally-influenced food that matches their lifestyle.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF is Canggu-based, which means faster deployment, lower travel fees, and chefs who know every villa kitchen layout from Echo Beach to the Pererenan border. We specialise in multi-day meal programmes for surf groups and retreats, high-energy poolside BBQs, and elegant villa dinners that rival Canggu's best restaurants — served at your pool instead of a table on the strip.
            </p>
            <p className="mb-0 leading-relaxed">
              All of our Canggu chefs are Indonesian professionals trained to international culinary standards. They are fluent in English, experienced with the full range of dietary requirements common in the area — vegan, paleo, gluten-free, Ayurvedic — and built for the social, collaborative cooking style that Canggu guests love.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Canggu-based team — fastest confirmation and lowest travel fees',
              'Specialists in retreat catering and multi-day meal programmes',
              'Full dietary flexibility: vegan, gluten-free, paleo, raw',
              'HACCP-certified food safety practices',
              '50% deposit to confirm — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'All ingredients sourced at cost — fully transparent pricing',
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

      {/* Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Canggu</h2>
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

      {/* Areas */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Coverage Area</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Canggu Neighbourhoods We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Canggu team covers all areas from the busy beach strip to the quieter rice-field villas. No travel surcharge for central Canggu zones.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Canggu Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, villa location, guest count, and dietary requirements via WhatsApp. We respond within 2 hours and send a menu proposal within 24 hours.
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
          <h2 className="font-playfair text-3xl mb-10">Canggu Private Chef FAQ</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
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

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Locations</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: 'Beachfront villa dining, events, and birthday celebrations' },
              { label: 'Private Chef Uluwatu', path: '/locations/uluwatu', desc: 'Clifftop seafood BBQs, weddings, and sunset tasting menus' },
              { label: 'Private Chef Ubud', path: '/locations/ubud', desc: 'Jungle villa dinners, wellness retreats, Balinese feasts' },
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
    </main>
  )
}
