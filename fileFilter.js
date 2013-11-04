var fs = require('fs');

module.exports = function(directory, fileExtension, callback) {
  fs.readdir(directory, function(err, files) {
    if (err) {
      callback(err, null);
    } else {
      for (var i = 0; i < files.length; i++) {
        var results = [];
        if( files[i].split('.')[1] == fileExtension ) {
          results.push(files[i]);
        }
        callback(null, results);
      }
    }
  });
};
