import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MobileHeader } from '@/components/layout/MobileHeader'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string | null; clearRole: () => void }) => unknown) =>
    selector({ role: 'praktikan', clearRole: vi.fn() }),
}))

vi.mock('@/components/layout/PageTitleContext', () => ({
  useCurrentPageTitle: () => 'Dashboard',
}))

describe('MobileHeader', () => {
  it('renders hamburger, logo, notification, and profile', () => {
    render(<MobileHeader onOpenSidebar={() => {}} />)
    expect(screen.getByLabelText('Buka menu')).toBeTruthy()
    expect(screen.getByAltText('PhyXis')).toBeTruthy()
    expect(screen.getByLabelText('Notifikasi')).toBeTruthy()
    expect(screen.getByLabelText('Menu profil')).toBeTruthy()
  })
})
