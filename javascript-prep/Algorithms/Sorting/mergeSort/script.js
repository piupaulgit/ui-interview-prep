const mergeSort = () => {
  let result = [];
};

const mergeTwoArrays = (arr1, arr2) => {
  let result = [];
  let leftArrayPointer = 0;
  let rightArrayPointer = 0;

  while (leftArrayPointer <= arr1.length || rightArrayPointer <= arr2.length) {
    if (arr1[leftArrayPointer] <= arr2[rightArrayPointer]) {
      result.push(arr1[leftArrayPointer]);
      leftArrayPointer++;
    }

    if (arr2[rightArrayPointer] < arr1[leftArrayPointer]) {
      result.push(arr2[rightArrayPointer]);
      rightArrayPointer++;
    }

    if (leftArrayPointer === arr1.length) {
      result.push(arr2[rightArrayPointer]);
      rightArrayPointer++;
    }

    if (rightArrayPointer === arr2.length) {
      result.push(arr1[leftArrayPointer]);
      leftArrayPointer++;
    }
  }

  console.log(result);
};

mergeTwoArrays([1, 4, 5, 6], [2, 3, 5, 9]);
