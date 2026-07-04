import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardStatsGrid } from '@/features/dashboard/components/DashboardStatsGrid'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'praktikan' }),
}))

describe('DashboardStatsGrid', () => {
  it('renders praktikan stats', () => {
    render(<DashboardStatsGrid />)
    expect(screen.getByText('Active Practicum')).toBeTruthy()
    expect(screen.getByText('Average Score')).toBeTruthy()
    expect(screen.getByText('KPS Level')).toBeTruthy()
    expect(screen.getByText('Completion')).toBeTruthy()
  })
})
