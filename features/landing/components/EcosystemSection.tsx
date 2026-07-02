import { Card } from '@/components/ui/Card'

export function EcosystemSection() {
  return (
    <section id="workspace" className="bg-navy py-20 text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mx-auto max-w-4xl font-heading text-[42px] font-bold leading-tight md:text-[68px]">
          The integrated physics laboratory intelligence ecosystem
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body text-navy-foreground/80">
          PhyXis connects curriculum, experiments, assessment, and analytics so lecturers spend less time administering and more time teaching.
        </p>
        <Card className="mx-auto mt-12 h-64 max-w-4xl overflow-hidden bg-card p-0">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-card text-muted">
            <span className="text-body">Demo dashboard preview</span>
          </div>
        </Card>
      </div>
    </section>
  )
}
