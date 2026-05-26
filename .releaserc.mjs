/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main", "next"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogTitle: "# npm-web-sampler CHANGELOG"
      }
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
        tarballDir: "tmp"
      }
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npx prettier . --write && npm run dist",
        successCmd:
          "echo 'true' > .released && echo '${nextRelease.version}' > .release_version"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "package*.json",
          "CHANGELOG.md",
          "requirements*.txt",
          "test/results/**"
        ],
        changelogFile: "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "dist" }]
      }
    ]
  ]
}
