const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello, World! and JB made some changes on Sunday afternoon - now in public-demo\n");
}).listen(process.env.PORT);

console.log('App is running...and JB made some changes');
