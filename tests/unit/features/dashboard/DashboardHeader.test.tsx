import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'praktikan' }),
}))

describe('DashboardHeader', () => {
  it('renders praktikan greeting and CTA buttons', () => {
    render(<DashboardHeader />)
    expect(screen.getByText('Selamat datang, Dinda')).toBeTruthy()
    expect(screen.getByText('Full schedule')).toBeTruthy()
    expect(screen.getByText('Enter Virtual Lab')).toBeTruthy()
    expect(screen.getByText('Student console · Semester 4')).toBeTruthy()
  })
})
