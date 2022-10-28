var http = require('http');
var fs = require("fs");

http.createServer(function(req, res) {
  console.log("Incoming request received");
  //res.writeHead(200, {'content-type': 'text/html'});
  //res.write('Hello World');
  //res.end();
  console.log(req.url);
  switch (req.url) {
    case "/":
    case "/home":

      fs.readFile('home.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
      })
      break;

    case "/about":
      fs.readFile('about.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
      })
      break;

    case "/contact":
      fs.readFile('contact.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
      })
      break;
  }

}).listen(8080);