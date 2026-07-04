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

describe('DashboardPage (dosen)', () => {
  it('renders dosen-specific sections', () => {
    render(<DashboardPage />)
    // Header: dosen specific
    expect(screen.getByText('Dosen Pengampu · Semester 4')).toBeTruthy()
    expect(screen.getByText('Lihat Modul')).toBeTruthy()
    // Stats: dosen specific (may appear in stats grid + role recap)
    expect(screen.getAllByText('Total Praktikan').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Rata-rata Nilai').length).toBeGreaterThanOrEqual(1)
    // Schedule: dosen specific
    expect(screen.getByText("Today's schedule")).toBeTruthy()
    // Activity: dosen specific
    expect(screen.getByText('Nilai terkumpul')).toBeTruthy()
    // Modules: dosen shows Class Progress
    expect(screen.getByText('Class Progress')).toBeTruthy()
    // Role recap: dosen shows Rekap Kelas
    expect(screen.getByText('Rekap Kelas')).toBeTruthy()
  })

  it('does not render praktikan-only sections', () => {
    render(<DashboardPage />)
    // Live experiment is praktikan-only
    expect(screen.queryByText('Live experiment')).toBeNull()
    // Telemetry metrics should not appear
    expect(screen.queryByText('Temperature')).toBeNull()
  })
})
