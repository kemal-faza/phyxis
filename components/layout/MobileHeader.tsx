'use client'

import { Menu, Bell, User, LogOut } from 'lucide-react'
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

export function MobileHeader({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const title = useCurrentPageTitle()
  const role = useAuthStore((s) => s.role)
  const clearRole = useAuthStore((s) => s.clearRole)
  const router = useRouter()

  const handleSignOut = () => {
    clearRole()
    router.push('/login')
  }

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Menu profil"
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
