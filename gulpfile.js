var gulp = require ('gulp');
var jshint = require ('gulp-jshint');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css')
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');


require('events').EventEmitter.prototype._maxListeners = 0;


gulp.task('images', function(){
	return gulp.src('development/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('production/images'));
})

gulp.task('sass', function(){
	gulp.src('development/scss/*.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(cleanCSS())
	.pipe(concat('main.css'))
	.pipe(autoprefixer())
	.pipe(gulp.dest('production/css/'))
	.pipe(connect.reload());
})

gulp.task('concat', function(){
	gulp.src('development/css/*.css')
	.pipe(cleanCSS())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('production/css/'))
})

gulp.task('scripts', function(){
	gulp.src('development/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(concat('styles.js'))
	.pipe(gulp.dest('production/js/'))
	.pipe(connect.reload());
})


gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function(){
	gulp.watch('development/scss/*.scss', ['sass']);
	gulp.watch('development/js/*.js', ['scripts']);
})

gulp.task('default', ['sass', 'scripts', 'watch', 'connect', 'concat', 'images']);




