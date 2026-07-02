import { UserRole } from '@/features/auth/types'

export type NavItem = {
  label: string
  href: string
  roles: UserRole[]
  icon: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',    href: '/app/dashboard',  roles: ['praktikan', 'asisten', 'dosen', 'admin'], icon: 'LayoutDashboard' },
  { label: 'Virtual Lab',  href: '/app/simulator',  roles: ['praktikan', 'asisten', 'dosen'],          icon: 'FlaskConical' },
  { label: 'KPS Passport', href: '/app/kps',        roles: ['praktikan', 'asisten', 'dosen', 'admin'], icon: 'Award' },
]

export const ACCOUNT_ITEMS: NavItem[] = [
  { label: 'Notifications', href: '/app/notifications', roles: ['praktikan', 'asisten', 'dosen', 'admin'], icon: 'Bell' },
  { label: 'Settings',      href: '/app/settings',      roles: ['praktikan', 'asisten', 'dosen', 'admin'], icon: 'Settings' },
]
