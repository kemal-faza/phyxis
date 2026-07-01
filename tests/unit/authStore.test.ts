import { describe, it, expect, beforeEach } from 'vitest'
import { useAuthStore } from '@/features/auth/stores/authStore'

describe('authStore', () => {
  beforeEach(() => {
    useAuthStore.setState({ role: null, isHydrated: true })
  })

  it('should set role', () => {
    useAuthStore.getState().setRole('praktikan')
    expect(useAuthStore.getState().role).toBe('praktikan')
  })

  it('should return null by default', () => {
    expect(useAuthStore.getState().role).toBeNull()
  })
})
