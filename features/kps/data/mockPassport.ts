import { KpsModule, KpsPassport } from '@/features/kps/types'

export const MOCK_MODULES: KpsModule[] = [
  { id: 'mod-1', name: 'M-1 Pegas' },
  { id: 'mod-2', name: 'M-2 Viskosimeter Stokes' },
  { id: 'mod-3', name: 'M-4 Gerak Jatuh Bebas' },
  { id: 'mod-4', name: 'M-5 Momen Kelembaman' },
]

const SKILL_DEFS = [
  { id: 'observation', name: 'Observation' },
  { id: 'classification', name: 'Classification' },
  { id: 'measurement', name: 'Measurement' },
  { id: 'prediction', name: 'Prediction' },
  { id: 'hypothesis', name: 'Hypothesis' },
  { id: 'experiment', name: 'Experiment' },
  { id: 'interpretation', name: 'Interpretation' },
  { id: 'communication', name: 'Communication' },
]

const DEFAULT_NOTES: Record<string, string> = {
  observation: 'Sangat baik dalam mencatat detail pengamatan.',
  classification: 'Mampu mengelompokkan variabel dengan tepat.',
  measurement: 'Penggunaan alat ukur sudah akurat.',
  prediction: 'Prediksi cukup logis, perlu latihan lebih untuk kasus kompleks.',
  hypothesis: 'Rumusan hipotesis masih terlalu umum. Perlu latihan merumuskan hipotesis yang terukur.',
  experiment: 'Desain eksperimen sudah baik.',
  interpretation: 'Interpretasi data sudah cukup, tapi analisis error masih perlu ditingkatkan.',
  communication: 'Penulisan laporan perlu lebih sistematis.',
}

function buildPassport(scoreMap: Record<string, number>, badgesData: { id: string; name: string; level: 'bronze' | 'silver' | 'gold'; unlockedAt?: string }[]): KpsPassport {
  const skills = SKILL_DEFS.map((def) => ({
    id: def.id,
    name: def.name,
    score: scoreMap[def.id] ?? 70,
    threshold: 70,
    note: DEFAULT_NOTES[def.id] ?? '',
  }))
  const passed = skills.filter((s) => s.score >= 70).length
  const overall = Math.round(skills.reduce((sum, s) => sum + s.score, 0) / skills.length)
  return {
    overallScore: overall,
    skillsPassed: passed,
    totalSkills: skills.length,
    badges: badgesData.map((b) => ({ ...b })),
    skills,
  }
}

// Module base score maps (different difficulty emphasis per module)
export const MODULE_SCORE_MAPS: Record<string, Record<string, number>> = {
  'mod-1': {
    observation: 88, classification: 82, measurement: 85, prediction: 74,
    hypothesis: 65, experiment: 78, interpretation: 70, communication: 60,
  },
  'mod-2': {
    observation: 90, classification: 86, measurement: 80, prediction: 70,
    hypothesis: 72, experiment: 84, interpretation: 68, communication: 62,
  },
  'mod-3': {
    observation: 78, classification: 75, measurement: 82, prediction: 68,
    hypothesis: 70, experiment: 76, interpretation: 74, communication: 58,
  },
  'mod-4': {
    observation: 92, classification: 84, measurement: 88, prediction: 76,
    hypothesis: 68, experiment: 81, interpretation: 72, communication: 58,
  },
}

const MODULE_BADGES: Record<string, { id: string; name: string; level: 'bronze' | 'silver' | 'gold'; unlockedAt?: string }[]> = {
  'mod-1': [
    { id: 'b1-1', name: 'Observer', level: 'bronze', unlockedAt: '2026-06-15' },
    { id: 'b1-2', name: 'Precision Starter', level: 'bronze' },
  ],
  'mod-2': [
    { id: 'b2-1', name: 'Motion Analyst', level: 'silver' },
    { id: 'b2-2', name: 'Graph Master', level: 'bronze' },
  ],
  'mod-3': [
    { id: 'b3-1', name: 'Force Explorer', level: 'bronze' },
  ],
  'mod-4': [
    { id: 'b4-1', name: 'Precision Data Interpreter', level: 'silver' },
    { id: 'b4-2', name: 'Circuit Tamer', level: 'silver' },
    { id: 'b4-3', name: 'Wave Whisperer', level: 'bronze' },
    { id: 'b4-4', name: 'Force Analyst', level: 'bronze', unlockedAt: '2026-07-01' },
    { id: 'b4-5', name: 'Optics Explorer', level: 'bronze' },
  ],
}

// Build a passport with optional score offset for per-praktikan variation
export function buildModulePassport(moduleId: string, scoreOffset = 0): KpsPassport {
  const baseScores = MODULE_SCORE_MAPS[moduleId]
  if (!baseScores) {
    return buildPassport({}, [])
  }
  const adjustedScores: Record<string, number> = {}
  for (const [skillId, score] of Object.entries(baseScores)) {
    adjustedScores[skillId] = Math.min(100, Math.max(0, score + scoreOffset))
  }
  return buildPassport(adjustedScores, MODULE_BADGES[moduleId] ?? [])
}
