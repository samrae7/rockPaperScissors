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

var htmlFiles = ['app/**/*.html', '!app/bower_components/**/*'];

gulp.task('clean', function(){
  return del('dist');
});

gulp.task('html', function(){
  return gulp.src(htmlFiles)
    .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
  return gulp.src('./app/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

var jsFiles = ['app/**/*.js','!app/bower_components/**/*', '!app/**/*.test.js'];

gulp.task('js', function () {
  return gulp.src(jsFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch:sass', function () {
  return gulp.watch('app/**/*.scss', gulp.series('sass'));
});

gulp.task('watch:html', function () {
  return gulp.watch(htmlFiles, gulp.series('html'));
});

gulp.task('watch:js', function () {
  return gulp.watch(jsFiles, gulp.series('js'));
});

gulp.task('watch', gulp.parallel('watch:sass', 'watch:html', 'watch:js'));
gulp.task('build', gulp.parallel('html', 'sass', 'js'));
gulp.task('start', gulp.series('clean', 'build', 'serve'));
gulp.task('default', gulp.parallel('start', 'watch'));
