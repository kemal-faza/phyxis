import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LandingFooter } from '@/features/landing/components/LandingFooter'

describe('LandingFooter', () => {
  it('renders logo, copyright, and links in one row', () => {
    render(<LandingFooter />)
    expect(screen.getByText('PhyXis')).toBeTruthy()
    expect(screen.getByText(/Physics Experience/)).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Privacy' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Documentation' })).toBeTruthy()
  })
})
