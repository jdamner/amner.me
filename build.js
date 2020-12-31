const uncss = require('uncss');
const fs = require('fs');


var files   = ["_site/**/*.html"],
    options = {
        banner       : false,
        csspath      : '_site/assets/',
        htmlroot     : '_site',
        ignoreSheets : [/fonts.googleapis/],
        stylesheets  : ['/assets/style.css'],
    };

uncss(files, options, function (error, output) {
    fs.writeFileSync("_site/assets/style.css", output);
});