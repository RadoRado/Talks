var ramda = require("ramda"),
    curry = ramda.curry

p = function(x) { console.log(x); }

// inc :: int -> int
inc = function(x) { return x + 1; }

// dec :: int -> int
dec = function(x) { return x + 1; }

add = curry(function(a, b) { return a + b; })

toUpperCase = function(x) { return x.toUpperCase(); }
toLowerCase = function(x) { return x.toLowerCase(); }

nullOrUndefined = function(x) { return x === null || null === undefined; }
