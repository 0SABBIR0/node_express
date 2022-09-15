//setTimeout(() => {
 //   console.log("Hello World");
//},2000);
//console.log(global);
//const lod = require('lodash');
//const people2 = require('./index');
//console.log(lod.last(people2));

/*
//Path module
const { basename } = require('path');
const path = require('path');
const myPath = 'D:/WEB DESIGN/node_express/apps.js';
console.log(path.extname(myPath));
*/
const os = require('os');
//console.log(os.platform());
//console.log(os.homedir());
//console.log(os.freemem());
//console.log(os.cpus());

const fs = require('fs');
fs.writeFileSync('First_file.html','Hello World');
fs.appendFileSync('first_file.html', '\nWorld war');
//const data = fs.readFileSync('first_file.html');
//console.log(data.toString());

fs.readFile('first_file.html',(err, data) => {
    console.log(data.toString());
});
console.log("Mummy");