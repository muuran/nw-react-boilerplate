var gulp = require( 'gulp' );
var less = require( 'gulp-less' );

gulp.task( 'less', function () {
	return gulp.src( './src/style/**/*.less' )
		.pipe( less() )
		.pipe( gulp.dest( './compile/style' ) );
} );
