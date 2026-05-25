module.exports = (grunt) => {
  "use strict"

  require("load-grunt-tasks")(grunt, {
    pattern: ["grunt-*", "!grunt-template-*"]
  })

  grunt.initConfig({
    htmllint: {
      options: { force: true, htmllintrc: true },
      index: ["src/app/**/*.html"]
    },
    clean: {
      build: "build",
      dist: "dist"
    },
    copy: {
      build: {
        files: [
          {
            cwd: "src/",
            expand: true,
            src: ["**"],
            dest: "build"
          },
          {
            src: ["LICENSE*"],
            dest: "build/"
          },
          {
            cwd: "repositories/percebus-assets/assets/",
            expand: true,
            src: ["**"],
            dest: "build/assets"
          }
        ]
      }
    },
    concat: {
      vendor: {
        files: {
          "build/vendor/vendor.min.css": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
          "build/vendor/vendor.min.js": [
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
          ]
        }
      }
    }
  })

  grunt.registerTask("build", ["clean", "copy", "concat"])

  grunt.registerTask("default", ["build"])
}
