import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import CityDeepDive from '@/components/CityDeepDive'
import { CITY_CONTENT } from '@/data/cityContent'

const SITE = 'https://mychef.id'
const WA = '628113803488'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Jimbaran. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Jimbaran?',
    a: 'Yes — myCHEF operates throughout Jimbaran Bay, Kedonganan, the Four Seasons estate zone, Ayana ridge villas, and Muaya Beach. We have built our Jimbaran service around seafood-forward menus and open-air terrace dining.',
  },
  {
    q: 'What makes Jimbaran the best area in Bali for seafood dining?',
    a: 'Jimbaran sits directly adjacent to Kedonganan fish market — one of the best wet markets on the island. We source lobster, whole snapper, and local prawns from the morning landing, often within hours of the catch coming ashore. Combined with our cliff and bay villa settings, the freshness and backdrop together are unmatched.',
  },
  {
    q: 'How much does a private chef cost in Jimbaran?',
    a: 'Seafood villa dinners in Jimbaran start at IDR 450K–750K per person for 2–12 guests. Live-fire bayfront BBQs range from IDR 500K–850K per person for 8–40 guests. Celebration and event menus range from IDR 600K–1.5M per person depending on complexity. All prices subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you do a bayfront or outdoor BBQ in Jimbaran?',
    a: 'Yes — bayfront and outdoor BBQs are one of our signature Jimbaran formats. Our chefs manage live-fire grilling of seafood, meats, and vegetables on your villa terrace or lawn, with full setup, service, and cleanup included. We design the menu around the freshest catch available that morning.',
  },
  {
    q: 'Do you cater for celebrations and special events in Jimbaran?',
    a: 'Absolutely. We regularly cater proposal dinners, anniversary celebrations, engagement parties, and arrival-night feasts across Jimbaran. Our team handles chefs, waitstaff, and event pacing — giving you a seamless evening without leaving your villa.',
  },
  {
    q: 'Are your Jimbaran chefs Indonesian?',
    a: "Yes — all myCHEF chefs are Indonesian professionals trained to international standards. They are deeply familiar with Balinese seafood traditions, Kedonganan market sourcing, and the sunset-dining culture that defines Jimbaran's hospitality.",
  },
]

const AREAS = [
  { name: 'Jimbaran Bay', note: 'The heart of Jimbaran — bay villas with direct beach proximity and a natural backdrop for seafood sunset dinners.' },
  { name: 'Kedonganan', note: 'Fish market territory. Our closest sourcing point for same-day fresh catch — lobster, snapper, and giant prawns.' },
  { name: 'Four Seasons Estates', note: 'Premium estate villas north of the bay. Polished service, tasting menus, and full fine-dining production.' },
  { name: 'Ayana Ridge', note: 'Elevated clifftop zone with Indian Ocean panoramas. Sunset dining pacing on request.' },
  { name: 'Muaya Beach', note: 'Quieter southern beach strip. Relaxed family dinners, BBQs, and arrival feasts for beachfront compounds.' },
  { name: 'South Jimbaran Cliffs', note: 'Dramatic access, secluded villas. Ultra-private dinners for couples and small groups.' },
]

const SERVICES = [
  {
    name: 'Seafood Villa Dinner',
    range: 'IDR 450K–750K / person',
    for: '2–12 guests',
    detail: "Multi-course plated dinners built around the morning's best catch from Kedonganan. Whole snapper, local prawns, lobster bisque, and Indonesian-inspired seafood courses served on your villa terrace.",
  },
  {
    name: 'Bayfront Seafood BBQ',
    range: 'IDR 500K–850K / person',
    for: '8–40 guests',
    detail: 'Live-fire grilling on your villa lawn or terrace. Lobster, whole fish, and shellfish sourced from the Jimbaran landing, cooked and served by our team. The closest thing to the famous beach fish restaurants — but completely private.',
  },
  {
    name: 'Celebration & Proposal Dinners',
    range: 'IDR 600K–1.5M / person',
    for: '2–30 guests',
    detail: "Sunset timed to your milestone moment. We coordinate the run sheet around your villa's view, pacing the arrival of courses as the horizon dims. Chefs, waitstaff, florals on request, and cleanup included.",
  },
  {
    name: 'Family Arrival Feast',
    range: 'IDR 400K–700K / person',
    for: '6–25 guests',
    detail: 'A generous welcome dinner for groups arriving from long flights. Indonesian sharing plates, grilled seafood, and warm hospitality — the first meal that sets the tone for the whole stay.',
  },
]

export default function JimbaranPage() {
  const canonical = `${SITE}/locations/jimbaran`

  const localBizJimbaran = {
    ...localBusinessSchema,
    name: 'myCHEF.id Jimbaran',
    description: 'Private chef, seafood villa dining, bayfront BBQ, and celebration catering in Jimbaran, Bali',
    areaServed: { '@type': 'Place', name: 'Jimbaran, Bali' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '460',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Jimbaran | Seafood Villa Dining & BBQ — myCHEF"
        description="Hire a private chef in Jimbaran for seafood villa dinners, bayfront BBQs & sunset celebrations. Same-day fresh catch, Indonesian chefs, Michelin standards. WhatsApp for quotes."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-jimbaran.webp"
        jsonLd={[
          localBizJimbaran,
          breadcrumbSchema('Private Chef Jimbaran', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema([...FAQS, ...CITY_CONTENT['jimbaran'].faqs].map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Jimbaran',
            description: 'Premium private chef, seafood villa dining, bayfront BBQ, and celebration event catering across Jimbaran Bay, Kedonganan, and the Four Seasons estate zone.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Jimbaran, Bali' },
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
            ratingCount: '241',
            reviewCount: '241',
          },
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-jimbaran.webp"
            alt="Jimbaran Bay villa terrace in Bali set for a private chef seafood dinner at sunset"
            width={1920} height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Jimbaran</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">Private Chef<br />in Jimbaran</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bali's seafood coast at its finest — bayfront BBQs, sunset celebration dinners, and fresh-catch tasting menus sourced from the Kedonganan fish landing. All without leaving your villa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Get a Jimbaran Quote
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Jimbaran's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Jimbaran</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Jimbaran is Bali's seafood coast — a stretch of bay villas and clifftop estates where the meal is inseparable from the setting. Guests who stay here already know the legend of Jimbaran's sunset fish restaurants. What myCHEF offers is everything those restaurants provide, and more: the same freshness, the same water view, but served at your own villa table, by a dedicated Indonesian chef, with zero crowds and perfect pacing.
            </p>
            <p className="mb-4 leading-relaxed">
              We source directly from Kedonganan fish market — Bali's most active seafood landing, minutes from the heart of Jimbaran. Lobster, whole red snapper, jumbo tiger prawns, and local shellfish are selected the morning of your dinner. Our chefs build menus around what arrived that day, which means every Jimbaran dinner is different and entirely seasonal. There are no frozen proteins on a myCHEF table.
            </p>
            <p className="mb-0 leading-relaxed">
              Whether you want an intimate tasting menu for two on a candlelit terrace, a live-fire bayfront BBQ for twenty guests, or a seamlessly paced proposal dinner as the sun drops below the bay, our Jimbaran team handles the logistics while you focus on the moment. Every chef on our team is Indonesian, HACCP-certified, and experienced with both Balinese coastal cuisine and European fine-dining technique.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Same-day seafood from Kedonganan fish market',
              'Bay and clifftop villa specialists in Jimbaran',
              'Sunset-timed dinner pacing on request',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Jimbaran</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Jimbaran Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Jimbaran team covers the full bay and clifftop zone — from the fish market at Kedonganan to the elevated estates south of the bay. We handle every villa type, from beach-flat access to dramatic cliff approaches.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Jimbaran Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Send us your date, villa, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.</p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]">
            <MessageCircle className="w-4 h-4" /> WhatsApp Jimbaran Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Jimbaran Private Chef FAQ</h2>
          <div className="space-y-4">
            {[...FAQS, ...CITY_CONTENT['jimbaran'].faqs].map((faq, i) => (
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
              { label: 'Private Chef Uluwatu', path: '/locations/uluwatu', desc: "Clifftop drama, Indian Ocean views, seafood BBQs at the edge" },
              { label: 'Private Chef Nusa Dua', path: '/locations/nusa-dua', desc: 'Resort villas, corporate dining, polished estate service' },
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
          <CityDeepDive slug="jimbaran" cityName="Jimbaran" />
</main>
  )
}
