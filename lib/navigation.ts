import { UserRole } from '@/features/auth/types'

export type NavItem = {
  label: string
  href: string
  roles: UserRole[]
  icon: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',          href: '/dashboard',  roles: ['praktikan', 'asisten', 'dosen', 'admin'], icon: 'Grid' },
  { label: 'Simulator',          href: '/simulator',  roles: ['praktikan', 'asisten', 'dosen'],          icon: 'Cpu' },
  { label: 'Pre-test / Post-test', href: '/quiz',     roles: ['praktikan', 'asisten', 'dosen'],          icon: 'FileText' },
  { label: 'Laporan Akhir',      href: '/report',     roles: ['praktikan', 'asisten', 'dosen'],          icon: 'Clipboard' },
  { label: 'KPS Passport',       href: '/kps',        roles: ['praktikan', 'asisten', 'dosen', 'admin'], icon: 'Award' },
  { label: 'Monitoring',         href: '/monitoring', roles: ['dosen', 'admin'],                         icon: 'Activity' },
]
