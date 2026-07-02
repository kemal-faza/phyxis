import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LandingEyebrow } from '@/features/landing/components/LandingEyebrow'

describe('LandingEyebrow', () => {
  it('renders uppercase label with primary color', () => {
    render(<LandingEyebrow>One workspace, every practicum</LandingEyebrow>)
    const el = screen.getByText('One workspace, every practicum')
    expect(el).toBeTruthy()
    expect(el.className).toContain('text-primary')
    expect(el.className).toContain('uppercase')
  })
})
