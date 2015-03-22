var a = 5

function inc(x) {
  a += 1;
  return a + x;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeName(family, first) {
    return first + " " + family;
}

function map(f, items) {
  var result = [];
  
  items.forEach(function(item) {
    result.push(f(item));
  });

  return result;
}

function compose(f, g) {
  return function(x) {
    return f(g(x));
  }
}

exports.inc = inc
exports.getRandomInt = getRandomInt
exports.makeName = makeName
exports.map = map
exports.compose = compose

