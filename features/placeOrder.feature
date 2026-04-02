Feature: ordering bag 
  Scenario:ordering a bag
    Given the user is logged in
    When they search for "bag"
    Then search results should be displayed
    When user clicks the first item
    Then User should be redirected to the pdp page
    When user clicks Add to bag 
    Then the item should be added to the bag
    When user goes to the bag
    Then user clicks on order now