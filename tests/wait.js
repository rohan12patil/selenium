import { Builder, By, Key } from 'selenium-webdriver';
import * as chai from 'chai';
const should = chai.should();

const URL = 'https://www.selenium.dev/selenium/web/dynamic.html';

describe('Wait Test', function () {
  it('Should wait for the element to be visible', async function () {
    // Implicit Wait
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.get(URL);
    await driver.findElement(By.id('reveal')).click();
    await driver.findElement(By.id('revealed')).sendKeys('Hello World');
  });
});
