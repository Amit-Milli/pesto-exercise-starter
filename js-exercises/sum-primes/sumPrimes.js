
function getPrimeArray(num) {
  let arr = [2];
  for ( let i = 3; i <= num; i+=2 ) {
      if ( isPrime(i) ) {
          arr.push(i);
      }
  }
  return arr;
}

function isPrime(num) {
  for ( let i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
          return false;
      }
  }
  return true;
}

function sumPrimes(num) {
  if(typeof num === 'number' && num > 1) {
    return getPrimeArray(num).reduce((a, b) => a + b);
  } else {
    // throw 'Invalid argument';
    // returning string for testing purpose else would have thrown an error
    return 'Invalid arguments';
  }
}

export {
  sumPrimes,
};
