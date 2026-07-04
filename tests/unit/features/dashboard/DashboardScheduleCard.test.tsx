import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardScheduleCard } from '@/features/dashboard/components/DashboardScheduleCard'

describe('DashboardScheduleCard', () => {
  it('renders today schedule with sessions', () => {
    render(<DashboardScheduleCard />)
    expect(screen.getByText("Today's schedule")).toBeTruthy()
    expect(screen.getByText('Mekanika — Gerak Parabola')).toBeTruthy()
  })
})
