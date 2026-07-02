import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatsSection } from '@/features/landing/components/StatsSection'

describe('StatsSection', () => {
  it('renders eyebrow, heading, checklist, and stats', () => {
    render(<StatsSection />)
    expect(screen.getByText('Measurable outcomes')).toBeTruthy()
    expect(screen.getByText(/Data-driven mastery, not/)).toBeTruthy()
    expect(screen.getByText('AI grades reports in under 1 second')).toBeTruthy()
    expect(screen.getByText('95%')).toBeTruthy()
    expect(screen.getByText('99.9%')).toBeTruthy()
  })
})
