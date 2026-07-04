'use client'

import { StatCard } from './StatCard'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  PRAKTIKAN_STATS_GRID,
  DOSEN_STATS_GRID,
  ASISTEN_STATS_GRID,
  ADMIN_STATS_GRID,
} from '../data/mockData'
import { FlaskConical, BarChart3, Award, CheckCircle, Users, BookOpen, ClipboardCheck, Server, TrendingUp, Clock, Shield, Activity } from 'lucide-react'
import type { ElementType } from 'react'

type IconConfig = Record<string, { icon: ElementType; className: string }>

const ICONS: Record<string, IconConfig> = {
  praktikan: {
    'Active Practicum': { icon: FlaskConical, className: 'bg-primary/10 text-primary' },
    'Average Score': { icon: BarChart3, className: 'bg-purple/[0.12] text-purple' },
    'KPS Level': { icon: Award, className: 'bg-primary-cyan/[0.12] text-primary-cyan' },
    Completion: { icon: CheckCircle, className: 'bg-success/[0.12] text-success' },
  },
  dosen: {
    'Total Praktikan': { icon: Users, className: 'bg-primary/10 text-primary' },
    'Rata-rata Nilai': { icon: TrendingUp, className: 'bg-success/[0.12] text-success' },
    'Modul Aktif': { icon: BookOpen, className: 'bg-primary-cyan/[0.12] text-primary-cyan' },
    'Sesi Minggu Ini': { icon: Clock, className: 'bg-purple/[0.12] text-purple' },
  },
  asisten: {
    'Laporan Masuk': { icon: ClipboardCheck, className: 'bg-primary/10 text-primary' },
    'Quiz Perlu Review': { icon: BarChart3, className: 'bg-warning/15 text-warning' },
    'Praktikan Aktif': { icon: Users, className: 'bg-success/[0.12] text-success' },
    'Sesi Hari Ini': { icon: Clock, className: 'bg-primary-cyan/[0.12] text-primary-cyan' },
  },
  admin: {
    'Total Pengguna': { icon: Users, className: 'bg-primary/10 text-primary' },
    'Modul Aktif': { icon: BookOpen, className: 'bg-primary-cyan/[0.12] text-primary-cyan' },
    'Role Terdaftar': { icon: Shield, className: 'bg-purple/[0.12] text-purple' },
    'Server Uptime': { icon: Activity, className: 'bg-success/[0.12] text-success' },
  },
}

const STATS: Record<string, readonly { label: string; value: string | number; caption: string; change?: string }[]> = {
  praktikan: PRAKTIKAN_STATS_GRID,
  dosen: DOSEN_STATS_GRID,
  asisten: ASISTEN_STATS_GRID,
  admin: ADMIN_STATS_GRID,
}

export function DashboardStatsGrid() {
  const role = useAuthStore((s) => s.role)
  if (!role) return null

  const stats = STATS[role]
  const icons = ICONS[role]
  if (!stats) return null

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => {
        const config = icons[s.label]
        return (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={config?.icon}
            iconContainerClass={config?.className}
            caption={s.caption}
            change={'change' in s ? String(s.change) : undefined}
          />
        )
      })}
    </div>
  )
}
