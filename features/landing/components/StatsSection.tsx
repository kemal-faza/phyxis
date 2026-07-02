import { Card } from '@/components/ui/Card'
import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  'Reduce manual report grading with AI-assisted scoring',
  'Visualise student progress across modules in real time',
  'Standardise KPS assessment with digital rubrics',
  'Run virtual labs before physical equipment is available',
]

const STATS = [
  { value: '95%', label: 'Student satisfaction' },
  { value: '3.4x', label: 'Faster feedback loop' },
  { value: '42', label: 'Hours saved per course' },
  { value: '99.9%', label: 'Uptime last semester' },
]

export function StatsSection() {
  return (
    <section id="outcomes" className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-label text-primary">
          Measurable outcomes
        </div>
        <h2 className="mb-8 font-heading text-headline-lg text-foreground">
          Data-driven mastery, not paperwork
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-body text-muted">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-success" />
                {point}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ value, label }) => (
              <Card key={label} className="text-center">
                <div className="font-heading text-headline-xl text-foreground">{value}</div>
                <div className="mt-1 text-body-sm text-muted">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
