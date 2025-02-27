Feature: Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter valid username and password
    When I click the login button
    Then I should be logged in successfully
