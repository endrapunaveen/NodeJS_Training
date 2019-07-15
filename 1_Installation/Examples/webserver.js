var http = require('http');

function processRequest(req, res) {
    //console.log("got the request....");
    var body = "Thanks for your request!!!\n";
    var contentLength = body.length;

    res.writeHead(200, {
      'Content-Length': contentLength,
      'Content-Type': 'text/plain'
    });

    res.end(body);
}

var server = http.createServer(processRequest);
server.listen(8080);
