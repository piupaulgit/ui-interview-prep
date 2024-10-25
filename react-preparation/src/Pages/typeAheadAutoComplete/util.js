import { fruits } from "./constants";

export const getResult = (keyword) => {
  const result = fruits.filter(
    (fruit) =>
      fruit.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(result);
    }, 200);
  });
};

export const debounce = (fn, delay = 200) => {
  let timeout = null;
  return function (...args) {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
