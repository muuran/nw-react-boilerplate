var gulp = require('gulp');

gulp.task('through', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./compile'));
});
