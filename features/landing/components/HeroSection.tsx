import { CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LandingContainer } from '@/features/landing/components/LandingContainer'
import { GradientText } from '@/features/landing/components/GradientText'
import { DashboardMockup } from '@/features/landing/components/DashboardMockup'
import { WaveDecoration } from '@/features/landing/components/WaveDecoration'

const TRUST = [
  '500+ students onboarded',
  '20 physics modules',
  '15 partner laboratories',
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary/[0.06] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[64px]" />
      <WaveDecoration />
      <LandingContainer className="relative">
        <div className="grid items-center gap-12 desktop:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-heading text-headline-hero font-bold leading-[1.05] tracking-tight text-foreground">
              The integrated<br />physics laboratory<br />
              <GradientText>intelligence ecosystem.</GradientText>
            </h1>
            <p className="max-w-lg text-lg text-muted">
              PhyXis unifies virtual experiments, AI grading, KPS competency tracking, and IoT-powered smart labs into one enterprise-grade workspace for universities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button icon={<ArrowRight size={16} />} href="/login">Start Learning</Button>
              <Button icon={<PlayCircle size={16} />} iconPosition="left" variant="outline" className="bg-white" href="/login">Try Demo</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-muted">
                  <CheckCircle2 size={14} className="text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <DashboardMockup />
        </div>
      </LandingContainer>
    </section>
  )
}
