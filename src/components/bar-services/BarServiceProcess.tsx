import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

interface Props {
  process: BarService['process']
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right'
}

export function BarServiceProcess({ process, image, imagePosition = 'right' }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader eyebrow="How it works" title="Our process" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {process.map((step) => (
          <div key={step.step} className="relative">
            <span className="text-5xl font-serif text-amber-200 absolute -top-6 -left-2">
              {step.step}
            </span>
            <div className="relative pt-8">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <section className="py-16 md:py-24 bg-white">
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
