import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  PageTitleProvider,
  usePageTitle,
  useCurrentPageTitle,
} from '@/components/layout/PageTitleContext'

function TitleReader() {
  const title = useCurrentPageTitle()
  return <span data-testid="title">{title}</span>
}

function TitleSetter({ title, show }: { title: string; show: boolean }) {
  if (!show) return null
  usePageTitle(title)
  return null
}

describe('PageTitleContext', () => {
  it('updates title when usePageTitle is called', () => {
    render(
      <PageTitleProvider>
        <TitleSetter title="Dashboard Dosen" show={true} />
        <TitleReader />
      </PageTitleProvider>
    )
    expect(screen.getByTestId('title').textContent).toBe('Dashboard Dosen')
  })

  it('clears title when setter unmounts', async () => {
    const { unmount } = render(
      <PageTitleProvider>
        <TitleSetter title="Dashboard Dosen" show={true} />
        <TitleReader />
      </PageTitleProvider>
    )
    await waitFor(() => {
      expect(screen.getByTestId('title').textContent).toBe('Dashboard Dosen')
    })
    unmount()
    render(
      <PageTitleProvider>
        <TitleReader />
      </PageTitleProvider>
    )
    expect(screen.getByTestId('title').textContent).toBe('')
  })
})
