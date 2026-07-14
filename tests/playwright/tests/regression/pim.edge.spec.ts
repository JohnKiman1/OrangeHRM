import { test, expect } from '../../fixtures';
import { PimPage } from '../../pages/modules/PimPage';

test.describe('PIM edge cases', () => {
  test('opens employee list page repeatedly', { tag: ['@regression', '@pim', '@edge'] }, async ({ page }) => {
    const pimPage = new PimPage(page);
    await pimPage.open();
    await pimPage.open();
    await expect(page).toHaveURL(/viewEmployeeList/);
  });

  test('handles personal details route access', { tag: ['@regression', '@pim', '@negative'] }, async ({ page }) => {
    await page.goto('/pim/viewPersonalDetails/empNumber/99999');
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });
});
