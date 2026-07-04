'use client'

import { Button } from '@/components/ui/Button'
import { Calendar, FlaskConical, ClipboardCheck, BookOpen, Users, Shield } from 'lucide-react'
import { useAuthStore } from '@/features/auth/stores/authStore'

export function DashboardHeader() {
  const role = useAuthStore((s) => s.role)
  if (!role) return null

  const config = HEADER_CONFIG[role]
  if (!config) return null

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <p className="text-body font-semibold text-primary">{config.subtitle}</p>
        <h1 className="page-title">{config.heading}</h1>
        <p className="mt-2 text-body text-muted">{config.description}</p>
      </div>
          <div className="flex flex-col gap-2 md:flex-row lg:flex-col shrink-0">
        {config.ctas.map((cta, i) => (
          <Button key={i} variant={cta.variant} icon={cta.icon} iconPosition="left" href={cta.href}>
            {cta.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

const HEADER_CONFIG: Record<string, {
  subtitle: string
  heading: string
  description: string
  ctas: { variant: 'primary' | 'outline'; icon: React.ReactNode; href?: string; label: string }[]
}> = {
  praktikan: {
    subtitle: 'Student console · Semester 4',
    heading: 'Selamat datang, Dinda',
    description: 'You have 2 experiments and 1 report due today. Lab A-102 is live and ready.',
    ctas: [
      { variant: 'outline', icon: <Calendar size={16} />, label: 'Full schedule' },
      { variant: 'primary', icon: <FlaskConical size={16} />, href: '/app/simulator', label: 'Enter Virtual Lab' },
    ],
  },
  asisten: {
    subtitle: 'Asisten Lab · Semester 4',
    heading: 'Selamat datang, Dinda',
    description: '12 laporan menunggu review. 3 sesi lab hari ini.',
    ctas: [
      { variant: 'outline', icon: <ClipboardCheck size={16} />, label: 'Buka Antrian Review' },
      { variant: 'primary', icon: <BookOpen size={16} />, label: 'Lihat Kelas' },
    ],
  },
  dosen: {
    subtitle: 'Dosen Pengampu · Semester 4',
    heading: 'Selamat datang, Dinda',
    description: '124 praktikan aktif. 5 modul berjalan.',
    ctas: [
      { variant: 'outline', icon: <BookOpen size={16} />, label: 'Lihat Modul' },
      { variant: 'primary', icon: <Users size={16} />, label: 'Buka Rekap' },
    ],
  },
  admin: {
    subtitle: 'Admin Panel',
    heading: 'Selamat datang, Admin',
    description: '156 pengguna terdaftar. Sistem berjalan normal.',
    ctas: [
      { variant: 'primary', icon: <Shield size={16} />, label: 'Kelola Pengguna' },
    ],
  },
}
