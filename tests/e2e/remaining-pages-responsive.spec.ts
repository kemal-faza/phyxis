import { test, expect } from '@playwright/test'

test('assessment mobile renders tabs and textarea', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await page.waitForURL('/app/dashboard')
  await page.goto('/app/assessment')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByRole('button', { name: 'Pre-test' })).toBeVisible()
  await page.screenshot({ path: 'test-results/assessment-mobile.png', fullPage: true })
})

test('report upload mobile renders upload card', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await page.waitForURL('/app/dashboard')
  await page.goto('/app/report')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByText('Pengumpulan Laporan Akhir')).toBeVisible()
  await page.screenshot({ path: 'test-results/report-mobile.png', fullPage: true })
})

test('simulator mobile renders stacked layout', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await page.waitForURL('/app/dashboard')
  await page.goto('/app/simulator')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByText('PILIH MODUL')).toBeVisible()
  await page.screenshot({ path: 'test-results/simulator-mobile.png', fullPage: true })
})

test('landing mobile renders hero and menu', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByText('Start Learning')).toBeVisible()
  await page.screenshot({ path: 'test-results/landing-mobile.png', fullPage: true })
})

test('kps passport mobile renders stats and radar', async ({ page }) => {
  await page.goto('/login')
  await page.click('text=Praktikan')
  await page.waitForURL('/app/dashboard')
  await page.goto('/app/kps')
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.getByText('OVERALL KPS')).toBeVisible()
  await page.screenshot({ path: 'test-results/kps-mobile.png', fullPage: true })
})
