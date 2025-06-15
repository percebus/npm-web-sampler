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

    // Wait for the page to load and buttons to be present
    await page.waitForLoadState("networkidle")
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

  describe("browserBase.com", () => {
    beforeEach(async () => {
      // Prompt:
      // "Now I need to update this playwright test
      //  so it closes the open alert that we added on each click"
      //
      // Listen for the dialog and dismiss it
      // Enable handling of dialog boxes
      page.on("dialog", async (dialog) => {
        await dialog.accept()
      })
    })

    describe("buttons", () => {
      // Prompt:
      // "Go to https://percebus.github.io/npm-web-sampler/
      //  and click every button, from right to left.
      //  But do not click on links"
      describe("Prompt 1", () => {
        it("clicks buttons from right to left", async () => {
          const buttons = await page.locator("button:not(a)").all()

          // Get the buttons array and reverse it
          const buttonsArray = await buttons
          const reversedButtons = buttonsArray.reverse()

          // Click each button in reverse order
          for (let i = 0; i < reversedButtons.length; i++) {
            // Wait for each button to be visible
            await reversedButtons[i].waitFor({ state: "visible" })
            // Click the button
            await reversedButtons[i].click()

            await page.waitForTimeout(500)
          }
        })
      })

      // Prompt:
      // "Click each button from right to left
      //  Get all buttons on the page (excluding links)"
      describe("Prompt 2", () => {
        it("clicks buttons from right to left", async () => {
          const buttonSelector = "button:not(.btn-link)"
          await page.waitForSelector(buttonSelector)
          const allButtons = await page.locator(buttonSelector).all()

          for (let i = allButtons.length - 1; i >= 0; i--) {
            await allButtons[i].waitFor({ state: "visible" })
            await allButtons[i].click()

            await page.waitForTimeout(300)
          }
        })
      })

      // Prompt:
      // "Go to https://percebus.github.io/npm-web-sampler/
      //  and click every button, from right to left.
      //  But do not click on links.
      //  Be aware that after some click,
      //  an alert will show with a text saying "Button type: {type}"
      //  which needs to be either accepted or omitted
      //  before being able to click the next button"
      describe("Prompt 3", () => {
        it("clicks button from right to left", async () => {
          // Wait for all buttons to be visible
          await page.waitForSelector("button")

          // Get all buttons and reverse the order
          const buttons = await page.locator("button").all()
          const numButtons = buttons.length

          // Click each button in reverse order with a small delay between clicks
          for (let i = numButtons - 1; i >= 0; i--) {
            await buttons[i].click()
            // Small delay to ensure dialog is handled
            await page.waitForTimeout(500)
          }
        })
      })
    })

    describe("footer", () => {
      // Prompt: "Open license links in new tabs"
      describe("Prompt 1", () => {
        it("opens each one in a new tab", async () => {
          const licenseLinks = await page.locator("footer a").all()

          // Add target="_blank" to each link to make them open in new tabs
          for (const link of licenseLinks) {
            await page.evaluate(
              (link) => {
                link.setAttribute("target", "_blank")
              },
              await link.elementHandle()
            )
          }
        })
      })
    })
  })
})
