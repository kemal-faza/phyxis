import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Progress } from '@/components/ui/Progress'
import { ArrowRight } from 'lucide-react'

export function DashboardLiveExperiment() {
  return (
    <Card className="space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <div className="text-label text-primary uppercase tracking-wide">
            Live experiment
          </div>
          <h2 className="mt-1 font-heading text-headline-sm text-foreground">
            Gerak Parabola — Sesi 03
          </h2>
          <p className="mt-1 text-body text-muted">
            Pengamatan lintasan benda dengan sudut elevasi 45°.
          </p>
        </div>
        <Badge variant="success" className="self-start">Ongoing</Badge>
      </div>
      <div>
        <div className="mb-1 flex justify-between text-body-sm text-muted">
          <span>Progress</span>
          <span>76%</span>
        </div>
        <Progress value={76} />
      </div>
      <Button className="mt-2 w-full lg:w-auto" href="/app/simulator">
        Resume simulation <ArrowRight size={16} className="ml-1" />
      </Button>
    </Card>
  )
}
