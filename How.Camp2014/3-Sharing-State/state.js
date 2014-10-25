var cluster = require("cluster"),
      os = require("os"),
      http = require("http"),
      fs = require("fs"),
      PORT = process.env.PORT || 8000,
      server,
      state = 0;

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
    state += 1;
    var message = ["I am", cluster.worker.id, "And my sate is", state].join(" ");
    console.log(message);
    fs.readFile(__filename, "utf8", function(err, data) {
      res.end(data);
    });
  });

  console.log("Listening at port " + PORT);
  server.listen(PORT);
}

clusterIt();
