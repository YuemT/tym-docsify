var gulp = require('gulp');
var $ = require('gulp-load-plugins')();//一定要调用

// //引入对应的插件方法
// let concat = require('gulp-concat');
// let uglify = require('gulp-uglify');
// let rename = require('gulp-rename');
// let cssMin = require('gulp-clean-css');
// let less = require('gulp-less');
//let htmlMin = require('gulp-htmlmin');

let livereload = require('gulp-livereload');
let connect = require('gulp-connect');
let open = require('open');

//注册一个合并压缩js的任务
gulp.task('js', function () {
   return gulp.src('src/js/*.js')//找到目标原文件 读取到内存
       .pipe($.concat('build.js'))//合并文件
       .pipe(gulp.dest('dist/js/'))//临时输出
       .pipe($.uglify())//压缩js文件
       .pipe($.rename({suffix : '.min'}))//重命名、
       .pipe(gulp.dest('dist/js/'))
       //.pipe(livereload())//自动编译
       .pipe(connect.reload())//自动刷新

});
//注册一个转换less为css的任务
gulp.task('less', function () {
   return gulp.src('src/less/*.less')//找到目标源文件
       .pipe($.less())//将less文件转换为css文件
       .pipe(gulp.dest('src/css/'))
       .pipe(connect.reload())//自动刷新

});

//注册合并压缩css的任务
gulp.task('css',['less'], function () {//依赖于less任务先执行完毕
    return gulp.src('src/css/*.css')
        .pipe($.concat('build.css'))
        .pipe($.rename({suffix : '.min'}))
        .pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'))
        //.pipe(livereload())//自动编译
        .pipe(connect.reload())//自动刷新


});

//注册压缩html任务
gulp.task('htmlMin', function () {
    return gulp.src('./index.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
});

//注册一个自动编译的任务
gulp.task('watch',['default'],  function () {
    //开启监听
    livereload.listen();
    //设置监听的源文件，并绑定相应的任务
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch(['src/css/*.css', 'src/less/*.less'], ['less', 'css']);
});
gulp.task('build',['js', 'less', 'css', 'htmlMin']);

//注册server任务---完全自动化
gulp.task('server',['build'], function () {
   //设置server配置
    connect.server({
        root : 'dist/',
        livereload : true,
        port : 666
    });
    open('http://localhost:666');
    //设置监听的源文件，并绑定相应的任务
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch(['src/css/*.css', 'src/less/*.less'], ['less', 'css']);

});


//gulp执行任务是异步的
gulp.task('default', ['server']);