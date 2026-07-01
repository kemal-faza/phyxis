'use client'

import { useState } from 'react'
import { Menu } from 'react-feather'
import { Sidebar } from './Sidebar'
import { PageTitleProvider, useCurrentPageTitle } from './PageTitleContext'

function MobileHeader({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const title = useCurrentPageTitle()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border-subtle bg-surface-charcoal lg:hidden flex items-center px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="p-2 text-on-surface-variant hover:bg-surface-container rounded"
          aria-label="Buka menu"
        >
          <Menu size={20} />
        </button>
        <span className="text-body-lg font-semibold text-on-surface truncate">
          {title}
        </span>
      </div>
    </header>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <PageTitleProvider>
      <div className="flex min-h-screen">
        <MobileHeader onOpenSidebar={() => setMobileOpen(true)} />

        {/* Backdrop — hanya mobile, saat sidebar terbuka */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <main
          className={`${
            collapsed ? 'lg:ml-sidebar-collapsed' : 'lg:ml-sidebar-width'
          } ml-0 flex-1 p-4 pt-14 transition-all duration-200 sm:p-6 sm:pt-14 lg:pt-6`}
        >
          {children}
        </main>
      </div>
    </PageTitleProvider>
  )
}
