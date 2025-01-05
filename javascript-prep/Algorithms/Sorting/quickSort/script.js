// TODO
// in-place quick sort

const extraSpaceQuickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [
    ...extraSpaceQuickSort(leftArr),
    pivot,
    ...extraSpaceQuickSort(rightArr),
  ];
};

// without extra space

const getPivotIndex = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];

  return i + 1;
};

const withoutExtraSpcaeQuickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIndex = getPivotIndex(arr, start, end);
    withoutExtraSpcaeQuickSort(arr, start, pivotIndex - 1);
    withoutExtraSpcaeQuickSort(arr, pivotIndex + 1, end);
  }

  return arr;
};

const result = withoutExtraSpcaeQuickSort([5, 4, 8, 6, 7, 1, 7, 3, 0]);
console.log(result);
