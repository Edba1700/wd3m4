'use strict';
declare function require(name:string); // Make it possible to use require in TypeScript
var fs = require('fs');

fs.readFile('files/hitch.txt', 'utf8', function(err, data) { // Read all of the file content 
    if (err) throw err;
    //console.log(data); // Print all data to the console

    let reg:RegExp = /\n| /; // Strip of all new lines and blanks
    let clean = data.split(reg); 
    //console.log(clean);
    
    let count = {};
    for(let i of clean){
        count[i] = (count[i]||0) + 1;
    }

    var sorted = []; // Declare a new array
    for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
    sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
    sorted.reverse(); // Reverse the result array 
    var topten = 10;
    var i = 0;
    while(i < topten){
        console.log((i+1)+":"+sorted[i]);
        i++;
    }
}