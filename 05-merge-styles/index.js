const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'styles');
const dist = path.join(__dirname, 'project-dist');

fs.readdir(file, { withFileTypes: true }, (err, data) => {
  if (err) console.log(err);
  const bundle = fs.createWriteStream(path.join(dist, 'bundle.css'));
  data = data.filter(file => path.extname(file.name).slice(1) === 'css' && file.isFile());
  data.forEach(el => {
    const readableStream = fs.createReadStream(path.join(file, el.name), 'utf8');
    readableStream.on('data', chunk => {
      bundle.write(chunk + '\n');
    });
  });
});