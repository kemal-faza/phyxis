import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'

describe('DashboardHeader', () => {
  it('renders greeting and CTA buttons', () => {
    render(<DashboardHeader />)
    expect(screen.getByText('Selamat datang, Dinda')).toBeTruthy()
    expect(screen.getByText('Full schedule')).toBeTruthy()
    expect(screen.getByText('Enter Virtual Lab')).toBeTruthy()
  })
})
