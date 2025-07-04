Given I navigate to website "http://localhost:1234"
When I extract the HTML content of the page filtered to remove scripts and styles
Then I should receive clean HTML without JavaScript or CSS code
