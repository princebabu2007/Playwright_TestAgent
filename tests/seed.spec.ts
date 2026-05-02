import { test, expect } from '@playwright/test';
import { PageObjectsManager } from '../Pages/PageObjectsManager';
const testData = require('../Utils/TestData.json')
const data = JSON.parse(JSON.stringify(testData))
test.describe('Test group', () => {
  test('seed', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page);
        const LoginPage = pageObjectsManager.getLoginPage();    
        await LoginPage.goToUrl(data.url);
  });
});
