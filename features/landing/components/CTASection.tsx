import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LandingContainer } from '@/features/landing/components/LandingContainer'

export function CTASection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <LandingContainer>
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-b from-primary via-purple to-[#1a3fad] px-6 py-14 text-center shadow-btn-primary md:px-12 md:py-16">
          <h2 className="font-heading text-headline-lg font-bold text-white">
            Ready to modernise your physics laboratory?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Provision a demo tenant in minutes. Load one of our 20 physics modules and grade a live report with AI on your first login.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button className="bg-white text-primary hover:bg-white/90" icon={<ArrowRight size={16} />} href="/login">Enter workspace</Button>
            <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20" href="/login">Sign in</Button>
          </div>
        </div>
      </LandingContainer>
    </section>
  )
}
