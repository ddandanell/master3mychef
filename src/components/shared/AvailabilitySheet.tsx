import { useEffect, useId, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const AREAS = ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Other'] as const
const OCCASIONS = [
  { id: 'dinner', label: 'Dinner', service: 'a private villa dinner in Bali' },
  { id: 'daily', label: 'Daily chef', service: 'daily private chef service in Bali' },
  { id: 'event', label: 'Event / BBQ', service: 'villa catering or BBQ in Bali' },
] as const

interface AvailabilitySheetProps {
  open: boolean
  onClose: () => void
  pageSource?: string
}

/**
 * Mobile-first micro-conversion: collect date / guests / area / occasion,
 * then open WhatsApp with a structured prefill via buildWhatsAppUrl.
 */
export default function AvailabilitySheet({
  open,
  onClose,
  pageSource = 'availability-sheet',
}: AvailabilitySheetProps) {
  const titleId = useId()
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [area, setArea] = useState<string>('not sure yet')
  const [occasion, setOccasion] = useState<(typeof OCCASIONS)[number]['id']>('dinner')

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const occ = OCCASIONS.find((o) => o.id === occasion) ?? OCCASIONS[0]
  const waUrl = buildWhatsAppUrl({
    serviceName: occ.service,
    intent: 'a fixed quote within 2 hours',
    date: date || 'not sure yet',
    guests: guests || 'not sure yet',
    area: area || 'not sure yet',
  })

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close availability form"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-t-3xl bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl md:rounded-3xl md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 id={titleId} className="text-lg font-semibold text-[#1A1A1A]">
            Check availability
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mb-4 text-sm text-[#5c5550]">
          Tell us the basics — we open WhatsApp with everything filled in so you get a faster quote.
        </p>

        <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[#7d7470]">
          Occasion
          <div className="mt-2 flex flex-wrap gap-2">
            {OCCASIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setOccasion(o.id)}
                className={`min-h-11 rounded-full px-4 text-sm font-medium ${
                  occasion === o.id
                    ? 'bg-[#C5A028] text-[#111]'
                    : 'border border-black/10 bg-[#FAFAF8] text-[#1A1A1A]'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </label>

        <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[#7d7470]">
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 min-h-12 w-full rounded-xl border border-black/10 px-3 text-base text-[#1A1A1A]"
          />
        </label>

        <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[#7d7470]">
          Guests
          <input
            type="number"
            min={1}
            inputMode="numeric"
            placeholder="e.g. 6"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-2 min-h-12 w-full rounded-xl border border-black/10 px-3 text-base text-[#1A1A1A]"
          />
        </label>

        <fieldset className="mb-5">
          <legend className="text-xs font-semibold uppercase tracking-wider text-[#7d7470]">Area</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setArea(a)}
                className={`min-h-11 rounded-full px-3 text-sm font-medium ${
                  area === a
                    ? 'bg-[#1A1A1A] text-white'
                    : 'border border-black/10 bg-[#FAFAF8] text-[#1A1A1A]'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </fieldset>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-source={`${pageSource}--availability-sheet`}
          onClick={onClose}
          className="flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#111]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Continue on WhatsApp
        </a>
      </div>
    </div>
  )
}
