const { Given, When, Then } = require('cucumber');
const { until } = require('selenium-webdriver');
const assert = require('assert');

Given('I am on the login page', async function () {
  await this.visit('http://localhost:3000/login'); // Update with your actual login page URL
});

When('I enter valid username and password', async function () {
  await this.enterText('#username', 'validusername'); // Using the id 'username'
  await this.enterText('#password', 'validpassword'); // Using the id 'password'
});

When('I click the login button', async function () {
  await this.click('#login-button'); // Using the id 'login-button'
});

Then('I should be logged in successfully', async function () {
  await this.driver.wait(until.alertIsPresent(), 5000); // Wait for the alert to be present
  const alert = await this.driver.switchTo().alert();
  const alertText = await alert.getText();
  assert.strictEqual(alertText, 'Login successful! Redirecting...', 'User should be logged in'); // Adjust the expected message accordingly
  await alert.accept();
});
