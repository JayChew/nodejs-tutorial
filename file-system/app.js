const fs = require("fs");
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return;
  }
  console.log(data);
})

const contentToBeWritten = "Hello, this is a test file!";
fs.appendFile('example.txt', contentToBeWritten, (err) => {
  if (err) {
    console.error(err);
    return;
  }
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