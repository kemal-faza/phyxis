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
  totalDecisionTimeS: number
  stepCount: number
  startedAt: number | null
}

export interface ModuleProgress {
  currentStepIndex: number
  status: 'idle' | 'playing' | 'completed'
  metrics: SimulatorMetrics
  hasStarted: boolean
  hasCompleted: boolean
  lastError: string | null
}

export interface SimulatorState {
  currentModuleId: string | null
  modules: Record<string, ModuleProgress>
  isFirstAttempt: boolean
}
