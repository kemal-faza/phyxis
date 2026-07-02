'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  FlaskConical,
  Award,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  Zap,
} from 'lucide-react'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { NAV_ITEMS, ACCOUNT_ITEMS } from '@/lib/navigation'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  LayoutDashboard,
  FlaskConical,
  Award,
  Bell,
  Settings,
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

  const workspaceItems = NAV_ITEMS.filter((item) => item.roles.includes(role))
  const accountItems = ACCOUNT_ITEMS.filter((item) => item.roles.includes(role))

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      onCloseMobile()
    }
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen z-50 border-r border-border bg-sidebar transition-all duration-200 flex flex-col',
        'lg:translate-x-0',
        collapsed ? 'lg:w-16' : 'lg:w-64',
        'w-64',
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Header: Logo + Toggle */}
      <div className="flex h-16 items-center border-b border-border px-4 shrink-0">
        <div className="flex items-center gap-3 flex-1 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-logo bg-primary text-primary-foreground font-heading text-headline-sm">
            P
          </div>
          {!collapsed && <span className="font-heading text-headline-sm text-foreground">PhyXis</span>}
        </div>
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex h-8 w-8 shrink-0 items-center justify-center rounded-app text-muted hover:bg-sidebar-accent"
          aria-label={collapsed ? 'Perluas sidebar' : 'Ciutkan sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
        <button
          onClick={onCloseMobile}
          className="flex lg:hidden h-8 w-8 items-center justify-center rounded-app text-muted hover:bg-sidebar-accent shrink-0"
          aria-label="Tutup menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-4 pt-5 pb-2">
          <div className="flex items-center gap-2 rounded-app bg-surface px-3 py-2 text-body text-muted-light">
            <Search size={16} />
            <span className="flex-1">Search...</span>
            <kbd className="rounded bg-card px-1.5 py-0.5 text-label-sm text-muted border border-border">⌘K</kbd>
          </div>
        </div>
      )}

      {/* Workspace */}
      <nav className="flex-1 overflow-y-auto px-3 pt-2">
        {!collapsed && (
          <div className="mb-2 px-3 text-label-sm text-muted-light uppercase tracking-wider">Workspace</div>
        )}
        <div className="space-y-1">
          {workspaceItems.map((item) => {
            const IconComponent = iconMap[item.icon]
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                title={collapsed ? item.label : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-app px-3 py-2 text-body transition-colors active:translate-y-0.5',
                  collapsed ? 'justify-center' : '',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground'
                )}
              >
                {IconComponent && <IconComponent size={18} />}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </div>

        {/* Account */}
        {!collapsed && (
          <div className="mt-5 mb-2 px-3 text-label-sm text-muted-light uppercase tracking-wider">Account</div>
        )}
        <div className="space-y-1">
          {accountItems.map((item) => {
            const IconComponent = iconMap[item.icon]
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                title={collapsed ? item.label : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-app px-3 py-2 text-body transition-colors active:translate-y-0.5',
                  collapsed ? 'justify-center' : '',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground'
                )}
              >
                {IconComponent && <IconComponent size={18} />}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Support Card */}
      {!collapsed && (
        <div className="p-4 shrink-0">
          <div className="rounded-support bg-surface p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap size={16} />
              </div>
              <div>
                <div className="text-body font-semibold text-foreground">PhyXis Pro</div>
                <div className="text-body-sm text-muted">Free plan</div>
              </div>
            </div>
            <button className="w-full rounded-app bg-primary py-2 text-body font-medium text-primary-foreground hover:bg-primary-hover transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
