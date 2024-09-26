const gulp = require("gulp");

gulp.task("assets", () => {
  return gulp
    .src("./assets/**")
    .pipe(gulp.dest("./dist/assets"));
});

gulp.task("default", gulp.series("assets"), () => {
  console.log("✔ Gulp finished successfully");
});