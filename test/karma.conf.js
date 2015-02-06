// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../',
    autoWatch: true,
    frameworks: ['jasmine'],
    singleRun: false,
    colors: true,
    urlRoot: '_karma_',
    files: [
      'bower_components/jquery/dist/jquery.js',
      'app/js/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [],
    port: 9876,
    browsers: [
      'PhantomJS',
      'Chrome'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-nyan-reporter',
      'karma-chrome-launcher'
    ],
    reporters: ['nyan', 'coverage'],

    // coverageReporter: {
    //   dir: 'coverage/',
    //   reporters: [
    //     // reporters not supporting the `file` property
    //     { type: 'lcov', dir: 'report-lcov' },
    //   ]
    // },

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DISABLE,

  });
};
