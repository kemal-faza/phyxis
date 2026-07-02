import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturesSection } from '@/features/landing/components/FeaturesSection'

describe('FeaturesSection', () => {
  it('renders eyebrow, heading, and all 6 feature cards', () => {
    render(<FeaturesSection />)
    expect(screen.getByText('One workspace, every practicum')).toBeTruthy()
    expect(screen.getByText('Built for how physics is actually taught.')).toBeTruthy()
    expect(screen.getByText('Virtual Experiment')).toBeTruthy()
    expect(screen.getByText('Digital Rubric')).toBeTruthy()
  })
})
