import { test, expect } from '@playwright/test'

test('landing page renders all main sections', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Built for how physics is actually taught' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Virtual Experiment' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Data-driven mastery, not paperwork' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Ready to modernise your physics laboratory?' })).toBeVisible()
})
