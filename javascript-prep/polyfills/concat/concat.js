function myConcat(...args) {
  const result = [...this]; // Start with a copy of the original array

  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      result.push(...args[i]);
    } else {
      result.push(args[i]);
    }
  }

  return result;
}

module.exports = myConcat;
