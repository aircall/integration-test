var gulp = require('gulp'),
  concat = require('gulp-concat'),
     pug = require('gulp-pug'),
    sass = require('gulp-sass'),
     gls = require('gulp-live-server');


var server;
var cssPath = './app/css/';
var jsPath = './app/js/';
var htmlPath = './app/views/';



/**
 * HTML methods
 */
 gulp.task('pug:compile', function () {
  return gulp.src(htmlPath + 'index.pug')
    .pipe(pug())
    .pipe(gulp.dest('public/views'));
});
 gulp.task('pug:watch', function () {
  gulp.watch(htmlPath + '**/*.pug', ['pug:compile']);
});



/**
 * CSS methods
 */
gulp.task('sass:compile', function () {
  return gulp.src(cssPath + 'style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch(cssPath + '**/*.scss', ['sass:compile']);
});



/**
 * JS methods
 */
 gulp.task('js:compile', function () {
  return gulp.src([
      jsPath + 'app.js',
      jsPath + '**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});
gulp.task('js:watch', function () {
  gulp.watch(jsPath + '**/*.js', ['js:compile']);
});




gulp.task('server', function() {
  server = gls.new('main.js');
  server.start();

  gulp.watch('main.js', function() {
    server.start.bind(server)()
  });
});


// Default task
gulp.task('default', [
    'pug:compile', 'pug:watch',
    'sass:compile', 'sass:watch',
    'js:compile', 'js:watch',
    'server'
  ]);
