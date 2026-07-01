import { test, expect } from '@playwright/test'

const cases = [
  { path: '/dashboard', label: 'Dashboard Dosen' },
  { path: '/simulator', label: 'Simulator Review' },
  { path: '/quiz', label: 'Pre-test & Post-test: Review' },
  { path: '/report', label: 'Laporan Praktikan' },
  { path: '/kps', label: 'KPS Passport — Rekap Praktikan' },
  { path: '/monitoring', label: 'Monitoring Fitur' },
]

for (const { path, label } of cases) {
  test(`mobile header shows "${label}" on ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Login sebagai dosen
    await page.click('text=Dosen Pengampu')
    await expect(page).toHaveURL('/dashboard')

    // Navigasi ke halaman target
    await page.goto(path)
    await expect(page.locator('header').getByText(label)).toBeVisible()
  })
}
