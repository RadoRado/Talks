require("./library");

function add(a) {
  return function(b) {
    return a + b;
  }
}

function map(f) {
  return function(xs) {
    return xs.map(f);
  }
}

p(add(1));
p(add(1)(1));
p(map(add(1)));
p(map(add(1))([1, 2, 3]));
