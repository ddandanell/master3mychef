import { BarServiceImageSection } from './BarServiceImageSection'
import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

interface Props {
  problem: BarService['problem']
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right'
}

export function BarServiceProblem({ problem, image, imagePosition = 'right' }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader
        eyebrow="The challenge"
        title={problem.title}
        variant="dark"
      />
      <div className="max-w-3xl space-y-5 text-[#F5F2EB]/80 text-base md:text-lg leading-relaxed">
        {problem.paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </>
  )

  return (
    <section id="content" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {image ? (
          <BarServiceImageSection image={image} imagePosition={imagePosition} bgColor="charcoal">
            {content}
          </BarServiceImageSection>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
