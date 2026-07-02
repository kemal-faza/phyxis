import { test, expect } from '@playwright/test'

test('app shell shows sidebar and top header after login', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Dosen Pengampu')
  await expect(page).toHaveURL('/app/dashboard')

  // Sidebar navigation link
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Virtual Lab' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'KPS Passport' })).toBeVisible()

  // Top header breadcrumb shows current page
  await expect(page.getByText('Selamat datang')).toBeVisible()
})
