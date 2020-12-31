const uncss = require('uncss');
const fs = require('fs');


var files   = ["_site/*.html"],
    options = {
        banner       : false,
        csspath      : '_site/assets/',
        htmlroot     : '_site',
        ignore       : ['#added_at_runtime', /test\-[0-9]+/],
        ignoreSheets : [/fonts.googleapis/],
        inject       : function(window) { window.document.querySelector('html').classList.add('no-csscalc', 'csscalc'); },
        jsdom        : {
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)',
        },
        media        : ['(min-width: 700px) handheld and (orientation: landscape)'],
        stylesheets  : ['/assets/style.css'],
        timeout      : 1000,
        userAgent    : 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)',
    };

uncss(files, options, function (error, output) {
    fs.writeFileSync("_site/assets/style.css", output);
});