const {src, dest, series, parallel, lastRun, watch} = require('gulp')
const rename      = require('gulp-rename')
const concat      = require('gulp-concat')
const uglify      = require('gulp-uglify')
const babel       = require('gulp-babel')
const del         = require('del')

let path = {
  scripts: {
    src: [
      'src/url-rewriter.js'
    ],
    dest: 'dist/asset/js'
  }
}

function clean () {
  return del('dist')
}

function scripts() {
  return src(path.scripts.src, {sourcemaps: true})
    .pipe(concat('url-rewriter.js'))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(path.scripts.dest, {sourcemaps: '.'}))
}

module.exports = {
  build: series(clean, scripts),
  clean
}
