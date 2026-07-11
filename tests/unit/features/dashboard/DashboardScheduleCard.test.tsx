import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardScheduleCard } from '@/features/dashboard/components/DashboardScheduleCard'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'praktikan' }),
}))

describe('DashboardScheduleCard', () => {
  it('renders praktikan schedule with sessions', () => {
    render(<DashboardScheduleCard />)
    expect(screen.getByText("Today's schedule")).toBeTruthy()
    expect(screen.getByText('Mekanika — Pesawat Atwood')).toBeTruthy()
  })
})
