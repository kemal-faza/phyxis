'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { SimulatorCanvas } from '@/features/simulator/components/SimulatorCanvas'
import { StepPanel } from '@/features/simulator/components/StepPanel'
import { MetricSummary } from '@/features/simulator/components/MetricSummary'
import { ReviewTable } from '@/features/simulator/components/ReviewTable'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function SimulatorPage() {
  const role = useAuthStore((s) => s.role)
  const status = useSimulatorStore((s) => s.status)
  const router = useRouter()

  const title =
    role === 'asisten' || role === 'dosen'
      ? 'Simulator Review'
      : role === 'praktikan'
        ? 'Simulator M-4: Gerak Jatuh Bebas'
        : ''
  usePageTitle(title)

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  /* ---------- ASISTEN / DOSEN: review table ---------- */
  if (role === 'asisten' || role === 'dosen') {
    return (
      <div className="space-y-6">
        <h1 className="page-title hidden lg:block">Simulator Review</h1>
        <ReviewTable />
      </div>
    )
  }

  /* ---------- PRAKTIKAN: interactive simulator ---------- */
  return (
    <div className="space-y-6">
        <h1 className="page-title hidden lg:block">Simulator M-4: Gerak Jatuh Bebas</h1>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SimulatorCanvas />
        <div className="space-y-4">
          {status === 'completed' ? <MetricSummary /> : <StepPanel />}
        </div>
      </div>
    </div>
  )
}
