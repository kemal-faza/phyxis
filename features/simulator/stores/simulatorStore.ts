import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SimulatorState } from '@/features/simulator/types'
import { M4_STEPS } from '@/features/simulator/data/m4Steps'

const initialState: SimulatorState = {
  currentStepIndex: 0,
  status: 'idle',
  metrics: {
    totalErrors: 0,
    totalDecisionTimeMs: 0,
    stepCount: 0,
    startedAt: null,
  },
  isFirstAttempt: true,
  hasCompleted: false,
  lastError: null,
}

interface SimulatorStore extends SimulatorState {
  submitAnswer: (optionIndex: number) => void
  completeAnimation: () => void
  restart: () => void
  getInitialState: () => SimulatorState
}

export const useSimulatorStore = create<SimulatorStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      getInitialState: () => initialState,
      submitAnswer: (optionIndex: number) => {
        const state = get()
        const step = M4_STEPS[state.currentStepIndex]
        if (!step || state.status === 'playing' || state.status === 'completed') return

        if (!state.metrics.startedAt) {
          set((s) => ({ metrics: { ...s.metrics, startedAt: Date.now() } }))
        }

        if (optionIndex === step.correctOptionIndex) {
          set({ status: 'playing', lastError: null })
        } else {
          set((s) => ({
            metrics: { ...s.metrics, totalErrors: s.metrics.totalErrors + 1 },
            lastError: step.explanation,
          }))
        }
      },
      completeAnimation: () => {
        const state = get()
        const nextIndex = state.currentStepIndex + 1
        if (nextIndex >= M4_STEPS.length) {
          set({ status: 'completed', hasCompleted: true })
        } else {
          set({ status: 'idle', currentStepIndex: nextIndex })
        }
      },
      restart: () => {
        set((s) => ({
          ...initialState,
          isFirstAttempt: false,
          metrics: { ...initialState.metrics },
        }))
      },
    }),
    { name: 'phyxis-simulator' }
  )
)
