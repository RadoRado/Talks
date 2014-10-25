/*global exports */

function isPrime(number) {
  'use strict';
  // for is the best in this case
  var i = 0;

  for (i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number >= 2;
}

function nextPrimeFrom(thatPrime) {
  'use strict';
  var nextMaybePrime = thatPrime + 1;

  while(!isPrime(nextMaybePrime)) {
    nextMaybePrime += 1;
  }

  return nextMaybePrime;
}


function primeFactorization(number) {
  'use strict';
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
}

function displayFactorization(factorization) {
  'use strict';
  return factorization.map(function (tuple) {
    return tuple.join('^');
  }).join(' * ');
}

exports.primeFactorization = primeFactorization;
exports.displayFactorization = displayFactorization;
