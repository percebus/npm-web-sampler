const { Builder } = require("selenium-webdriver")

describe("My First Selenium Test", () => {
  let driver

  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build()
    await driver.manage().setTimeouts({ implicit: 10000 })
  })

  afterAll(async () => {
    await driver.quit()
  })

  it("navigates to a website and check the title", async () => {
    await driver.get("http://localhost:1234")
    const title = await driver.getTitle()
    expect(title).toBe("Example Domain")
  })
})
