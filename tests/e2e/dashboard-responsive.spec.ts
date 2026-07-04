import { test, expect } from '@playwright/test'

async function loginAsDosen(page: any) {
  await page.goto('/login')
  await page.click('text=Dosen Pengampu')
  await page.waitForURL('/app/dashboard')
}

test.describe('Dashboard responsive', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsDosen(page)
    await page.waitForSelector('text=Selamat datang, Dinda')
  })

  test('mobile layout renders single column', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(page.locator('[aria-label="Buka menu"]')).toBeVisible()
    await expect(page.locator('text=Enter Virtual Lab').first()).toBeVisible()
    await expect(page.locator('text=Temperature')).toHaveCount(0)
    await page.screenshot({ path: 'test-results/dashboard-mobile.png', fullPage: true })
  })

  test('tablet layout renders two column stats', async ({ page }) => {
    await page.setViewportSize({ width: 820, height: 1180 })
    await expect(page.locator('[aria-label="Buka menu"]')).toBeVisible()
    await expect(page.locator('text=Enter Virtual Lab').first()).toBeVisible()
    await page.screenshot({ path: 'test-results/dashboard-tablet.png', fullPage: true })
  })

  test('desktop layout renders top header and sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await expect(page.locator('text=Workspace').first()).toBeVisible()
    await expect(page.locator('aside a:has-text("Dashboard")')).toBeVisible()
    await page.screenshot({ path: 'test-results/dashboard-desktop.png', fullPage: true })
  })
})
