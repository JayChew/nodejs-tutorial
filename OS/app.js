const os = require('os');

console.log('OS Architecture:', os.arch(), '\n');
console.log('OS Platform:', os.platform(), '\n');
console.log('OS Type:', os.type(), '\n');
console.log('OS Release:', os.release(), '\n');
console.log('OS Hostname:', os.hostname(), '\n');
console.log('OS Uptime:', os.uptime(), 'seconds\n');
console.log('OS Total Memory:', os.totalmem(), 'bytes\n');
console.log('OS Free Memory:', os.freemem(), 'bytes\n');
console.log('OS CPU Information:', os.cpus(), 'bytes\n');
console.log('OS Network Interfaces:', os.networkInterfaces(), 'bytes\n');
console.log('OS User Information:', os.userInfo(), 'bytes\n');