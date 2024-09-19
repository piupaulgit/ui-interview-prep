const input = document.getElementById("input");

const debounce = (func, delay) => {
  let timer;

  return (...arge) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      func(...arge);
    }, delay);
  };
};

const callApi = (e) => {
  console.log(e.value);
};

const apiDebounce = debounce(callApi, 1000);

input.addEventListener("input", apiDebounce);
