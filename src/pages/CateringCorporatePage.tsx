import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Calendar, Users, Utensils, Briefcase, ChefHat, Clock, FileText, Coffee, Wine, Sun, Moon, Cookie } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { ArticleContentSection, Breadcrumb, PressStrip, AllInPrice, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'corporate catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'

/* ── DATA ── */

const CORP_PACKAGES = [
  {
    title: 'Working Lunch & Office Catering',
    price: null,
    people: '10 to 60 guests',
    format: ['Hot and cold buffets, lunch boxes or sharing platters', 'Lighter proteins, more vegetables, less refined starch', 'Dietary-labelled dishes', 'Professional service staff', 'Full cleanup'],
    bestFor: 'Team lunches, training days, workshop breaks, regular office catering',
  },
  {
    title: 'Conference Day Catering',
    price: null,
    people: '30 to 200 delegates',
    format: ['Breakfast, two coffee breaks, working lunch, afternoon snack', 'All-day hydration station', 'Timed to your agenda blocks', 'Professional service staff', 'Full cleanup'],
    bestFor: 'Conferences, seminars, product launches, corporate events',
  },
  {
    title: 'Boardroom & Executive Dinner',
    price: null,
    people: '6 to 20 guests',
    format: ['Canapés', 'Three-course plated dinner', 'Wine pairing', 'Discreet, dedicated service', 'Full cleanup'],
    bestFor: 'Investor meetings, board retreats, C-suite entertaining',
  },
]

const EVENT_GROUPS = [
  {
    group: 'Meetings & Working Sessions',
    items: [
      { icon: Briefcase, title: 'Board Meetings', desc: 'Discreet catering for boardrooms — coffee, working lunches, and plated dinners.' },
      { icon: Clock, title: 'Workshops & Training Days', desc: 'Timed meal service that fits around session schedules without disruption.' },
      { icon: Coffee, title: 'Strategy Sessions', desc: 'Executive breakfasts, working lunches, and coffee service for focused days.' },
    ],
  },
  {
    group: 'Company Events',
    items: [
      { icon: Users, title: 'Team Offsites & Anniversaries', desc: 'Staff celebrations, award dinners, and company milestones fully catered.' },
      { icon: Wine, title: 'Networking Receptions', desc: 'Standing cocktail receptions with passed canapés and grazing stations.' },
      { icon: Sun, title: 'Product Launches', desc: 'Canapé receptions, branded menus, and cocktail service for press and partners.' },
    ],
  },
  {
    group: 'Large & Multi-Day Programs',
    items: [
      { icon: ChefHat, title: 'Conferences', desc: 'Coffee breaks, working lunches, and gala dinners for 50–200 delegates.' },
      { icon: Moon, title: 'Corporate Retreats & Incentive Travel', desc: 'Multi-day programs with breakfast, lunch, dinner, and snacks across the stay.' },
      { icon: Utensils, title: 'Brand Activations & Gatherings', desc: 'Leadership programs, brand activations, and multi-day corporate gatherings.' },
    ],
  },
]

const MENU_FORMAT_GROUPS = [
  {
    group: 'Meetings & Working Days',
    items: [
      { name: 'Executive Breakfast', desc: 'Continental, full English, Indonesian, or healthy wellness breakfast. From 6:30 AM.' },
      { name: 'Coffee Breaks', desc: 'Pastries, fruit, coffee, tea, and light snacks between sessions.' },
      { name: 'Packed Lunch Boxes', desc: 'Individual packed lunches for working sessions or transport days.' },
      { name: 'Working Lunch Buffet', desc: 'Self-serve hot and cold buffet for 30+ guests. Efficient and varied.' },
      { name: 'Afternoon Snacks & Hydration', desc: 'Healthy snacks, smoothies, infused water, and hydration stations.' },
    ],
  },
  {
    group: 'Networking & Receptions',
    items: [
      { name: 'Canapés', desc: 'Bite-sized starters for cocktail receptions and pre-dinner mingling.' },
      { name: 'Grazing Tables', desc: 'Styled charcuterie, cheese, and fruit for relaxed networking.' },
      { name: 'Cocktail & Live Stations', desc: 'Branded displays, live cooking stations, and bar service.' },
    ],
  },
  {
    group: 'Dinners & Celebrations',
    items: [
      { name: 'Plated Dinner', desc: 'Multi-course restaurant-style service for formal evenings.' },
      { name: 'Family-Style & Premium Buffet', desc: 'Generous shared dining for celebrations and gala evenings.' },
      { name: 'BBQ', desc: 'Live-fire grilling for casual team dinners and outdoor events.' },
    ],
  },
  {
    group: 'Multi-Day Programs',
    items: [
      { name: 'Full-Day Catering', desc: 'Breakfast through dinner with snacks and hydration stations, across multiple days.' },
    ],
  },
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
  { title: 'Dietary Tracking', desc: 'Pre-event intake form collects all restrictions. Dishes clearly labelled; reasonable separation procedures during preparation.' },
  { title: 'Quiet Service', desc: 'Staff trained to serve discreetly. No disruption to presentations or discussions.' },
  { title: 'Invoice Handling', desc: 'Formal tax invoices with detailed breakdowns. Approved recurring corporate accounts may qualify for alternative payment terms subject to written agreement.' },
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

const QUOTE_FACTORS = [
  'Event type and schedule',
  'Number of guests',
  'Number of service periods',
  'Menu level and format',
  'Venue and kitchen facilities',
  'Staffing level and duration',
  'Equipment and tableware',
  'Dietary requirements',
  'Branding and styling',
  'Transport and location',
  'Setup and breakdown scope',
]

const COORDINATION_ITEMS = [
  'Catering menus and menu planning',
  'Chefs and professional service staff',
  'Bartenders and beverage service',
  'Coffee and refreshment stations',
  'Tableware and service equipment',
  'Service timing around your agenda',
  'Dietary management and labelling',
  'Venue kitchen coordination',
  'Setup, service, and full breakdown',
]

const CASE_STUDIES = [
  {
    title: 'Technology Conference — Nusa Dua',
    scope: ['120 delegates over 2 days', 'Coffee breaks, working lunches, and gala dinner', 'Agenda-timed service across multiple rooms'],
    result: 'Every service ran on schedule and the client rebooked for the following year.',
  },
  {
    title: 'Company Offsite — Canggu',
    scope: ['35 guests over 3 days', 'Breakfast, lunch, dinner, and snacks', 'Vegan, gluten-free, and halal-sensitive requirements managed'],
    result: 'All dietary needs were labelled and served correctly; invoicing was seamless.',
  },
  {
    title: 'Executive Board Dinner — Seminyak',
    scope: ['12 guests, single evening', 'Custom multi-course plated menu', 'Discreet, dedicated service team'],
    result: 'The menu impressed visiting investors; the firm now books recurring dinners.',
  },
]

const PROPOSAL_CHECKLIST = [
  'Company name', 'Event date', 'Venue and area', 'Guest count',
  'Event schedule', 'Service periods needed', 'Preferred menu format', 'Dietary requirements',
  'Beverage needs', 'Venue equipment available', 'Staffing requirements', 'Branding or styling needs',
  'Indicative budget', 'Invoice details', 'Decision deadline',
]

const FAQS = [
  { q: 'How much does corporate catering cost in Bali?', a: 'Corporate catering is quoted per event based on guest count, menu format, service periods, staffing, and venue logistics. A minimum corporate booking of IDR 15,000,000 applies, subject to event scope and location. Every quotation shows the applicable service charge and government tax clearly.' },
  { q: 'What does "++" mean on your quotes?', a: 'It means 11% government tax and 10% service charge are added on top of the quoted price. Your formal proposal states the full total including tax and service clearly before you commit.' },
  { q: 'Do you provide invoices / NPWP for corporate catering?', a: 'Yes. We are NPWP-registered and issue formal tax invoices with itemised breakdowns. A deposit is required to confirm the booking, with the balance normally due before the event. Approved recurring corporate accounts may qualify for alternative payment terms subject to written agreement.' },
  { q: 'How do you handle dietary requirements for large corporate groups?', a: 'Dietary requirements are collected with RSVPs through a structured intake process, dishes are labelled on the day, and we follow reasonable separation procedures during preparation. We cannot guarantee a completely allergen-free environment, so guests with serious allergies should provide full written requirements in advance.' },
  { q: 'What is the deposit and payment schedule?', a: 'A 50% deposit confirms the booking and locks your date and chef team. The remaining balance is due the day before the event. Approved recurring corporate accounts may qualify for alternative payment terms subject to written agreement.' },
  { q: 'How far in advance should we book corporate catering?', a: 'Two to four weeks is ideal for most corporate catering. For conferences of 100+ guests, one to two months secures the best team and logistics.' },
  { q: 'Do you cater at offices and venues, or only villas?', a: 'All three — offices, villas, co-working spaces, hotels and conference venues, Bali-wide. For recurring office lunches, see our drop-off catering service.' },
  { q: 'Can you do last-minute corporate catering?', a: 'Small-group corporate orders are often possible within 24–48 hours. Larger productions need a few days to a week, with a dedicated event manager assigned.' },
  { q: 'How much does catering in Bali cost?', a: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { q: 'What formats do you offer?', a: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { q: 'Is catering the same as private chef hire?', a: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { q: 'Do prices include staff and cleanup?', a: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { q: 'Can you cook in an Airbnb villa?', a: 'Yes with a workable kitchen — share the listing when booking.' },
  { q: 'Minimum guest counts?', a: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { q: 'Can menus be customised?', a: 'Yes — proteins, spice, diets locked before shopping.' },
  { q: 'Travel fees?', a: 'Remote areas may add a fee quoted upfront.' },
  { q: 'Can we add a mobile cocktail bar?', a: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { q: 'Kids and allergies?', a: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { q: 'How do I book catering?', a: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { q: 'Rain plan?', a: 'Covered setups and indoor pivots planned ahead.' },
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
        title="Corporate Catering Bali | Meetings, Conferences & Company Events"
        description="Corporate catering in Bali for meetings, conferences, offsites and company events. Formal written proposals, NPWP tax invoices, dietary management at scale. Request a corporate proposal from myCHEF."
        canonical={`${SITE}/catering/corporate-catering`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-corporate.webp`}
        jsonLd={[
          serviceSchema(
            'Corporate Catering Bali',
            'Corporate catering in Bali for meetings, conferences, offsites and company events. NPWP-registered tax invoices, dedicated coordination, dietary management at scale.',
            `${SITE}/catering/corporate-catering`,
            '$$$'
          ),
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
            Corporate Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Catering Bali<br />
            <span className="italic">for Meetings, Offsites and Company Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Professional corporate catering in Bali with dedicated coordination, customized menus, dietary management, and full staffing — from setup and service to complete breakdown. Every event begins with a tailored written proposal.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            Custom corporate quotations · Minimum booking IDR 15,000,000 · NPWP tax invoices · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-corporate-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Request a Corporate Proposal
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              View Corporate Catering Options
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Tax invoices provided</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dedicated event manager</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Formal written proposals</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dietary management at scale</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ CORPORATE TRUST STRIP ═══════ */}
      <section className="py-8 px-6 bg-white border-b border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-sm text-[#4A4745]/80">
            Experience supporting international companies, executive groups, retreat organizers, agencies, and conference teams in Bali.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION: OUR CHEFS ═══════ */}
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
              The Team
            </p>
            <h2 className="text-2xl md:text-3xl leading-[1.1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Indonesian Chefs, World-Class Standards
            </h2>
            <p className="text-[#4A4745] mb-4">
              Our chefs combine authentic Indonesian culinary heritage with international fine-dining standards. Every corporate event is led by a senior chef who understands dietary requirements, timing, and professional presentation.
            </p>
            <p className="text-[#4A4745] mb-6">
              With experience in international luxury hotels and fine-dining kitchens across Southeast Asia, our team delivers restaurant-quality service directly to your venue — whether it's a villa, hotel, or conference center.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Fine-dining experienced', 'NPWP registered', 'Bali-wide', 'Multi-lingual', 'Dietary trained'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CORPORATE CATERING IN BALI ═══════ */}
      <section className="corp-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="The Service"
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
                For recurring office lunches and smaller team meals without full service, see our{' '}
                <Link to="/catering/drop-off-catering" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">drop-off catering for office lunches</Link>.
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

      {/* ═══════ SECTION: EVENTS WE SUPPORT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Corporate Events"
            title="Events We Support"
            subtitle="From intimate board meetings to large-scale conferences and multi-day programs — we cater every type of corporate event in Bali."
          />
          {EVENT_GROUPS.map((group) => (
            <div key={group.group} className="mt-10">
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{group.group}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((event) => (
                  <div key={event.title} className="corp-reveal bg-[#FAFAF8] rounded-xl p-5">
                    <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mb-3">
                      <event.icon className="w-5 h-5 text-[#C5A028]" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                    <p className="text-sm text-[#4A4745]">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SECTION: MENU FORMATS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Catering Formats"
            title="Menu Formats for Every Corporate Purpose"
            subtitle="Formats grouped by event purpose, mixable across a single event. Breakfast, breaks, lunch, dinner, and everything in between."
          />
          {MENU_FORMAT_GROUPS.map((group) => (
            <div key={group.group} className="mt-10">
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{group.group}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((menu) => (
                  <div key={menu.name} className="corp-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                    <h4 className="font-semibold text-sm mb-1 text-[#C5A028]">{menu.name}</h4>
                    <p className="text-sm text-[#4A4745]">{menu.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SECTION: GALLERY ═══════ */}
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
          <p className="mt-8 text-center text-[#4A4745] text-sm md:text-base">
            See the numbers behind these events:{' '}
            <Link to="/blog/corporate-catering-bali-case-studies" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">three real corporate catering case studies</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION: WHY FOOD AFFECTS EVENT PERFORMANCE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Menu Planning"
            title="Why Food Affects Event Performance"
            subtitle="Heavy or poorly timed food reduces energy. Light, balanced meals keep focus sharp. We design corporate menus around your schedule — not the other way around."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                Heavy meals can reduce afternoon energy and concentration. For working sessions, we recommend balanced lunches with lean proteins, vegetables, fresh sides, and controlled portions — satisfying but not sedating, so focus holds through the afternoon.
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

      {/* ═══════ SECTION: FULL-DAY CATERING STRUCTURE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Full-Day Programs"
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

      {/* ═══════ SECTION: PROFESSIONAL SERVICE STANDARDS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Service Standards"
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

      {/* ═══════ SECTION: PRICING ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Pricing"
            title="Corporate Catering Packages"
            subtitle="Scalable solutions for every type of corporate event. Tax invoiced. Dedicated manager."
          />
          <p className="text-[#4A4745] text-center max-w-2xl mx-auto -mt-4 mb-4">
            All packages include menu planning, fresh ingredient shopping, cooking, professional service staff, setup and full cleanup. Every package is quoted individually based on group size, menu style and venue logistics.
          </p>
          <p className="text-[#1A1A1A] font-semibold text-center max-w-2xl mx-auto mb-8">
            Minimum corporate booking: IDR 15,000,000, subject to event scope and location.
          </p>
          <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-3xl mx-auto mb-10">
            <h3 className="font-semibold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>What Determines the Quotation?</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {QUOTE_FACTORS.map((factor) => (
                <div key={factor} className="flex items-start gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {factor}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4745]/80 text-center mt-6">
              Prices are subject to the applicable service charge and government tax, as shown clearly in your quotation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {CORP_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="corp-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <div className="mb-1">
                  {pkg.price ? <AllInPrice price={pkg.price} /> : <span className="text-[#1A1A1A] font-semibold">Tailored quote</span>}
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

          <p className="text-sm text-[#4A4745]/80 text-center mt-6">
            Looking for published per-person menu rates? See our{' '}
            <Link to="/pricing" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">transparent per-person pricing</Link>.
          </p>

          <TaxFooter className="mt-6" />
        </div>
      </section>

      {/* ═══════ SECTION: CORPORATE PROCUREMENT AND INVOICING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Procurement"
            title="Corporate Procurement and Invoicing"
            subtitle="We work the way corporate procurement teams expect — formal documentation, clear breakdowns, and a single point of contact."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What We Provide</h3>
              <div className="space-y-3">
                {[
                  'Formal written proposals for every event',
                  'Detailed cost breakdowns by category',
                  'Company invoice information and NPWP tax invoices',
                  'Purchase-order references on all documentation',
                  'Vendor onboarding documents on request',
                  'Event contracts for larger programs',
                  'A single point of contact throughout',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Payment Terms</h3>
              <p className="text-sm text-[#4A4745] mb-4">
                A deposit is required to confirm the booking. The remaining balance is normally due before the event.
              </p>
              <p className="text-sm text-[#4A4745]">
                Approved recurring corporate accounts may qualify for alternative payment terms subject to written agreement. Payment schedules for multi-day programs are set out clearly in the proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: WHAT WE CAN COORDINATE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Coordination"
            title="What We Can Coordinate"
            subtitle="One catering partner for the full food and beverage scope of your corporate event."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {COORDINATION_ITEMS.map((item) => (
              <div key={item} className="corp-reveal flex items-start gap-2 bg-white rounded-xl border border-[#E8E6E3] p-5 text-sm text-[#4A4745]">
                <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
              </div>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-2xl mx-auto mt-8">
            Entertainment, production, furniture, decoration, transport, and venue sourcing can be coordinated separately where required — see our{' '}
            <Link to="/events/corporate-events" className="text-[#C5A028] underline underline-offset-2 hover:text-[#2C5F7C] transition-colors">corporate event production in Bali</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION: DIETARY MANAGEMENT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Dietary Management</h2>
          <p className="text-[#4A4745] mb-6">
            Mixed dietary needs are standard in corporate groups. We collect restrictions in advance, label every dish, and follow reasonable separation procedures during preparation. We cannot guarantee a completely allergen-free environment.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {DIETARY_OPTIONS.map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CORPORATE ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Add-Ons"
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

      {/* ═══════ SECTION: CORPORATE CASE STUDIES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Case Studies"
            title="Corporate Case Studies"
            subtitle="Recent corporate events we have catered across Bali."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="corp-reveal bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 flex flex-col">
                <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{cs.title}</h3>
                <ul className="space-y-2 mb-4 flex-1">
                  {cs.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[#4A4745]/80"><span className="font-semibold text-[#1A1A1A]">Result:</span> {cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Corporate Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={5} showToc ctaEvery={5} />
        </div>
      </section>

      <PressStrip />

      <StaffingInfo />
      <BookingProcess />

      <CateringDiscoverySection page="corporate" />

      {/* ═══════ SECTION: FINAL CTA ═══════ */}
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
            Send your event details and we will respond with a formal written proposal within 24 hours.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-white font-semibold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Information Needed for a Corporate Proposal</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {PROPOSAL_CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/[80%]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-corporate-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Request a Corporate Proposal
            </a>
            <a href="https://wa.me/6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896-7407-2020
            </a>
          </div>
          <p className="mt-6 text-white/[60%] text-sm">
            Prefer email? <a href="mailto:bali@mychef.id" className="text-[#C5A028] underline underline-offset-2 hover:text-[#D4B43A] transition-colors">bali@mychef.id</a>
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 24h proposal turnaround</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Tax invoiced</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Formal written proposals</span>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="catering-corporate"
        serviceName="corporate catering in Bali"
        intent="corporate catering packages and pricing"
      />
    </div>
  )
}
