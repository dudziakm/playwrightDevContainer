import { Page } from '@playwright/test';

import config from '../playwright.config';

export class LoginPage {
  constructor(protected page: Page) {}

  // just to show usage of config and baseUrl:
  async open() {
    await this.page.goto(config.baseUrl);
  }
}
