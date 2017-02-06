var gulp = require('gulp');

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var del = require('del');
var superstatic = require('superstatic');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
      middleware: [superstatic({stack: 'strict'})]
    }
  });
  gulp.watch('dist').on('change', browserSync.reload);
});


gulp.task('clean', function(){
  return del('dist');
});

gulp.task('html', function(){
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
  return gulp.src('./app/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
  return gulp.src(['app/**/*.js','!app/bower_components/**/*', '!app/**/*.test.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch:sass', function () {
  return gulp.watch('app/**/*.scss', gulp.series('sass'));
});

gulp.task('watch', gulp.parallel('watch:sass'));
gulp.task('build', gulp.parallel('html', 'sass', 'js'));
gulp.task('start', gulp.series('clean', 'build', 'serve'));
gulp.task('default', gulp.parallel('start', 'watch'));
