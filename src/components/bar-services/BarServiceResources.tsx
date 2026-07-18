import { getBarResourceBySlug } from '@/data/bar-services'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarResource } from '@/data/bar-services'

export function BarServiceResources({ slugs }: { slugs: string[] }) {
  const resources = slugs
    .map((slug) => getBarResourceBySlug(slug))
    .filter((resource): resource is BarResource => Boolean(resource))

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader
          eyebrow="Resources"
          title="Helpful reads"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {resources.map((resource) => (
            <a
              key={resource.slug}
              href={resource.route}
              className="block border border-gray-200 p-6 rounded-lg hover:border-amber-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
