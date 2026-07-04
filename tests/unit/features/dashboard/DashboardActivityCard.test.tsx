import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardActivityCard } from '@/features/dashboard/components/DashboardActivityCard'

describe('DashboardActivityCard', () => {
  it('renders recent activity items', () => {
    render(<DashboardActivityCard />)
    expect(screen.getByText('Recent activity')).toBeTruthy()
    expect(screen.getByText('Report graded')).toBeTruthy()
  })
})
