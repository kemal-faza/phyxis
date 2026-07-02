import { FlaskConical, Brain, Award, Wifi, BarChart3, FileCheck } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { LandingContainer } from '@/features/landing/components/LandingContainer'
import { LandingSection } from '@/features/landing/components/LandingSection'
import { LandingEyebrow } from '@/features/landing/components/LandingEyebrow'
import { LandingHeading } from '@/features/landing/components/LandingHeading'

import { cn } from '@/lib/utils'

const FEATURES = [
  { icon: FlaskConical, title: 'Virtual Experiment', color: 'bg-primary/10 text-primary', desc: 'Hyper-realistic 3D physics simulations with data streaming into your report.' },
  { icon: Brain, title: 'AI Assessment', color: 'bg-purple/10 text-purple', desc: 'Instant essay grading and question generation aligned to Bloom taxonomy.' },
  { icon: Award, title: 'KPS Passport', color: 'bg-primary-cyan/10 text-primary-cyan', desc: 'Track Science Process Skills across every practicum with visual mastery maps.' },
  { icon: Wifi, title: 'Smart Lab IoT', color: 'bg-warning/10 text-warning', desc: 'Live telemetry from temperature, humidity, CO₂ and power sensors.' },
  { icon: BarChart3, title: 'Learning Analytics', color: 'bg-success/10 text-success', desc: 'Cohort insights, concept mastery, and predictive weakness detection.' },
  { icon: FileCheck, title: 'Digital Rubric', color: 'bg-primary/10 text-primary', desc: 'Weighted 5-component rubric with radar visualisation and export.' },
]

export function FeaturesSection() {
  return (
    <LandingSection id="platform" className="bg-background">
      <LandingContainer>
        <div className="mb-10 text-center">
          <LandingEyebrow className="mb-3 inline-block">One workspace, every practicum</LandingEyebrow>
          <LandingHeading as="h2" variant="section">Built for how physics is actually taught.</LandingHeading>
          <p className="mx-auto mt-4 max-w-2xl text-body text-muted">
            Every module maps to your existing curriculum and assessment rubric. No forklift migration required.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc, color }) => (
            <Card key={title} className="space-y-3">
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', color)}>
                <Icon size={20} />
              </div>
              <h3 className="font-heading text-headline-sm text-foreground">{title}</h3>
              <p className="text-body text-muted">{desc}</p>
            </Card>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  )
}
