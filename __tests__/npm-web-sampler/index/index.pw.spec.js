describe("index.html", () => {
  const { chromium } = require("playwright")
  const pkg = require("../../../package.json")

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

  describe("heading", () => {
    it("says 'Lorem Ipsum'", async () => {
      const h1 = await page.locator("h1").textContent()
      expect(h1).toEqual("Lorem Ipsum")
    })
  })

  describe("<a>nchor", () => {
    it("navigates elsewhere", async () => {
      await page.click("a") // Assuming there's a link to click
      expect(page.url()).not.toBe(url)
    })
  })

  describe("version", () => {
    it("has the same as package.json", async () => {
      const dt = await page.locator("id=version").textContent()
      expect(dt).toEqual(pkg.version)
    })
  })
})
