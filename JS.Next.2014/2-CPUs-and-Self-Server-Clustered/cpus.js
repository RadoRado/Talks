/* global require, console */

(function() {
  'use strict';
  var cpus = require('os').cpus(),
        numCPUs = require('os').cpus().length;

  console.log(cpus);
  console.log(numCPUs);
}());

