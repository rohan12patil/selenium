import { Builder, By, Key, until } from 'selenium-webdriver';
import * as chai from 'chai';
const should = chai.should();

const URL = 'https://www.selenium.dev/selenium/web/dynamic.html';

describe('Wait Test', function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  xit('Implicit Wait : Should wait for the element to be visible', async function () {
    // Implicit Wait
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.get(URL);
    await driver.findElement(By.id('reveal')).click();
    await driver.findElement(By.id('revealed')).sendKeys('Hello World');
  });

  it('Explicit Wait : Should wait for the element to be visible', async function () {
    // Explicit Wait
    await driver.get(URL);
    await driver.findElement(By.id('reveal')).click();

    let revealed = await driver.findElement(By.id('revealed'));
    const element = await driver.wait(until.elementIsVisible(revealed), 2000);

    await driver.wait(until.elementIsVisible(element), 1000);
    await element.sendKeys('Explicit Wait Hi World');
  });
});
