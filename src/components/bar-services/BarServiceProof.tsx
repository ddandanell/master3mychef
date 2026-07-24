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
      <BarServiceSectionHeader
        eyebrow="Proof"
        title={proof.title}
        variant="dark"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {proof.items.map((item, i) => (
          <div
            key={i}
            className="relative pl-7 py-2"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C5A028] to-[#C5A028]/20 rounded-full" />
            <p
              className="text-lg md:text-xl font-medium text-[#F5F2EB] leading-snug"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </>
  )

  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {image ? (
          <BarServiceImageSection image={image} imagePosition={imagePosition} bgColor="stone">
            {content}
          </BarServiceImageSection>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
