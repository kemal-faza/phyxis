'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { StatCard } from '@/features/dashboard/components/StatCard'
import {
  DOSEN_STATS,
  RECENT_MODULES,
  PRAKTIKAN_STATS,
  ASISTEN_STATS,
  ASISTEN_QUEUE,
  ADMIN_STATS,
} from '@/features/dashboard/data/mockData'

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  if (!role) return null

  /* ---------- PRAKTIKAN ---------- */
  if (role === 'praktikan') {
    return (
      <div className="space-y-6">
        <h1 className="page-title">Dashboard Praktikan</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PRAKTIKAN_STATS.map((s) => (
            <Card key={s.label}>
              <div className="text-label-md text-on-surface-variant uppercase">{s.label}</div>
              <div className="mt-2 text-headline-md text-on-surface">{s.value}</div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  /* ---------- ASISTEN ---------- */
  if (role === 'asisten') {
    return (
      <div className="space-y-6">
        <h1 className="page-title">Dashboard Asisten</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ASISTEN_STATS.map((s) => (
            <Card key={s.label}>
              <div className="text-label-md text-on-surface-variant uppercase">{s.label}</div>
              <div className="mt-2 text-headline-md text-on-surface">{s.value}</div>
            </Card>
          ))}
        </div>
        <Card>
          <h2 className="mb-4 text-headline-sm">Antrian Review</h2>
          <div className="space-y-2">
            {ASISTEN_QUEUE.map((item) => (
              <div
                key={item.nama}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded border border-border-subtle bg-surface-container p-3"
              >
                <span className="text-sm">
                  {item.nama} &mdash; {item.modul}
                </span>
                <Badge variant={item.status === 'Sudah dinilai' ? 'success' : 'warning'}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    )
  }

  /* ---------- DOSEN ---------- */
  if (role === 'dosen') {
    return (
      <div className="space-y-6">
        <h1 className="page-title">Dashboard Dosen</h1>
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
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded border border-border-subtle bg-surface-container p-3"
              >
                <div>
                  <div className="font-medium">
                    {mod.id} &mdash; {mod.name}
                  </div>
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

  /* ---------- ADMIN ---------- */
  if (role === 'admin') {
    return (
      <div className="space-y-6">
        <h1 className="page-title">Dashboard Admin</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ADMIN_STATS.map((s) => (
            <Card key={s.label}>
              <div className="text-label-md text-on-surface-variant uppercase">{s.label}</div>
              <div className="mt-2 text-headline-md text-on-surface">{s.value}</div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return null
}
