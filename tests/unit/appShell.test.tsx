import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AppShell } from '@/components/layout/AppShell'
import { usePageTitle } from '@/components/layout/PageTitleContext'

vi.mock('next/navigation', () => ({
  usePathname: () => '/app/dashboard',
  useRouter: () => ({ push: vi.fn() }),
}))

function TitleSetter() {
  usePageTitle('Dashboard Dosen')
  return <div data-testid="page-content">Page content</div>
}

describe('AppShell', () => {
  it('renders mobile header and main content', () => {
    render(
      <AppShell>
        <TitleSetter />
      </AppShell>
    )
    expect(screen.getByLabelText('Buka menu')).toBeTruthy()
    expect(screen.getByTestId('page-content')).toBeTruthy()
  })
})
