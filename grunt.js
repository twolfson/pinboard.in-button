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
        engine: 'mustache',
        variables: {
          config: function () {
            return config;
          }
        }
      }
    },

    // Watch tasks
    watch: {
      dev: {
        files: '<config:lint.files>',
        tasks: 'build'
      }
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
        appAPI: true,
        unsafeWindow: true
      }
    }
  });

  // Load in templater
  grunt.loadNpmTasks('grunt-templater');

  // Add a build task
  grunt.registerTask('build', 'template');

  // Set up dev-config
  grunt.registerTask('dev-config', 'Configure grunt for a development environment', function () {
    config.env = 'development';
  });

  // Add a dev task
  grunt.registerTask('dev', 'dev-config build watch:dev');

  // Default task.
  grunt.registerTask('default', 'lint build');

};