var cluster = require("cluster"),
      os = require("os"),
      http = require("http"),
      fs = require("fs"),
      prime = require("./prime"),
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
    var factor = prime.primeFactorization(2748768555511);
    res.end(prime.displayFactorization(factor));
  });

  console.log("Listening at port " + PORT);
  server.listen(PORT);
}

clusterIt();
