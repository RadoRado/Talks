var http = require("http"),
      fs = require("fs"),
      PORT = process.env.PORT || 8000,
      server;

server = http.createServer(function(req, res) {
  fs.readFile(__filename, "utf8", function(err, data) {
    res.end(data);
  });
});

console.log("Listening at port " + PORT);
server.listen(PORT);
