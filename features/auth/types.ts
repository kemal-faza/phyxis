export type UserRole = 'praktikan' | 'asisten' | 'dosen' | 'admin'

export interface AuthState {
  role: UserRole | null
  isHydrated: boolean
  setRole: (role: UserRole) => void
  clearRole: () => void
}
