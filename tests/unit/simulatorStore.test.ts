import { describe, it, expect, beforeEach } from 'vitest'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'
import { MODULE_STEPS } from '@/features/simulator/data/mockSteps'

describe('simulatorStore', () => {
  beforeEach(() => {
    useSimulatorStore.setState(useSimulatorStore.getInitialState())
  })

  it('should start at M-4 with step 0', () => {
    const state = useSimulatorStore.getState()
    expect(state.currentModuleId).toBe('M-4')
    expect(state.modules['M-4'].currentStepIndex).toBe(0)
  })

  it('should advance on correct answer (auto-advance)', () => {
    const m4 = MODULE_STEPS['M-4']
    useSimulatorStore.getState().submitAnswer(m4[0].correctOptionIndex)
    expect(useSimulatorStore.getState().modules['M-4'].currentStepIndex).toBe(1) // auto-advance
    expect(useSimulatorStore.getState().modules['M-4'].status).toBe('idle')
  })

  it('should increment error on wrong answer', () => {
    useSimulatorStore.getState().submitAnswer(0)
    expect(useSimulatorStore.getState().modules['M-4'].metrics.totalErrors).toBe(1)
    expect(useSimulatorStore.getState().modules['M-4'].currentStepIndex).toBe(0) // stay on same step
  })

  it('should complete after last step', () => {
    const m4 = MODULE_STEPS['M-4']
    m4.forEach((step) => {
      useSimulatorStore.getState().submitAnswer(step.correctOptionIndex)
      // auto-advance: no need to call completeAnimation
    })
    expect(useSimulatorStore.getState().modules['M-4'].status).toBe('completed')
    expect(useSimulatorStore.getState().modules['M-4'].hasCompleted).toBe(true)
    expect(useSimulatorStore.getState().modules['M-4'].metrics.stepCount).toBe(7)
  })

  it('should switch modules independently', () => {
    useSimulatorStore.getState().selectModule('M-1')
    expect(useSimulatorStore.getState().currentModuleId).toBe('M-1')
    expect(useSimulatorStore.getState().modules['M-1'].currentStepIndex).toBe(0)

    // Progress in M-4 should remain unchanged
    expect(useSimulatorStore.getState().modules['M-4'].currentStepIndex).toBe(0)
  })

  it('should switch to M-5 (now has steps)', () => {
    useSimulatorStore.getState().selectModule('M-5')
    expect(useSimulatorStore.getState().currentModuleId).toBe('M-5')
    expect(useSimulatorStore.getState().modules['M-5'].currentStepIndex).toBe(0)
  })

  it('should switch to M-6 (now has steps)', () => {
    useSimulatorStore.getState().selectModule('M-6')
    expect(useSimulatorStore.getState().currentModuleId).toBe('M-6')
    expect(useSimulatorStore.getState().modules['M-6'].currentStepIndex).toBe(0)
  })

  it('should not switch to module without steps (M-3)', () => {
    useSimulatorStore.getState().selectModule('M-3')
    expect(useSimulatorStore.getState().currentModuleId).toBe('M-4') // remains on M-4
  })
})
