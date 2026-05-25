describe("Gruntfile", () => {
  let grunt
  let initConfigArg

  beforeEach(() => {
    grunt = {
      initConfig: jest.fn((config) => {
        initConfigArg = config
      }),
      registerTask: jest.fn(),
      loadNpmTasks: jest.fn()
    }

    jest.mock("load-grunt-tasks", () => jest.fn())
    require("../Gruntfile")(grunt)
  })

  afterEach(() => {
    jest.resetModules()
  })

  describe("concat", () => {
    describe("vendor", () => {
      it("does NOT enable sourceMap (causes Parcel to strip CSS)", () => {
        const concatConfig = initConfigArg.concat
        expect(concatConfig.options).toBeUndefined()
      })

      it("outputs build/vendor/vendor.min.css", () => {
        const files = initConfigArg.concat.vendor.files
        expect(files["build/vendor/vendor.min.css"]).toBeDefined()
      })

      it("outputs build/vendor/vendor.min.js", () => {
        const files = initConfigArg.concat.vendor.files
        expect(files["build/vendor/vendor.min.js"]).toBeDefined()
      })
    })
  })
})
