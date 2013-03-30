module.exports = function(grunt) {

  // Set up configuration
  var config = {
    env: 'production'
  };

  // Project configuration.
  grunt.initConfig({
    // Configure our package
    pkg: '<json:package.json>',

    // Linting
    lint: {
      files: ['grunt.js', 'lib/**/*.js']
    },

    // Templating
    template: {
      background: {
        src: 'lib/background.mustache.js',
        dest: 'build/background.js',
        variables: {
          config: function () {
            return config;
          }
        }
      }
    },

    // Watch tasks
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },

    // Linting configuration
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,

        strict: false,
        browser: true
      },
      globals: {
        exports: true,
        appAPI: true
      }
    }
  });

  // Load in templater
  grunt.loadNpmTasks('grunt-templater');

  // Add a build task
  grunt.registerTask('build', 'template');

  // Default task.
  grunt.registerTask('default', 'lint');

};