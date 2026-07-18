import { BarServiceSectionHeader } from './BarServiceSectionHeader'
import type { BarService } from '@/data/bar-services'

export function BarServiceProblem({ problem }: { problem: BarService['problem'] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <BarServiceSectionHeader title={problem.title} />
        <div className="max-w-3xl space-y-4 text-gray-700">
          {problem.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
