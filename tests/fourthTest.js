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

    // Checkbox
    let checkbox = await driver.findElement(By.id('my-check-1'));

    // checkbox.isSelected().then(function (value) {
    //   if (value === true) {
    //     console.log('Checkbox is selected');
    //   } else {
    //     console.log('Checkbox is not selected');
    //   }
    // });

    let isSelected = checkbox.isSelected();
    if (!isSelected) {
      checkbox.click();
    }

    // dropDown Menu
    let dropDown = await driver.findElement(By.name('my-select'));

    // Get all the options within the dropdown
    let options = await dropDown.findElements(By.css('option'));

    // Select the option by index (e.g., index 1)
    await options[1].click();

    // Click Link
    let link = await driver.findElement(
      By.xpath("//a[normalize-space()='Return to index']")
    );
    // link.click();

    // Close the browser
    // driver.quit();
  });
});
