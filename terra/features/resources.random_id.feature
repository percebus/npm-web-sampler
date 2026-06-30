Feature: random_id

  Scenario: random_id is defined
    Given I have random_id defined
    Then it must contain byte_length
    And its value must be equal to 4
