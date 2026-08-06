import { useId, useState } from 'react'
import { appendLeadRef } from '@/lib/whatsapp'
import { Calendar, Users, MapPin, Utensils, Check } from 'lucide-react'
import { trackWhatsAppClick, trackFormStart, trackFormComplete } from '@/lib/analytics'
import { siteFacts } from '@/data/siteFacts'

interface BookingFormProps {
  universe: 'luna' | 'sol' | 'aura'
  compact?: boolean
}

const CONFIG = {
  luna: {
    title: 'Reserve Your Fine Dining Experience',
    subtitle: 'We confirm your menu and date within 2 hours.',
    fields: [
      { name: 'date', label: 'Preferred Date', type: 'date', icon: 'Calendar' },
      { name: 'guests', label: 'Number of Guests', type: 'number', icon: 'Users', placeholder: 'e.g. 8' },
      { name: 'villa', label: 'Villa Location', type: 'text', icon: 'MapPin', placeholder: 'Seminyak, Canggu, Ubud...' },
      { name: 'menu', label: 'Menu Experience', type: 'select', icon: 'Utensils', options: ['Mediterranean Sea Experience (IDR 2.2M++ pp)', 'Wagyu Experience (IDR 2.4M++ pp)'] },
    ],
    whatsappNumber: 6289674072020,
  },
  sol: {
    title: 'Book Your Private Villa Chef',
    subtitle: 'Tell us your dates — we match the head chef to your stay.',
    fields: [
      { name: 'checkin', label: 'Check-in Date', type: 'date', icon: 'Calendar' },
      { name: 'checkout', label: 'Check-out Date', type: 'date', icon: 'Calendar' },
      { name: 'guests', label: 'Number of Guests', type: 'number', icon: 'Users', placeholder: 'e.g. 6' },
      { name: 'villa', label: 'Villa Location', type: 'text', icon: 'MapPin', placeholder: 'Seminyak, Canggu, Ubud...' },
      { name: 'meals', label: 'Meal Plan', type: 'select', icon: 'Utensils', options: ['One Meal a Day (breakfast, lunch or dinner)', 'Two Meals a Day', 'Three Meals a Day', 'Not sure yet'] },
    ],
    whatsappNumber: 6289674072020,
  },
  aura: {
    title: 'Plan Your Event',
    subtitle: 'We design a proposal tailored to your occasion.',
    fields: [
      { name: 'eventType', label: 'Event Type', type: 'select', icon: 'Utensils', options: ['Wedding', 'Corporate Retreat', 'Birthday', 'Anniversary', 'Other'] },
      { name: 'date', label: 'Event Date', type: 'date', icon: 'Calendar' },
      { name: 'guests', label: 'Number of Guests', type: 'number', icon: 'Users', placeholder: 'e.g. 50' },
      { name: 'villa', label: 'Villa Location', type: 'text', icon: 'MapPin', placeholder: 'Seminyak, Canggu, Ubud...' },
    ],
    whatsappNumber: 6289674072020,
  },
}

const IconMap = {
  Calendar,
  Users,
  MapPin,
  Utensils
}

export default function BookingForm({ universe, compact }: BookingFormProps) {
  const config = CONFIG[universe]
  const reactFormId = useId()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [startTime] = useState(() => Date.now())

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    trackFormStart(`booking-form-${universe}`, `booking-form`, universe)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = Object.entries(formData)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    const fullMsg = `Hi myCHEF, I'm interested in booking.\n\n${msg}`
    const timeToComplete = Math.round((Date.now() - startTime) / 1000)
    trackFormComplete(`booking-form-${universe}`, `booking-form`, universe, timeToComplete)
    trackWhatsAppClick(`booking-form-${universe}`)
    window.open(appendLeadRef(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`), '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-[#C5A028] flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--u-text)' }}>
          Message Sent
        </h3>
        <p className="mb-6" style={{ color: 'var(--u-text-muted)' }}>
          Our team typically replies within 2 hours. Meanwhile, feel free to browse our menus.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({}) }}
          className="text-sm underline"
          style={{ color: 'var(--u-accent)' }}
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <div className={`${compact ? '' : 'py-16 md:py-24 px-6'}`}>
      {!compact && (
        <div className="text-center mb-12">
          <p className="u-label text-sm mb-3">Book Now</p>
          <h2 className="u-heading text-3xl md:text-4xl mb-3">{config.title}</h2>
          <p style={{ color: 'var(--u-text-muted)' }}>{config.subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
        {config.fields.map((field) => {
          const fieldId = `${reactFormId}-${field.name}`
          const IconComponent = IconMap[field.icon as keyof typeof IconMap]

          return (
          <div key={field.name}>
            <label htmlFor={fieldId} className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>
              {field.label}
            </label>
            <div className="relative">
              {IconComponent && <IconComponent className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--u-text-muted)' }} />}
              {field.type === 'select' ? (
                <select
                  id={fieldId}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-transparent appearance-none focus:ring-2 focus:ring-[var(--u-accent)] transition-all"
                  style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                  value={formData[field.name] || ''}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(field.name, e.target.value)}
                >
                  <option value="" disabled>Select {field.label}</option>
                  {field.options?.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={fieldId}
                  type={field.type}
                  required={field.type !== 'select'}
                  placeholder={field.placeholder || ''}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-transparent focus:ring-2 focus:ring-[var(--u-accent)] transition-all"
                  style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
                  value={formData[field.name] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.name, e.target.value)}
                />
              )}
            </div>
          </div>
          )
        })}

        <div>
          <label htmlFor={`${reactFormId}-notes`} className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-text-muted)', fontFamily: "'Cormorant Garamond', serif" }}>
            Special Requests
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-4 w-4 h-4 opacity-0" />
            <textarea
              id={`${reactFormId}-notes`}
              rows={3}
              placeholder="Dietary restrictions, allergies, special occasions..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-transparent focus:ring-2 focus:ring-[var(--u-accent)] transition-all resize-none"
              style={{ borderColor: 'var(--u-border)', color: 'var(--u-text)' }}
              value={formData.notes || ''}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('notes', e.target.value)}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl border border-dashed" style={{ borderColor: 'var(--u-border)' }}>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--u-accent)', fontFamily: "'Cormorant Garamond', serif" }}>Payment</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--u-text-muted)' }}>
            <strong className="text-white/[80%]">{siteFacts.depositPercent}% deposit</strong> confirms your booking and locks your chef. The remaining balance is due {siteFacts.balanceTiming}.
          </p>
        </div>

        <button
          type="submit"
          className="w-full min-h-[44px] rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: 'var(--u-accent)' }}
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  )
}
