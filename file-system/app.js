const fs = require("fs"); // File System module
fs.readFile('example.txt', 'utf8', (err, data) => { // Read file asynchronously
  if (err) { // Handle error
    console.error(err) // Log error if any
    return; // Exit if error occurs
  }
  console.log(data); // Log file content
  console.log("File read successfully");
  // You can perform further operations on the file content here
})

const contentToBeWritten = "Hello, this is a test file!"; // Content to be written to the file
fs.appendFile('example.txt', contentToBeWritten, (err) => { // Append content to the file
  if (err) { // Handle error 
    console.error(err); // Log error if any
    return; // Exit if error occurs
  }
  // If no error, log success message
  console.log("Content has been appended successfully");
}
);

// fs.writeFile('example.txt', contentToBeWritten, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File has been written successfully");
// });