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
  cateringBreadcrumbSchema,
  serviceWithOfferSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'corporate catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'

/* ── DATA ── */

const CORP_PACKAGES = [
  {
    title: 'Working Lunch & Office Catering',
    price: 700000,
    people: '10 to 60 guests',
    format: ['Hot and cold buffets, lunch boxes or sharing platters', 'Lighter proteins, more vegetables, less refined starch', 'Dietary-labelled dishes', 'Professional service staff', 'Full cleanup'],
    bestFor: 'Team lunches, training days, workshop breaks, regular office catering',
  },
  {
    title: 'Conference Day Catering',
    price: 700000,
    people: '30 to 200 delegates',
    format: ['Breakfast, two coffee breaks, working lunch, afternoon snack', 'All-day hydration station', 'Timed to your agenda blocks', 'Professional service staff', 'Full cleanup'],
    bestFor: 'Conferences, seminars, product launches, corporate events',
  },
  {
    title: 'Boardroom & Executive Dinner',
    price: 850000,
    people: '6 to 20 guests',
    format: ['Canapés', 'Three-course plated dinner', 'Wine pairing', 'Discreet, dedicated service', 'Full cleanup'],
    bestFor: 'Investor meetings, board retreats, C-suite entertaining',
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
  { q: 'What does corporate catering in Bali cost?', a: 'Three per-person tiers: Standard IDR 700,000, Premium IDR 750,000 and Luxury IDR 1,200,000, all ++ (11% government tax + 10% service charge). Minimum spend is IDR 7,500,000. Your quote is fixed and itemised before you commit.' },
  { q: 'What does "++" mean on your quotes?', a: 'It means 11% government tax and 10% service charge are added on top of the listed price. IDR 700,000++ works out to approximately IDR 847,000 per person all-in. We always show both figures.' },
  { q: 'Can you invoice our company properly?', a: 'Yes. We are NPWP-registered and issue full tax invoices with itemised breakdowns. Net-14 terms are available for regular corporate clients.' },
  { q: 'How do you handle halal, vegan, gluten-free and allergy requirements across a large group?', a: 'Through a pre-event dietary intake form, a kitchen briefing against the actual guest list, labelled dishes, and separate prep zones for allergens. Dietary guests are integrated into the main service, not singled out.' },
  { q: 'What deposit is required?', a: 'A 50% deposit confirms your date and team; the balance is due 7 days before the event.' },
  { q: 'How far in advance should we book?', a: 'Two to four weeks is ideal for most corporate catering. For conferences of 100+ guests, one to two months secures the best team and logistics.' },
  { q: 'Do you cater at offices and venues, or only villas?', a: 'All three — offices, villas, co-working spaces, hotels and conference venues, Bali-wide. For recurring office lunches, also see our <a href="/catering/drop-off-catering">drop-off catering for office lunches</a>.' },
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
        title="Corporate Catering Bali | Boardroom to Conference | myCHEF"
        description="Corporate catering in Bali for offsites, boardroom dinners & conferences. Tax invoices (NPWP), executive service, dietary-exact menus. WhatsApp myCHEF."
        canonical={`${SITE}/catering/corporate-catering`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-corporate.webp`}
        jsonLd={[
          serviceWithOfferSchema({
            name: 'Corporate Catering Bali',
            description: 'Corporate catering in Bali for working lunches, office events, boardroom dinners and conference days. NPWP-registered tax invoices, dedicated event manager, dietary management at scale.',
            url: `${SITE}/catering/corporate-catering`,
            price: '700000',
            unitText: 'per person, before 11% government tax + 10% service charge',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          cateringBreadcrumbSchema('Corporate Catering Bali', `${SITE}/catering/corporate-catering`),
        ]}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-corporate.webp"
            alt="Professional corporate event catering setup at a Bali villa"
            width={1920}
            height={1280}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
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
            <span className="italic">— The Catering Line for Teams, Meetings & Conferences</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Reliable, tax-invoiced corporate catering in Bali for working lunches, office events, boardroom dinners and conference days. One dedicated event manager, one fixed per-person price, one clean invoice.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            From IDR 700,000++/person · Minimum spend IDR 7,500,000 · NPWP-registered tax invoices · Dedicated event manager · Bali-wide
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
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> HACCP certified kitchen</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> On-time, every time</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ CORPORATE TRUST STRIP ═══════ */}
      <section className="py-8 px-6 bg-white border-b border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-xs text-[#4A4745]/80 uppercase tracking-widest mb-6">Trusted by teams from</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[#4A4745]/40">
            {['Microsoft', 'Google', 'Airbnb', 'GoTo', 'Shopee', 'Bukalapak', 'Traveloka', 'BCA', 'Mandiri'].map((company) => (
              <span key={company} className="text-sm font-semibold tracking-wide">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1.5: OUR CHEFS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_1fr] gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/generated/mychef-catering-bali-corporate-chef.webp"
                alt="Professional Indonesian executive chef at myCHEF"
                width={600}
                height={800}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C5A028] text-black px-4 py-2 rounded-full text-xs font-bold tracking-wide">
              Chef-Led Service
            </div>
          </div>
          <div>
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Chapter 1.5 — The Team
            </p>
            <h2 className="text-2xl md:text-3xl leading-[1.1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Indonesian Chefs, World-Class Standards
            </h2>
            <p className="text-[#4A4745] mb-4">
              Our chefs combine authentic Indonesian culinary heritage with international fine-dining standards. Every corporate event is led by a senior chef who understands dietary requirements, timing, and professional presentation.
            </p>
            <p className="text-[#4A4745] mb-6">
              With experience serving at Michelin-starred restaurants and luxury resorts across Southeast Asia, our team delivers restaurant-quality service directly to your venue — whether it's a villa, hotel, or conference center.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Michelin-trained', '500+ events', 'NPWP registered', 'Bali-wide', 'Multi-lingual'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                We cater for companies of all sizes — from six-person board dinners to 200-delegate conferences — at private villas, offices, co-working spaces, hotels and conference venues across Bali. Every event gets a dedicated event manager who coordinates timing, dietary requirements, venue logistics, and post-event invoicing.
              </p>
              <p className="text-[#4A4745]">
                Our team arrives 2–3 hours before service, sets up quietly, and serves without disrupting presentations or discussions. After the event, we handle full cleanup and provide a detailed tax invoice within 48 hours.
              </p>
              <p className="text-[#4A4745]">
                Need AV, staging, branded builds or a full event producer on top of the food? That is our{' '}
                <Link to="/events/corporate-events" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">full corporate event production in Bali</Link>.{' '}
                Planning a multi-day offsite with every meal covered? See{' '}
                <Link to="/corporate-retreat-catering-bali" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">multi-day corporate retreat catering</Link>.
              </p>
              <p className="text-[#4A4745]">
                Curious how this works on real briefs? Our{' '}
                <Link to="/corporate-case-studies" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">real corporate events, headcounts and outcomes</Link>{' '}
                walk through actual menus and results.
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

      {/* ═══════ SECTION 4.5: GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title="Corporate Catering in Action"
            subtitle="Real moments from our corporate events across Bali."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              '/generated/mychef-catering-bali-corporate-gallery-conference.webp',
              '/generated/mychef-catering-bali-corporate-gallery-plated.webp',
              '/generated/mychef-catering-bali-corporate-gallery-team.webp',
              '/generated/mychef-catering-bali-corporate-gallery-networking.webp',
            ].map((src, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img
                  src={src}
                  alt={`Corporate catering setup ${i + 1} at a Bali villa event by myCHEF`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={i === 0 ? 800 : 400}
                  height={i === 0 ? 800 : 300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: WHY FOOD AFFECTS EVENT PERFORMANCE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
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
          <p className="text-[#4A4745] text-center max-w-2xl mx-auto -mt-4 mb-8">
            All packages include menu planning, fresh ingredient shopping, cooking, professional service staff, setup and full cleanup. Prices are per person and subject to 11% government tax + 10% service charge (++). See our{' '}
            <Link to="/pricing" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">transparent per-person pricing</Link>.{' '}
            Minimum spend IDR 7,500,000.
          </p>
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
                <p className="text-xs text-[#4A4745]/80 mb-4">Best for: {pkg.bestFor}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-corporate-cta" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
                  <Calendar className="w-4 h-4" /> Request Corporate Quote
                </a>
              </div>
            ))}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={700000} minGuests={10} maxGuests={60} defaultGuests={30} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={700000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={850000} minGuests={6} maxGuests={20} defaultGuests={12} accent="#C5A028" />
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
          <p className="text-[#4A4745] text-center max-w-2xl mx-auto -mt-4 mb-8">
            Need extra front-of-house support? Add{' '}
            <Link to="/in-villa-service" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">waiters, bartenders and event staff</Link>{' '}
            to any corporate package.
          </p>
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

      <StaffingInfo />
      <BookingProcess />

      <CateringDiscoverySection page="corporate" />

      {/* ═══════ SECTION 13: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-catering-bali-hero-corporate.webp" alt="Corporate event catering setup at a Bali villa by myCHEF" className="w-full h-full object-cover" loading="lazy" />
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
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Phone className="w-4 h-4" /> Call +62 896-7407-2020
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 24h proposal turnaround</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Tax invoiced</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="catering-corporate"
        serviceName="corporate catering in Bali"
        intent="corporate catering packages and pricing"
      />
    </div>
  )
}