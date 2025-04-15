const os = require('os'); // OS module
// Get the current operating system information
console.log('OS Architecture:', os.arch(), '\n'); // Prints the architecture of the OS (e.g., x64, arm64)
console.log('OS Platform:', os.platform(), '\n'); // Prints the platform of the OS (e.g., linux, win32, darwin)
console.log('OS Type:', os.type(), '\n'); // Prints the type of OS (e.g., Linux, Windows_NT, Darwin)
console.log('OS Release:', os.release(), '\n'); // Prints the OS release version (e.g., 5.4.0-42-generic, 10.0.19041)
console.log('OS Hostname:', os.hostname(), '\n'); // Prints the hostname of the OS
console.log('OS Uptime:', os.uptime(), 'seconds\n'); // Prints the system uptime in seconds
console.log('OS Total Memory:', os.totalmem(), 'bytes\n'); // Prints the total system memory in bytes
console.log('OS Free Memory:', os.freemem(), 'bytes\n'); // Prints the free system memory in bytes
console.log('OS CPU Information:', os.cpus(), 'bytes\n'); // Prints the CPU information (array of objects with model, speed, and times)
console.log('OS Network Interfaces:', os.networkInterfaces(), 'bytes\n'); // Prints the network interfaces (array of objects with address, family, and internal)
console.log('OS User Information:', os.userInfo(), 'bytes\n'); // Prints the user information (object with username, uid, gid, and shell)