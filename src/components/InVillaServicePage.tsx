import { Link } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight, Wine, Users, Shield, Clock, Star, Award } from 'lucide-react'
import SeoHead, { faqPageSchema } from './SeoHead'
import { getPageMeta } from '@/data/page-meta'
import { PILLARS } from '@/data/siteArchitecture'
import FAQAccordion from './catering/FAQAccordion'
import LocationChips from './LocationChips'
import RelatedServices from '@/components/shared/RelatedServices'
import { IN_VILLA_SERVICE_RELATED } from '@/data/related-services'
import OptimizedImage from '@/components/OptimizedImage'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { ArticleContentSection } from '@/components/shared'
const SITE = 'https://mychef.id'
const WA = '6289674072020'

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
    price: 'From IDR 1,200,000/day',
    icon: Award,
  },
  {
    slug: 'bartenders',
    label: 'Cocktail & Bartender Service',
    desc: 'Complete mobile cocktail packages — BYO, free flow or premium. Team, four cocktails, glassware, ice, setup and cleanup.',
    price: 'From IDR 500,000++ / guest',
    icon: Wine,
  },
  {
    slug: 'mixology',
    label: 'Mixology Service',
    desc: 'Custom cocktail design, Bali-inspired signatures and interactive craft. Full free-flow packages available separately.',
    price: 'Custom quote · packages from IDR 500K++/guest',
    icon: Wine,
  },
  {
    slug: 'sommelier',
    label: 'Sommelier',
    desc: 'Wine pairing, selection, and service for fine dining experiences. Expert knowledge of Italian and international wines.',
    price: 'From IDR 1,200,000/dinner',
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
  {
    q: 'How much does it cost to hire villa service staff in Bali?',
    a: 'Waiters from <strong>IDR 250,000/hour</strong>, hosts from IDR 300,000/hour (typical 3-hour minimums). Complete cocktail service packages from <strong>IDR 500,000++ per guest</strong> (not hourly bartender hire). Butlers from IDR 1,200,000/day, sommelier from IDR 1,200,000/dinner. Mixology craft sessions are custom quote. Rates ++ (11% tax + 10% service). Pair with food via <a href="/catering">catering</a> or <a href="/private-chef-bali">private chef</a>.',
  },
  {
    q: 'Is there a minimum booking for in-villa staff?',
    a: 'Hourly roles carry a 3-hour minimum; waiter bookings start at two waiters for proper service flow. Butler, sommelier and mixology are priced per day, dinner or session.',
  },
  {
    q: 'Can I hire staff without booking catering?',
    a: 'Yes. Our waiters, bartenders and butlers regularly support self-catered villas, other caterers, and BYO food nights. Food is optional — service quality is not.',
  },
  {
    q: 'What do staff wear and bring to a Bali villa?',
    a: 'Professional uniforms matched to your formality, plus role tools — bar kits for bartenders, service gear for waiters. Specialty glassware, ice and garnishes are arranged at briefing. Tell us dress code (black tie, tropical, resort casual).',
  },
  {
    q: 'Are your villa staff vetted and supervised?',
    a: 'Yes. Staff are background-checked, employed and supervised by myCHEF — not random freelancers from a group chat. If someone cannot make it, our replacement-or-refund guarantee protects your evening. <a href="/why-mychef">Why myCHEF →</a>',
  },
  {
    q: 'What is the cancellation policy for staff hire?',
    a: 'Full refund 14+ days before service, 50% at 7–13 days, non-refundable under 7 days; deposit follows the same tiers. <a href="/cancellation">Cancellation policy →</a>',
  },
  {
    q: 'Which areas of Bali do you cover for in-villa service?',
    a: 'Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa, Pererenan and more. Remote areas may carry a modest travel fee, always quoted upfront. <a href="/locations">Locations →</a>',
  },
  {
    q: 'How far ahead should I book waiters or bartenders?',
    a: '3+ days for small teams; 2+ weeks for 10+ staff, peak season or multi-role events. Last-minute coverage is frequently possible — message WhatsApp with date and headcount.',
  },
  {
    q: 'How many waiters do I need for my villa dinner?',
    a: 'Start at <strong>one waiter per 10 guests</strong> for plated or formal service; buffet and BBQ can run leaner. We recommend the ratio on your quote once we know service style and whether kids are seated separately.',
  },
  {
    q: 'Can you provide a private bartender for a villa party in Bali?',
    a: 'Yes — complete cocktail packages from IDR 500,000++ per guest (BYO / free flow / premium). Details: <a href="/in-villa-service/bartenders">luxury cocktail &amp; bartender service</a>. Venue operators: <a href="/bar-services/">bar services (B2B)</a>.',
  },
  {
    q: 'Do you offer butler service for luxury villa stays?',
    a: 'Yes — day butlers for guest hosting, wine service and seamless villa hospitality. See <a href="/in-villa-service/butlers">butlers</a> and daily rate context on <a href="/butler-service-bali-daily-rate">butler service Bali</a>.',
  },
  {
    q: 'Can staff work alongside our own villa team?',
    a: 'Yes. We brief with your villa manager so roles do not collide — myCHEF staff handle guest-facing service while housekeepers keep rooms and common areas. Share SOPs when you book.',
  },
  {
    q: 'Is alcohol included when I hire a bartender?',
    a: 'No. Spirits, wine, beer, mixers and ice are usually client-supplied or sourced at cost. The hire covers the professional, tools and service. Confirm ice, glassware and garnish plan on the briefing call.',
  },
  {
    q: 'Can you staff a wedding or large event, not just a dinner?',
    a: 'Yes — scaled FOH teams for weddings, corporate dinners and villa parties. For full food + staff production start at <a href="/events">events</a> or <a href="/events/weddings">wedding catering</a>.',
  },
  {
    q: 'What if a staff member cannot arrive on the day?',
    a: 'We send a replacement of equivalent role or refund that role. You are not left mid-service without cover — that guarantee is why operators book supervised teams rather than ad-hoc freelancers.',
  },
  {
    q: 'Do you provide long-term villa staff placements?',
    a: 'Day-rate and event staffing is this page. For live-in chefs, managers and permanent teams use <a href="/staffing">staffing</a> and <a href="/staffing/live-in-chef">live-in chef</a>.',
  },
  {
    q: 'Can I combine private chef and waiters for one evening?',
    a: 'Yes — the most common luxury setup in Bali villas. Book the chef on <a href="/private-chef-bali">private chef</a> or a <a href="/fine-dining">fine dining</a> menu, then add waiters/bartender here so service matches the kitchen.',
  },
  {
    q: 'What languages do your service staff speak?',
    a: 'English-capable service is standard for guest-facing roles; Bahasa Indonesia is native for most of the team. Flag any other language needs early so we match the right people.',
  },
  {
    q: 'How do I book in-villa service staff?',
    a: 'WhatsApp date, villa area, guest count, roles needed and service style. We confirm availability, headcount and the all-in total. 50% deposit locks the team. Or <a href="/contact">contact us</a>.',
  },
  {
    q: 'Do you clean the service areas after the event?',
    a: 'Service staff break down stations, clear tables and leave guest areas tidy as part of the shift. Full kitchen deep-clean after cooking is included when you also book myCHEF chefs or catering — confirm scope on the quote.',
  },
]

export default function InVillaServicePage() {
  const pillar = PILLARS['in-villa-service']
  const canonical = `${SITE}/in-villa-service`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to hire in-villa service staff.')}`

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'In-Villa Service Staff Bali',
    serviceType: 'Villa service staff hire',
    provider: {
      '@type': 'Organization',
      name: 'myCHEF',
      url: 'https://mychef.id',
      telephone: '+62 896-7407-2020',
      email: 'bali@mychef.id',
    },
    areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Berawa', 'Pererenan', 'Bali'],
    description: 'Uniformed, English-speaking villa service staff in Bali — waiters, butlers, sommeliers and hosts from IDR 250,000/hour; complete cocktail packages from IDR 500,000++ per guest.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '250000',
      offerCount: '6',
    },
    url: canonical,
  }

  const faqJsonLd = faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })))

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('in-villa-service').title}
        description={getPageMeta('in-villa-service').description}
        canonical={getPageMeta('in-villa-service').canonical}
        ogImage={getPageMeta('in-villa-service').ogImage}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />

      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-staffing-bali-butler-service.webp"
            alt="Professional butler serving a luxury villa dinner in Bali by myCHEF"
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
            <p className="text-lg md:text-xl text-white/[80%] max-w-[640px] mb-8">Waiters, butlers, mixologists, sommeliers and event hosts for Bali villas — booked by the hour, the shift or the day. Uniformed, English-speaking, background-checked, and briefed to your event before they arrive. Waiters and hosts from IDR 250,000 per hour; bartenders from IDR 350,000 per hour.</p>
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
            { icon: Star, text: 'Guest-Loved Service' },
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
                A beautiful villa and a great menu are only half of a memorable evening. In-villa service is the other half: professional front-of-house staff, hired for exactly as long as you need them — one dinner, one poolside party, one wedding weekend, or every day of a two-week stay.
              </p>
              <p className="text-[#4A4745] text-base md:text-lg leading-relaxed mb-8">
                You tell us the guest count, occasion and tone. We tell you how many staff you need, which roles matter, and what it costs — confirmed on WhatsApp within the hour. No long-term contracts, no employment admin on your side. (Need permanent staff for a villa you own or manage? See our <Link to="/staffing/villa-staff" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">long-term villa staff placement</Link> service.) Staff can also be hired <strong>without catering</strong> — for self-catered gatherings or to support another caterer.
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
              <OptimizedImage src="/generated/mychef-staffing-bali-staffing-table.webp" alt="Professional myCHEF service staff setting a dining table in a Bali villa" className="w-full rounded-2xl shadow-xl" loading="lazy" />
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
            <p className="text-white/55 text-sm">560+ events served · 12,000+ guests · 500+ villa bookings</p>
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
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
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
              <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">Full pricing guide</span>
              <ArrowRight className="w-4 h-4 text-[#C5A028] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-3" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <Link to="/catering" className="text-[#C5A028] hover:underline font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Pair your staff with villa catering →
            </Link>
            <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Full pricing guide →
            </Link>
            <Link to="/bar-services/temporary-bartender-staffing/" className="text-[#C5A028] hover:underline font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Temporary bar staffing for venues →
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
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
