'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { PRAKTIKAN_MODULES, DOSEN_MODULES } from '../data/mockData'

export function DashboardModulesProgress() {
  const role = useAuthStore((s) => s.role)
  if (!role || role === 'asisten' || role === 'admin') return null

  const isDosen = role === 'dosen'
  const modules = isDosen ? DOSEN_MODULES : PRAKTIKAN_MODULES
  const title = isDosen ? 'Class Progress' : 'Modules in progress'

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-headline-sm text-foreground">{title}</h2>
        <span className="text-body-sm text-muted">
          {modules.filter((m) => m.progress === 100).length} of {modules.length} finished
        </span>
      </div>
      <div className="space-y-3">
        {modules.map((m) => (
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
