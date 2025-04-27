const URL = 'https://www.selenium.dev/selenium/web/formPage.html';
import { Builder, By, Key } from 'selenium-webdriver';
import * as chai from 'chai';
const should = chai.should();

describe('Third Test', function () {
  it('Should successfully add a TODO', async function () {
    // Launch the Browser
    let driver = await new Builder().forBrowser('chrome').build();

    // Navigate to the app
    await driver.get(URL);

    // Locate Textbox
    let textbox = await driver.findElement(By.name('id-name1'));
    textbox.getText();
    textbox.clear();
    textbox.sendKeys('Learn Selenium');

    // Click Submit button
    let submitButtom = await driver.findElement(
      By.xpath('//*[@id="nested_form"]/input')
    );
    submitButtom.click();

    // Close the browser
    driver.quit();
  });
});
