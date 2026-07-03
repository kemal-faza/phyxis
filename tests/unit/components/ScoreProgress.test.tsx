import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScoreProgress } from '@/components/ui/ScoreProgress'

describe('ScoreProgress', () => {
  it('renders score and label', () => {
    render(<ScoreProgress score={85} label="Observation" />)
    expect(screen.getByText('85%')).toBeDefined()
    expect(screen.getByText('Observation')).toBeDefined()
  })

  it('uses primary color for score >= 80', () => {
    const { container } = render(<ScoreProgress score={85} label="Test" />)
    expect(container.querySelector('.bg-primary')).toBeTruthy()
  })

  it('uses warning color for score 70-79', () => {
    const { container } = render(<ScoreProgress score={75} label="Test" />)
    expect(container.querySelector('.bg-warning')).toBeTruthy()
  })

  it('uses error color for score < 70', () => {
    const { container } = render(<ScoreProgress score={65} label="Test" />)
    expect(container.querySelector('.bg-error')).toBeTruthy()
  })
})
