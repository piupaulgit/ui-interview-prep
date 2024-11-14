(function (w) {
  const timerIds = [];

  const originalSetTimeout = w.setTimeout;

  w.setTimeout = function setTimeout(fn, delay) {
    let id = originalSetTimeout(fn, delay);

    timerIds.push(id);

    return id;
  };
  w.clearAllTimeout = function clearAllTimeout() {
    console.log(timerIds);
    while (timerIds.length) {
      const id = timerIds.pop();
      clearTimeout(id);
      console.log("clear");
    }
  };
})(window);

setTimeout(() => {
  console.log(1);
}, 100);
setTimeout(() => {
  console.log(2);
}, 200);
setTimeout(() => {
  console.log(3);
}, 300);
setTimeout(() => {
  console.log(4);
}, 400);

clearAllTimeout();
