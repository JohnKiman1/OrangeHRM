import { test, expect } from '../../fixtures';

test.describe('Additional edge scenarios', () => {
  test('opens recruitment page and keeps session alive', { tag: ['@regression', '@recruitment', '@edge'] }, async ({ page }) => {
    await page.goto('/recruitment/viewCandidates');
    await expect(page).toHaveURL(/viewCandidates/);
  });

  test('opens leave module repeatedly', { tag: ['@regression', '@leave', '@edge'] }, async ({ page }) => {
    await page.goto('/leave/viewLeaveModule');
    await page.goto('/leave/viewLeaveModule');
    await expect(page).toHaveURL(/viewLeaveModule/);
  });

  test('opens time module repeatedly', { tag: ['@regression', '@time', '@edge'] }, async ({ page }) => {
    await page.goto('/time/viewEmployeeTimesheet');
    await expect(page).toHaveURL(/viewEmployeeTimesheet/);
  });

  test('opens my info page repeatedly', { tag: ['@regression', '@myinfo', '@edge'] }, async ({ page }) => {
    await page.goto('/pim/viewPersonalDetails/empNumber/7');
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });
});
