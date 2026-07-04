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
    <section className="relative overflow-hidden bg-background pb-12 pt-8 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-primary/[0.06] to-transparent md:h-[600px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[64px] md:h-[600px] md:w-[600px]" />
      <WaveDecoration />
      <LandingContainer className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5 md:space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-headline-hero lg:leading-[1.05]">
              The integrated<br />physics laboratory<br />
              <GradientText>intelligence ecosystem.</GradientText>
            </h1>
            <p className="max-w-lg text-base text-muted md:text-lg">
              PhyXis unifies virtual experiments, AI grading, KPS competency tracking, and IoT-powered smart labs into one enterprise-grade workspace for universities.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button icon={<ArrowRight size={16} />} href="/login" className="w-full sm:w-auto">Start Learning</Button>
              <Button icon={<PlayCircle size={16} />} iconPosition="left" variant="outline" className="w-full bg-white sm:w-auto" href="/login">Try Demo</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2 md:gap-4">
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-muted">
                  <CheckCircle2 size={14} className="text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block"><DashboardMockup /></div>
        </div>
      </LandingContainer>
    </section>
  )
}
