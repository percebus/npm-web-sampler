
# SRC: https://executeautomation.github.io/mcp-playwright/docs/playwright-web/Examples#using-different-browser-types
Scenario: Using Different Browser Types for Screenshots
Given I navigate to website "http://localhost:1234" using the "firefox" browser
And I take a screenshot named "firefox-example"
Then I navigate to website "http://localhost:1234" using the "webkit" browser
And I take a screenshot named "webkit-example"
