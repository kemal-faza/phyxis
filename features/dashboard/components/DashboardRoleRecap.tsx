'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { StatCard } from './StatCard'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  DOSEN_STATS,
  ASISTEN_STATS,
  ADMIN_STATS,
  RECENT_MODULES,
  ASISTEN_QUEUE,
} from '../data/mockData'

export function DashboardRoleRecap() {
  const role = useAuthStore((s) => s.role)
  if (!role || role === 'praktikan') return null

  const roleStats =
    role === 'dosen'
      ? DOSEN_STATS
      : role === 'asisten'
      ? ASISTEN_STATS
      : ADMIN_STATS

  const heading =
    role === 'dosen'
      ? 'Rekap Kelas'
      : role === 'asisten'
      ? 'Antrian Review'
      : 'Ringkasan Admin'

  return (
    <div className="space-y-4">
      <h2 className="font-heading text-headline-md text-foreground">{heading}</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {roleStats.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            change={'change' in s ? String(s.change) : undefined}
          />
        ))}
      </div>

      {role === 'dosen' && (
        <Card className="space-y-3">
          <h3 className="font-heading text-headline-sm text-foreground">Modul Terbaru</h3>
          <div className="space-y-2">
            {RECENT_MODULES.map((mod) => (
              <div
                key={mod.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-border bg-surface p-3"
              >
                <div>
                  <div className="text-body font-semibold text-foreground">{mod.id} — {mod.name}</div>
                  <div className="text-body-sm text-muted">{mod.participants} praktikan</div>
                </div>
                <Badge variant={mod.status === 'Aktif' ? 'success' : 'neutral'} className="self-start">{mod.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      )}

      {role === 'asisten' && (
        <Card className="space-y-3">
          <h3 className="font-heading text-headline-sm text-foreground">Antrian Review</h3>
          <div className="space-y-2">
            {ASISTEN_QUEUE.map((item) => (
              <div
                key={item.nama}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-border bg-surface p-3"
              >
                <span className="text-body text-foreground">{item.nama} — {item.modul}</span>
                <Badge variant={item.status === 'Sudah dinilai' ? 'success' : 'warning'} className="self-start">{item.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
