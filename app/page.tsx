import { LandingHeader } from '@/features/landing/components/LandingHeader'
import { HeroSection } from '@/features/landing/components/HeroSection'
import { FeaturesSection } from '@/features/landing/components/FeaturesSection'
import { StatsSection } from '@/features/landing/components/StatsSection'
import { EcosystemSection } from '@/features/landing/components/EcosystemSection'
import { CTASection } from '@/features/landing/components/CTASection'
import { LandingFooter } from '@/features/landing/components/LandingFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <EcosystemSection />
      <CTASection />
      <LandingFooter />
    </div>
  )
}
