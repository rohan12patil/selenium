import { Builder, By, Key, until } from 'selenium-webdriver';
import * as chai from 'chai';
const should = chai.should();

const URL =
  'https://www.selenium.dev/selenium/web/click_tests/click_in_iframe.html';

describe('iFrame Test', function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Testing iframe', async function () {
    await driver.get(URL);

    const iframe = driver.findElement(By.id('ifr'));

    await driver.switchTo().frame(iframe);

    await driver.findElement(By.id('link')).click();

    await driver.switchTo().defaultContent();
  });
});
