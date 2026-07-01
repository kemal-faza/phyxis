import { test, expect } from '@playwright/test'

test('praktikan can login and navigate to simulator', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Pilih peran untuk masuk')).toBeVisible()

  // Select Praktikan role
  await page.click('text=Praktikan')
  await expect(page).toHaveURL('/dashboard')

  // Navigate to simulator
  await page.click('text=Simulator')
  await expect(page).toHaveURL('/simulator')
  await expect(page.getByRole('heading', { name: /^Simulator/ })).toBeVisible()
})

test('dosen dashboard displays stats', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Dosen Pengampu')
  await expect(page).toHaveURL('/dashboard')
  await expect(page.getByRole('heading', { name: 'Dashboard Dosen' })).toBeVisible()
  await expect(page.locator('text=Total Praktikan')).toBeVisible()
})

test('all nav links are accessible for admin', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Admin')

  // Should be on dashboard
  await expect(page).toHaveURL('/dashboard')

  // Visit each admin-accessible page
  const pages = ['KPS Passport', 'Monitoring']
  for (const pageName of pages) {
    await page.click(`text=${pageName}`)
    // Wait for navigation
    await page.waitForTimeout(500)
  }
})
