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
