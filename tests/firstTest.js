const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

const URL = 'https://lambdatest.github.io/sample-todo-app/';

async function example() {
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

  // NodeJS Assertion
  assert.strictEqual(todoText, 'Learn Selenium');

  // Close the browser
  driver.quit();
}

example();
