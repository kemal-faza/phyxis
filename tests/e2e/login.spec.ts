import { test, expect } from '@playwright/test'

test('login page renders role switcher', async ({ page }) => {
  await page.goto('/login')
  await expect(page.locator('text=Pilih peran untuk masuk')).toBeVisible()
  await expect(page.locator('text=Praktikan')).toBeVisible()
})

test('praktikan login redirects to /app/dashboard', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await expect(page).toHaveURL('/app/dashboard')
})
