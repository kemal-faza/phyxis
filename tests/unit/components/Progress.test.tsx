import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Progress } from '@/components/ui/Progress'

describe('Progress', () => {
  it('renders fill width based on value', () => {
    const { container } = render(<Progress value={50} />)
    const fill = container.querySelector('.bg-primary')
    expect(fill).toBeTruthy()
    expect((fill as HTMLElement).style.width).toBe('50%')
  })
})
