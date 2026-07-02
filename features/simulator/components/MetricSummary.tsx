'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

export function MetricSummary() {
  const { metrics, restart, isFirstAttempt } = useSimulatorStore()
  const avgTime = metrics.stepCount > 0 ? metrics.totalDecisionTimeMs / metrics.stepCount : 0

  return (
    <Card className="space-y-4">
      <h2 className="font-heading text-headline-sm text-foreground">Ringkasan Simulator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-label text-muted uppercase tracking-wide">TOTAL SALAH</div>
          <div className="mt-1 font-heading text-headline-md text-foreground">{metrics.totalErrors}</div>
        </div>
        <div>
          <div className="text-label text-muted uppercase tracking-wide">RATA-RATA WAKTU</div>
          <div className="mt-1 font-heading text-headline-md text-foreground">{Math.round(avgTime / 1000)}s</div>
        </div>
      </div>
      {!isFirstAttempt && (
        <div className="text-body text-muted">
          Ini adalah percobaan latihan. Metrik pertama sudah tercatat.
        </div>
      )}
      <Button onClick={restart}>Restart</Button>
    </Card>
  )
}
