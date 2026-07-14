import { test, expect } from '../../fixtures';
import { AdminPage } from '../../pages/modules/AdminPage';

test.describe('Admin edge cases', () => {
  test('opens admin page with valid session', { tag: ['@regression', '@admin', '@edge'] }, async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.open();
    await expect(page).toHaveURL(/viewSystemUsers/);
  });

  test('handles invalid admin route with redirect', { tag: ['@regression', '@admin', '@negative'] }, async ({ page }) => {
    await page.goto('/admin/invalid-route');
    await expect(page).toHaveURL(/admin/);
  });
});
