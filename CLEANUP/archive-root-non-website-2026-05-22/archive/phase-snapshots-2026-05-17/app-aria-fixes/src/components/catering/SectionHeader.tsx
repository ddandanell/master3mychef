interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', dark = false }: SectionHeaderProps) {
  const textColor = dark ? 'text-white' : 'text-[#1A1A1A]'
  const mutedColor = dark ? 'text-white/[60%]' : 'text-[#4A4745]'
  const accentColor = dark ? 'text-[#C5A028]' : 'text-[#6B8E5A]'

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p
          className={`${accentColor} text-sm uppercase tracking-[0.3em] mb-4`}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`${textColor} text-3xl md:text-4xl lg:text-5xl leading-tight mb-4`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`${mutedColor} text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
