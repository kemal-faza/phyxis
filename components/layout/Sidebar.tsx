'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Grid,
  Cpu,
  FileText,
  Clipboard,
  Award,
  Activity,
  ChevronLeft,
  ChevronRight,
  X,
} from 'react-feather'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { NAV_ITEMS } from '@/lib/navigation'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Grid,
  Cpu,
  FileText,
  Clipboard,
  Award,
  Activity,
}

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  mobileOpen: boolean
  onCloseMobile: () => void
}

export function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }: SidebarProps) {
  const role = useAuthStore((s) => s.role)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  if (!role) return null

  const items = NAV_ITEMS.filter((item) => item.roles.includes(role))

  const handleNavClick = () => {
    // On mobile, close sidebar after navigating
    if (window.innerWidth < 1024) {
      onCloseMobile()
    }
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen z-50 border-r border-border-subtle bg-surface-charcoal transition-all duration-200 flex flex-col',
        // Desktop: always visible, width controlled by collapsed
        'lg:translate-x-0',
        collapsed ? 'lg:w-sidebar-collapsed' : 'lg:w-sidebar-width',
        // Mobile: overlay full-width, controlled by translateX
        'w-sidebar-width',
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Header: Logo + Toggle */}
      <div
        className={cn(
          'flex border-b border-border-subtle shrink-0',
          collapsed ? 'flex-col h-auto py-2' : 'h-14 items-center'
        )}
      >
        {/* Toggle — collapse/expand di desktop */}
        <button
          onClick={onToggleCollapse}
          className={cn(
            'hidden lg:flex items-center justify-center text-on-surface-variant transition-colors hover:bg-surface-container shrink-0',
            collapsed ? 'h-8 w-full order-1' : 'h-14 w-10'
          )}
          aria-label={collapsed ? 'Perluas sidebar' : 'Ciutkan sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        {/* Logo — klik ke /login */}
        <Link
          href="/login"
          onClick={handleNavClick}
          className={cn(
            'flex items-center font-bold text-primary transition-colors hover:bg-surface-container',
            collapsed ? 'order-2 flex-1 justify-center h-8 text-lg' : 'flex-1 pl-4 h-14'
          )}
        >
          {collapsed ? <span>Px</span> : <span>PhyXis</span>}
        </Link>

        {/* Close — hanya di mobile */}
        <button
          onClick={onCloseMobile}
          className="flex lg:hidden h-14 w-10 items-center justify-center text-on-surface-variant transition-colors hover:bg-surface-container shrink-0"
          aria-label="Tutup menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {items.map((item) => {
          const IconComponent = iconMap[item.icon]
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              title={collapsed ? item.label : undefined}
              className={cn(
                'flex items-center gap-3 rounded text-sm transition-colors',
                collapsed ? 'justify-center px-2 py-2' : 'px-3 py-2',
                isActive
                  ? 'bg-glow-green text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              )}
            >
              {IconComponent && <IconComponent size={18} />}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom: Role */}
      <div className="border-t border-border-subtle shrink-0">
        {!collapsed && (
          <div className="p-3 text-xs text-on-surface-variant">Role: {role}</div>
        )}
      </div>
    </aside>
  )
}
