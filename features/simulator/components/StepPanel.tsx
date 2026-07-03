'use client'

import { Card } from '@/components/ui/Card'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'
import { MODULE_STEPS } from '@/features/simulator/data/mockSteps'

export function StepPanel() {
  const currentModuleId = useSimulatorStore((s) => s.currentModuleId)
  const progress = currentModuleId ? useSimulatorStore((s) => s.modules[currentModuleId]) : null
  const submitAnswer = useSimulatorStore((s) => s.submitAnswer)

  if (!currentModuleId || !progress) return null

  const steps = MODULE_STEPS[currentModuleId]
  if (!steps || steps.length === 0) {
    return (
      <Card className="flex h-40 items-center justify-center">
        <p className="text-body text-muted">Modul ini belum memiliki konten simulasi.</p>
      </Card>
    )
  }

  const step = steps[progress.currentStepIndex]

  return (
    <Card className="space-y-4">
      <div>
        <div className="font-mono text-label text-primary uppercase tracking-wide">
          LANGKAH {progress.currentStepIndex + 1} DARI {steps.length}
        </div>
        <h2 className="mt-1 font-heading text-headline-sm text-foreground">{step.question}</h2>
      </div>
      <div className="space-y-2">
        {step.options.map((option, index) => (
          <button
            key={index}
            className="w-full rounded-xl border border-border bg-card p-4 text-left shadow-sm transition duration-150 hover:bg-surface active:scale-[0.98] disabled:opacity-50"
            disabled={progress.status === 'playing'}
            onClick={() => submitAnswer(index)}
          >
            <span className="text-body text-foreground">{option}</span>
          </button>
        ))}
      </div>
      {progress.lastError && (
        <div className="rounded-xl bg-error/10 p-3 text-body text-error">
          {progress.lastError}
        </div>
      )}
    </Card>
  )
}
