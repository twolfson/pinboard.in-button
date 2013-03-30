var fs = require('fs'),
    path = require('path'),
    glob = require('glob');
module.exports = function(grunt) {

  // Set up configuration
  var config = {
    env: 'production'
  };

  // Set up script helper
  function loadScripts() {
    // Grab the script paths
    var filepaths = glob.sync('lib/scripts/*.js'),
        retObj = {};

    // Read in each file and save it
    filepaths.forEach(function (filepath) {
      var content = fs.readFileSync(filepath, 'utf8'),
          filename = path.basename(filepath, '.js');
      retObj[filename] = content;
    });

    // Return the scripts
    return retObj;
  }

  // Project configuration.
  grunt.initConfig({
    // Configure our package
    pkg: '<json:package.json>',

    // Linting
    lint: {
      files: ['grunt.js', 'lib/scripts/*.js']
    },

    // Templating
    template: {
      background: {
        src: 'lib/background.mustache.js',
        dest: 'build/background.js',
        engine: 'mustache',
        variables: function () {
          return {
            scripts: loadScripts(),
            config: config
          };
        }
      }
    },

    // Watch tasks
    watch: {
      dev: {
        files: 'lib/**/*',
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

        // Crossrider variables
        appAPI: true,
        unsafeWindow: true,

        // Custom templating globals
        app: true
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