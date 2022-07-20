const fs = require('fs');
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


function generate(team){
    //if (team.getRoll() === "Manager")
    let roll = team.getRoll();
    let memberID = team.getId();
    let memberName = team.getName();
    let memberEmail = team.getEmail();
    let unique;

    roll === "Manager" ? unique = team.getOfficenumber():
    roll === "Engineer" ? unique = `<a href="https://github.com/${team.getGithub()}`:
    roll === "Intern" ? unique = team.getSchool():
    null

    let cardHTML = `
    <figure class="card">
        <div class="card_header">
            <img class="icon" src="./assets/images/${roll.toLowerCase()}.png"/>
            <h2 class="name">Jack<span class="title">(${memberName})</span></h2>                
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


module.exports = generate;
