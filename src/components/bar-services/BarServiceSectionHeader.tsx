import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: string
  children?: ReactNode
  as?: 'h2' | 'h3'
  variant?: 'light' | 'dark'
  align?: 'left' | 'center'
  step?: number | string
}

export function BarServiceSectionHeader({
  eyebrow,
  title,
  children,
  as: Tag = 'h2',
  variant = 'light',
  align = 'left',
  step,
}: Props) {
  const isDark = variant === 'dark'

  return (
    <div className={`mb-10 md:mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {step !== undefined && (
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-[#C5A028]/40 text-[#C5A028] text-xs font-semibold">
              {step}
            </span>
          )}
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A028]">
            {eyebrow}
          </span>
        </div>
      )}
      <Tag
        className={`text-3xl sm:text-4xl md:text-5xl font-serif leading-tight ${
          isDark ? 'text-[#F5F2EB]' : 'text-[#0F0E0C]'
        }`}
      >
        {title}
      </Tag>
      <div
        className={`mt-5 h-px w-20 bg-gradient-to-r from-[#C5A028] to-[#C5A028]/20 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {children && (
        <div className={`mt-5 max-w-3xl ${isDark ? 'text-[#F5F2EB]/75' : 'text-[#4A4745]'} ${align === 'center' ? 'mx-auto' : ''}`}>
          {children}
        </div>
      )}
    </div>
  )
}
