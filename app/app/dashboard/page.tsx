'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Progress } from '@/components/ui/Progress'
import { StatCard } from '@/features/dashboard/components/StatCard'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  DASHBOARD_STATS,
  TODAY_SCHEDULE,
  RECENT_ACTIVITY,
  MODULE_PROGRESS,
  DOSEN_STATS,
  RECENT_MODULES,
  ASISTEN_STATS,
  ASISTEN_QUEUE,
  ADMIN_STATS,
  PRAKTIKAN_STATS,
} from '@/features/dashboard/data/mockData'
import { Thermometer, Droplets, Wind, Zap } from 'lucide-react'

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  if (!role) return null

  usePageTitle('Dashboard')

  const roleStats =
    role === 'dosen' ? DOSEN_STATS :
    role === 'asisten' ? ASISTEN_STATS :
    role === 'admin' ? ADMIN_STATS :
    PRAKTIKAN_STATS

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Selamat datang, Dinda 👋</h1>
        <p className="mt-1 text-body text-muted">Here is what is happening in your laboratory today.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-label text-primary uppercase tracking-wide">Live experiment</div>
              <h2 className="mt-1 font-heading text-headline-sm text-foreground">Gerak Parabola — Sesi 03</h2>
              <p className="mt-1 text-body text-muted">Pengamatan lintasan benda dengan sudut elevasi 45&deg;.</p>
            </div>
            <Badge variant="success">Ongoing</Badge>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-body-sm text-muted">
              <span>Progress</span>
              <span>76%</span>
            </div>
            <Progress value={76} />
          </div>
          <Button className="mt-2" href="/app/simulator">Resume simulation</Button>
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {[
              { icon: Thermometer, label: '24.6°C' },
              { icon: Droplets, label: '56%' },
              { icon: Wind, label: '620ppm' },
              { icon: Zap, label: '1.24kW' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl bg-surface p-3">
                <Icon size={16} className="text-primary" />
                <span className="font-mono text-body text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-heading text-headline-sm text-foreground">Today schedule</h2>
          <div className="space-y-3">
            {TODAY_SCHEDULE.map((s) => (
              <div key={s.title} className="flex gap-3">
                <div className="w-14 shrink-0 font-mono text-label text-foreground">{s.time}</div>
                <div className="flex-1 border-l-2 border-border pl-3">
                  <div className="text-body font-semibold text-foreground">{s.title}</div>
                  <div className="text-body-sm text-muted">{s.location}</div>
                  <Badge variant={s.status === 'ongoing' ? 'success' : 'neutral'} className="mt-1">
                    {s.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-4">
          <h2 className="font-heading text-headline-sm text-foreground">Recent activity</h2>
          <div className="space-y-3">
            {RECENT_ACTIVITY.map((a) => (
              <div key={a.id} className="flex items-start justify-between gap-3">
                <span className="text-body text-foreground">{a.text}</span>
                <span className="whitespace-nowrap text-body-sm text-muted-light">{a.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-headline-sm text-foreground">Modules in progress</h2>
            <span className="text-body-sm text-muted">{MODULE_PROGRESS.filter((m) => m.progress === 100).length} of {MODULE_PROGRESS.length} finished</span>
          </div>
          <div className="space-y-3">
            {MODULE_PROGRESS.map((m) => (
              <div key={m.id}>
                <div className="mb-1 flex justify-between text-body text-foreground">
                  <span>{m.id} &mdash; {m.name}</span>
                  <span className="font-mono text-body-sm">{m.progress}%</span>
                </div>
                <Progress value={m.progress} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Role-specific recap */}
      <div className="space-y-4">
        <h2 className="font-heading text-headline-md text-foreground">
          {role === 'dosen' ? 'Rekap Kelas' : role === 'asisten' ? 'Antrian Review' : role === 'admin' ? 'Ringkasan Admin' : 'Info Cepat'}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roleStats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} change={'change' in s ? String(s.change) : undefined} />
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
                    <div className="text-body font-semibold text-foreground">{mod.id} &mdash; {mod.name}</div>
                    <div className="text-body-sm text-muted">{mod.participants} praktikan</div>
                  </div>
                  <Badge variant={mod.status === 'Aktif' ? 'success' : 'neutral'}>{mod.status}</Badge>
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
                  <span className="text-body text-foreground">{item.nama} &mdash; {item.modul}</span>
                  <Badge variant={item.status === 'Sudah dinilai' ? 'success' : 'warning'}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
