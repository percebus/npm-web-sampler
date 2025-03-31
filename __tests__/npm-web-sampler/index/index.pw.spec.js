describe("index.html", () => {
  const { chromium } = require("playwright")

  const config = require("../config")
  const host = config.host
  const url = `https://${host.uri}`

  let page, browser
  beforeEach(async () => {
    browser = await chromium.launch()
    const context = await browser.newContext()
    page = await context.newPage()

    await page.goto(url)
  })

  afterEach(async () => {
    await browser.close()
  })

  describe("title", () => {
    it("says 'Simple HTML'", async () => {
      const title = await page.title()
      expect(title).toBe("Simple HTML")
    })
  })

  it("has an h1 heading", async () => {
    const element = await page.$("h1")
    expect(element).not.toBeNull()
  })

  describe("[a]nchor", () => {
    it("navigates elsewhere", async () => {
      await page.click("a") // Assuming there's a link to click
      expect(page.url()).not.toBe(url)
    })
  })
})
