function isPrime(number) {
  // for is the best in this case
  var i = 0;

  for (i = 2; i * i <= number; i += 1) {
    if (Math.floor(number % i) === 0) {
      return false;
    }
  }
  return number >= 2;
};

function nextPrimeFrom(thatPrime) {
  var nextMaybePrime = thatPrime + 1;

  while(!isPrime(nextMaybePrime)) {
    nextMaybePrime += 1;
  }

  return nextMaybePrime;
}


var primeFactorization = function (number) {
  var currentPrime = 2,
        result = [];

  while(number != 1) {
    var power = 0;
    while(number % currentPrime === 0) {
      power += 1;
      number /= currentPrime;
    }
    if(power >= 1) {
      result.push([currentPrime, power]);
    }

    currentPrime = nextPrimeFrom(currentPrime);
  }

  return result;
};

var displayFactorization = function (factorization) {
  return factorization.map(function (tuple) {
    return tuple.join('^');
  }).join(' * ');
};

exports.primeFactorization = primeFactorization;
exports.displayFactorization = displayFactorization;
