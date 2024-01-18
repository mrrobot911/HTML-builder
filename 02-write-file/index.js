const fs = require('node:fs');
const readline = require('node:readline');
const path = require('node:path');

const file = path.join('02-write-file', 'text.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.writeFile(path.resolve(file), '', (err) => {
  if (err) throw err;
});

console.log('Введите текст:');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Ввод завершен');
    rl.close();
  } else {
    const writeStream = fs.createWriteStream(path.resolve(file), {
      flags: 'a',
    });
    writeStream.write(input + '\n', 'utf-8');
  }
});

rl.on('SIGINT', () => {
  console.log('Ввод завершен');
  rl.close();
});
