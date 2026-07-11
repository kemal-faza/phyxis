'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'
import { MODULE_STEPS } from '@/features/simulator/data/mockSteps'

export function StepPanel() {
  const [showQuestions, setShowQuestions] = useState(false)
  const currentModuleId = useSimulatorStore((s) => s.currentModuleId)
  const progress = currentModuleId ? useSimulatorStore((s) => s.modules[currentModuleId]) : null
  const submitAnswer = useSimulatorStore((s) => s.submitAnswer)
  const restart = useSimulatorStore((s) => s.restart)

  if (!currentModuleId || !progress) return null

  const steps = MODULE_STEPS[currentModuleId]
  if (!steps || steps.length === 0) {
    return (
      <Card className="flex h-40 items-center justify-center">
        <p className="text-body text-muted">Modul ini belum memiliki konten simulasi.</p>
      </Card>
    )
  }

  if (!showQuestions && !progress.metrics.startedAt) {
    return (
      <Card className="flex flex-col items-center justify-center py-12 text-center">
        <h2 className="font-heading text-headline-sm text-foreground">Siap Memulai?</h2>
        <p className="mt-2 max-w-xs text-body text-muted">
          Klik tombol di bawah untuk memulai simulasi. Waktu akan mulai dihitung.
        </p>
        <button
          className="mt-6 rounded-full bg-primary px-6 py-3.5 text-body font-semibold text-primary-foreground shadow-btn-primary transition hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0.5"
          onClick={() => setShowQuestions(true)}
        >
          Mulai
        </button>
      </Card>
    )
  }

  const completedCount =
    progress.status === 'completed' ? steps.length : progress.currentStepIndex

  if (progress.status === 'completed') {
    return (
      <Card className="space-y-4">
        <Progress value={completedCount} max={steps.length} />
        <div className="text-center">
          <div className="font-mono text-label text-primary uppercase tracking-wide">
            MODUL SELESAI
          </div>
          <h2 className="mt-1 font-heading text-headline-sm text-foreground">
            Semua langkah berhasil diselesaikan
          </h2>
          <p className="mt-2 text-body-sm text-muted">
            {progress.metrics.totalErrors > 0
              ? `Total kesalahan: ${progress.metrics.totalErrors}`
              : 'Tanpa kesalahan!'}
          </p>
          <button
            className="mt-4 rounded-xl bg-primary px-6 py-2 text-body font-medium text-primary-foreground transition hover:bg-primary-hover active:scale-[0.98]"
            onClick={restart}
          >
            Ulangi Modul
          </button>
        </div>
      </Card>
    )
  }

  const step = steps[progress.currentStepIndex]

  return (
    <Card className="space-y-4">
      <Progress value={completedCount} max={steps.length} />
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
            disabled={progress.status === 'playing' || progress.status === 'completed'}
            onClick={() => submitAnswer(index)}
          >
            <span className="text-body text-foreground">{option}</span>
          </button>
        ))}
      </div>
      {progress.lastError && (
        <div className="rounded-xl bg-error/10 p-3 text-body">
          <span className="font-semibold text-error">Jawaban belum tepat!</span>
          <span className="ml-1 text-muted">{progress.lastError}</span>
        </div>
      )}
    </Card>
  )
}
