module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js',
        template: require('grunt-template-jasmine-requirejs'),
        /*
        templateOptions: {
          requireConfig: {
            baseUrl: 'lib',
            paths: {
                app: './src'
            }
            
          } 
        }
          */    
      }
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
    },
    requirejs: {
      options: {
        paths: {
          'appFiles': './src'
        },
        removeCombined: true,
        out: './dist/built.js',
        optimize: 'none',
        name: 'main'
      },
      dev:{
        options:{
          optimize:'none'
        }
      },
      release:{
        options:{
          optimize:'none'
        }
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
