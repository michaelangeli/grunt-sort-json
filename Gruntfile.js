'use strict';

module.exports = function(grunt) {

    // default test task
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sortJSON: {
            src: ['tests/results/file.json']
        },
        copy: {
            main: {
                expand: true,
                cwd: 'tests/template/',
                src: '**',
                dest: 'tests/results/'
            }
        },
        clean: {
            src: ['tests/results/']
        },
        nodeunit: {
            all: ['tests/tags.test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Test tasks cleans folder, runs tags task, then runs nodeunit
    grunt.registerTask('test', [
        'clean',
        'copy:main',
        'sortJSON',
        'nodeunit',
        'clean'
    ]);
};