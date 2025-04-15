const moduleExportFunc = require('./module-export-func');
const message = moduleExportFunc.sayHello('Devcell'); // Call the function from the imported module
console.log(message); // prints: Hello, Devcell!
// Compare this snippet from crypto/app.js:

const math = require('./math'); // Import the math module
const sum = math.add(5, 3); // Call the add function from the math module
const difference = math.subtract(5, 3); // Call the subtract function from the math module
console.log(`Sum: ${sum}`); // prints: Sum: 8
console.log(`Difference: ${difference}`); // prints: Difference: 2
// Compare this snippet from crypto/c.js: