import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createStorage } from '@/lib/storage'

describe('createStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should save and load data', () => {
    const storage = createStorage('test')
    storage.save({ value: 42 })
    expect(storage.load()).toEqual({ value: 42 })
  })

  it('should return default when key is missing', () => {
    const storage = createStorage('missing', { default: true })
    expect(storage.load()).toEqual({ default: true })
  })

  it('should return default when localStorage throws', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('quota exceeded')
    })
    const storage = createStorage('error', { default: true })
    storage.save({ default: false })
    expect(storage.load()).toEqual({ default: true })
  })
})
