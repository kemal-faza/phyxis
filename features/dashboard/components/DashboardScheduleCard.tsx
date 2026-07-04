import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { TODAY_SCHEDULE } from '../data/mockData'
import { cn } from '@/lib/utils'

export function DashboardScheduleCard() {
  return (
    <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold text-foreground">Today&apos;s schedule</h3>
        <span className="text-body-sm text-muted font-semibold">
          {TODAY_SCHEDULE.length} sessions
        </span>
      </div>
      <div className="relative px-6 pb-6 pt-4">
        <div className="absolute left-[20.5px] top-5 bottom-6 w-px bg-border" />
        <div className="space-y-4">
          {TODAY_SCHEDULE.map((s) => (
            <div key={s.title} className="relative">
              <div
                className={cn(
                  'absolute left-[-8px] top-[5px] h-2.5 w-2.5 rounded-full',
                  s.status === 'ongoing'
                    ? 'bg-primary shadow-[0_0_0_4px] shadow-primary/20'
                    : 'bg-border'
                )}
              />
              <div className="flex ml-3 items-center justify-between">
                <span className="text-body-sm text-muted">{s.time}</span>
                <Badge variant={s.status === 'ongoing' ? 'success' : 'neutral'}>
                  {s.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                </Badge>
              </div>
              <p className="mt-1 ml-3 text-body font-semibold text-foreground">{s.title}</p>
              <p className="text-body-sm ml-3 text-muted">{s.location}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
