import { test, expect } from '../../fixtures';
import { LeavePage } from '../../pages/modules/LeavePage';

test.describe('Leave module', () => {
  test('opens the leave module', { tag: ['@regression', '@leave'] }, async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.open();
    await expect(page).toHaveURL(/viewLeaveModule/);
  });
});
