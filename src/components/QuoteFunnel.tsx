import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  ChevronLeft,
  ChefHat,
  UtensilsCrossed,
  PartyPopper,
  MessageCircle,
  Minus,
  Plus,
} from 'lucide-react'
import SeoHead, { breadcrumbSchema } from './SeoHead'
import { trackEvent, trackFormStart, trackFormComplete, ESTIMATED_LEAD_VALUE_IDR } from '@/lib/analytics'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

/**
 * High-converting quote funnel.
 *
 * Design goals (from conversion brief):
 * - Finish in under ~60 seconds
 * - First screen is one question: Private Chef / Catering / Events
 * - Every following step is service-specific (no irrelevant fields)
 * - Never show prices on this page
 * - Collect only what sales/ops need before WhatsApp
 */

type ServiceId = 'private-chef' | 'catering' | 'events'

type MealId = 'breakfast' | 'lunch' | 'dinner'
type ChefExperienceId =
  | 'family-style'
  | 'fine-dining'
  | 'bbq'
  | 'indonesian'
  | 'western'
  | 'japanese'
  | 'healthy'
  | 'chef-choice'

type DietaryId = 'vegetarian' | 'vegan' | 'gluten-free' | 'halal' | 'nut-allergy' | 'other'

type CateringTypeId =
  | 'buffet'
  | 'bbq'
  | 'plated'
  | 'family-style'
  | 'canapes'
  | 'breakfast'
  | 'lunch'
  | 'dinner'

type CateringCuisineId = 'western' | 'asian' | 'indonesian' | 'japanese' | 'mixed' | 'chef-rec'

type EventTypeId =
  | 'wedding'
  | 'birthday'
  | 'corporate'
  | 'villa-party'
  | 'retreat'
  | 'engagement'
  | 'other'

type EventServiceId =
  | 'food'
  | 'chef'
  | 'decoration'
  | 'bartenders'
  | 'photographer'
  | 'videographer'
  | 'entertainment'
  | 'dj'
  | 'live-music'
  | 'furniture'
  | 'staff'
  | 'planning'
  | 'transport'
  | 'cake'
  | 'cocktails'

type FoodStyleId = 'buffet' | 'plated' | 'sharing' | 'bbq' | 'canapes'

interface QuoteForm {
  service?: ServiceId
  name: string
  whatsapp: string
  date: string
  guests: number
  guestsFlexible: boolean
  villaName: string
  area: string
  // Private chef
  meals: MealId[]
  experiences: ChefExperienceId[]
  dietary: DietaryId[]
  // Catering
  cateringTypes: CateringTypeId[]
  cateringCuisine?: CateringCuisineId
  // Events
  eventType?: EventTypeId
  eventServices: EventServiceId[]
  foodStyle?: FoodStyleId
  // Shared add-ons (labels stored as strings for WA message)
  addOns: string[]
}

const INITIAL: QuoteForm = {
  name: '',
  whatsapp: '',
  date: '',
  guests: 8,
  guestsFlexible: false,
  villaName: '',
  area: '',
  meals: [],
  experiences: [],
  dietary: [],
  cateringTypes: [],
  eventServices: [],
  addOns: [],
}

const SERVICES: {
  id: ServiceId
  title: string
  desc: string
  icon: typeof ChefHat
}[] = [
  {
    id: 'private-chef',
    title: 'Private Chef',
    desc: 'Chef comes to your villa and cooks fresh.',
    icon: ChefHat,
  },
  {
    id: 'catering',
    title: 'Catering',
    desc: 'Food delivered or served for larger groups.',
    icon: UtensilsCrossed,
  },
  {
    id: 'events',
    title: 'Events & Weddings',
    desc: 'Complete event planning, catering and staffing.',
    icon: PartyPopper,
  },
]

const AREAS = [
  'Seminyak',
  'Canggu',
  'Pererenan',
  'Ubud',
  'Uluwatu',
  'Jimbaran',
  'Nusa Dua',
  'Sanur',
  'Kuta / Legian',
  'Denpasar',
  'Other / Not sure',
]

const MEALS: { id: MealId; label: string }[] = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
]

const CHEF_EXPERIENCES: { id: ChefExperienceId; label: string }[] = [
  { id: 'family-style', label: 'Family Style' },
  { id: 'fine-dining', label: 'Fine Dining' },
  { id: 'bbq', label: 'BBQ' },
  { id: 'indonesian', label: 'Indonesian' },
  { id: 'western', label: 'Western' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'healthy', label: 'Healthy Meals' },
  { id: 'chef-choice', label: "Chef's Choice" },
]

const DIETARY: { id: DietaryId; label: string }[] = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'gluten-free', label: 'Gluten Free' },
  { id: 'halal', label: 'Halal' },
  { id: 'nut-allergy', label: 'Nut Allergy' },
  { id: 'other', label: 'Other' },
]

const CATERING_TYPES: { id: CateringTypeId; label: string }[] = [
  { id: 'buffet', label: 'Buffet' },
  { id: 'bbq', label: 'BBQ' },
  { id: 'plated', label: 'Plated Dinner' },
  { id: 'family-style', label: 'Family Style' },
  { id: 'canapes', label: 'Canapés' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
]

const CATERING_CUISINES: { id: CateringCuisineId; label: string }[] = [
  { id: 'western', label: 'Western' },
  { id: 'asian', label: 'Asian' },
  { id: 'indonesian', label: 'Indonesian' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'mixed', label: 'Mixed' },
  { id: 'chef-rec', label: 'Chef Recommendation' },
]

const EVENT_TYPES: { id: EventTypeId; label: string }[] = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'villa-party', label: 'Villa Party' },
  { id: 'retreat', label: 'Retreat' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'other', label: 'Other' },
]

const EVENT_SERVICES: { id: EventServiceId; label: string }[] = [
  { id: 'food', label: 'Food' },
  { id: 'chef', label: 'Chef' },
  { id: 'decoration', label: 'Decoration' },
  { id: 'bartenders', label: 'Bartenders' },
  { id: 'photographer', label: 'Photographer' },
  { id: 'videographer', label: 'Videographer' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'dj', label: 'DJ' },
  { id: 'live-music', label: 'Live Music' },
  { id: 'furniture', label: 'Furniture' },
  { id: 'staff', label: 'Staff' },
  { id: 'planning', label: 'Planning' },
  { id: 'transport', label: 'Transport' },
  { id: 'cake', label: 'Cake' },
  { id: 'cocktails', label: 'Cocktails' },
]

const FOOD_STYLES: { id: FoodStyleId; label: string }[] = [
  { id: 'buffet', label: 'Buffet' },
  { id: 'plated', label: 'Plated' },
  { id: 'sharing', label: 'Sharing Style' },
  { id: 'bbq', label: 'BBQ' },
  { id: 'canapes', label: 'Canapés' },
]

const CATERING_ADDONS = [
  'Waiters',
  'Bartenders',
  'Tables',
  'Chairs',
  'Glassware',
  'Coffee Station',
  'Cake',
  'Photographer',
  'Decoration',
]

/** Conditional upsells for private chef based on meals + experience. */
function chefAddOns(form: QuoteForm): string[] {
  const set = new Set<string>()
  if (form.meals.includes('dinner')) {
    ;['Table Decorations', 'Bartender', 'Photographer', 'Live Music', 'Flowers', 'Cake'].forEach((x) => set.add(x))
  }
  if (form.meals.includes('breakfast')) {
    ;['Floating Breakfast', 'Fresh Juice Station', 'Coffee Bar'].forEach((x) => set.add(x))
  }
  if (form.experiences.includes('bbq')) {
    ;['Seafood Upgrade', 'Premium Steak', 'Bartender', 'Dessert Table'].forEach((x) => set.add(x))
  }
  if (form.experiences.includes('family-style')) {
    ;['Waiter', 'Kids Menu', 'Decorations'].forEach((x) => set.add(x))
  }
  // Sensible defaults if nothing specific selected yet
  if (set.size === 0) {
    ;['Waiter', 'Bartender', 'Table Decorations', 'Photographer'].forEach((x) => set.add(x))
  }
  return Array.from(set)
}

/** Conditional upsells for events based on event type. */
function eventAddOns(form: QuoteForm): string[] {
  switch (form.eventType) {
    case 'wedding':
      return ['Flowers', 'Wedding Cake', 'Photographer', 'Videographer', 'Cocktail Bar', 'Welcome Drinks', 'MC']
    case 'birthday':
      return ['Cake', 'Photographer', 'DJ', 'Cocktail Bar', 'Decoration']
    case 'corporate':
      return ['Coffee Break', 'Registration Staff', 'Branding', 'Projector', 'Coffee Station']
    case 'engagement':
      return ['Flowers', 'Photographer', 'Cocktail Bar', 'Live Music', 'Cake']
    case 'retreat':
      return ['Coffee Station', 'Healthy Snacks', 'Staff', 'Decoration']
    case 'villa-party':
      return ['DJ', 'Bartender', 'Decoration', 'Photographer', 'Furniture']
    default:
      return ['Decoration', 'Photographer', 'Bartender', 'Cake', 'DJ']
  }
}

function toggleInList<T extends string>(list: T[], id: T): T[] {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
}

function formatDateLabel(iso: string): string {
  if (!iso) return 'Not set'
  try {
    return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

/** Dynamic step titles — progress bar uses step count, not fixed 9. */
function getStepTitles(service?: ServiceId): string[] {
  const base = ['What are you looking for?', 'Your details']
  if (!service) return base

  if (service === 'private-chef') {
    return [
      ...base,
      'Which meals would you like?',
      'What type of experience?',
      'Any dietary requirements?',
      'Enhance your experience',
      'Review & send',
    ]
  }
  if (service === 'catering') {
    return [
      ...base,
      'What type of catering?',
      'Cuisine preference',
      'Add-ons',
      'Review & send',
    ]
  }
  // events
  return [
    ...base,
    'Event type',
    'Which services do you need?',
    'Food style',
    'Recommended add-ons',
    'Review & send',
  ]
}

export default function QuoteFunnel() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<QuoteForm>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const titles = useMemo(() => getStepTitles(form.service), [form.service])
  const totalSteps = titles.length
  const isLast = step === totalSteps - 1

  const update = <K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const selectService = (id: ServiceId) => {
    setForm((f) => ({
      ...INITIAL,
      // keep contact fields if user already typed them after going back
      name: f.name,
      whatsapp: f.whatsapp,
      date: f.date,
      guests: f.guests,
      guestsFlexible: f.guestsFlexible,
      villaName: f.villaName,
      area: f.area,
      service: id,
    }))
    // Jump straight into details — one fewer click on the first screen
    setStep(1)
  }

  const canAdvance = useMemo(() => {
    // Step 0: service
    if (step === 0) return !!form.service
    // Step 1: basics
    if (step === 1) {
      const hasContact = form.name.trim().length >= 2 && form.whatsapp.trim().length >= 8
      const hasDate = form.date.length > 0
      const hasGuests = form.guestsFlexible || form.guests > 0
      const hasPlace = form.villaName.trim().length > 0 || form.area.length > 0
      return hasContact && hasDate && hasGuests && hasPlace
    }

    if (form.service === 'private-chef') {
      if (step === 2) return form.meals.length > 0
      if (step === 3) return form.experiences.length > 0
      if (step === 4) return true // dietary optional
      if (step === 5) return true // add-ons optional
      return true
    }

    if (form.service === 'catering') {
      if (step === 2) return form.cateringTypes.length > 0
      if (step === 3) return !!form.cateringCuisine
      if (step === 4) return true
      return true
    }

    if (form.service === 'events') {
      if (step === 2) return !!form.eventType
      if (step === 3) return form.eventServices.length > 0
      if (step === 4) return !!form.foodStyle
      if (step === 5) return true
      return true
    }

    return true
  }, [step, form])

  const next = useCallback(() => {
    if (canAdvance) setStep((s) => Math.min(s + 1, totalSteps - 1))
  }, [canAdvance, totalSteps])

  const back = useCallback(() => {
    if (submitted) {
      setSubmitted(false)
      return
    }
    setStep((s) => Math.max(s - 1, 0))
  }, [submitted])

  // Clamp step if service change shortens the funnel
  useEffect(() => {
    if (step > totalSteps - 1) setStep(totalSteps - 1)
  }, [totalSteps, step])

  const summary = useMemo(() => {
    const serviceLabel = SERVICES.find((s) => s.id === form.service)?.title ?? '—'
    const guestLabel = form.guestsFlexible ? 'Flexible / not sure' : `${form.guests}`
    const place =
      [form.villaName.trim() || null, form.area || null].filter(Boolean).join(' · ') || 'Not set'

    const rows: Record<string, string> = {
      Service: serviceLabel,
      Name: form.name.trim() || '—',
      WhatsApp: form.whatsapp.trim() || '—',
      Date: formatDateLabel(form.date),
      Guests: guestLabel,
      Location: place,
    }

    if (form.service === 'private-chef') {
      rows.Meals = form.meals.map((m) => MEALS.find((x) => x.id === m)?.label ?? m).join(', ') || '—'
      rows.Experience =
        form.experiences.map((e) => CHEF_EXPERIENCES.find((x) => x.id === e)?.label ?? e).join(', ') ||
        '—'
      rows.Dietary =
        form.dietary.length === 0
          ? 'None noted'
          : form.dietary.map((d) => DIETARY.find((x) => x.id === d)?.label ?? d).join(', ')
    }

    if (form.service === 'catering') {
      rows['Catering type'] =
        form.cateringTypes.map((t) => CATERING_TYPES.find((x) => x.id === t)?.label ?? t).join(', ') ||
        '—'
      rows.Cuisine = CATERING_CUISINES.find((c) => c.id === form.cateringCuisine)?.label ?? '—'
    }

    if (form.service === 'events') {
      rows['Event type'] = EVENT_TYPES.find((e) => e.id === form.eventType)?.label ?? '—'
      rows.Services =
        form.eventServices.map((s) => EVENT_SERVICES.find((x) => x.id === s)?.label ?? s).join(', ') ||
        '—'
      rows['Food style'] = FOOD_STYLES.find((f) => f.id === form.foodStyle)?.label ?? '—'
    }

    rows['Add-ons'] = form.addOns.length ? form.addOns.join(', ') : 'None'
    return rows
  }, [form])

  const waMessage = useMemo(() => {
    const lines = ['Hi myCHEF — quote request from the website.', '']
    for (const [k, v] of Object.entries(summary)) lines.push(`${k}: ${v}`)
    lines.push('', 'Please prepare a personalized quotation. Thank you.')
    return lines.join('\n')
  }, [summary])

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`

  // Keyboard: Enter advances (not inside text inputs), Escape goes back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      const inField = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'
      if (e.key === 'Enter' && canAdvance && !inField && !isLast && !submitted) {
        e.preventDefault()
        next()
      }
      if (e.key === 'Escape' && step > 0) {
        e.preventDefault()
        back()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [step, canAdvance, next, back, isLast, submitted])

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [step, submitted])

  useEffect(() => {
    if (submitted) return
    trackEvent('quote_step_viewed', {
      step_number: step + 1,
      step_index: step,
      step_title: titles[step] ?? '',
      service_type: form.service ?? '',
      page_source: '/quote',
      total_steps: totalSteps,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, submitted])

  useEffect(() => {
    if (step > 0) trackFormStart('quote_funnel', '/quote', form.service)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step > 0])

  const availableAddOns = useMemo(() => {
    if (form.service === 'private-chef') return chefAddOns(form)
    if (form.service === 'catering') return CATERING_ADDONS
    if (form.service === 'events') return eventAddOns(form)
    return []
  }, [form])

  // Drop selected add-ons that are no longer relevant when inputs change
  useEffect(() => {
    if (form.addOns.length === 0) return
    const allowed = new Set(availableAddOns)
    const nextAddOns = form.addOns.filter((a) => allowed.has(a))
    if (nextAddOns.length !== form.addOns.length) update('addOns', nextAddOns)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableAddOns.join('|')])

  const handleSubmitClick = () => {
    trackEvent('quote_submitted', {
      service_type: form.service,
      cta_source: 'quote-funnel-submit',
      method: 'WhatsApp',
      value: ESTIMATED_LEAD_VALUE_IDR,
      currency: 'IDR',
      guests: form.guestsFlexible ? 'flexible' : form.guests,
      area: form.area || form.villaName || '',
    })
    trackFormComplete('quote_funnel', '/quote', form.service ?? '')
    setSubmitted(true)
  }

  const minDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().slice(0, 10)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Get a Quote — Private Chef, Catering & Events Bali | myCHEF"
        description="Request a personalized myCHEF quotation in under a minute. Private chef, villa catering, or events & weddings in Bali — we reply on WhatsApp."
        canonical="https://mychef.id/quote"
        ogImage="https://mychef.id/mychef-misc-bali-og-image.webp"
        noindex
        jsonLd={[breadcrumbSchema('Quote', 'https://mychef.id/quote')]}
      />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<div class="px-6 pt-24 pb-8 max-w-[720px] mx-auto">
          <h2 class="font-playfair text-3xl mb-4">Get a Quote</h2>
          <p class="text-[#4A4745] mb-6">JavaScript is required for the interactive form. Message us directly:</p>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi myCHEF, I would like a quote.')}" class="inline-flex items-center justify-center gap-2 w-full bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">WhatsApp myCHEF</a>
        </div>`,
        }}
      />

      <section className="px-5 sm:px-8 pt-24 pb-16 max-w-[760px] mx-auto">
        {/* Progress */}
        {!submitted && (
          <>
            <div className="flex items-center justify-between mb-5 text-xs text-[#8A8785]">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                aria-label="Go back"
                className="inline-flex items-center gap-1 disabled:opacity-30 hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <span aria-live="polite" aria-atomic="true">
                Step {step + 1} of {totalSteps}
              </span>
            </div>
            <div className="h-1 bg-[#E5E3E0] rounded-full mb-8 overflow-hidden" aria-hidden>
              <div
                className="h-full bg-[#C5A028] transition-all duration-300"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </>
        )}

        {submitted ? (
          <ThankYou name={form.name} waLink={waLink} onEdit={() => setSubmitted(false)} />
        ) : (
          <>
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="font-playfair text-3xl md:text-4xl mb-3 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              role="status"
              aria-live="assertive"
            >
              {titles[step]}
            </h1>
            {step === 0 && (
              <p className="text-[#4A4745] mb-8 max-w-[520px]">
                One quick path. We only ask what we need to prepare your quotation.
              </p>
            )}
            {step === 1 && (
              <p className="text-[#4A4745] mb-8 text-sm">
                Takes under a minute. A coordinator replies on WhatsApp.
              </p>
            )}

            {/* ── STEP 0: Service ── */}
            {step === 0 && (
              <div className="grid sm:grid-cols-3 gap-4">
                {SERVICES.map((s) => {
                  const active = form.service === s.id
                  const Icon = s.icon
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => selectService(s.id)}
                      aria-pressed={active}
                      className={`group text-left bg-white border-2 rounded-2xl p-6 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                        active ? 'border-[#C5A028] shadow-md' : 'border-[#E5E3E0] hover:border-[#C5A028]/60'
                      }`}
                    >
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                          active ? 'bg-[#C5A028]/20 text-[#7E6410]' : 'bg-[#FAFAF8] text-[#4A4745]'
                        }`}
                      >
                        <Icon className="w-6 h-6" aria-hidden />
                      </div>
                      <h2 className="font-playfair text-xl mb-2">{s.title}</h2>
                      <p className="text-sm text-[#4A4745] leading-relaxed">{s.desc}</p>
                    </button>
                  )
                })}
              </div>
            )}

            {/* ── STEP 1: Contact + basics ── */}
            {step === 1 && (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    required
                    value={form.name}
                    onChange={(v) => update('name', v)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  <Field
                    label="WhatsApp number"
                    required
                    value={form.whatsapp}
                    onChange={(v) => update('whatsapp', v)}
                    placeholder="+62 8… or your country code"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Date"
                    required
                    value={form.date}
                    onChange={(v) => update('date', v)}
                    type="date"
                    min={minDate}
                  />
                  <div>
                    <span className="block text-sm font-medium mb-1">
                      Guests <span className="text-[#C5A028]">*</span>
                    </span>
                    <div className="flex items-center gap-3 bg-white border-2 border-[#E5E3E0] rounded-xl px-3 py-2">
                      <button
                        type="button"
                        onClick={() => update('guests', Math.max(1, form.guests - 1))}
                        disabled={form.guestsFlexible}
                        aria-label="Decrease guests"
                        className="w-9 h-9 rounded-full border border-[#E5E3E0] flex items-center justify-center hover:border-[#C5A028] disabled:opacity-30"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="flex-1 text-center font-playfair text-2xl">
                        {form.guestsFlexible ? '?' : form.guests}
                      </div>
                      <button
                        type="button"
                        onClick={() => update('guests', form.guests + 1)}
                        disabled={form.guestsFlexible}
                        aria-label="Increase guests"
                        className="w-9 h-9 rounded-full border border-[#E5E3E0] flex items-center justify-center hover:border-[#C5A028] disabled:opacity-30"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => update('guestsFlexible', !form.guestsFlexible)}
                      aria-pressed={form.guestsFlexible}
                      className={`mt-2 text-xs px-3 py-1.5 rounded-full border transition-all ${
                        form.guestsFlexible
                          ? 'border-[#C5A028] text-[#7E6410]'
                          : 'border-[#E5E3E0] text-[#4A4745]'
                      }`}
                    >
                      Not sure yet
                    </button>
                  </div>
                </div>

                <Field
                  label="Villa or venue name"
                  value={form.villaName}
                  onChange={(v) => update('villaName', v)}
                  placeholder="Optional — e.g. Villa Aroha"
                />

                <div>
                  <span className="block text-sm font-medium mb-2">
                    Area {form.villaName.trim() ? '(optional if villa known)' : ''}
                    {!form.villaName.trim() && <span className="text-[#C5A028]"> *</span>}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {AREAS.map((a) => {
                      const active = form.area === a
                      return (
                        <button
                          type="button"
                          key={a}
                          onClick={() => update('area', active ? '' : a)}
                          aria-pressed={active}
                          className={`px-3.5 py-2 rounded-full text-sm border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                            active
                              ? 'border-[#C5A028] bg-[#C5A028]/10 text-[#1A1A1A]'
                              : 'border-[#E5E3E0] bg-white text-[#4A4745] hover:border-[#C5A028]/50'
                          }`}
                        >
                          {a}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ── PRIVATE CHEF steps ── */}
            {form.service === 'private-chef' && step === 2 && (
              <ChipMulti
                options={MEALS}
                selected={form.meals}
                onToggle={(id) => update('meals', toggleInList(form.meals, id as MealId))}
                hint="Select all that apply"
              />
            )}

            {form.service === 'private-chef' && step === 3 && (
              <ChipMulti
                options={CHEF_EXPERIENCES}
                selected={form.experiences}
                onToggle={(id) =>
                  update('experiences', toggleInList(form.experiences, id as ChefExperienceId))
                }
                hint="Pick one or more styles"
              />
            )}

            {form.service === 'private-chef' && step === 4 && (
              <ChipMulti
                options={DIETARY}
                selected={form.dietary}
                onToggle={(id) => update('dietary', toggleInList(form.dietary, id as DietaryId))}
                hint="Optional — skip if none"
                allowEmpty
              />
            )}

            {form.service === 'private-chef' && step === 5 && (
              <AddOnGrid
                options={availableAddOns}
                selected={form.addOns}
                onToggle={(label) => {
                  const next = toggleInList(form.addOns, label)
                  update('addOns', next)
                  trackEvent('quote_addon_selected', {
                    addon_title: label,
                    selected: next.includes(label),
                    service_type: form.service ?? '',
                    page_source: '/quote',
                  })
                }}
              />
            )}

            {/* ── CATERING steps ── */}
            {form.service === 'catering' && step === 2 && (
              <ChipMulti
                options={CATERING_TYPES}
                selected={form.cateringTypes}
                onToggle={(id) =>
                  update('cateringTypes', toggleInList(form.cateringTypes, id as CateringTypeId))
                }
                hint="Select all that apply"
              />
            )}

            {form.service === 'catering' && step === 3 && (
              <ChipSingle
                options={CATERING_CUISINES}
                selected={form.cateringCuisine}
                onSelect={(id) => update('cateringCuisine', id as CateringCuisineId)}
              />
            )}

            {form.service === 'catering' && step === 4 && (
              <AddOnGrid
                options={availableAddOns}
                selected={form.addOns}
                onToggle={(label) => {
                  const next = toggleInList(form.addOns, label)
                  update('addOns', next)
                  trackEvent('quote_addon_selected', {
                    addon_title: label,
                    selected: next.includes(label),
                    service_type: form.service ?? '',
                    page_source: '/quote',
                  })
                }}
              />
            )}

            {/* ── EVENTS steps ── */}
            {form.service === 'events' && step === 2 && (
              <ChipSingle
                options={EVENT_TYPES}
                selected={form.eventType}
                onSelect={(id) => {
                  update('eventType', id as EventTypeId)
                  // clear add-ons when event type changes so conditional list stays clean
                  update('addOns', [])
                }}
              />
            )}

            {form.service === 'events' && step === 3 && (
              <ChipMulti
                options={EVENT_SERVICES}
                selected={form.eventServices}
                onToggle={(id) =>
                  update('eventServices', toggleInList(form.eventServices, id as EventServiceId))
                }
                hint="Select everything you may need"
              />
            )}

            {form.service === 'events' && step === 4 && (
              <ChipSingle
                options={FOOD_STYLES}
                selected={form.foodStyle}
                onSelect={(id) => update('foodStyle', id as FoodStyleId)}
              />
            )}

            {form.service === 'events' && step === 5 && (
              <AddOnGrid
                options={availableAddOns}
                selected={form.addOns}
                onToggle={(label) => {
                  const next = toggleInList(form.addOns, label)
                  update('addOns', next)
                  trackEvent('quote_addon_selected', {
                    addon_title: label,
                    selected: next.includes(label),
                    service_type: form.service ?? '',
                    page_source: '/quote',
                  })
                }}
              />
            )}

            {/* ── REVIEW ── */}
            {isLast && form.service && (
              <div className="space-y-6">
                <p className="text-[#4A4745]">
                  One of our event coordinators will contact you shortly to prepare a personalized
                  quotation.
                </p>

                <div className="bg-white border border-[#E5E3E0] rounded-2xl p-5 sm:p-6">
                  <h2 className="font-playfair text-lg mb-4">Your request</h2>
                  <dl className="space-y-2.5">
                    {Object.entries(summary).map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-2 text-sm">
                        <dt className="text-[#8A8785]">{k}</dt>
                        <dd className="col-span-2 text-[#1A1A1A]">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-2xl border border-[#E5E3E0] bg-[#F5F3EF] px-5 py-4 text-sm text-[#4A4745]">
                  <p className="font-medium text-[#1A1A1A] mb-1">Average response time</p>
                  <p>5 to 30 minutes during business hours.</p>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="quote-funnel-submit"
                  data-skip-lead-track="true"
                  onClick={handleSubmitClick}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A028]"
                >
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </a>
                <p className="text-xs text-[#8A8785] text-center">
                  WhatsApp opens with your summary pre-filled. Just hit send.
                </p>
              </div>
            )}

            {/* Continue — not on last step */}
            {!isLast && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance}
                  className="bg-[#C5A028] disabled:bg-[#C5A028]/40 disabled:cursor-not-allowed text-black font-semibold text-sm uppercase tracking-[2px] px-10 py-4 rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A028]"
                >
                  Continue
                </button>
              </div>
            )}

            <p className="text-xs text-[#8A8785] text-center mt-8 max-w-[480px] mx-auto">
              Your details are only used to prepare your quotation. We never spam or share your data.
            </p>
          </>
        )}

        {submitted && (
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="text-xs uppercase tracking-[2px] text-[#8A8785] hover:text-[#1A1A1A]"
            >
              ← Back to home
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

/* ─── UI primitives ─── */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  min,
  autoComplete,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  min?: string
  autoComplete?: string
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-[#C5A028]"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        min={min}
        autoComplete={autoComplete}
        className="w-full bg-white border-2 border-[#E5E3E0] rounded-xl p-3 text-sm focus:border-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
      />
    </label>
  )
}

function ChipMulti({
  options,
  selected,
  onToggle,
  hint,
  allowEmpty,
}: {
  options: { id: string; label: string }[]
  selected: string[]
  onToggle: (id: string) => void
  hint?: string
  allowEmpty?: boolean
}) {
  return (
    <div>
      {hint && <p className="text-sm text-[#8A8785] mb-4">{hint}{allowEmpty ? '' : ''}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {options.map((o) => {
          const active = selected.includes(o.id)
          return (
            <button
              type="button"
              key={o.id}
              onClick={() => onToggle(o.id)}
              aria-pressed={active}
              className={`text-left bg-white border-2 rounded-xl p-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                active ? 'border-[#C5A028] bg-[#C5A028]/5' : 'border-[#E5E3E0] hover:border-[#C5A028]/50'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    active ? 'border-[#C5A028] bg-[#C5A028]' : 'border-[#E5E3E0]'
                  }`}
                >
                  {active && <Check className="w-3 h-3 text-white" />}
                </span>
                {o.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ChipSingle({
  options,
  selected,
  onSelect,
}: {
  options: { id: string; label: string }[]
  selected?: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map((o) => {
        const active = selected === o.id
        return (
          <button
            type="button"
            key={o.id}
            onClick={() => onSelect(o.id)}
            aria-pressed={active}
            className={`bg-white border-2 rounded-xl p-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
              active ? 'border-[#C5A028] bg-[#C5A028]/5' : 'border-[#E5E3E0] hover:border-[#C5A028]/50'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

function AddOnGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[]
  selected: string[]
  onToggle: (label: string) => void
}) {
  if (options.length === 0) {
    return <p className="text-sm text-[#4A4745]">No extras suggested for this selection — continue.</p>
  }
  return (
    <div>
      <p className="text-sm text-[#8A8785] mb-4">Optional — select anything you’d like us to include.</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((label) => {
          const active = selected.includes(label)
          return (
            <button
              type="button"
              key={label}
              onClick={() => onToggle(label)}
              aria-pressed={active}
              className={`text-left bg-white border-2 rounded-xl p-4 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                active ? 'border-[#C5A028]' : 'border-[#E5E3E0] hover:border-[#C5A028]/50'
              }`}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <span
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    active ? 'border-[#C5A028] bg-[#C5A028]' : 'border-[#E5E3E0]'
                  }`}
                >
                  {active && <Check className="w-3 h-3 text-white" />}
                </span>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ThankYou({
  name,
  waLink,
  onEdit,
}: {
  name: string
  waLink: string
  onEdit: () => void
}) {
  const first = name.trim().split(/\s+/)[0]
  return (
    <div className="text-center py-8">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A028]/15">
        <Check className="w-8 h-8 text-[#7E6410]" />
      </div>
      <h1 className="font-playfair text-3xl md:text-4xl mb-4">
        {first ? `Thank you, ${first}` : 'Thank you'}
      </h1>
      <p className="text-lg text-[#4A4745] max-w-[480px] mx-auto mb-2">
        One of our event coordinators will contact you shortly to prepare a personalized quotation.
      </p>
      <p className="text-sm text-[#8A8785] mb-8">
        Average response time: <strong className="text-[#1A1A1A]">5–30 minutes</strong> during
        business hours.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
        >
          <MessageCircle className="w-4 h-4" /> Open WhatsApp again
        </a>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center justify-center gap-2 border-2 border-[#E5E3E0] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:border-[#C5A028] transition-all"
        >
          Edit request
        </button>
      </div>
    </div>
  )
}
