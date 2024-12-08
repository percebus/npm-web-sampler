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
            cwd: 'node_modules/bootstrap/dist/css/',
            expand: true,
            src: ['bootstrap.min.*'],
            dest: 'build/vendor/'
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
            cwd: 'src/assets/',
            expand: true,
            src: ['**'],
            dest: 'dist'
          }
        ]
      }
    },
    cssmin: {
      options: { sourceMap: true },
      target: {
        files: [
          {
            'dist/vendor/vendor.min.css': ['build/vendor/**/*.css']
          }
        ]
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
    'cssmin',
    'htmlmin'
  ])

  grunt.registerTask('default', ['dist'])
}
