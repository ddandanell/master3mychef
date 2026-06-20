import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'
const WA = '491635080236'
const WA_MSG = encodeURIComponent('Hi myCHEF, I want to book a private chef in Jakarta. Can you send me pricing?')

const FAQS = [
  {
    q: 'Does myCHEF operate in Jakarta?',
    a: 'Yes — myCHEF has expanded beyond Bali to serve Jakarta. We bring the same Michelin-trained culinary standards to private residences, corporate suites, and event spaces across Jakarta\'s premium neighbourhoods.',
  },
  {
    q: 'Which areas of Jakarta do you serve?',
    a: 'We serve all major Jakarta districts including Menteng, SCBD, Kemang, Pondok Indah, BSD, Sudirman, Kebayoran Baru, and Senopati. Contact us for coverage in your specific location.',
  },
  {
    q: 'How much does a private chef cost in Jakarta?',
    a: 'Private chef pricing in Jakarta follows the same structure as Bali: IDR 450K–800K per person for intimate villa dinners, IDR 600K–1.2M for corporate events, and IDR 1.5M–3M+ for weddings. All prices are subject to 11% government tax + 10% service charge.',
  },
  {
    q: 'How quickly can you arrange a chef in Jakarta?',
    a: 'For most events, we ask for at least 48 hours notice. For large-scale corporate events or weddings, 7–14 days is recommended to allow full menu planning and team coordination. Same-day bookings may be possible depending on availability.',
  },
  {
    q: 'Are your Jakarta chefs Indonesian?',
    a: 'Yes — all of our chefs are Indonesian professionals trained to international culinary standards. They are fluent in Indonesian and English, and are experienced in both traditional Indonesian cuisine and European fine dining.',
  },
  {
    q: 'Do you cater for corporate events in Jakarta?',
    a: 'Yes — corporate events are a primary focus in Jakarta. We have experience catering board dinners, executive lunches, team offsites, and large-scale corporate galas. We can provide full F&B service including qualified waitstaff and bar support.',
  },
]

const NEIGHBORHOODS = [
  { name: 'Menteng', note: 'Jakarta\'s diplomatic and heritage district. Discreet villa dining for embassies and private residences.' },
  { name: 'SCBD & Sudirman', note: 'Jakarta\'s central business district. Corporate event catering and executive dining.' },
  { name: 'Kemang', note: 'Expat-friendly suburb with villa properties and international dining expectations.' },
  { name: 'Pondok Indah', note: 'Premium residential area. Intimate private dinners and family celebrations.' },
  { name: 'Kebayoran Baru', note: 'Central south Jakarta. Private chef access for residences and boutique venues.' },
  { name: 'BSD & Serpong', note: 'New development corridor with modern villa estates. Full catering team available.' },
]

const SERVICES = [
  {
    name: 'Villa & Residence Dinners',
    range: 'IDR 450K–800K / person',
    for: '2–12 guests',
    detail: 'A dedicated chef cooks at your Jakarta home or villa — from a 4-course modern Indonesian dinner to a full tasting menu experience.',
  },
  {
    name: 'Corporate Events & Board Dinners',
    range: 'IDR 600K–1.5M / person',
    for: '10–100 guests',
    detail: 'Executive dining, team-building lunches, and formal board dinners delivered to your corporate venue or suite in SCBD or Sudirman.',
  },
  {
    name: 'Private Event Catering',
    range: 'IDR 600K–1.2M / person',
    for: '15–80 guests',
    detail: 'Birthday celebrations, engagement parties, and milestone events. Full team, full setup, full cleanup — you focus on your guests.',
  },
  {
    name: 'Jakarta Wedding Catering',
    range: 'IDR 1.5M–3M+ / person',
    for: '30–300 guests',
    detail: 'Multi-course wedding dinners with dedicated brigade, cocktail hour service, and complete event F&B production.',
  },
]

export default function JakartaPage() {
  const canonical = `${SITE}/locations/jakarta`

  const localBizJakarta = {
    ...localBusinessSchema,
    '@id': 'https://mychef.id/locations/jakarta',
    name: 'myCHEF.id Jakarta',
    description: 'Private chef services in Jakarta — villa dinners, corporate events, and household staffing.',
    url: 'https://mychef.id/locations/jakarta',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456,
    },
    areaServed: [
      { '@type': 'City', name: 'Jakarta' },
      { '@type': 'Place', name: 'Menteng' },
      { '@type': 'Place', name: 'Kemang' },
      { '@type': 'Place', name: 'SCBD' },
      { '@type': 'Place', name: 'Pondok Indah' },
    ],
    priceRange: 'IDR 1,500,000 – IDR 8,000,000',
    image: 'https://mychef.id/og-image.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '560',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Jakarta | Corporate & Villa Dining — myCHEF"
        description="Book a private chef in Jakarta for villa dinners, corporate events & weddings. IDR 450K/person. Indonesian chefs, Michelin standards. Request a quote on WhatsApp."
        canonical={canonical}
        ogImage="/generated/mychef-misc-bali-jakarta-skyline.webp"
        jsonLd={[
          localBizJakarta,
          breadcrumbSchema('Private Chef Jakarta', canonical, 'Locations', 'https://mychef.id/locations'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Chef Jakarta',
            description: 'Premium private chef, catering, and corporate dining services across Jakarta including Menteng, SCBD, Kemang, and Pondok Indah.',
            provider: { '@id': 'https://mychef.id/#business' },
            areaServed: { '@type': 'City', name: 'Jakarta', '@id': 'https://www.wikidata.org/wiki/Q3630' },
            url: canonical,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-misc-bali-jakarta-skyline.webp"
            alt="Jakarta city skyline at dusk — myCHEF private chef services in Indonesia's capital"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF · Jakarta</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Private Chef<br />in Jakarta
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Michelin-trained standards brought to Jakarta — villa dinners, corporate events, and private celebrations across Indonesia's capital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Jakarta Quote
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

      {/* Why myCHEF in Jakarta */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Why Choose Us</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">The myCHEF Standard in Jakarta</h2>
          <div className="prose prose-lg text-[#4A4745] max-w-none">
            <p className="mb-4 leading-relaxed">
              Jakarta is one of Southeast Asia's most demanding markets for private dining. With a population of 13 million and a growing community of executives, diplomats, and international families, the city expects the same standards you would find in Singapore or Dubai — but the private chef industry here remains fragmented and inconsistent.
            </p>
            <p className="mb-4 leading-relaxed">
              myCHEF brings a different model to Jakarta. Every chef on our team is Indonesian, deeply familiar with local ingredients and culinary traditions, and trained to international Michelin-standard protocols. We combine this with the operational infrastructure we have built across 12,000+ events in Bali — structured menus, vetted suppliers, professional service staff, and a 50% deposit booking system that protects both client and chef.
            </p>
            <p className="mb-0 leading-relaxed">
              Whether you are hosting a board dinner in SCBD, a family celebration in Pondok Indah, or a large-scale corporate gala, our Jakarta team delivers the same reliability and culinary quality our Bali clients have trusted since 2019.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'All-Indonesian chef team — trained to international standards',
              'Fluent in English and Bahasa Indonesia',
              'HACCP-certified kitchen practices',
              '50% deposit to confirm your date — balance 48h before event',
              'WhatsApp response within 2 hours (07:00–22:00 WIB)',
              'Custom menus for every dietary requirement at no extra cost',
              'Full service team: chefs, waitstaff, bartenders',
              'All ingredients sourced and included in quoted price',
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-12">Private Chef Services in Jakarta</h2>
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

      {/* Neighborhoods */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Coverage Area</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Jakarta Neighbourhoods We Serve</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            Our Jakarta team operates across all major residential and commercial districts. No travel surcharge within central Jakarta; remote areas may carry a logistics fee.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} className="flex items-start gap-3 border border-[#E8E6E3] rounded-xl p-4">
                <ChevronRight className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">Private Chef {n.name}</div>
                  <div className="text-[#8A8785] text-sm leading-snug">{n.note}</div>
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
          <h2 className="font-playfair text-3xl mb-4">Get Your Jakarta Quote in 2 Hours</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Send us your date, location, guest count, and budget via WhatsApp. We respond within 2 hours and send a full proposal within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all text-sm uppercase tracking-[2px]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Jakarta Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
          <h2 className="font-playfair text-3xl mb-10">Jakarta Private Chef FAQ</h2>
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
          <h2 className="font-playfair text-2xl mb-8 text-center">Also Explore Our Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef in Bali', path: '/fine-dining/private-chef-bali', desc: 'Our flagship Bali service — villa dining, events, weddings' },
              { label: 'Corporate Catering', path: '/catering/corporate', desc: 'Executive lunches, board dinners, team retreats' },
              { label: 'Pricing Guide', path: '/pricing', desc: 'Transparent starting prices for every service format' },
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
