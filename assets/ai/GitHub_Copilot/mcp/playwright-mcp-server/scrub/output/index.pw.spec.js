describe("index.html", () => {
  const { chromium, firefox, webkit } = require("playwright")
  const pkg = require("../../../package.json")

  const config = require("../config")
  const host = config.host
  const url = `https://${host.uri}`

  let page, browser
  afterEach(async () => {
    await browser.close()
  })

  describe("chromium", () => {
    beforeEach(async () => {
      browser = await chromium.launch()
      const context = await browser.newContext()
      page = await context.newPage()

      await page.goto(url)

      // Wait for the page to load and buttons to be present
      await page.waitForLoadState("networkidle")
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
        const fullVersion = `${pkg.version}-${config.environment}`
        expect(dt).toEqual(fullVersion)
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

    // Prompt:
    // Given I navigate to website "http://localhost:1234"
    // When I save the current page as a PDF in "assets/PDF/screenshot.pdf" folder with name "report.pdf"
    // Then I should see confirmation that the PDF was saved
    describe("PDF Generation", () => {
      it("downloads the current page as a PDF", async () => {
        // Save as PDF
        const pdfPath = "assets/PDF/screenshot.pdf"
        await page.pdf({ path: pdfPath, format: "A4" })

        // Verify PDF was created
        const fs = require("fs")
        expect(fs.existsSync(pdfPath)).toBe(true)
      })
    })
  })

  // Prompt:
  // Given I navigate to website "http://localhost:1234" using the "firefox" browser
  // And I take a screenshot named "firefox-example"
  // Then I navigate to website "http://localhost:1234" using the "webkit" browser
  // And I take a screenshot named "webkit-example"
  describe("Browser Screenshots", () => {
    const browsers = {
      FireFox: firefox
      // WebKit: webkit,  // Works only on a Mac
    }

    Object.entries(browsers).forEach(([browserName, browserModule]) => {
      describe(browserName, () => {
        beforeEach(async () => {
          browser = await browserModule.launch()
          const context = await browser.newContext()
          page = await context.newPage()
        })

        it(`takes a screenshot with ${browserName}`, async () => {
          await page.goto(url)
          await page.screenshot({
            path: `assets/img/screenshots/${browserName}/example.png`
          })
        })
      })
    })
  })

  describe("HTML Content Extraction", () => {
    let browser
    let page

    afterEach(async () => {
      if (browser) {
        await browser.close()
      }
    })

    it("should extract clean HTML content without scripts and styles", async () => {
      browser = await chromium.launch()
      const context = await browser.newContext()
      page = await context.newPage()

      // Navigate to the website
      await page.goto("http://localhost:1234")

      // Extract HTML content and remove scripts and styles
      const cleanHtml = await page.evaluate(() => {
        // Clone the document to avoid modifying the original
        const docClone = document.cloneNode(true)

        // Remove all script tags
        const scripts = docClone.querySelectorAll("script")
        scripts.forEach((script) => script.remove())

        // Remove all style tags
        const styles = docClone.querySelectorAll("style")
        styles.forEach((style) => style.remove())

        // Remove all link tags with rel="stylesheet"
        const stylesheets = docClone.querySelectorAll('link[rel="stylesheet"]')
        stylesheets.forEach((link) => link.remove())

        // Remove inline style attributes
        const elementsWithStyle = docClone.querySelectorAll("*[style]")
        elementsWithStyle.forEach((element) => element.removeAttribute("style"))

        return docClone.documentElement.outerHTML
      })

      // Verify clean HTML doesn't contain scripts or styles
      expect(cleanHtml).not.toContain("<script")
      expect(cleanHtml).not.toContain("<style")
      expect(cleanHtml).not.toContain('rel="stylesheet"')
      expect(cleanHtml).not.toContain("style=")

      // Verify it still contains basic HTML structure
      expect(cleanHtml).toContain("<html")
      expect(cleanHtml).toContain("<body")
      expect(cleanHtml).toContain("<head")

      // Log confirmation
      console.log("Clean HTML extracted successfully")
      console.log(`Clean HTML length: ${cleanHtml.length} characters`)

      // Optionally save to file for inspection
      const fs = require("fs")
      const path = require("path")
      const outputPath = path.join(
        __dirname,
        "../../../assets/html/clean-content.html"
      )

      // Create directory if it doesn't exist
      const dir = path.dirname(outputPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      fs.writeFileSync(outputPath, cleanHtml)
      console.log(`Clean HTML saved to: ${outputPath}`)
    })
  })
})
