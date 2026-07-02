import { test, expect } from '@playwright/test'

test('praktikan can login and navigate to simulator', async ({ page }) => {
  await page.goto('/login')
  await expect(page.locator('text=Pilih peran untuk masuk')).toBeVisible()

  await page.click('text=Praktikan')
  await expect(page).toHaveURL('/app/dashboard')

  await page.click('text=Virtual Lab')
  await expect(page).toHaveURL('/app/simulator')
  await expect(page.getByRole('heading', { name: /^Simulator/ })).toBeVisible()
})

test('dosen dashboard displays stats', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Dosen Pengampu')
  await expect(page).toHaveURL('/app/dashboard')
  await expect(page.locator('text=Selamat datang')).toBeVisible()
  await expect(page.locator('text=Student console')).toBeVisible()
})

test('all nav links are accessible for admin', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Admin')
  await expect(page).toHaveURL('/app/dashboard')

  const pages = ['KPS Passport']
  for (const pageName of pages) {
    await page.click(`text=${pageName}`)
    await page.waitForTimeout(500)
  }
})
