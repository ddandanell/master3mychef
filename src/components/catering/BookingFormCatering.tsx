import { useEffect, useId, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Calendar, MessageSquare, Check, Phone } from 'lucide-react'

interface Field {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea'
  icon?: typeof Calendar
  placeholder?: string
  options?: string[]
  required?: boolean
  waLabel?: string
  rows?: number
}

interface BookingFormCateringProps {
  title: string
  subtitle?: string
  fields: Field[]
  packageOptions?: string[]
  whatsappName?: string
  accent?: string
  submitLabel?: string
  submitLabelBuilder?: (formData: Record<string, string>) => string
  messageIntro?: string
}

const WA_NUMBER = '6282237565997'

export default function BookingFormCatering({
  title,
  subtitle = 'We will confirm availability and pricing within the hour.',
  fields,
  packageOptions,
  whatsappName = 'myCHEF',
  accent = '#6B8E5A',
  submitLabel,
  submitLabelBuilder,
  messageIntro,
}: BookingFormCateringProps) {
  const formId = useId()
  const location = useLocation()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const selectedPackage = useMemo(() => {
    const value = new URLSearchParams(location.search).get('package')?.trim()
    if (!value || !packageOptions?.includes(value)) return ''
    return value
  }, [location.search, packageOptions])

  useEffect(() => {
    if (!selectedPackage) return
    setFormData((prev) => (prev.package === selectedPackage ? prev : { ...prev, package: selectedPackage }))
  }, [selectedPackage])

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = fields
      .map((field) => {
        const value = formData[field.name]?.trim()
        if (!value) return null
        return `${field.waLabel ?? field.label}: ${value}`
      })
      .filter((line): line is string => Boolean(line))
    const intro = messageIntro ?? `Hi ${whatsappName}, I'd like help with ${title.toLowerCase()}.`
    const msg = [intro, lines.join('\n')].filter(Boolean).join('\n\n')
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6 bg-white rounded-2xl border border-[#E8E6E3]">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: accent }}
        >
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl mb-3 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Message Sent
        </h3>
        <p className="text-[#4A4745] mb-6">
          {whatsappName} typically responds within the hour. Meanwhile, feel free to browse our packages.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer" data-source="booking-form-catering-cta"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#D4B43A]"
        >
          <Phone className="w-4 h-4" /> Open WhatsApp
        </a>
      </div>
    )
  }

  const resolvedSubmitLabel = submitLabelBuilder ? submitLabelBuilder(formData) : submitLabel ?? 'Send via WhatsApp'

  const renderField = (field: Field) => {
    const Icon = field.icon
    const value = formData[field.name] || ''

    const fieldId = `${formId}-${field.name}`

    return (
      <div key={field.name}>
        <label htmlFor={fieldId} className="block text-sm font-medium text-[#1A1A1A] mb-2">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4745]/50" />
          )}
          {field.type === 'select' ? (
            <select
              id={fieldId}
              value={value}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
              className={`w-full rounded-xl border border-[#E8E6E3] bg-white px-3 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B8E5A] transition-colors ${Icon ? 'pl-10' : ''}`}
            >
              <option value="">Select {field.label.toLowerCase()}</option>
              {(field.options || packageOptions || []).map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={fieldId}
              value={value}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              rows={field.rows ?? 3}
              className="w-full rounded-xl border border-[#E8E6E3] bg-white px-3 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B8E5A] transition-colors resize-none"
            />
          ) : (
            <input
              id={fieldId}
              type={field.type}
              value={value}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              className={`w-full rounded-xl border border-[#E8E6E3] bg-white px-3 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B8E5A] transition-colors ${Icon ? 'pl-10' : ''}`}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
      <h3 className="text-xl md:text-2xl mb-2 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      {subtitle && <p className="text-sm text-[#4A4745] mb-6">{subtitle}</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        {fields.map(renderField)}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        style={{ background: accent }}
      >
        <MessageSquare className="w-4 h-4" /> {resolvedSubmitLabel}
      </button>
      <p className="text-xs text-center text-[#4A4745]/60 mt-3">
        No payment required now. We will confirm availability first.
      </p>
    </form>
  )
}
