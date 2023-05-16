'use strict'
const fs=require('fs')
const file="sync.js"
fs.readFile(file,function(err,buf){
    if(err){
        return console.log(err)
    }
    const str=buf.toString().split('\n').length-1
    console.log(str)
})