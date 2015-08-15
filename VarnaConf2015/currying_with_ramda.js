require("./p");

var ramda = require("ramda"),
    curry = ramda.curry;

var add = curry(function(a, b) {
  return a + b;
});

var inc = add(1);

var match = curry(function(what, x) {
  return x.match(what);
});

var notP = function(p) { return function(x) { return !p(x); }}

var replace = curry(function(what, replacement, x) {
  return x.replace(what, replacement);
});

var filter = curry(function(f, xs) {
  return xs.filter(f);
});

var map = curry(function(f, xs) {
  return xs.map(f);
});

var reduce = curry(function(op, initial, xs) {
  return xs.reduce(op, initial);
});

var split = curry(function(delimiter, xs) {
  return xs.split(delimiter);
});

var join = curry(function(delimiter, xs) {
  return xs.join(delimiter);
});

var chars = split("");
var unchars = join("");

var words = split(" ");
var unwords = join(" ");

p(chars("VarnaConf 2015"));
p(words("VarnaConf 2015")); 

var sentences = map(words);

p(sentences(["VarnaConf 2015 is a great conference", "Varna is a nice city"]));

var sum = reduce(add, 0);

p(sum([0, 1, 2, 3]));

var filterWhitespace = filter(notP(match(/\s+/g)));

p(unchars(filterWhitespace(chars("Varna Conf 2015"))));
