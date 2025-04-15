const cryto = require('crypto');

const hash = cryto.createHash('sha256'); // Create a hash object using SHA-256 algorithm
hash.update('hello world'); // Update the hash with the string 'hello world'
const hashedValue = hash.digest('hex'); // Get the hashed value in hexadecimal format
console.log(hashedValue); // prints the hashed value of 'hello world'