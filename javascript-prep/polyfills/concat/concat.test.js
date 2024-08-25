const myConcat = require("./concat");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
describe("concat polyfill", () => {
  beforeAll(() => {
    Array.prototype.myCustomConcat = myConcat;
  });

  test("should concatenate two arrays", () => {
    const result = arr1.myCustomConcat(arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should concatenate multiple arrays", () => {
    const result = [].myCustomConcat(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should concatenate array with non-array elements", () => {
    const result = arr1.myCustomConcat(4, 5, [6, 7]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should not mutate the original arrays", () => {
    const result = arr1.myCustomConcat(arr2);
    expect(arr1).toEqual([1, 2, 3]);
    expect(arr2).toEqual([4, 5, 6]);
  });

  test("should concatenate with an empty array", () => {
    const result = [].myCustomConcat(arr1);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should handle array-like objects", () => {
    const arrayLike = { 0: "a", 1: "b", length: 2 };
    const arr = [1, 2];
    const result = arr.myCustomConcat(Array.prototype.slice.call(arrayLike));
    expect(result).toEqual([1, 2, "a", "b"]);
  });
});
