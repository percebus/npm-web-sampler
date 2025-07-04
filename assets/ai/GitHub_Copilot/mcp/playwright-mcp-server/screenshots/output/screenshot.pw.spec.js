describe("Browser Screenshots", () => {
  let screenshotBrowser
  let screenshotPage

  afterEach(async () => {
    if (screenshotBrowser) {
      await screenshotBrowser.close()
    }
  })

  it("should take a screenshot with firefox", async () => {
    screenshotBrowser = await firefox.launch()
    const context = await screenshotBrowser.newContext()
    screenshotPage = await context.newPage()
    await screenshotPage.goto("http://localhost:1234")
    await screenshotPage.screenshot({ path: "firefox-example.png" })
  })

  it("should take a screenshot with webkit", async () => {
    screenshotBrowser = await webkit.launch()
    const context = await screenshotBrowser.newContext()
    screenshotPage = await context.newPage()
    await screenshotPage.goto("http://localhost:1234")
    await screenshotPage.screenshot({ path: "webkit-example.png" })
  })
})
