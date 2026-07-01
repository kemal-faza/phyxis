export interface KpsIndicator {
  id: string
  name: string
  status: 'lulus' | 'belum-lulus'
}

export const MOCK_KPS: KpsIndicator[] = [
  { id: 'kps-1', name: 'Mengidentifikasi variabel fisis', status: 'lulus' },
  { id: 'kps-2', name: 'Merumuskan hipotesis', status: 'lulus' },
  { id: 'kps-3', name: 'Mengumpulkan data secara sistematis', status: 'belum-lulus' },
  { id: 'kps-4', name: 'Menganalisis data dan grafik', status: 'lulus' },
  { id: 'kps-5', name: 'Menarik kesimpulan ilmiah', status: 'belum-lulus' },
]
