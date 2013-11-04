var http = require('http');

http.get(process.argv[2], function(res) {
  var message = '';

  res.on('data', function(chunk) {
    message += String(chunk);
  });

  res.on('end', function() {
    console.log(message.length);
    console.log(message);
  });

});