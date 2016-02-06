'use strict'

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      build: {
        files: {
          'dist/main.css': ['css/main.less']
        }
      }
    },
    uglify: {
      options: {
        report: 'min'
      },
      main: {
        files: {
          'dist/script.min.js': ['js/*.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['dist/*.css', '!dist/*.min.css'],
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: 'css/*.less',
        tasks: ['less', 'cssmin'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['index.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'uglify', 'cssmin']);
};