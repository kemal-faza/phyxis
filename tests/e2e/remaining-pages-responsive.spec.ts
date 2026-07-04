import { test, expect } from '@playwright/test'

test('analytics mobile renders stats grid', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Dosen Pengampu')
  await page.waitForURL('/app/dashboard')
  await page.goto('/app/analytics')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByText('ENROLLED')).toBeVisible()
  await page.screenshot({ path: 'test-results/analytics-mobile.png', fullPage: true })
})
