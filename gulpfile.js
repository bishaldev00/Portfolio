const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

//  minify html
gulp.task('minifyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'));
});

//  minify css
gulp.task('minifyCss', () => {
    return gulp.src('src/styles/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('public/style'));
});

//  minify js
gulp.task('minifyJs', () => {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

//  add prefixes to css
gulp.task('autoPrefixer', () => {
    return gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('public/styles'))
});

// compress images
gulp.task('imageMin', async () => {
    gulp.src('src/res/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/res/images'))
});


gulp.task('default', gulp.series(['minifyHtml', 'minifyCss', 'minifyJs', 'autoPrefixer', 'imageMin']));