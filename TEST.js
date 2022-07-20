const fs = require('fs');

/*
fs.readFile('src/index.html', 'utf8', (error, data) =>
error ? console.error(error) : html_source(data)
);


function html_source(source){
    console.log(source);
    fs.writeFile('dist/index.html', source, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

fs.mkdir('dist/assets/css', (err) =>
    err ? console.error(err) : console.log('Success!')
);
*/

/*
fs.mkdir(css_path, { recursive: true }, function(){
    fs.readFile('src/index.html', 'utf8', (error, data) => {
        fs.writeFile(path, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
    })
});*/

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