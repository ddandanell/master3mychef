import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '62089674072020'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Denpasar. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Denpasar?',
    a: 'Yes — myCHEF operates throughout Denpasar including Renon, Panjer, Denpasar Selatan, the Teuku Umar business corridor, and surrounding residential compounds. Our central positioning in Denpasar gives us some of the fastest deployment times in south Bali.',
  },
  {
    q: 'Can you do business lunches and corporate catering in Denpasar?',
    a: 'Yes — business and executive catering is a primary service in Denpasar. We cater working lunches, client dinners, office events, and management retreats for companies and business hosts across central Bali. We build efficient, premium menus that fit a professional schedule without compromising on quality.',
  },
  {
    q: 'How much does a private chef cost in Denpasar?',
    a: 'Private home dining in Denpasar starts at IDR 350K–650K per person for 2–15 guests. Business and corporate catering ranges from IDR 400K–750K per person for 10–60 guests. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'How quickly can you deploy a private chef in Denpasar?',
    a: 'Denpasar is one of our fastest-response zones. For standard home dinners, we can often confirm same-day or next-day bookings. For staffed business events and catering with larger teams, 48 hours notice gives us comfortable preparation time.',
  },
  {
    q: 'Do you cater for family celebrations and private events in Denpasar?',
    a: 'Absolutely. We cater birthday dinners, family milestones, and private celebrations across Denpasar residential compounds. Our team handles chefs, waitstaff, setup, and cleanup — giving hosts the hospitality experience without running the kitchen.',
  },
  {
    q: 'Are your Denpasar chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. In Denpasar, our chefs are especially familiar with local residential hosting culture, Balinese family dining traditions, and the business hospitality expectations of the area.',
  },
]

const AREAS = [
  { name: 'Renon', note: 'Government and business district. Executive dinners, working lunches, and professional event catering.' },
  { name: 'Panjer', note: 'Residential enclave close to central Denpasar. Family dinners, recurring meal service, and home entertaining.' },
  { name: 'Denpasar Selatan', note: 'South Denpasar residential and business zone. Fast deployment for weekday and evening bookings.' },
  { name: 'Teuku Umar Corridor', note: 'Main business spine. Corporate catering, client lunches, and office event service.' },
  { name: 'Ubung & North Denpasar', note: 'North Denpasar compounds and residential areas. Family celebrations and longer-stay home dining.' },
  { name: 'Airport Zone', note: 'Closest to Ngurah Rai. First-night dinners for arrival groups and quick-turnaround event catering.' },
]

const SERVICES = [
  {
    name: 'Private Chef Home Dining',
    range: 'IDR 350K–650K / person',
    for: '2–15 guests',
    detail: 'Chef-led lunches and dinners for homes, family compounds, and private residences. Premium Indonesian and international menus, full service, and cleanup — the restaurant experience without leaving the house.',
  },
  {
    name: 'Business Lunch Catering',
    range: 'IDR 400K–750K / person',
    for: '10–60 guests',
    detail: 'Working lunches, client entertainment, and executive dining tailored to a professional agenda. Efficient setup, clean service timing, and menus that impress without disrupting the meeting flow.',
  },
  {
    name: 'Family Celebration Dinner',
    range: 'IDR 400K–700K / person',
    for: '6–30 guests',
    detail: 'Birthday dinners, milestone celebrations, and family gathering feasts at your Denpasar compound. Our team handles every detail — from menu design to final cleanup — so you focus on the moment.',
  },
  {
    name: 'Recurring Meal Service',
    range: 'Custom weekly rate',
    for: 'Individuals & families',
    detail: 'Regular meal prep, daily breakfast or dinner service, and weekly cooking packages for expat families, business executives, and long-term residents who want consistent quality without cooking themselves.',
  },
]

export default function DenpasarPage() {
  const canonical = `${SITE}/locations/denpasar`

  const localBizDenpasar = {
    ...localBusinessSchema,
    name: 'myCHEF.id Denpasar',
    description: 'Private chef, home dining, business lunch catering, and recurring meal service in Denpasar, Bali',
    areaServed: { '@type': 'Place', name: 'Denpasar, Bali' },
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Denpasar | Home Dining & Business Catering — myCHEF"
        description="Hire a private chef in Denpasar for business lunches, home dining & recurring meal service. Fast central logistics, Indonesian chefs, same-day availability. WhatsApp us today."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-denpasar.webp"
        jsonLd={[
          localBizDenpasar,
          breadcrumbSchema('Private Chef Denpasar', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['denpasar'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Denpasar',
            description: 'Private chef, home dining, business catering, and recurring meal service across Denpasar including Renon, Panjer, and the Teuku Umar business corridor.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Denpasar, Bali' },
            url: canonical,
          },
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-denpasar.webp"
            alt="Urban villa dining room in Denpasar, Bali prepared for a private chef business lunch or family dinner"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Denpasar</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Chef<br />in Denpasar</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bali's operational centre, served with precision. Fast deployment, business lunch catering, daily home dining, and family celebration dinners — all from central Bali's best-positioned chef team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get a Denpasar Quote
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Denpasar's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Denpasar</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Denpasar is where Bali actually operates. While the villas get the attention, the city is the engine — businesses, residences, expat families, and the administrative and commercial infrastructure that holds south Bali together. Private-chef service here looks different from the Seminyak villa scene. It is less about spectacle and more about precision: a working lunch that runs to schedule, a family dinner that feeds multiple generations well, and a weekly chef service that makes residential life genuinely easier.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF's central positioning gives us faster deployment in Denpasar than almost anywhere else we operate. We are minutes from the main residential and business districts, which means same-day bookings are often possible and last-minute requests do not result in rushed execution. We maintain Denpasar-specific supplier relationships for produce, proteins, and local market sourcing — the same discipline we bring to our most premium villa events.
            </p>
            <p className="mb-0 leading-relaxed">
              Whether you need a weekly private chef to manage household meals, a premium business lunch for a client relationship that matters, or a family celebration dinner at your compound, our Denpasar team handles it with the same professionalism as a top-tier villa event. Every chef on our team is Indonesian, trained to international culinary standards, and experienced with both home-dining hospitality and the structured requirements of corporate entertaining.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'One of the fastest deployment zones in south Bali',
              'Business and corporate catering with professional run sheets',
              'Same-day bookings often available for home dining',
              'HACCP-certified kitchen practices, same-day food safety',
              '50% deposit to secure your date — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WITA)',
              'Full service team: chefs, waitstaff, recurring meal service',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Denpasar</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Denpasar Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Denpasar team covers the full city — business districts, residential compounds, and the surrounding suburbs. Our central positioning gives us the most efficient coverage of any myCHEF zone in Bali.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Denpasar Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Send us your date, location, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Denpasar Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Denpasar Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['denpasar'].faqs].map((faq, i) => (
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
              { label: 'Private Chef Sanur', path: '/locations/sanur', desc: 'Family villa dining, sunrise breakfasts, calm east-coast setting' },
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: "Beachfront fine dining, villa parties, Bali's most vibrant scene" },
              { label: 'Private Chef Nusa Dua', path: '/locations/nusa-dua', desc: 'Resort estates, corporate dining, five-star villa precision' },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="group block bg-white border border-[#E8E6E3] rounded-xl p-5 hover:border-[#C5A028] transition-colors">
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
              <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Private Chef in Denpasar</h3>
              <p className="text-gray-600 mb-6">Hire a dedicated private chef for your villa in Denpasar. Custom menus, full service, and seamless cleanup.</p>
              <Link to="/private-chef/denpasar" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-[#1A1A1A] rounded-full hover:bg-[#D4B43A] transition-all">
                View Private Chef Options <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <CityDeepDive slug="denpasar" cityName="Denpasar" />
</div>
  )
}
