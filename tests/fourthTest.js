const URL = 'https://www.selenium.dev/selenium/web/web-form.html';
import { Builder, By, Key } from 'selenium-webdriver';
import * as chai from 'chai';
const should = chai.should();

describe('Fourth Test', function () {
  it('Should successfully add a Link', async function () {
    // Launch the Browser
    let driver = await new Builder().forBrowser('chrome').build();

    // Navigate to the app
    await driver.get(URL);

    // Click Link
    let link = await driver.findElement(
      By.xpath("//a[normalize-space()='Return to index']")
    );
    link.click();

    // Close the browser
    // driver.quit();
  });
});
