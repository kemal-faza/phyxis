'use client'

import { SimulatorCanvas } from '@/features/simulator/components/SimulatorCanvas'
import { StepPanel } from '@/features/simulator/components/StepPanel'
import { MetricSummary } from '@/features/simulator/components/MetricSummary'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

export default function SimulatorPage() {
  const status = useSimulatorStore((s) => s.status)

  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">Simulator M-4: Gerak Jatuh Bebas</h1>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SimulatorCanvas />
        <div className="space-y-4">
          {status === 'completed' ? <MetricSummary /> : <StepPanel />}
        </div>
      </div>
    </div>
  )
}
