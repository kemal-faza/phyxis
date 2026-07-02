import { test, expect } from '@playwright/test'

test('simulator review shows card layout on mobile for asisten', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/login')

  await page.click('text=Asisten Laboratorium')
  await expect(page).toHaveURL('/app/dashboard')

  // Open mobile sidebar then navigate (client-side, preserves Zustand store)
  await page.locator('button[aria-label="Buka menu"]').click()
  await page.getByRole('link', { name: 'Virtual Lab' }).click()
  await expect(page).toHaveURL('/app/simulator')
  await expect(page.locator('text=TOTAL SALAH').first()).toBeVisible()
  await expect(page.locator('text=RATA-RATA WAKTU').first()).toBeVisible()
})

test('assessment placeholder visible on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/login')

  await page.click('text=Asisten Laboratorium')
  await expect(page).toHaveURL('/app/dashboard')

  await page.goto('/app/assessment')
  await expect(page.locator('text=Coming soon')).toBeVisible()
})
