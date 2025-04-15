const fs = require('fs'); // File System module
const path = require('path'); // Path module

// Read file asynchronously
const fullPath = path.join('example', '1.txt'); // Construct the full path
// const fullPath = path.join(__dirname, 'example', '1.txt'); // Construct the full path using __dirname

// Check if the file exists
if (fs.existsSync(fullPath)) {
  // If the file exists, read it 
  console.log('Path exists:', fullPath);
} else {
  // If the file does not exist, log a message
  console.log('Path does not exist:', fullPath);
}