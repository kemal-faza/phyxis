import { PraktikanKpsProfile } from '@/features/kps/types'
import { MOCK_MODULES, buildModulePassport } from './mockPassport'

const OFFSETS: Record<string, number> = {
  '230101001': 0,   // Budi = baseline
  '230101002': 8,   // Ani = +8
  '230101003': -12, // Citra = -12
}

function buildProfile(nama: string, nim: string): PraktikanKpsProfile {
  const offset = OFFSETS[nim] ?? 0
  return {
    nama,
    nim,
    modules: MOCK_MODULES.map((mod) => ({
      moduleId: mod.id,
      moduleName: mod.name,
      passport: buildModulePassport(mod.id, offset),
    })),
  }
}

export const MOCK_PRAKTIKAN_PROFILES: PraktikanKpsProfile[] = [
  buildProfile('Budi Santoso', '230101001'),
  buildProfile('Ani Rahmawati', '230101002'),
  buildProfile('Citra Dewi', '230101003'),
  buildProfile('Dedi Prasetyo', '230101004'),
  buildProfile('Eka Putri', '230101005'),
]
