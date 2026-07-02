import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from '@/features/landing/components/HeroSection'

describe('HeroSection', () => {
  it('renders ecosystem heading and dashboard mockup', () => {
    render(<HeroSection />)
    expect(screen.getByText(/The integrated/)).toBeTruthy()
    expect(screen.getByText(/physics laboratory/)).toBeTruthy()
    expect(screen.getByText(/intelligence ecosystem/)).toBeTruthy()
    expect(screen.getByText('Start Learning')).toBeTruthy()
    expect(screen.getByText('Try Demo')).toBeTruthy()
    expect(screen.getByText('500+ students onboarded')).toBeTruthy()
  })
})
