import { ChevronRight, Home } from 'lucide-react'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: Crumb[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 px-6 ${className}`}>
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li>
          <a
            href="/"
            className="inline-flex items-center gap-1 text-[#4A4745]/60 hover:text-[#1A1A1A] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </a>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-[#4A4745]/30 flex-shrink-0" />
            {item.href ? (
              <a
                href={item.href}
                className="text-[#4A4745]/60 hover:text-[#1A1A1A] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-[#1A1A1A] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
