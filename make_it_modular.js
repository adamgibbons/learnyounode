var lslib = require('./fileFilter');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  if (err) {
    return err;
  } else {
    for (var i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }

});
