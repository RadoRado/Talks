/*global require, process, console, __filename*/

(function() {
  'use strict';
  var cluster = require('cluster'),
        os = require('os'),
        http = require('http'),
        fs = require('fs'),
        PORT = process.env.PORT || 8000,
        server,
        state = 0;


  function saveState(worker, state) {
    var currentState,
          file = worker + '.json';

    try {
      currentState = require('./' + file);
    } catch(e) {
      currentState = {};
    }

    console.log(currentState);
    currentState[worker] = state;

    fs.writeFile(file, JSON.stringify(currentState), function(err, res) {
      if(err) {
        throw err;
      }

      console.log('State saved for ' + worker);
      console.log(res);
    });
  }


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
      saveState(cluster.worker.id, state);
      var message = ['I am', cluster.worker.id, 'And my state is', state].join(' ');
      console.log(message);
      fs.readFile(__filename, 'utf8', function(err, data) {
        res.end(data);
      });
    });

    console.log('Listening at port ' + PORT);
    server.listen(PORT);
  }

  clusterIt();
} ());

