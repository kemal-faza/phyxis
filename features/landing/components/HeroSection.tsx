import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-label text-primary">
              Physics lab, reimagined
            </div>
            <h1 className="font-heading text-headline-xl text-foreground">
              Built for how physics is actually taught
            </h1>
            <p className="max-w-lg text-body text-muted">
              PhyXis combines virtual experiments, AI assessments, and competency tracking into one integrated platform for modern physics education.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/login">Start Learning</Button>
              <Button variant="outline" href="/login">Try Demo</Button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {['500+ students', '20 modules', '15 labs'].map((stat) => (
                <span key={stat} className="rounded-full bg-card border border-border px-3 py-1 text-body-sm text-muted">
                  {stat}
                </span>
              ))}
            </div>
          </div>
          <Card className="relative h-80 overflow-hidden bg-gradient-to-br from-surface to-card p-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4">
                <div className="h-32 w-48 rounded-xl bg-primary/10" />
                <div className="flex gap-3">
                  <div className="h-20 w-24 rounded-xl bg-surface" />
                  <div className="h-20 w-24 rounded-xl bg-surface" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
