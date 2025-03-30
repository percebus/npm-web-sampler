const { Builder, Browser } = require("selenium-webdriver")(
  async function helloSelenium() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get("https://selenium.dev")

    await driver.quit()
  }
)()
