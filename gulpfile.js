import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import fileinclude from "gulp-file-include";
import cssmin from "gulp-cssmin";
import concatCss from "gulp-concat-css";
import autoprefixer from "gulp-autoprefixer";
import sync from "browser-sync";
sync.create();

let source = "en/";

// HTML

export const html = () => {
	return gulp
		.src("src/html/**/*.html")
		.pipe(fileinclude())
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(gulp.dest("dist/" + source));
};

// Styles

export const styles = () => {
	return gulp
		.src("src/css/*.css")
		.pipe(autoprefixer())
		.pipe(concatCss("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/" + source + "css"))
		.pipe(gulp.src("src/css/static/**/*.css"))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/" + source + "css"));
};

// JS

export const javascript = () => {
	return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/" + source + "js"));
};

// Copy

export const copyFont = () => {
	return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/" + source + "fonts"));
};

export const copyImg = () => {
	return gulp.src("src/img/**/*").pipe(gulp.dest("dist/" + source + "img"));
};

export const copyMore = () => {
	return gulp
		.src("src/more/**/*")
		.pipe(gulp.dest("dist/" + source))
		.pipe(gulp.src("src/more/.htaccess"))
		.pipe(gulp.dest("dist/" + source));
};

// Server

export const server = () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: "dist",
		},
	});
};

// Watch

export const watch = () => {
	gulp.watch("src/**/*.html", gulp.series(html));
};

// Default

export default gulp.series(gulp.parallel(html), gulp.parallel(watch, server));
