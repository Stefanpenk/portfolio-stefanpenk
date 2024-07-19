const { src, dest, watch, series } = require("gulp");
// const sass = require('gulp-sass')(require('sass'));
// const prefix = require('gulp-autoprefixer');
// const minify = require('gulp-clean-css');
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
// const imagewebp = require('gulp-webp');

// function compilescss() {
//   return src('src/sass/*.scss')
//     .pipe(sass())
//     .pipe(prefix('last 2 versions'))
//     .pipe(minify())
//     .pipe(dest('public/css'))
// }

function jsmin() {
  return src("src/script/*.js").pipe(terser()).pipe(dest("public/public/js"));
}

function optimizeimg() {
  return src("src/assets*/**/*.{jpg,png,svg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({
          quality: 80,
          progressive: true,
        }),
        imagemin.optipng({
          optiminzationLevel: 2,
        }),
      ])
    )
    .pipe(dest("public/public/"));
}

// function webpImage() {
//   return src('public/assets*/**/*.{jpg,png}')
//     .pipe(imagewebp())
//     .pipe(dest('public/assets'))
// }

function watchTask() {
  // watch('src/sass/*.scss', compilescss);
  watch("src/script/*.js", jsmin);
  watch("src/assets*/**/*.{jpg,png}", optimizeimg);
  // watch('public/assets*/**/*.{jpg,png}', webpImage);
}

exports.default = series(jsmin, optimizeimg, watchTask);

exports.build = series(jsmin, optimizeimg);
