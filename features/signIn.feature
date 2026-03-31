Feature: User Login
  Scenario: Successful login
    Given the user is on the sign in page
    When they enter valid credentials
    Then they should be logged in successfully
