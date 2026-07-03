import { KpsPassport } from '@/features/kps/types'

export const MOCK_PASSPORT: KpsPassport = {
  overallScore: 77,
  skillsPassed: 6,
  totalSkills: 8,
  badges: [
    { id: 'badge-1', name: 'Precision Data Interpreter', level: 'silver' },
    { id: 'badge-2', name: 'Observer', level: 'bronze' },
    { id: 'badge-3', name: 'Wave Whisperer', level: 'bronze' },
    { id: 'badge-4', name: 'Circuit Tamer', level: 'silver' },
    { id: 'badge-5', name: 'Force Analyst', level: 'bronze', unlockedAt: '2026-07-01' },
    { id: 'badge-6', name: 'Optics Explorer', level: 'bronze' },
  ],
  skills: [
    { id: 'observation', name: 'Observation', score: 92, threshold: 70, note: 'Sangat baik dalam mencatat detail pengamatan.' },
    { id: 'classification', name: 'Classification', score: 84, threshold: 70, note: 'Mampu mengelompokkan variabel dengan tepat.' },
    { id: 'measurement', name: 'Measurement', score: 88, threshold: 70, note: 'Penggunaan alat ukur sudah akurat.' },
    { id: 'prediction', name: 'Prediction', score: 76, threshold: 70, note: 'Prediksi cukup logis, perlu latihan lebih untuk kasus kompleks.' },
    { id: 'hypothesis', name: 'Hypothesis', score: 68, threshold: 70, note: 'Rumusan hipotesis masih terlalu umum. Perlu latihan merumuskan hipotesis yang terukur.' },
    { id: 'experiment', name: 'Experiment', score: 81, threshold: 70, note: 'Desain eksperimen sudah baik.' },
    { id: 'interpretation', name: 'Interpretation', score: 72, threshold: 70, note: 'Interpretasi data sudah cukup, tapi analisis error masih perlu ditingkatkan.' },
    { id: 'communication', name: 'Communication', score: 58, threshold: 70, note: 'Penulisan laporan perlu lebih sistematis. Diskusi dengan asprak direkomendasikan.' },
  ],
}
