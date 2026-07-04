import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardActivityCard } from '@/features/dashboard/components/DashboardActivityCard'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'praktikan' }),
}))

describe('DashboardActivityCard', () => {
  it('renders praktikan activity items', () => {
    render(<DashboardActivityCard />)
    expect(screen.getByText('Recent activity')).toBeTruthy()
    expect(screen.getByText('Report graded')).toBeTruthy()
  })
})
