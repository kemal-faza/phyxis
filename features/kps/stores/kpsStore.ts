import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { INDICATOR_DEFINITIONS } from '@/features/kps/data/mockKps'
import { PraktikanKpsProfile, KpsModule } from '@/features/kps/types'
import { MOCK_MODULES } from '@/features/kps/data/mockPassport'
import { MOCK_PRAKTIKAN_PROFILES } from '@/features/kps/data/mockPraktikanPassports'

export interface IndicatorDef {
  id: string
  name: string
}

export interface PraktikanKpsData {
  nama: string
  nim: string
  indicatorStatuses: Record<string, 'lulus' | 'belum-lulus'>
}

interface KpsStoreState {
  indicatorDefs: IndicatorDef[]
  praktikanList: PraktikanKpsData[]
  moduleDefs: KpsModule[]
  profiles: PraktikanKpsProfile[]
  addIndicator: (name: string) => void
  updateIndicator: (id: string, name: string) => void
  removeIndicator: (id: string) => void
  toggleStatus: (nim: string, indicatorId: string) => void
  addModule: (name: string) => void
  removeModule: (id: string) => void
  setScore: (nim: string, moduleId: string, skillId: string, score: number) => void
  setNote: (nim: string, moduleId: string, skillId: string, note: string) => void
}

function generateId(existing: { id: string }[]): string {
  let max = 0
  for (const item of existing) {
    const parts = item.id.split('-')
    const num = parseInt(parts[parts.length - 1], 10)
    if (!isNaN(num) && num > max) max = num
  }
  return `kps-${max + 1}`
}

function seedPraktikanList(defs: IndicatorDef[]): PraktikanKpsData[] {
  const names = [
    { nama: 'Budi Santoso', nim: '230101001' },
    { nama: 'Ani Rahmawati', nim: '230101002' },
    { nama: 'Citra Dewi', nim: '230101003' },
    { nama: 'Dedi Prasetyo', nim: '230101004' },
    { nama: 'Eka Putri', nim: '230101005' },
  ]
  return names.map((n) => {
    const statuses: Record<string, 'lulus' | 'belum-lulus'> = {}
    defs.forEach((d) => {
      statuses[d.id] = 'belum-lulus'
    })
    return { ...n, indicatorStatuses: statuses }
  })
}

function seedInitialStatuses(
  defs: IndicatorDef[],
  list: PraktikanKpsData[]
): PraktikanKpsData[] {
  const patterns: Record<string, string[]> = {
    '230101001': ['kps-1', 'kps-2', 'kps-4'],
    '230101002': ['kps-1', 'kps-2', 'kps-3', 'kps-4', 'kps-5'],
    '230101004': ['kps-1', 'kps-2', 'kps-3', 'kps-4'],
  }
  return list.map((p) => {
    const lulusIds = patterns[p.nim] ?? []
    const statuses: Record<string, 'lulus' | 'belum-lulus'> = {}
    defs.forEach((d) => {
      statuses[d.id] = lulusIds.includes(d.id) ? 'lulus' : 'belum-lulus'
    })
    return { ...p, indicatorStatuses: statuses }
  })
}

const initialDefs = INDICATOR_DEFINITIONS.map((d) => ({ ...d }))

export const useKpsStore = create<KpsStoreState>()(
  persist(
    (set, get) => ({
      indicatorDefs: initialDefs,
      praktikanList: seedInitialStatuses(
        initialDefs,
        seedPraktikanList(initialDefs)
      ),

      moduleDefs: MOCK_MODULES.map((m) => ({ ...m })),
      profiles: MOCK_PRAKTIKAN_PROFILES.map((p) => ({
        ...p,
        modules: p.modules.map((m) => ({
          ...m,
          passport: {
            ...m.passport,
            skills: m.passport.skills.map((s) => ({ ...s })),
            badges: m.passport.badges.map((b) => ({ ...b })),
          },
        })),
      })),

      addIndicator: (name: string) => {
        const state = get()
        const id = generateId(state.indicatorDefs)
        const newDef: IndicatorDef = { id, name }
        set({
          indicatorDefs: [...state.indicatorDefs, newDef],
          praktikanList: state.praktikanList.map((p) => ({
            ...p,
            indicatorStatuses: { ...p.indicatorStatuses, [id]: 'belum-lulus' },
          })),
        })
      },

      updateIndicator: (id: string, name: string) => {
        set((state) => ({
          indicatorDefs: state.indicatorDefs.map((d) =>
            d.id === id ? { ...d, name } : d
          ),
        }))
      },

      removeIndicator: (id: string) => {
        set((state) => ({
          indicatorDefs: state.indicatorDefs.filter((d) => d.id !== id),
          praktikanList: state.praktikanList.map((p) => {
            const { [id]: _, ...rest } = p.indicatorStatuses
            return { ...p, indicatorStatuses: rest }
          }),
        }))
      },

      toggleStatus: (nim: string, indicatorId: string) => {
        set((state) => ({
          praktikanList: state.praktikanList.map((p) =>
            p.nim === nim
              ? {
                  ...p,
                  indicatorStatuses: {
                    ...p.indicatorStatuses,
                    [indicatorId]:
                      p.indicatorStatuses[indicatorId] === 'lulus'
                        ? 'belum-lulus'
                        : 'lulus',
                  },
                }
              : p
          ),
        }))
      },

      addModule: (name: string) => {
        const state = get()
        const id = `mod-${state.moduleDefs.length + 1}`
        const newModule: KpsModule = { id, name }
        set({
          moduleDefs: [...state.moduleDefs, newModule],
          profiles: state.profiles.map((p) => ({
            ...p,
            modules: [
              ...p.modules,
              {
                moduleId: id,
                moduleName: name,
                passport: {
                  overallScore: 0,
                  skillsPassed: 0,
                  totalSkills: 8,
                  badges: [],
                  skills: [],
                },
              },
            ],
          })),
        })
      },

      removeModule: (id: string) => {
        set((state) => ({
          moduleDefs: state.moduleDefs.filter((m) => m.id !== id),
          profiles: state.profiles.map((p) => ({
            ...p,
            modules: p.modules.filter((m) => m.moduleId !== id),
          })),
        }))
      },

      setScore: (nim: string, moduleId: string, skillId: string, score: number) => {
        set((state) => ({
          profiles: state.profiles.map((p) =>
            p.nim === nim
              ? {
                  ...p,
                  modules: p.modules.map((mod) =>
                    mod.moduleId === moduleId
                      ? {
                          ...mod,
                          passport: {
                            ...mod.passport,
                            skills: mod.passport.skills.map((s) =>
                              s.id === skillId ? { ...s, score } : s
                            ),
                          },
                        }
                      : mod
                  ),
                }
              : p
          ),
        }))
      },

      setNote: (nim: string, moduleId: string, skillId: string, note: string) => {
        set((state) => ({
          profiles: state.profiles.map((p) =>
            p.nim === nim
              ? {
                  ...p,
                  modules: p.modules.map((mod) =>
                    mod.moduleId === moduleId
                      ? {
                          ...mod,
                          passport: {
                            ...mod.passport,
                            skills: mod.passport.skills.map((s) =>
                              s.id === skillId ? { ...s, note } : s
                            ),
                          },
                        }
                      : mod
                  ),
                }
              : p
          ),
        }))
      },
    }),
    { name: 'phyxis-kps' }
  )
)
