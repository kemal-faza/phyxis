import { test, expect } from '@playwright/test'

test('simulator page renders canvas and step panel', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await expect(page).toHaveURL('/app/dashboard')
  await page.goto('/app/simulator')
  await expect(page.locator('text=Simulator M-4: Gerak Jatuh Bebas')).toBeVisible()
  await expect(page.locator('text=Canvas Simulator 3D')).toBeVisible()
  await expect(page.locator('text=LANGKAH 1 DARI 7')).toBeVisible()
})
