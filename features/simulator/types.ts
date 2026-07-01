export interface SimulatorStep {
  id: string
  question: string
  options: string[]
  correctOptionIndex: number
  animationClipName: string
  explanation: string
}

export interface SimulatorMetrics {
  totalErrors: number
  totalDecisionTimeMs: number
  stepCount: number
  startedAt: number | null
}

export interface SimulatorState {
  currentStepIndex: number
  status: 'idle' | 'playing' | 'completed'
  metrics: SimulatorMetrics
  isFirstAttempt: boolean
  hasCompleted: boolean
  lastError: string | null
}
