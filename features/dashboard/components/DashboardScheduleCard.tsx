'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  PRAKTIKAN_SCHEDULE,
  DOSEN_SCHEDULE,
  ASISTEN_SCHEDULE,
  ADMIN_SCHEDULE,
} from '../data/mockData'
import { cn } from '@/lib/utils'

const SCHEDULES: Record<string, any[]> = {
  praktikan: PRAKTIKAN_SCHEDULE,
  dosen: DOSEN_SCHEDULE,
  asisten: ASISTEN_SCHEDULE,
  admin: ADMIN_SCHEDULE,
}

const TITLES: Record<string, string> = {
  praktikan: "Today's schedule",
  dosen: "Today's schedule",
  asisten: "Today's schedule",
  admin: "Today's tasks",
}

export function DashboardScheduleCard() {
  const role = useAuthStore((s) => s.role)
  if (!role) return null

  const schedule = SCHEDULES[role] ?? []
  const title = TITLES[role] ?? "Today's schedule"

  if (role === 'admin') {
    return (
      <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3 className="text-body font-semibold text-foreground">{title}</h3>
          <span className="text-body-sm text-muted font-semibold">{schedule.length} tasks</span>
        </div>
        <div className="space-y-2 px-6 py-4">
          {schedule.map((s) => (
            <div key={s.title} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3">
              <div className={cn('h-5 w-5 shrink-0 mt-0.5 rounded-full border-2', s.status === 'done' ? 'bg-success border-success' : 'border-muted')} />
              <div className="min-w-0 flex-1">
                <div className="text-body font-semibold text-foreground">{s.title}</div>
                <div className="text-body-sm text-muted">{s.detail}</div>
                <div className="text-body-sm text-muted-light mt-0.5">{s.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    )
  }

  return (
    <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold text-foreground">{title}</h3>
        <span className="text-body-sm text-muted font-semibold">{schedule.length} sessions</span>
      </div>
      <div className="relative px-6 pb-6 pt-4">
        <div className="absolute left-[20.5px] top-5 bottom-6 w-px bg-border" />
        <div className="space-y-4">
          {schedule.map((s: any) => (
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
