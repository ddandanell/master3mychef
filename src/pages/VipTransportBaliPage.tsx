import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Car, Bus, Ship, UtensilsCrossed, Phone, Mail, Clock, MapPin,
} from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, detailedServiceSchema, faqPageSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'VIP transport in Bali', intent: 'a tailored quotation' })
const SITE = 'https://mychef.id'

const CAR_POINTS = [
  'Premium SUVs, luxury sedans and executive vehicles suited to Bali’s terrain — from Seminyak’s streets to the Bukit Peninsula cliffs.',
  'A professional, English-speaking driver who knows the island’s roads and villa locations, with every booking.',
  'Door-to-door service, chilled refreshments and flexible scheduling — your journey is never an afterthought.',
  'Perfect for airport collections, fine dining evenings and executive meetings.',
]

const BUS_POINTS = [
  'Bali minibus hire for reunions, retreats, wedding guest transport Bali and corporate roadshows.',
  'Every vehicle air-conditioned, fully insured, and driven by a uniformed, English-speaking chauffeur.',
  'Multi-villa pickups, timed shuttles and full-day charters, coordinated for you.',
  'A dedicated transport manager for large events — no guest left waiting.',
]

const YACHT_POINTS = [
  'Sunset cruises, snorkelling excursions and inter-island transfers.',
  'Luxury yacht charters departing Benoa Harbour, with embarkation times coordinated for you.',
  'Bali landing boat service for a seamless Nusa Penida transfer to Nusa Lembongan.',
  'Onboard catering and service staff arranged — your party can focus on the horizon.',
]

const LOGISTICS_POINTS = [
  'Your vehicle can arrive stocked with welcome cocktails or canapés.',
  'Wedding guest transport Bali shuttles synchronised with reception timelines.',
  'Airport collections, daily transfers and dining coordinated under one plan for retreats.',
  'One WhatsApp thread. One team. Zero stress.',
]

const AREAS = ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Bukit Peninsula', 'Nusa Penida', 'Nusa Lembongan']

const FAQS = [
  { q: 'Which areas of Bali do you cover?', a: 'We provide VIP transport Bali across Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur, and the Bukit Peninsula. We arrange inter-island transfers to Nusa Penida and Nusa Lembongan via landing boat.' },
  { q: 'How far in advance should I book?', a: 'For luxury car hire Bali, 48–72 hours is usually sufficient. For weddings, events, and Bali yacht charter, we recommend 2–3 weeks. Last-minute requests are often possible — message us on WhatsApp.' },
  { q: 'What is your cancellation policy?', a: 'Cancellations more than 48 hours before service receive a full refund. Cancellations within 24–48 hours incur a 50% charge. Same-day cancellations are charged in full. Yacht and landing boat charters require 72 hours’ notice.' },
  { q: 'What group sizes can you accommodate?', a: 'Our car fleet serves up to six guests. Minibuses accommodate 8–16, and full-size buses up to 40. For larger groups, we deploy multiple vehicles with a dedicated coordinator. Yacht capacity ranges from 6-guest cruisers to 30-guest party boats.' },
  { q: 'Is there space for luggage?', a: 'Yes. Our SUVs and minibuses offer generous luggage capacity, ideal for airport collections. For equipment or decorator items, supplementary vehicles are available on request.' },
  { q: 'Do you provide child seats?', a: 'Absolutely. Child and infant safety seats are available at no extra charge. Please specify your child’s age and weight when booking so we install the correct seat before arrival.' },
  { q: 'What is the maximum yacht capacity?', a: 'Our Bali yacht charter fleet ranges from 6-berth cruisers to 30-guest vessels. For larger celebrations, we arrange a flotilla. Landing boats for Nusa Penida transfer typically accommodate up to 40 passengers per crossing.' },
]

export default function VipTransportBaliPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.transport-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.transport-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="VIP Transport Bali | Luxury Cars & Yachts — myCHEF"
        description="VIP transport in Bali: luxury car hire, minibuses, yacht charters & event logistics with English-speaking drivers. Enquire via WhatsApp."
        canonical={`${SITE}/vip-transport-bali`}
        ogImage={`${SITE}/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp`}
        jsonLd={[
          detailedServiceSchema('VIP Transport Bali', 'myCHEF.id provides VIP transport in Bali: luxury car hire, minibuses and buses, yacht charters and landing boats, plus integrated catering and event logistics — with English-speaking drivers and coordination with our culinary teams.', `${SITE}/vip-transport-bali`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('VIP Transport Bali', `${SITE}/vip-transport-bali`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp"
            alt="Uniformed myCHEF chauffeur opening the door of a black luxury VIP van at a Bali villa entrance"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'VIP Transport' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Your Journey. Our Detail.
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            VIP Transport Bali — Luxury Cars, Yachts & Private Transfers
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            From airport arrival to island departure, every kilometre of your Bali experience is as considered as the cuisine on your table. English-speaking drivers, immaculate vehicles and seamless coordination with our catering teams come as standard.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="vip-transport-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Arrange Your Transfer
            </a>
            <Link to="/villa-event-packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              Bundle with a Villa Package
            </Link>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Tailored quotations · Replies within 1 hour
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white transport-content transport-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Private Transfer Bali
          </p>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            One team for the road, the water and the table
          </h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Our private transfer Bali fleet — luxury vehicles and yachts — moves guests, wedding parties and corporate groups with the same precision we bring to your villa. Whether you need luxury car hire Bali for dinner in Uluwatu or a fleet for a 200-guest wedding, we handle the logistics so you focus on the moment.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Every journey is quoted around your route, your schedule and your group — tailored proposals rather than fixed rates, with the same care we bring to every event we cater.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] transport-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                <Car className="inline w-4 h-4 mr-2 -mt-0.5" />The Fleet
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                VIP Car Fleet — Luxury Car Hire Bali
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Our executive fleet features premium SUVs, luxury sedans and executive vehicles suited to Bali’s terrain. Every VIP transport Bali booking is part of the experience — never an afterthought.
              </p>
              <div className="space-y-3">
                {CAR_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-vip-transport-jimbaran-sunset-bali-landscape.webp" alt="Guests arriving for a sunset dinner overlooking Jimbaran Bay, Bali" width={1536} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white transport-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-vip-transport-minibus-driver-bali-landscape.webp" alt="Uniformed myCHEF driver beside a white air-conditioned minibus with open sliding door at a Bali villa" width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                <Bus className="inline w-4 h-4 mr-2 -mt-0.5" />Groups & Events
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Minibuses & Buses — Bali Minibus Hire
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                When your group is larger than a car but still deserves premium service, our minibuses and coaches deliver. From intimate minibuses for eight to full-size buses for forty — and multiple vehicles with a dedicated coordinator beyond that.
              </p>
              <div className="space-y-3">
                {BUS_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] transport-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                <Ship className="inline w-4 h-4 mr-2 -mt-0.5" />On the Water
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Yachts & Landing Boats — Bali Yacht Charter
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Some of Bali’s finest moments happen on the water. Our Bali yacht charter and landing boat services open up sunset cruises, snorkelling excursions, and inter-island transfers — extending the myCHEF experience beyond the shore.
              </p>
              <div className="space-y-3">
                {YACHT_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-vip-transport-yacht-deck-bali-landscape.webp" alt="Champagne and canapés on the deck of a myCHEF charter yacht off the Nusa Penida cliffs, Bali" width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white transport-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                <UtensilsCrossed className="inline w-4 h-4 mr-2 -mt-0.5" />One Timeline
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Integrated Catering & Event Logistics
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Transport is the first and last impression of your event. Our logistics team aligns every arrival with the culinary schedule — and for full villa stays, our <Link to="/villa-event-packages" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">Bali villa event packages</Link> bundle transport together with your chef, staffing and bar service under one plan.
              </p>
              <div className="space-y-3">
                {LOGISTICS_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-6 md:p-8">
              <h3 className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Where We Operate</h3>
              <p className="text-[#4A4745] leading-relaxed text-sm mb-5">
                VIP transport across Bali’s principal regions, with inter-island transfers to Nusa Penida and Nusa Lembongan via landing boat.
              </p>
              <div className="flex flex-wrap gap-2">
                {AREAS.map((area) => (
                  <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-xs text-[#4A4745]">
                    <MapPin className="w-3 h-3 text-[#C5A028]" />{area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] transport-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="VIP Transport FAQ" subtitle="Everything you need to know about booking luxury transport in Bali with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      {/* ═══════ EXPLORE MORE ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Complete the Experience</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Villa Event Packages', href: '/villa-event-packages', desc: 'The all-inclusive villa experience.' },
              { label: 'Villa Catering', href: '/catering', desc: 'BBQ, buffet & plated catering.' },
              { label: 'Villa Weddings', href: '/events/weddings', desc: 'Ceremony & reception catering.' },
              { label: 'In-Villa Staff', href: '/in-villa-service', desc: 'Waiters, butlers & bartenders.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA / CONTACT ═══════ */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] transport-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Your Transport with Catering
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to move through Bali with the same ease you dine?
          </h2>
          <p className="text-white/[70%] leading-relaxed mb-10 max-w-2xl mx-auto">
            Message us on WhatsApp to arrange your private transfer Bali, luxury car hire Bali, or Bali yacht charter — and ask how we can bundle it with private chef dining or event catering. Every transfer is quoted around your route and schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="vip-transport-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp — Replies within 1 Hour
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> bali@mychef.id
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-left mb-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MessageCircle className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">WhatsApp</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-white/[65%] text-sm hover:text-white transition-colors">Message us now — replies within 1 hour</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Phone</p>
              <a href="tel:+6289674072020" className="text-white/[65%] text-sm hover:text-white transition-colors">+62 896 7407 2020</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Clock className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Office Hours</p>
              <p className="text-white/[65%] text-sm">08:00 – 22:00 WITA</p>
            </div>
          </div>
          <p className="text-white/40 text-xs tracking-wide uppercase">
            Every journey deserves the same care as the destination — let myCHEF handle the road, the water, and the table
          </p>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="vip-transport-bali"
        serviceType="vip-transport"
        label="Arrange Transport via WhatsApp"
        serviceName="VIP transport in Bali"
        intent="a tailored quotation"
      />
    </div>
  )
}
