function sumAll(...args) {
  if(args.length === 2 && args.filter(d => typeof d === "number").length === 2) {
    const valueArray = args.sort();
    let i = valueArray[0];
    let result = valueArray[0];
    do {
      i = i + 1;
      result = result + i;
    } while (i < valueArray[1]);
    return result;
  } else {
    // throw 'Invalid argument';
    // returning string for testing purpose else would have thrown an error
    return 'Invalid arguments';
  }
}

export {
  sumAll,
};
