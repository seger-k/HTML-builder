const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'secret-folder');

fs.readdir(file, { withFileTypes: true }, (err, data) => {
  if (err) console.log(err);
  else {
    data.forEach(chunk => {
      if (chunk.isFile()) {
        const currentFile = chunk.name.split('.');
        fs.stat(path.join(__dirname, 'secret-folder', chunk.name), (err, stats) => {
          const size = +(stats.size / 1024).toFixed(3);
          if (err) console.log(err);
          else {
            console.log(`${currentFile[0]} - ${currentFile[1]} - ${size}kb`);
          }
        });
      }
    });
  }
});