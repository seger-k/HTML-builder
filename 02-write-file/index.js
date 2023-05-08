const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');

const file = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(file);
const goodbye = () => {
  stdout.write('goodbye!');
  exit();
};

stdout.write('hello, please enter text:\n');
stdin.on('data', chunk => {
  let text = chunk.toString().trim();
  text === 'exit' ? goodbye() : writeStream.write(chunk);
});
process.on('SIGINT', goodbye);
