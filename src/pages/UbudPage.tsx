import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'
import { getHeroSrcSet } from '@/lib/imageDimensions'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Ubud. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Ubud?',
    a: 'Yes — myCHEF operates throughout Ubud and the surrounding areas including Sayan, Penestanan, Tegalalang, and the Monkey Forest district. Because Ubud villas are spread across jungle valleys and village lanes, we coordinate transport and staging carefully to ensure on-time service.',
  },
  {
    q: 'What kind of food is best for a private chef dinner in Ubud?',
    a: 'Ubud guests tend to want menus that connect to the environment — organic, plant-forward, locally sourced, and culturally grounded. We specialise in traditional Balinese cuisine, modern Indonesian tasting menus, and wellness-focused plant-based cooking. We also offer the full Babi Guling (whole-roasted pig) experience for authentic feasts.',
  },
  {
    q: 'How much does a private chef cost in Ubud?',
    a: 'Jungle villa dinners start from IDR 700K per person for a 3–4 course menu (2–10 guests). Wellness retreat full-board programmes are priced as daily per-person packages. Traditional Babi Guling feasts have dedicated pricing based on guest count. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you cater for a yoga or wellness retreat in Ubud?',
    a: 'Yes — multi-day retreat catering is one of our core Ubud services. We build full-board meal programmes (breakfast, lunch, dinner) with detailed nutritional specifications for yoga retreats, detox programmes, and wellness groups. Plant-based, raw, and Ayurvedic menus are all available.',
  },
  {
    q: 'Do you offer traditional Balinese feasts in Ubud?',
    a: 'Yes — Ubud is the spiritual and cultural heart of Bali, and our traditional dining experiences reflect that. We offer Babi Guling (whole-roasted pig), Megibung communal feasts, and Balinese market-to-table menus that use the morning Ubud market as our ingredient source.',
  },
  {
    q: 'Are your Ubud chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals. Our Ubud team has particular depth in Balinese cultural cuisine, organic cooking, and the wellness dietary requirements that are common among Ubud\'s international retreat guests.',
  },
]

const AREAS = [
  { name: 'Sayan & Kedewatan', note: 'Deep jungle valleys above the Ayung River. Ultra-private villa dinners for couples and small groups.' },
  { name: 'Penestanan', note: 'Artist village west of Ubud. Boutique villas with rice-field views. Intimate cultural dining.' },
  { name: 'Tegalalang', note: 'Rice terrace panoramas. Romantic dinners for couples and retreat group catering.' },
  { name: 'Monkey Forest District', note: 'Central Ubud access. Wellness retreat catering and family villa dining.' },
  { name: 'Campuhan Ridge', note: 'Elevated jungle setting. Serene private dinners with valley views.' },
  { name: 'Mas & Peliatan', note: 'Artisan village south of Ubud. Traditional feast hosting and cultural dining experiences.' },
]

const SERVICES = [
  {
    name: 'Jungle Villa Fine Dining',
    range: 'From IDR 700K / person',
    for: '2–10 guests',
    detail: 'Private dinners in your Ubud jungle villa — Balinese market-to-table menus, modern Indonesian tasting courses, or plant-forward wellness cooking. Quiet, professional service matching the Ubud pace.',
  },
  {
    name: 'Wellness Retreat Catering',
    range: 'Custom daily package',
    for: '6–40 guests',
    detail: 'Full-board meal programmes for yoga and wellness retreats. Breakfast, lunch, and dinner daily with detailed nutritional profiling. Plant-based, raw, gluten-free, and Ayurvedic menus available.',
  },
  {
    name: 'Traditional Balinese Feast',
    range: 'IDR 700K–800K / person',
    for: '8–50 guests',
    detail: 'Authentic Babi Guling whole-roasted pig, Megibung communal feasts, and traditional Balinese rijsttafel. Sourced from morning Ubud markets and prepared with traditional methods.',
  },
  {
    name: 'Romantic Couple Dinners',
    range: 'IDR 700K–950K / person',
    for: '2 guests',
    detail: 'Intimate multi-course dinners for couples — anniversary, honeymoon, or proposal settings. Rice terrace view positioning, floral setup, and personalised menu available on request.',
  },
]

export default function UbudPage() {
  const canonical = `${SITE}/locations/ubud`

  const localBizUbud = {
    ...localBusinessSchema,
    name: 'myCHEF.id Ubud',
    description: 'Private chef, jungle villa dining, wellness retreat catering, and traditional Balinese feasts in Ubud, Bali',
    areaServed: {
      '@type': 'Place',
      name: 'Ubud, Bali',
    },
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Ubud | Jungle Villa & Retreat Dining — myCHEF"
        description="Book a private chef in Ubud for jungle villa dinners, wellness retreat catering & Balinese feasts. Organic menus, Indonesian chefs. WhatsApp to book."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-ubud.webp"
        jsonLd={[
          localBizUbud,
          breadcrumbSchema('Private Chef Ubud', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['ubud'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Ubud',
            description: 'Private chef, jungle villa dining, wellness retreat catering, traditional Balinese feasts, and romantic dinners in Ubud including Sayan, Penestanan, and Tegalalang.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Ubud, Bali' },
            url: canonical,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-ubud.webp"
        srcSet={getHeroSrcSet('/generated/mychef-location-bali-city-ubud.webp')}
        sizes="100vw"
            alt="Private chef service in Ubud, Bali by myCHEF — jungle villa Balinese dinner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Ubud</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Ubud
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Organic sourcing, traditional Balinese cuisine, and wellness-focused cooking in Bali's cultural heart. Jungle villa dinners, retreat catering, and authentic feasts across Ubud.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get an Ubud Quote
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

      {/* Why myCHEF in Ubud */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Ubud's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Ubud</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Ubud is Bali's spiritual and cultural heart — rice terraces, jungle valleys, and a slower pace that invites deeper dining experiences. Guests here don't just want food; they want a connection to Balinese culture, local ingredients, and the land. Our Ubud service is built around that intention. New to private chef dining? Our <Link to="/blog/how-to-hire-private-chef" className="text-[#C5A028] hover:underline font-medium">guide to hiring a private chef</Link> walks through the whole process.
            </p>
            <p className="mb-4 leading-relaxed">
              We source from the Ubud morning market, work with local organic farmers in the Sayan and Penestanan valleys, and build menus that reflect the season and the surroundings. Our chefs are experienced in both <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">fine dining in Ubud</Link> and traditional Balinese cooking — Babi Guling, Megibung feasts, jamu-infused dishes — as well as the modern wellness cuisine that Ubud's international <Link to="/events" className="text-[#C5A028] hover:underline font-medium">yoga retreat and wellness event</Link> guests expect.
            </p>
            <p className="mb-0 leading-relaxed">
              Ubud's geography is complex — villas spread across jungle roads, valley floors, and elevated ridges. We coordinate transport and staging carefully and build extra time into Ubud logistics so your service starts precisely on schedule, regardless of the access. See <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">our pricing guide</Link> for Ubud-specific rates including logistics fees for remote locations.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Morning Ubud market sourcing — freshest local ingredients',
              'Traditional Balinese Babi Guling and Megibung specialists',
              'Plant-based, raw, gluten-free, and Ayurvedic menus available',
              'HACCP-certified food safety practices',
              '50% deposit to confirm — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'Multi-day retreat full-board programmes available',
              'Indonesian chefs with deep Balinese culinary heritage',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Ubud</h2>
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
          <p className="text-[#999] text-xs mt-6">All prices subject to 11% tax + 10% service charge (++). Final pricing depends on guest count, menu complexity, and date. Ubud bookings recommended 3–5 days in advance.</p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Coverage Area</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Ubud Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cover the full Ubud region — from the deep jungle valleys of Sayan to the rice terraces of Tegalalang and the artisan villages south of town. Logistics fee applies for remote locations.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Ubud Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, villa location in Ubud, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Ubud Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Ubud Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['ubud'].faqs].map((faq, i) => (
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
          <h2 className="font-playfair text-2xl mb-8">Helpful reads for Ubud guests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'How to hire a private chef in Bali', path: '/blog/how-to-hire-private-chef', desc: 'Complete step-by-step hiring guide — vetting, pricing, what to expect' },
              { label: 'Chef hiring & credentials guide', path: '/blog/chef-qualifications-credentials-bali-hiring', desc: 'What qualifications to look for and red flags to avoid' },
              { label: 'Yoga retreat chef services', path: '/events', desc: 'Full-board retreat catering: breakfast, lunch, and dinner daily' },
              { label: 'Private chef pricing', path: '/pricing', desc: 'Transparent starting prices for every Ubud service format' },
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

      {/* Internal links */}
      <section className="py-16 bg-[#F5F3F0] border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Locations</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Canggu', path: '/locations/canggu', desc: 'Surf culture, healthy menus, poolside BBQs and retreat catering' },
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: 'Beachfront villa dining, events, and birthday celebrations' },
              { label: 'Private Chef Uluwatu', path: '/locations/uluwatu', desc: 'Clifftop seafood BBQs, weddings, and sunset tasting menus' },
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
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Private Chef in Ubud</h3>
          <p className="text-gray-600 mb-6">Hire a dedicated private chef for your villa in Ubud. Custom menus, full service, and seamless cleanup.</p>
          <Link to="/private-chef/ubud" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            View Private Chef Options <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="ubud" cityName="Ubud" />
    </div>
  )
}
