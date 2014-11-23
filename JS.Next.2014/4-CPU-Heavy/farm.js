/*global require, process, console*/

(function() {
  'use strict';
  var workerFarm = require('worker-farm'),
        workers = workerFarm(require.resolve('./child')),
        cluster = require('cluster'),
        os = require('os'),
        http = require('http'),
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
      workers(2748768555511, function(err, result) {
        res.end(result);
      });
    });

    console.log('Listening at port ' + PORT);
    server.listen(PORT);
  }

  clusterIt();
} ());
