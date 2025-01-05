const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    if (i !== smallest) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
    }
  }

  return arr;
};

console.log(selectionSort([4, 6, 1, 3, 8, 5, 2, 89, 55, 67]));
