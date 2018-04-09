var gulp = require('gulp');
var myth = require('gulp-myth');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var plumber = require('gulp-plumber');
var argv   = require('minimist')(process.argv);
var gulpif = require('gulp-if');
var prompt = require('gulp-prompt');
var rsync  = require('gulp-rsync');
let cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var jsonedit= require("gulp-json-editor");


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


gulp.task('minify-css', function() {
	return gulp.src('src/dist/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('src/dist'));
});


gulp.task('minify-js', function() {
	return gulp.src('src/dist/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('src/dist'));
});

gulp.task('create-week', function() {
	// Create week entry in each DB
	gulp.src(["./src/db/**/*.json", "!./src/db/archive.json"])
	.pipe(jsonedit(function(json) {
		let newWeek = Object.assign({}, json.featured[0])
			newWeek.date = argv.week
		json.featured.unshift(newWeek)
		return json;
	}))
	.pipe(gulp.dest(function (file) {
		return file.base;
	}));

	// Create the same entry in the Archive DB
	gulp.src("./src/db/archive.json")
	.pipe(jsonedit(function(json) {
		let newWeek = argv.week
		json.unshift(newWeek)
		return json;
	}))
	.pipe(gulp.dest(function (file) {
		return file.base;
	}));
});

gulp.task('deploy', function() {
	var rsyncPaths = ['src'];
	var config = {
		progress: true,
		incremental: true,
		relative: true,
		emptyDirectories: true,
		recursive: true,
		clean: true,
		destination: 'frontend.deals:/var/www/frontend_deals/',
		exclude: []
	};

	return gulp.src(rsyncPaths)
		.pipe(prompt.confirm({
			message: 'Do you want to deploy to frontend.deals LIVE?',
			default: false
		}))
		.pipe(rsync(config));
});