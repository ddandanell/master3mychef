import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users,
  ChefHat, ShieldCheck, Sparkles,
  Heart, Utensils, Moon, Wind,
  ClipboardList, Zap, ShoppingBag, Trash2, Home,
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

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20retreat%20catering%20quote%20for%20my%20Bali%20retreat.'
const SITE = 'https://mychef.id'

const GOLD = '#C5A028'

/* ── DATA ── */

const RETREAT_PACKAGES = [
  {
    title: 'Yoga Retreat Catering',
    price: 400000,
    people: '10 to 40 people',
    format: ['Plant-forward meals', 'Ayurvedic options', 'Gluten-free', 'No refined sugar', 'Herbal teas'],
    bestFor: 'Yoga retreats, wellness centers, meditation groups, holistic retreats',
  },
  {
    title: 'Wellness Retreat Catering',
    price: 450000,
    people: '10 to 60 people',
    format: ['Balanced macros', 'Anti-inflammatory', 'Organic where possible', 'Cold-pressed juices', 'Superfood options'],
    bestFor: 'Detox retreats, spa resorts, health-focused groups, fitness retreats',
  },
  {
    title: 'Corporate Retreat Catering',
    price: 500000,
    people: '15 to 100 people',
    format: ['Full board (3 meals)', 'Coffee breaks', 'Working lunch', 'BBQ night', 'Flexible timing'],
    bestFor: 'Team offsites, leadership retreats, company getaways, strategy sessions',
  },
]

const RETREAT_TYPES = [
  { icon: Wind, title: 'Yoga Retreats', desc: 'Light, plant-based meals timed around morning and evening practice sessions.' },
  { icon: Heart, title: 'Wellness Retreats', desc: 'Anti-inflammatory menus, detox-friendly options, and restorative nutrition.' },
  { icon: BriefcaseIcon, title: 'Business Retreats', desc: 'Full-board catering for strategy offsites with working lunches and group dinners.' },
  { icon: Users, title: "Women's Retreats", desc: 'Nourishing, communal meals designed for connection and shared experience.' },
  { icon: Sparkles, title: 'Creative Workshops', desc: 'Brain-friendly menus with steady energy for long creative sessions.' },
  { icon: Zap, title: 'Fitness Retreats', desc: 'High-protein recovery meals, hydration support, and macro-balanced plates.' },
  { icon: Moon, title: 'Breathwork Retreats', desc: 'Gentle, grounding food that supports deep work without digestive distraction.' },
  { icon: Home, title: 'Villa Group Programs', desc: 'Private villa stays with full chef service for friends, families, or collectives.' },
]

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

const DAILY_MEALS = [
  { time: '07:00–09:00', meal: 'Breakfast', desc: 'Tropical fruit bowls, smoothie bowls, eggs, toast, granola, herbal tea, and fresh coffee.' },
  { time: '12:00–14:00', meal: 'Lunch', desc: 'Light, balanced plates — salads, grain bowls, grilled proteins, and fresh vegetables.' },
  { time: '18:00–20:00', meal: 'Dinner', desc: 'Comforting, nourishing dinners — curries, grilled fish, roasted vegetables, and rice.' },
  { time: 'All Day', meal: 'Snacks & Juices', desc: 'Fresh tropical fruit, raw nuts, energy balls, cold-pressed juices, and coconut water.' },
  { time: 'Morning & Evening', meal: 'Tea & Coffee', desc: 'Herbal infusions, Balinese coffee, and caffeine-free evening blends.' },
  { time: 'Post-Activity', meal: 'Recovery Food', desc: 'Hydration, electrolytes, light proteins, and cooling foods after yoga or training.' },
]

const MENU_DIRECTIONS = [
  { name: 'Plant-Forward', desc: 'Vegetables, legumes, and grains as the center of every plate.' },
  { name: 'Vegetarian', desc: 'Dairy and eggs included. No meat or fish.' },
  { name: 'Vegan', desc: '100% plant-based. No animal products whatsoever.' },
  { name: 'Gluten-Free', desc: 'Rice, quinoa, and root vegetables replace wheat and barley.' },
  { name: 'High-Protein', desc: 'Eggs, fish, tempeh, tofu, and lean meats for active groups.' },
  { name: 'Light Lunches', desc: 'Raw, steamed, and grilled preparations to avoid afternoon slump.' },
  { name: 'Balanced Dinners', desc: 'Satisfying but not heavy. Supports sleep and recovery.' },
  { name: 'Tropical Fruit', desc: 'Papaya, dragon fruit, mango, passion fruit, and local bananas.' },
  { name: 'Indonesian Flavors', desc: 'Balinese spice pastes, sambal, coconut, lemongrass, and turmeric.' },
  { name: 'Mediterranean', desc: 'Olive oil, fresh herbs, grilled fish, and vegetable-forward plates.' },
]

const DIETARY_INTAKE_STEPS = [
  { step: '01', title: 'Allergies', desc: 'Nuts, shellfish, dairy, eggs, soy, gluten, and any anaphylactic risks.' },
  { step: '02', title: 'Restrictions', desc: 'Vegetarian, vegan, pescatarian, halal, kosher, or religious requirements.' },
  { step: '03', title: 'Dislikes', desc: 'Specific ingredients or textures guests prefer to avoid.' },
  { step: '04', title: 'Spice Tolerance', desc: 'Balinese sambal ranges from mild to extreme. We calibrate for your group.' },
  { step: '05', title: 'Medical Needs', desc: 'Diabetes, pregnancy, low-FODMAP, autoimmune protocols, and doctor-directed diets.' },
]

const ENERGY_TIMING = [
  { time: 'Pre-Yoga', meal: 'Light & Clean', desc: 'Fruit, herbal tea, or a small smoothie. Nothing heavy before practice.' },
  { time: 'Post-Training', meal: 'Stronger & Recovery', desc: 'Protein, complex carbs, and hydration to rebuild after physical work.' },
  { time: 'Pre-Workshop', meal: 'Clean Lunch', desc: 'Balanced macros without heavy oils or excessive spice. Keeps the mind sharp.' },
  { time: 'Evening', meal: 'Comfort Dinner', desc: 'Warmer, more grounding food. Supports relaxation and deep sleep.' },
]

const OPERATIONS = [
  { icon: ShoppingBag, title: 'Shopping Cycles', desc: 'Daily market runs for produce. Bulk dry goods planned in advance.' },
  { icon: ChefHat, title: 'Prep Cycles', desc: 'Mise en place each morning. Sauces and bases prepped the night before.' },
  { icon: Users, title: 'Staff Scheduling', desc: 'Dedicated chef plus assistants sized to guest count and kitchen capacity.' },
  { icon: ShieldCheck, title: 'Storage', desc: 'Proper refrigeration, dry storage, and villa-safe food handling protocols.' },
  { icon: Home, title: 'Villa Kitchen Limits', desc: 'We assess stove capacity, fridge space, and equipment before arrival.' },
  { icon: Utensils, title: 'Leftovers', desc: 'Safe reuse into next-day salads, soups, or staff meals. Nothing wasted.' },
  { icon: Trash2, title: 'Cleanup', desc: 'Full kitchen reset after every service. Left spotless for villa staff.' },
  { icon: Sparkles, title: 'Menu Variation', desc: 'No repeats across multi-day retreats unless specifically requested.' },
]

const FAQS = [
  { q: 'Can you do fully vegan retreat catering?', a: 'Yes. Vegan retreat catering is one of our most requested services. We design complete plant-based menus with full protein profiles, B12-rich ingredients, and satisfying flavors that leave no one missing animal products.' },
  { q: 'Can you cater 5 to 7 days continuously?', a: 'Absolutely. Multi-day retreat catering is our specialty. We plan shopping cycles, menu rotation, and staff scheduling so quality stays high from day one through day seven.' },
  { q: 'Can you work from a villa kitchen?', a: 'Yes. We assess the villa kitchen before arrival — stove capacity, fridge space, and equipment — and bring anything missing. Most Bali villas are fully workable with minor preparation.' },
  { q: 'Can you handle 30 people at a retreat?', a: 'Yes. We regularly cater retreats from 10 to 100 guests. For 30 people, we typically assign a head chef plus two assistants, scaled to your villa kitchen and service style.' },
  { q: 'How far in advance should we book?', a: 'For retreat catering, 2–4 weeks is ideal. This allows us to assign the right chef, plan dietary menus, and coordinate villa logistics. Peak season (June–September) benefits from earlier booking.' },
  { q: 'Do you do juice cleanses or detox programs?', a: 'Yes. We can design full juice cleanse programs or partial detox days within a broader retreat menu. Cold-pressed juices, broths, and light raw food are all available.' },
  { q: 'Can menus change daily?', a: 'Yes. We actively rotate menus across multi-day retreats so guests never eat the same meal twice. This keeps the experience fresh and nutritionally varied throughout the stay.' },
]

export default function CateringRetreatPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.retreat-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.retreat-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Retreat Catering Bali | Yoga, Wellness & Group Meals"
        description="Retreat catering in Bali for yoga, wellness, business, and creative retreats with healthy menus, dietary planning, and multi-day service."
        canonical={`${SITE}/catering/retreat-catering`}
        ogImage={`${SITE}/generated/hero-retreats.webp`}
        jsonLd={[
          localBusinessSchema,
          cateringServiceSchema('Retreat Catering Bali', 'Retreat catering in Bali for yoga, wellness, business, and creative retreats with plant-forward menus and dietary planning. myCHEF.id runs consistent multi-day meal service, timing, and kitchen operations across Bali.', `${SITE}/catering/retreat-catering`),
          offerSchema('Yoga Retreat Catering', 400000, 'IDR', `${SITE}/catering/retreat-catering`),
          offerSchema('Wellness Retreat Catering', 450000, 'IDR', `${SITE}/catering/retreat-catering`),
          offerSchema('Corporate Retreat Catering', 500000, 'IDR', `${SITE}/catering/retreat-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 156),
          cateringBreadcrumbSchema('Retreat Catering Bali', `${SITE}/catering/retreat-catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Retreat Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hero-retreats.webp"
            alt="Healthy retreat catering in Bali with tropical breakfast bowls and yoga guests"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/68" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Retreat Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Retreat Catering Bali<br />
            <span className="italic">for Wellness, Yoga, and Group Stays</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Consistent, healthy, chef-led catering for multi-day retreats where the food needs to support energy, rhythm, and the full guest experience.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            From IDR 400,000/person/day · Plant-forward · Full board · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Plan Retreat Meals
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              View Retreat Packages
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Multi-day capable</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dietary tracking</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dedicated retreat chef</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 1: RETREAT CATERING IN BALI ═══════ */}
      <section className="retreat-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="The Service"
            title="Retreat Catering in Bali"
            subtitle="Multi-day retreats need more than good food. They need consistency, timing, energy management, and dietary control — all delivered by a team that understands the rhythm of retreat life."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                Retreat catering in Bali is a specialized service. Unlike one-off events, multi-day retreats require a system: planned shopping cycles, prep schedules that adapt to villa kitchen limitations, and menus designed to sustain energy rather than spike it.
              </p>
              <p className="text-[#4A4745]">
                We design every retreat menu around digestion, energy, and sleep. Light before yoga. Stronger after training. Clean before workshops. Comforting at night. The food becomes part of the retreat experience — not a distraction from it.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Multi-day system', 'Energy-focused menus', 'Digestion-aware', 'Dietary control', 'Consistent quality', 'Villa kitchen adapted'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What Makes Our Retreat Catering Different</h3>
              <div className="space-y-3">
                {[
                  'Chef assigned for the full retreat duration',
                  'Menus planned around your daily schedule',
                  'Dietary intake before arrival — no surprises',
                  'Daily market shopping for peak freshness',
                  'Kitchen left spotless after every service',
                  'Menu rotation so nothing repeats',
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

      {/* ═══════ SECTION 2: TYPES OF RETREATS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Retreat Types"
            title="Types of Retreats We Cater"
            subtitle="Yoga, wellness, business, creative, fitness, and private villa groups — each with menus calibrated to the retreat's purpose and energy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {RETREAT_TYPES.map((rt) => (
              <div key={rt.title} className="retreat-reveal bg-[#FAFAF8] rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <rt.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{rt.title}</h3>
                <p className="text-sm text-[#4A4745]">{rt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: DAILY MEAL STRUCTURE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Daily Rhythm"
            title="Daily Meal Structure"
            subtitle="A complete day of retreat catering — breakfast, lunch, dinner, snacks, juices, tea, coffee, hydration, and recovery food."
          />
          <div className="space-y-4 mt-10">
            {DAILY_MEALS.map((item, i) => (
              <div key={i} className="retreat-reveal flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-xl border border-[#E8E6E3] p-5">
                <div className="md:w-36 flex-shrink-0">
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

      {/* ═══════ SECTION 4: HEALTHY MENU DIRECTION ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Menu Direction"
            title="Healthy Menu Direction"
            subtitle="Plant-forward, vegetarian, vegan, gluten-free, high-protein, and globally inspired — all adapted to your group's needs and the retreat's goals."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {MENU_DIRECTIONS.map((md) => (
              <div key={md.name} className="retreat-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1 text-[#C5A028]">{md.name}</h3>
                <p className="text-sm text-[#4A4745]">{md.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: DIETARY INTAKE PROCESS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Pre-Retreat Planning"
            title="Dietary Intake Process"
            subtitle="We collect allergies, restrictions, dislikes, spice tolerance, religious requirements, and medical restrictions before your retreat begins."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {DIETARY_INTAKE_STEPS.map((step) => (
              <div key={step.step} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <span className="text-xs text-[#C5A028] font-semibold tracking-wider uppercase">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: FOOD TIMING AND ENERGY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Energy"
            title="Food Timing and Energy"
            subtitle="Light before yoga. Stronger after training. Clean lunch before workshops. Comfort dinner at night. The menu follows the schedule."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {ENERGY_TIMING.map((et) => (
              <div key={et.time} className="retreat-reveal bg-[#FAFAF8] rounded-xl p-5">
                <span className="text-xs text-[#C5A028] font-semibold tracking-wider uppercase">{et.time}</span>
                <h3 className="font-semibold text-sm mt-1 mb-1">{et.meal}</h3>
                <p className="text-sm text-[#4A4745]">{et.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: MULTI-DAY OPERATIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Operations"
            title="Multi-Day Operations"
            subtitle="Shopping, prep cycles, staff scheduling, storage, villa kitchen limitations, leftovers, cleanup, and menu variation — all managed for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {OPERATIONS.map((op) => (
              <div key={op.title} className="retreat-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <op.icon className="w-6 h-6 text-[#C5A028] mb-2" />
                <h3 className="font-semibold text-sm mb-1">{op.title}</h3>
                <p className="text-sm text-[#4A4745]">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: RETREAT STYLING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Presentation</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Retreat Styling
          </h2>
          <p className="text-lg text-[#4A4745] mb-10">
            Natural, clean, not overdesigned. Long wooden tables, tropical breakfast bowls, and retreat guests eating together after yoga. The food should feel like it belongs in the environment — not like it was flown in from a city restaurant.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="bg-[#FAFAF8] rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-2">Long Wooden Tables</h3>
              <p className="text-sm text-[#4A4745]">Family-style service on natural wood. Communal, warm, and grounding.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-2">Tropical Breakfast Bowls</h3>
              <p className="text-sm text-[#4A4745]">Colorful, fresh, and photogenic. Papaya, granola, coconut, and edible flowers.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-2">Post-Yoga Dining</h3>
              <p className="text-sm text-[#4A4745]">Relaxed, unhurried meals where guests connect over nourishing food.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: PACKAGES + PRICING ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Retreat Catering Packages"
            subtitle="Wellness-focused catering designed for multi-day retreats. Scalable from intimate yoga groups to large corporate offsites."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {RETREAT_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <div className="mb-1">
                  <AllInPrice price={pkg.price} suffix="/person/day" />
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
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all">
                  <Calendar className="w-4 h-4" /> Plan Retreat Meals
                </a>
              </div>
            ))}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={400000} minGuests={10} maxGuests={40} defaultGuests={20} accent={GOLD} label=" guests/day" />
            <GroupTotalCalculator pricePerPerson={450000} minGuests={10} maxGuests={60} defaultGuests={25} accent={GOLD} label=" guests/day" />
            <GroupTotalCalculator pricePerPerson={500000} minGuests={15} maxGuests={100} defaultGuests={30} accent={GOLD} label=" guests/day" />
          </div>
          <TaxFooter className="mt-6" />
        </div>
      </section>

      {/* ═══════ SECTION 10: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Yoga Retreat Center', location: 'Ubud', quote: 'We have worked with myCHEF for 3 years. Their retreat catering is exceptional — plant-based, delicious, and always on time. Our guests rave about the food.', rating: 5 },
          { name: 'Wellness Resort', location: 'Sidemen', quote: 'Multi-day wellness retreat for 25 guests. The chef created beautiful Ayurvedic meals that aligned perfectly with our program. Highly professional team.', rating: 5 },
          { name: 'Corporate Offsite', location: 'Canggu', quote: '5-day team offsite with 40 people. Breakfast, lunch, dinner, and snacks. The team adapted to our changing schedule without complaint. Food was outstanding.', rating: 5 },
        ]}
        title="What Retreat Organizers Say"
        subtitle="Real reviews from retreat centers and wellness resorts across Bali."
      />

      {/* ═══════ SECTION 11: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Retreat Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 12: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hero-retreats.webp" alt="Retreat catering in Bali" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/68" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Retreat Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plan Your Retreat Meals
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your retreat length, guest count, daily schedule, villa location, dietary profile, and preferred food style. We will design a custom menu and confirm chef availability within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-retreat-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Plan Retreat Meals
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Call +62 822-3756-5997
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 24h proposal turnaround</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Dedicated retreat chef</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-6 font-semibold">Explore More Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/fine-dining" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Fine Dining</h4>
              <p className="text-xs text-[#4A4745]">7–11 course tasting menus in your villa</p>
            </Link>
            <Link to="/catering/villa-catering" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Villa Catering</h4>
              <p className="text-xs text-[#4A4745]">Full-service catering for villa groups</p>
            </Link>
            <Link to="/events" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Events</h4>
              <p className="text-xs text-[#4A4745]">Weddings, birthdays, corporate events</p>
            </Link>
            <Link to="/contact" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
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
