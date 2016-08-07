//Script found here: https://gist.github.com/branneman/8048520

// the src path relative to node_module

if(process.env.NODE_ENV !== 'production') {
  var srcpath = '../app';
  var dstpath = 'node_modules/app';
  var fs = require('fs');
  fs.readlink(dstpath, function (err, exists) {
      // create the link only if the dest does not exist!
      if (!exists) {
          fs.symlinkSync(srcpath, dstpath, 'dir');
      }
  });
} else {
  console.log('Skipping postinstall in production mode');
}
