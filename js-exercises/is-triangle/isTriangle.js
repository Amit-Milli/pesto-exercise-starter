function isTriangle(...args) {
  if (args.length === 3 && args.filter(d => typeof d === 'number').length === 3) {
    const [a, b, c] = args;
    return (a ** 2 + b ** 2 === c ** 2) || (b ** 2 + c ** 2 === a ** 2)
      || (c ** 2 + a ** 2 === b ** 2);
  }
  // throw 'Invalid argument';
  // returning string for testing purpose else would have thrown an error
  return 'Invalid arguments';
}

export {
  isTriangle,
};
