import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '6289674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Seminyak. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Seminyak?',
    a: 'Yes — Seminyak is one of our most active service zones. We cover all Seminyak areas including Petitenget, Oberoi, Jl. Kayu Aya, and the Kudeta beachfront. Same-day bookings are often possible for Seminyak, and standard villa dinners can be confirmed within 24 hours.',
  },
  {
    q: 'What kind of food does a private chef in Seminyak typically cook?',
    a: 'Seminyak guests tend to want fine dining quality at villa pace — multi-course tasting menus, seafood platters, European classics, and elevated Indonesian cuisine. We build menus that rival the best restaurants on the strip, served at your private pool instead.',
  },
  {
    q: 'How much does a private chef cost in Seminyak?',
    a: 'Dinner for 2–8 guests starts at IDR 450K–800K per person for a 4–5 course tasting menu. Cocktail parties and events typically range from IDR 550K–1.2M per person depending on staffing and menu. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you cater birthday parties and events in Seminyak villas?',
    a: 'Yes — villa events are a primary service in Seminyak. We handle birthday celebrations, bachelorette parties, anniversary dinners, and corporate cocktail events with full staffing: chefs, waitstaff, and bartenders. Seminyak villas often have large pools and terraces ideal for up to 60–80 guests.',
  },
  {
    q: 'Do you offer weekly chef service for long stays in Seminyak?',
    a: 'Yes — for villa bookings of 7+ days, we offer a dedicated live-in or daily visiting chef who handles all meals, grocery shopping, and kitchen management. This is popular with families and group stays that want restaurant-quality food without leaving the villa.',
  },
  {
    q: 'Are your Seminyak chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. They are fluent in English and experienced with the fine dining expectations of Seminyak\'s international guests.',
  },
]

const AREAS = [
  { name: 'Petitenget', note: 'Seminyak\'s luxury epicentre. High-end villa estates and beachfront access.' },
  { name: 'Oberoi & Kayu Aya', note: 'Designer strip and restaurant row. Villa dinners that beat the best tables.' },
  { name: 'Kudeta & Batu Belig', note: 'Beachclub proximity. Cocktail events, sunset dinners, and large group hosting.' },
  { name: 'Laksmana & Basangkasa', note: 'Quieter residential lanes behind the strip. Mid-size villa dinners and family events.' },
  { name: 'Seminyak Square Area', note: 'Central convenience. Fast chef deployment for spontaneous dinner bookings.' },
  { name: 'Kerobokan Border', note: 'Northern Seminyak border zone. Larger estates, longer stays, weekly chef service.' },
]

const SERVICES = [
  {
    name: 'Beachfront Villa Fine Dining',
    range: 'IDR 450K–800K / person',
    for: '2–10 guests',
    detail: 'Multi-course tasting menus and plated dinners that rival Seminyak\'s best restaurants — served at your villa pool or terrace. Seafood-forward menus and European classics our specialty.',
  },
  {
    name: 'Villa Party & Event Catering',
    range: 'IDR 550K–1.2M / person',
    for: '15–80 guests',
    detail: 'Birthday parties, bachelorette celebrations, anniversary events, and corporate cocktail evenings with full chef brigade, waitstaff, and bar service.',
  },
  {
    name: 'Weekly Chef Service',
    range: 'Custom daily package',
    for: '7+ day stays',
    detail: 'A dedicated chef for your entire Seminyak villa stay — breakfast, lunch, and dinner daily. Grocery shopping, fridge management, and dietary tailoring included.',
  },
  {
    name: 'Cocktail Reception Catering',
    range: 'IDR 400K–700K / person',
    for: '20–60 guests',
    detail: 'Passed canapés, live stations, and sharing platters for standing events. Perfect for pre-dinner cocktail hours, welcome parties, and villa launch events.',
  },
]

export default function SeminyakPage() {
  const canonical = `${SITE}/locations/seminyak`

  const localBizSeminyak = {
    ...localBusinessSchema,
    name: 'myCHEF.id Seminyak',
    description: 'Private chef, beachfront villa dining, villa events, and weekly chef service in Seminyak, Bali',
    areaServed: {
      '@type': 'Place',
      name: 'Seminyak, Bali',
    },
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Seminyak | Beachfront Villa Dining — myCHEF"
        description="Book a private chef in Seminyak for beachfront villa dinners, events & birthday parties. Indonesian chefs, Michelin standards, same-day availability. Get a quote."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-seminyak.webp"
        jsonLd={[
          localBizSeminyak,
          breadcrumbSchema('Private Chef Seminyak', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['seminyak'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Seminyak',
            description: 'Premium private chef, beachfront villa dining, villa party catering, and weekly chef service in Seminyak including Petitenget, Oberoi, and Kayu Aya.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Seminyak, Bali' },
            url: canonical,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-seminyak.webp"
            alt="Luxury beachfront villa in Seminyak, Bali set for a private chef sunset dinner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Seminyak</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Seminyak
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bali's premier villa destination deserves a dining experience to match. Restaurant-quality tasting menus, villa party catering, and beachfront events — across all of Seminyak.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Seminyak Quote
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

      {/* Why myCHEF in Seminyak */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Seminyak's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Seminyak</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Seminyak is Bali's original luxury villa destination — walk-to-beach estates, designer strips, and a restaurant scene that has set the standard for <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">private fine dining</Link> on the island. Guests here expect the best, and they often want one unforgettable evening that exceeds anything they find on the strip, served at their own pool.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF has served Seminyak since our founding, building menus and service standards that rival the Petitenget and Oberoi area's top restaurants. We know the villa layouts, the sunset timing, and the high-energy social dining culture that makes Seminyak different from Ubud or Uluwatu. Whether you want an intimate 4-course dinner for two or a <Link to="/events" className="text-[#C5A028] hover:underline font-medium">villa birthday party or event</Link> for sixty, we deploy a full team with the right size brigade.
            </p>
            <p className="mb-0 leading-relaxed">
              Every chef on our Seminyak team is Indonesian, fluent in English, and trained to international culinary standards. We source from Seminyak's premium markets and bring our own equipment — knives, serving ware, and linen — so your villa kitchen needs nothing beyond the basics. Browse our <Link to="/catering" className="text-[#C5A028] hover:underline font-medium">Seminyak catering services</Link> or check <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">current pricing</Link> for a full breakdown.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Same-day bookings available (subject to availability)',
              'Menus that rival Petitenget & Oberoi\'s best restaurants',
              'Full villa party service: chef, waitstaff, bartenders',
              'HACCP-certified food safety practices',
              '50% deposit to confirm — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'Bring our own equipment — no villa kitchen surprises',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Seminyak</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Seminyak Neighbourhoods We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            We cover all Seminyak areas from the beachfront estates to the quieter residential lanes behind the strip. Fast deployment, low travel fees, priority coverage.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Seminyak Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, villa, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Seminyak Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Seminyak Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['seminyak'].faqs].map((faq, i) => (
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
          <h2 className="font-playfair text-2xl mb-8">Helpful reads for Seminyak guests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'How to hire a private chef in Bali', path: '/blog/how-to-hire-private-chef', desc: 'Complete step-by-step hiring guide — vetting, pricing, what to expect' },
              { label: 'Chef hiring & credentials guide', path: '/blog/chef-hiring-guide', desc: 'What qualifications to look for and red flags to avoid' },
              { label: 'Seminyak catering services', path: '/catering', desc: 'Villa party catering, cocktail events, and plated dinners' },
              { label: 'Private chef pricing', path: '/pricing', desc: 'Transparent starting prices for every Seminyak service format' },
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
          {/* Cross-link to private-chef page */}
      <section className="py-12 px-6">
        <div className="max-w-[960px] mx-auto text-center">
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Private Chef in Seminyak</h3>
          <p className="text-gray-600 mb-6">Hire a dedicated private chef for your villa in Seminyak. Custom menus, full service, and seamless cleanup.</p>
          <Link to="/private-chef/seminyak" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white rounded-full hover:bg-[#D4B43A] transition-all">
            View Private Chef Options <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CityDeepDive slug="seminyak" cityName="Seminyak" />
</main>
  )
}
