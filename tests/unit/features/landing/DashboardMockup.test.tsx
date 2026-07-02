import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardMockup } from '@/features/landing/components/DashboardMockup'

describe('DashboardMockup', () => {
  it('renders sidebar nav and stat cards', () => {
    render(<DashboardMockup />)
    expect(screen.getByText('Welcome back, Dinda 👋')).toBeTruthy()
    expect(screen.getByText('08')).toBeTruthy()
    expect(screen.getByText('86.4%')).toBeTruthy()
    expect(screen.getByText('1,240')).toBeTruthy()
    expect(screen.getByText('#12')).toBeTruthy()
    expect(screen.getByText('Lab A-102 telemetry')).toBeTruthy()
    expect(screen.getByText('KPS Skills')).toBeTruthy()
  })
})
