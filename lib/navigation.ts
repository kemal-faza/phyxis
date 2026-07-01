import { UserRole } from '@/features/auth/types'

export type NavItem = {
  label: string
  href: string
  roles: UserRole[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', roles: ['praktikan', 'asisten', 'dosen', 'admin'] },
  { label: 'Simulator', href: '/simulator', roles: ['praktikan', 'asisten', 'dosen', 'admin'] },
  { label: 'Pre-test / Post-test', href: '/quiz', roles: ['praktikan', 'asisten', 'dosen', 'admin'] },
  { label: 'Laporan Akhir', href: '/report', roles: ['praktikan', 'asisten', 'dosen', 'admin'] },
  { label: 'KPS Passport', href: '/kps', roles: ['praktikan', 'asisten', 'dosen', 'admin'] },
  { label: 'Monitoring', href: '/monitoring', roles: ['dosen', 'admin'] },
]
