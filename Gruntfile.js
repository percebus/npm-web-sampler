module.exports = (grunt) => {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    shell: {
      options: { stderr: true },
      standard: 'standard --fix __tests__/**/*.js',
      standard_Gruntfile: 'standard --fix Gruntfile.js'
    }
  })

  grunt.registerTask('lint:js:Gruntfile', ['shell:standard_Gruntfile'])
  grunt.registerTask('lint:js', ['shell:standard'])
  grunt.registerTask('lint', ['lint:js'])

  grunt.registerTask('default', ['lint'])
  grunt.task.run('lint:js:Gruntfile')
}
