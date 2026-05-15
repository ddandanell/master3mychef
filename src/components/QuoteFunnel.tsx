import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronLeft, MessageCircle, Minus, Plus } from 'lucide-react'
import SeoHead, { breadcrumbSchema, localBusinessSchema } from './SeoHead'

// 9-step quote funnel ported from production mychef.id/quote.
// Each step writes into a single `form` state. Step 9 builds a WhatsApp
// message from the form and links to wa.me/...?text=… — same submission
// model as the production site (no backend, all done over WhatsApp).

const WA = '6282237565997'

type ServiceType = 'single-event' | 'recurring' | 'fulltime'
type Cuisine = 'indonesian' | 'thai' | 'japanese' | 'chinese' | 'indian' | 'western' | 'asian-fusion' | 'chef-choice'
type AddOn = 'dj' | 'decor' | 'photography' | 'coordination' | 'other'

interface QuoteForm {
  serviceType?: ServiceType
  occasion?: string
  guests: number
  guestsFlexible: boolean
  dates: string[]
  datesFlexible: boolean
  cuisine?: Cuisine
  preMeeting?: 'yes' | 'no'
  addOns: AddOn[]
  villaName: string
  street: string
  city: string
  region: string
  postal: string
  country: string
  addressUnknown: boolean
}

const INITIAL: QuoteForm = {
  guests: 2,
  guestsFlexible: false,
  dates: [],
  datesFlexible: false,
  addOns: [],
  villaName: '',
  street: '',
  city: '',
  region: 'Bali',
  postal: '',
  country: 'Indonesia',
  addressUnknown: false,
}

const SERVICE_TYPES: { id: ServiceType; title: string; desc: string; bullets: string[] }[] = [
  { id: 'single-event', title: 'Single Event', desc: 'Perfect for one-time celebrations', bullets: ['Birthdays & anniversaries', 'Dinner parties', 'Special occasions', 'Corporate events'] },
  { id: 'recurring', title: 'Recurring Service', desc: 'Regular chef visits over time', bullets: ['Weekly meal prep', '2-3 days per week', 'Extended vacation stays', 'Live-in arrangements'] },
  { id: 'fulltime', title: 'Full-time/Part-time Chef', desc: 'Personal household chef employment', bullets: ['Daily meal preparation', 'Breakfast, lunch & dinner', 'Custom work schedules', 'Long-term arrangements'] },
]

const OCCASIONS = ['Wedding', 'Birthday', 'Anniversary', 'Family reunion', 'Bachelor/Bachelorette', 'Friends gathering', 'Romantic night', 'Corporate', 'Foodie adventure', 'Other']

const CUISINES: { id: Cuisine; label: string }[] = [
  { id: 'indonesian', label: 'Indonesian' },
  { id: 'thai', label: 'Thai' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'indian', label: 'Indian' },
  { id: 'western', label: 'Western' },
  { id: 'asian-fusion', label: 'Asian Fusion' },
  { id: 'chef-choice', label: "Not sure yet — Chef's recommendation" },
]

const ADD_ONS: { id: AddOn; title: string; desc: string }[] = [
  { id: 'dj', title: 'DJ / Music Services', desc: 'Professional DJ or live music' },
  { id: 'decor', title: 'Event Decorations', desc: 'Table settings, flowers, themed decor' },
  { id: 'photography', title: 'Photography / Videography', desc: 'Capture your special moments' },
  { id: 'coordination', title: 'Event Coordination', desc: 'Full event planning and management' },
  { id: 'other', title: 'Other Services', desc: 'Tell us what else you need' },
]

const STEP_TITLES = [
  'What type of service do you need?',
  "What's the occasion?",
  'How many guests will you have?',
  'When do you need the chef?',
  'What type of cuisine would you like?',
  'Would you like a pre-meeting with your chef?',
  'Need any additional services?',
  'Where is your event taking place?',
  'Submit your request',
]

export default function QuoteFunnel() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<QuoteForm>(INITIAL)

  const update = <K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const canAdvance = useMemo(() => {
    switch (step) {
      case 0: return !!form.serviceType
      case 1: return !!form.occasion
      case 2: return form.guestsFlexible || form.guests > 0
      case 3: return form.datesFlexible || form.dates.length > 0
      case 4: return !!form.cuisine
      case 5: return !!form.preMeeting
      case 6: return true
      case 7: return form.addressUnknown || (form.villaName.trim().length > 0 && form.street.trim().length > 0 && form.city.trim().length > 0)
      default: return true
    }
  }, [step, form])

  const next = () => canAdvance && setStep((s) => Math.min(s + 1, 8))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const summary = useMemo(() => {
    const dateLabel = form.datesFlexible ? 'flexible' : form.dates.join(', ')
    const guestLabel = form.guestsFlexible ? 'flexible / not sure' : `${form.guests} guests`
    const cuisineLabel = CUISINES.find((c) => c.id === form.cuisine)?.label ?? '—'
    const serviceLabel = SERVICE_TYPES.find((s) => s.id === form.serviceType)?.title ?? '—'
    const addressLabel = form.addressUnknown
      ? 'Not provided yet'
      : [form.villaName, form.street, form.city, form.region, form.postal, form.country].filter(Boolean).join(', ')
    const addOnLabel = form.addOns.length
      ? form.addOns.map((id) => ADD_ONS.find((a) => a.id === id)?.title).join(', ')
      : 'None'
    return {
      'Service Type': serviceLabel,
      Occasion: form.occasion ?? '—',
      Guests: guestLabel,
      'Date(s)': dateLabel,
      Cuisine: cuisineLabel,
      'Pre-meeting': form.preMeeting === 'yes' ? 'Yes — chef arrives 2h early' : 'No — chef arrives ready to cook',
      'Additional services': addOnLabel,
      Location: addressLabel,
    }
  }, [form])

  const waMessage = useMemo(() => {
    const lines = ['Hi myCHEF, I would like a quote.', '']
    for (const [k, v] of Object.entries(summary)) lines.push(`${k}: ${v}`)
    return lines.join('\n')
  }, [summary])

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(waMessage)}`

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Get a Custom Quote — Private Chef in Bali | myCHEF"
        description="Tell us about your event in 9 quick steps. Get a personalised private chef quote within 24 hours. Fine dining, villa catering, weddings, retreats — all priced transparently."
        canonical="https://mychef.id/quote"
        ogImage="https://mychef.id/og-image.webp"
        noindex
        jsonLd={[localBusinessSchema, breadcrumbSchema('Quote', 'https://mychef.id/quote')]}
      />
      <section className="px-8 pt-24 pb-16 max-w-[800px] mx-auto">
        {/* Progress strip */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#8A8785]">
          <button type="button" onClick={back} disabled={step === 0} className="inline-flex items-center gap-1 disabled:opacity-30 hover:text-[#1A1A1A]">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <span>Step {step + 1} of 9</span>
        </div>
        <div className="h-1 bg-[#E5E3E0] rounded-full mb-10 overflow-hidden">
          <div className="h-full bg-[#C5A028] transition-all" style={{ width: `${((step + 1) / 9) * 100}%` }} />
        </div>

        <h1 className="font-playfair text-3xl md:text-4xl mb-8">{STEP_TITLES[step]}</h1>

        {step === 0 && (
          <div className="grid md:grid-cols-3 gap-4">
            {SERVICE_TYPES.map((s) => {
              const active = form.serviceType === s.id
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => update('serviceType', s.id)}
                  aria-pressed={active}
                  className={`text-left bg-white border-2 rounded-2xl p-5 transition-all ${active ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#1A1A1A]/30'}`}
                >
                  <h3 className="font-playfair text-xl mb-2">{s.title}</h3>
                  <p className="text-xs text-[#4A4745] mb-4">{s.desc}</p>
                  <ul className="space-y-1 text-xs text-[#4A4745]">
                    {s.bullets.map((b) => <li key={b} className="flex items-start gap-1"><Check className="w-3 h-3 text-[#C5A028] mt-0.5 flex-shrink-0" /> {b}</li>)}
                  </ul>
                </button>
              )
            })}
          </div>
        )}

        {step === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {OCCASIONS.map((o) => {
              const active = form.occasion === o
              return (
                <button
                  type="button"
                  key={o}
                  onClick={() => update('occasion', o)}
                  aria-pressed={active}
                  className={`bg-white border-2 rounded-xl p-4 text-sm font-medium transition-all ${active ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#1A1A1A]/30'}`}
                >
                  {o}
                </button>
              )
            })}
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => update('guests', Math.max(1, form.guests - 1))}
                disabled={form.guestsFlexible}
                aria-label="Decrease guest count"
                className="w-12 h-12 border-2 border-[#E5E3E0] rounded-full flex items-center justify-center hover:border-[#C5A028] disabled:opacity-30"
              >
                <Minus className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="font-playfair text-5xl">{form.guestsFlexible ? '?' : form.guests}</div>
                <div className="text-xs uppercase tracking-[2px] text-[#8A8785] mt-1">Guests</div>
              </div>
              <button
                type="button"
                onClick={() => update('guests', form.guests + 1)}
                disabled={form.guestsFlexible}
                aria-label="Increase guest count"
                className="w-12 h-12 border-2 border-[#E5E3E0] rounded-full flex items-center justify-center hover:border-[#C5A028] disabled:opacity-30"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => update('guestsFlexible', !form.guestsFlexible)}
              aria-pressed={form.guestsFlexible}
              className={`text-sm px-4 py-2 rounded-full border-2 ${form.guestsFlexible ? 'border-[#C5A028] text-[#8B6F1A]' : 'border-[#E5E3E0] text-[#4A4745]'}`}
            >
              Not sure / Varies
            </button>
          </div>
        )}

        {step === 3 && <DateStep form={form} update={update} />}

        {step === 4 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CUISINES.map((c) => {
              const active = form.cuisine === c.id
              return (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => update('cuisine', c.id)}
                  aria-pressed={active}
                  className={`bg-white border-2 rounded-xl p-4 text-sm font-medium transition-all ${active ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#1A1A1A]/30'}`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        )}

        {step === 5 && (
          <div className="grid md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => update('preMeeting', 'yes')}
              aria-pressed={form.preMeeting === 'yes'}
              className={`text-left bg-white border-2 rounded-2xl p-5 transition-all ${form.preMeeting === 'yes' ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#1A1A1A]/30'}`}
            >
              <h3 className="font-playfair text-xl mb-2">Yes, I want a pre-meeting</h3>
              <p className="text-xs text-[#4A4745]">Chef arrives 2 hours early to plan menu and buy fresh ingredients — only hourly rate applies, no extra cost.</p>
            </button>
            <button
              type="button"
              onClick={() => update('preMeeting', 'no')}
              aria-pressed={form.preMeeting === 'no'}
              className={`text-left bg-white border-2 rounded-2xl p-5 transition-all ${form.preMeeting === 'no' ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#1A1A1A]/30'}`}
            >
              <h3 className="font-playfair text-xl mb-2">No pre-meeting needed</h3>
              <p className="text-xs text-[#4A4745]">Chef arrives at the scheduled cooking time with ingredients ready to prepare your meal.</p>
            </button>
          </div>
        )}

        {step === 6 && (
          <div className="grid md:grid-cols-2 gap-3">
            {ADD_ONS.map((a) => {
              const active = form.addOns.includes(a.id)
              return (
                <button
                  type="button"
                  key={a.id}
                  onClick={() => update('addOns', active ? form.addOns.filter((x) => x !== a.id) : [...form.addOns, a.id])}
                  aria-pressed={active}
                  className={`text-left bg-white border-2 rounded-xl p-4 transition-all ${active ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#1A1A1A]/30'}`}
                >
                  <div className="flex items-start gap-2">
                    <div className={`w-4 h-4 rounded border-2 mt-1 flex-shrink-0 flex items-center justify-center ${active ? 'border-[#C5A028] bg-[#C5A028]' : 'border-[#E5E3E0]'}`}>
                      {active && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{a.title}</p>
                      <p className="text-xs text-[#4A4745]">{a.desc}</p>
                    </div>
                  </div>
                </button>
              )
            })}
            <p className="md:col-span-2 text-xs text-[#8A8785] mt-2">
              myCHEF can help coordinate these services with trusted partners in Bali. We'll include recommendations and pricing in your quote.
            </p>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-4">
            <Input label="Villa name, Hotel or other" value={form.villaName} onChange={(v) => update('villaName', v)} placeholder="Villa Aroha, Grand Hyatt Bali…" disabled={form.addressUnknown} />
            <Input label="Street Address" value={form.street} onChange={(v) => update('street', v)} placeholder="Jl. Pantai Berawa No. 45" disabled={form.addressUnknown} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="City" value={form.city} onChange={(v) => update('city', v)} placeholder="Canggu" disabled={form.addressUnknown} />
              <Input label="Region" value={form.region} onChange={(v) => update('region', v)} placeholder="Bali" disabled={form.addressUnknown} />
            </div>
            <Input label="Postal Code (Optional)" value={form.postal} onChange={(v) => update('postal', v)} placeholder="80361" disabled={form.addressUnknown} />
            <Input label="Country" value={form.country} onChange={(v) => update('country', v)} placeholder="Indonesia" disabled={form.addressUnknown} />
            <div className="text-center py-2 text-xs uppercase tracking-[2px] text-[#8A8785]">OR</div>
            <button
              type="button"
              onClick={() => update('addressUnknown', !form.addressUnknown)}
              aria-pressed={form.addressUnknown}
              className={`w-full bg-white border-2 rounded-xl p-3 text-sm font-medium transition-all ${form.addressUnknown ? 'border-[#C5A028] text-[#8B6F1A]' : 'border-[#E5E3E0]'}`}
            >
              I don't have the address yet
            </button>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6">
            <p className="text-[#4A4745]">
              Your request will be sent to our team via WhatsApp. We will review your information and reply within the hour.
              Within 24 hours you will receive a complete price estimate including chef fees, ingredients, and add-ons.
            </p>

            <div className="bg-white border border-[#E5E3E0] rounded-2xl p-5">
              <h3 className="font-playfair text-lg mb-4">Your Request Summary</h3>
              <dl className="space-y-2">
                {Object.entries(summary).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-2 text-sm">
                    <dt className="text-[#8A8785]">{k}</dt>
                    <dd className="col-span-2 text-[#1A1A1A]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Deposit + cancellation transparency before commit */}
            <div className="bg-[#F5F3EF] border border-[#E5E3E0] rounded-2xl p-5 text-sm">
              <p className="font-medium text-[#1A1A1A] mb-2">Deposit & cancellation</p>
              <ul className="space-y-1 text-[#4A4745]">
                <li>• 25% deposit confirms the booking and locks the chef.</li>
                <li>• Full refund 14+ days before. 50% refund 7–13 days. No refund under 7 days.</li>
                <li>• Remaining 75% paid when the chef arrives at your villa, before service begins.</li>
              </ul>
              <p className="text-xs text-[#8A8785] mt-3">
                <Link to="/cancellation" className="underline hover:text-[#1A1A1A]">Read the full cancellation policy →</Link>
              </p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Send Request via WhatsApp
            </a>
            <p className="text-xs text-[#8A8785] text-center">
              When you tap send, WhatsApp opens with your full summary pre-filled. Just hit send.
            </p>
          </div>
        )}

        {/* Bottom continue button — only shown when not on the final summary step */}
        {step < 8 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={next}
              disabled={!canAdvance}
              className="bg-[#C5A028] disabled:bg-[#C5A028]/40 text-black font-semibold text-sm uppercase tracking-[2px] px-10 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              Continue
            </button>
          </div>
        )}

        <p className="text-xs text-[#8A8785] text-center mt-8 max-w-[480px] mx-auto">
          Your information is secure and will only be used to prepare your personalized quote. We never spam or share your data.
        </p>

        {step === 8 && (
          <div className="mt-10 text-center">
            <Link to="/" className="text-xs uppercase tracking-[2px] text-[#8A8785] hover:text-[#1A1A1A]">← Back to home</Link>
          </div>
        )}
      </section>
    </main>
  )
}

function Input({ label, value, onChange, placeholder, disabled }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; disabled?: boolean }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-white border-2 border-[#E5E3E0] rounded-xl p-3 text-sm focus:border-[#C5A028] disabled:opacity-50"
      />
    </label>
  )
}

function DateStep({ form, update }: { form: QuoteForm; update: <K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) => void }) {
  const [monthOffset, setMonthOffset] = useState(0)
  // Range-select mode: most catering clients book consecutive days (10-day stay,
  // long weekend, week-long retreat). Tap-each-day was tedious and error-prone.
  // Mode picker lets users choose; range is the default since it's the common case.
  const [mode, setMode] = useState<'range' | 'multi'>('range')

  const today = new Date()
  const view = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const year = view.getFullYear()
  const month = view.getMonth()
  const monthName = view.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isoFor = (d: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

  const sortedDates = [...form.dates].sort()
  const rangeStart = sortedDates[0]
  const rangeEnd = sortedDates.length > 1 ? sortedDates[sortedDates.length - 1] : undefined

  const handleDayClick = (d: number) => {
    const iso = isoFor(d)
    if (mode === 'range') {
      // First tap = start; second tap = end; fills the range.
      if (form.dates.length === 0 || form.dates.length >= 2) {
        update('dates', [iso])
      } else {
        const [start] = form.dates
        const a = start < iso ? start : iso
        const b = start < iso ? iso : start
        // Fill every day between a and b
        const days: string[] = []
        const startDate = new Date(a)
        const endDate = new Date(b)
        for (let cur = new Date(startDate); cur <= endDate; cur.setDate(cur.getDate() + 1)) {
          days.push(cur.toISOString().slice(0, 10))
        }
        update('dates', days)
      }
    } else {
      // Multi-select toggle (original behaviour)
      update('dates', form.dates.includes(iso) ? form.dates.filter((x) => x !== iso) : [...form.dates, iso])
    }
  }

  const isInRange = (iso: string) =>
    mode === 'range' && rangeStart && rangeEnd ? iso >= rangeStart && iso <= rangeEnd : form.dates.includes(iso)

  const summaryLabel = (() => {
    if (form.dates.length === 0) return ''
    if (mode === 'range' && rangeStart && rangeEnd) {
      const fmt = (s: string) => s.split('-').reverse().join('/')
      const nights = Math.round((new Date(rangeEnd).getTime() - new Date(rangeStart).getTime()) / 86400000) + 1
      return `${fmt(rangeStart)} → ${fmt(rangeEnd)}  ·  ${nights} day${nights > 1 ? 's' : ''}`
    }
    return form.dates.map((d) => d.split('-').reverse().join('/')).join(', ')
  })()

  return (
    <div className="space-y-5">
      {/* Mode switcher */}
      <div className="flex bg-white border border-[#E5E3E0] rounded-full p-1">
        <button
          type="button"
          onClick={() => { setMode('range'); update('dates', []) }}
          className={`flex-1 text-xs uppercase tracking-[0.15em] py-2 rounded-full transition-colors ${mode === 'range' ? 'bg-[#C5A028] text-black font-semibold' : 'text-[#4A4745]'}`}
        >
          Date range
        </button>
        <button
          type="button"
          onClick={() => { setMode('multi'); update('dates', []) }}
          className={`flex-1 text-xs uppercase tracking-[0.15em] py-2 rounded-full transition-colors ${mode === 'multi' ? 'bg-[#C5A028] text-black font-semibold' : 'text-[#4A4745]'}`}
        >
          Single / multiple days
        </button>
      </div>

      <div className="bg-white border border-[#E5E3E0] rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={() => setMonthOffset((o) => o - 1)} className="text-sm px-3 py-1 hover:text-[#C5A028]" aria-label="Go to previous month">←</button>
          <span className="font-playfair text-lg">{monthName}</span>
          <button type="button" onClick={() => setMonthOffset((o) => o + 1)} className="text-sm px-3 py-1 hover:text-[#C5A028]" aria-label="Go to next month">→</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#8A8785] mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((d, i) => {
            if (d === null) return <div key={i} />
            const iso = isoFor(d)
            const selected = isInRange(iso)
            const isEndpoint = iso === rangeStart || iso === rangeEnd
            const past = new Date(year, month, d) < new Date(today.toDateString())
            return (
              <button
                type="button"
                key={i}
                onClick={() => !past && handleDayClick(d)}
                disabled={past || form.datesFlexible}
                aria-pressed={selected}
                title={past ? 'Past date' : undefined}
                className={`aspect-square rounded-lg text-sm transition-all ${
                  selected
                    ? isEndpoint
                      ? 'bg-[#C5A028] text-black font-semibold'
                      : 'bg-[#C5A028]/30 text-[#1A1A1A]'
                    : past
                      ? 'text-[#E5E3E0] cursor-not-allowed'
                      : 'hover:bg-[#FAFAF8]'
                } ${form.datesFlexible ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                {d}
              </button>
            )
          })}
        </div>
        {mode === 'range' && (
          <p className="text-xs text-[#8A8785] mt-3 italic">
            Tap a start day, then the end day. We fill the dates in between.
          </p>
        )}
      </div>

      {form.dates.length > 0 && !form.datesFlexible && (
        <div className="text-sm">
          <span className="text-[#8A8785]">Selected: </span>
          <span className="font-medium">{summaryLabel}</span>
        </div>
      )}

      <button
        type="button"
        onClick={() => update('datesFlexible', !form.datesFlexible)}
        aria-pressed={form.datesFlexible}
        className={`w-full bg-white border-2 rounded-xl p-3 text-sm font-medium transition-all ${form.datesFlexible ? 'border-[#C5A028] text-[#8B6F1A]' : 'border-[#E5E3E0]'}`}
      >
        Dates are flexible
      </button>
    </div>
  )
}
