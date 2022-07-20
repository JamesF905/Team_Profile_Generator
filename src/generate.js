/*
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
let images_path = `${path}/assets/images`; // set destination folder for the images

//Create all directories
fs.mkdirSync(css_path, { recursive: true },  (err) =>
    err ? console.error(err) : console.log('Success!')
);

createFromSource('src/index.html', `${path}/index.html`);
createFromSource('src/assets/css/styles.css',`${css_path}/styles.css`);*/

/*
function copyFILES(source, destination){
    fs.copyFile(source, destination, (err) =>
    err ? console.error(err) : console.log(`Success! - ${source} copied to ${destination}`) )
}

let path = 'dist'; // set destination folder for the generated files and folders
let css_path = `${path}/assets/css`; // set destination folder for the css
let images_path = `${path}/assets/images`; // set destination folder for the images

//copyFILES('src/index.html', `${path}/index.html`);
copyFILES('src/assets/css/styles.css',`${css_path}/styles.css`);
*/
const fs = require('fs');

function generate(team){
    let cardHTML = '';
    for(i=0; i<team.length; i++){
        let roll = team[i].getRole();
        let memberID = team[i].getId();
        let memberName = team[i].getName();
        let memberEmail = team[i].getEmail();
        let unique;

        roll === "Manager" ? unique = `Office Number: ${team[i].getOfficenumber()}`:
        roll === "Engineer" ? unique = `<a href="https://github.com/${team[i].getGithub()}`:
        roll === "Intern" ? unique = `School: ${team[i].getSchool()}`:
        null

        cardHTML += `
        <figure class="card">
            <div class="card_header">
                <img class="icon" src="./assets/images/${roll.toLowerCase()}.png"/>
                <h2 class="name">${memberName}<span class="title">(${roll})</span></h2>                
            </div>
            <div class="card_body">
                <ul>
                    <li>Employee ID: ${memberID}</li>
                    <li><a href="mailto:${memberEmail}">${memberEmail}</a></li>
                    <li>${unique}</li>
                </ul>
            </div>
        </figure>`;
    }
    let mainHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico">
        <link rel="stylesheet" href="assets/css/styles.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>        
            <img id="logo" src="./assets/images/logo_grey.png"/>
            <h1>My Team Generator</h1>        
        </header>
        <main>
            ${cardHTML}
        </main>
    </body>
    </html>`;

    fs.writeFile('./dist/index.html', mainHTML, function(err) {
        if (err) console.error(err);
        console.log('Success! index.html created');
    });
}


module.exports = generate;
