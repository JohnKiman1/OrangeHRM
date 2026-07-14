import { test, expect } from '../../fixtures';

test.describe('Smoke', () => {
  test('opens the login page', { tag: ['@smoke', '@critical'] }, async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });
});
