var http = require('http');
var currentdate = require('./mymodule')

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currrently: " + currentdate.myDateTime());
  res.end('Hello World!');
}).listen(8080);
