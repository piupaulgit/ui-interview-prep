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

// util file ends

const input = document.getElementById("search-input");
const searchResultBox = document.getElementById("search-result-box");

const reset = () => {
  searchResultBox.classList.remove("show");
};

const getFilteredResult = async (keyword) => {
  reset();
  let data = await getFruits(keyword);
  const searchBoxFragment = document.createDocumentFragment();

  if (data.length > 0) {
    data.forEach((item) => {
      let el = document.createElement("p");
      el.innerText = item;
      searchBoxFragment.appendChild(el);
    });

    searchResultBox.appendChild(searchBoxFragment);
    searchResultBox.classList.add("show");
  }
};

const handleChange = (e) => {
  getFilteredResult(e.target.value);
};

(() => {
  input.addEventListener("input", (e) => handleChange(e));
})();
