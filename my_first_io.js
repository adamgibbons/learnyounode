var fs = require('fs');
var filename = process.argv[2];

var data = fs.readFileSync(filename, 'utf-8');

var lines = data.split('\n').length - 1;

console.log(lines);

