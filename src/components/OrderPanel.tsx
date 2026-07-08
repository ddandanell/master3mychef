import { useEffect, useMemo, useState } from 'react'
import { X, ChevronLeft, MessageCircle, Check } from 'lucide-react'

// Right-side slide-over booking panel for the Fine Dining page.
// Five steps, designed as a luxury hotel booking experience — not a takeaway form.
// Submission builds a wa.me/...?text=... message containing the full request,
// same backend-less pattern as the main /quote funnel.

const WA = '6289674072020'

interface OrderPanelProps {
  open: boolean
  onClose: () => void
  /** Optional pre-selected experience when the panel opens. */
  initialExperience?: string
}

type Stage = 'form' | 'submitted'

interface BookingForm {
  guests: string
  customGuests: string
  villa: string
  date: string
  startTime: string
  experience: string
  pairing: string
  winePreferences: string[]
  additions: string[]
  dietary: string
  notes: string
}

const GUEST_OPTIONS = ['4', '5', '6', '7', '8', '10', '12+', 'Custom']
const START_TIMES = ['5 PM', '6 PM', '7 PM', '8 PM']
const EXPERIENCES = [
  'Mediterranean Sea Experience',
  'Wagyu Experience',
  "Custom Chef's Table",
  'Vegetarian Experience',
  'Seafood Celebration',
  'Executive Wine Dinner',
]
const PAIRINGS = ['No pairing', 'Wine pairing', 'Premium wine pairing', 'Cocktail pairing', 'Champagne service', 'Mocktail pairing']
const WINE_PROFILES = ['Light and fresh', 'Rich and powerful', 'Italian focused', 'French focused', 'Natural wines', 'Champagne focused', 'Sommelier selection']
const ADDITIONS = [
  'Oyster service',
  'Tablescape styling',
  'Candlelight romantic setup',
  'Birthday celebration setup',
  'Live musician',
  'Extra Wagyu course',
  'Caviar service',
  'Champagne tower',
  'Cocktail bartender',
  'Flower arrangement',
  'After-dinner cigar service',
]

const INITIAL: BookingForm = {
  guests: '',
  customGuests: '',
  villa: '',
  date: '',
  startTime: '',
  experience: '',
  pairing: '',
  winePreferences: [],
  additions: [],
  dietary: '',
  notes: '',
}

export default function OrderPanel({ open, onClose, initialExperience }: OrderPanelProps) {
  const [stage, setStage] = useState<Stage>('form')
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<BookingForm>(INITIAL)

  useEffect(() => {
    if (open && initialExperience) {
      const timer = setTimeout(() => setForm((f) => ({ ...f, experience: initialExperience })), 0)
      return () => clearTimeout(timer)
    }
  }, [open, initialExperience])

  // Lock body scroll while the panel is open and reset state when reopened
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset to step 0 / form stage on each fresh open
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setStage('form'), 0)
      return () => clearTimeout(timer)
    }
  }, [open])

  // Handle Escape key to close the panel
  useEffect(() => {
    if (!open) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  const update = <K extends keyof BookingForm>(key: K, value: BookingForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const toggleArray = (key: 'winePreferences' | 'additions', value: string) =>
    setForm((f) => {
      const list = f[key]
      return { ...f, [key]: list.includes(value) ? list.filter((x) => x !== value) : [...list, value] }
    })

  const canAdvance = useMemo(() => {
    if (step === 0) return !!form.guests && !!form.villa && !!form.date && !!form.startTime && (form.guests !== 'Custom' || !!form.customGuests)
    if (step === 1) return !!form.experience
    if (step === 2) return !!form.pairing
    return true
  }, [step, form])

  const submitMessage = useMemo(() => {
    const guests = form.guests === 'Custom' ? form.customGuests : form.guests
    const lines = ['Hi myCHEF, I would like to request a private dinner.', '']
    lines.push(`Guests: ${guests || '—'}`)
    lines.push(`Villa / Location: ${form.villa || '—'}`)
    lines.push(`Date: ${form.date || '—'}`)
    lines.push(`Start time: ${form.startTime || '—'}`)
    lines.push(`Experience: ${form.experience || '—'}`)
    lines.push(`Beverage pairing: ${form.pairing || '—'}`)
    if (form.winePreferences.length) lines.push(`Wine profile: ${form.winePreferences.join(', ')}`)
    if (form.additions.length) lines.push(`Additions: ${form.additions.join(', ')}`)
    if (form.dietary) lines.push(`Dietary: ${form.dietary}`)
    if (form.notes) lines.push(`Notes: ${form.notes}`)
    return lines.join('\n')
  }, [form])

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(submitMessage)}`

  const handleSubmit = () => {
    setStage('submitted')
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close booking panel"
        onClick={onClose}
        className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Panel */}
      <aside
        className="fixed top-0 right-0 z-[81] h-full w-full md:w-[40vw] md:min-w-[460px] bg-[#0A0A0A] text-white shadow-2xl flex flex-col"
        style={{ borderLeft: '1px solid rgba(212,175,55,0.15)' }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            {step > 0 && stage === 'form' && (
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                aria-label="Go back"
                className="p-1 text-white/[60%] hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <p className="text-xs tracking-[0.25em] uppercase text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {stage === 'submitted' ? 'Confirmed' : `Step ${step + 1} of 5`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking panel (Escape)"
            className="p-2 text-white/[60%] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 md:py-10">
          {stage === 'submitted' ? (
            <SubmittedView waLink={waLink} onClose={onClose} />
          ) : (
            <>
              {step === 0 && (
                <Step1Guests
                  form={form}
                  update={update}
                />
              )}
              {step === 1 && (
                <Step2Experience
                  form={form}
                  update={update}
                />
              )}
              {step === 2 && (
                <Step3Pairing
                  form={form}
                  update={update}
                  toggleArray={toggleArray}
                />
              )}
              {step === 3 && (
                <Step4Additions
                  form={form}
                  toggleArray={toggleArray}
                />
              )}
              {step === 4 && (
                <Step5Notes
                  form={form}
                  update={update}
                />
              )}
            </>
          )}
        </div>

        {/* Footer / advance */}
        {stage === 'form' && (
          <footer className="px-6 md:px-10 py-6 border-t border-white/8 flex items-center justify-between gap-4">
            <div className="flex-1 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`h-[2px] flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#C5A028]' : 'bg-white/10'}`}
                />
              ))}
            </div>
            {step < 4 ? (
              <button
                type="button"
                onClick={() => canAdvance && setStep((s) => Math.min(4, s + 1))}
                disabled={!canAdvance}
                className={`text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3 rounded-full transition-colors ${canAdvance ? 'bg-[#C5A028] text-black hover:bg-[#D4B43A]' : 'bg-white/10 text-white/[40%] cursor-not-allowed'}`}
              >
                Continue
              </button>
            ) : (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                data-source="order-panel-submit"
                onClick={handleSubmit}
                className="text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3 rounded-full bg-[#C5A028] text-black hover:bg-[#D4B43A] transition-colors"
              >
                Request Private Dinner
              </a>
            )}
          </footer>
        )}
      </aside>
    </>
  )
}

// ─── Step components ───────────────────────────────────────────────────────

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.3em] uppercase text-[#C5A028] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl leading-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h2>
      {sub && <p className="text-sm text-white/[55%]">{sub}</p>}
    </div>
  )
}

function Step1Guests({ form, update }: { form: BookingForm; update: <K extends keyof BookingForm>(k: K, v: BookingForm[K]) => void }) {
  return (
    <div>
      <Heading eyebrow="01" title="Guest information" sub="Tell us about your party." />

      <Label>How many guests?</Label>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {GUEST_OPTIONS.map((g) => (
          <ChipButton key={g} active={form.guests === g} onClick={() => update('guests', g)}>{g}</ChipButton>
        ))}
      </div>
      {form.guests === 'Custom' && (
        <DarkInput value={form.customGuests} onChange={(v) => update('customGuests', v)} placeholder="e.g. 12 guests" className="mb-8" />
      )}
      {form.guests !== 'Custom' && <div className="mb-8" />}

      <Label>Villa / location</Label>
      <DarkInput value={form.villa} onChange={(v) => update('villa', v)} placeholder="Villa name, hotel, or area in Bali" className="mb-8" />

      <Label>Date</Label>
      <DarkInput type="date" value={form.date} onChange={(v) => update('date', v)} min={(() => { const d = new Date(); d.setDate(d.getDate() + 2); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` })()} className="mb-8" />

      <Label>Preferred dinner start</Label>
      <div className="grid grid-cols-4 gap-2">
        {START_TIMES.map((t) => (
          <ChipButton key={t} active={form.startTime === t} onClick={() => update('startTime', t)}>{t}</ChipButton>
        ))}
      </div>
    </div>
  )
}

function Step2Experience({ form, update }: { form: BookingForm; update: <K extends keyof BookingForm>(k: K, v: BookingForm[K]) => void }) {
  return (
    <div>
      <Heading eyebrow="02" title="Choose your experience" sub="Pick the menu — we tailor every dish to your preferences." />
      <div className="space-y-2">
        {EXPERIENCES.map((e) => (
          <RadioCard key={e} active={form.experience === e} onClick={() => update('experience', e)}>
            {e}
          </RadioCard>
        ))}
      </div>
    </div>
  )
}

function Step3Pairing({ form, update, toggleArray }: { form: BookingForm; update: <K extends keyof BookingForm>(k: K, v: BookingForm[K]) => void; toggleArray: (k: 'winePreferences' | 'additions', v: string) => void }) {
  return (
    <div>
      <Heading eyebrow="03" title="Beverage pairing" sub="Would you like a pairing with your menu?" />
      <div className="space-y-2 mb-10">
        {PAIRINGS.map((p) => (
          <RadioCard key={p} active={form.pairing === p} onClick={() => update('pairing', p)}>
            {p}
          </RadioCard>
        ))}
      </div>

      {/* Wine profile only relevant if the guest wants a pairing — hide it for "No pairing" */}
      {form.pairing && form.pairing !== 'No pairing' && (
        <>
          <Heading eyebrow="—" title="Wine profile" sub="Pick what you usually enjoy — our sommelier will design from there." />
          <div className="grid grid-cols-1 gap-2">
            {WINE_PROFILES.map((p) => (
              <CheckCard key={p} active={form.winePreferences.includes(p)} onClick={() => toggleArray('winePreferences', p)}>
                {p}
              </CheckCard>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Step4Additions({ form, toggleArray }: { form: BookingForm; toggleArray: (k: 'winePreferences' | 'additions', v: string) => void }) {
  return (
    <div>
      <Heading eyebrow="04" title="Add to your evening" sub="Optional upgrades. Skip if not needed." />
      <div className="grid grid-cols-1 gap-2">
        {ADDITIONS.map((a) => (
          <CheckCard key={a} active={form.additions.includes(a)} onClick={() => toggleArray('additions', a)}>
            {a}
          </CheckCard>
        ))}
      </div>
    </div>
  )
}

function Step5Notes({ form, update }: { form: BookingForm; update: <K extends keyof BookingForm>(k: K, v: BookingForm[K]) => void }) {
  return (
    <div>
      <Heading eyebrow="05" title="Dietary & notes" sub="Allergies, occasions, sunset timing — anything our chefs should know." />

      <Label>Dietary restrictions</Label>
      <DarkTextarea value={form.dietary} onChange={(v) => update('dietary', v)} placeholder="Gluten free, shellfish allergy, child menu, pregnancy, halal…" rows={3} className="mb-8" />

      <Label>Special requests</Label>
      <DarkTextarea value={form.notes} onChange={(v) => update('notes', v)} placeholder="Anniversary, proposal, sunset timing, music preference…" rows={4} />
    </div>
  )
}

function SubmittedView({ waLink, onClose }: { waLink: string; onClose: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-[#C5A028] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Request received
      </p>
      <h2 className="text-3xl md:text-4xl leading-tight mb-4 max-w-[420px]" style={{ fontFamily: "'Playfair Display', serif" }}>
        Your evening is being prepared.
      </h2>
      <p className="text-sm text-white/[55%] max-w-[420px] mb-10">
        One of our team members will contact you shortly to finalize the experience.
      </p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        data-source="order-panel-confirm"
        className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] text-xs tracking-[0.2em] uppercase font-semibold px-7 py-3.5 rounded-full hover:bg-[#D4B43A] transition-colors"
      >
        <MessageCircle className="w-4 h-4" /> Confirm on WhatsApp
      </a>
      <button
        type="button"
        onClick={onClose}
        className="mt-10 text-xs uppercase tracking-[0.2em] text-white/[50%] hover:text-white/[90%]"
      >
        Close
      </button>
    </div>
  )
}

// ─── Form atoms ────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] tracking-[0.2em] uppercase text-white/[55%] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{children}</p>
}

function DarkInput({ value, onChange, placeholder, type = 'text', className = '', min }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string; className?: string; min?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      className={`w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm placeholder:text-white/[50%] focus:border-[#C5A028] ${className}`}
    />
  )
}

function DarkTextarea({ value, onChange, placeholder, rows = 3, className = '' }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number; className?: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm placeholder:text-white/[50%] focus:border-[#C5A028] resize-none ${className}`}
    />
  )
}

function ChipButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={`text-sm px-3 py-2.5 rounded-lg border transition-colors ${active ? 'border-[#C5A028] bg-[#C5A028]/10 text-white' : 'border-white/15 text-white/[70%] hover:border-white/30'}`}
    >
      {children}
    </button>
  )
}

function RadioCard({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={`w-full text-left px-4 py-3.5 rounded-lg border flex items-center gap-3 transition-colors ${active ? 'border-[#C5A028] bg-[#C5A028]/10' : 'border-white/15 hover:border-white/30'}`}
    >
      <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${active ? 'border-[#C5A028]' : 'border-white/30'}`}>
        {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028]" />}
      </span>
      <span className="text-sm">{children}</span>
    </button>
  )
}

function CheckCard({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={`w-full text-left px-4 py-3 rounded-lg border flex items-center gap-3 transition-colors ${active ? 'border-[#C5A028] bg-[#C5A028]/10' : 'border-white/15 hover:border-white/30'}`}
    >
      <span className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center ${active ? 'border-[#C5A028] bg-[#C5A028]' : 'border-white/30'}`}>
        {active && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
      </span>
      <span className="text-sm">{children}</span>
    </button>
  )
}
