function fibSeries(num) {
  if (num === 1) {
    return [0, 1];
  } else {
    let arr = fibSeries(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

function sumFibs(num) {
  if(typeof num === 'number' && num > 0) {
    let filteredFibSeries = fibSeries(num).filter(d => d % 2 !== 0 && d < num);
    return filteredFibSeries.length > 0 ? filteredFibSeries.reduce((a, b) => a + b) : 0;
  } else {
    // throw 'Invalid argument';
    // returning string for testing purpose else would have thrown an error
    return 'Invalid arguments';
  }

}

export {
  sumFibs,
};
