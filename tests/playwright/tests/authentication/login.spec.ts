import { test, expect } from '../../fixtures';

test.describe('Authentication', () => {
  test('allows a valid user to log in', { tag: ['@smoke', '@login', '@critical'] }, async ({ loginPage, dashboardPage }) => {
    await loginPage.open();
    await loginPage.loginWithCredentials('Admin', 'admin123');

    await expect(dashboardPage.heading).toBeVisible({ timeout: 30000 });
    await expect(dashboardPage.page).toHaveURL(/dashboard/);
  });

  test('rejects invalid credentials', { tag: ['@regression', '@login'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginWithCredentials('Admin', 'wrong-password');

    await expect(loginPage.errorMessage).toBeVisible({ timeout: 10000 });
  });
});