import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Sidebar } from '@/components/layout/Sidebar'

vi.mock('next/navigation', () => ({
  usePathname: () => '/app/dashboard',
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('Sidebar', () => {
  it('renders workspace nav items with Lucide-based Dashboard', () => {
    render(
      <Sidebar
        collapsed={false}
        onToggleCollapse={() => {}}
        mobileOpen={false}
        onCloseMobile={() => {}}
      />
    )
    expect(screen.getByText('Dashboard')).toBeTruthy()
    expect(screen.getByText('Virtual Lab')).toBeTruthy()
    expect(screen.getByText('KPS Passport')).toBeTruthy()
  })
})
