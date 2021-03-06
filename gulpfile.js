var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

gulp.task('css', function() {
    gulp.src('./src/mm.angular-fullpage.css')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./'))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '1'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.')) 
        .pipe(gulp.dest('./'));
});

gulp.task('js', function() {
    gulp.src('./src/mm.angular-fullpage.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['css', 'js']);