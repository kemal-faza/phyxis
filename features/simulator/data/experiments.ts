export interface ExperimentItem {
  id: string
  name: string
  subtitle: string
  status: 'active' | 'completed' | 'locked'
}

export const EXPERIMENTS: ExperimentItem[] = [
  { id: 'M-1', name: 'Pengukuran', subtitle: 'Measurement & Uncertainty', status: 'completed' },
  { id: 'M-2', name: 'Vektor', subtitle: 'Vector Analysis', status: 'completed' },
  { id: 'M-3', name: 'Gerak Lurus', subtitle: 'Linear Motion', status: 'completed' },
  { id: 'M-4', name: 'Gerak Jatuh Bebas', subtitle: 'Free Fall Motion', status: 'active' },
  { id: 'M-5', name: 'Gerak Parabola', subtitle: 'Projectile Motion', status: 'locked' },
  { id: 'M-6', name: 'Hukum Newton', subtitle: "Newton's Laws of Motion", status: 'locked' },
]
