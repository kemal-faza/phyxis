import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardRoleRecap } from '@/features/dashboard/components/DashboardRoleRecap'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('DashboardRoleRecap', () => {
  it('renders rekap kelas with modul terbaru for dosen', () => {
    render(<DashboardRoleRecap />)
    expect(screen.getByText('Rekap Kelas')).toBeTruthy()
    expect(screen.getByText('Modul Terbaru')).toBeTruthy()
    expect(screen.getByText('M-4 — Gerak Jatuh Bebas')).toBeTruthy()
  })
})
