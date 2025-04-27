const { Builder, By, Key } = require('selenium-webdriver');
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

  // Close the browser

  driver.quit();
}

example();
