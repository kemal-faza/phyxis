// ── Stats Grid Data (for DashboardStatsGrid) ──

export const PRAKTIKAN_STATS_GRID = [
  { label: 'Active Practicum', value: '08', caption: 'Modules in progress' },
  { label: 'Average Score', value: '86.4%', caption: 'vs last month', change: '▲ 2.4%' },
  { label: 'KPS Level', value: 'Level 5', caption: '1,240 / 1,600 XP' },
  { label: 'Completion', value: '23/30', caption: 'Modules finished' },
]

export const DOSEN_STATS_GRID = [
  { label: 'Total Praktikan', value: 124, caption: 'terdaftar aktif', change: '+4%' },
  { label: 'Rata-rata Nilai', value: 78.5, caption: 'seluruh modul', change: '+2.1%' },
  { label: 'Modul Aktif', value: 5, caption: 'sedang berjalan' },
  { label: 'Sesi Minggu Ini', value: 12, caption: 'terjadwal', change: '+3' },
]

export const ASISTEN_STATS_GRID = [
  { label: 'Laporan Masuk', value: 45, caption: 'perlu direview', change: '+12' },
  { label: 'Quiz Perlu Review', value: 12, caption: 'menunggu penilaian' },
  { label: 'Praktikan Aktif', value: 124, caption: 'semester 4' },
  { label: 'Sesi Hari Ini', value: 3, caption: 'jadwal lab' },
]

export const ADMIN_STATS_GRID = [
  { label: 'Total Pengguna', value: 156, caption: 'seluruh role', change: '+8' },
  { label: 'Modul Aktif', value: 1, caption: 'dalam publikasi' },
  { label: 'Role Terdaftar', value: 4, caption: 'praktikan, asisten, dosen, admin' },
  { label: 'Server Uptime', value: '99.9%', caption: '30 hari terakhir' },
]

// ── Schedule Data (for DashboardScheduleCard) ──

export const PRAKTIKAN_SCHEDULE = [
  { time: '08:00', title: 'Mekanika — Pesawat Atwood', location: 'Lab Mekanika A-102', status: 'ongoing' as const },
  { time: '10:00', title: 'Optika — Pembiasan Cahaya', location: 'Lab Optik B-204', status: 'upcoming' as const },
  { time: '13:00', title: 'Listrik — Hukum Ohm', location: 'Lab Listrik C-110', status: 'upcoming' as const },
  { time: '15:00', title: 'Termodinamika — Kalorimeter', location: 'Lab Termo D-208', status: 'upcoming' as const },
]

export const DOSEN_SCHEDULE = [
  { time: '08:00', title: 'Kuliah Mekanika — Pesawat Atwood', location: 'Ruang 301', status: 'ongoing' as const },
  { time: '10:00', title: 'Office Hours', location: 'Ruang Dosen Lt.2', status: 'upcoming' as const },
  { time: '13:00', title: 'Lab Visit — Optika B-204', location: 'Lab Optik', status: 'upcoming' as const },
  { time: '15:00', title: 'Rapat Jurusan', location: 'Ruang Sidang', status: 'upcoming' as const },
]

export const ASISTEN_SCHEDULE = [
  { time: '08:00', title: 'Mekanika Lab — Assist', location: 'Lab A-102', status: 'ongoing' as const },
  { time: '10:00', title: 'Nilai Laporan M-4', location: 'Ruang Asisten', status: 'upcoming' as const },
  { time: '13:00', title: 'Optika Lab — Assist', location: 'Lab B-204', status: 'upcoming' as const },
  { time: '15:00', title: 'Briefing Dosen', location: 'Ruang 301', status: 'upcoming' as const },
]

export const ADMIN_SCHEDULE = [
  { time: '09:00', title: 'Update server maintenance', detail: 'Patching database servers', status: 'pending' as const },
  { time: '11:00', title: 'User role audit', detail: 'Verify all accounts semester 4', status: 'pending' as const },
  { time: '14:00', title: 'Backup database', detail: 'Full backup before midterm', status: 'pending' as const },
]

// ── Activity Data (for DashboardActivityCard) ──

export const PRAKTIKAN_ACTIVITY = [
  { id: 1, title: 'Report graded', detail: 'Gerak Harmonik Sederhana — Score 92 — AI reviewed', time: '2h ago' },
  { id: 2, title: 'New data uploaded', detail: 'Hukum Ohm dataset — 128 samples', time: '4h ago' },
  { id: 3, title: 'Rubric updated', detail: 'Kalorimeter — assistant weight adjusted', time: '5h ago' },
]

export const DOSEN_ACTIVITY = [
  { id: 1, title: 'Nilai terkumpul', detail: 'M-4 — 98/124 praktikan sudah dinilai', time: '2h ago' },
  { id: 2, title: 'Rubrik diperbarui', detail: 'M-5 Momen Kelembaman — bobot asisten disesuaikan', time: '4h ago' },
  { id: 3, title: 'Laporan perlu review', detail: 'M-6 — 8 laporan menunggu verifikasi', time: '6h ago' },
]

export const ASISTEN_ACTIVITY = [
  { id: 1, title: 'Laporan dinilai', detail: 'Budi Santoso — M-4 skor 85', time: '1h ago' },
  { id: 2, title: 'Quiz perlu review', detail: 'Ani Rahmawati — M-4 kuis menunggu', time: '3h ago' },
  { id: 3, title: 'Laporan baru masuk', detail: '12 laporan M-4 siap direview', time: '5h ago' },
]

export const ADMIN_ACTIVITY = [
  { id: 1, title: 'User baru', detail: '3 praktikan terdaftar hari ini', time: '2h ago' },
  { id: 2, title: 'Modul dipublikasikan', detail: 'M-5 Momen Kelembaman — status: Draft', time: '4h ago' },
  { id: 3, title: 'Role diperbarui', detail: 'Role asisten — akses tambahan: edit nilai', time: '6h ago' },
]

// ── Module Progress Data (for DashboardModulesProgress) ──

export const PRAKTIKAN_MODULES = [
  { id: 'M-4', name: 'Gerak Jatuh Bebas', progress: 76 },
  { id: 'M-2', name: 'Viskosimeter Stokes', progress: 100 },
  { id: 'M-5', name: 'Momen Kelembaman', progress: 30 },
]

export const DOSEN_MODULES = [
  { id: 'M-4', name: 'Gerak Jatuh Bebas', progress: 78 },
  { id: 'M-2', name: 'Viskosimeter Stokes', progress: 92 },
  { id: 'M-5', name: 'Momen Kelembaman', progress: 34 },
]

// ── DashboardRoleRecap Data ──

export const DOSEN_STATS = [
  { label: 'Total Praktikan', value: 124, change: '+4%' },
  { label: 'Rata-rata Nilai', value: 78.5, change: '+2.1%' },
  { label: 'Modul Aktif', value: 5, change: '0' },
  { label: 'Sesi Minggu Ini', value: 12, change: '+3' },
]

export const RECENT_MODULES = [
  { id: 'M-4', name: 'Gerak Jatuh Bebas', status: 'Aktif' as const, participants: 124 },
  { id: 'M-1', name: 'Pegas', status: 'Selesai' as const, participants: 120 },
  { id: 'M-2', name: 'Viskosimeter Stokes', status: 'Selesai' as const, participants: 118 },
  { id: 'M-5', name: 'Momen Kelembaman', status: 'Selesai' as const, participants: 95 },
  { id: 'M-6', name: 'Pesawat Atwood', status: 'Draft' as const, participants: 0 },
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
