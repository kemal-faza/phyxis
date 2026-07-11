import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SimulatorState, ModuleProgress } from '@/features/simulator/types'
import { MODULE_STEPS } from '@/features/simulator/data/mockSteps'

const initialProgress: ModuleProgress = {
  currentStepIndex: 0,
  status: 'idle',
  metrics: {
    totalErrors: 0,
    totalDecisionTimeS: 0,
    stepCount: 0,
    startedAt: null,
  },
  hasStarted: false,
  hasCompleted: false,
  lastError: null,
}

const initialState: SimulatorState = {
  currentModuleId: 'M-4',
  modules: {
    'M-1': { ...initialProgress, metrics: { ...initialProgress.metrics } },
    'M-2': { ...initialProgress, metrics: { ...initialProgress.metrics } },
    'M-4': { ...initialProgress, metrics: { ...initialProgress.metrics } },
    'M-5': { ...initialProgress, metrics: { ...initialProgress.metrics } },
    'M-6': { ...initialProgress, metrics: { ...initialProgress.metrics } },
  },
  isFirstAttempt: true,
}

interface SimulatorStoreFull extends SimulatorState {
  selectModule: (moduleId: string) => void
  startModule: () => void
  submitAnswer: (optionIndex: number) => void
  completeAnimation: () => void
  restart: () => void
  getInitialState: () => SimulatorState
}

export const useSimulatorStore = create<SimulatorStoreFull>()(
  persist(
    (set, get) => ({
      ...initialState,
      getInitialState: () => initialState,

      selectModule: (moduleId: string) => {
        const state = get()
        if (!MODULE_STEPS[moduleId]) return
        if (!state.modules[moduleId]) {
          set((s) => ({
            currentModuleId: moduleId,
            modules: {
              ...s.modules,
              [moduleId]: { ...initialProgress, metrics: { ...initialProgress.metrics } },
            },
          }))
        } else {
          set({ currentModuleId: moduleId })
        }
      },

      startModule: () => {
        const state = get()
        const modId = state.currentModuleId
        if (!modId) {
          console.warn('startModule: no currentModuleId')
          return
        }
        if (state.modules[modId].hasStarted) return // already started
        set((s) => ({
          modules: {
            ...s.modules,
            [modId]: {
              ...s.modules[modId],
              hasStarted: true,
              metrics: { ...s.modules[modId].metrics, startedAt: Date.now() },
            },
          },
        }))
      },

      submitAnswer: (optionIndex: number) => {
        const state = get()
        const modId = state.currentModuleId
        if (!modId) return
        const progress = state.modules[modId]
        const steps = MODULE_STEPS[modId]
        if (!steps) return
        const step = steps[progress.currentStepIndex]
        if (!step || progress.status === 'playing' || progress.status === 'completed') return

        const now = Date.now()
        const elapsed = progress.metrics.startedAt
          ? Math.round((now - progress.metrics.startedAt) / 1000)
          : 0

        if (optionIndex === step.correctOptionIndex) {
          const nextIndex = progress.currentStepIndex + 1
          if (nextIndex >= steps.length) {
            set((s) => ({
              modules: {
                ...s.modules,
                [modId]: {
                  ...s.modules[modId],
                  status: 'completed',
                  hasCompleted: true,
                  lastError: null,
                  metrics: {
                    ...s.modules[modId].metrics,
                    stepCount: s.modules[modId].metrics.stepCount + 1,
                    totalDecisionTimeS: s.modules[modId].metrics.totalDecisionTimeS + elapsed,
                    startedAt: now,
                  },
                },
              },
            }))
          } else {
            set((s) => ({
              modules: {
                ...s.modules,
                [modId]: {
                  ...s.modules[modId],
                  status: 'idle',
                  currentStepIndex: nextIndex,
                  lastError: null,
                  metrics: {
                    ...s.modules[modId].metrics,
                    stepCount: s.modules[modId].metrics.stepCount + 1,
                    totalDecisionTimeS: s.modules[modId].metrics.totalDecisionTimeS + elapsed,
                    startedAt: now,
                  },
                },
              },
            }))
          }
        } else {
          set((s) => ({
            modules: {
              ...s.modules,
              [modId]: {
                ...s.modules[modId],
                metrics: {
                  ...s.modules[modId].metrics,
                  totalErrors: s.modules[modId].metrics.totalErrors + 1,
                  totalDecisionTimeS: s.modules[modId].metrics.totalDecisionTimeS + elapsed,
                  startedAt: now,
                },
                lastError: step.explanation,
              },
            },
          }))
        }
      },

      completeAnimation: () => {
        const state = get()
        const modId = state.currentModuleId
        if (!modId) return
        const progress = state.modules[modId]
        const steps = MODULE_STEPS[modId]
        if (!steps) return
        const nextIndex = progress.currentStepIndex + 1
        if (nextIndex >= steps.length) {
          set((s) => ({
            modules: {
              ...s.modules,
              [modId]: { ...s.modules[modId], status: 'completed', hasCompleted: true },
            },
          }))
        } else {
          set((s) => ({
            modules: {
              ...s.modules,
              [modId]: { ...s.modules[modId], status: 'idle', currentStepIndex: nextIndex },
            },
          }))
        }
      },

      restart: () => {
        const state = get()
        const modId = state.currentModuleId
        if (!modId) return
        set((s) => ({
          isFirstAttempt: false,
          modules: {
            ...s.modules,
            [modId]: { ...initialProgress, metrics: { ...initialProgress.metrics } },
          },
        }))
      },
    }),
    { name: 'phyxis-simulator' }
  )
)
