var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp');

gulp.task('watch-compile', ['compile'], function() {
  gulp.watch('./src/**/*', ['browserify']);
  gulp.watch('./src/index.html', ['through']);
  gulp.watch('./src/style/**/*', ['less']);
});

gulp.task('watch-build', ['nw'], function() {
  gulp.watch('./compile/**/*', ['nw']);
});

gulp.task('watch', function(done) {
  runSequence(
    'watch-compile',
    'watch-build',
    done
  );
});

gulp.task('build', function(done) {
  runSequence(
    'compile',
    'nw',
    done
  );
});

gulp.task('default', ['watch']);
