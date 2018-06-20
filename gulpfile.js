var gulp = require('gulp'), merge = require('merge-stream'), uglify = require('gulp-uglify'), babel = require('gulp-babel'), sourcemaps = require('gulp-sourcemaps'), typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.convert-es6.json', {
    target: 'ESNext',
    declarationFiles: true,
    jsx: 'preserve'
});
gulp.task('x_build-ts', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js
        // .pipe(babel())
        // .pipe(uglify())
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build-es6'))
        .pipe(gulp.dest('./build-ts'));
});
