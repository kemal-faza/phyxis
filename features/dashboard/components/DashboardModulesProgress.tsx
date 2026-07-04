import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { MODULE_PROGRESS } from '../data/mockData'

export function DashboardModulesProgress() {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-headline-sm text-foreground">Modules in progress</h2>
        <span className="text-body-sm text-muted">
          {MODULE_PROGRESS.filter((m) => m.progress === 100).length} of {MODULE_PROGRESS.length} finished
        </span>
      </div>
      <div className="space-y-3">
        {MODULE_PROGRESS.map((m) => (
          <div key={m.id}>
            <div className="mb-1 flex justify-between text-body text-foreground">
              <span>{m.id} — {m.name}</span>
              <span className="font-mono text-body-sm">{m.progress}%</span>
            </div>
            <Progress value={m.progress} />
          </div>
        ))}
      </div>
    </Card>
  )
}
