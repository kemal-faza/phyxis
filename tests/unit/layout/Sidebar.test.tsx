import { render, screen, fireEvent } from '@testing-library/react'
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
  it('renders workspace nav items', () => {
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
  })

  it('closes mobile sidebar when nav item clicked', () => {
    const onCloseMobile = vi.fn()
    // Simulate mobile viewport by overriding window.innerWidth
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
    render(
      <Sidebar
        collapsed={false}
        onToggleCollapse={() => {}}
        mobileOpen={true}
        onCloseMobile={onCloseMobile}
      />
    )
    fireEvent.click(screen.getByText('Virtual Lab'))
    expect(onCloseMobile).toHaveBeenCalled()
  })
})
