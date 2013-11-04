var fs = require('fs');

var fileExtension = process.argv[3];

fs.readdir(process.argv[2], callback)

function callback(err, files) {
  checkFileEnding(files, fileExtension);
};

function checkFileEnding(files, fileExtension) {
  for (var i = 0; i < files.length; i++) {
    if( files[i].split('.')[1] == fileExtension ) {
      console.log(files[i]);
    }
  }
};