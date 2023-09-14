Feature: Cart

    Add and Remove Functionality.

    Scenario: Verify I can add and remove items from cart
        Given I navigate to Katalon homepage
        When I add four random items to my cart
        And I view my cart
        Then I find total '4' items listed in my cart
        When I find lowest price items
        And I am able to remove the lowest price item from my cart
        Then I find total '3' items listed in my cart