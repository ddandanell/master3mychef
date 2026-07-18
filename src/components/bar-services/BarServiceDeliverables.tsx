import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

interface Props {
  deliverables: BarService['deliverables']
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right'
}

export function BarServiceDeliverables({ deliverables, image, imagePosition = 'right' }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader eyebrow="What you get" title="What we deliver" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deliverables.map((d, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
            <p className="text-gray-600">{d.description}</p>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        {image ? (
          <BarServiceImageSection image={image} imagePosition={imagePosition}>
            {content}
          </BarServiceImageSection>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
