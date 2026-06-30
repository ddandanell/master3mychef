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
    <div className={`mb-14 md:mb-18 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p
          className={`${accentColor} text-[11px] md:text-xs uppercase tracking-[0.38em] mb-4`}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`${textColor} text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.05] mb-4`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`${mutedColor} text-base md:text-lg max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
