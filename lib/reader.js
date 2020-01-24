'use strict';

const fs = require('fs');
const util = require('util');

const readWithCallBack = (file,callback)=>
{
    fs.readFile(file , (error,data)=>
    {
        if(error) {callback(error)}
        callback(undefined,data);
    });
}

let readFilepromisify = util.promisify(fs.readFile);

const readWithPromise = (file) =>
{
    return readFilepromisify(file)
        .then(file => JSON.parse(file.toString().trim()))
        .catch(error => console.error(error))
}

module.exports = { readWithCallBack , readWithPromise };