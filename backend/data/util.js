const fs = require('node:fs/promises')
// const path = require('path');
// const rootDir = path.dirname(require.main.filename);

// const pth = path.join(rootDir, 'users.json');

async function readData() {
  const data = await fs.readFile('users.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('users.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;