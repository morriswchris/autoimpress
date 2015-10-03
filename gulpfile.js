var gulp = require("gulp");
var del = require("del");
var file = require('gulp-file');
var mtoi = require('markdown-impress');
var ghPages = require('gulp-gh-pages');


gulp.task("default", ["deploy"], function(){});

gulp.task("build",["clean"], function(){
  var content = mtoi('document.md');
  return file('index.html', content, { src: true }).pipe(gulp.dest('dist'));
});
gulp.task("deploy", ["build"] function(cb){
  return gulp.src('./dist/**/*')
   .pipe(ghPages());
});
gulp.task("clean", function(cb){
  return del(["./dist/**/*", "./dist/**"], cb);
});
