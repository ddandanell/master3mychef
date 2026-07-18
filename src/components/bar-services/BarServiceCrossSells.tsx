import { getBarServiceBySlug } from '@/data/bar-services'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceCrossSells({ slugs }: { slugs: string[] }) {
  const services = slugs
    .map((slug) => getBarServiceBySlug(slug))
    .filter((service): service is BarService => Boolean(service))

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="Related services"
          title="You may also need"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.slug}
              href={service.route}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600">
                {service.eyebrow}
              </h3>
              <p className="text-gray-600">{service.valueProp}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
