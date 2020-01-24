'use strict ';

const fs = require('fs');
const util = require('util');

const reader = ('./lib/reader.js');

let file = `${__dirname}/data/person.json`;

// First Way to read a file with FS (callback)
// fs.readFile(file , (error,data) => {
//     if(error) {throw error;}
//     let objData = data.toString();
//     let obj = JSON.parse(objData);
//     // console.log('data : ', obj.firstName );
//     console.log('obj : ', obj);
// });


// Second Way to read a file with FS (Promisify)
let readFilepromisify = util.promisify(fs.readFile);

readFilepromisify(file)
    .then(data => console.log('data promisify : ',JSON.parse(data.toString())))
    .catch(error => console.error('There is an error',error))

    



