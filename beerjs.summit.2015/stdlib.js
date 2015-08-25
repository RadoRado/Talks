var ramda = require("ramda");

var head = function(xs) { return xs[0]; }
var tail = function(xs) { return xs.slice(1); }
var capitalize = function(xs) { return xs.toUpperCase(); }
var compose = ramda.compose;

var map = ramda.curry(function(f, xs) {
  return xs.map(f);
});

var reduce = ramda.curry(function(op, initial, xs) {
  return xs.reduce(op, initial);
});

var filter = ramda.curry(function(f, xs) {
  return xs.filter(f);
});

var replace = ramda.curry(function(what, replacement, x) {
  return x.replace(what, replacement);
});

var split = ramda.curry(function(delimiter, xs) {
  return xs.split(delimiter);
});

var join = ramda.curry(function(delimiter, xs) {
  return xs.join(delimiter);
});


var append = ramda.curry(function(xs, ys) {
  return xs.concat(ys);
});

var concat = function(xs) {
  return reduce(append, head(xs), tail(xs)); 
}

var add = ramda.curry(function(a, b) {
  return a + b;
});

module.exports = function(scope) {
  scope.map = map;
  scope.concat = concat;
  scope.compose = compose; 
  scope.capitalize = capitalize;
  scope.join = join;
  scope.append = append;
  scope.split = split;
  scope.replace = replace;
  scope.filter = filter;
  scope.head = head;
  scope.tail = tail;
  scope.add = add;
}
