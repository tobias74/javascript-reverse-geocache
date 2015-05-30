module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js',
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/built.js',
      },
    },    
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  

  grunt.registerTask('test', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['test']);

};
