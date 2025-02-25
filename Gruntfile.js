module.exports = (grunt) => {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    htmllint: {
      options: { force: true, htmllintrc: true },
      index: ['src/app/**/*.html']
    },
    clean: {
      build: 'build',
      dist: 'dist'
    },
    copy: {
      tmp: {
        files: [
          {
            cwd: 'node_modules/bootstrap/dist/css/',
            expand: true,
            src: ['bootstrap.min.*'],
            dest: 'tmp/vendor/style'
          }
        ]
      },
      build: {
        files: [
          {
            cwd: 'src/',
            expand: true,
            src: ['app/**'],
            dest: 'build'
          },
          {
            src: ['LICENSE*'],
            dest: 'build/'
          },
          {
            cwd: 'repositories/percebus-assets/assets/',
            expand: true,
            src: ['**'],
            dest: 'build/assets'
          }
        ]
      }
    },
    concat: {
      options: { sourceMap: true },
      vendor: {
        files: {
          'build/vendor/vendor.min.css': ['tmp/vendor/style/**/*.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'build/index.html'
        }
      }
    }
  })

  grunt.registerTask('build', [
    'clean',
    'copy',
    'concat'
  ])

  grunt.registerTask('default', ['build'])
}
