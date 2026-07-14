import { test, expect } from '../../fixtures';
import { RecruitmentPage } from '../../pages/modules/RecruitmentPage';

test.describe('Recruitment module', () => {
  test('opens the candidates page', { tag: ['@regression', '@recruitment'] }, async ({ page }) => {
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.open();
    await expect(page).toHaveURL(/viewCandidates/);
  });
});
