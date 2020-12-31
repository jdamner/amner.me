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

const sha256 = require('js-sha256').sha256;
const firebase = require('./.firebase/firebase.json');
var hash = "";

fs.readFile("_includes/javascript.html", function (error, data) {
    data = String(data);
    data = data.replace("<script>\n", "");
    data = data.replace("\n</script>", "");
    hash = sha256(data);
    new_firebase = JSON.stringify(firebase).replace("{{SHA_HASH}}", hash);
    fs.writeFileSync('./firebase.json', new_firebase);
});