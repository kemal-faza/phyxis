import { FlaskConical, Brain, Award, Wifi, BarChart3, FileCheck } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const FEATURES = [
  { icon: FlaskConical, title: 'Virtual Experiment', desc: 'Run physics simulations in the browser with real-time data and 3D visualisations.' },
  { icon: Brain, title: 'AI Assessment', desc: 'Get instant feedback on open-ended pre-test and post-test answers.' },
  { icon: Award, title: 'KPS Passport', desc: 'Track science process skills across every module and semester.' },
  { icon: Wifi, title: 'Smart Lab IoT', desc: 'Connect physical sensors and bridge classroom hardware with digital worksheets.' },
  { icon: BarChart3, title: 'Learning Analytics', desc: 'Turn lab activity into actionable insights for lecturers and assistants.' },
  { icon: FileCheck, title: 'Digital Rubric', desc: 'Standardise grading with transparent, editable rubrics tied to KPS indicators.' },
]

export function FeaturesSection() {
  return (
    <section id="platform" className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-headline-lg text-foreground">One platform for every lab need</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="font-heading text-headline-sm text-foreground">{title}</h3>
              <p className="text-body text-muted">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
