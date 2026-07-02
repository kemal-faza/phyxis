import { describe, it, expect } from 'vitest'
import { NAV_ITEMS, ACCOUNT_ITEMS } from '@/lib/navigation'

describe('navigation config', () => {
  it('uses /app/* paths for workspace items', () => {
    const dashboard = NAV_ITEMS.find((i) => i.label === 'Dashboard')
    expect(dashboard?.href).toBe('/app/dashboard')
  })

  it('uses Lucide icon names', () => {
    const simulator = NAV_ITEMS.find((i) => i.label === 'Virtual Lab')
    expect(simulator?.icon).toBe('FlaskConical')
  })

  it('exposes account items', () => {
    expect(ACCOUNT_ITEMS.length).toBeGreaterThan(0)
    expect(ACCOUNT_ITEMS[0].href.startsWith('/app/')).toBe(true)
  })
})
