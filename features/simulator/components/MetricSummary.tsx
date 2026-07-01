'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

export function MetricSummary() {
  const { metrics, restart, isFirstAttempt } = useSimulatorStore()
  const avgTime = metrics.stepCount > 0 ? metrics.totalDecisionTimeMs / metrics.stepCount : 0

  return (
    <Card className="space-y-4">
      <h2 className="text-headline-sm">Ringkasan Simulator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-label-md text-on-surface-variant">TOTAL SALAH</div>
          <div className="text-headline-md">{metrics.totalErrors}</div>
        </div>
        <div>
          <div className="text-label-md text-on-surface-variant">RATA-RATA WAKTU</div>
          <div className="text-headline-md">{Math.round(avgTime / 1000)}s</div>
        </div>
      </div>
      {!isFirstAttempt && (
        <div className="text-sm text-on-surface-variant">
          Ini adalah percobaan latihan. Metrik pertama sudah tercatat.
        </div>
      )}
      <Button onClick={restart}>Restart</Button>
    </Card>
  )
}
