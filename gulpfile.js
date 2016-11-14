'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var db = require('./models/db');
var knex = require('knex');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
}

gulp.task('compile-sass', function(){
    gulp.src('./public/styles/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/styles'))
});

gulp.task('sass-watch', function(){
    gulp.watch(['./public/styles/*.scss'], ['compile-sass'])
});

gulp.task('default', ['Nodemon','sass-watch']);