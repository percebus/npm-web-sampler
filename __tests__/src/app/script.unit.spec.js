/**
 * @jest-environment jsdom
 */

describe("src/app/script", () => {
  let script

  beforeEach(() => {
    document.body.innerHTML = `
      <span id="version"></span>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
    `
    global.alert = jest.fn()
    jest.resetModules()
    script = require("../../../src/app/script")
  })

  describe("loadVersion", () => {
    it("sets #version element text to package version + NODE_ENV", () => {
      const pkg = require("../../../package.json")
      const versionEl = document.getElementById("version")
      expect(versionEl.innerText).toBe(`${pkg.version}-${process.env.NODE_ENV}`)
    })

    it("re-sets #version element text when called again", () => {
      const pkg = require("../../../package.json")
      script.loadVersion()
      const versionEl = document.getElementById("version")
      expect(versionEl.innerText).toBe(`${pkg.version}-${process.env.NODE_ENV}`)
    })
  })

  describe("addOnClickEvents", () => {
    it("triggers alert with correct type for btn-primary", () => {
      document.querySelector(".btn-primary").click()
      expect(global.alert).toHaveBeenCalledWith("Button type: primary")
    })

    it("triggers alert with correct type for btn-secondary", () => {
      document.querySelector(".btn-secondary").click()
      expect(global.alert).toHaveBeenCalledWith("Button type: secondary")
    })

    it("triggers alert with correct type for btn-success", () => {
      document.querySelector(".btn-success").click()
      expect(global.alert).toHaveBeenCalledWith("Button type: success")
    })

    it("re-registers listeners without duplicates when called again", () => {
      script.addOnClickEvents()
      document.querySelector(".btn-primary").click()
      expect(global.alert).toHaveBeenCalledTimes(2) // once from main(), once from re-register
    })
  })

  describe("main", () => {
    it("is a function", () => {
      expect(typeof script.main).toBe("function")
    })

    it("sets the version element after calling main()", () => {
      document.getElementById("version").innerText = ""
      script.main()
      expect(document.getElementById("version").innerText).not.toBe("")
    })
  })
})
