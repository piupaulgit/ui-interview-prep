const insertionSort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

console.log(insertionSort([5, 4, 8, 2, 7, 1, -1]));
