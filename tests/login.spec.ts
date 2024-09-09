import { test } from '@playwright/test';

import config from '../playwright.config';
import { loadEnvironmentSpecificData } from '../helpers/environmentDataLoader';

import { LoginData } from '../helpers/loginData';

let loginData: LoginData;

test.describe('User login to Demobank', () => {
  test.beforeEach(async () => {
    loginData = await loadEnvironmentSpecificData(config.environment);
  });

  test('successful login with correct credentials', async () => {
    console.log(config.environment);
    console.log('====================================');
    console.log(config.baseUrl);
    console.log(config.apiUrl);
  });
});
