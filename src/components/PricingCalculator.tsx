import { useMemo, useState } from 'react'
import { Calculator, ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Link } from 'react-router-dom'
import { STAY_CHEF_PLAN, STAY_DISCOUNTS, formatIDR } from '@/data/siteFacts'

type ServiceType = 'private-chef-dinner' | 'catering-event' | 'fine-dining-experience' | 'staffing'
type GuestRange = '2-4' | '5-10' | '11-20' | '20+'
type DurationKey = '2-hours' | '3-hours' | 'half-day' | 'full-day'

interface PricingCalculatorProps {
  compact?: boolean
  collapsible?: boolean
  defaultOpen?: boolean
  hideHeader?: boolean
  title?: string
  description?: string
  className?: string
}

const SERVICE_OPTIONS: { value: ServiceType; label: string; badge?: string }[] = [
  { value: 'private-chef-dinner', label: 'Private Dinner', badge: 'Most Popular' },
  { value: 'catering-event', label: 'Catering Event' },
  { value: 'fine-dining-experience', label: 'Fine Dining Experience' },
  { value: 'staffing', label: 'Staffing' },
]

const GUEST_OPTIONS: { value: GuestRange; label: string; minGuests: number }[] = [
  { value: '2-4', label: '2–4', minGuests: 2 },
  { value: '5-10', label: '5–10', minGuests: 5 },
  { value: '11-20', label: '11–20', minGuests: 11 },
  { value: '20+', label: '20+', minGuests: 20 },
]

const DURATION_OPTIONS: { value: DurationKey; label: string; multiplier: number }[] = [
  { value: '2-hours', label: '2 hours', multiplier: 1 },
  { value: '3-hours', label: '3 hours', multiplier: 1.2 },
  { value: 'half-day', label: 'Half day', multiplier: 1.5 },
  { value: 'full-day', label: 'Full day', multiplier: 2 },
]

// --- Enquiry qualifiers (no effect on the estimate; only enrich the WhatsApp message) ---
type WhenKey = 'asap' | 'this-week' | 'this-month' | 'flexible'
type IntentKey = 'pricing' | 'book' | 'menu' | 'choose'

const WHEN_OPTIONS: { value: WhenKey; label: string; wa: string }[] = [
  { value: 'asap', label: 'Today / tomorrow', wa: 'today or tomorrow' },
  { value: 'this-week', label: 'This week', wa: 'this week' },
  { value: 'this-month', label: 'This month', wa: 'this month' },
  { value: 'flexible', label: 'Flexible', wa: 'flexible dates' },
]

const AREA_OPTIONS = ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu / Bukit', 'Jimbaran', 'Sanur', 'Nusa Dua', 'Denpasar', 'Other Bali area', 'Not sure yet']

const INTENT_OPTIONS: { value: IntentKey; label: string; wa: string }[] = [
  { value: 'pricing', label: 'Exact pricing', wa: 'exact pricing' },
  { value: 'book', label: 'Ready to book', wa: 'booking availability' },
  { value: 'menu', label: 'Menu ideas', wa: 'menu options' },
  { value: 'choose', label: 'Help me choose', wa: 'help choosing the right service' },
]

function formatEstimateIDR(value: number) {
  return `IDR ${Math.round(value).toLocaleString('id-ID')}`
}

function recommendedWaiters(guestCount: number) {
  return Math.max(1, Math.ceil(guestCount / 8))
}

export default function PricingCalculator({
  compact = false,
  collapsible = false,
  defaultOpen = true,
  hideHeader = false,
  title = 'Quick estimate',
  description = 'Choose your service, guest count and timing to see a live starting price.',
  className = '',
}: PricingCalculatorProps) {
  const [serviceType, setServiceType] = useState<ServiceType>('private-chef-dinner')
  const [guestRange, setGuestRange] = useState<GuestRange>('2-4')
  const [duration, setDuration] = useState<DurationKey>('2-hours')
  const [includeWaiters, setIncludeWaiters] = useState(false)
  const [waiterCount, setWaiterCount] = useState(1)
  const [includeBartender, setIncludeBartender] = useState(false)
  const [includeSommelier, setIncludeSommelier] = useState(false)
  const [includeFloatingBreakfast, setIncludeFloatingBreakfast] = useState(false)
  const [whenKey, setWhenKey] = useState<WhenKey>('this-week')
  const [area, setArea] = useState<string>('Not sure yet')
  const [intent, setIntent] = useState<IntentKey>('pricing')
  const [notes, setNotes] = useState('')
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const selectedService = SERVICE_OPTIONS.find((option) => option.value === serviceType) ?? SERVICE_OPTIONS[0]
  const selectedGuests = GUEST_OPTIONS.find((option) => option.value === guestRange) ?? GUEST_OPTIONS[0]
  const selectedDuration = DURATION_OPTIONS.find((option) => option.value === duration) ?? DURATION_OPTIONS[0]
  const baseWaiters = recommendedWaiters(selectedGuests.minGuests)

  const serviceSubtotal = useMemo(() => {
    const guestCount = selectedGuests.minGuests
    const multiplier = selectedDuration.multiplier

    switch (serviceType) {
      // Per-person villa dinner floor, matching /pricing and the homepage price strip.
      // The old formula added an unexplained flat 500,000 on top, which made this
      // calculator disagree with every published figure on the site.
      case 'private-chef-dinner':
        return guestCount * 700_000 * multiplier
      case 'catering-event':
        return (guestCount * 700_000 + 1_500_000) * multiplier
      case 'fine-dining-experience':
        return (guestCount * 850_000 + 750_000) * multiplier
      case 'staffing':
        // Waiter/butler list rates not published — estimate shows chef/catering floors only
        return 0
      default:
        return 0
    }
  }, [baseWaiters, selectedDuration.multiplier, selectedGuests.minGuests, serviceType])

  const addOnsTotal = useMemo(() => {
    const guestCount = selectedGuests.minGuests
    // Cocktail packages: BYO floor IDR 500,000++/guest, min 10 guests (SSoT cocktailServicePackages)
    const cocktailGuestCount = Math.max(10, guestCount)
    const cocktailPackageEstimate = cocktailGuestCount * 500_000

    return (
      (includeWaiters ? 0 : 0) + // waiters: priced on request (not estimated)
      (includeBartender ? cocktailPackageEstimate : 0) +
      (includeSommelier ? 1_200_000 : 0) +
      (includeFloatingBreakfast ? guestCount * 150_000 : 0)
    )
  }, [includeBartender, includeFloatingBreakfast, includeSommelier, includeWaiters, selectedGuests.minGuests, waiterCount])

  const estimatedTotal = Math.round(serviceSubtotal + addOnsTotal)

  const selectedAddOns = [
    includeWaiters ? `${waiterCount} waiter${waiterCount > 1 ? 's' : ''} (priced on request)` : null,
    includeBartender
      ? `cocktail package (BYO from IDR 500K++/guest, min 10; estimate uses ${Math.max(10, selectedGuests.minGuests)} guests)`
      : null,
    includeSommelier ? 'sommelier' : null,
    includeFloatingBreakfast ? 'floating breakfast' : null,
  ].filter(Boolean)

  const selectedWhen = WHEN_OPTIONS.find((option) => option.value === whenKey) ?? WHEN_OPTIONS[1]
  const selectedIntent = INTENT_OPTIONS.find((option) => option.value === intent) ?? INTENT_OPTIONS[0]

  const whatsappText = encodeURIComponent(
    [
      `Hi myCHEF, I'm interested in ${selectedService.label}.`,
      `When: ${selectedWhen.wa}.`,
      `Guests: ${selectedGuests.label}.`,
      `Duration: ${selectedDuration.label}.`,
      `Area: ${area}.`,
      `Looking for: ${selectedIntent.wa}.`,
      selectedAddOns.length ? `Add-ons: ${selectedAddOns.join(', ')}.` : '',
      notes.trim() ? `Notes: ${notes.trim()}.` : '',
    ]
      .filter(Boolean)
      .join(' '),
  )

  const calculatorBody = (
    <div className={`${compact ? 'rounded-[28px] p-5 md:p-6' : 'rounded-[32px] p-6 md:p-8'} border border-[#E5D9B5] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]`}>
      {!hideHeader && !collapsible && (
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF2D4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6F15]">
            <Calculator className="h-4 w-4" />
            {title}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#4A4745]">{description}</p>
        </div>
      )}

      <div className={`grid gap-6 ${compact ? 'lg:grid-cols-1' : 'xl:grid-cols-[1.2fr_0.8fr]'}`}>
        <div className="space-y-6">
          <fieldset>
            <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">
              Service type
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICE_OPTIONS.map((option) => {
                const isActive = serviceType === option.value
                return (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-semibold transition ${isActive ? 'border-[#C5A028] bg-[#FAF2D4] text-[#1A1A1A]' : 'border-[#E5DED0] bg-[#FAFAF8] text-[#4A4745] hover:border-[#C5A028]/60'}`}
                  >
                    <input
                      type="radio"
                      name="service-type"
                      value={option.value}
                      checked={serviceType === option.value}
                      onChange={() => setServiceType(option.value)}
                      className="sr-only"
                    />
                    <div className="flex items-start justify-between gap-3">
                      <span>{option.label}</span>
                      {option.badge && (
                        <span className="rounded-full bg-[#C5A028] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A]">
                          {option.badge}
                        </span>
                      )}
                    </div>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">Number of guests</legend>
            <div className="grid grid-cols-2 gap-3">
              {GUEST_OPTIONS.map((option) => {
                const isActive = guestRange === option.value
                return (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-semibold transition ${isActive ? 'border-[#C5A028] bg-[#FAF2D4] text-[#1A1A1A]' : 'border-[#E5DED0] bg-[#FAFAF8] text-[#4A4745] hover:border-[#C5A028]/60'}`}
                  >
                    <input
                      type="radio"
                      name="guest-range"
                      value={option.value}
                      checked={guestRange === option.value}
                      onChange={() => setGuestRange(option.value)}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">Duration</legend>
            <div className="grid grid-cols-2 gap-3">
              {DURATION_OPTIONS.map((option) => {
                const isActive = duration === option.value
                return (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-semibold transition ${isActive ? 'border-[#C5A028] bg-[#FAF2D4] text-[#1A1A1A]' : 'border-[#E5DED0] bg-[#FAFAF8] text-[#4A4745] hover:border-[#C5A028]/60'}`}
                  >
                    <input
                      type="radio"
                      name="duration"
                      value={option.value}
                      checked={duration === option.value}
                      onChange={() => setDuration(option.value)}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">Add-ons</legend>
            <div className="space-y-3">
              <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#E5DED0] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A]">
                <span className="flex items-center gap-3">
                  <input type="checkbox" checked={includeWaiters} onChange={(event) => setIncludeWaiters(event.target.checked)} className="h-4 w-4 rounded border-[#C5A028] text-[#C5A028] focus:ring-2 focus:ring-[#C5A028] focus:outline-none" />
                  + Waiters (priced on request)
                </span>
                {includeWaiters && (
                  <select
                    aria-label="Waiter quantity"
                    value={waiterCount}
                    onChange={(event) => setWaiterCount(Number(event.target.value))}
                    className="rounded-xl border border-[#DDD4BF] bg-white px-3 py-2 text-xs font-semibold text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                  >
                    {[1, 2, 3, 4].map((count) => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                )}
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-[#E5DED0] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A]">
                <input type="checkbox" checked={includeBartender} onChange={(event) => setIncludeBartender(event.target.checked)} className="h-4 w-4 rounded border-[#C5A028] text-[#C5A028] focus:ring-2 focus:ring-[#C5A028] focus:outline-none" />
                + Cocktail package (from IDR 500K++/guest, min 10 — not hourly hire)
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-[#E5DED0] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A]">
                <input type="checkbox" checked={includeSommelier} onChange={(event) => setIncludeSommelier(event.target.checked)} className="h-4 w-4 rounded border-[#C5A028] text-[#C5A028] focus:ring-2 focus:ring-[#C5A028] focus:outline-none" />
                + Sommelier (from IDR 1.2M/dinner)
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-[#E5DED0] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A]">
                <input type="checkbox" checked={includeFloatingBreakfast} onChange={(event) => setIncludeFloatingBreakfast(event.target.checked)} className="h-4 w-4 rounded border-[#C5A028] text-[#C5A028] focus:ring-2 focus:ring-[#C5A028] focus:outline-none" />
                + Floating Breakfast (+IDR 150K/person)
              </label>
            </div>
          </fieldset>

          <div className="rounded-2xl border border-dashed border-[#E3D4A2] bg-[#FCF8EC] p-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6F15]">A few details = a faster, exact reply</p>

            <fieldset>
              <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">When</legend>
              <div className="grid grid-cols-2 gap-3">
                {WHEN_OPTIONS.map((option) => {
                  const isActive = whenKey === option.value
                  return (
                    <label
                      key={option.value}
                      className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-semibold transition ${isActive ? 'border-[#C5A028] bg-[#FAF2D4] text-[#1A1A1A]' : 'border-[#E5DED0] bg-white text-[#4A4745] hover:border-[#C5A028]/60'}`}
                    >
                      <input type="radio" name="enquiry-when" value={option.value} checked={whenKey === option.value} onChange={() => setWhenKey(option.value)} className="sr-only" />
                      {option.label}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <fieldset className="mt-4">
              <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">Area</legend>
              <select
                aria-label="Area or villa location"
                value={area}
                onChange={(event) => setArea(event.target.value)}
                className="w-full rounded-2xl border border-[#E5DED0] bg-white px-4 py-3 text-sm font-semibold text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                {AREA_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </fieldset>

            <fieldset className="mt-4">
              <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">What do you need?</legend>
              <div className="grid grid-cols-2 gap-3">
                {INTENT_OPTIONS.map((option) => {
                  const isActive = intent === option.value
                  return (
                    <label
                      key={option.value}
                      className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-semibold transition ${isActive ? 'border-[#C5A028] bg-[#FAF2D4] text-[#1A1A1A]' : 'border-[#E5DED0] bg-white text-[#4A4745] hover:border-[#C5A028]/60'}`}
                    >
                      <input type="radio" name="enquiry-intent" value={option.value} checked={intent === option.value} onChange={() => setIntent(option.value)} className="sr-only" />
                      {option.label}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <fieldset className="mt-4">
              <legend className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7A47]">Notes <span className="font-normal normal-case tracking-normal text-[#9A9388]">(optional)</span></legend>
              <input
                type="text"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                maxLength={160}
                placeholder="Allergies, kids, occasion, villa kitchen…"
                className="w-full rounded-2xl border border-[#E5DED0] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A8A296] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              />
            </fieldset>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#1A1A1A] p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A028]">Estimated subtotal</p>
          <p className="mt-4 text-3xl font-playfair leading-tight md:text-4xl">From {formatEstimateIDR(estimatedTotal)}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A028]/90">Before tax &amp; service</p>
          <p className="mt-4 text-sm leading-relaxed text-white/[75%]">
            Based on {selectedService.label.toLowerCase()}, {selectedGuests.label} guests and {selectedDuration.label.toLowerCase()} service.
          </p>
          {serviceType === 'staffing' && (
            <p className="mt-3 text-sm leading-relaxed text-white/[75%]">
              Staffing (waiters/butlers) priced on request — not estimated in this calculator. Suggested crew size for this guest range: {baseWaiters} waiter{baseWaiters > 1 ? 's' : ''}.
            </p>
          )}
          {serviceType === 'private-chef-dinner' && (
            /*
              This estimate is for a one-off event, priced per guest. Renting a chef for
              a stay is a per-day product — publish those real rates here rather than
              letting someone assume the per-guest figure applies to a week.
            */
            <div className="mt-4 rounded-2xl border border-[#C5A028]/30 bg-[#C5A028]/10 p-4">
              <p className="text-sm font-semibold text-[#C5A028]">Renting a chef for several days?</p>
              <p className="mt-1 text-sm leading-relaxed text-white/[75%]">
                Priced per day, not per guest: full-day stay chef{' '}
                <strong className="text-white">{formatIDR(STAY_CHEF_PLAN.daily)}++</strong> (three
                flexible meals). Weekly −{STAY_DISCOUNTS.weekly.off * 100}%, monthly −
                {STAY_DISCOUNTS.monthly.off * 100}% on that full-day rate only. One meal is catering.
              </p>
              <Link
                to="/private-chef-bali#prices"
                className="mt-2 inline-block text-sm font-semibold text-[#C5A028] underline underline-offset-2"
              >
                See the full day rates →
              </Link>
            </div>
          )}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/[80%]">
            <div className="flex items-center justify-between gap-4">
              <span>Core estimate</span>
              <span>{formatEstimateIDR(serviceSubtotal)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <span>Add-ons</span>
              <span>{formatEstimateIDR(addOnsTotal)}</span>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-[#C5A028]/25 bg-[#C5A028]/[8%] p-4">
            <p className="text-sm leading-relaxed text-white/[85%]">
              <span className="font-medium text-white">This is a menu subtotal.</span> 11% government tax and 10% service charge are added on your final quote, as is standard for catering in Bali.
            </p>
          </div>
          <p className="mt-4 text-sm text-white/[75%]">Final pricing confirmed on WhatsApp — everything that affects the price is listed above.</p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/[50%]">“From” uses the lowest guest count in your selected range.</p>
          <Button asChild variant="whatsapp" size="brand" className="mt-6 w-full justify-center">
            <a href={`https://wa.me/6289674072020?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" data-source="pricing-calculator-cta">
              <MessageCircle className="h-4 w-4" />
              Get exact quote on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )

  if (!collapsible) {
    return <div className={className}>{calculatorBody}</div>
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={className}>
      <div className="overflow-hidden rounded-[28px] border border-[#E5D9B5] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
        <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF2D4] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A6F15]">
              <Calculator className="h-3.5 w-3.5" />
              {title}
            </div>
            {!hideHeader && <p className="mt-3 text-sm leading-relaxed text-[#4A4745]">{description}</p>}
          </div>
          <div className={`rounded-full border border-[#E3D4A2] p-3 text-[#8A6F15] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown className="h-4 w-4" />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t border-[#F0E8D3] px-4 pb-4 pt-2 md:px-6 md:pb-6">
          {calculatorBody}
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
