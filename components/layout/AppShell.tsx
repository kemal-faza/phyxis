'use client'

import { useState } from 'react'
import { Menu } from 'react-feather'
import { Sidebar } from './Sidebar'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Hamburger button — hanya mobile */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 rounded p-2 text-on-surface-variant hover:bg-surface-container lg:hidden"
        aria-label="Buka menu"
      >
        <Menu size={20} />
      </button>

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
        } ml-0 flex-1 p-4 pt-16 transition-all duration-200 sm:p-6 lg:pt-6`}
      >
        {children}
      </main>
    </div>
  )
}
