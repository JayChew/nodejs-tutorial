const http = require('http'); // HTTP module

// Create an HTTP server
const hostname = '127.0.0.1'; // Localhost
const port = 3000 // Port number
const server = http.createServer((req, res) => { // Request handler
  // Log the request method and URL
  console.log(`${req.method} ${req.url}`);
  // Set the response HTTP headers
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  res.end('Okay'); // End the response with 'Okay'
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => { // Callback function when server starts
  // Log the server address and port
  console.log(`Server running at http://${hostname}:${port}/`);
})