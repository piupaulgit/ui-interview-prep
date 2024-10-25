const inputDebounce = document.getElementById("leadingTrailingInput");

const debounceWithLeadingAndTrilingOption = (
  fn,
  delay = 500,
  option = { leading: false, trailing: true }
) => {
  let timeout = null;

  return function (...args) {
    if (option.leading && timeout === null) {
      fn.apply(this, args);
    }
    clearInterval(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (option.trailing) {
        fn.apply(this, args);
      }
    }, delay);
  };
};

const handleChangeDebounce = (event) => {
  console.log(event.target.value);
};

(() => {
  inputDebounce.addEventListener(
    "input",
    debounceWithLeadingAndTrilingOption(handleChangeDebounce, 500, {
      leading: true,
      trailing: true,
    })
  );
})();
