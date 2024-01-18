const fs = require('node:fs/promises');
const path = require('node:path');

async function readFilesInDirectory() {
  try {
    const files = await fs.readdir(path.join(__dirname, 'secret-folder'));
    for (const file of files) {
      const filePath = path.join(__dirname, 'secret-folder', file);
      const fileStats = await fs.stat(filePath);
      if (fileStats.isFile()) {
        const fileArray = file.split('.');
        const fileSizeKB = fileStats.size / 1024;
        console.log(
          `${fileArray[0]} - ${fileArray[1]} - ${fileSizeKB.toFixed(3)} KB`,
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
}

readFilesInDirectory();
