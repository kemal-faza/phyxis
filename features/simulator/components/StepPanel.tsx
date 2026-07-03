'use client'

import { Card } from '@/components/ui/Card'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'
import { M4_STEPS } from '@/features/simulator/data/m4Steps'

export function StepPanel() {
  const { currentStepIndex, status, lastError, submitAnswer } = useSimulatorStore()
  const step = M4_STEPS[currentStepIndex]

  if (!step) return null

  return (
    <Card className="space-y-4">
      <div>
        <div className="font-mono text-label text-primary uppercase tracking-wide">
          LANGKAH {currentStepIndex + 1} DARI {M4_STEPS.length}
        </div>
        <h2 className="mt-1 font-heading text-headline-sm text-foreground">{step.question}</h2>
      </div>
      <div className="space-y-2">
        {step.options.map((option, index) => (
          <button
            key={index}
            className="w-full rounded-xl border border-border bg-card p-4 text-left shadow-sm transition duration-150 hover:bg-surface active:scale-[0.98] disabled:opacity-50"
            disabled={status === 'playing'}
            onClick={() => submitAnswer(index)}
          >
            <span className="text-body text-foreground">{option}</span>
          </button>
        ))}
      </div>
      {lastError && (
        <div className="rounded-xl bg-error/10 p-3 text-body text-error">
          {lastError}
        </div>
      )}
    </Card>
  )
}
