import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'
const WA = '491635080236'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Sanur. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Sanur?',
    a: "Yes — myCHEF operates throughout Sanur, Sindhu Beach, Mertasari, Batu Jimbar, and the beachfront villa corridor. We plan our Sanur service around earlier mealtimes, multi-generational groups, and the calmer pace of Bali's best east-coast family destination.",
  },
  {
    q: 'Is Sanur good for families wanting private chef service?',
    a: "Sanur is one of our strongest family villa areas. The calm beach, walkable streets, and earlier rhythm suit multi-generational groups perfectly. We build menus that satisfy grandparents, parents, and children — Indonesian sharing tables, grilled seafood, dietary-flexible breakfasts, and kid-friendly spreads that still feel special.",
  },
  {
    q: 'How much does a private chef cost in Sanur?',
    a: 'Family villa dinners in Sanur start at IDR 400K–700K per person for 4–20 guests. Breakfast and brunch service is priced at IDR 250K–450K per person. Group feasts and birthday catering range from IDR 450K–800K per person depending on complexity. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you do a sunrise breakfast or morning brunch in Sanur?',
    a: 'Yes — sunrise breakfast service is one of our most requested Sanur formats. We arrive early, set up the table before guests wake, and serve a warm, freshly-cooked breakfast as the sun rises over the Lombok Strait. It is a genuinely special way to open a Bali morning.',
  },
  {
    q: 'Do you cater for birthday celebrations and villa parties in Sanur?',
    a: 'Absolutely. We regularly cater birthday lunches, anniversary dinners, and family celebration feasts across Sanur villa compounds. Our team handles chefs, waitstaff, and cleanup — giving the host the experience of a party without any of the kitchen stress.',
  },
  {
    q: 'Are your Sanur chefs Indonesian?',
    a: "Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. They are experienced with the expectations of family groups, the practicalities of multi-generational menus, and the warm, relaxed hospitality that defines Sanur's dining culture.",
  },
]

const AREAS = [
  { name: 'Sanur Beach', note: 'The main beachfront strip. Calm water, early mornings, and villa compounds perfect for sunrise breakfast service.' },
  { name: 'Sindhu Beach', note: 'Boutique villas close to Sindhu Market. Fresh produce sourcing and relaxed family dining.' },
  { name: 'Mertasari', note: 'Quieter south Sanur beach area. Larger compounds, multi-generational groups, and private celebration feasts.' },
  { name: 'Batu Jimbar', note: 'Design-led villa enclave north of Sanur. Intimate dinners, longer stays, and daily chef service.' },
  { name: 'Sanur South', note: 'Residential and family compound territory. Weekday bookings and recurring meal service.' },
  { name: 'Sindhu Market District', note: 'Central Sanur access with direct market proximity for same-morning produce sourcing.' },
]

const SERVICES = [
  {
    name: 'Family Villa Dining',
    range: 'IDR 400K–700K / person',
    for: '4–20 guests',
    detail: 'Dinners designed for multi-generational groups — Indonesian sharing plates, fresh seafood, and menu variety that works for every age from children to grandparents. Warm, generous, and unhurried.',
  },
  {
    name: 'Sunrise Breakfast Service',
    range: 'IDR 250K–450K / person',
    for: '2–15 guests',
    detail: 'A fully prepared hot breakfast as the sun rises over the Lombok Strait. Our chef arrives before dawn, sets your table, and serves the first meal of the day with the same care as a fine-dining dinner.',
  },
  {
    name: 'Seafood & Indonesian Feast',
    range: 'IDR 450K–800K / person',
    for: '6–30 guests',
    detail: 'A generous multi-dish spread of grilled seafood, Indonesian classics, and fresh tropical sides. Sourced from Sindhu Market and prepared on your villa terrace or lawn for a social, flavour-forward evening.',
  },
  {
    name: 'Birthday & Celebration Catering',
    range: 'IDR 450K–800K / person',
    for: '8–40 guests',
    detail: 'Milestone lunches and birthday dinners with full service. Chefs cook, waitstaff serve, and our team handles setup and cleanup — so the person being celebrated actually gets to relax.',
  },
]

export default function SanurPage() {
  const canonical = `${SITE}/locations/sanur`

  const localBizSanur = {
    ...localBusinessSchema,
    name: 'myCHEF.id Sanur',
    description: 'Private chef, family villa dining, sunrise breakfast service, and celebration catering in Sanur, Bali',
    areaServed: { '@type': 'Place', name: 'Sanur, Bali' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '430',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Sanur | Family Villa Dining & Catering — myCHEF"
        description="Hire a private chef in Sanur for family villa dinners, sunrise breakfasts & celebration catering. Indonesian chefs, multi-generational menus, calm east-coast setting. WhatsApp us."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-sanur.webp"
        jsonLd={[
          localBizSanur,
          breadcrumbSchema('Private Chef Sanur', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Sanur',
            description: 'Premium private chef, family villa dining, sunrise breakfast service, and celebration catering across Sanur, Sindhu Beach, Mertasari, and Batu Jimbar.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Sanur, Bali' },
            url: canonical,
          },
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-sanur.webp"
            alt="Calm beachfront villa in Sanur, Bali set for a private chef breakfast at sunrise over the Lombok Strait"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Sanur</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Chef<br />in Sanur</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bali's calmest family beach destination, served with the care it deserves. Sunrise breakfasts, multi-generational villa dinners, and celebration catering in Sanur's beachfront compounds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get a Sanur Quote
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Sanur's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Sanur</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Sanur is where Bali slows down properly. The east coast beach, the flat walkable streets, and the calm protected water attract a guest who has done the party-villa circuit in Seminyak and Canggu and now wants something that actually restores them. Families arrive here with grandparents and young children in the same group. Long-term expats rent compounds by the month. Wellness travellers bookend spa days with thoughtful, unhurried meals.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF built its Sanur service around these rhythms. We do sunrise breakfasts before the beach walk, early family suppers that respect younger guests' bedtimes, Indonesian sharing tables for mixed-age groups, and celebration dinners that feel polished without feeling stiff. We source fresh produce from Sindhu Market and seafood from local traders — the same suppliers who stock Sanur's best restaurants.
            </p>
            <p className="mb-0 leading-relaxed">
              What consistently surprises our Sanur clients is how much better the food is at the villa table than at the restaurant down the street. There is no compromise on freshness, no wait, no noise, and no having to explain dietary requirements twice. Every chef on our Sanur team is Indonesian, experienced with multi-generational family groups, and trained to deliver fine-dining quality in an environment that genuinely feels like home.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Multi-generational family menu specialists in Sanur',
              'Sunrise breakfast service — arrive before you wake',
              'Sindhu Market sourcing for fresh daily ingredients',
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

      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Sanur</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Sanur Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Sanur team covers the full east-coast villa corridor — from the main beachfront at Sindhu to the quieter southern compounds at Mertasari and the design-led enclave at Batu Jimbar.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Sanur Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Send us your date, villa, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Sanur Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Sanur Private Chef FAQ</h2>
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
          <h2 className="font-playfair text-2xl mb-8 text-center">Explore More Bali Locations</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Ubud', path: '/locations/ubud', desc: 'Jungle villa dining, wellness retreats, Balinese cultural immersion' },
              { label: 'Private Chef Jimbaran', path: '/locations/jimbaran', desc: 'Seafood BBQs, fresh Kedonganan catch, sunset bay dinners' },
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
    </main>
  )
}
