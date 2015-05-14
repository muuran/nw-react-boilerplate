var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var builder = require('node-webkit-builder');
var fs = require('fs');

gulp.task('nw', function(done) {
  var appPackageJsonRelativePath = 'src/package.json';

  // Check the app package.json existence.
  var appPackageJsonPath = __dirname + '/../' + appPackageJsonRelativePath;
  if (!fs.existsSync(appPackageJsonPath)) {
    throw new Error('The "' + appPackageJsonRelativePath + '" file does not exist.');
  }

  var appPackageJson = require(appPackageJsonPath);

  // Check the app name.
  if (!appPackageJson.name) {
    throw new Error('The "' + appPackageJsonRelativePath + '" file must contain an npm-friendly "name" of your app.');
  }

  // Check the build options.
  var nwBuildOptions = appPackageJson['nwbuild'];
  if (
    !nwBuildOptions
    || !nwBuildOptions.version
    || !nwBuildOptions.platforms
    || !Array.isArray(nwBuildOptions.platforms)
    || !nwBuildOptions.platforms.length
  ) {
    throw new Error('The "' + appPackageJsonRelativePath + '" file must contain "nwbuild" section with NW.js "version" and non-empty "platforms" array.');
  }

  var nw = new builder({
    version: nwBuildOptions.version,
    files: ['./compile/**'],
    buildDir: './build',
    cacheDir: './cache',
    platforms: nwBuildOptions.platforms
  });

  nw.on('log', function(message) {
    $.util.log('node-webkit-builder', message);
  });

  nw.build().then(function () {
    done();
  }).catch(function(err) {
    $.util.log('node-webkit-builder', err);
    done(err);
  });
});
