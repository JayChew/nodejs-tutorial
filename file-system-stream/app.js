const fs = require('fs'); // Importing the 'fs' module

// const readableStream = fs.createReadStream('./example.txt', { // Creating a readable stream
//   encoding: 'utf8', // Specify the encoding
// });

// readableStream.on('data', (chunk) => { // Listening for 'data' events
//   console.log('Data chunk:', chunk); // Log the chunk of data
// });

// readableStream.on('end', () => { // Listening for 'end' event
//   console.log('Finished reading the file.'); // Log when reading is complete
// });

// readableStream.on('error', (err) => { // Listening for 'error' events
//   console.error('Error reading the file:', err); // Log any errors
// });

// const writableStream = fs.createWriteStream('./output.txt', { // Creating a writable stream
//   encoding: 'utf8', // Specify the encoding
// });

// const dataToWrite = 'Hello, this is a test message!'; // Data to write to the file

// writableStream.write(dataToWrite, (err) => { // Writing data to the file
//   if (err) { // Check for errors
//     console.error('Error writing to the file:', err); // Log any errors
//   } else { // If no errors
//     console.log('Data written to the file successfully.'); // Log success message
//   }
// });

// End the stream, and log immediately after calling end()
// Note: This does not mean the data has been flushed yet
// writableStream.end(() => {
//   console.log('✅ [end callback] Stream has been ended (but data may still be flushing).');
// });

// Listen for 'finish' event — triggered when all data is flushed and file is closed
// This is the final event
// writableStream.on('finish', () => {
//   console.log('🏁 [finish event] All data has been written and file is closed.');
// });

// const readableStream = fs.createReadStream('./example.txt'); // Creating a readable stream
// const writableStream = fs.createWriteStream('./example-output.txt'); // Creating a writable stream
// readableStream.pipe(writableStream); // Piping the readable stream to the writable stream
// // This means data from the readable stream will be written to the writable stream
// writableStream.on('finish', () => { // Listening for 'finish' event
//   console.log('File Copied Successfully.'); // Log when writing is complete
// }); // End of writable stream event listener
// // Note: The 'finish' event is triggered when all data has been flushed and the file is closed

// const readline = require('readline'); // Importing the 'readline' module

// const readableStream = fs.createReadStream('./example.txt'); // Creating a readable stream

// const rl = readline.createInterface({ // Creating a readline interface
//   input: readableStream, // Input stream
//   output: process.stdout, // Output stream
//   terminal: false, // Not a terminal
// });

// rl.on('line', (line) => { // Listening for 'line' events
//   console.log('Line from file:', line); // Log each line read from the file
// });

// rl.on('close', () => { // Listening for 'close' event
//   console.log('Finished reading the file.'); // Log when reading is complete
// }); // End of readline event listener
// // Note: The 'line' event is triggered for each line read from the input stream
// // The 'close' event is triggered when the input stream is closed

// Asynchronous mkdir (non-blocking)
// Note: This will not block the event loop
// This is the preferred way to create directories in production code
// Note: This will not throw an error if the directory already exists
// Note: The asynchronous version is preferred for production code
// because it does not block the event loop and allows other operations to continue
// Note: The callback function is called when the directory is created
// fs.mkdir('./new-directory', (err) => { // Creating a new directory
//   if (err) { // Check for errors
//     return console.error('Error creating directory:', err); // Log any errors
//   }
//   console.log('Directory created successfully.'); // Log success message
// });

// Synchronous mkdir (blocking)
// Note: This will block the event loop until the directory is created
// This is not recommended in production code
// but can be useful for scripts or one-off tasks
// Note: This will throw an error if the directory already exists
// Note: The synchronous version is not recommended for production code
// because it blocks the event loop and can lead to performance issues
// fs.mkdirSync('./new-directory-sync'); // Creating a new directory synchronously
// console.log('Directory sync created successfully.'); // Log success message

// Asynchronous rmdir (non-blocking)
// Note: This will not block the event loop
// This is the preferred way to remove directories in production code
// Note: This will not throw an error if the directory does not exist
// Note: The callback function is called when the directory is removed
// fs.readdir('./', (err, files) => { // Reading the contents of the current directory
//   if (err) { // Check for errors
//     return console.error('Error reading directory:', err); // Log any errors
//   }
//   console.log('Directory contents:', files); // Log the contents of the directory
// });

// Synchronous rmdir (blocking)
// Note: This will block the event loop until the directory is removed
// This is not recommended in production code
// but can be useful for scripts or one-off tasks
// Note: This will throw an error if the directory does not exist
// Note: The synchronous version is not recommended for production code
// because it blocks the event loop and can lead to performance issues
// const files = fs.readdirSync('./'); // Reading the contents of a file synchronously
// console.log('Directory content:', files); // Log the contents of the file

// Asynchronous rmdir (non-blocking)
// Note: This will not block the event loop
// This is the preferred way to remove directories in production code
// Note: This will not throw an error if the directory does not exist
// Note: The callback function is called when the directory is removed
const dirName = 'new-directory'; // Directory name
if (fs.existsSync(dirName)) { // Check if the directory exists
  console.log('Directory already exists.'); // Log message
} else {
  console.log('Directory does not exist.'); // Log message
}

