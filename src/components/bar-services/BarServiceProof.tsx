import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

interface Props {
  proof: BarService['proof']
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right'
}

export function BarServiceProof({ proof, image, imagePosition = 'right' }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader title={proof.title} />
      <div className="grid md:grid-cols-3 gap-6">
        {proof.items.map((item, i) => (
          <div key={i} className="border-l-4 border-amber-500 pl-6">
            <p className="text-lg text-gray-800">{item}</p>
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
