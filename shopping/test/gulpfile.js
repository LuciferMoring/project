var gulp = require('gulp');
var del = require('del');
gulp.task('default', function() {
//console.log('这是我的第一个项目');

		gulp.src('app/**/*.*')
		.pipe(gulp.dest('dist'))
});
//gulp.task('say',function(){
//	console.log('正在执行say任务');
//})

gulp.task('clean',function(){
	del([
		'dist'
	])
})
