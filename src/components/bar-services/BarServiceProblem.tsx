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
      <BarServiceSectionHeader title={problem.title} />
      <div className="max-w-3xl space-y-4 text-gray-700">
        {problem.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
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
