'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <main
        className={`${
          collapsed ? 'ml-sidebar-collapsed' : 'ml-sidebar-width'
        } flex-1 p-6 transition-all duration-200`}
      >
        {children}
      </main>
    </div>
  )
}
