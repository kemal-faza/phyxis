'use client'

import { Bell, ChevronRight, User } from 'lucide-react'
import { useCurrentPageTitle } from './PageTitleContext'

export function TopHeader() {
  const title = useCurrentPageTitle()
  return (
    <header className="sticky top-0 z-30 hidden lg:flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-2 text-body text-muted">
        <span>Workspace</span>
        <ChevronRight size={16} />
        <span className="font-medium text-foreground">{title || 'Dashboard'}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface transition-colors"
          aria-label="Notifications"
        >
          <Bell size={18} className="text-muted" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
          <User size={18} />
        </div>
      </div>
    </header>
  )
}
