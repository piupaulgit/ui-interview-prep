const myFilter = require("./filter");
const isGreater = (val) => val > 10;
const sampleArray = [2, 3, 11, 13, 5];

describe("Polyfill for Filter", () => {
  beforeAll(() => {
    Array.prototype.myCustomFilter = myFilter;
  });

  describe("Error conditions", () => {
    test("should be called on an array", () => {
      function init() {
        Array.prototype.myCustomFilter.call(null, isGreater);
      }
      expect(init).toThrow(TypeError);
    });

    test("callback should be provided and shouldbe an array", () => {
      expect(() => sampleArray.myCustomFilter()).toThrow(TypeError);
    });
  });

  describe("filter functionalities", () => {
    beforeAll(() => {
      Array.prototype.myCustomFilter = myFilter;
    });

    test("should return expected element which is matching the condition", () => {
      expect(sampleArray.myCustomFilter(isGreater)).toEqual([11, 13]);
    });

    test("should return an empty array if called on an empty array", () => {
      expect([].myCustomFilter(isGreater)).toEqual([]);
    });

    test("should not change the actual array", () => {
      const result = sampleArray.myCustomFilter(isGreater);
      expect(sampleArray).toEqual(sampleArray);
      expect(result).toEqual([11, 13]);
    });

    test("should work with an array-like object", () => {
      const objectSample = { 0: "apple", 1: "banana", 2: "cherry", length: 3 };
      const result = Array.prototype.myCustomFilter.call(objectSample, (x) =>
        x.includes("a")
      );
      expect(result).toEqual(["apple", "banana"]);
    });
  });
});
