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
let path = 'dist';
let css_path = `${path}/assets/css`;
/*
fs.mkdir(css_path, { recursive: true }, function(){
    fs.readFile('src/index.html', 'utf8', (error, data) => {
        fs.writeFile(path, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
    })
});*/
/*
fs.readFile('src/index.html', 'utf8', (error, data) => {
    fs.writeFile(path, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
})*/

fs.writeFile(path, data, (err) =>
err ? console.error(err) : console.log('Success!'))