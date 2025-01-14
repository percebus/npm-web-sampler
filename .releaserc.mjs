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
        changelogTitle: "# npm-web-sampler CHANGELOG",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
        tarballDir: "dist",
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npm run style",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md", "requirements*.txt"],
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "dist/*.tgz" }],
      },
    ],
  ],
};
