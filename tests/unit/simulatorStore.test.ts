import { describe, it, expect, beforeEach } from 'vitest'
import { useSimulatorStore } from '@/features/simulator/stores/simulatorStore'
import { M4_STEPS } from '@/features/simulator/data/m4Steps'

describe('simulatorStore', () => {
  beforeEach(() => {
    // Reset store - set it to initial state via restart action
    useSimulatorStore.setState(useSimulatorStore.getInitialState())
  })

  it('should start at step 0', () => {
    expect(useSimulatorStore.getState().currentStepIndex).toBe(0)
  })

  it('should advance on correct answer', () => {
    // Correct answer triggers animation play state, then completeAnimation advances
    useSimulatorStore.getState().submitAnswer(M4_STEPS[0].correctOptionIndex)
    expect(useSimulatorStore.getState().currentStepIndex).toBe(0) // still on same step until animation completes
    useSimulatorStore.getState().completeAnimation()
    expect(useSimulatorStore.getState().currentStepIndex).toBe(1)
  })

  it('should increment error on wrong answer', () => {
    useSimulatorStore.getState().submitAnswer(0)
    expect(useSimulatorStore.getState().metrics.totalErrors).toBe(1)
    expect(useSimulatorStore.getState().currentStepIndex).toBe(0) // stay on same step
  })

  it('should complete after last step', () => {
    M4_STEPS.forEach((step, index) => {
      useSimulatorStore.getState().submitAnswer(step.correctOptionIndex)
      useSimulatorStore.getState().completeAnimation()
    })
    expect(useSimulatorStore.getState().status).toBe('completed')
  })
})
