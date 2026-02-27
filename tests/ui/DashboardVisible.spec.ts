import { test, expect } from '../../fixtures/baseTest';
import { logger } from '../../utils/logger';
import * as allure from 'allure-js-commons';

test('Dashboard visible @smoke', async ({ loggedInPage }) => {
  logger.info('Starting Dashboard validation test');

  await allure.description('Verify Dashboard heading is visible after login');
  await allure.owner('Manoj');
  await allure.severity('critical');
  await allure.tag('Smoke');

  await expect(
    loggedInPage.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

  logger.info('Dashboard heading is visible');
});