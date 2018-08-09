var fs = require('fs'),
    fse = require('fs-extra'),
    Promise = require('bluebird');

fs = Promise.promisifyAll(fs);
fse = Promise.promisifyAll(fse);

var cwd = process.cwd(),
    svg64DirRaw = cwd + '/raw/64px/',
    svg96DirRaw = cwd + '/raw/96px/',
    svg64DirRenamed = cwd + '/renamed/64px/',
    svg96DirRenamed = cwd + '/renamed/96px/';

/**
 * 修改文件名,把特殊字符替换为中划线'-'
 * @param fileName
 * @param prefix
 * @returns {string|*}
 */
function changeFileName (fileName, prefix) {
    var name = fileName.slice(0,fileName.lastIndexOf('.')),
        ext = fileName.slice(fileName.lastIndexOf('.'));
    name = name.toLowerCase().trim();
    // 文件名只包含字母,数字和中划线,"%"替换为"percent","&"替换为"-and-"
    name = name.replace(/[^\w|\.|%|&]+/g, '-').replace('%', 'percent').replace('&', '-and-');
    // 删掉文件名末尾的中划线
    name = name.replace(/-+$/, '');
    if (prefix && name.indexOf(prefix) < 0) {
        name = prefix + name;
    }
    fileName = name + ext;
    return fileName;
}

/**
 * 把原始svg移动到新目录,对文件重命名
 */
function moveFiles () {
    return fse.copyAsync(svg64DirRaw, svg64DirRenamed).then(function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('copy 64px successful!');
    }).then(function () {
        return fse.copyAsync(svg96DirRaw, svg96DirRenamed).then(function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('copy 96px successful!');
        });
    }).then(function () {
        return listFiles(svg64DirRenamed).then(function (files) {
            if (files && files.length) {
                var renamings = files.map(function (file) {
                    return fs.rename(svg64DirRenamed + file, svg64DirRenamed + changeFileName(file), function (err) {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
                return Promise.all(renamings).then(function () {
                    console.log('64px all renamed');
                }).catch(console.error);
            }
        }).then(function () {
            return listFiles(svg96DirRenamed).then(function (files) {
                if (files && files.length) {
                    var renamings = files.map(function (file) {
                        return fs.rename(svg96DirRenamed + file, svg96DirRenamed + changeFileName(file), function (err) {
                            if (err) {
                                return console.error(err);
                            }
                        });
                    });
                    return Promise.all(renamings).then(function () {
                        console.log('96px all renamed');
                    }).catch(console.error);
                }
            });
        });
    });
}


/**
 * 获取目录下的所有文件
 * @param dir
 */
function listFiles (dir) {
    return fs.readdirAsync(dir).then(function (files) {
        return files;
    }).catch(console.error);
}

module.exports = moveFiles();

