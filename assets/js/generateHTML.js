const fs = require('fs');

//Function that will read a fille from a source parameter, and create another file to send to the destination parameter
function createFromSource(source, destination) {
    fs.readFile(source, 'utf8', function (err, data) {
            if (err) console.error(err);
            //Do your processing, MD5, send a satellite to the moon, etc.
            fs.writeFile(destination, data, function(err) {
                if (err) console.error(err);
                console.log('Success!');
            });
        });
}

let path = 'dist'; // set destination folder for the generated files and folders
let css_path = `${path}/assets/css`; // set destination folder for the css

//Create all directories
fs.mkdirSync(css_path, { recursive: true },  (err) =>
    err ? console.error(err) : console.log('Success!')
);

createFromSource('src/index.html', `${path}/index.html`);
createFromSource('src/assets/css/styles.css',`${css_path}/styles.css`);