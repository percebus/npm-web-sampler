const { Builder, Browser, By } = require("selenium-webdriver")

// SRC: https://www.selenium.dev/documentation/webdriver/getting_started/first_script/
async function firstScript() {
  // 1. Start the session
  const driver = await new Builder().forBrowser(Browser.CHROME).build()

  // 4. Establish Waiting Strategy
  await driver.manage().setTimeouts({ implicit: 500 })

  // 2. Take action on browser
  await driver.get("https://www.selenium.dev/selenium/web/web-form.html")

  // 3. Request browser information
  // const title = await driver.getTitle() // TODO

  // 5. Find an element
  const textBox = await driver.findElement(By.name("my-text"))
  const submitButton = await driver.findElement(By.css("button"))

  // 6. Take action on element
  await textBox.sendKeys("Selenium")
  await submitButton.click()

  // 7. Request element information // TODO
  // const message = await driver.findElement(By.id("message"))
  // const value = await message.getText()

  // 8. End the session
  await driver.quit()
}

firstScript()
