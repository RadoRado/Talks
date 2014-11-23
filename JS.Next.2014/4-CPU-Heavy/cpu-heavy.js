/*global require, process, console*/

(function() {
  'use strict';
  var cluster = require('cluster'),
        os = require('os'),
        http = require('http'),
        prime = require('./prime'),
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

      switch (req.url) {
        case "/heavy":
          var factor = prime.primeFactorization(2748768555511);
          res.end(prime.displayFactorization(factor));
          break;
        case "/":
        case "/soso":
          res.end("So-so worked done.");
          break;
      }


    });

    console.log('Listening at port ' + PORT);
    server.listen(PORT);
  }

  clusterIt();

} ());

