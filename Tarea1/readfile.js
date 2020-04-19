const fs = require('fs');
const Read = {}

function countWord(word){
    fs.readFile('./archivo.txt',function(err,data){
        if (err){
            console.log(err);        
        }
        datafile = data.toString();
        result = datafile.split(word).length - 1;
        word = word.trim();
        if (result > 0) {
            console.log(`La palabra \"${word}\" se encuentra ${result} vez.`);
        }
        else{
            console.log(`La palabra \"${word}\" se encuentra ${result} veces.`);
        }
        
    })
}

Read.countWord = countWord;
module.exports = Read;