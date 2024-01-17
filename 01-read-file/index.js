const fs = require('node:fs');
const path = require('node:path');
const file = path.resolve('./01-read-file/text.txt');
const reader = fs.createReadStream(file);
reader.on('error', (err) => {
  console.error('Error:', err);
});
reader.on('data', (chunk) => console.log(chunk.toString()));
