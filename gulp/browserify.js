var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx']
  });
  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./compile'));
});
