'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import { DashboardStatsGrid } from '@/features/dashboard/components/DashboardStatsGrid'
import { DashboardLiveExperiment } from '@/features/dashboard/components/DashboardLiveExperiment'
import { DashboardScheduleCard } from '@/features/dashboard/components/DashboardScheduleCard'
import { DashboardActivityCard } from '@/features/dashboard/components/DashboardActivityCard'
import { DashboardModulesProgress } from '@/features/dashboard/components/DashboardModulesProgress'
import { DashboardRoleRecap } from '@/features/dashboard/components/DashboardRoleRecap'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ASISTEN_QUEUE } from '@/features/dashboard/data/mockData'

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  usePageTitle('Dashboard')

  if (!role) return null

  const isPraktikan = role === 'praktikan'
  const showModules = isPraktikan || role === 'dosen'
  const isAsisten = role === 'asisten'

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardStatsGrid />

      {isAsisten ? (
        <div className="grid gap-4 lg:grid-cols-3">
          <DashboardScheduleCard />
          <DashboardActivityCard />
          <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
            <div className="border-b border-border px-6 py-4">
              <h3 className="text-body font-semibold text-foreground">Antrian Review</h3>
            </div>
            <div className="space-y-2 px-6 py-4">
              {ASISTEN_QUEUE.map((item) => (
                <div key={item.nama} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-3">
                  <div className="min-w-0">
                    <div className="text-body font-semibold text-foreground truncate">{item.nama}</div>
                    <div className="text-body-sm text-muted truncate">{item.modul}</div>
                  </div>
                  <Badge variant={item.status === 'Sudah dinilai' ? 'success' : 'warning'} className="shrink-0">
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      ) : (
        <>
          <div className={`grid gap-4 ${isPraktikan ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}>
            {isPraktikan && (
              <div className="lg:col-span-2">
                <DashboardLiveExperiment />
              </div>
            )}
            <DashboardScheduleCard />
          </div>

          <div className={`grid gap-4 ${showModules ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}>
            <DashboardActivityCard />
            {showModules && (
              <div className="lg:col-span-2">
                <DashboardModulesProgress />
              </div>
            )}
          </div>
        </>
      )}

      {!isAsisten && <DashboardRoleRecap />}
    </div>
  )
}
