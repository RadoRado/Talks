var cluster = require("cluster"),
      os = require("os"),
      http = require("http"),
      fs = require("fs"),
      PORT = process.env.PORT || 8000,
      server;

function clusterIt() {
  if(cluster.isMaster) {
    os.cpus().forEach(function() {
      cluster.fork();
    });
  } else {
    workWork();
  }
}

function workWork() {
  server = http.createServer(function(req, res) {
    fs.readFile(__filename, "utf8", function(err, data) {
      res.end(data);
    });
  });

  console.log("Listening at port " + PORT);
  server.listen(PORT);
}

clusterIt();
