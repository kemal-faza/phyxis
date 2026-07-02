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
  return <div>Page content</div>
}

describe('AppShell', () => {
  it('renders mobile header title', () => {
    render(
      <AppShell>
        <TitleSetter />
      </AppShell>
    )
    // Title appears in both mobile header and top header breadcrumb
    const titles = screen.getAllByText('Dashboard Dosen')
    expect(titles.length).toBeGreaterThanOrEqual(1)
  })
})
