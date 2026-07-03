import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { INDICATOR_DEFINITIONS } from '@/features/kps/data/mockKps'
import { PraktikanKpsProfile } from '@/features/kps/types'
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
  profiles: PraktikanKpsProfile[]
  addIndicator: (name: string) => void
  updateIndicator: (id: string, name: string) => void
  removeIndicator: (id: string) => void
  toggleStatus: (nim: string, indicatorId: string) => void
  setScore: (nim: string, skillId: string, score: number) => void
  setNote: (nim: string, skillId: string, note: string) => void
}

function generateId(existing: IndicatorDef[]): string {
  const max = existing.reduce((m, d) => {
    const n = parseInt(d.id.replace('kps-', ''), 10)
    return n > m ? n : m
  }, 0)
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
  // Apply specific lulus/belum-lulus patterns from original mock data
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

      // New passport profile state
      profiles: MOCK_PRAKTIKAN_PROFILES,

      setScore: (nim: string, skillId: string, score: number) => {
        set((state) => ({
          profiles: state.profiles.map((p) =>
            p.nim === nim
              ? {
                  ...p,
                  passport: {
                    ...p.passport,
                    skills: p.passport.skills.map((s) =>
                      s.id === skillId ? { ...s, score } : s
                    ),
                  },
                }
              : p
          ),
        }))
      },

      setNote: (nim: string, skillId: string, note: string) => {
        set((state) => ({
          profiles: state.profiles.map((p) =>
            p.nim === nim
              ? {
                  ...p,
                  passport: {
                    ...p.passport,
                    skills: p.passport.skills.map((s) =>
                      s.id === skillId ? { ...s, note } : s
                    ),
                  },
                }
              : p
          ),
        }))
      },
    }),
    { name: 'phyxis-kps' }
  )
)
