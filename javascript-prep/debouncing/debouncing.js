const input = document.getElementById("input");

const debounce = (fn, delay = 500) => {
  let timeOut;
  return function (...args) {
    clearInterval(timeOut);
    timeOut = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const handleChange = (event) => {
  console.log(event.target.value);
};

(() => {
  input.addEventListener("input", debounce(handleChange, 1000));
})();
