var gulp       = require('gulp');
var connect    = require('gulp-connect');
var less       = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('default', [
	'connect',
	'watch'
]);

gulp.task('connect', function(){

	connect.server({
		root: 'app/src',
		port: '3000'
	});
});

gulp.task('watch', function(){

	livereload.listen();

	gulp.watch('app/**/*.html', ['html']);
	gulp.watch('app/**/*.less', ['less']);
});

gulp.task('html', function(){

	return gulp.src('app/**/*.html')
    	.pipe(livereload());
});

gulp.task('less', function(){

	return gulp.src('app/src/**/*.less', { base: './' })
		.pipe(less())
		.pipe(gulp.dest( './' ))
		.pipe(livereload());
});