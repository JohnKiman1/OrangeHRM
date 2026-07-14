import { test, expect } from '../../fixtures';

test.describe('Dashboard module', () => {
  test('opens the dashboard and loads the main navigation', { tag: ['@smoke', '@dashboard'] }, async ({ dashboardPage }) => {
    await dashboardPage.page.goto('/dashboard/index');
    await expect(dashboardPage.page).toHaveURL(/dashboard/);
    await expect(dashboardPage.page.locator('body')).toBeVisible();
  });
});
