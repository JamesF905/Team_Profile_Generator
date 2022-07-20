const fs = require('fs');

let path = 'dist'; // set destination folder for the generated files and folders
let css_path = `${path}/assets/css`; // set destination folder for the css
let images_path = `${path}/assets/images`; // set destination folder for the images

//Create all directories
fs.mkdirSync(css_path, { recursive: true },  (err) =>
    err ? console.error(err) : console.log('Success!')
);

fs.mkdirSync(images_path, (err) =>
    err ? console.error(err) : console.log('Success!')
);

function copyFILES(source, destination){
    fs.copyFile(source, destination, (err) =>
    err ? console.error(err) : console.log(`Success! - ${source} copied to ${destination}`) )
}


copyFILES('src/index.html', `${path}/index.html`);
copyFILES('src/assets/css/styles.css',`${css_path}/styles.css`);

fs.readdirSync('src/assets/images/').forEach(item => {
    copyFILES(`src/assets/images/${item}`,`${images_path}/${item}`);
});