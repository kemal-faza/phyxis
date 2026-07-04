import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MobileHeader } from '@/components/layout/MobileHeader'

vi.mock('@/components/layout/PageTitleContext', () => ({
  useCurrentPageTitle: () => 'Dashboard',
}))

describe('MobileHeader', () => {
  it('renders hamburger, logo, notification, and profile', () => {
    render(<MobileHeader onOpenSidebar={() => {}} />)
    expect(screen.getByLabelText('Buka menu')).toBeTruthy()
    expect(screen.getByAltText('PhyXis')).toBeTruthy()
    expect(screen.getByLabelText('Notifikasi')).toBeTruthy()
    expect(screen.getByLabelText('Profil')).toBeTruthy()
  })
})
