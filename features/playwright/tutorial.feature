
# SRC: https://executeautomation.github.io/mcp-playwright/docs/playwright-web/Examples#using-different-browser-types
Scenario: Using Different Browser Types for Screenshots
Given I navigate to website "http://localhost:1234" using the "firefox" browser
And I take a screenshot named "firefox-example"
Then I navigate to website "http://localhost:1234" using the "webkit" browser
And I take a screenshot named "webkit-example"

# SRC: https://executeautomation.github.io/mcp-playwright/docs/playwright-web/Examples#saving-page-as-pdf
Scenario: Saving Page as PDF
Given I navigate to website "http://localhost:1234"
When I save the current page as a PDF in "assets/PDF/screenshot.pdf" folder with name "report.pdf"
Then I should see confirmation that the PDF was saved
