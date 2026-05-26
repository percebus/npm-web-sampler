/**
 * @jest-environment jsdom
 */
describe("src/app/script", () => {
  let script, consoleSpies, pkg

  beforeEach(() => {
    document.body.innerHTML = `
      <span id="version"></span>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
    `
    global.alert = jest.fn()

    // TODO make more generalizable
    consoleSpies = ["debug", "info", "log", "warn", "error"].map((method) =>
      jest.spyOn(console, method).mockImplementation(() => {
        // suppress
      })
    )

    jest.resetModules()
    script = require("../../../src/app/script")
  })

  afterEach(() => {
    consoleSpies.forEach((spy) => spy.mockRestore())
  })

  describe("loadVersion()", () => {
    it("sets #version element text to package version + NODE_ENV", () => {
      const pkg = require("../../../package.json")
      script.loadVersion()
      const versionEl = document.getElementById("version")
      expect(versionEl.innerText).toBe(`${pkg.version}-${process.env.NODE_ENV}`)
    })

    it("overwrites #version element text on repeated calls", () => {
      script.loadVersion()
      script.loadVersion()
      const pkg = require("../../../package.json")
      expect(document.getElementById("version").innerText).toBe(
        `${pkg.version}-${process.env.NODE_ENV}`
      )
    })
  })

  describe("addOnClickEvents()", () => {
    beforeEach(() => {
      script.addOnClickEvents()
    })

    describe(".btn .btn-primary", () => {
      describe("onClick", () => {
        it('alerts "Button type: primary"', () => {
          document.querySelector(".btn-primary").click()
          expect(global.alert).toHaveBeenCalledWith("Button type: primary")
        })
      })

      describe("onClick 2x", () => {
        it("adds additional listeners when called again", () => {
          script.addOnClickEvents()
          document.querySelector(".btn-primary").click()
          expect(global.alert).toHaveBeenCalledTimes(2)
        })
      })
    })

    describe(".btn .btn-secondary", () => {
      describe("onClick", () => {
        it('alerts "Button type: secondary"', () => {
          document.querySelector(".btn-secondary").click()
          expect(global.alert).toHaveBeenCalledWith("Button type: secondary")
        })
      })
    })

    describe(".btn .btn-success", () => {
      describe("onClick", () => {
        it('alerts "Button type: success"', () => {
          document.querySelector(".btn-success").click()
          expect(global.alert).toHaveBeenCalledWith("Button type: success")
        })
      })
    })
  })

  describe("main", () => {
    beforeEach(() => {
      pkg = require("../../../package.json")
      script.main()
    })

    it("is a function", () => {
      expect(typeof script.main).toBe("function")
    })

    it("sets the version element and registers button listeners", () => {
      expect(document.getElementById("version").innerText).toEqual(
        `${pkg.version}-${process.env.NODE_ENV}`
      )
    })

    describe(".btn-primary", () => {
      describe("onClick", () => {
        it('alerts "Button type: primary"', () => {
          document.querySelector(".btn-primary").click()
          expect(global.alert).toHaveBeenCalledWith("Button type: primary")
        })
      })
    })
  })
})
