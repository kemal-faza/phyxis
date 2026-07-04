'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SimulatorCanvas } from '@/features/simulator/components/SimulatorCanvas'
import { StepPanel } from '@/features/simulator/components/StepPanel'
import { MetricSummary } from '@/features/simulator/components/MetricSummary'
import { ReviewTable } from '@/features/simulator/components/ReviewTable'
import { ExperimentsPanel } from '@/features/simulator/components/ExperimentsPanel'
import { EXPERIMENTS } from '@/features/simulator/data/experiments'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function SimulatorPage() {
  const role = useAuthStore((s) => s.role)
  const currentModuleId = useSimulatorStore((s) => s.currentModuleId)
  const selectModule = useSimulatorStore((s) => s.selectModule)
  const router = useRouter()

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  usePageTitle('Virtual Lab')

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  const isReviewRole = role === 'asisten' || role === 'dosen'

  const currentModule = EXPERIMENTS.find((m) => m.id === currentModuleId)
  const moduleTitle = currentModule
    ? `Simulator ${currentModule.id}: ${currentModule.name}`
    : 'Virtual Lab'

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-8">
        <h1 className="page-title">
          {isReviewRole ? 'Simulator Review' : moduleTitle}
        </h1>
        <p className="mt-2 text-body text-muted">
          {isReviewRole
            ? 'Ringkasan hasil percobaan praktikan.'
            : currentModule?.subtitle ?? 'Ikuti langkah-langkah percobaan.'}
        </p>
      </div>

      {isReviewRole ? (
        <ReviewTable />
      ) : (
        <div className="flex flex-col lg:flex-row gap-4">
          <ExperimentsPanel
            experiments={EXPERIMENTS}
            activeId={currentModuleId}
            onSelect={selectModule}
          />
          <div className="flex-1 space-y-4">
            <SimulatorCanvas />
            <StepPanel />
            <MetricSummary />
          </div>
        </div>
      )}
    </div>
  )
}
