import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ClipboardCheck,
  LayoutGrid,
  BookOpen,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Clock,
  FileText,
  type LucideIcon,
} from 'lucide-react'
import { RKS_HUB_PATH, RKS_SERVICES, rksWaLink } from '@/data/restaurant-kitchen-solutions'

export const RKS_NAV = [
  { label: 'Overview', href: RKS_HUB_PATH },
  {
    label: 'Consulting & Audit',
    href: `${RKS_HUB_PATH}/kitchen-consulting-audit`,
    icon: ClipboardCheck,
  },
  {
    label: 'Kitchen Design',
    href: `${RKS_HUB_PATH}/commercial-kitchen-design-build`,
    icon: LayoutGrid,
  },
  {
    label: 'Menu & Training',
    href: `${RKS_HUB_PATH}/menu-development-training`,
    icon: BookOpen,
  },
] as const

export function RksSubNav({ activePath }: { activePath?: string }) {
  return (
    <nav
      aria-label="Restaurant kitchen solutions"
      className="sticky top-0 z-40 border-b border-black/5 bg-[#FAFAF8]/95 backdrop-blur-md"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
        {RKS_NAV.map((item) => {
          const active =
            activePath === item.href ||
            (item.href !== RKS_HUB_PATH && activePath?.startsWith(item.href))
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                active
                  ? 'bg-[#C5A028] text-[#0A0A0A]'
                  : 'text-[#4A4745] hover:bg-black/5 hover:text-[#1A1A1A]'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export function RksEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A0A0A] bg-[#C5A028] rounded-full">
      {children}
    </span>
  )
}

export function RksSectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`mb-10 md:mb-14 max-w-[720px] ${alignCls}`}>
      {eyebrow && (
        <p
          className={`text-xs uppercase tracking-[0.3em] font-semibold mb-3 ${
            light ? 'text-[#C5A028]' : 'text-[#C5A028]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-4 ${
          light ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/75' : 'text-[#4A4745]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function RksTrustStrip() {
  const items = [
    { icon: ShieldCheck, label: 'B2B kitchen practice' },
    { icon: MapPin, label: 'Indonesia-wide scope' },
    { icon: FileText, label: 'Written findings & scope' },
    { icon: Clock, label: 'Same-day WhatsApp reply' },
  ]
  return (
    <div className="border-y border-black/5 bg-white">
      <div className="max-w-[1160px] mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm text-[#4A4745]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C5A028]/12">
              <Icon className="h-4 w-4 text-[#C5A028]" aria-hidden />
            </span>
            <span className="font-medium leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function RksWaButton({
  label,
  message,
  source,
  variant = 'primary',
}: {
  label: string
  message: string
  source: string
  variant?: 'primary' | 'dark' | 'outline-light'
}) {
  const href = rksWaLink(message)
  const cls =
    variant === 'primary'
      ? 'bg-[#C5A028] text-[#0A0A0A] hover:bg-[#D4B43A] hover:shadow-[0_0_28px_rgba(197,160,40,0.35)]'
      : variant === 'dark'
        ? 'bg-[#0A0A0A] text-white hover:bg-black'
        : 'border border-white/35 text-white hover:bg-white/10'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-source={source}
      className={`inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5 ${cls}`}
    >
      <MessageCircle className="w-4 h-4" aria-hidden />
      {label}
    </a>
  )
}

export function RksToc({
  items,
}: {
  items: { id: string; title: string }[]
}) {
  if (!items.length) return null
  return (
    <aside className="rounded-2xl border border-[#E8E6E3] bg-white p-5 md:p-6 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C5A028] mb-3">
        On this page
      </p>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-start gap-3 text-sm text-[#4A4745] hover:text-[#1A1A1A] transition-colors"
            >
              <span className="mt-0.5 text-[11px] font-semibold text-[#C5A028] tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="leading-snug group-hover:underline underline-offset-2">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}

export function RksRelatedServices({ excludeSlug }: { excludeSlug?: string }) {
  const list = RKS_SERVICES.filter((s) => s.slug !== excludeSlug)
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <Link
        to={RKS_HUB_PATH}
        className="group rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028]/50 hover:shadow-md transition-all"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A028] font-semibold mb-2">Hub</p>
        <h3 className="font-playfair text-xl mb-2 group-hover:text-[#C5A028] transition-colors">
          All kitchen solutions
        </h3>
        <p className="text-sm text-[#4A4745] mb-4">
          Overview of consulting, design, and menu training for hospitality operators.
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A1A1A]">
          Open hub <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
      {list.map((s) => (
        <Link
          key={s.slug}
          to={s.path}
          className="group rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028]/50 hover:shadow-md transition-all"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A028] font-semibold mb-2">
            Service
          </p>
          <h3 className="font-playfair text-xl mb-2 group-hover:text-[#C5A028] transition-colors">
            {s.cardTitle}
          </h3>
          <p className="text-sm text-[#4A4745] mb-4 line-clamp-3">{s.cardSummary}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A1A1A]">
            {s.cardTitle} details <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      ))}
    </div>
  )
}

export function RksIconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C5A028]/12 text-[#C5A028] mb-4">
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  )
}

export function RksFinalCta({
  title,
  body,
  waLabel,
  waMessage,
  source,
}: {
  title: string
  body: string
  waLabel: string
  waMessage: string
  source: string
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6 bg-[#0A0A0A]">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,160,40,0.35), transparent 70%)',
        }}
      />
      <div className="relative max-w-[760px] mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-5xl text-white mb-5 leading-[1.15]">{title}</h2>
        <p className="text-white/75 text-base md:text-lg mb-8 leading-relaxed">{body}</p>
        <RksWaButton label={waLabel} message={waMessage} source={source} variant="primary" />
      </div>
    </section>
  )
}
