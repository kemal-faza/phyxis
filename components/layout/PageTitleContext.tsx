'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface PageTitleContextValue {
  title: string
  setTitle: (title: string) => void
}

const PageTitleContext = createContext<PageTitleContextValue | null>(null)

export function PageTitleProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState('')
  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  )
}

export function usePageTitle(title: string) {
  const ctx = useContext(PageTitleContext)
  if (!ctx) {
    throw new Error('usePageTitle must be used within PageTitleProvider')
  }
  const { setTitle } = ctx
  useEffect(() => {
    setTitle(title)
    return () => setTitle('')
  }, [title, setTitle])
}

export function useCurrentPageTitle() {
  const ctx = useContext(PageTitleContext)
  if (!ctx) {
    throw new Error('useCurrentPageTitle must be used within PageTitleProvider')
  }
  return ctx.title
}
