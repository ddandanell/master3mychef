import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: string
  children?: ReactNode
  as?: 'h2' | 'h3'
}

export function BarServiceSectionHeader({ eyebrow, title, children, as: Tag = 'h2' }: Props) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="text-sm uppercase tracking-widest text-amber-600 block mb-2">{eyebrow}</span>
      )}
      <Tag className="text-3xl md:text-4xl font-serif text-gray-900">{title}</Tag>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
