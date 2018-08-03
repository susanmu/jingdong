var gulp = require('gulp');
var babel = require('gulp-babel'); //es6
var autofix = require('gulp-autoprefixer'); //添加前缀
var scss = require('gulp-sass'); //编译less
var uglify = require('gulp-uglify'); //js压缩
//var minCss = require('gulp-clean-css'); //css压缩
//var minhtml = require('gulp-htmlmin'); //html压缩

// gulp.task('css', function() {
//     return gulp.src('./src/**/*.less')
//         .pipe(less())
//         .pipe(autofix({
//             browsers: ['last 2 versions']
//         }))
//         .pipe(gulp.dest('./src/css/'))
// })
// gulp.task()
gulp.task('scss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', ['scss'])
})
gulp.task('default', ['scss', 'watch'])