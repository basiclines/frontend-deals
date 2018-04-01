var gulp = require('gulp');
var myth = require('gulp-myth');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var plumber = require('gulp-plumber');

gulp.task('js', function() {
	return gulp.src('src/app.js')
		.pipe(plumber())
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('src/dist/'));
});

gulp.task('css', function () {
	return gulp.src('src/app.css')
		.pipe(plumber())
		.pipe(myth())
		.pipe(rename('app.bundle.css'))
		.pipe(gulp.dest('src/dist'));
});

gulp.task('watch', ['css', 'js'], function () {
	gulp.watch(['src/**/*.css'], ['css']);
	gulp.watch(['src/**/*.js'], ['js']);
});