const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');

//  minify html
gulp.task('minifyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'));
});
gulp.task('minifyHtmlToRoot', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'))
});
//  add prefixes to css
gulp.task('autoPrefixer', () => {
    return gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('public/styles'))
});
//  minify css
gulp.task('minifyCss', () => {
    return gulp.src('public/styles/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('public/styles'));
});

//  minify js
// gulp.task('minifyJs', () => {
//     return gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('public/js'));
// });



// compress images
gulp.task('imageMin', async () => {
    gulp.src('src/res/images/*',)
        .pipe(imagemin())
        .pipe(gulp.dest('public/res/images'))
});

gulp.task('replaceString',()=> {
    return gulp.src('./index.html')
      .pipe(replace('./', './public/'))
      .pipe(gulp.dest('./'));
  });

gulp.task('default', gulp.series(['minifyHtml','minifyHtmlToRoot', 'autoPrefixer', 'minifyCss', 'imageMin','replaceString']));