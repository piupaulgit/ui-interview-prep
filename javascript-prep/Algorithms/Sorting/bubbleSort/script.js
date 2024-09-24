const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  console.log(arr);
};

bubbleSort([2, 4, 3, 8, 4, 5, 9]);
