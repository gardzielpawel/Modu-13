var fsReaddir = require('fs-readdir');

fsReaddir('../Moduł 13', function _cb(err, filepaths) {
    console.log('callback err:', err)
    console.log('callback res:', filepaths)
  });