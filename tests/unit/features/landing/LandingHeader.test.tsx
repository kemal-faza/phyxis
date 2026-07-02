import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LandingHeader } from '@/features/landing/components/LandingHeader'

describe('LandingHeader', () => {
  it('renders logo, nav, and CTAs', () => {
    render(<LandingHeader />)
    expect(screen.getByText('PhyXis')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Platform' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Launch app' })).toBeTruthy()
  })
})
