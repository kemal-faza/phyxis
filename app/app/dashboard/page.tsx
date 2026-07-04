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

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardStatsGrid />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardLiveExperiment />
        </div>
        <DashboardScheduleCard />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <DashboardActivityCard />
        <div className="lg:col-span-2">
          <DashboardModulesProgress />
        </div>
      </div>

      <DashboardRoleRecap />
    </div>
  )
}
