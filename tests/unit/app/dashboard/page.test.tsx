import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DashboardPage from '@/app/app/dashboard/page'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/components/layout/PageTitleContext', () => ({
  usePageTitle: () => {},
}))

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('DashboardPage', () => {
  it('renders all dashboard sections', () => {
    render(<DashboardPage />)
    expect(screen.getByText('Selamat datang, Dinda')).toBeTruthy()
    expect(screen.getByText('Active Practicum')).toBeTruthy()
    expect(screen.getByText('Live experiment')).toBeTruthy()
    expect(screen.getByText("Today's schedule")).toBeTruthy()
    expect(screen.getByText('Recent activity')).toBeTruthy()
    expect(screen.getAllByText('Modules in progress').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Rekap Kelas')).toBeTruthy()
  })

  it('does not render telemetry metrics', () => {
    render(<DashboardPage />)
    expect(screen.queryByText('Temperature')).toBeNull()
  })
})
