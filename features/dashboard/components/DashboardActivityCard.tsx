'use client'

import { Card } from '@/components/ui/Card'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  PRAKTIKAN_ACTIVITY,
  DOSEN_ACTIVITY,
  ASISTEN_ACTIVITY,
  ADMIN_ACTIVITY,
} from '../data/mockData'
import { FileText, Upload, Settings, ClipboardCheck, BookOpen, UserPlus } from 'lucide-react'

const ACTIVITIES: Record<string, any[]> = {
  praktikan: PRAKTIKAN_ACTIVITY,
  dosen: DOSEN_ACTIVITY,
  asisten: ASISTEN_ACTIVITY,
  admin: ADMIN_ACTIVITY,
}

const TITLES: Record<string, string> = {
  praktikan: 'Recent activity',
  dosen: 'Recent activity',
  asisten: 'Recent activity',
  admin: 'System activity',
}

const ICON_SETS: Record<string, any[]> = {
  praktikan: [FileText, Upload, Settings],
  dosen: [BookOpen, FileText, ClipboardCheck],
  asisten: [FileText, ClipboardCheck, Upload],
  admin: [UserPlus, BookOpen, Settings],
}

export function DashboardActivityCard() {
  const role = useAuthStore((s) => s.role)
  if (!role) return null

  const activity = ACTIVITIES[role] ?? []
  const title = TITLES[role] ?? 'Recent activity'
  const icons = ICON_SETS[role] ?? [FileText, Upload, Settings]

  return (
    <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold text-foreground">{title}</h3>
      </div>
      <div className="space-y-4 px-6 py-4">
        {activity.map((a: any) => {
          const ActivityIcon = icons[a.id - 1] ?? FileText
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
