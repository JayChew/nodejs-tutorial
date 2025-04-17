const http = require('http'); // HTTP module
const url = require('url'); // URL module
const queryString = require('querystring'); // Query string module

// Create an HTTP server
const hostname = '127.0.0.1'; // Localhost
const port = 3000 // Port number

// // Define exact and pattern-based routes
// const routes = [
//   {
//     pattern: /^\/$/, // Matches "/"
//     handler: (req, res) => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('Welcome to Homepage\n');
//     },
//   },
//   {
//     pattern: /^\/about$/, // Matches "/about"
//     handler: (req, res) => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('About Page\n');
//     },
//   },
//   {
//     pattern: /^\/userId\/([^/]+)$/, // Matches "/userId/:id"
//     handler: (req, res, match) => {
//       const userId = match[1]; // Extracted ID from RegExp group
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: `User ID is ${userId}` }));
//     },
//   },
// ];


const routes = { // Define routes
  '/': (req, res) => { // Route for root URL
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
    res.end('Welcome to Homepage\n'); // End the response with 'Welcome to Homepage'
  },
  '/about': (req, res) => { // Route for '/about'
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
    res.end('About Page\n'); // End the response with 'About Page'
  },
  '/notfound': (req, res) => { // Route for '/notfound'
    res.writeHead(404, { 'Content-Type': 'text/plain' }); // Set response header to plain text
    res.end('Page Not Found\n'); // End the response with 'Contact Page'
  },
  '/userId': (req, res) => { // Route for '/userId'
    const { pathname } = url.parse(req.url, true); // Parse the URL and extract the pathname
    const userId = pathname.split('/')[2]; // Extract user ID from URL
    res.writeHead(200, { 'Content-Type': 'application/json' }); // Set response header to JSON
    res.end(JSON.stringify({ message: `User ID is ${userId}` })); // End the response with JSON
  }
}

// Middleware Function for logging request
const loggerReq = (req, res, next) => { // Middleware function
  console.log(`${req.method} request made to ${req.url}`); // Log the request method and URL
  next(req, res); // Call the next middleware or route handler
}

// Create a server instance
const server = http.createServer((req, res) => { // Request handler

  // x-www-form-urlencoded data
  // if (req.method === 'POST' && req.url === '/submit') { // Check if the request method is POST and URL is '/submit'
  //   let body = ''; // Initialize an empty string to store the request body

  //   // Listen for data events
  //   req.on('data', chunk => { // Listen for data events
  //     body += chunk; // Append the chunk to the body string
  //   });

  //   // Listen for end event
  //   req.on('end', () => { // Listen for end event
  //     const queryObject = queryString.parse(body); // Parse the body string into an object
  //     res.writeHead(200, { 'Content-Type': 'application/json' }); // Set response header to JSON
  //     res.end(JSON.stringify({ message: 'Form data received', queryObject })); // End the response with JSON
  //   });
  // }
  // // Log the request method and URL
  // console.log(`${req.method} ${req.url}`);

  // loggerReq(req, res, (req, res) => {
  //   const { pathname } = url.parse(req.url, true); // Parse the URL and extract the pathname
  //   const userId = pathname.split('/')[2]; // Extract user ID from URL
  //   res.writeHead(200, { 'Content-Type': 'application/json' }); // Set response header to JSON
  //   res.end(JSON.stringify({ message: `User ID is ${userId}` })); // End the response with JSON
  // });

  // const { pathname } = url.parse(req.url, true); // Parse the URL and extract the pathname
  // console.log(pathname);
  // // Check if exact route exists
  // if (routes[pathname]) {
  //   routes[pathname](req, res);
  // }
  // // Check if route matches /userId/<something>
  // else if (pathname.startsWith('/userId/')) {
  //   const userId = pathname.split('/')[2];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify({ message: `User ID is ${userId}` }));
  // }
  // else {
  //   routes['/notfound'](req, res);
  // }

  // // Set the response HTTP headers
  // res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  // res.end('Okay'); // End the response with 'Okay'

  // if (req.method === 'GET') { // Check if the request method is GET
  //   res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  //   res.end('Hello World\n'); // End the response with 'Hello World'
  // }
  // else if (req.method === 'POST') { // Check if the request method is POST
  //   res.writeHead(200, { 'Content-Type': 'application/json' }); // Set response header to JSON
  //   res.end(JSON.stringify({ message: 'Hello World' })); // End the response with JSON
  // }
  // else { // For any other request method
  //   res.writeHead(405, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  //   res.end('Method Not Allowed\n'); // End the response with 'Method Not Allowed'
  // }
  // // Log the request method and URL
  // console.log(`${req.method} ${req.url}`);
  // // Set the response HTTP headers
  // res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  // // End the response with 'Okay'
  // res.end('Okay'); // End the response with 'Okay'

  // if (req.method === 'GET' && req.url === '/') { // Check if the request method is GET and URL is '/' 
  //   res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  //   res.end('Hello World\n'); // End the response with 'Hello World'
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  //   res.end('Not Found\n'); // End the response with 'Not Found'
  // }

  // if (req.method === 'POST' && req.url === '/submit') { // Check if the request method is POST and URL is '/submit' 
  //   let body = ''; // Initialize an empty string to store the request body

  //   // Listen for data events
  //   req.on('data', chunk => { // Listen for data events
  //     body += chunk.toString(); // Append the chunk to the body string
  //   });

  //   // Listen for end event
  //   req.on('end', () => { // Listen for end event
  //     res.writeHead(200, { 'Content-Type': 'application/json' }); // Set response header to JSON
  //     res.end(JSON.stringify({ message: 'Data received', data: body })); // End the response with JSON
  //   });
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'text/plain' }); // Set response header to plain text
  //   res.end('Not Found\n'); // End the response with 'Not Found'
  // }

  // if (req.method === 'GET' && req.url.startsWith('/search')) { // Check if the request method is GET and URL starts with '/search'
  //   const query = req.url.split('?')[1]; // Extract the query string from the URL
  //   res.writeHead(200, { 'Content-Type': 'application/json' }); // Set response header to JSON
  //   res.end(JSON.stringify({ message: 'Search query received', query })); // End the response with JSON 
  // }

  // if (req.method === 'GET' && req.url.startsWith('/search')) { // Check if the request method is GET and URL starts with '/search'
  //   const queryObject = url.parse(req.url, true).query; // Parse the URL and extract the query parameters
  //   res.writeHead(200, {
  //     'Content-Type': 'application/json',
  //     'custom-header': 'Node JS Server',
  //     'custom-tracking': '123456789',
  //   }); // Set response header to JSON
  //   res.end(JSON.stringify({ message: 'Search query received', queryObject: queryObject })); // End the response with JSON
  // } else {
  //   res.writeHead(404, {
  //     'Content-Type': 'text/plain',
  //   }); // Set response header to plain text
  //   res.end('Not Found\n'); // End the response with 'Not Found'
  // }
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => { // Callback function when server starts
  // Log the server address and port
  console.log(`Server running at http://${hostname}:${port}/`);
})