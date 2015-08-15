require("./library");

var ramda = require("ramda"),
    curry = ramda.curry,
    compose = ramda.compose;

var fmap = curry(function(f, anyKindOfFunctor) {
  return anyKindOfFunctor.map(f);
});


function Maybe(x) {
  this.__value = x;
  this.inspect = function() {
    if(this.isNothing()) {
      return "Nothing";
    }

    return "Just(" + this.__value.toString() + ")";
  }
}

Maybe.of = function(x) { return new Maybe(x); }

Maybe.prototype.isNothing = function() {
  return nullOrUndefined(this.__value);
}

Maybe.prototype.map = function(f) {
  if(this.isNothing()) {
    return this;
  }

  return Maybe.of(f(this.__value));
}

var n = Maybe.of(10);
var result = compose(fmap(inc), fmap(inc));
var result2 = fmap(compose(inc, inc));

console.log(result(n));
console.log(result2(n));
