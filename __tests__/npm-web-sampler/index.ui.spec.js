const { chromium } = require("playwright")

let page, browser

beforeEach(async () => {
  browser = await chromium.launch()
  const context = await browser.newContext()
  page = await context.newPage()

  await page.goto("http://localhost:1234")
})

afterEach(async () => {
  await browser.close()
})

test("navigates to a website and checks the title", async () => {
  const title = await page.title()
  expect(title).toBe("Simple HTML")
})

test("checks if a specific element exists on the page", async () => {
  const element = await page.$("h1")
  expect(element).not.toBeNull()
})

test("verifies navigation to another page", async () => {
  await page.click("a") // Assuming there's a link to click
  expect(page.url()).not.toBe("http://localhost:1234")
})
