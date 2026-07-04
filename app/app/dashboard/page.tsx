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

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardStatsGrid />

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

      <DashboardRoleRecap />
    </div>
  )
}
