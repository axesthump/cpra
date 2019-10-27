const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const run = require("run-sequence");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

sass.compiler = require('node-sass');


gulp.task("style", function () {
    gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("css"))
        .pipe(server.stream());
});

gulp.task("serve", function () {
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("sass/**/*.{scss,sass}", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
    gulp.watch("js/*.js").on("change", server.reload);
});

gulp.task("build", function (done) {
    run(
        "style",
        done
    );
});