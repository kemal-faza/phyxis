'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { NAV_ITEMS } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const role = useAuthStore((s) => s.role)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  if (!role) return null

  const items = NAV_ITEMS.filter((item) => item.roles.includes(role))

  return (
    <aside className="fixed left-0 top-0 h-screen w-sidebar-width border-r border-border-subtle bg-surface-charcoal">
      <div className="flex h-14 items-center border-b border-border-subtle px-4 font-bold text-primary">
        PhyXis
      </div>
      <nav className="p-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'block rounded px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container',
              pathname === item.href && 'border-l-2 border-primary bg-glow-green text-primary'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-full border-t border-border-subtle p-3 text-xs text-on-surface-variant">
        Role: {role ?? 'guest'}
      </div>
    </aside>
  )
}
