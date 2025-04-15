const fs = require('fs');
const path = require('path');

const fullPath = path.join('example', '1.txt');
// const fullPath = path.join(__dirname, 'example', '1.txt');
if (fs.existsSync(fullPath)) {
  console.log('Path exists:', fullPath);
} else {
  console.log('Path does not exist:', fullPath);
}