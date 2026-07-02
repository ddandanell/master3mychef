import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '62089674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Pererenan. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Pererenan?',
    a: 'Yes — myCHEF operates throughout Pererenan, Pantai Lima, Seseh, and the north Canggu rice-field lanes. We have experience with the design-led villa properties in this area and the longer-stay guests who book them.',
  },
  {
    q: 'How does Pererenan differ from central Canggu for private dining?',
    a: 'Pererenan offers the calm and privacy that central Canggu cannot. Villas are newer, often architect-designed, and built with strong kitchens and open-air dining areas. Guests here typically want quality without the noise — elegant dinners, curated breakfasts, and multi-day food plans rather than one-off feasts.',
  },
  {
    q: 'How much does a private chef cost in Pererenan?',
    a: 'Designer villa dinners in Pererenan start at IDR 400K–700K per person for 2–10 guests. Weekly chef service is priced per day based on meal count and household size. Group feasts for 8–30 guests range from IDR 450K–800K per person. All prices are subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you do weekly chef service for longer stays in Pererenan?',
    a: 'Yes — weekly chef service is one of our most requested offerings in Pererenan. We assign a consistent chef to your villa for multi-day or multi-week stays, handling breakfast prep, healthy lunches, kids\' meals, and dinner service. Many of our Pererenan clients book 7–30 day packages.',
  },
  {
    q: 'Do you cater for families and remote workers in Pererenan?',
    a: 'Absolutely. Pererenan attracts a strong mix of long-stay families, design-conscious couples, and digital nomads who want daily nutrition handled well. We build weekly menus around dietary requirements, school schedules, and work rhythms — no two households are the same.',
  },
  {
    q: 'Are your Pererenan chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. They understand Balinese ingredients, local market sourcing, and the refined yet relaxed expectations of Pererenan\'s international villa guests.',
  },
]

const AREAS = [
  { name: 'Pererenan Beach', note: 'Surf-adjacent, quieter than Echo Beach. New-build villas with ocean views and strong outdoor dining setups.' },
  { name: 'Pantai Lima', note: 'Boutique enclave with direct beach access. Ideal for intimate chef-table dinners and relaxed group lunches.' },
  { name: 'Seseh', note: 'Ultra-quiet, large estate villas with full kitchen facilities. Multi-day chef service and retreat catering.' },
  { name: 'North Canggu Rice Fields', note: 'Architect-designed properties surrounded by paddy fields. Scenic, private, and perfect for tasting menus.' },
  { name: 'Batu Mejan', note: 'Temple-adjacent enclave with unique villa settings. Small groups, private dinners, and bespoke experiences.' },
  { name: 'Pererenan Village Core', note: 'Central routing with direct market access. Our most responsive area for last-minute chef bookings.' },
]

const SERVICES = [
  {
    name: 'Designer Villa Fine Dining',
    range: 'IDR 400K–700K / person',
    for: '2–10 guests',
    detail: 'Intimate tasting menus and chef-table dinners calibrated to Pererenan\'s design-led villa aesthetic. Clean plating, premium local ingredients, and quiet professional service — nothing performative.',
  },
  {
    name: 'Weekly Chef Service',
    range: 'Custom daily rate',
    for: 'Long stays · 1–15 guests',
    detail: 'A consistent Indonesian chef assigned to your villa for multi-day or multi-week stays. Breakfast prep, healthy lunches, kids\' meals, and dinner service built around your household rhythm and dietary requirements.',
  },
  {
    name: 'Relaxed Group Feast',
    range: 'IDR 450K–800K / person',
    for: '8–30 guests',
    detail: 'Arrival dinners, birthday celebrations, and group lunches for villas gathering family or friends. Generous shared-plate formats, local and international dishes, and full cleanup by our team.',
  },
  {
    name: 'Healthy Retreat Catering',
    range: 'IDR 350K–600K / person',
    for: '6–20 guests',
    detail: 'Multi-day catering for wellness retreats, yoga groups, and remote-work communities. Whole-food menus, plant-based options, and portion structures designed to energise rather than slow guests down.',
  },
]

export default function PererenanPage() {
  const canonical = `${SITE}/locations/pererenan`

  const localBizPererenan = {
    ...localBusinessSchema,
    name: 'myCHEF.id Pererenan',
    description: 'Private chef, designer villa fine dining, weekly chef service, and group feast catering in Pererenan, Bali',
    areaServed: {
      '@type': 'Place',
      name: 'Pererenan, Bali',
    },
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Pererenan | Design Villas & Private Dining — myCHEF"
        description="Hire a private chef in Pererenan for designer villa dinners, weekly chef service & group feasts. Indonesian chefs, Michelin standards, quiet Canggu enclave. WhatsApp for quotes."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-pererenan.webp"
        jsonLd={[
          localBizPererenan,
          breadcrumbSchema('Private Chef Pererenan', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['pererenan'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Pererenan',
            description: 'Premium private chef, designer villa dining, weekly meal service, and group feast catering across Pererenan, Pantai Lima, Seseh, and north Canggu.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Pererenan, Bali' },
            url: canonical,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-pererenan.webp"
            alt="Architect-designed villa in Pererenan, Bali set up for a private chef dinner with rice-field views"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Pererenan</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Pererenan
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Design-led villa dining in Bali's quietest Canggu enclave. Tasting menus, weekly chef service, and group feasts for longer-stay guests who value privacy and quality over everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Pererenan Quote
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

      {/* Why myCHEF in Pererenan */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Pererenan's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Pererenan</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Pererenan sits on the quiet north-west edge of the Canggu orbit — close enough to Batu Bolong and Echo Beach for convenience, far enough for the calm that design-conscious travellers come to Bali to find. The villas here are newer, larger, and built with a level of detail rarely seen in central Canggu: architect-designed interiors, open-air dining pavilions, strong kitchen infrastructure, and grounds that reward unhurried mornings and long evening meals.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF has built a dedicated presence in Pererenan precisely because the guest profile here demands a different kind of culinary service. Longer stays mean consistent chef relationships, evolving menus, and food planning across days rather than just one event. Many of our Pererenan clients book weekly chef packages — a consistent Indonesian chef who learns the household's preferences, dietary requirements, and daily rhythm over the course of a stay.
            </p>
            <p className="mb-0 leading-relaxed">
              For one-off dinners and group events, we bring the same Michelin-level execution that defines myCHEF across Bali — clean, precise tasting menus for couples, generous shared-plate feasts for arriving groups, and retreat catering for wellness communities who want whole-food nutrition handled with care. Every chef on our Pererenan team is Indonesian, trained to international standards, and deeply familiar with the rice-field lanes, local markets, and villa layouts that define this part of the island.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Architect-villa specialists — experienced with strong open-air kitchens',
              'Weekly chef packages for multi-day and long-stay guests',
              'Direct sourcing from Canggu local markets and organic suppliers',
              'HACCP-certified kitchen practices, same-day food safety',
              '50% deposit to secure your date — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'Full service team: chefs, waitstaff, breakfast specialists',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Pererenan</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Pererenan Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Pererenan team covers the full north Canggu corridor — from beachfront villas at Pantai Lima to the quietest rice-field estates in Seseh. We know the roads, the villas, and the local suppliers in every pocket.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Pererenan Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, villa, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Pererenan Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Pererenan Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['pererenan'].faqs].map((faq, i) => (
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
              { label: 'Private Chef Canggu', path: '/locations/canggu', desc: 'Surf culture, poolside BBQs, healthy menus for digital nomads' },
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: 'Beachfront fine dining, villa parties, Bali\'s most vibrant scene' },
              { label: 'Private Chef Ubud', path: '/locations/ubud', desc: 'Jungle villa dining, wellness retreats, Balinese cultural immersion' },
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
          <CityDeepDive slug="pererenan" cityName="Pererenan" />
</div>
  )
}
