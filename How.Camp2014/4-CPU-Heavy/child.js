var prime = require("./prime");

module.exports = function (inp, callback) {
  var factor = prime.primeFactorization(parseInt(inp, 10));
  callback(null, prime.displayFactorization(factor));
};
