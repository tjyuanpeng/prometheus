var gulp = require('gulp'),
    through = require('through2'),
    File = require('gulp-util').File,
    path = require('path'),
    AutoSprites = require('auto-sprites').AutoSprites,
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    shell = require('gulp-shell'),
    gulpSequence = require('gulp-sequence');

var PATTERN_IMAGE_DEPS = /url\s*\(\s*(["']?)([^"']+?\.(?:png|gif|jpeg|jpg)(?:\?[^"']+?)?)\1\s*\)/g;

var cssTpl = '.ui2-icon-flag-{name}.ui2-icon-flag-{type}{' +
    'background:url(/src/img/flag{size}/{fullName}) no-repeat;}';


var source = [];

var createCSS = function (type, size) {
    var content = [],
        lastFile;
    return through.obj(function (file, enc, cb) {
        lastFile = file;

        var name  =  file.relative.replace(path.extname(file.relative), '');

        content.push(
            cssTpl
                .replace(/\{name\}/g, name)
                .replace(/\{type\}/g, type)
                .replace(/\{fullName\}/g, file.relative)
                .replace(/\{size\}/g, size)
        );

        source.push('<li><i class="ui2-icon-flag-{name} ui2-icon-flag-{type}"></i><span>ui2-icon-flag-{name} ui2-icon-flag-{type}</span></li>'
                .replace(/\{type\}/g, type)
                .replace(/\{size\}/g, size)
                .replace(/\{name\}/g, name)
        )
        return cb();
    }, function (cb) {
        var file = new File();
        content.unshift(
            '.ui2-icon-flag-{type} {display:inline-block;width:{size}px;height:{size}px;}'
                .replace(/\{type\}/g, type)
                .replace(/\{size\}/g, size)
        );

        file.contents = new Buffer(content.join('\n'));
        file.path = 'icon-flag-' + type + '.css';
        this.push(file);
        return cb();
    });
};

var sprites = function () {
    return through.obj(function (file, enc, cb) {
        var content = file.contents.toString().replace(PATTERN_IMAGE_DEPS, function (all, quote, pathname) {
            return all.replace(pathname, path.join(process.cwd(), pathname));
        });

        var fileName = file.path;

        var autoSprites = new AutoSprites({
            data: content,
            root: '/',
            path: path.join(process.cwd(), 'src/img/sprites'),
            fileName: fileName,
            base64: false
        });

        autoSprites.parse(function (data) {
            file.contents = new Buffer(data.replace(PATTERN_IMAGE_DEPS, function (all, quote, pathname) {
                return all.replace(pathname, pathname.replace(process.cwd(), ''));

            }));
            this.push(file);
        }.bind(this));
        return cb();
    })
};

var concatRule = function(){
    return through.obj(function(file, enc, cb){
         var contents = file.contents.toString(),
             imageUrl = '';
         contents = contents.replace(/background\:\s*(url.*?)\s*([-\d]+(px)?\s*[-\d]+(px)?)\s*no-repeat/g, function(all, image, position){
             imageUrl = image;
             return 'background-position:'+ position;
         }).replace(/height\:\s*\d{2}px;/, function(all){
             return all + '\n\t' + 'background-image: ' + imageUrl + ';\n\tbackground-repeat: no-repeat;'
         });

        file.contents = new Buffer(contents);
        this.push(file);

        return cb();

    });
};

gulp.task('img', function () {
    return gulp.src('./src/img/flag16/*')
        .pipe(createCSS('s', 16))
        .pipe(gulp.dest('./build/'));
});

gulp.task('img24', function () {
    return gulp.src('./src/img/flag24/*')
        .pipe(createCSS('m', 24))
        .pipe(gulp.dest('./build/'));
});

gulp.task('img32', function () {
    return gulp.src('./src/img/flag32/*')
        .pipe(createCSS('l', 32))
        .pipe(gulp.dest('./build/'));
});


gulp.task('sprites', ['img', 'img24', 'img32'], function () {
    return gulp.src('./build/*')
        .pipe(sprites())
        .pipe(concatRule())
        .pipe(gulp.dest('./'));
});

gulp.task('clean', ['sprites'], function () {
    return gulp.src('./build')
        .pipe(clean())
});

gulp.task('source', ['sprites'], function(){
   return gulp.src('./examples/icon-example.html')
       .pipe((function() {
           return through.obj(function (file, enc, cb) {
               var contents = file.contents.toString()
                   .replace(/\<sprites\>(.*)\<\/sprites\>/, function(){
                        return '<sprites>{flag}</sprites>';
                    })
                   .replace('{flag}', source.join('\n'));

               file.contents = new Buffer(contents);
               this.push(file);
               return cb();
           });
       })())
       .pipe(gulp.dest('./examples/'))

});

/**
 * 支付类图标svg sprite 构建
 */

gulp.task('svgSpritePayment:clean', function () {
    return gulp.src(['./src/svg-payment/build/','./src/svg-payment/svg/','./src/svg-payment/sprite.css'])
        .pipe(clean())
});

// svg-sprite生成 sass文件
gulp.task('svgSpritePayment:shell', shell.task([
    'sh ./src/svg-payment/build.sh',
]));

// sass compile
gulp.task('svgSpritePayment:sass', function () {
  return gulp.src("./src/svg-payment/build/view/sprite.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./src/svg-payment/"));
});

// 复制生成的svg sprite文件
gulp.task('svgSpritePayment:copySVG', function () {
  return gulp.src("./src/svg-payment/build/view/svg/*.svg")
    .pipe(gulp.dest("./src/svg-payment/svg/"));
});

// 复制生成的example
gulp.task('svgSpritePayment:copyHTML', function () {
  return gulp.src("./src/svg-payment/build/view/sprite.view.html")
    .pipe(gulp.dest("./src/svg-payment/"));
});

gulp.task('svgSpritePayment:cleanBuild', function () {
    return gulp.src(['./src/svg-payment/build/'])
        .pipe(clean())
});

gulp.task('svgSpritePayment',gulpSequence('svgSpritePayment:clean','svgSpritePayment:shell','svgSpritePayment:sass','svgSpritePayment:copySVG','svgSpritePayment:copyHTML','svgSpritePayment:cleanBuild'));

gulp.task('default', ['clean','source']);
