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
      build: {
        files: [
          {
            src: ['LICENSE*'],
            dest: 'build/'
          },
          {
            cwd: 'node_modules/bootstrap/dist/css/',
            expand: true,
            src: ['bootstrap.min.*'],
            dest: 'build/vendor/style'
          },
          {
            cwd: 'src/app/ui/views/main/',
            expand: true,
            src: ['*.htm*'],
            dest: 'build'
          }
        ]
      },
      dist: {
        files: [
          {
            src: ['LICENSE*'],
            dest: 'dist/'
          },
          {
            cwd: 'repositories/percebus-assets/assets/',
            expand: true,
            src: ['**'],
            dest: 'dist'
          }
        ]
      }
    },
    concat: {
      options: { sourceMap: true },
      vendor: {
        files: {
          'dist/vendor/vendor.min.css': ['build/vendor/style/**/*.css']
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

  grunt.registerTask('build', ['clean:build', 'copy:build'])
  grunt.registerTask('dist', [
    'build',
    'clean:dist',
    'copy:dist',
    'concat'
    // 'htmlmin'
  ])

  grunt.registerTask('default', ['dist'])
}
