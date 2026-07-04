import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SimulatorPage from '@/app/app/simulator/page'
import { PageTitleProvider } from '@/components/layout/PageTitleContext'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

const mockModuleProgress = {
  currentStepIndex: 0,
  status: 'idle' as const,
  metrics: {
    totalErrors: 0,
    totalDecisionTimeMs: 0,
    stepCount: 0,
    startedAt: null,
  },
  hasCompleted: false,
  lastError: null,
}

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'praktikan' }),
}))

vi.mock('@/features/simulator/stores/simulatorStore', () => ({
  useSimulatorStore: (selector: (s: Record<string, unknown>) => unknown) =>
    selector({
      currentModuleId: 'M-4',
      modules: { 'M-4': mockModuleProgress },
      selectModule: vi.fn(),
      submitAnswer: vi.fn(),
      completeAnimation: vi.fn(),
      restart: vi.fn(),
      isFirstAttempt: true,
    }),
}))

describe('SimulatorPage', () => {
  it('renders praktikan simulator view', () => {
    render(
      <PageTitleProvider>
        <SimulatorPage />
      </PageTitleProvider>
    )
    expect(screen.getByText('Simulator M-4: Gerak Jatuh Bebas')).toBeTruthy()
  })
})
