Key Changes:

- Dependency Updates: A significant number of commits are from dependabot, keeping project dependencies like lint-staged, chromedriver, parcel, selenium-webdriver, bootstrap, and various
  @semantic-release packages up to date. There were also some reverts of dependency bumps, indicating potential compatibility issues that were addressed.
- Release Automation: semantic-release-bot has been active, automatically creating release commits and version bumps (e.g., v1.8.0, v1.9.0, v1.10.2).
- New Features:
  - A feature for handling .env files was added.
  - An "on click" event handler was added to src/app/script.js.
  - GitHub Actions were configured to use CodeQL for security analysis.
  - nvm (Node Version Manager) support was integrated to enforce a consistent Node.js version.
- Fixes & Refinements:
  - A Playwright test was fixed to handle a production environment and to correctly dismiss an alert.
  - A reusable workflow was implemented for run_pip-audit.
  - A fix was applied related to dependabot's token usage.
  - Minor documentation and code style adjustments were made to the README and CHANGELOG.
- Testing:
  - New tests for click interactions were added.
  - Some test names were adjusted for clarity.
