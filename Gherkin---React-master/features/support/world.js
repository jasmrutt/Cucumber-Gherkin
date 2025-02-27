const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver'); // Ensure 'until' is imported here
require('chromedriver');

class CustomWorld {
  constructor() {
    this.driver = new Builder().forBrowser('chrome').build();
    setDefaultTimeout(60000); // Set a default timeout for steps
  }

  async visit(url) {
    return await this.driver.get(url);
  }

  async enterText(selector, text) {
    const element = await this.driver.wait(until.elementLocated(By.css(selector)), 5000);
    return await element.sendKeys(text);
  }

  async click(selector) {
    const element = await this.driver.wait(until.elementLocated(By.css(selector)), 5000);
    return await element.click();
  }

  async getElementText(selector) {
    const element = await this.driver.wait(until.elementLocated(By.css(selector)), 5000);
    return await element.getText();
  }

  async waitForElement(selector) {
    return await this.driver.wait(until.elementLocated(By.css(selector)), 5000);
  }

  async close() {
    return await this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
