/*
 * Directory structure:
 *
 * project/
 *        package.json
 *        gulpfile.js
 *        node_modules/
 *        src/
 *        dist/
 *
 *  Builds two files: a vendor file for big dependencies and an app file
 *  for just your app.
 */
var SRC_DIR = "./js/src";
var DIST_DIR = "./js/dist";


var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');


var vendor_libs = [
    'lodash',
    'moment',
    'react',
    'react-router',
];


gulp.task('vendor_js', function() {
    var b = browserify({debug: true});

    vendor_libs.forEach(function(lib) {
        b.require(lib);
    });

    b.plugin('minifyify', {
        map: 'vendor.map',
        output: DIST_DIR + '/vendor.map'
     })
     .bundle()
     .pipe(source('vendor.min.js'))
     .pipe(gulp.dest(DIST_DIR));
});


gulp.task('app_js', function() {
    var b = browserify({
        extensions: ['.js', '.jsx'],
        debug: true,
    });

    // mark vendor_libs as external to not include them in bundle
    // so you can safely "require('lodash')" in each file, etc.
    vendor_libs.forEach(function(lib) {
        b.external(lib);
    });

    b.transform(babelify)
     .plugin('minifyify', {
         map: 'app.map',
         uglify: {
             mangle: false,
             compress: {
                 drop_debugger: false,
                 drop_console: false,
             }
         },
         output: DIST_DIR + '/app.map'
     })
     .add(SRC_DIR + "/app.jsx")
     .bundle()
     .pipe(source('app.min.js'))
     .pipe(gulp.dest(DIST_DIR));
});


gulp.task('default', ['vendor_js', 'app_js']);


gulp.task('watch', function() {
    gulp.watch(
        [SRC_DIR + "/**/*.jsx", SRC_DIR + "/**/*.js"],
        ['app_js']
    );
});
