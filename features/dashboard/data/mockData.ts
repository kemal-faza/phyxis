export const DASHBOARD_STATS = [
  { label: 'Active Practicum', value: '08', caption: 'Modules in progress' },
  { label: 'Average Score', value: '86.4%', caption: 'vs last month', change: '▲ 2.4%' },
  { label: 'KPS Level', value: 'Level 5', caption: '1,240 / 1,600 XP' },
  { label: 'Completion', value: '23/30', caption: 'Modules finished' },
]

export const TODAY_SCHEDULE = [
  { time: '08:00', title: 'Mekanika — Gerak Parabola', location: 'Lab Mekanika A-102', status: 'ongoing' as const },
  { time: '10:00', title: 'Optika — Pembiasan Cahaya', location: 'Lab Optik B-204', status: 'upcoming' as const },
  { time: '13:00', title: 'Listrik — Hukum Ohm', location: 'Lab Listrik C-110', status: 'upcoming' as const },
  { time: '15:00', title: 'Termodinamika — Kalorimeter', location: 'Lab Termo D-208', status: 'upcoming' as const },
]

export const RECENT_ACTIVITY = [
  { id: 1, title: 'Report graded', detail: 'Gerak Harmonik Sederhana — Score 92 — AI reviewed', time: '2h ago' },
  { id: 2, title: 'New data uploaded', detail: 'Hukum Ohm dataset — 128 samples', time: '4h ago' },
  { id: 3, title: 'Rubric updated', detail: 'Kalorimeter — assistant weight adjusted', time: '5h ago' },
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
