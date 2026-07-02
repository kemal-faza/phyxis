import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders primary variant with new tokens', () => {
    render(<Button>Primary</Button>)
    const button = screen.getByRole('button', { name: 'Primary' })
    expect(button).toBeTruthy()
    expect(button.className).toContain('bg-primary')
    expect(button.className).toContain('text-primary-foreground')
    expect(button.className).toContain('rounded-full')
    expect(button.className).toContain('font-semibold')
    expect(button.className).toContain('shadow-btn-primary')
  })

  it('renders outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button', { name: 'Outline' })
    expect(button.className).toContain('border-border')
    expect(button.className).toContain('bg-transparent')
  })
})
