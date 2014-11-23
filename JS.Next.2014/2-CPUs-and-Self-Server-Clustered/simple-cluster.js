/* global require, console */

(function() {
  'use strict';
  var cluster = require('cluster'),
        numCPUs = require('os').cpus().length,
        i = 0;

  if (cluster.isMaster) {
    // Fork workers.
    for (i; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
      console.log(code);
      console.log(signal);
    });
  } else {
    console.log('WORK WORK');
  }
} ());


