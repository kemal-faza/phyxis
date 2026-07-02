import { Card } from '@/components/ui/Card'
import { CheckCircle2 } from 'lucide-react'
import { LandingContainer } from '@/features/landing/components/LandingContainer'
import { LandingSection } from '@/features/landing/components/LandingSection'
import { LandingEyebrow } from '@/features/landing/components/LandingEyebrow'
import { LandingHeading } from '@/features/landing/components/LandingHeading'

const POINTS = [
  'AI grades reports in under 1 second',
  'Live 3D simulations for 20+ physics modules',
  'IoT sensors detect anomalies before class starts',
  'Radar visualisation of 8 core science skills',
]

const STATS = [
  { value: '95%', label: 'Student satisfaction' },
  { value: '3.4×', label: 'Faster grading' },
  { value: '42', label: 'Sensors connected' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export function StatsSection() {
  return (
    <LandingSection id="outcomes" className="bg-background">
      <LandingContainer>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <LandingEyebrow className="mb-3 inline-block">Measurable outcomes</LandingEyebrow>
            <LandingHeading as="h2" variant="section">
              Data-driven mastery, not<br />paperwork.
            </LandingHeading>
            <p className="mt-4 max-w-md text-body text-muted">
              PhyXis turns every practicum session into structured evidence — automatically linked to KPS competencies, rubric scoring, and cohort analytics.
            </p>
            <ul className="mt-6 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-body text-muted">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-success" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ value, label }) => (
              <Card key={label} className="text-center">
                <div className="font-heading text-headline-lg font-bold text-foreground">{value}</div>
                <div className="mt-1 text-body-sm text-muted">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </LandingContainer>
    </LandingSection>
  )
}
