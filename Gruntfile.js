module.exports = (grunt) => {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    jsonlint: {
      options: { prose: true },
      npm: ['package*.json'],
      htmllint: ['.htmllintrc']
    },
    yamllint: {
      testem: ['testem.yaml']
    },
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
          { cwd: 'src/app/ui/views/main/', expand: true, src: ['*.htm*'], dest: 'dist' },
          { cwd: '.', expand: true, src: ['LICENSE*'], dest: 'dist' }
        ]
      }
    },
    shell: {
      options: { stderr: true },
      standard: 'standard --fix __tests__/**/*.js',
      standard_Gruntfile: 'standard --fix Gruntfile.js',
      dockerlint: 'dockerlint Dockerfile'
    }
  })

  grunt.registerTask('lint:js:Gruntfile', ['shell:standard_Gruntfile'])
  grunt.registerTask('lint:js', ['shell:standard'])
  grunt.registerTask('lint:json', ['jsonlint'])
  grunt.registerTask('lint:yaml', ['yamllint'])
  grunt.registerTask('lint:html', ['htmllint'])
  grunt.registerTask('lint:docker', ['shell:dockerlint'])
  grunt.registerTask('lint', ['lint:json', 'lint:yaml', 'lint:html', 'lint:js', 'lint:docker'])

  grunt.registerTask('dist', ['lint', 'clean', 'copy'])

  grunt.registerTask('default', ['lint'])
  grunt.task.run('lint:js:Gruntfile')
}
