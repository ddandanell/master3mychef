import { ArrowRight } from 'lucide-react'
import { getBarServiceBySlug } from '@/data/bar-services'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceCrossSells({ slugs }: { slugs: string[] }) {
  const services = slugs
    .map((slug) => getBarServiceBySlug(slug))
    .filter((service): service is BarService => Boolean(service))

  return (
    <section className="py-20 md:py-28 bg-[#0F0E0C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BarServiceSectionHeader
          eyebrow="Related services"
          title="You may also need"
          variant="dark"
        />

        {/* Mobile: horizontal scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
          {services.map((service) => (
            <CrossSellCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <CrossSellCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CrossSellCard({ service }: { service: BarService }) {
  return (
    <a
      href={service.route}
      className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto min-h-[220px] md:min-h-[280px] overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 to-transparent" />
      <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />

      {/* Gold border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10 group-hover:ring-[#C5A028]/40 transition-colors" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-7">
        <span className="inline-flex items-center gap-1.5 text-[#C5A028] text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">
          {service.eyebrow}
        </span>
        <h3 className="text-lg md:text-xl font-semibold text-[#F5F2EB] mb-2 leading-snug">
          {service.h1}
        </h3>
        <p className="text-[#F5F2EB]/70 text-sm leading-relaxed line-clamp-2 mb-4">
          {service.valueProp}
        </p>
        <span className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-medium">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  )
}
