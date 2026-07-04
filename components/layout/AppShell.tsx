'use client'

import { useState } from 'react'
import { MobileHeader } from './MobileHeader'
import { Sidebar } from './Sidebar'
import { TopHeader } from './TopHeader'
import { PageTitleProvider } from './PageTitleContext'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <PageTitleProvider>
      <div className="flex min-h-screen bg-background">
        <MobileHeader onOpenSidebar={() => setMobileOpen(true)} />

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

        <div
          className={`${
            collapsed ? 'lg:ml-16' : 'lg:ml-64'
          } ml-0 flex-1 flex flex-col transition-all duration-200`}
        >
          <TopHeader />
          <main className="flex-1 p-4 pt-20 lg:pt-6">
            {children}
          </main>
        </div>
      </div>
    </PageTitleProvider>
  )
}
