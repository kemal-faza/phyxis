import { Card } from '@/components/ui/Card'
import { RECENT_ACTIVITY } from '../data/mockData'
import { FileText, Upload, Settings } from 'lucide-react'

export function DashboardActivityCard() {
  return (
    <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold text-foreground">Recent activity</h3>
      </div>
      <div className="space-y-4 px-6 py-4">
        {RECENT_ACTIVITY.map((a) => {
          const ActivityIcon = [FileText, Upload, Settings][a.id - 1] ?? FileText
          return (
            <div key={a.id} className="flex items-start gap-3">
              <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-app bg-surface text-muted border border-border">
                <ActivityIcon size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-body font-semibold text-foreground truncate">{a.title}</div>
                <div className="text-body-sm text-muted truncate">{a.detail}</div>
              </div>
              <span className="shrink-0 text-body-sm text-muted">{a.time}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
