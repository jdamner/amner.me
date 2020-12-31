const uncss = require('uncss');
const fs = require('fs');
const sha256 = require('js-sha256').sha256;
const firebase_config = require('./.firebase/firebase.json');
const base64 = require('base-64');


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


fs.readFile("_includes/javascript.html", function (error, data) {
    data = String(data);
    data = data.replace("<script>\n", "");
    data = data.replace("\n</script>", "");
    hash = sha256(data);
    hash = base64.encode(hash);
    new_firebase = JSON.stringify(firebase_config).replace("{{SHA_HASH}}", hash);
    fs.writeFileSync('./firebase.json', new_firebase);
});