import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CTASection } from '@/features/landing/components/CTASection'

describe('CTASection', () => {
  it('renders gradient CTA with buttons', () => {
    render(<CTASection />)
    expect(screen.getByText('Ready to modernise your physics laboratory?')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Enter workspace' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeTruthy()
  })
})
