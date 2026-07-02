export const DASHBOARD_STATS = [
  { label: 'Student console', value: '08' },
  { label: 'Avg Score', value: '86.4%' },
  { label: 'KPS Level', value: 'Level 5' },
  { label: 'Completion', value: '23/30' },
]

export const TODAY_SCHEDULE = [
  { time: '08:00', title: 'Pretest M-4 Gerak Jatuh Bebas', location: 'Lab Fisika Lt. 2', status: 'ongoing' as const },
  { time: '10:00', title: 'Simulasi M-4 Sesi 03', location: 'Lab Virtual A', status: 'upcoming' as const },
  { time: '13:00', title: 'Pengumpulan Laporan M-3', location: 'Online', status: 'upcoming' as const },
  { time: '15:30', title: 'Review KPS Indikator', location: 'Rapat Dosen', status: 'upcoming' as const },
]

export const RECENT_ACTIVITY = [
  { id: 1, text: 'Report graded (score 92)', time: '2 hours ago' },
  { id: 2, text: 'New data uploaded for M-4', time: '4 hours ago' },
  { id: 3, text: 'Rubric updated by Dosen', time: 'Yesterday' },
]

export const MODULE_PROGRESS = [
  { id: 'M-4', name: 'Gerak Jatuh Bebas', progress: 76 },
  { id: 'M-3', name: 'Hukum Newton', progress: 100 },
  { id: 'M-5', name: 'Gerak Parabola', progress: 30 },
]

// Legacy role-specific arrays kept for compatibility
export const DOSEN_STATS = [
  { label: 'Total Praktikan', value: 124, change: '+4%' },
  { label: 'Rata-rata Nilai', value: 78.5, change: '+2.1%' },
  { label: 'Modul Aktif', value: 5, change: '0' },
  { label: 'Sesi Minggu Ini', value: 12, change: '+3' },
]

export const RECENT_MODULES = [
  { id: 'M-4', name: 'Gerak Jatuh Bebas', status: 'Aktif', participants: 124 },
  { id: 'M-5', name: 'Gerak Parabola', status: 'Draft', participants: 0 },
  { id: 'M-6', name: 'Hukum Newton', status: 'Draft', participants: 0 },
]

export const PRAKTIKAN_STATS = [
  { label: 'Modul Aktif', value: 'M-4 Gerak Jatuh Bebas' },
  { label: 'Status Laporan', value: 'Belum dikumpulkan' },
  { label: 'Deadline', value: '07 Juli 2026' },
]

export const ASISTEN_STATS = [
  { label: 'Laporan Masuk', value: 45 },
  { label: 'Quiz Perlu Review', value: 12 },
  { label: 'Praktikan Aktif', value: 124 },
]

export const ASISTEN_QUEUE = [
  { nama: 'Budi Santoso', modul: 'M-4', status: 'Menunggu review' as const },
  { nama: 'Ani Rahmawati', modul: 'M-4', status: 'Menunggu review' as const },
  { nama: 'Citra Dewi', modul: 'M-4', status: 'Sudah dinilai' as const },
  { nama: 'Dedi Prasetyo', modul: 'M-4', status: 'Menunggu review' as const },
]

export const ADMIN_STATS = [
  { label: 'Total Pengguna', value: 156 },
  { label: 'Modul Aktif', value: 1 },
  { label: 'Role Terdaftar', value: 4 },
]
