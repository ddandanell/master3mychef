import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Check, Plane, ChefHat, PartyPopper, Wine, Users, Sparkles, ShieldCheck,
  Phone, Mail, Instagram, MapPin,
} from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, detailedServiceSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'an all-inclusive villa event package in Bali', intent: 'a tailored quotation' })
const SITE = 'https://mychef.id'

const INCLUDED = [
  { icon: Plane, title: 'Airport Pickup', desc: 'Private transfers in air-conditioned luxury vehicles, arranged before you land.' },
  { icon: ChefHat, title: 'Daily Private Chef', desc: 'Breakfast, lunch, dinner and poolside grazing, cooked fresh in your villa kitchen.' },
  { icon: PartyPopper, title: 'Event Planning', desc: 'Birthdays, anniversaries, weddings and corporate retreats, coordinated end to end.' },
  { icon: Wine, title: 'Bar & Bottle Service', desc: 'Mixologists, sommeliers and premium mobile bar setups at your villa.' },
  { icon: Users, title: 'Professional Staffing', desc: 'Uniformed waiters, butlers, hostesses and cleaners, briefed to your event.' },
  { icon: Sparkles, title: 'Cleanup & Handback', desc: 'Full post-event breakdown, deep clean and villa reset after the last toast.' },
  { icon: ShieldCheck, title: 'Concierge & Privacy', desc: 'Reservations, charters and excursions arranged with absolute discretion.' },
]

const ARRIVAL_POINTS = [
  'Private airport transfers in air-conditioned luxury vehicles, arranged by our Bali concierge service.',
  'Your villa prepared before you land — the air scented, the pool pristine, your first refreshments waiting.',
  'No queues, no confusion, no stress — step off the plane and into a world arranged on your behalf.',
  'A frictionless start for milestone celebrations, corporate retreats and intimate gatherings alike.',
]

const CHEF_POINTS = [
  'Bespoke menus built around your preferences, dietary requirements and the occasion at hand.',
  'Multi-course tasting menus, open-flame grilling experiences, or convivial shared feasts.',
  'Poolside grazing platters, canapés and handcrafted desserts delivered to your sun lounger.',
  'The finest local and imported ingredients — groceries procured at cost, with complete transparency.',
]

const EVENT_TYPES = [
  {
    title: 'Milestone Celebrations',
    desc: 'Birthdays, anniversaries and personal achievements — from elegant seated dinners beneath the stars to lively poolside soirées. Our planners coordinate décor, lighting, music, catering and service around your vision.',
  },
  {
    title: 'Weddings & Vow Renewals',
    desc: 'Intimate villa weddings managed with meticulous attention. We coordinate florists, photographers, officiants and entertainment, so your special day unfolds flawlessly within the privacy of your chosen villa.',
  },
  {
    title: 'Corporate Retreats',
    desc: 'An unparalleled alternative to conventional venues. Structured dining experiences, presentation facilities and recreational activities that foster connection — all within the secluded comfort of your private residence.',
  },
]

const BAR_POINTS = [
  'Expert mixologists crafting signature cocktails and timeless favourites with premium spirits and fresh local ingredients.',
  'Sommelier-led wine experiences — guided tastings, food pairing recommendations and Old World and New World bottles.',
  'Fully equipped mobile bar installations, elegant glassware and presentation that rivals the finest hotel lounges.',
  'Seamless service throughout the evening — your guests never waiting, never wanting.',
]

const STAFFING_POINTS = [
  'Uniformed, English-speaking waiters and butlers trained to the highest standards of hospitality.',
  'Hostesses and event coordinators who welcome guests, manage seating and keep the evening flowing.',
  'A dedicated cleaning team maintaining your villa to HACCP-certified standards throughout your stay.',
  'Continuous personal service for multi-day stays — your villa’s daily operations managed for you.',
]

const CLEANUP_POINTS = [
  'All post-event cleaning, furniture repositioning, waste removal and villa reset.',
  'Décor carefully dismantled, kitchens deep-cleaned, every surface returned to its original condition.',
  'Direct coordination with property managers for a seamless handback — protecting your security deposit.',
  'You simply depart — rested, fulfilled, and free from the burden of aftermath.',
]

const CONCIERGE_POINTS = [
  'An absolute guarantee of discretion — silent professionals, never intrusive, never indiscreet.',
  'Restaurant reservations at the island’s most exclusive venues.',
  'Private yacht charters, spa appointments and cultural excursions.',
  'VIP nightclub access — our network opens doors that remain closed to others.',
]

export default function VillaEventPackagesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.villa-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Bali Villa Event Packages | All-Inclusive — myCHEF"
        description="All-inclusive villa experience in Bali: airport pickup, daily private chef, event planning, bar service, staffing & cleanup. Tailored quotes."
        canonical={`${SITE}/villa-event-packages`}
        ogImage={`${SITE}/generated/mychef-villa-packages-banquet-lawn-bali-landscape.webp`}
        jsonLd={[
          detailedServiceSchema('Bali Villa Event Packages', 'myCHEF.id provides all-inclusive villa event packages in Bali: airport pickup, daily private chef service, event planning, bar and bottle service, professional staffing, post-event cleanup and concierge-level care — one tailored package for your entire villa stay.', `${SITE}/villa-event-packages`),
          breadcrumbSchema('Villa Event Packages', `${SITE}/villa-event-packages`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-villa-packages-banquet-lawn-bali-landscape.webp"
            alt="Long banquet table with floral runners and candles set for a private event on a Bali villa lawn at dusk"
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
          <Breadcrumb items={[{ label: 'Villa Event Packages' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            The Total Villa Experience
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bali Villa Event Packages — Everything, Arranged
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            Airport pickup, a daily private chef, event planning, bar service, professional staffing, cleanup and concierge — one tailored package that transforms an ordinary villa stay into an extraordinary private occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Tailored Quotation
            </a>
            <a href="#enquire" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Contact the Team
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Bespoke packages · Detailed proposal without obligation
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white villa-content villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The All-Inclusive Villa Experience Bali Deserves
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Arrive in Bali to find everything already arranged
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Your private chef is preparing your first meal. Your villa staff are anticipating every need. Your celebration is being orchestrated behind the scenes by a team that understands luxury without intrusion. This is the Total Villa Experience by myCHEF.id — the island’s most comprehensive all-inclusive villa experience Bali has to offer, designed for discerning guests who expect nothing less than perfection.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                For those searching for premium Bali villa event packages, our end-to-end solution covers every detail from the moment you land at Ngurah Rai International Airport to the final farewell — curated, coordinated, and delivered with the discretion and precision that only a Michelin-trained leadership team can provide.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-interior-pool-living-bali-landscape.webp" alt="Open-plan living room of a luxury Bali villa prepared for guests" width={1024} height={576} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="One Package, Every Detail"
            title="What the Total Villa Experience Includes"
            subtitle="Seven services, one point of contact. Every element below is scoped around your villa, your group and your occasion — then delivered by a single integrated team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
                <item.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 1 — Arrival
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Airport Pickup & Seamless Arrival
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Your experience begins before you even clear customs. Our Bali concierge service arranges private airport transfers that whisk you from the terminal to your villa without a single logistical concern — every arrival handled by our <Link to="/vip-transport-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">VIP transport Bali</Link> team, with luxury vehicles and English-speaking drivers as standard.
              </p>
              <div className="space-y-3">
                {ARRIVAL_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#4A4745] leading-relaxed mt-4">
                Your private event villa Bali experience starts the moment your feet touch Balinese soil.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-pool-infinity-pool-bali-landscape.webp" alt="Infinity pool at a Bali villa at sunset, prepared for arriving guests" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-packages-chef-dinner-table-bali-landscape.webp" alt="Candlelit private chef dinner table set inside a Bali villa" width={1216} height={832} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 2 — Your Chef
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Daily Private Chef Service — Breakfast to Poolside Grazing
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                At the heart of the Total Villa Experience lies our signature private villa chef Bali service, led by Michelin-trained culinary expertise. Each day begins with a breakfast tailored to your party; lunch might feature light, vibrant dishes best enjoyed by the pool, whilst dinner becomes the centrepiece of your evening. This is luxury villa dining Bali at its most effortless — where culinary excellence meets absolute relaxation.
              </p>
              <div className="space-y-3">
                {CHEF_POINTS.map((item) => (
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

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 3 — Your Occasion"
            title="Event Planning & Coordination"
            subtitle="A private villa provides the perfect backdrop for life’s most significant moments. Our villa party planner Bali team transforms these spaces into spectacular venues for celebrations of every kind."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((card) => (
              <div key={card.title} className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-6 md:p-8">
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mt-10">
            Whatever the occasion, our event planners work closely with you in the weeks leading up to your stay, refining every detail so that when the day arrives, you can simply be present and enjoy. Planning a ceremony? See our dedicated <Link to="/events/weddings" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">villa wedding catering</Link> service.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 4 — The Bar
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bar & Bottle Service — Mixologists, Sommeliers & Craft Cocktails
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                No luxury event is complete without an exceptional drinks programme. Our bar and bottle service brings professional mixologists and sommeliers directly to your villa, elevating every toast and turning each gathering into a sophisticated occasion.
              </p>
              <div className="space-y-3">
                {BAR_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-packages-packages-bartender-bali-landscape.webp" alt="myCHEF mixologist preparing craft cocktails at a Bali villa bar" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-packages-staff-setting-table-bali-landscape.webp" alt="Uniformed myCHEF service team setting a long dinner table at a Bali villa" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 5 — Your Staff
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Professional Staffing — Waiters, Butlers, Hostesses & Cleaners
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The difference between a good event and an unforgettable one often lies in the quality of service. Our villa staff Bali team comprises uniformed, English-speaking professionals who understand that true luxury is invisible — present when needed, discreet when not.
              </p>
              <div className="space-y-3">
                {STAFFING_POINTS.map((item) => (
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

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 6 — The Farewell
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Post-Event Cleanup & Villa Handback
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                One of the greatest luxuries of the Total Villa Experience is that it concludes as smoothly as it begins. When your celebration ends, our team remains to manage the entire breakdown and restoration process — the final gesture in a stay defined by total care.
              </p>
              <div className="space-y-3">
                {CLEANUP_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-tablescape-reset-table-bali-landscape.webp" alt="Immaculately reset event tablescape at a Bali villa after service" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 7 — Your Privacy
              </p>
              <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Concierge-Level Care & Privacy Guarantee
              </h2>
              <p className="text-white/[70%] leading-relaxed mb-4">
                Privacy is paramount. The Total Villa Experience is built upon an absolute guarantee of discretion. We understand that our guests include high-profile individuals, families and corporate groups for whom confidentiality is non-negotiable.
              </p>
              <p className="text-white/[70%] leading-relaxed">
                Beyond the event itself, our Bali concierge service extends to every aspect of your stay. Simply express your desire, and we shall arrange the rest.
              </p>
            </div>
            <div className="space-y-3">
              {CONCIERGE_POINTS.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <ShieldCheck className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-white/[75%] leading-relaxed text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            The Done-for-You Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            You relax, we handle everything
          </h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            From the initial enquiry to the final departure, our team assumes responsibility for every logistical detail. We coordinate vendors, manage timelines, source ingredients, brief staff, oversee setup, execute the event, and manage cleanup. Your only responsibility is to enjoy the company of your guests and the beauty of your surroundings.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-8">
            We do not merely provide a chef, or a waiter, or a bartender. We provide a complete, integrated solution — a single point of contact for an entire ecosystem of luxury services. It is the reason we are recognised as a leading provider of Bali villa event packages for those who demand excellence without effort.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
            <MessageCircle className="w-4 h-4" /> Start Your Enquiry
          </a>
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
              { label: 'VIP Transport', href: '/vip-transport-bali', desc: 'Luxury cars, yachts & event logistics.' },
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
      <section id="enquire" className="py-20 md:py-28 bg-[#0A0A0A] villa-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Enquire About Your Tailored Package
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let us create something extraordinary together
          </h2>
          <p className="text-white/[70%] leading-relaxed mb-4 max-w-2xl mx-auto">
            Every villa, every group, and every occasion is unique. That is why the Total Villa Experience is offered as a bespoke service, with tailored quotations designed around your specific requirements.
          </p>
          <p className="text-white/[70%] leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are planning an intimate dinner for eight or a week-long celebration for fifty, we will craft a package that aligns with your vision and your budget — a detailed proposal, without obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896 7407 2020
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> bali@mychef.id
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Telephone</p>
              <a href="tel:+6289674072020" className="text-white/[65%] text-sm hover:text-white transition-colors">+62 896 7407 2020</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Mail className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Email</p>
              <a href="mailto:bali@mychef.id" className="text-white/[65%] text-sm hover:text-white transition-colors">bali@mychef.id</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Instagram className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Instagram</p>
              <a href="https://www.instagram.com/mychef.id" target="_blank" rel="noopener noreferrer" className="text-white/[65%] text-sm hover:text-white transition-colors">@mychef.id</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Address</p>
              <p className="text-white/[65%] text-sm leading-relaxed">Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Bali 80226</p>
            </div>
          </div>
          <p className="text-white/40 text-xs tracking-wide uppercase">
            HACCP Food Safety Certified · Michelin-trained culinary leadership · Serving Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Berawa, Pererenan, Sanur and villas across Bali
          </p>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="villa-event-packages"
        serviceType="villa-event-package"
        label="Request a Villa Package via WhatsApp"
        serviceName="an all-inclusive villa event package in Bali"
        intent="a tailored quotation"
      />
    </div>
  )
}
