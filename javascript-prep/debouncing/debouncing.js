const input = document.getElementById("input");

const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const callApi = (e) => {
  console.log(e.target.value);
};

const debounceApi = debounce(callApi, 1000);

input.addEventListener("input", debounceApi);
