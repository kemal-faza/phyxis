import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from '@/components/ui/Input'

describe('Input', () => {
  it('renders with new light-mode classes', () => {
    render(<Input placeholder="Type here" />)
    const input = screen.getByPlaceholderText('Type here')
    expect(input.className).toContain('bg-card')
    expect(input.className).toContain('border-border')
    expect(input.className).toContain('focus:border-primary')
  })
})
