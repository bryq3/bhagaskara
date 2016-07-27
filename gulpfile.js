var gulp= require("gulp");
var sass= require("gulp-sass");
var sourcemaps=require("gulp-sourcemaps");

gulp.task("sass", function(){
	return gulp.src("sass/main.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({
	errLogToConsole: true,
		outputStyle: "expanded"
	}).on("error", sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("css"))
});
gulp.task("default", ["sass"], function(){
	gulp.watch("sass/**/*.scss", ["sass"])
});