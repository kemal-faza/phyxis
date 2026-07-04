'use client'

import { Bell, ChevronRight, LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCurrentPageTitle } from './PageTitleContext'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ROLE_LABELS: Record<string, string> = {
  praktikan: 'Praktikan',
  asisten: 'Asisten Laboratorium',
  dosen: 'Dosen Pengampu',
  admin: 'Administrator',
}

export function TopHeader() {
  const title = useCurrentPageTitle()
  const role = useAuthStore((s) => s.role)
  const clearRole = useAuthStore((s) => s.clearRole)
  const router = useRouter()

  const handleSignOut = () => {
    clearRole()
    router.push('/login')
  }

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Profile menu"
            >
              <User size={18} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col gap-1">
                <span className="text-body font-semibold text-foreground">Akun Saya</span>
                <span className="text-label-sm text-muted capitalize">
                  {role ? ROLE_LABELS[role] ?? role : 'Tidak ada role'}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/app/settings')}>
              <User size={16} className="text-muted" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="text-error focus:text-error">
              <LogOut size={16} />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
