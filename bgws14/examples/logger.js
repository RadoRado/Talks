"use strict";

var fs = require("fs");

var logger = function(logFunction) {
  return function(str) {
    logFunction(str);
  };
};

var consoleLogger = logger(console.log);
consoleLogger("There is a bug!");

var fileLogger = logger(function(str) {
  fs.appendFileSync("LOG", str);
});
fileLogger("There is a bug");
