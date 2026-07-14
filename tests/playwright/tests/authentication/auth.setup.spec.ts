import { expect } from '../../fixtures';
import { test } from '../../fixtures';

test('storage-state auth smoke', async ({ authenticatedPage }) => {
  await authenticatedPage.goto('/dashboard/index');
  await expect(authenticatedPage).toHaveURL(/dashboard/);
});
