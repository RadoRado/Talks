function Container(x) {
  this.__value = x;
  this.inspect = function() { return "Container(" + x + ")" };
}

Container.of = function(x) {
  return new Container(x);
}

Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
}

module.exports = Container;
