'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'

export function MetricSummary() {
  const currentModuleId = useSimulatorStore((s) => s.currentModuleId)
  const progress = currentModuleId ? useSimulatorStore((s) => s.modules[currentModuleId]) : null
  const restart = useSimulatorStore((s) => s.restart)
  const isFirstAttempt = useSimulatorStore((s) => s.isFirstAttempt)

  if (!progress) return null

  const totalAttempts = progress.metrics.stepCount + progress.metrics.totalErrors
  const avgTimeS = totalAttempts > 0
    ? progress.metrics.totalDecisionTimeS / totalAttempts
    : 0
  const avgTimeDisplay = totalAttempts > 0 && progress.metrics.startedAt ? `${avgTimeS.toFixed(1)}s` : '-'

  return (
    <Card className="space-y-4">
      <h2 className="font-heading text-headline-sm text-foreground">Ringkasan Simulator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-label text-muted uppercase tracking-wide">TOTAL SALAH</div>
          <div className="mt-1 font-heading text-headline-md text-foreground">{progress.metrics.totalErrors}</div>
        </div>
        <div>
          <div className="text-label text-muted uppercase tracking-wide">RATA-RATA WAKTU</div>
          <div className="mt-1 font-heading text-headline-md text-foreground">{avgTimeDisplay}</div>
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
