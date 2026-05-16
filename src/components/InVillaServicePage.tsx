import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight, Wine, Users, Shield, Clock, Star, Award } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, serviceSchema, faqPageSchema, aggregateRatingSchema } from './SeoHead'
import { getPageMeta } from '@/data/page-meta'
import { PILLARS } from '../data/siteArchitecture'
import FAQAccordion from './catering/FAQAccordion'
import LocationChips from './LocationChips'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

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
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('in-villa-service').title}
        description={getPageMeta('in-villa-service').description}
        canonical={getPageMeta('in-villa-service').canonical}
        ogImage={getPageMeta('in-villa-service').ogImage}
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('In-Villa Service', canonical),
          serviceSchema('In-Villa Service Staff', pillar.description, canonical),
          aggregateRatingSchema(4.9, 350),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/butler-service.webp"
            alt="Professional butler serving luxury villa dinner in Bali"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
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
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="in-villa-hero" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
                <MessageCircle className="w-4 h-4" /> Hire Staff Now
              </a>              <Link to="/quote" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <img src="/generated/staffing-table.webp" alt="Professional service staff setting table" className="w-full rounded-2xl shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Questions</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Frequently Asked</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">Ready to Hire Staff?</h2>
          <p className="text-white/[60%] mb-8">Message us on WhatsApp. We reply within the hour with staffing ratios, availability, and clear per-shift pricing before you book.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="in-villa-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
              <MessageCircle className="w-4 h-4" /> Hire Staff Now
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
    </main>
  )
}
