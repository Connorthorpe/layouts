'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

//compile 
gulp.task('sass', function() {
    gulp.src('styles/main.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('assets'))
  });

//compile and watch
gulp.task('sass:watch', function() { 
    gulp.watch('styles/main.scss').on('change', gulp.series('sass'));
});