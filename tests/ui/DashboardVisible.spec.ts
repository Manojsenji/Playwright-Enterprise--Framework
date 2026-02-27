import { test, expect } from '../../fixtures/baseTest';
import { logger } from '../../utils/logger';

test('Dashboard visible', async ({ loggedInPage }) => {
  logger.info('Starting Dashboard validation test');

  await expect(
    loggedInPage.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

  logger.info('Dashboard heading is visible');
});