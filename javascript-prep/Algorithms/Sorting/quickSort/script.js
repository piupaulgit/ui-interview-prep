// TODO
// in-place quick sort

const extraSpaceQuickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let pivot = arr[middle];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== middle) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...extraSpaceQuickSort(left), pivot, ...extraSpaceQuickSort(right)];
};

const result = extraSpaceQuickSort([5, 4, 8, 6, 7, 1, 7, 3, 0]);
console.log(result);
