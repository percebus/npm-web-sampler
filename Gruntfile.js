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
      dist: 'dist'
    },
    copy: {
      dist: {
        files: [
          { cwd: 'src/assets/', expand: true, src: ['**'], dest: 'dist' },
          { cwd: 'src/app/ui/views/main/', expand: true, src: ['*.htm*'], dest: 'dist' }
        ]
      }
    }
  })

  grunt.registerTask('dist', ['clean', 'copy'])

  grunt.registerTask('default', ['dist'])
}
