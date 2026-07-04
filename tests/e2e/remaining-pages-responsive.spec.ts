import { test, expect } from '@playwright/test'

test('assessment mobile renders tabs and textarea', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await page.waitForURL('/app/dashboard')
  await page.goto('/app/assessment')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByText('Pre-test')).toBeVisible()
  await page.screenshot({ path: 'test-results/assessment-mobile.png', fullPage: true })
})
