module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build:{
        src:'src/js/*.js',
        dest:'js/script.min.js'
      },
    },
    sass: {
      dist: {
        files: {
          'styling/bob.css':'src/scss/bob.scss',
        },
      },
    },

    watch: {
      scripts: {
        files: ['src/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },

    scsslint: {
      allFiles: [
      'src/scss/bob.scss',
      ],
    },

    imagemin: {                          // Task 
      dynamic: {                         // Another target 
        files: [{
          expand: true,                  // Enable dynamic expansion 
          cwd: 'images/',                   // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
          dest: 'optimisedimage/'                  // Destination path prefix 
        }]
      }
    }
  });
  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default',['uglify:build','sass','watch']);
  grunt.registerTask('sasslint',['scsslint']);
  grunt.registerTask('image',['imagemin']);
};