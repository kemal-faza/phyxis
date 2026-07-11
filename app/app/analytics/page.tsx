'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { AnalyticsDashboard } from '@/features/analytics/components/AnalyticsDashboard'
import { MOCK_ANALYTICS } from '@/features/analytics/data/mockAnalytics'

const ALLOWED_ROLES: Array<string> = ['asisten', 'dosen']

export default function AnalyticsPage() {
  const role = useAuthStore((s) => s.role)
  const isHydrated = useAuthStore((s) => s.isHydrated)
  const router = useRouter()

  usePageTitle('Analytics')

  useEffect(() => {
    if (!isHydrated) return
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/app/dashboard')
  }, [role, router, isHydrated])

  if (!isHydrated) return null
  if (!role || !ALLOWED_ROLES.includes(role)) return null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Learning Analytics</h1>
        <p className="mt-1 text-body text-muted">Cohort performance and concept mastery insights.</p>
      </div>
      <AnalyticsDashboard data={MOCK_ANALYTICS} />
    </div>
  )
}
