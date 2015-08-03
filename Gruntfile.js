'use strict';

module.exports = function (grunt) {
  grunt.initConfig({


    // configure task(s)
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: [/* TODO: add task(s) to execute when changed */]
      },
      css: {
        files: ['css/**/*.css'],
        tasks: [/* TODO: add task(s) to execute when changed */]
      }
    }
  });


  // load task's plugin(s)
  grunt.loadNpmTasks('grunt-contrib-watch');
  // TODO: add grunt-contrib-jshint & grunt-contrib-csslint plugins


  // register task(s)
  grunt.registerTask('default', ['watch']);
  // TODO: add js & css tasks
};
