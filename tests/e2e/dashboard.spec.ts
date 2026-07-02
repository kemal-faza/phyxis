import { test, expect } from '@playwright/test'

test('dashboard shows greeting and stats for dosen', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Dosen Pengampu')
  await expect(page).toHaveURL('/app/dashboard')
  await expect(page.locator('text=Selamat datang')).toBeVisible()
  await expect(page.locator('text=Student console')).toBeVisible()
  await expect(page.locator('text=Avg Score')).toBeVisible()
})

test('live experiment card is visible', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await expect(page).toHaveURL('/app/dashboard')
  await expect(page.getByRole('heading', { name: /Gerak Parabola/ })).toBeVisible()
  await expect(page.locator('text=Resume simulation')).toBeVisible()
})
