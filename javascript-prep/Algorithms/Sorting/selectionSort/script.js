const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([2, 4, 3, 8, 4, 5, 9]));
