function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      return result;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

const result = binarySearch([1, 3, 5, 7, 9, 11, 13], 8);

console.log(result);
