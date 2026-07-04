import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardModulesProgress } from '@/features/dashboard/components/DashboardModulesProgress'

const mockUseAuthStore = vi.fn()
vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => mockUseAuthStore(selector),
}))

describe('DashboardModulesProgress', () => {
  it('renders modules progress for praktikan', () => {
    mockUseAuthStore.mockImplementation((selector: (s: any) => any) => selector({ role: 'praktikan' }))
    render(<DashboardModulesProgress />)
    expect(screen.getByText('Modules in progress')).toBeTruthy()
    expect(screen.getByText('M-4 — Gerak Jatuh Bebas')).toBeTruthy()
  })

  it('returns null for asisten', () => {
    mockUseAuthStore.mockImplementation((selector: (s: any) => any) => selector({ role: 'asisten' }))
    const { container } = render(<DashboardModulesProgress />)
    expect(container.innerHTML).toBe('')
  })

  it('renders class progress for dosen', () => {
    mockUseAuthStore.mockImplementation((selector: (s: any) => any) => selector({ role: 'dosen' }))
    render(<DashboardModulesProgress />)
    expect(screen.getByText('Class Progress')).toBeTruthy()
  })
})
