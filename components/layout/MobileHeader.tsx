'use client'

import { Menu, Bell, User } from 'lucide-react'
import { useCurrentPageTitle } from './PageTitleContext'

export function MobileHeader({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const title = useCurrentPageTitle()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card lg:hidden flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="p-2 text-muted hover:bg-surface rounded-app"
          aria-label="Buka menu"
        >
          <Menu size={20} />
        </button>
        <img
          src="/phyxis-logo.png"
          alt="PhyXis"
          className="h-8 w-8 object-cover"
        />
      </div>
      <span className="sr-only">{title}</span>
      <div className="flex items-center gap-2">
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface transition-colors"
          aria-label="Notifikasi"
        >
          <Bell size={18} className="text-muted" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error" />
        </button>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"
          aria-label="Profil"
        >
          <User size={18} />
        </div>
      </div>
    </header>
  )
}
