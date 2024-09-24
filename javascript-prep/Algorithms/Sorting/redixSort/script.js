const radixSort = (arr) => {
  const maxNumberDigit = getMaxIntCount(arr); // Get max number of digits

  for (let j = 0; j < maxNumberDigit; j++) {
    // Create buckets for each digit (0 to 9)
    const result = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      // Get the digit at the current place (j)
      let value = digitInPosition(arr[i], j);
      result[value].push(arr[i]); // Push the number into the corresponding bucket
    }
    arr = [].concat(...result);
  }

  console.log(arr); // Final sorted array
};

const getMaxIntCount = (arr) => {
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentDigit = Math.floor(Math.log10(Math.abs(arr[i])) + 1);
    maxCount = Math.max(maxCount, currentDigit);
  }

  return maxCount;
};

const digitInPosition = (num, position) => {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
};

const arr = [2, 45, 6545, 67823, 12, 23, 00, 7689898];
radixSort(arr);
