/*
 * @description: 
 * @author: 小七
 * @github: https://github.com/
 * @lastEditors: 小七
 * @Date: 2021-3-29 00:19:16
 * @LastEditTime: 2021-7-03 17:25:13
 * @Copyright: 1.0.0
 */
'use strict';

const { series, src, dest } = require('gulp');
const less = require('gulp-less');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function compile2() {
  return src('./src/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**')
    //.pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, compile2, copyfont);