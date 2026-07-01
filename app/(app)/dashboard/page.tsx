import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { StatCard } from '@/features/dashboard/components/StatCard'
import { DOSEN_STATS, RECENT_MODULES } from '@/features/dashboard/data/mockData'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">Dashboard Dosen</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DOSEN_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <Card>
        <h2 className="mb-4 text-headline-sm">Modul Terbaru</h2>
        <div className="space-y-3">
          {RECENT_MODULES.map((mod) => (
            <div
              key={mod.id}
              className="flex items-center justify-between rounded border border-border-subtle bg-surface-container p-3"
            >
              <div>
                <div className="font-medium">{mod.id} — {mod.name}</div>
                <div className="text-sm text-on-surface-variant">{mod.participants} praktikan</div>
              </div>
              <Badge variant={mod.status === 'Aktif' ? 'success' : 'neutral'}>{mod.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
