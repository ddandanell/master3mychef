import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight, Wine, Users, Shield, Clock, Star, Award } from 'lucide-react'
import SeoHead, { breadcrumbSchema, serviceSchema, faqPageSchema, aggregateRatingSchema, howToSchema } from './SeoHead'
import { getPageMeta } from '@/data/page-meta'
import { PILLARS } from '@/data/siteArchitecture'
import FAQAccordion from './catering/FAQAccordion'
import LocationChips from './LocationChips'
import RelatedServices from '@/components/shared/RelatedServices'
import { IN_VILLA_SERVICE_RELATED } from '@/data/related-services'
import OptimizedImage from '@/components/OptimizedImage'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
const SITE = 'https://mychef.id'
const WA = '628113803488'

const SERVICE_TYPES = [
  {
    slug: 'waiters',
    label: 'Waiters & Servers',
    desc: 'Professional table service for villa dinners and events. Uniformed, English-speaking, and trained in fine dining service.',
    price: 'From IDR 250,000/hour',
    icon: Users,
  },
  {
    slug: 'butlers',
    label: 'Butlers',
    desc: 'Discreet, professional villa service for luxury estates. Anticipatory service, etiquette-trained, and detail-oriented.',
    price: 'From IDR 400,000/hour',
    icon: Award,
  },
  {
    slug: 'bartenders',
    label: 'Bartenders',
    desc: 'Cocktail preparation and bar service for villa events. Classic cocktails, creative mixology, and professional presentation.',
    price: 'From IDR 350,000/hour',
    icon: Wine,
  },
  {
    slug: 'mixology',
    label: 'Mixology Service',
    desc: 'Signature cocktail creation, menu design, and bar consultancy for special events and villa parties.',
    price: 'From IDR 500,000/hour',
    icon: Wine,
  },
  {
    slug: 'sommelier',
    label: 'Sommelier',
    desc: 'Wine pairing, selection, and service for fine dining experiences. Expert knowledge of Italian and international wines.',
    price: 'From IDR 450,000/hour',
    icon: Wine,
  },
  {
    slug: 'host-hostess',
    label: 'Host & Hostess',
    desc: 'Guest reception, seating coordination, and event flow management. The face of your event from arrival to departure.',
    price: 'From IDR 300,000/hour',
    icon: Users,
  },
]

const WHAT_INCLUDED = [
  'Uniformed, English-speaking staff',
  'Pre-event briefing for your occasion',
  'Per-shift pricing — no long-term contract',
  'All service tools and uniforms provided',
  'Same-day confirmation via WhatsApp',
  'Flexible team size from 1 to 20+',
  'Background-checked and certified',
  'Real-time kitchen coordination',
]

const SERVICE_EXPLAINERS = [
  {
    icon: Users,
    title: 'Waiters & Servers',
    body: 'For breakfasts, family-style lunches, plated dinners, and event floor service. They greet, pour, clear, reset, and keep the table moving.',
    detail: 'Best for private dinners, birthdays, and villa parties.',
  },
  {
    icon: Award,
    title: 'Butlers & Hosts',
    body: 'For guest arrival, poolside hosting, villa flow, and discreet front-of-house support. The role is calm, anticipatory, and detail-led.',
    detail: 'Best for luxury stays, executive hosting, and full-villa service.',
  },
  {
    icon: Wine,
    title: 'Bartenders & Sommeliers',
    body: 'For cocktail hours, sundowners, after-parties, and wine-led dinners. We match the right person to the tone of the event.',
    detail: 'Best for sunset drinks, weddings, and chef-led dinners.',
  },
]

const FAQS = [
  { q: 'How many staff do I need for my event?', a: 'For plated dinners, we recommend 1 waiter per 8–10 guests. For buffet service, 1 per 15 guests. For cocktail parties, 1 bartender per 25 guests. We will advise based on your event details.' },
  { q: 'Can I hire staff without booking catering?', a: 'Yes. Our in-villa service staff can be hired independently for events where you have your own catering or are hosting a self-catered gathering.' },
  { q: 'What do your staff wear?', a: 'All service staff wear professional uniforms — black and white for formal events, branded myCHEF attire for casual settings. We can adapt to your event dress code.' },
  { q: 'How far in advance should I book service staff?', a: '3+ days for small teams (1–4 staff). 2+ weeks for large events (10+ staff) or peak season. Last-minute bookings possible subject to availability.' },
  { q: 'Are your staff trained in wine service?', a: 'Our premium waiters and sommeliers are trained in wine service, including decanting, pouring, and basic pairing knowledge. For advanced wine pairing, book our sommelier service.' },
  { q: 'Do you provide bar equipment and glassware?', a: 'Basic bar tools are included with bartender bookings. Specialty glassware, ice, and garnishes can be arranged. Let us know your requirements when booking.' },
]

export default function InVillaServicePage() {
  const pillar = PILLARS['in-villa-service']
  const canonical = `${SITE}/in-villa-service`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to hire in-villa service staff.')}`

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('in-villa-service').title}
        description={getPageMeta('in-villa-service').description}
        canonical={getPageMeta('in-villa-service').canonical}
        ogImage={getPageMeta('in-villa-service').ogImage}
        jsonLd={[
          breadcrumbSchema('In-Villa Service', canonical),
          serviceSchema('In-Villa Service Staff', pillar.description, canonical),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'In-Villa Service Staff Bali',
            description: 'Professional waiters, butlers, bartenders, mixologists, and sommeliers for Bali villas. Per-shift hire with same-day availability, fully briefed and uniformed.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'myCHEF.id',
              url: 'https://mychef.id',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Bali, Indonesia',
            },
            serviceType: 'Villa Staffing Service',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '250000',
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: '250000',
                maxPrice: '1500000',
                priceCurrency: 'IDR',
              },
            },
          },
          aggregateRatingSchema(4.9, 350),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Hire In-Villa Service Staff in Bali',
            description: 'Book professional waiters, butlers, bartenders, and sommeliers for your Bali villa in 4 easy steps.',
            totalTime: 'PT10M',
            steps: [
              { name: 'Share your event details', text: 'Tell us your guest count, event type, villa location, and desired service style via WhatsApp.' },
              { name: 'Get matched staff', text: 'We recommend the right staffing mix and confirm availability within the hour.' },
              { name: 'Pre-event briefing', text: 'Staff receive a full briefing on your menu, timeline, dietary notes, and villa layout.' },
              { name: 'Enjoy polished service', text: 'Uniformed staff arrive early, run service smoothly, and leave your villa spotless.' },
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-staffing-bali-butler-service.webp"
            alt="Professional butler serving luxury villa dinner in Bali"
            width={1920}
            height={1080}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24 pt-32">
          <div className="max-w-[900px]">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
            <h1 className="font-playfair text-4xl md:text-6xl text-white leading-[1.1] mb-6">{pillar.h1}</h1>
            <p className="text-lg md:text-xl text-white/[80%] max-w-[640px] mb-8">Per-shift waiters, butlers, bartenders, mixologists, and sommeliers for Bali villas. From IDR 250,000/hour, briefed to your event and ready for dinners, parties, and full-service hosting.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Uniformed Staff', 'Same-Day Booking', 'English-Speaking', 'Background-Checked'].map((h) => (
                <span key={h} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                  <Check className="w-3.5 h-3.5 text-[#C5A028]" /> {h}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="in-villa-hero" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
                <MessageCircle className="w-4 h-4" /> Get Staffing Availability & Pricing in 1 Hour
              </a>              <Link to="/quote" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* Trust bar */}
      <section className="bg-[#0A0A0A] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: Star, text: '4.9 Rating (350+ Reviews)' },
            { icon: Users, text: '500+ Events Staffed' },
            { icon: Shield, text: 'Background-Checked Team' },
            { icon: Clock, text: 'Same-Day Response' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/[60%] text-sm">
              <Icon className="w-4 h-4 text-[#C5A028]" /> {text}
            </div>
          ))}
        </div>
      </section>

      {/* What In-Villa Service Means */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-10 md:gap-14 items-start">
            <div>
              <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">What In-Villa Service Means</p>
              <h2 className="font-playfair text-3xl md:text-5xl leading-[1.1] mb-6">Hotel-level front-of-house service, booked per shift for your villa.</h2>
              <p className="text-[#4A4745] text-base md:text-lg leading-relaxed mb-5">
                In-villa service means short-term hospitality staff for the moments when your villa needs more than food alone.
                We send waiters for plated dinners and breakfasts, butlers for discreet guest care, and bartenders or sommeliers for drinks-led hosting.
              </p>
              <p className="text-[#4A4745] text-base md:text-lg leading-relaxed mb-8">
                You tell us the guest count, timing, and tone. We tell you how many people you need, what each role costs,
                and which staffing mix keeps the service smooth without overbooking the team.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Per-shift pricing', 'Staffing ratios advised before booking', 'Same-day confirmation via WhatsApp'].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full bg-[#FAFAF8] border border-black/5 px-4 py-2 text-sm text-[#1A1A1A]">
                    <Check className="w-4 h-4 text-[#C5A028]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {SERVICE_EXPLAINERS.map(({ icon: Icon, title, body, detail }) => (
                <div key={title} className="rounded-2xl border border-black/5 bg-[#FAFAF8] p-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <h3 className="font-playfair text-2xl mb-3">{title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-3">{body}</p>
                  <p className="text-sm text-[#C5A028] font-medium">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Our Services</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-4">Choose the exact role you need</h2>
          <p className="text-[#4A4745] text-center max-w-2xl mx-auto mb-12">Each card links to a dedicated service page with role details, pricing, and direct WhatsApp booking.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_TYPES.map((service) => (
              <Link
                key={service.slug}
                to={`/in-villa-service/${service.slug}`}
                className="group bg-[#FAFAF8] rounded-2xl p-6 border border-black/5 hover:border-[#C5A028] hover:shadow-md transition-all"
              >
                <service.icon className="w-8 h-8 text-[#C5A028] mb-4" />
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C5A028] transition-colors">{service.label}</h3>
                <p className="text-sm text-[#4A4745] mb-3">{service.desc}</p>
                <p className="text-sm font-medium text-[#C5A028]">{service.price}</p>
                <ArrowRight className="w-4 h-4 mt-4 text-[#C5A028] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA: After service types */}
      <section className="py-16 md:py-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Not Sure What You Need?</p>
            <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-[#1A1A1A]">We Will Match the Right Staff to Your Event</h3>
            <p className="text-[#4A4745] max-w-xl mx-auto mb-6">
              Waiters for a plated dinner, butlers for a luxury stay, or bartenders for a cocktail party? Tell us your guest count and event type. We will recommend the right team and confirm availability within the hour.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="in-villa-mid-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
                <MessageCircle className="w-4 h-4" /> Get Staffing Availability & Pricing in 1 Hour
              </a>
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 border border-[#E8E6E3] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">What You Get</p>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Every Booking Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {WHAT_INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C5A028] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <OptimizedImage src="/generated/mychef-staffing-bali-staffing-table.webp" alt="Professional service staff setting table" className="w-full rounded-2xl shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Gallery</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">In-villa service across Bali</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/generated/mychef-invilla-hub-1.webp', alt: 'Balinese butler welcoming guests at a luxury Bali villa' },
              { src: '/generated/mychef-invilla-hub-2.webp', alt: 'Balinese waitstaff setting an elegant table at a Bali villa' },
              { src: '/generated/mychef-invilla-hub-3.webp', alt: 'Balinese bartender making cocktails at a Bali villa' },
              { src: '/generated/mychef-invilla-hub-4.webp', alt: 'Indonesian villa staff team at a luxury Bali villa' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERE Awards Section */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Award image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <OptimizedImage
              src="/generated/misc-trust-hosts-lg.webp"
              alt="Private villa dinner service in Bali — host attending to guests at a candlelit table"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-5">TRUSTED ACROSS BALI</p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Trusted for Private Villa Dining in Bali
            </h2>
            <div className="w-12 h-px bg-[#C5A028] mb-8" />
            <p className="text-white/70 leading-relaxed mb-8 text-base">
              A refined dining experience for villas, families, private events, and long-stay guests. Built around trusted chefs, elegant service, and consistent guest satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                data-source="in-villa-awards-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Get Staffing Availability & Pricing in 1 Hour
              </a>
              <Link
                to="/fine-dining"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                View Dining Options
              </Link>
            </div>
            <p className="text-white/55 text-sm">560+ villas served · 12,000+ guests · 4.9 average rating</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 md:py-32 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Learn More</p>
            <h2 className="font-playfair text-3xl md:text-5xl leading-[1.05] mb-4">Event planning & staffing insights</h2>
            <p className="text-[#4A4745] max-w-2xl mx-auto">From hiring the right staff to coordinating complex events, our guides cover everything about in-villa service.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link to="/blog/wedding-private-chef-bali-planning-guide" className="group rounded-[24px] border border-black/5 bg-white p-8 hover:border-[#C5A028] hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C5A028] transition-colors">Planning a Villa Wedding</h3>
              <p className="text-sm text-[#4A4745] mb-4">Coordinate service staff, timing, and guest flow for flawless multi-course wedding dinners.</p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">Read more →</span>
            </Link>
            <Link to="/blog/corporate-events-catering-bali-team-dining" className="group rounded-[24px] border border-black/5 bg-white p-8 hover:border-[#C5A028] hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C5A028] transition-colors">Corporate Event Setup</h3>
              <p className="text-sm text-[#4A4745] mb-4">How to set up professional catering and service teams for corporate dinners and team-building retreats.</p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">Read more →</span>
            </Link>
            <Link to="/blog/how-to-plan-villa-birthday-party-bali" className="group rounded-[24px] border border-black/5 bg-white p-8 hover:border-[#C5A028] hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C5A028] transition-colors">Birthday Party Hosting</h3>
              <p className="text-sm text-[#4A4745] mb-4">From staffing ratios to service flow, create a memorable birthday celebration with professional support.</p>
              <span className="inline-flex items-center gap-2 text-sm text-[#C5A028] group-hover:gap-3 transition-all">Read more →</span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices services={IN_VILLA_SERVICE_RELATED} title="Explore In-Villa Service Options" />

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Questions</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Frequently Asked</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* Location & Resource Links */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-6 text-center">In-Villa Service by Location</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Link
              to="/chefs"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#FAFAF8] border border-black/5 hover:border-[#C5A028] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">Meet our private chefs</span>
              <ArrowRight className="w-4 h-4 text-[#C5A028] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-3" />
            </Link>
            <Link
              to="/locations/canggu"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#FAFAF8] border border-black/5 hover:border-[#C5A028] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">In-villa chef Canggu</span>
              <ArrowRight className="w-4 h-4 text-[#C5A028] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-3" />
            </Link>
            <Link
              to="/locations/ubud"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#FAFAF8] border border-black/5 hover:border-[#C5A028] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">In-villa chef Ubud</span>
              <ArrowRight className="w-4 h-4 text-[#C5A028] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-3" />
            </Link>
            <Link
              to="/pricing"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#FAFAF8] border border-black/5 hover:border-[#C5A028] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">In-villa chef pricing</span>
              <ArrowRight className="w-4 h-4 text-[#C5A028] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-3" />
            </Link>
          </div>
          <div className="text-center">
            <Link to="/blog/how-to-hire-private-chef" className="text-[#C5A028] hover:underline font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Complete hiring guide: how to hire a private chef in Bali →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">Ready to Hire Staff?</h2>
          <p className="text-white/[60%] mb-8">Message us on WhatsApp. We reply within the hour with staffing ratios, availability, and clear per-shift pricing before you book.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="in-villa-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
              <MessageCircle className="w-4 h-4" /> Get Staffing Availability & Pricing in 1 Hour
            </a>
            <Link to="/quote" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <LocationChips
        title="Service Staff Across Bali"
        subtitle="Waiters in Seminyak. Bartenders in Canggu. Butlers in Uluwatu. We know every villa, every event space, every service standard."
      />
      <StickyMobileCTA
        pageSource="in-villa-service"
        serviceType="in-villa-service"
        label="Hire Villa Staff via WhatsApp"
        serviceName="in-villa service staff in Bali"
        intent="availability and pricing"
      />
    </div>
  )
}
