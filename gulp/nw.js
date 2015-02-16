var gulp = require( 'gulp' );
var $ = require('gulp-load-plugins')();
var builder = require('node-webkit-builder');

gulp.task('nw', function () {
  var nw = new builder({
    version: '0.11.6',
    files: ['./compile/**'],
    buildDir: './build',
    cacheDir: './cache',
    platforms: ['osx']
  });

  nw.on('log', function(message) {
    $.util.log('node-webkit-builder', message);
  });

  return nw.build().catch(function(err) {
    $.util.log('node-webkit-builder', err);
  });
});
