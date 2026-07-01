export interface KpsIndicator {
  id: string
  name: string
  status: 'lulus' | 'belum-lulus'
}

export const INDICATOR_DEFINITIONS: { id: string; name: string }[] = [
  { id: 'kps-1', name: 'Mengidentifikasi variabel fisis' },
  { id: 'kps-2', name: 'Merumuskan hipotesis' },
  { id: 'kps-3', name: 'Mengumpulkan data secara sistematis' },
  { id: 'kps-4', name: 'Menganalisis data dan grafik' },
  { id: 'kps-5', name: 'Menarik kesimpulan ilmiah' },
]

export const MOCK_KPS: KpsIndicator[] = [
  { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'lulus' },
  { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'lulus' },
  { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'belum-lulus' },
  { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'lulus' },
  { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'belum-lulus' },
]

export interface PraktikanKps {
  nama: string
  nim: string
  indicators: KpsIndicator[]
}

export const MOCK_PRAKTIKAN_KPS: PraktikanKps[] = [
  {
    nama: 'Budi Santoso',
    nim: '230101001',
    indicators: [
      { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'lulus' },
      { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'lulus' },
      { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'belum-lulus' },
      { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'lulus' },
      { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'belum-lulus' },
    ],
  },
  {
    nama: 'Ani Rahmawati',
    nim: '230101002',
    indicators: [
      { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'lulus' },
      { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'lulus' },
      { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'lulus' },
      { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'lulus' },
      { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'lulus' },
    ],
  },
  {
    nama: 'Citra Dewi',
    nim: '230101003',
    indicators: [
      { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'lulus' },
      { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'belum-lulus' },
      { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'belum-lulus' },
      { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'belum-lulus' },
      { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'belum-lulus' },
    ],
  },
  {
    nama: 'Dedi Prasetyo',
    nim: '230101004',
    indicators: [
      { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'lulus' },
      { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'lulus' },
      { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'lulus' },
      { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'lulus' },
      { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'belum-lulus' },
    ],
  },
  {
    nama: 'Eka Putri',
    nim: '230101005',
    indicators: [
      { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'belum-lulus' },
      { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'belum-lulus' },
      { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'belum-lulus' },
      { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'belum-lulus' },
      { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'belum-lulus' },
    ],
  },
]
