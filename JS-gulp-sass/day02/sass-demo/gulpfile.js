var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('styles', function(){
    console.log("Styles Executed!!");
    gulp.src("sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("css"))
});


gulp.task('default', function(){
    console.log("--GULP SETUP--");
    //To automate the ask
    gulp.watch("sass/**/*.scss", ['styles']);
})