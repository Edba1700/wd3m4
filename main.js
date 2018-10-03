'use strict';
var fs = require('fs');
fs.readFile('files/hitch.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    //console.log(data); // Print all data to the console
    var reg = /\n| /; // Strip of all new lines and blanks
    var clean = data.split(reg);
    //console.log(clean);
    var count = {};
    for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
        var i_1 = clean_1[_i];
        count[i_1] = (count[i_1] || 0) + 1;
    }
    var sorted = []; // Declare a new array
    for (var key in count)
        sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
    sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
    sorted.reverse(); // Reverse the result array 
    var topten = 10;
    var i = 0;
    while (i < topten) {
        console.log((i + 1) + ":" + sorted[i]);
        i++;
    }
});
