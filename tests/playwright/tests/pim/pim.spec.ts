import { test, expect } from '../../fixtures';
import { PimPage } from '../../pages/modules/PimPage';

test.describe('PIM module', () => {
  test('opens the employee list page', { tag: ['@regression', '@pim'] }, async ({ page }) => {
    const pimPage = new PimPage(page);
    await pimPage.open();
    await expect(page).toHaveURL(/viewEmployeeList/);
  });
});
