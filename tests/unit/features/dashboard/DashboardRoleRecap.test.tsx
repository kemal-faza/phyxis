import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardRoleRecap } from '@/features/dashboard/components/DashboardRoleRecap'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('DashboardRoleRecap', () => {
  it('renders role-specific heading and stats for dosen', () => {
    render(<DashboardRoleRecap />)
    expect(screen.getByText('Rekap Kelas')).toBeTruthy()
    expect(screen.getByText('Total Praktikan')).toBeTruthy()
  })
})
