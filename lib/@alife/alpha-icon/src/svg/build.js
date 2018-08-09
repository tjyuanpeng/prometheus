var shell = require('shelljs');

var fs = require('fs');

var cwd = process.cwd();

buildCss();

function buildCss () {

    // 删掉原有的 css 目录
    shell.rm('-rf', cwd + '/build/css');
    console.log('old build/css removed.');

    buildWithSize(64);
    buildWithSize(96);

    /**
     * 根据不同大小的图标来执行相应操作
     * @param size
     */
    function buildWithSize (size) {
        var childBuild = shell.exec('svg-sprite -c --css-dest=build/css/'+ size +'px/ --cx=true  renamed/'+ size +'px/*.svg --ccss', {async: true});
        childBuild.stdout.on('end', function (data) {
            console.log('css sucessfully generated. size:', size);
        });
    }

    /**
     * 根据不同大小
     * @param size
     */
    function renameCssClass (size) {

    }
}

function buildView () {
    var childBuild64 = shell.exec('svg-sprite --view --vx --dest=build/64px ./renamed/64px/*.svg --view-sprite sprite.svg', {async: true});
    childBuild64.stdout.on('end', function (data) {
        console.log('svg sucessfully generated.');

        var svgPath = cwd + '/build/64px/view';

        // find svg file
        var svgFile = shell.find(svgPath).filter(function (file) {
            return file.match(/\.svg$/);
        })[0];
        console.log('find svg file:', svgFile);

        // rename svg file (take off the hash from file name)
        var svgFileCopy = svgPath + '/sprite.svg';
        shell.cp(svgFile, svgFileCopy);
        console.log('copy svg file to:', svgFileCopy);

    });

    var childBuild96 = shell.exec('svg-sprite --view --vx --dest=build/96px ./renamed/96px/*.svg --view-sprite sprite.svg', {async: true});
    childBuild96.stdout.on('end', function (data) {
        console.log('svg sucessfully generated.');

        svgPath = cwd + '/build/96px/view';

        // find svg file
        var svgFile = shell.find(svgPath).filter(function (file) {
            return file.match(/\.svg$/);
        })[0];
        console.log('find svg file:', svgFile);

        // rename svg file (take off the hash from file name)
        var svgFileCopy = svgFile.slice(0,svgFile.lastIndexOf('/')) + '/sprite.svg';
        shell.cp(svgFile, svgFileCopy);
        console.log('copy svg file to:', svgFileCopy);

    });

}
