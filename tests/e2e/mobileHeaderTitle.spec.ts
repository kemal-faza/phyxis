import { test, expect } from '@playwright/test'

const cases = [
  { path: '/app/dashboard', label: 'Dashboard' },
  { path: '/app/simulator', label: 'Virtual Lab' },
  { path: '/app/assessment', label: 'AI Assessment' },
  { path: '/app/report', label: 'Report' },
  { path: '/app/kps', label: 'KPS Passport' },
  { path: '/app/analytics', label: 'Analytics' },
]

for (const { path, label } of cases) {
  test(`mobile header shows "${label}" on ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/login')

    await page.click('text=Dosen Pengampu')
    await expect(page).toHaveURL('/app/dashboard')

    await page.goto(path)
    await expect(page.getByText(label).first()).toBeVisible()
  })
}
