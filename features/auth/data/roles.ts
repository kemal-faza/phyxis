import { UserRole } from '@/features/auth/types'

export const ROLES: { value: UserRole; label: string; description: string }[] = [
  { value: 'praktikan', label: 'Praktikan', description: 'Akses simulator, quiz, dan laporan' },
  { value: 'asisten', label: 'Asisten Laboratorium', description: 'Review jawaban dan input nilai' },
  { value: 'dosen', label: 'Dosen Pengampu', description: 'Kelola rubrik dan KPS' },
  { value: 'admin', label: 'Admin', description: 'Kelola pengguna dan modul' },
]
