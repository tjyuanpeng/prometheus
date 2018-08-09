module.exports = function () {
    // 获取当前 IE 版本
    var ie = (function(){

        var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');

        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );

        return v > 4 ? v : undef;

    }());

    // 当浏览器是 IE8- 时，通过重设 :before, :after 伪元素的样式强制浏览器重新渲染。
    // 因为无法准确获得浏览器初次渲染 iconfont 的时间，所以暂时直接固定在 3 秒后强制重新渲染。
    if (ie && ie < 9) {
        setTimeout(function () {
            var head = document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            style.styleSheet.cssText = ':before,:after{content:none !important}';
            head.appendChild(style);

            setTimeout(function(){
                head.removeChild(style);
            }, 0);
        }, 3000);
    }
};
