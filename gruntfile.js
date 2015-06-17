'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: ['*.js', '!*.min.js', 'test/**/*.js'],
                options: {
                    jshintrc: true
                }
            }
        },
        karma: {
            options: {
                frameworks: ['jasmine'],
                reporters: ['progress', 'coverage'],
                port: 9876,
                colors: true,
                logLevel: 'INFO',
                autoWatch: false,
                browsers: ['PhantomJS'],
                singleRun: true,
                preprocessors: {
                    'angular-toolbox.js': 'coverage'
                },
                coverageReporter: {
                    type : 'lcov'
                }
            },
            unit: {
                options: {
                    files: [
                        'bower_components/lodash/lodash.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'angular-toolbox.js',
                        'test/*.spec.js'
                    ]
                }
            },
            min: {
                options: {
                    files: [
                        'bower_components/lodash/lodash.min.js',
                        'bower_components/angular/angular.min.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'angular-toolbox.min.js',
                        'test/*.spec.js'
                    ]
                }
            }
        },
        exec: {
            coveralls: {
                command: 'STRICT_REQUIRE=1 cat ./coverage/**/lcov.info | ./node_modules/.bin/coveralls && rm -rf ./coverage'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %>#<%= pkg.version %> */\n'
                },
                files: {
                    'angular-toolbox.min.js': ['angular-toolbox.js'],
                }
            }
        }
    });

    grunt.registerTask('test', ['jshint:all', 'karma:unit']);
    grunt.registerTask('build', ['test', 'uglify:dist', 'karma:min']);
    grunt.registerTask('travis', ['test', 'exec:coveralls']);
    grunt.registerTask('default', ['test']);
};