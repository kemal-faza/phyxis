import { test, expect } from '@playwright/test'

test('simulator review shows card layout on mobile for asisten', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')

  // Login sebagai asisten
  await page.click('text=Asisten Laboratorium')
  await expect(page).toHaveURL('/dashboard')

  // Navigasi ke simulator
  await page.goto('/simulator')
  // Card labels — hanya muncul di layout kartu, bukan di tabel
  await expect(page.locator('text=TOTAL SALAH').first()).toBeVisible()
  await expect(page.locator('text=RATA-RATA WAKTU').first()).toBeVisible()
})

test('quiz review shows card layout on mobile for asisten', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')

  // Login sebagai asisten
  await page.click('text=Asisten Laboratorium')
  await expect(page).toHaveURL('/dashboard')

  // Navigasi ke quiz
  await page.goto('/quiz')
  // Card labels — hanya muncul di layout kartu, bukan di tabel
  await expect(page.locator('text=PRE-TEST').first()).toBeVisible()
  await expect(page.locator('text=POST-TEST').first()).toBeVisible()
})

test('report review shows card layout on mobile for asisten', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')

  // Login sebagai asisten
  await page.click('text=Asisten Laboratorium')
  await expect(page).toHaveURL('/dashboard')

  // Navigasi ke report
  await page.goto('/report')
  // Card labels — hanya muncul di layout kartu, bukan di tabel
  await expect(page.locator('text=MODUL').first()).toBeVisible()
  await expect(page.locator('text=TANGGAL').first()).toBeVisible()
})
