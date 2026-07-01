import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthState, UserRole } from '@/features/auth/types'

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      role: null,
      isHydrated: false,
      setRole: (role: UserRole) => set({ role }),
      clearRole: () => set({ role: null }),
    }),
    {
      name: 'phyxis-auth',
      onRehydrateStorage: () => (state) => {
        if (state) state.isHydrated = true
      },
    }
  )
)
