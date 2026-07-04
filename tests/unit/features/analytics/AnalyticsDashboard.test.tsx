import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AnalyticsDashboard } from '@/features/analytics/components/AnalyticsDashboard'

const DATA = {
  enrolled: 120,
  weeklyGrowth: 12,
  activeStudents: 98,
  avgHoursPerWeek: 4.5,
  conceptMastery: [{ topic: 'Kinematika', score: 82 }],
}

describe('AnalyticsDashboard', () => {
  it('renders stats and concept mastery', () => {
    render(<AnalyticsDashboard data={DATA} />)
    expect(screen.getByText('ENROLLED')).toBeTruthy()
    expect(screen.getByText('Kinematika')).toBeTruthy()
  })
})
