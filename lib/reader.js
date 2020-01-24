'use strict';

const fs = require('fs');
const util = require('util');

const readWithCallBack = (file,callback)=>
{
    fs.readFile(file , (error,data)=>
    {
        if(error) {callback(error)}
        callback(null,data);
    });
}


module.exports = {readWithCallBack};