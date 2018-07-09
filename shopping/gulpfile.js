var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('default',['server','watch','html'])
gulp.task('watch',function(){
	gulp.src('./wangqiupai.html')
	gulp.watch('./wangqiupai.html',['html'])
})
gulp.task('html',function(){
	gulp.src('./wangqiupai.html')
	.pipe(connect.reload())
})
gulp.task('server',function(){
	connect.server({
		root:'',
		port:'8081',
		livereload:true
	})
})
