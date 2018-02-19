var fs = require('fs');

fs.readdir('./', function(err, data) {
  fs.writeFile('./data.txt', data, function() {
    console.log('dane zostaly zapisane');
  });
});