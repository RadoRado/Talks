"use strict";

// Array.prototype.map
var map = function(f, arr) {
  var result = [];

  arr.forEach(function(value) {
    result.push(f(value));
  });

  return result;
};

// Array.prototype.filter
var filter = function(pred, arr) {
  var result = [];

  arr.forEach(function(value) {
    if(pred(value)) {
      result.push(value);
    }
  });

  return result;
};

// Array.prototype.reduce
var reduce = function(oper, start, arr) {
  var accumulate = start;

  arr.forEach(function(value) {
    accumulate = oper(accumulate, value);
  });

  return accumulate;
};

// Array.prototype.every
var all = function(pred, arr) {
  return arr.length === filter(pred, arr).length;
};

// Array.prototype.some
var any = function(pred, arr) {
  return filter(pred, arr).length > 0;
};

var isString = function(value) {
  return typeof value === "string";
};

// concatenates a list of strings to a single string
// [String] -> String
// Array.prototype.join
var concat = function(arr) {
  if(!all(isString, arr)) {
    throw new TypeError("List not containing only strings");
  }
  return reduce(function(a, b) {
    return a + b;
  }, "", arr);
};

var contains = function(item, arr) {
  return filter(function(value) {
    return item === value;
  }, arr).length > 0;
};

var containsAll = function(items, arr) {
  return all(function(boolValue) {
    return boolValue;
  }, map(function(needle) {
    return contains(needle, arr);
  }, items));
};



exports.fp = {
  map : map,
  filter : filter,
  reduce : reduce,
  any : any,
  all : all,
  utils : {
    concat : concat,
    isString : isString,
    contains : contains,
    containsAll : containsAll
  }
};
