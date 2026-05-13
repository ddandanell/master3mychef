import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  MessageCircle,
  Plus,
  Minus,
  ChefHat,
  Calendar,
  Home,
  Sparkles,
  RefreshCw,
  Users,
  Shield,
  Clock,
  Award,
  Star,
} from 'lucide-react'
import SeoHead from '@/components/SeoHead'
import BestPartnerBadge from '@/components/BestPartnerBadge'

const WA = '6282237565997'
const SITE = 'https://mychef.id'

// /staffing — positioned as a recruitment team, not a service.
// "We have a network of vetted private chefs across Bali. Tell us what you
// need; we match a chef and place them in your villa for as long as you need."
//
// All hero / section images are generated via BFL FLUX, paths in public/generated/.

const STAFFING_TYPES = [
  { icon: ChefHat, title: 'Full-Time Chef', desc: 'Daily household chef support.' },
  { icon: Calendar, title: 'Part-Time Chef', desc: 'Flexible chef coverage several days per week.' },
  { icon: Home, title: 'Live-In Chef', desc: 'Chef stays at the villa or property.' },
  { icon: Sparkles, title: 'Retreat Chef', desc: 'Wellness and retreat meal service.' },
  { icon: RefreshCw, title: 'Temporary Chef Cover', desc: 'Holiday or short-term replacement.' },
  { icon: Users, title: 'Event Staffing', desc: 'Extra chefs and hospitality for larger events.' },
]

const WHAT_CHEFS_DO = [
  'Breakfast service in the villa',
  'Lunch and dinner cooking',
  'Weekly meal prep and stocking',
  'Healthy and macro-balanced menus',
  'Family-friendly home cooking',
  'Villa guest hospitality support',
  'Daily grocery shopping',
  'Kitchen management and stock control',
  'Menu planning and weekly variation',
  'Special diets — vegan, gluten-free, halal, kosher',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Tell us what you need', desc: 'Type of chef, household size, cuisine direction, any dietary needs.' },
  { step: '02', title: 'For how long', desc: 'A week, a month, the full season, or long-term placement.' },
  { step: '03', title: 'Which kind of person', desc: 'Quiet and unobtrusive, family-friendly, experienced with kids, English-speaking — your call.' },
  { step: '04', title: 'What they will do', desc: 'Breakfasts only, full board, meal prep, event service — define the scope.' },
  { step: '05', title: 'How many times per week', desc: 'Daily, three days a week, twice a week — flexible to your schedule.' },
  { step: '06', title: 'Shopping and groceries', desc: 'Should the chef shop daily? Stock weekly? Run on a household budget? We set this up.' },
  { step: '07', title: 'Cuisine specialty', desc: 'Mediterranean, Balinese, Asian fusion, plant-based, halal — we match the right chef.' },
]

const FAQS = [
  { q: 'How do you vet chefs?', a: 'Every chef in our network passes a background check, hands-on cooking trial, hospitality assessment, and a reference call. We do not place anyone we would not put in our own home.' },
  { q: 'What if a chef is not the right fit?', a: 'The first week is a trial. If the match is not right, we replace the chef at no charge — we maintain a bench of vetted backups for every active placement.' },
  { q: 'Can we hire a chef for just one or two weeks?', a: 'Yes. Short-term placements start at one week. Retreat and event staffing can be a single day. Long-term placements start at one month.' },
  { q: 'Who handles payroll and contracts?', a: 'We provide standard staffing contracts and monthly invoicing. For full-time hires we can advise on Indonesian employment compliance and household structure.' },
  { q: 'What does it cost?', a: 'Pricing depends on full-time vs part-time, live-in vs live-out, cuisine expertise required, and location. The form below returns a tailored proposal within 24 hours.' },
  { q: 'Do you serve outside Bali?', a: 'Yes. Our network extends to Jakarta and on request to private residences across Indonesia.' },
]

interface StaffingForm {
  schedule: 'full-time' | 'part-time' | ''
  arrangement: 'live-in' | 'live-out' | ''
  people: number
  meals: string[]
  cuisine: string
  dietary: string
  daysPerWeek: number
  startDate: string
  location: string
  budget: string
  whatsapp: string
  email: string
}

const INITIAL: StaffingForm = {
  schedule: '',
  arrangement: '',
  people: 2,
  meals: [],
  cuisine: '',
  dietary: '',
  daysPerWeek: 5,
  startDate: '',
  location: '',
  budget: '',
  whatsapp: '',
  email: '',
}

const MEAL_OPTIONS = ['Breakfast', 'Lunch', 'Dinner', 'Meal prep only']

export default function StaffingPage() {
  const [form, setForm] = useState<StaffingForm>(INITIAL)
  const update = <K extends keyof StaffingForm>(key: K, value: StaffingForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const waMessage = useMemo(() => {
    const lines = ['Hi myCHEF, I would like a staffing quote.', '']
    lines.push(`Schedule: ${form.schedule || '—'}`)
    lines.push(`Arrangement: ${form.arrangement || '—'}`)
    lines.push(`People: ${form.people}`)
    lines.push(`Meals: ${form.meals.length ? form.meals.join(', ') : '—'}`)
    lines.push(`Cuisine: ${form.cuisine || '—'}`)
    lines.push(`Dietary needs: ${form.dietary || '—'}`)
    lines.push(`Days per week: ${form.daysPerWeek}`)
    lines.push(`Start date: ${form.startDate || '—'}`)
    lines.push(`Location: ${form.location || '—'}`)
    lines.push(`Budget: ${form.budget || '—'}`)
    if (form.whatsapp) lines.push(`WhatsApp: ${form.whatsapp}`)
    if (form.email) lines.push(`Email: ${form.email}`)
    return lines.join('\n')
  }, [form])

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(waMessage)}`
  const canSubmit = !!form.schedule && !!form.arrangement && form.meals.length > 0

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Staffing in Bali — Full-Time, Part-Time, Live-In | myCHEF"
        description="myCHEF runs the recruitment side for private villa chefs across Bali. Match a vetted chef to your household — a week, a month, a season, or long-term."
        canonical={`${SITE}/staffing`}
        ogImage={`${SITE}/generated/staffing-hero.jpg`}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[78vh] flex items-end overflow-hidden">
        <img
          src="/generated/staffing-hero.jpg"
          alt="Private chef plating an elegant Mediterranean dish in a luxury Bali villa kitchen"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.88))', backdropFilter: 'blur(2px)' }}
        />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 pt-32 max-w-[1280px] mx-auto w-full text-white">
          <p
            className="text-[#D4AF37] text-xs md:text-sm tracking-[0.35em] uppercase mb-7"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Private Chef Recruitment
          </p>
          <h1
            className="text-[2.5rem] md:text-7xl lg:text-8xl leading-[1.05] mb-7  max-w-[920px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Private Chef Staffing in Bali
          </h1>
          <p className="text-base md:text-xl text-white/75 mb-10 max-w-[640px] leading-relaxed">
            Part-time and full-time private chefs for villas, families, retreats, and long-term stays — placed by our recruitment team from a vetted network across the island.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#D4AF37] text-black text-xs md:text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#E8C84B] transition-colors mb-10"
          >
            Get a Staffing Quote
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: Shield, label: 'Background Checked' },
              { icon: Clock, label: 'Trial Period Included' },
              { icon: RefreshCw, label: '24h Replacement' },
              { icon: Award, label: 'Vetted Network' },
              { icon: Star, label: '500+ Placements' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/60">
                <badge.icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 — HOW WE WORK ─────────────────────────────────────────────── */}
      <section id="recruitment" className="px-6 md:px-12 py-24 md:py-32 max-w-[1280px] mx-auto scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">01</p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">A recruitment team for villa kitchens</h2>
            <p className="text-[#4A4745] text-lg leading-relaxed mb-5">
              myCHEF runs an active network of vetted private chefs across Bali. We are not a marketplace.
              We are a recruitment team — we know each chef personally, we know what they cook best, and we
              know which households they fit.
            </p>
            <p className="text-[#4A4745] text-lg leading-relaxed">
              Whether you need a chef for a week, a month, a season, or long-term — tell us the brief and
              we match a person, not just a profile.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="/generated/staffing-market.jpg"
              alt="Chef shopping for fresh produce at a traditional Balinese morning market"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 02 — WHAT YOUR CHEF CAN DO ────────────────────────────────── */}
      <section id="chef-can-do" className="bg-white px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl order-2 md:order-1">
            <img
              src="/generated/staffing-table.jpg"
              alt="Elegant breakfast spread on a luxury Bali villa terrace at golden morning light"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">02</p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">What your chef can do</h2>
            <p className="text-[#4A4745] text-lg leading-relaxed mb-7">
              Every chef in our network is a full villa professional. The scope is yours to set —
              breakfast only, half-board, full board, or a household where the chef quietly runs the kitchen.
            </p>
            <ul className="grid grid-cols-1 gap-2.5 text-[#4A4745]">
              {WHAT_CHEFS_DO.map((w) => (
                <li key={w} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" /> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 03 — HOW IT WORKS ──────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">03</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">How it works</h2>
          <p className="text-[#4A4745] text-lg mb-14 max-w-[640px]">
            One brief from you. One recruitment process from us. The more specific the brief, the better the match.
          </p>
          <ol className="space-y-7">
            {HOW_IT_WORKS.map((s) => (
              <li key={s.step} className="grid grid-cols-[60px_1fr] gap-5 md:gap-8 items-baseline border-b border-[#E5E3E0] pb-7 last:border-0">
                <span className="font-playfair text-3xl text-[#D4AF37]">{s.step}</span>
                <div>
                  <h3 className="font-playfair text-2xl mb-1.5">{s.title}</h3>
                  <p className="text-[#4A4745]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 04 — STAFFING TYPES ──────────────────────────────────────── */}
      <section id="staffing-types" className="bg-white px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
            <div>
              <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">04</p>
              <h2 className="font-playfair text-4xl md:text-5xl leading-tight">Six ways to place a chef</h2>
            </div>
            <p className="text-[#4A4745] text-lg">
              Most placements fall into one of these. If yours does not, tell us in the form — we
              build custom arrangements regularly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAFFING_TYPES.map((s) => (
              <div key={s.title} className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-7">
                <s.icon className="w-7 h-7 text-[#D4AF37] mb-4" />
                <h3 className="font-playfair text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Partner diploma strip — luxury credential between sections */}
      <section className="bg-white px-6 md:px-12 py-12 border-t border-[#E5E3E0]">
        <div className="max-w-[800px] mx-auto flex justify-center">
          <BestPartnerBadge variant="dark" width={300} />
        </div>
      </section>

      {/* ── 05 — KITCHEN STRIP (image break) ────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[420px] overflow-hidden">
        <img
          src="/generated/staffing-kitchen.jpg"
          alt="Immaculate luxury villa kitchen in Bali with marble countertops and fresh ingredients"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.5))' }} />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center text-white">
          <p className="font-playfair text-3xl md:text-5xl max-w-[800px] leading-tight">
            "The right chef makes the kitchen quiet. The household stops thinking about food and starts enjoying it."
          </p>
        </div>
      </section>

      {/* ── 06 — STAFFING QUOTE FORM ──────────────────────────────────── */}
      <section id="quote" className="bg-white px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[800px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">06</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">Staffing quote</h2>
          <p className="text-[#4A4745] text-lg mb-10">
            Pick the basics here. Once you send, we reply with two or three vetted candidates and an honest budget — within 24 hours.
          </p>

          <div className="space-y-6">
            <ChipGroup
              label="Schedule"
              options={[{ id: 'full-time', label: 'Full-time' }, { id: 'part-time', label: 'Part-time' }]}
              value={form.schedule}
              onChange={(v) => update('schedule', v as StaffingForm['schedule'])}
            />
            <ChipGroup
              label="Arrangement"
              options={[{ id: 'live-in', label: 'Live-in' }, { id: 'live-out', label: 'Live-out' }]}
              value={form.arrangement}
              onChange={(v) => update('arrangement', v as StaffingForm['arrangement'])}
            />
            <Counter
              label="Number of people"
              value={form.people}
              onChange={(v) => update('people', v)}
              min={1}
            />
            <MultiChip
              label="Meals required"
              options={MEAL_OPTIONS}
              value={form.meals}
              onChange={(v) => update('meals', v)}
            />
            <Field label="Cuisine direction" value={form.cuisine} onChange={(v) => update('cuisine', v)} placeholder="Mediterranean, Asian fusion, plant-based, family cooking…" />
            <Field label="Dietary needs" value={form.dietary} onChange={(v) => update('dietary', v)} placeholder="Halal, vegan, gluten-free, kosher, nut allergy — list all" />
            <Counter label="Days per week" value={form.daysPerWeek} onChange={(v) => update('daysPerWeek', v)} min={1} max={7} />
            <Field label="Start date" value={form.startDate} onChange={(v) => update('startDate', v)} placeholder="e.g. June 2026" />
            <Field label="Location in Bali" value={form.location} onChange={(v) => update('location', v)} placeholder="Seminyak, Canggu, Ubud, Jakarta…" />
            <Field label="Budget range (optional)" value={form.budget} onChange={(v) => update('budget', v)} placeholder="IDR per month" />
            <Field label="WhatsApp" value={form.whatsapp} onChange={(v) => update('whatsapp', v)} placeholder="+62 …" />
            <Field label="Email" value={form.email} onChange={(v) => update('email', v)} placeholder="you@example.com" type="email" />

            <a
              href={canSubmit ? waLink : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canSubmit}
              className={`inline-flex items-center justify-center gap-2 w-full text-xs font-semibold uppercase tracking-[0.25em] px-8 py-4 rounded-full transition-colors ${
                canSubmit
                  ? 'bg-[#D4AF37] text-black hover:bg-[#E8C84B]'
                  : 'bg-[#E5E3E0] text-[#8A8785] cursor-not-allowed pointer-events-none'
              }`}
            >
              Request Chef Match
            </a>
            <p className="text-xs text-[#8A8785] text-center">
              Pick a schedule, arrangement, and at least one meal to send. Reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07 — FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[800px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">07</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-12">Frequently asked</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-white border border-[#E5E3E0] rounded-2xl p-5 group">
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                  <span>{f.q}</span>
                  <Plus className="w-4 h-4 text-[#8A8785] group-open:rotate-45 transition-transform" />
                </summary>
                <p className="text-sm text-[#4A4745] mt-3">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[#4A4745] mb-4">Still have questions?</p>
            <Link to="/contact" className="text-xs uppercase tracking-[0.2em] font-semibold text-[#2C5F7C] hover:text-[#1A1A1A]">
              Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[0.35em] mb-4">Ready when you are</p>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-6">Match a chef to your villa</h2>
          <p className="text-white/65 text-lg mb-10 max-w-[560px] mx-auto">
            Most placements confirmed within 48 hours of your brief. No commitment to read a proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#D4AF37] text-black text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#E8C84B] transition-colors"
            >
              Get a Staffing Quote
            </a>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to staff a chef for my villa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border-2 border-[#E5E3E0] rounded-xl px-3.5 py-3 text-sm focus:border-[#D4AF37] focus:outline-none"
      />
    </label>
  )
}

function ChipGroup<T extends string>({ label, options, value, onChange }: { label: string; options: { id: T; label: string }[]; value: T | ''; onChange: (v: T) => void }) {
  return (
    <div>
      <span className="block text-sm font-medium mb-2">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.id
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChange(o.id)}
              className={`px-5 py-2.5 text-sm rounded-full border-2 transition-colors ${active ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1A1A1A]' : 'border-[#E5E3E0] text-[#4A4745] hover:border-[#1A1A1A]/30'}`}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function MultiChip({ label, options, value, onChange }: { label: string; options: string[]; value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div>
      <span className="block text-sm font-medium mb-2">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value.includes(o)
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(active ? value.filter((x) => x !== o) : [...value, o])}
              className={`px-5 py-2.5 text-sm rounded-full border-2 transition-colors ${active ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-[#E5E3E0] text-[#4A4745] hover:border-[#1A1A1A]/30'}`}
            >
              {o}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Counter({ label, value, onChange, min = 0, max = 99 }: { label: string; value: number; onChange: (v: number) => void; min?: number; max?: number }) {
  return (
    <div>
      <span className="block text-sm font-medium mb-2">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="w-9 h-9 border-2 border-[#E5E3E0] rounded-full flex items-center justify-center hover:border-[#D4AF37]"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="font-playfair text-2xl w-10 text-center">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={`Increase ${label.toLowerCase()}`}
          className="w-9 h-9 border-2 border-[#E5E3E0] rounded-full flex items-center justify-center hover:border-[#D4AF37]"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
