require("./library");

// splice is impure

var arr = [1, 2, 3, 4, 5];
p(arr.splice(0, 2));
p(arr.splice(0, 2));

// slice is pure

var arr = [1, 2, 3, 4, 5];

p(arr.slice(0, 2));
p(arr.slice(0, 2));

function memoize(f) {
  var fTable = {};

  return function() {
    var input = JSON.stringify(arguments);
    
    console.log(fTable);

    if(!fTable[input]) {
      fTable[input] = f.apply(f, arguments);
    }

    return fTable[input];
  }
}

var add = memoize(function(x, y) { return x + y; })

console.log(add(1, 2));
console.log(add(1, 2));
