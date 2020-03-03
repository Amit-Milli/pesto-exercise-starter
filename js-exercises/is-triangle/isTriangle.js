function isTriangle(...args) {
  if(args.length === 3 && args.filter(d => typeof d === "number").length === 3) {
    const [a, b, c] = args;
    return (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) ||
    (Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) ||
    (Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2));
  } else {
    // throw 'Invalid argument';
    // returning string for testing purpose else would have thrown an error
    return 'Invalid arguments';
  }
}

export {
  isTriangle,
};
