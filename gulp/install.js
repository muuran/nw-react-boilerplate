var gulp = require('gulp');
var install = require('gulp-install');
var jsonTransform = require('gulp-json-transform');

gulp.task('install', function() {
  return gulp.src('./src/package.json')
    .pipe(jsonTransform(function (appPackageJson) {
      // Remove the window toolbar in production.
      if (process.env.NODE_ENV === 'production' && appPackageJson.window) {
        appPackageJson.window.toolbar = false;
      }
      return appPackageJson;
    }, 2))
    .pipe(gulp.dest('./compile'))
    .pipe(install({
      production: true
    }));
});
