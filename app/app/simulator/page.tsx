'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SimulatorCanvas } from '@/features/simulator/components/SimulatorCanvas'
import { StepPanel } from '@/features/simulator/components/StepPanel'
import { MetricSummary } from '@/features/simulator/components/MetricSummary'
import { ReviewTable } from '@/features/simulator/components/ReviewTable'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function SimulatorPage() {
  const role = useAuthStore((s) => s.role)
  const status = useSimulatorStore((s) => s.status)
  const router = useRouter()

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  usePageTitle('Virtual Lab')

  const isReviewRole = role === 'asisten' || role === 'dosen'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">
          {isReviewRole ? 'Simulator Review' : 'Simulator M-4: Gerak Jatuh Bebas'}
        </h1>
        <p className="mt-1 text-body text-muted">
          {isReviewRole
            ? 'Ringkasan hasil percobaan praktikan pada modul M-4.'
            : 'Ikuti langkah-langkah pengukuran dan analisis gerak jatuh bebas.'}
        </p>
      </div>

      {isReviewRole ? (
        <ReviewTable />
      ) : (
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SimulatorCanvas />
          </div>
          <div className="space-y-4">
            <StepPanel />
            <MetricSummary />
          </div>
        </div>
      )}
    </div>
  )
}
