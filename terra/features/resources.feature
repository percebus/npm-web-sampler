Feature: Resources

  Scenario: any resource
    Given I have any resource defined

  Scenario Outline: resources defined
    Given I have <resource> defined
    Examples:
    | resource  |
    | random_id |
