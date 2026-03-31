Feature: Home Page Search
  Scenario: Search for an item
    Given the user is logged in
    When they search for "bag"
    Then search results should be displayed
