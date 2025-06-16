const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
  scss: {
    src: 'scss/**/*.scss',
    dest: 'css/'
  }
};

// Sass task
gulp.task('sass', function () {
  return gulp.src(paths.scss.src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
});

// Serve + watch
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.scss.src, gulp.series('sass'));
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Default
gulp.task('default', gulp.series('sass', 'serve'));