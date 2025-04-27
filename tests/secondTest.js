import { Builder, By, Key } from 'selenium-webdriver';
import * as chai from 'chai';
const should = chai.should();

const URL = 'https://lambdatest.github.io/sample-todo-app/';

describe('Add another todo Test', function () {
  it('Should successfully add a TODO', async function () {
    // Launch the Browser
    let driver = await new Builder().forBrowser('chrome').build();

    // Navigate to the app
    await driver.get(URL);

    // add a todo
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Learn Selenium', Key.RETURN);

    // Assertion
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then(function (value) {
        return value;
      });

    todoText.should.equal('Learn Selenium');

    // Close the browser
    driver.quit();
  });
});
