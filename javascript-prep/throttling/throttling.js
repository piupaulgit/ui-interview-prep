const span = document.querySelector("h2 span");

function throttle(func, wait) {
  let firstcall = true;
  let timer = null;
  let lastArgs = [];
  return function (...arg) {
    lastArgs = arg;
    if (firstcall) {
      func.apply(this, lastArgs);
      firstcall = false;
      return;
    }
    if (timer) return;
    timer = setTimeout(() => {
      func.apply(this, lastArgs);
    }, wait);
  };
}

const apiCall = (e) => {
  console.log(e);
};

const throttling = throttle(apiCall, 1000);

document.addEventListener("mousemove", () => {
  throttling();
});
