import { test, expect } from '../../fixtures';
import { TimePage } from '../../pages/modules/TimePage';

test.describe('Time module', () => {
  test('opens the employee timesheet page', { tag: ['@regression', '@time'] }, async ({ page }) => {
    const timePage = new TimePage(page);
    await timePage.open();
    await expect(page).toHaveURL(/viewEmployeeTimesheet/);
  });
});
