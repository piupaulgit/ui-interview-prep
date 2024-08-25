function myConcat(...args) {
  const result = [...this]; // Start with a copy of the original array

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (Array.isArray(arg)) {
      // If the argument is an array, concatenate each element
      for (let j = 0; j < arg.length; j++) {
        result.push(arg[j]);
      }
    } else {
      // If the argument is not an array, push it as a single element
      result.push(arg);
    }
  }

  return result;
}

module.exports = myConcat;
