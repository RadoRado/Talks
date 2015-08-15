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
