import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Car, UtensilsCrossed, Phone, Mail, Clock,
} from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { ArticleContentSection } from '@/components/shared'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'VIP transport in Bali', intent: 'a tailored quotation' })
const SITE = 'https://mychef.id'

const FAQS = [
  { q: 'Which areas do you cover?', a: 'Airport transfers and private drivers across Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and the Bukit Peninsula. Other routes on request.' },
  { q: 'What group sizes can you handle?', a: 'From couples to groups of 40+, with multiple vehicles and a dedicated coordinator for weddings and events.' },
  { q: 'Do you provide child seats?', a: 'Yes — child and infant seats at no extra charge. Tell us ages and weights at booking so the correct seat is installed before arrival.' },
  { q: 'How far ahead should I book, and what if plans change?', a: '48–72 hours is usually enough; allow 2–3 weeks for weddings and large events. A 50% deposit confirms your vehicle and driver (aligned to live page figure; sitewide unification pending business decision). Cancellation: full refund more than 48 hours before service; 50% charge within 24–48 hours; same-day cancellations charged in full.' },
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
        title="VIP Transport Bali | Arrival Transfers, Arranged"
        description="VIP transport in Bali: luxury car hire, minibuses, yacht charters & event logistics with English-speaking drivers. Enquire via WhatsApp."
        canonical={`${SITE}/vip-transport-bali`}
        ogImage={`${SITE}/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://mychef.id/'},
                  {'@type': 'ListItem', 'position': 2, 'name': 'VIP Transport Bali', 'item': 'https://mychef.id/vip-transport-bali'}
                ]
              },
              {
                '@type': 'Service',
                'name': 'VIP Transport Bali — Arrival Transfers Arranged',
                'serviceType': 'Private transfer arrangement (concierge add-on)',
                'provider': {
                  '@type': 'LocalBusiness',
                  'name': 'myCHEF.id',
                  'url': 'https://mychef.id/',
                  'telephone': '+62 896-7407-2020',
                  'address': {'@type': 'PostalAddress', 'streetAddress': 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan', 'addressLocality': 'Denpasar', 'addressRegion': 'Bali', 'postalCode': '80226', 'addressCountry': 'ID'}
                },
                'areaServed': 'Bali, Indonesia',
                'description': 'Airport pickups, group shuttles and event transport arranged through a vetted partner driver network as an add-on to myCHEF chef, event and villa-stay bookings.'
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {'@type': 'Question', 'name': 'Which areas do you cover?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Airport transfers and private drivers across Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and the Bukit Peninsula. Other routes on request.'}},
                  {'@type': 'Question', 'name': 'What group sizes can you handle?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'From couples to groups of 40+, with multiple vehicles and a dedicated coordinator for weddings and events.'}},
                  {'@type': 'Question', 'name': 'Do you provide child seats?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes — child and infant seats at no extra charge; ages and weights are taken at booking so the correct seat is installed.'}},
                  {'@type': 'Question', 'name': 'How far ahead should I book, and what if plans change?', 'acceptedAnswer': {'@type': 'Answer', 'text': '48–72 hours is usually enough; 2–3 weeks for weddings and large events. A 50% deposit confirms the vehicle and driver. Cancellation: full refund more than 48 hours before service; 50% charge within 24–48 hours; same-day charged in full.'}}
                ]
              }
            ]
          }
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
            VIP Transport in Bali — Arrival, Arranged
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            The first and last hour of a Bali trip sets the tone for everything between. myCHEF arranges private transfers for our chef and event clients — airport pickups, group shuttles, day drivers and event-night transport — coordinated through our trusted partner driver network and folded into the same WhatsApp thread as your booking.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="vip-transport-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Add a Transfer to Your Booking
            </a>
            <Link to="/villa-event-packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              Bundle with a Villa Package
            </Link>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Replies within the hour, 08:00–22:00 WITA
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white transport-content transport-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Culinary team first, transport arranged through partners we trust
          </h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            We are a culinary and events team, not a transport company — and we think that's exactly why this works. You tell us your flight, villa and group size; we book the right vehicle from vetted partner drivers we've worked with for years; and your transfer appears on the same plan as your chef service, with nothing left to chance between providers.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Every journey is quoted around your route, schedule and group — tailored proposals rather than a rate card.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] transport-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                <Car className="inline w-4 h-4 mr-2 -mt-0.5" />The Arrival
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Arrival, Choreographed
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Your driver tracks your flight and is waiting at Ngurah Rai arrivals with a name board and chilled towels, briefed on the exact villa entrance. Vehicles suit couples through to groups of 40+, with multi-vehicle coordination and a dedicated transport contact for weddings and large events.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed">Child and infant seats provided at no extra charge — share ages and weights when booking.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed">Welcome drinks or canapés can be stocked in the vehicle for a proper arrival.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed">Coverage across Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Nusa Dua, Sanur and the Bukit Peninsula.</p>
                </div>
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
                <UtensilsCrossed className="inline w-4 h-4 mr-2 -mt-0.5" />Bundle
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Arrival Dinner Bundle
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Our most-booked combination: airport pickup, straight to a villa where the fridge is stocked and a private chef is preparing your first-night dinner. No restaurant hunt after a long flight, no decisions — you swim, you shower, you sit down to a cooked meal.
              </p>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Arrival dinners start from IDR 700K++ per person (plus 11% government tax + 10% service charge), and the whole first evening arrives on one quote. It's the natural first chapter of <Link to="/complete-villa-experience" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">complete villa stays</Link> or <Link to="/villa-event-packages" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">villa event packages</Link>.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed">One WhatsApp thread for the road and the table.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed">From couples to groups of 40+ with coordinated shuttles.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed">Tailored proposals rather than fixed rate cards.</p>
                </div>
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
              { label: 'villa event packages', href: '/villa-event-packages', desc: 'The all-inclusive villa experience.' },
              { label: 'complete villa stays', href: '/complete-villa-experience', desc: 'Whole-stay daily chef & concierge.' },
              { label: 'wedding guest logistics', href: '/events/weddings', desc: 'Ceremony & reception catering.' },
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
            Add Transport to Your Booking
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            One thread for the road and the table
          </h2>
          <p className="text-white/[70%] leading-relaxed mb-10 max-w-2xl mx-auto">
            Transport is available as an add-on to chef, event and stay bookings — <Link to="/contact" className="text-[#C5A028] underline underline-offset-4">contact the team</Link> with your flight details, or simply mention it when you book your chef. Planning guest logistics for a wedding? See how we coordinate arrivals on our <Link to="/events/weddings" className="text-[#C5A028] underline underline-offset-4">wedding guest logistics</Link> page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="vip-transport-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Arrange Your Arrival — WhatsApp
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> bali@mychef.id
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-left mb-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MessageCircle className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">WhatsApp</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-white/[65%] text-sm hover:text-white transition-colors">Message us now — replies within the hour</a>
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
            Every arrival sets the tone — let myCHEF arrange yours
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
    <ArticleContentSection />
    </div>
  )
}
