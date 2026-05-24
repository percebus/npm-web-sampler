module.exports = {
  testTimeout: 1000,
  verbose: true,
  reporters: [
    "default",
    // 'github-actions', // FIXME
    ["jest-junit", { outputDirectory: ".", outputName: "junit.xml" }]
  ],
  collectCoverageFrom: ["src/app/**/*.js"]
}
