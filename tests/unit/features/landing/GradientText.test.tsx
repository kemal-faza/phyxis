import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { GradientText } from '@/features/landing/components/GradientText'

describe('GradientText', () => {
  it('renders children with gradient text class', () => {
    render(<GradientText>ecosystem.</GradientText>)
    const el = screen.getByText('ecosystem.')
    expect(el).toBeTruthy()
    expect(el.className).toContain('gradient-text')
  })
})
