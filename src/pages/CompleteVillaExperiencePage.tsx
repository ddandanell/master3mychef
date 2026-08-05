import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Check, Plane, ChefHat, PartyPopper, Wine, Users, Sparkles, ShieldCheck, Phone, Mail, Instagram, MapPin, Heart } from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, detailedServiceSchema, faqPageSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { ArticleContentSection } from '@/components/shared'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'Complete Villa Experience Bali', intent: 'a tailored quotation' })
const SITE = 'https://mychef.id'

const INCLUDED = [
  { icon: Plane, title: 'VIP Airport Transfers', desc: 'Luxury vehicles and English-speaking drivers arranged before you land.' },
  { icon: Sparkles, title: 'Villa Preparation', desc: 'Pre-arrival setup, fresh flowers, stocked bar and a pristine welcome.' },
  { icon: ChefHat, title: 'Daily Private Chef', desc: 'Breakfast, lunch, dinner and poolside grazing cooked fresh in your villa.' },
  { icon: PartyPopper, title: 'Event Planning', desc: 'Birthdays, anniversaries, weddings and corporate retreats, coordinated end to end.' },
  { icon: Wine, title: 'Bar & Bottle Service', desc: 'Mixologists, sommeliers and premium mobile bar setups at your villa.' },
  { icon: Users, title: 'In-Villa Staffing', desc: 'Uniformed waiters, butlers, hostesses and cleaners briefed to your stay.' },
  { icon: Heart, title: 'Concierge Extras', desc: 'Restaurant bookings, yacht charters, spa appointments and private excursions.' },
  { icon: ShieldCheck, title: 'Cleanup & Handback', desc: 'Daily housekeeping, post-event breakdown and a seamless villa reset.' },
]

const ARRIVAL_POINTS = [
  'Your driver tracks your flight and greets you at Ngurah Rai International Airport with a sign and a chilled towel.',
  'Luxury SUVs, executive sedans and minibuses handle every leg of your journey through our VIP transport Bali service.',
  'Your villa is prepared before arrival — air conditioning running, pool pristine, refreshments ready, music playing softly.',
  'One WhatsApp thread connects you to the entire team from the moment you land until the moment you depart.',
]

const CHEF_POINTS = [
  'Menus shaped around your preferences, dietary requirements and the rhythm of your holiday — from energising breakfasts to long, lazy dinners.',
  'Groceries sourced at cost with complete transparency; you only pay for what your chef actually uses.',
  'Poolside grazing platters, sunset canapés, multi-course tasting menus or convivial family-style feasts.',
  'A kitchen left spotless after every meal, so your villa always feels like a private retreat, not a working kitchen.',
]

const EVENT_POINTS = [
  'Milestone birthdays, anniversaries and engagement dinners transformed into fully staged villa occasions.',
  'Intimate villa weddings and vow renewals with florist, photographer, officiant and entertainment coordination.',
  'Corporate retreats where dining, presentations, team activities and transport flow under one plan.',
  'Every event supported by front-of-house staff, bar service and a cleanup team — you simply host.',
]

const STAFF_POINTS = [
  'Uniformed, English-speaking waiters and butlers trained to the highest standards of villa hospitality.',
  'Hostesses who greet guests, manage seating and keep the evening flowing without you lifting a finger.',
  'Daily housekeeping and HACCP-certified kitchen cleaning throughout your stay.',
  'Discreet, silent professionals who understand that true luxury is felt, not noticed.',
]

const CONCIERGE_POINTS = [
  'Restaurant reservations at the island’s most sought-after tables, often with preferred seating.',
  'Private yacht charters, sunset cruises and landing boats to Nusa Penida and Nusa Lembongan.',
  'In-villa spa therapists, yoga instructors and wellness practitioners arranged around your schedule.',
  'Cultural excursions, temple visits, private guides and VIP nightclub access through our established network.',
]

const CLEANUP_POINTS = [
  'Daily villa tidying, bed refresh, laundry coordination and poolside reset — your space never feels lived in.',
  'Post-event breakdown, furniture repositioning, waste removal and deep kitchen cleaning after every celebration.',
  'Direct coordination with property managers for a seamless handback, protecting your security deposit.',
  'You depart rested and fulfilled; the team remains until every surface is returned to its original condition.',
]

const GUESTS = [
  { title: 'Multi-Generational Families', desc: 'Keep everyone relaxed with child-friendly menus, flexible mealtimes and staff who anticipate every need.' },
  { title: 'Wellness & Yoga Retreats', desc: 'Plant-forward menus, calm service rhythms and group logistics managed from one point of contact.' },
  { title: 'Wedding Parties', desc: 'Rehearsal dinners, ceremonies, receptions and guest hospitality across multiple villas.' },
  { title: 'Corporate Groups', desc: 'Structured dining, presentation support, team activities and transport for leadership offsites.' },
  { title: 'HNW Travellers', desc: 'Absolute discretion, bespoke experiences and a team that adapts instantly to changing plans.' },
]

const FAQS = [
  { q: 'What does the Complete Villa Experience include in Bali?', a: 'A fully managed villa stay: VIP airport transfers, villa preparation, daily private chef service, event planning, bar service, in-villa staffing, concierge extras and full cleanup/handback — tailored to your group and villa.' },
  { q: 'Can I book only part of the package?', a: 'Yes. The full experience is integrated, but you can scope transport, chef days or staffing alone via <a href="/vip-transport-bali">VIP transport</a>, <a href="/private-chef-bali">private chef</a>, <a href="/villa-event-packages">villa event packages</a> or <a href="/in-villa-service">in-villa service</a>.' },
  { q: 'How much does a complete villa experience cost?', a: 'Pricing is custom by nights, guest count, meal plan, events and staff levels. You receive a fixed written quote before deposit — never a vague after-the-fact total. Related rates: <a href="/pricing">pricing</a>.' },
  { q: 'Which areas of Bali do you cover?', a: 'Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa, Pererenan and beyond. <a href="/locations">Locations →</a>' },
  { q: 'How far in advance should I book?', a: 'Peak season / full takeovers: 4–6 weeks ideal. Shorter stays or transport-only: 1–2 weeks often enough. Last-minute is frequently possible — WhatsApp us.' },
  { q: 'Is daily private chef included every day?', a: 'Yes when scoped into the package — meal-count plans match <a href="/private-chef-bali">private chef</a> (1–3 meals/day). Groceries at cost with receipts unless a package includes food differently (stated on the quote).' },
  { q: 'Do you handle airport transfers both ways?', a: 'Yes — VIP arrivals and departures can be included. Standalone: <a href="/vip-transport-bali">VIP transport Bali</a>.' },
  { q: 'Can you plan a villa party or BBQ mid-stay?', a: 'Yes — event nights stack onto the stay: <a href="/bbq-grill">BBQ</a>, <a href="/catering">catering</a> or <a href="/events">events</a>.' },
  { q: 'Is bar and bartender service included?', a: 'Optional within the package. Standalone rates on <a href="/in-villa-service/bartenders">bartenders</a> and <a href="/bar-services/">bar services</a>.' },
  { q: 'Do you clean the villa at handback?', a: 'Service cleanup after meals is standard; full villa handback standards are scoped when housekeeping is included — confirm on the quote.' },
  { q: 'Can families with kids book this?', a: 'Yes — kids menus, early service and multi-gen meal plans are common. <a href="/kids-menus">Kids menus →</a>' },
  { q: 'What deposit and cancellation apply?', a: 'Typically 50% deposit to confirm the package; balance schedule stated on the quote. Cancellation tiers follow <a href="/cancellation">policy</a> unless a custom event contract says otherwise.' },
  { q: 'Can wedding weeks use Complete Villa Experience?', a: 'Yes — welcome dinners, rehearsal, ceremony catering and guest breakfasts can sit under one operations team. <a href="/events/weddings">Wedding catering →</a>' },
  { q: 'Do you coordinate with our villa manager?', a: 'Daily. Share manager contacts early for access, inventory and quiet hours.' },
  { q: 'Is this available for corporate offsites?', a: 'Yes — multi-day retreats with meals, coffee stations and gala dinners. <a href="/events/corporate">Corporate events →</a> · <a href="/catering/retreat-catering">Retreat catering →</a>' },
  { q: 'What if headcount changes during the stay?', a: 'Tell us early. Meal prep and staffing adjust; large last-minute jumps may change the quote for remaining days.' },
  { q: 'Can we request Chef Rotation during a long stay?', a: 'On 7+ day chef scopes, Chef Rotation is included so cuisine can change day by day. See <a href="/private-chef-bali">private chef</a>.' },
  { q: 'How do I get a Complete Villa Experience proposal?', a: 'WhatsApp arrival date, nights, guest count, villa area and must-have services. We reply with a scoped proposal. <a href="/quote">Quote →</a> · <a href="/contact">Contact →</a>' },
  { q: 'What if a staff member cannot make a shift?', a: 'Supervised teams with replacement cover — same promise as our chef and service guarantees. <a href="/why-mychef">Why myCHEF →</a>' },
  { q: 'Is alcohol included?', a: 'Usually client-supplied or sourced at cost. Service staff and mixology are the hire; bottles are separate unless the quote says otherwise.' },
]

export default function CompleteVillaExperiencePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cve-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cve-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Complete Villa Experience Bali | End-to-End Hospitality — myCHEF"
        description="Full-service villa hospitality in Bali: airport transfers, daily chef, events, staff, concierge & cleanup. One team handles everything end to end."
        canonical={`${SITE}/complete-villa-experience`}
        ogImage={`${SITE}/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp`}
        jsonLd={[
          detailedServiceSchema('Complete Villa Experience Bali', 'myCHEF.id provides a complete villa experience in Bali: VIP airport transfers, villa preparation, daily private chef service, event planning, bar and bottle service, in-villa staffing, concierge extras and full cleanup/handback — one team managing every detail from arrival to departure.', `${SITE}/complete-villa-experience`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Complete Villa Experience Bali', `${SITE}/complete-villa-experience`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp"
            alt="Private chef preparing food in a warm, modern Bali villa kitchen for a complete villa hospitality experience"
            width={1440}
            height={800}
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
          <Breadcrumb items={[{ label: 'Complete Villa Experience' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Arrival to Departure
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Complete Villa Experience — We Handle Everything
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            One team, one WhatsApp thread, one perfectly orchestrated stay. VIP transport, villa preparation, daily private chef, events, staffing, concierge and cleanup — all managed for you.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="complete-villa-experience-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan Your Complete Stay
            </a>
            <Link to="/villa-event-packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> View Villa Packages
            </Link>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Bespoke stays · Detailed proposal without obligation
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white cve-content cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The Promise
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                We help people — and do everything for them from start to end
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                A Bali villa should feel like a private sanctuary, not a logistics puzzle. Yet too often, guests arrive to empty fridges, unanswered driver calls, and the quiet stress of coordinating chefs, cleaners, celebrations and transport from halfway around the world. The Complete Villa Experience exists to remove every one of those friction points.
              </p>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                From the moment your flight is confirmed, our team begins preparing your stay. We arrange airport transfers, stock the villa, brief the chef, schedule staff and plan any celebrations. While you are in Bali, we remain on call — adjusting menus, adding excursions, handling surprises. When you leave, we restore the villa and hand it back flawlessly.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                This is not a collection of separate services. It is one integrated hospitality operation, led by a Milan-trained culinary team and supported by villa professionals who understand that the best service is invisible.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-interior-pool-living-bali-landscape.webp" alt="Open-plan living and pool area of a luxury Bali villa prepared for guests" width={1024} height={576} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="One Stay, Every Detail"
            title="What the Complete Villa Experience Includes"
            subtitle="Eight services, one point of contact. Every element is scoped around your villa, your group and your occasion — then delivered by a single integrated team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 1 — Arrival
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                VIP Transport Bali — From Terminal to Villa Without Friction
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Your experience begins before customs. We track your flight, dispatch a luxury vehicle and brief your driver on the exact villa entrance. Whether you choose a premium SUV for two or a minibus for a group, every arrival is handled by our <Link to="/vip-transport-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">arrival transfers, arranged</Link> team.
              </p>
              <div className="space-y-3">
                {ARRIVAL_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp" alt="Uniformed myCHEF chauffeur beside a luxury VIP vehicle at a Bali villa entrance" width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp" alt="myCHEF private chef preparing fresh ingredients in a Bali villa kitchen" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 2 — Daily Living
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Villa Preparation & Daily Private Chef Service
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Imagine arriving to a villa that already feels like home — beds dressed, fridges stocked, flowers arranged, and your first refreshments waiting. Then, each morning, a <Link to="/private-chef-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">private villa chef service</Link> arrives to prepare breakfast while the housekeeping team quietly resets the space.
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

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 3 — Celebrations
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Event Planning & Villa Celebrations
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                A private villa is the most extraordinary venue Bali offers — if the event is planned with precision. Our team transforms your residence into a celebration space, coordinating every supplier and timeline so you can simply arrive and enjoy. Explore dedicated options through our <Link to="/events" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">events during your stay</Link> hub, or learn about the <Link to="/villa-event-packages" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">one-event version</Link>.
              </p>
              <div className="space-y-3">
                {EVENT_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-complete-villa-wedding-reception-bali-landscape.webp" alt="Elegant villa wedding reception table set beneath tropical greenery in Bali" width={1536} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-staff-waiters-service-bali-landscape.webp" alt="Uniformed myCHEF waiters providing polished in-villa service at a Bali villa" width={1536} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 4 — Your Team
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                In-Villa Service Staff — Waiters, Butlers, Bartenders & Cleaners
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The difference between a rented villa and a true private residence is the quality of the people who run it. Our <Link to="/in-villa-service" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">in-villa staff</Link> team provides uniformed, English-speaking professionals who make hospitality feel effortless. For placements beyond the stay, see our <Link to="/staffing" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">longer-term staff placement</Link> service.
              </p>
              <div className="space-y-3">
                {STAFF_POINTS.map((item) => (
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

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 5 — Beyond the Villa
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Concierge Extras — Restaurants, Yachts, Spa & Excursions
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The Complete Villa Experience extends well beyond your front gate. Our concierge team opens doors across the island, turning a beautiful stay into an unforgettable journey. Simply share your mood, and we handle the reservations, timing and transport.
              </p>
              <div className="space-y-3">
                {CONCIERGE_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-pool-infinity-pool-bali-landscape.webp" alt="Infinity pool overlooking the Bali coast at sunset, illustrating luxury villa living" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-tablescape-reset-table-bali-landscape.webp" alt="Immaculately reset dining tablescape at a Bali villa after an event" width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 6 — Departure
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cleanup, Handback & a Graceful Departure
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                One of the greatest luxuries of a fully managed stay is that it ends as smoothly as it begins. While you enjoy your final morning, our team manages the entire reset — so you leave rested, fulfilled and free from logistics.
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
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Designed For"
            title="Who the Complete Villa Experience Is For"
            subtitle="Every group is different, but the desire is the same — a flawless stay where every detail is handled."
            dark
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUESTS.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h3 className="text-lg text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p className="text-white/[70%] leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Complete Villa Experience FAQ" subtitle="Everything you need to know about our end-to-end villa hospitality service in Bali." />
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            The Done-for-You Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            You arrive. You live. You leave. We do the rest.
          </h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            The Complete Villa Experience is built on a simple promise: one team assumes responsibility for every detail of your Bali stay. We coordinate transport, prepare the villa, cook your meals, plan your events, staff your residence, arrange your excursions and manage the cleanup. Your only job is to enjoy the people around you and the island around them.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-8">
            Whether you are travelling with family, hosting a retreat, celebrating a wedding or rewarding a team, this is the most effortless way to experience Bali — with the confidence that every moment has been considered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="complete-villa-experience-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Start Your Enquiry
            </a>
            <Link to="/villa-event-packages" className="inline-flex items-center gap-2 px-8 py-4 border border-[#1A1A1A]/30 text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1A1A1A]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <Calendar className="w-4 h-4" /> Compare Packages
            </Link>
          </div>
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
              { label: 'Villa Event Packages', href: '/villa-event-packages', desc: 'All-inclusive villa celebrations.' },
              { label: 'In-Villa Staff', href: '/in-villa-service', desc: 'Waiters, butlers & bartenders.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate.' },
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
      <section id="enquire" className="py-20 md:py-28 bg-[#0A0A0A] cve-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Enquire About Your Complete Stay
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let us design your effortless Bali stay
          </h2>
          <p className="text-white/[70%] leading-relaxed mb-4 max-w-2xl mx-auto">
            Every villa, every group and every occasion is unique. The Complete Villa Experience is offered as a bespoke service, with tailored quotations designed around your specific requirements.
          </p>
          <p className="text-white/[70%] leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us your dates, villa location and group size. We will reply with a detailed proposal — every service itemised, every question answered, no obligation required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="complete-villa-experience-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp {siteFacts.phoneDisplay}
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> bali@mychef.id
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Telephone</p>
              <a href={`https://wa.me/${siteFacts.whatsappNumber}`} className="text-white/[65%] text-sm hover:text-white transition-colors">{siteFacts.phoneDisplay}</a>
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
              <p className="text-white/[65%] text-sm leading-relaxed">{siteFacts.addressDisplay}</p>
            </div>
          </div>
          <p className="text-white/40 text-xs tracking-wide uppercase">
            HACCP Food Safety Certified · Milan-trained culinary leadership · Serving Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Berawa, Pererenan, Sanur and villas across Bali
          </p>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="complete-villa-experience"
        serviceType="complete-villa-experience"
        label="Plan Your Complete Stay via WhatsApp"
        serviceName="Complete Villa Experience Bali"
        intent="a tailored quotation"
      />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
