var gulp = require('gulp');

gulp.task('through', function() {
  return gulp.src(['./src/index.html', './src/index.js'])
    .pipe(gulp.dest('./compile'));
});
