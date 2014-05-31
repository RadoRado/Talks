"use strict";

var map = function(f, thing) {
  if(thing.map) {
    return thing.map(f);
  }

  throw new Error("Object given does not implement map");
};

var square = function(x) {
  return x * x;
};

console.log(map(square, [1,2,3]));

Object.prototype.map = function(f) {
  var result = {}, that = this;

  Object.keys(this).forEach(function(key) {
    result[key] = f(key, that[key]);
  });

  return result;
};

var obj = {
  "courses" : ["Programming 101", "Frontend JavaScript", "Core Java"]
};

console.log(map(function(key, value) {
  return map(function(course) {
    return course + "!";
  }, value);
}, obj));


String.prototype.map = function(f) {
  var result = this.split("");
  return map(f, result).join("");
};

console.log(map(function(ch) {
  return ch.toUpperCase();
}, "javascript"));
