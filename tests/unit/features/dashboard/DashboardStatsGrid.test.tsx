import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardStatsGrid } from '@/features/dashboard/components/DashboardStatsGrid'

describe('DashboardStatsGrid', () => {
  it('renders all dashboard stats', () => {
    render(<DashboardStatsGrid />)
    expect(screen.getByText('Active Practicum')).toBeTruthy()
    expect(screen.getByText('Average Score')).toBeTruthy()
    expect(screen.getByText('KPS Level')).toBeTruthy()
    expect(screen.getByText('Completion')).toBeTruthy()
  })
})
