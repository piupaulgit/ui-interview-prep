const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftSlice = arr.slice(0, mid);
  let rightSlice = arr.slice(mid);

  return merge(mergeSort(leftSlice), mergeSort(rightSlice));
};

const merge = (leftArr, rightArr) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return [
    ...result,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6]));
