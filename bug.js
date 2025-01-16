const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon Error: Unexpected Server Crash Due to Unhandled Exceptions

//The above code is a basic HTTP server. However, if an unhandled exception occurs within the requestListener function,
the server will crash without any warning. This can be extremely difficult to debug, especially in production environments.

//Example of an unhandled exception
//Let's say a database query inside requestListener throws an error

const requestListener = (request, response) => {
  response.writeHead(200);
  // Simulate a database error
  const result = someDatabaseCall();  
  response.end('Hello, World!');
};

// This will crash the server if someDatabaseCall() throws