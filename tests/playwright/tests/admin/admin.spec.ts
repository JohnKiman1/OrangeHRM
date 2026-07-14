import { test, expect } from '../../fixtures';
import { AdminPage } from '../../pages/modules/AdminPage';

test.describe('Admin module', () => {
  test('opens the admin system users page', { tag: ['@regression', '@admin'] }, async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.open();
    await expect(page).toHaveURL(/viewSystemUsers/);
  });
});
