import { test, expect } from '../../fixtures';
import { MyInfoPage } from '../../pages/modules/MyInfoPage';

test.describe('My Info module', () => {
  test('opens the personal details page', { tag: ['@regression', '@myinfo'] }, async ({ page }) => {
    const myInfoPage = new MyInfoPage(page);
    await myInfoPage.open();
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });
});
