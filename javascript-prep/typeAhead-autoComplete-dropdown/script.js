// data file start
const fruits = ["apple", "bannana", "orange", "lemon", "pineapple"];
//data file ends'

// util file start
const getFruits = (keyword) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let result = fruits.filter(
        (i) =>
          i.substr(0, keyword.length).toLocaleLowerCase() ===
          keyword.toLocaleLowerCase()
      );
      res(result);
    }, 100);
  });
};

const debounce = (fn, delay) => {
  let clearTimeout;
  return function (...args) {
    clearInterval(clearTimeout);
    clearTimeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// util file ends

const input = document.getElementById("search-input");
const searchResultBox = document.getElementById("search-result-box");

const reset = () => {
  searchResultBox.classList.remove("show");
};

const getFilteredResult = async (keyword) => {
  let data = await getFruits(keyword);
  const searchBoxFragment = document.createDocumentFragment();
  console.log(data);

  if (data.length > 0) {
    data.forEach((item) => {
      let el = document.createElement("p");
      el.innerText = item;
      searchBoxFragment.appendChild(el);
    });

    searchResultBox.innerHTML = "";
    searchResultBox.appendChild(searchBoxFragment);
    searchResultBox.classList.add("show");
  } else {
    searchResultBox.innerHTML = "";
  }
};

const handleChange = (event) => {
  if (event.target.value) {
    getFilteredResult(event.target.value);
  } else {
    searchResultBox.innerHTML = "";
  }
};

(() => {
  input.addEventListener("input", debounce(handleChange, 500));
})();
