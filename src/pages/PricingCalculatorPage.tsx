import { useState } from 'react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { STAY_CHEF_PLAN, formatIDR as formatIDRFull, planDailyRate } from '@/data/siteFacts'
import { Link } from 'react-router-dom'
import FAQAccordion from '@/components/catering/FAQAccordion'

/**
 * Single source for the "What's included" block — rendered visibly below and
 * emitted as FAQPage JSON-LD. Keep the two in sync by only editing this array.
 */
const FAQS = [
  { q: 'Where are full prices listed?', a: 'On <a href="/pricing">pricing</a> and the private chef meal-plan table at <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'Daily chef rates?', a: 'Stay chef is a full day of staff: IDR 2,700,000++ (IDR 3,267,000 all-in). Three meals, each breakfast, lunch or dinner as you choose. One meal is catering.' },
  { q: 'What is included vs groceries?', a: 'Daily hire: labor included, groceries at cost. Many event packages include food in the per-person price.' },
  { q: 'Weekly and monthly discounts?', a: '−10% at 7+ days, −20% at 28+ days on the full-day stay-chef rate only.' },
  { q: 'Deposit?', a: 'Usually 50%.' },
  { q: 'Cancellation tiers?', a: 'Full refund 14+ days, 50% at 7–13, none under 7. <a href="/cancellation">Policy</a>.' },
  { q: 'Hidden fees?', a: 'Quotes itemise travel, premium ingredients and add-ons before deposit.' },
  { q: 'Wedding price band?', a: 'Often IDR 1.5M–3M++ per person for full receptions.' },
  { q: 'Staff hourly rates?', a: 'Waiters and butlers priced on request. Cocktail packages from IDR 500,000++ per guest (min 10 guests).' },
  { q: 'How to get an exact total?', a: 'Share date, guests, area and format for a fixed quote.' },
  { q: 'Currency?', a: 'IDR pricing; international transfers accepted as invoiced.' },
  { q: 'Compare formats?', a: 'Use <a href="/dining-styles">dining styles</a> and <a href="/services">services</a>.' },
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

// ── Types ────────────────────────────────────────────────────────────────────

interface ServiceOption {
  id: string
  label: string
  description: string
  basePricePerPerson: number
}

interface GuestOption {
  id: string
  label: string
  range: string
  multiplier: number
  contactOnly: boolean
}

interface MenuOption {
  id: string
  label: string
  description: string
  multiplier: number
}

interface AddOn {
  id: string
  label: string
  pricePerPerson: number
}

// ── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: ServiceOption[] = [
  { id: 'private-chef-dinner', label: 'Private Chef Dinner', description: 'One-off in-villa dinner, priced per guest. Hiring a chef for several days? See the day rates below.', basePricePerPerson: 700000 },
  { id: 'villa-catering', label: 'Villa Catering', description: 'Full catering service delivered to your villa', basePricePerPerson: 400000 },
  { id: 'wedding-catering', label: 'Wedding Catering', description: 'Elegant catering for your Bali wedding celebration', basePricePerPerson: 550000 },
  { id: 'corporate-event', label: 'Corporate Event', description: 'Professional catering for business events and retreats', basePricePerPerson: 480000 },
  { id: 'floating-breakfast', label: 'Floating Breakfast', description: 'Iconic Bali pool breakfast experience', basePricePerPerson: 450000 },
]

const GUEST_OPTIONS: GuestOption[] = [
  { id: '2-5', label: '2–5 guests', range: '2–5', multiplier: 1.2, contactOnly: false },
  { id: '6-15', label: '6–15 guests', range: '6–15', multiplier: 1.0, contactOnly: false },
  { id: '16-30', label: '16–30 guests', range: '16–30', multiplier: 0.9, contactOnly: false },
  { id: '31-80', label: '31–80 guests', range: '31–80', multiplier: 0.85, contactOnly: false },
  { id: '80plus', label: '80+ guests', range: '80+', multiplier: 1.0, contactOnly: true },
]

const MENU_OPTIONS: MenuOption[] = [
  { id: 'standard', label: 'Standard', description: '3 courses — soup or salad, main, dessert', multiplier: 1.0 },
  { id: 'premium', label: 'Premium', description: '5 courses — amuse-bouche, starter, fish, main, dessert', multiplier: 1.4 },
  { id: 'fine-dining', label: 'Fine Dining', description: '7+ courses — full tasting menu with wine pairings available', multiplier: 1.8 },
]

const ADD_ONS: AddOn[] = [
  { id: 'bar', label: 'Bar service & champagne', pricePerPerson: 150000 },
  { id: 'decor', label: 'Table décor & florals', pricePerPerson: 100000 },
  { id: 'butler', label: 'Butler service', pricePerPerson: 200000 },
  { id: 'floating-bkf', label: 'Floating breakfast add-on', pricePerPerson: 200000 },
  { id: 'cooking-class', label: 'Cooking class integration', pricePerPerson: 250000 },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatIDR(amount: number): string {
  // Indonesian format: period as thousands separator
  return amount.toLocaleString('id-ID')
}

function getGuestMidpoint(guestOptionId: string): number {
  switch (guestOptionId) {
    case '2-5': return 4
    case '6-15': return 10
    case '16-30': return 22
    case '31-80': return 50
    default: return 10
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-stone-500">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium text-amber-700">{Math.round((currentStep / totalSteps) * 100)}% complete</span>
      </div>
      <div className="w-full bg-stone-200 rounded-full h-2">
        <div
          className="bg-amber-700 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      <div className="flex justify-between mt-3">
        {['Service', 'Guests', 'Menu', 'Add-ons'].map((label, index) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                index + 1 < currentStep
                  ? 'bg-amber-700 border-amber-700 text-white'
                  : index + 1 === currentStep
                  ? 'border-amber-700 text-amber-700 bg-white'
                  : 'border-stone-300 text-stone-400 bg-white'
              }`}
            >
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <span className={`text-xs mt-1 hidden sm:block ${index + 1 <= currentStep ? 'text-amber-700 font-medium' : 'text-stone-400'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function PricingCalculatorPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedGuests, setSelectedGuests] = useState<string | null>(null)
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const totalSteps = 4

  // ── Calculation ─────────────────────────────────────────────────────────────

  const calculateEstimate = () => {
    if (!selectedService || !selectedGuests || !selectedMenu) return null

    const service = SERVICES.find((s) => s.id === selectedService)
    const guestOption = GUEST_OPTIONS.find((g) => g.id === selectedGuests)
    const menuOption = MENU_OPTIONS.find((m) => m.id === selectedMenu)

    if (!service || !guestOption || !menuOption) return null

    const guestCount = getGuestMidpoint(selectedGuests)
    const addOnTotal = selectedAddOns.reduce((sum, addOnId) => {
      const addOn = ADD_ONS.find((a) => a.id === addOnId)
      return sum + (addOn ? addOn.pricePerPerson : 0)
    }, 0)

    const pricePerPerson = service.basePricePerPerson * guestOption.multiplier * menuOption.multiplier + addOnTotal
    const totalBase = pricePerPerson * guestCount

    return {
      low: Math.round(totalBase * 0.9 / 1000) * 1000,
      high: Math.round(totalBase * 1.1 / 1000) * 1000,
      perPerson: Math.round(pricePerPerson / 1000) * 1000,
      guestCount,
    }
  }

  // ── WhatsApp message builder ─────────────────────────────────────────────────

  const buildWhatsAppUrl = () => {
    const service = SERVICES.find((s) => s.id === selectedService)
    const guestOption = GUEST_OPTIONS.find((g) => g.id === selectedGuests)
    const menuOption = MENU_OPTIONS.find((m) => m.id === selectedMenu)
    const estimate = calculateEstimate()

    const serviceName = service?.label ?? 'private chef service'
    const guestRange = guestOption?.range ?? ''
    const menuName = menuOption?.label ?? ''
    const budget = estimate ? `IDR ${formatIDR(estimate.low)} – IDR ${formatIDR(estimate.high)}` : ''

    const message = `Hi myCHEF, I used your pricing calculator. I need ${serviceName} for ${guestRange} guests at ${menuName} level. Estimated budget: ${budget}. Can you send a detailed quote?`

    return `https://wa.me/6289674072020?text=${encodeURIComponent(message)}`
  }

  // ── Toggle add-on ────────────────────────────────────────────────────────────

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  // ── Navigation ───────────────────────────────────────────────────────────────

  const canProceed = () => {
    if (step === 1) return selectedService !== null
    if (step === 2) {
      const guestOption = GUEST_OPTIONS.find((g) => g.id === selectedGuests)
      return selectedGuests !== null && !guestOption?.contactOnly
    }
    if (step === 3) return selectedMenu !== null
    return true
  }

  const selectedGuestIsContactOnly = selectedGuests
    ? GUEST_OPTIONS.find((g) => g.id === selectedGuests)?.contactOnly
    : false

  const estimate = step > 3 || (step === 4) ? calculateEstimate() : null

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <>
      <SeoHead
        title="Private Chef Pricing Calculator Bali | Instant Cost Estimate | myCHEF"
        description="Get an instant private chef cost estimate for your Bali villa. Select service type, guest count and menu level — see your price in seconds."
        canonical="https://mychef.id/pricing-calculator"
        jsonLd={[
          breadcrumbSchema('Pricing Calculator', 'https://mychef.id/pricing-calculator'),
          faqPageSchema(FAQS.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-stone-50 pt-20 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-700 text-sm font-semibold tracking-widest uppercase mb-3">Instant Estimate</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 leading-tight">
            Private Chef Pricing Calculator
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Answer four quick questions and receive an instant estimate for your Bali villa event. No registration required.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 px-4 bg-stone-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">

            <ProgressBar currentStep={step} totalSteps={totalSteps} />

            {/* Step 1 — Service Type */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">What type of service do you need?</h2>
                <p className="text-stone-500 mb-6">Select the experience that best matches your occasion.</p>
                <div className="space-y-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedService === service.id
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={`font-semibold text-base ${selectedService === service.id ? 'text-amber-800' : 'text-stone-800'}`}>
                            {service.label}
                          </p>
                          <p className="text-sm text-stone-500 mt-0.5">{service.description}</p>
                        </div>
                        <div className="text-right ml-4 flex-shrink-0">
                          <p className="text-xs text-stone-400">from</p>
                          <p className={`text-sm font-semibold ${selectedService === service.id ? 'text-amber-700' : 'text-stone-700'}`}>
                            IDR {formatIDR(service.basePricePerPerson)}/person
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/*
                  This calculator prices one-off events per guest. Hiring a chef for a
                  stay is a different product with a different unit (per day, not per
                  person), so rather than fake it we publish the real rental rates here
                  and hand off to the pillar. Figures come from STAY_CHEF_PLAN — never
                  hardcode them.
                */}
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
                  <p className="text-sm font-semibold text-amber-900">
                    Renting a chef for your whole stay?
                  </p>
                  <p className="mt-1 text-sm text-stone-600">
                    That is a full day of staff, priced per day — one chef plus a dedicated
                    assistant, however many people you are (about 10 guests on the published rate).
                    Three meals; use each as breakfast, lunch or dinner as you like.
                  </p>
                  <dl className="mt-4 grid gap-2">
                    <div className="rounded-xl bg-white px-4 py-3">
                      <dt className="text-xs text-stone-500">Full-day stay chef</dt>
                      <dd className="text-sm font-semibold text-stone-800">
                        {formatIDRFull(STAY_CHEF_PLAN.daily)}++
                        <span className="font-normal text-stone-400"> /day</span>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs text-stone-500">
                    Weekly rate {formatIDRFull(planDailyRate(STAY_CHEF_PLAN, 'weekly'))}++/day ·
                    monthly {formatIDRFull(planDailyRate(STAY_CHEF_PLAN, 'monthly'))}++/day ·
                    groceries sourced by us and billed at cost. One meal is catering.
                  </p>
                  <Link
                    to="/private-chef-bali#prices"
                    className="mt-3 inline-block text-sm font-semibold text-amber-800 underline underline-offset-2 hover:text-amber-900"
                  >
                    See the full private chef day rates →
                  </Link>
                </div>
              </div>
            )}

            {/* Step 2 — Guest Count */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">How many guests?</h2>
                <p className="text-stone-500 mb-6">Larger groups receive volume discounts.</p>
                <div className="space-y-3">
                  {GUEST_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedGuests(option.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedGuests === option.id
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <p className={`font-semibold ${selectedGuests === option.id ? 'text-amber-800' : 'text-stone-800'}`}>
                          {option.label}
                        </p>
                        {option.contactOnly ? (
                          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                            Custom quote
                          </span>
                        ) : option.multiplier < 1.0 ? (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                            {Math.round((1 - option.multiplier) * 100)}% discount
                          </span>
                        ) : option.multiplier > 1.0 ? (
                          <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full font-medium">
                            Small party rate
                          </span>
                        ) : (
                          <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full font-medium">
                            Standard rate
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* 80+ contact prompt */}
                {selectedGuestIsContactOnly && (
                  <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
                    <p className="text-amber-800 font-medium mb-3">
                      For 80+ guests we prepare a custom proposal tailored to your venue and requirements.
                    </p>
                    <a
                      href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%20need%20catering%20for%2080%2B%20guests.%20Can%20you%20send%20a%20custom%20quote%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.527 5.845L.057 23.18c-.066.254.159.48.413.413l5.334-1.47A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.006-1.37l-.36-.213-3.166.872.845-3.087-.234-.374A9.784 9.784 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
                      </svg>
                      Request a Custom Quote
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Step 3 — Menu Level */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Choose your menu level</h2>
                <p className="text-stone-500 mb-6">From elegant three-course dinners to full tasting menus.</p>
                <div className="space-y-3">
                  {MENU_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedMenu(option.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedMenu === option.id
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={`font-semibold text-base ${selectedMenu === option.id ? 'text-amber-800' : 'text-stone-800'}`}>
                            {option.label}
                          </p>
                          <p className="text-sm text-stone-500 mt-0.5">{option.description}</p>
                        </div>
                        {option.multiplier > 1.0 && (
                          <span className="ml-4 flex-shrink-0 text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full font-medium">
                            ×{option.multiplier}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4 — Add-ons */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Enhance your experience</h2>
                <p className="text-stone-500 mb-6">Optional add-ons — select all that apply. Skip to see your estimate.</p>
                <div className="space-y-3 mb-8">
                  {ADD_ONS.map((addOn) => {
                    const isChecked = selectedAddOns.includes(addOn.id)
                    return (
                      <label
                        key={addOn.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          isChecked ? 'border-amber-700 bg-amber-50' : 'border-stone-200 hover:border-stone-300 bg-white'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddOn(addOn.id)}
                          className="w-5 h-5 rounded accent-amber-700 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className={`font-semibold ${isChecked ? 'text-amber-800' : 'text-stone-800'}`}>{addOn.label}</p>
                        </div>
                        <p className="text-sm font-medium text-stone-600 flex-shrink-0">
                          +IDR {formatIDR(addOn.pricePerPerson)}/person
                        </p>
                      </label>
                    )
                  })}
                </div>

                {/* Estimate Result */}
                {estimate && (
                  <div className="bg-stone-900 rounded-2xl p-6 sm:p-8 text-white">
                    <p className="text-stone-400 text-sm font-medium uppercase tracking-wider mb-2">Your Estimated Range</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      IDR {formatIDR(estimate.low)}
                    </p>
                    <p className="text-xl text-stone-300 mb-4">— IDR {formatIDR(estimate.high)}</p>
                    <p className="text-stone-400 text-sm mb-6">
                      Based on approx. {estimate.guestCount} guests · IDR {formatIDR(estimate.perPerson)}/person · {MENU_OPTIONS.find((m) => m.id === selectedMenu)?.label} menu
                    </p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-full text-base transition-colors duration-200 w-full justify-center sm:w-auto"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.527 5.845L.057 23.18c-.066.254.159.48.413.413l5.334-1.47A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.006-1.37l-.36-.213-3.166.872.845-3.087-.234-.374A9.784 9.784 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
                      </svg>
                      Get Your Custom Quote on WhatsApp
                    </a>
                    <p className="text-stone-500 text-xs mt-4">
                      Prices are estimates. Final quote depends on date, location, and specific requirements.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-stone-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="px-6 py-3 text-stone-600 font-semibold rounded-full border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all duration-200"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  onClick={() => canProceed() && setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={`px-8 py-3 font-bold rounded-full transition-all duration-200 ${
                    canProceed()
                      ? 'bg-amber-700 text-white hover:bg-amber-800 shadow-md hover:shadow-lg'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => {
                    setStep(1)
                    setSelectedService(null)
                    setSelectedGuests(null)
                    setSelectedMenu(null)
                    setSelectedAddOns([])
                  }}
                  className="px-6 py-3 text-amber-700 font-semibold rounded-full border border-amber-200 hover:bg-amber-50 transition-all duration-200"
                >
                  Start Over
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* What's Included FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">What's included in the price?</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-stone-50 rounded-2xl p-8">
            <p className="text-xl font-bold text-stone-900 mb-2">Ready to book your private chef?</p>
            <p className="text-stone-500 mb-6">Tell us your date and we'll confirm availability within the hour.</p>
            <a
              href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20private%20chef%20in%20Bali."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.527 5.845L.057 23.18c-.066.254.159.48.413.413l5.334-1.47A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.006-1.37l-.36-.213-3.166.872.845-3.087-.234-.374A9.784 9.784 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
              Chat with myCHEF on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
