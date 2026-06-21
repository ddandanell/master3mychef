import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'
const WA = '491635080236'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Uluwatu. Can you send me pricing?')

const FAQS = [
  {
    q: 'Do you provide private chef services in Uluwatu?',
    a: 'Yes — myCHEF operates throughout Uluwatu, Bingin, Padang-Padang, Pecatu, and Ungasan. We have experience with the unique access logistics of cliff-facing villas and work with the wind and sunset conditions specific to the area.',
  },
  {
    q: 'What makes Uluwatu dining different from other Bali areas?',
    a: 'Uluwatu villas are built for drama — clifftop terraces, open-air dining rooms, and unobstructed Indian Ocean views. We plan every event around this backdrop, timing courses to sunset, managing wind exposure for open-fire cooking, and sourcing directly from the Bingin and Padang-Padang fish landings for maximum freshness.',
  },
  {
    q: 'How much does a private chef cost in Uluwatu?',
    a: 'Private chef pricing in Uluwatu starts at IDR 450K–750K per person for intimate villa dinners (2–10 guests). Wedding rehearsal dinners and event catering typically range from IDR 600K–1.5M per person depending on menu, staffing, and guest count. All prices are subject to 11% tax + 10% service charge.',
  },
  {
    q: 'Can you cater weddings and rehearsal dinners in Uluwatu?',
    a: 'Yes — wedding and event catering is a primary service in Uluwatu. We handle rehearsal dinners, post-wedding brunches, and intimate villa ceremonies. Our team coordinates with villa managers and wedding planners, and we supply chefs, waitstaff, and bartenders for a seamless event.',
  },
  {
    q: 'Do you do seafood BBQs in Uluwatu?',
    a: 'Absolutely. Our clifftop seafood BBQ is one of our most requested Uluwatu experiences — live-fire grilling of lobster, local snapper, and whole prawns, sourced from the Bingin and Padang-Padang fish landings on the day of your event. We manage the setup, fire, and cleanup on your terrace.',
  },
  {
    q: 'Are your Uluwatu chefs Indonesian?',
    a: 'Yes — all myCHEF chefs are Indonesian professionals trained to international culinary standards. They are deeply familiar with local Balinese ingredients, surf-town culture, and the hospitality expectations of Uluwatu\'s international villa guests.',
  },
]

const AREAS = [
  { name: 'Uluwatu Clifftops', note: 'The dramatic edge. Clifftop villas with Indian Ocean panoramas — ideal for sunset tasting menus.' },
  { name: 'Bingin', note: 'Intimate and local. Smaller villas close to the surf break. Seafood BBQs and casual fine dining.' },
  { name: 'Padang-Padang', note: 'Boutique enclave with direct fish landing access. Our freshest catch comes from here.' },
  { name: 'Pecatu & Ungasan', note: 'Larger estate properties. Full catering brigade and villa-scale events.' },
  { name: 'Balangan', note: 'Quieter white-sand approach. Private dinners for couples and small family groups.' },
  { name: 'Nyang Nyang', note: 'Remote clifftop. Exclusive access for ultra-private dining experiences.' },
]

const SERVICES = [
  {
    name: 'Clifftop Villa Dining',
    range: 'IDR 450K–750K / person',
    for: '2–12 guests',
    detail: 'Multi-course plated dinners designed for Uluwatu\'s open-air terraces. Sunset timing included — first course as the sun drops, mains under the stars. Seafood-forward menus available.',
  },
  {
    name: 'Seafood BBQ Feast',
    range: 'IDR 550K–900K / person',
    for: '8–40 guests',
    detail: 'Live-fire seafood BBQ using lobster, whole snapper, and jumbo prawns sourced from local landings. Our chefs manage the fire, the timing, and the cleanup. No restaurants can match this freshness.',
  },
  {
    name: 'Wedding & Rehearsal Dinners',
    range: 'IDR 700K–1.8M / person',
    for: '20–150 guests',
    detail: 'Rehearsal dinners, post-ceremony brunches, and intimate villa weddings with full F&B production — chefs, waitstaff, bar service, linen, and full cleanup included.',
  },
  {
    name: 'Surf Retreat Catering',
    range: 'IDR 400K–700K / person',
    for: '6–30 guests',
    detail: 'Multi-day catering packages for surf retreats, wellness groups, and yoga retreat guests. Three meals a day, dietary flexibility, and a menu that fuels active days in the water.',
  },
]

export default function UluwatuPage() {
  const canonical = `${SITE}/locations/uluwatu`

  const localBizUluwatu = {
    ...localBusinessSchema,
    name: 'myCHEF.id Uluwatu',
    description: 'Private chef, clifftop villa dining, seafood BBQ, and wedding catering in Uluwatu, Bali',
    areaServed: {
      '@type': 'Place',
      name: 'Uluwatu, Bali',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '580',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Uluwatu | Seafood BBQ & Wedding Catering — myCHEF"
        description="Book a private chef in Uluwatu for clifftop villa dinners, seafood BBQs & weddings. Indonesian chefs, Indian Ocean views, Michelin standards. Request a quote."
        canonical={canonical}
        ogImage="/generated/mychef-location-bali-city-uluwatu.webp"
        jsonLd={[
          localBizUluwatu,
          breadcrumbSchema('Private Chef Uluwatu', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Uluwatu',
            description: 'Premium private chef, clifftop villa dining, seafood BBQ, and wedding catering across Uluwatu, Bingin, Padang-Padang, Pecatu, and Ungasan.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'Place', name: 'Uluwatu, Bali' },
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
            ratingCount: '198',
            reviewCount: '198',
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-city-uluwatu.webp"
            alt="Clifftop villa terrace in Uluwatu, Bali styled for a sunset private chef dinner overlooking the Indian Ocean"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Uluwatu</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Uluwatu
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Clifftop villa dining with the Indian Ocean as your backdrop. Seafood BBQs, sunset tasting menus, and wedding catering across Uluwatu's most dramatic estates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get an Uluwatu Quote
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

      {/* Why myCHEF in Uluwatu */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Uluwatu's Private Chef Specialists</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Uluwatu</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Uluwatu is Bali's most dramatic address — sheer limestone cliffs, world-class surf breaks, and private estates perched at the edge of the Indian Ocean. The villas here are built for the view, with sweeping open-air terraces and outdoor dining rooms that demand a culinary experience worthy of the setting. Discover what <Link to="/fine-dining" className="text-[#C5A028] hover:underline font-medium">cliffside fine dining</Link> looks like with a private chef.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF has operated in Uluwatu since our founding, building deep knowledge of cliff-facing property logistics, local supplier networks, and the high expectations of the international guests who stay here. We source seafood directly from the Bingin and Padang-Padang fish landings — often within hours of the catch arriving. Our menus are designed around Uluwatu's wind patterns and sun timing, so your sunset course lands precisely as the horizon turns gold.
            </p>
            <p className="mb-0 leading-relaxed">
              Every chef on our Uluwatu team is Indonesian, fluent in English, and experienced in both traditional Balinese cuisine and European fine dining techniques. Whether you are hosting an intimate dinner for two, a cliff-side seafood BBQ for twenty, or <Link to="/events" className="text-[#C5A028] hover:underline font-medium">Uluwatu villa weddings and events</Link> for eighty, we bring Michelin-level execution to your villa terrace. See <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">our pricing guide</Link> for a full overview.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Clifftop villa specialists — experienced with open-air cooking',
              'Direct access to Bingin & Padang-Padang fish landings',
              'Sunset-timed course pacing on request',
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

      {/* Services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Uluwatu</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Uluwatu Areas We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Uluwatu team covers the entire southern Bukit Peninsula. From the iconic clifftops to the quieter white-sand coves, we handle the logistics of remote and cliff-access properties.
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Uluwatu Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, villa, guest count, and any dietary requirements via WhatsApp. We respond within 2 hours and send a full menu proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Uluwatu Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Uluwatu Private Chef FAQ</h2>
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

      {/* Guides & Resources */}
      <section className="py-16 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Guides &amp; Resources</p>
          <h2 className="font-playfair text-2xl mb-8">Helpful reads for Uluwatu guests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'How to hire a private chef in Bali', path: '/blog/how-to-hire-private-chef', desc: 'Complete step-by-step hiring guide — vetting, pricing, what to expect' },
              { label: 'Chef hiring & credentials guide', path: '/blog/chef-hiring-guide', desc: 'What qualifications to look for and red flags to avoid' },
              { label: 'Uluwatu villa weddings & events', path: '/events', desc: 'Rehearsal dinners, cliff-side ceremonies, and celebration catering' },
              { label: 'Private chef pricing', path: '/pricing', desc: 'Transparent starting prices for every Uluwatu service format' },
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
              { label: 'Private Chef Seminyak', path: '/locations/seminyak', desc: 'Beach clubs, luxury villas, Bali\'s most vibrant dining scene' },
              { label: 'Private Chef Canggu', path: '/locations/canggu', desc: 'Surf culture, creative menus, digital nomad communities' },
              { label: 'Private Chef Ubud', path: '/locations/ubud', desc: 'Rice terraces, wellness retreats, Balinese cultural immersion' },
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
