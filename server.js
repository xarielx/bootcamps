var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
  var parsedUrl = url.parse(request.url);

  if (request.method === "GET" && parsedUrl.pathname === "/listings") {
    response.statusCode = 200;
    response.write(listingData);
  }
  else {
    response.statusCode = 404;
    response.write("Bad gateway error");
  }
  response.end();
};

fs.readFile('listings.json', 'utf8', function (err, data) {
  listingData = data;
  //Callbacks the function to start the server
  startServer();
});

function startServer() {
  server = http.createServer(requestHandler);
  server.listen(port, function () {
    console.log("Server listening on: http://localhost:" + port);
  });
}


