const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'files');
const fileCopy = path.join(__dirname, 'files-copy');

fs.rm(fileCopy, { recursive: true, force: true }, err => {
  if (err) console.log(err);
  else {
    fs.readdir(file, { withFileTypes: true }, (err, data) => {
      if (err) console.log(err);
      fs.mkdir(fileCopy, { recursive: true, force: true }, err => {
        if (err) console.log(err);
        data.forEach(chunk => {
          const chunkFile = path.join(__dirname, 'files', chunk.name);
          const chunkFileCopy = path.join(__dirname, 'files-copy', chunk.name)
          fs.copyFile(chunkFile, chunkFileCopy, err => {
            if (err) console.log(err);
          });
        });
      });
    });
  }
});

