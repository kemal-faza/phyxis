export interface ExperimentItem {
  id: string
  name: string
  subtitle: string
  status: 'active' | 'completed' | 'locked'
}

export const EXPERIMENTS: ExperimentItem[] = [
  { id: 'M-1', name: 'Pegas', subtitle: 'Konstanta Pegas (Hooke\'s Law)', status: 'completed' },
  { id: 'M-2', name: 'Viskosimeter Stokes', subtitle: 'Koefisien Kekentalan Zat Cair', status: 'completed' },
  { id: 'M-4', name: 'Gerak Jatuh Bebas', subtitle: 'Free Fall Motion', status: 'active' },
  { id: 'M-5', name: 'Momen Kelembaman', subtitle: 'Momen Inersia Benda', status: 'completed' },
  { id: 'M-6', name: 'Pesawat Atwood', subtitle: 'GLB & GLBB', status: 'completed' },
]
