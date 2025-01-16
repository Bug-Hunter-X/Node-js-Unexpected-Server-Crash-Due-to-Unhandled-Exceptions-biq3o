//Improved Version with Error Handling
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  try {
    // Simulate a database error
    const result = someDatabaseCall(); //Simulate a database call that may throw an error
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Helper function to simulate database call
function someDatabaseCall(){
  //Simulate error 50% of the time
  if(Math.random()<0.5) throw new Error('Database Error!');
  return {status: 'success'};
}
//This version handles the exception gracefully and prevents the server from crashing.