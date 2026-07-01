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
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const role = useAuthStore((s) => s.role)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  if (!role) return null

  const items = NAV_ITEMS.filter((item) => item.roles.includes(role))

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen border-r border-border-subtle bg-surface-charcoal transition-all duration-200 flex flex-col',
        collapsed ? 'w-sidebar-collapsed' : 'w-sidebar-width'
      )}
    >
      {/* Logo — klik ke /login */}
      <Link
        href="/login"
        className={cn(
          'flex h-14 items-center border-b border-border-subtle font-bold text-primary transition-colors hover:bg-surface-container',
          collapsed ? 'justify-center' : 'px-4'
        )}
      >
        {collapsed ? <span className="text-lg">Px</span> : <span>PhyXis</span>}
      </Link>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {items.map((item) => {
          const IconComponent = iconMap[item.icon]
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                'flex items-center gap-3 rounded text-sm transition-colors',
                collapsed
                  ? 'justify-center px-2 py-2'
                  : 'px-3 py-2',
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

      {/* Bottom: Role + Toggle */}
      <div className="border-t border-border-subtle">
        {!collapsed && (
          <div className="p-3 text-xs text-on-surface-variant">Role: {role}</div>
        )}
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-center p-2 text-on-surface-variant transition-colors hover:bg-surface-container"
          title={collapsed ? 'Perluas sidebar' : 'Ciutkan sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </aside>
  )
}
