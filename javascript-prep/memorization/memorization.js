function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memorize = (func) => {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("cache function");
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;

    return result;
  };
};

const memoizedFibonacci = memorize(fibonacci);

memoizedFibonacci(10); // Computes the result
memoizedFibonacci(20); // Computes the result
memoizedFibonacci(10); // Returns cached result
memoizedFibonacci(20); // Returns cached result
