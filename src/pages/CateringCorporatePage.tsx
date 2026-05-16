import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users,
  Utensils, Briefcase, ChefHat, Clock, FileText,
  Coffee, Wine, Sun, Moon, Cookie,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  cateringBreadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20corporate%20catering%20quote%20for%20my%20Bali%20event.'
const SITE = 'https://mychef.id'

/* ── DATA ── */

const CORP_PACKAGES = [
  {
    title: 'Board Dinner',
    price: 850000,
    people: '6 to 20 people',
    format: ['Canapés', '3-course plated', 'Wine pairing', 'Dedicated service', 'Full cleanup'],
    bestFor: 'Executive dinners, investor meetings, board retreats, C-suite entertaining',
  },
  {
    title: 'Team Offsite Catering',
    price: 550000,
    people: '15 to 80 people',
    format: ['Buffet or plated', '2-3 menu options', 'Dietary accommodation', 'Service staff', 'Invoiced'],
    bestFor: 'Company offsites, team building, strategy retreats, department dinners',
  },
  {
    title: 'Conference Catering',
    price: 450000,
    people: '30 to 200 people',
    format: ['Coffee breaks', 'Working lunch', 'Buffet dinner', 'All-day service', 'Setup & breakdown'],
    bestFor: 'Conferences, seminars, product launches, corporate events',
  },
]

const EVENTS_SUPPORTED = [
  { icon: Briefcase, title: 'Workshops', desc: 'Full-day or half-day sessions with scheduled meal breaks and coffee service.' },
  { icon: Users, title: 'Team Offsites', desc: 'Multi-day retreats with breakfast, lunch, dinner, and snacks across the stay.' },
  { icon: ChefHat, title: 'Board Dinners', desc: 'Intimate executive dining with plated service, wine, and discreet staff.' },
  { icon: Coffee, title: 'Company Lunches', desc: 'Buffet or lunch boxes for regular team meals at villas or venues.' },
  { icon: Sun, title: 'Conferences', desc: 'Coffee breaks, working lunches, and gala dinners for 50–200 delegates.' },
  { icon: Wine, title: 'Product Launches', desc: 'Canapé receptions, branded menus, and cocktail service for press and partners.' },
  { icon: Clock, title: 'Training Days', desc: 'Timed meal service that fits around session schedules without disruption.' },
  { icon: Moon, title: 'Networking Events', desc: 'Standing cocktail receptions with passed canapés and grazing stations.' },
]

const MENU_FORMATS = [
  { name: 'Breakfast', desc: 'Continental, full English, Indonesian, or healthy wellness breakfast. From 6:30 AM.' },
  { name: 'Coffee Breaks', desc: 'Pastries, fruit, coffee, tea, and light snacks between sessions.' },
  { name: 'Lunch Boxes', desc: 'Individual packed lunches for working sessions or transport days.' },
  { name: 'Buffet Lunch', desc: 'Self-serve hot and cold buffet for 30+ guests. Efficient and varied.' },
  { name: 'Canapés', desc: 'Bite-sized starters for cocktail receptions and pre-dinner mingling.' },
  { name: 'Plated Dinner', desc: 'Multi-course restaurant-style service for formal evenings.' },
  { name: 'Grazing Tables', desc: 'Styled charcuterie, cheese, and fruit for relaxed networking.' },
  { name: 'BBQ', desc: 'Live-fire grilling for casual team dinners and outdoor events.' },
  { name: 'Full-Day Catering', desc: 'Breakfast through dinner with snacks and hydration stations.' },
]

const FULL_DAY_STRUCTURE = [
  { time: '06:30–08:30', meal: 'Breakfast', desc: 'Continental or full breakfast to start the day.' },
  { time: '10:00–10:30', meal: 'Morning Coffee Break', desc: 'Coffee, tea, pastries, and fresh fruit.' },
  { time: '12:30–14:00', meal: 'Working Lunch', desc: 'Buffet or lunch boxes. Light enough to avoid afternoon slump.' },
  { time: '15:30–16:00', meal: 'Afternoon Snack', desc: 'Healthy snacks, smoothies, or sweet treats.' },
  { time: '18:30–21:00', meal: 'Dinner', desc: 'Buffet, plated, or BBQ depending on the event style.' },
  { time: 'All Day', meal: 'Hydration Station', desc: 'Water, infused water, coconut water, and herbal teas.' },
]

const SERVICE_STANDARDS = [
  { title: 'Arrival Timing', desc: 'Team arrives 2–3 hours before service. Setup complete before guests enter.' },
  { title: 'Staff Uniforms', desc: 'Professional black uniforms for service staff. Chef coats for kitchen team.' },
  { title: 'Food Labeling', desc: 'Every dish labeled with name and dietary markers (V, GF, NF, spicy).' },
  { title: 'Dietary Tracking', desc: 'Pre-event intake form collects all restrictions. Separate prep zones for allergens.' },
  { title: 'Quiet Service', desc: 'Staff trained to serve discreetly. No disruption to presentations or discussions.' },
  { title: 'Invoice Handling', desc: 'Formal tax invoices with detailed breakdowns. Net-14 terms for regular clients.' },
  { title: 'Event Planner Communication', desc: 'Dedicated point of contact from booking through post-event follow-up.' },
]

const DIETARY_OPTIONS = [
  'Vegetarian', 'Vegan', 'Gluten-free', 'Halal-sensitive',
  'Low-carb', 'High-protein', 'Wellness menus', 'Allergy-managed',
]

const CORP_ADDONS = [
  { icon: Wine, title: 'Bartenders & Cocktails', desc: 'Professional mixologists for receptions and dinners.' },
  { icon: Coffee, title: 'Coffee Station', desc: 'Barista-style coffee service with espresso, cappuccino, and cold brew.' },
  { icon: FileText, title: 'Branded Menu Cards', desc: 'Custom-printed menus with company logo and event branding.' },
  { icon: Utensils, title: 'Table Setup & Styling', desc: 'Linens, centerpieces, and professional table arrangements.' },
  { icon: Cookie, title: 'Cocktail Reception', desc: 'Passed canapés and drinks for pre-dinner networking.' },
  { icon: ChefHat, title: 'Speaker Dinner', desc: 'Private plated dinner for VIPs, speakers, and executives.' },
]

const FAQS = [
  { q: 'Can you invoice companies?', a: 'Yes. We provide full tax invoices (NPWP-registered) with detailed breakdowns of food costs, service charges, and applicable taxes. Net-14 payment terms available for regular corporate clients.' },
  { q: 'Can you handle multi-day events?', a: 'Absolutely. Multi-day offsites and conferences are a specialty. We assign a dedicated team and event manager who stays with your group for the full duration.' },
  { q: 'Do you serve in villas or venues?', a: 'Both. We cater at private villas, hotels, conference centers, co-working spaces, and outdoor venues across Bali. We coordinate with venue managers for kitchen access and logistics.' },
  { q: 'Can menus be branded?', a: 'Yes. We offer branded menu cards, custom signage, and themed presentation for product launches, company milestones, and branded events.' },
  { q: 'How far in advance should we book?', a: 'For corporate events, 2–4 weeks is ideal. For large conferences (100+ guests), 1–2 months helps us secure the best team and plan logistics.' },
  { q: 'Do you provide staff uniforms?', a: 'Yes. All service staff wear professional black uniforms. Kitchen teams wear chef coats. We can match specific dress codes on request.' },
  { q: 'What payment terms do you offer?', a: '50% deposit to confirm, balance due 7 days before the event. For regular corporate clients, we offer monthly billing and net-14 terms.' },
]

export default function CateringCorporatePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.corp-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.corp-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Corporate Catering Bali | Business Lunch & Event Catering"
        description="Corporate catering in Bali for team lunches, workshops, retreats, product launches, meetings, and company events with professional service."
        canonical={`${SITE}/catering/corporate-catering`}
        ogImage={`${SITE}/generated/mychef-events-bali-corporate-events.webp`}
        jsonLd={[
          localBusinessSchema,
          cateringServiceSchema('Corporate Catering Bali', 'Corporate catering in Bali for business lunches, workshops, offsites, launches, and executive dinners with reliable timing and professional presentation. myCHEF.id handles menu planning, staffing, invoicing, and service across Bali.', `${SITE}/catering/corporate-catering`),
          offerSchema('Board Dinner', 850000, 'IDR', `${SITE}/catering/corporate-catering`),
          offerSchema('Team Offsite Catering', 550000, 'IDR', `${SITE}/catering/corporate-catering`),
          offerSchema('Conference Catering', 450000, 'IDR', `${SITE}/catering/corporate-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 89),
          cateringBreadcrumbSchema('Corporate Catering Bali', `${SITE}/catering/corporate-catering`),
        ]}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-events-bali-corporate-events.webp"
            alt="Professional corporate event catering setup at Bali villa"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Corporate Catering Bali' }]} theme="dark" className="justify-center mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Corporate Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Catering Bali<br />
            <span className="italic">for Teams, Meetings, and Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Reliable catering for business lunches, workshops, retreats, company dinners, product launches, and executive gatherings across Bali.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            From IDR 450,000/person · Tax invoiced · Dedicated event manager · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-corporate-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Plan Corporate Catering
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              View Corporate Packages
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Tax invoices provided</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dedicated event manager</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> On-time, every time</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 2: CORPORATE CATERING IN BALI ═══════ */}
      <section className="corp-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — The Service"
            title="Corporate Catering in Bali"
            subtitle="Businesses do not want surprises. They want reliable timing, clean setup, clear communication, and professional presentation. Our corporate catering is built around operational discipline — because a delayed lunch or a missing dietary option can derail an entire event."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                We work with companies of all sizes — from 6-person board dinners to 200-delegate conferences. Every event gets a dedicated event manager who coordinates timing, dietary requirements, venue logistics, and post-event invoicing.
              </p>
              <p className="text-[#4A4745]">
                Our team arrives 2–3 hours before service, sets up quietly, and serves without disrupting presentations or discussions. After the event, we handle full cleanup and provide a detailed tax invoice within 48 hours.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Tax invoiced', 'Dedicated manager', 'On-time service', 'Dietary tracking', 'Multi-day capable', 'Venue coordination'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What Makes Our Corporate Catering Different</h3>
              <div className="space-y-3">
                {[
                  'Formal quotes within 24 hours — no chasing',
                  'Dedicated event manager for every booking',
                  'Full tax invoices (NPWP-registered)',
                  'Pre-event dietary intake and tracking',
                  'Quiet, professional service staff',
                  'Multi-day offsite teams available',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: EVENTS WE SUPPORT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — Events"
            title="Events We Support"
            subtitle="From intimate board dinners to large-scale conferences — we have catered every type of corporate event in Bali."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {EVENTS_SUPPORTED.map((event) => (
              <div key={event.title} className="corp-reveal bg-[#FAFAF8] rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <event.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-sm text-[#4A4745]">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: MENU FORMATS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — Menus"
            title="Menu Formats"
            subtitle="Nine service formats, mixable across a single event. Breakfast, breaks, lunch, dinner, and everything in between."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {MENU_FORMATS.map((menu) => (
              <div key={menu.name} className="corp-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1 text-[#C5A028]">{menu.name}</h3>
                <p className="text-sm text-[#4A4745]">{menu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: WHY FOOD AFFECTS EVENT PERFORMANCE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 5 — Performance"
            title="Why Food Affects Event Performance"
            subtitle="Heavy or poorly timed food kills energy. Light, balanced meals keep focus sharp. We design corporate menus around your schedule — not the other way around."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                A heavy lunch at 1 PM means a dead room by 2:30. We design working lunches that are satisfying but not sedating — lighter proteins, more vegetables, less refined starch. The goal is sustained energy through the afternoon session.
              </p>
              <p className="text-[#4A4745]">
                For retreats, we match food to the activity schedule. Light breakfast before yoga. Stronger protein after training. Clean lunch before workshops. Comfort food at dinner when the workday is done.
              </p>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Corporate Menu Principles</h3>
              <div className="space-y-3">
                {[
                  'Light lunches before afternoon sessions',
                  'Protein-forward breakfasts for energy',
                  'Balanced macros — not just carbs',
                  'Hydration stations throughout the day',
                  'Coffee breaks timed around energy dips',
                  'Evening meals that reward, not overwhelm',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: FULL-DAY CATERING STRUCTURE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Schedule"
            title="Full-Day Catering Structure"
            subtitle="A typical corporate offsite or conference day, mapped to food service. Every meal is timed to support the event flow."
          />
          <div className="space-y-4 mt-10">
            {FULL_DAY_STRUCTURE.map((item, i) => (
              <div key={i} className="corp-reveal flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-xl border border-[#E8E6E3] p-5">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-sm font-semibold text-[#C5A028]">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.meal}</h3>
                  <p className="text-sm text-[#4A4745]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: PROFESSIONAL SERVICE STANDARDS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Standards"
            title="Professional Service Standards"
            subtitle="Corporate clients expect consistency. Our service standards ensure every event runs smoothly — from arrival to final invoice."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {SERVICE_STANDARDS.map((item) => (
              <div key={item.title} className="corp-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: PACKAGES + PRICING ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Packages"
            title="Corporate Catering Packages"
            subtitle="Scalable solutions for every type of corporate event. Tax invoiced. Dedicated manager."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {CORP_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="corp-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <div className="mb-1">
                  <AllInPrice price={pkg.price} />
                </div>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.format.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#4A4745]/70 mb-4">Best for: {pkg.bestFor}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-corporate-cta" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
                  <Calendar className="w-4 h-4" /> Request Corporate Quote
                </a>
              </div>
            ))}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={850000} minGuests={6} maxGuests={20} defaultGuests={12} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={550000} minGuests={15} maxGuests={80} defaultGuests={30} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={450000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
          </div>
          <TaxFooter className="mt-6" />
        </div>
      </section>

      {/* ═══════ SECTION 9: DIETARY MANAGEMENT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Dietary Management</h2>
          <p className="text-[#4A4745] mb-6">
            Mixed dietary needs are standard in corporate groups. We collect restrictions in advance, label every dish, and maintain separate prep zones for allergens.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {DIETARY_OPTIONS.map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: CORPORATE ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 9 — Add-Ons"
            title="Corporate Add-Ons"
            subtitle="Elevate your corporate event with bartenders, coffee stations, branded materials, and more."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {CORP_ADDONS.map((addon) => (
              <div key={addon.title} className="corp-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <addon.icon className="w-6 h-6 text-[#C5A028] mb-2" />
                <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
                <p className="text-sm text-[#4A4745]">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Tech Startup Team', location: 'Canggu Offsite', quote: 'Multi-day catering for 35 people. Breakfast, lunch, and dinner for 3 days. The team was professional, food was excellent, and invoicing was seamless.', rating: 5 },
          { name: 'Investment Firm', location: 'Seminyak Board Dinner', quote: 'Board dinner for 12. The chef created a custom menu that impressed our investors. Service was discreet and professional. Will use again.', rating: 5 },
          { name: 'Conference Organizer', location: 'Nusa Dua Conference', quote: 'Catering for 120 delegates over 2 days. Coffee breaks, working lunches, and gala dinner. Everything ran on time and the food was outstanding.', rating: 5 },
        ]}
        title="What Corporate Clients Say"
        subtitle="Real reviews from corporate events across Bali."
      />

      {/* ═══════ SECTION 12: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Chapter 10 — FAQ" title="Corporate Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 13: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-corporate-events.webp" alt="Corporate event catering at Bali villa" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Corporate Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plan Your Corporate Event
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your event date, company size, schedule, venue, dietary needs, and budget. We will respond with a custom proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-corporate-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Plan Corporate Catering
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Phone className="w-4 h-4" /> Call +62 822-3756-5997
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 24h proposal turnaround</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Tax invoiced</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 14: INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-6 font-semibold">Explore More Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/fine-dining" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <h4 className="font-semibold text-sm mb-1">Fine Dining</h4>
              <p className="text-xs text-[#4A4745]">7–11 course tasting menus in your villa</p>
            </Link>
            <Link to="/catering/villa-catering" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <h4 className="font-semibold text-sm mb-1">Villa Catering</h4>
              <p className="text-xs text-[#4A4745]">Full-service catering for villa groups</p>
            </Link>
            <Link to="/events" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <h4 className="font-semibold text-sm mb-1">Events</h4>
              <p className="text-xs text-[#4A4745]">Weddings, birthdays, corporate events</p>
            </Link>
            <Link to="/contact" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <h4 className="font-semibold text-sm mb-1">Contact</h4>
              <p className="text-xs text-[#4A4745]">Speak to our team directly</p>
            </Link>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
