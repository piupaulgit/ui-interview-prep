const myMap = require("./map");

const sum = (a, b) => a + 1;
const sampleArray = [1, 2, 3, 4, 5];
describe("Map polyfill", () => {
  beforeAll(() => {
    Array.prototype.myCustomMap = myMap;
  });

  describe("Error conditions", () => {
    test("map should run on array", () => {
      function init() {
        Array.prototype.myCustomMap.call(null, sum);
      }
      expect(init).toThrow(TypeError);
    });

    test("should have a call back function", () => {
      expect(() => sampleArray.myCustomMap()).toThrow(TypeError);
    });
  });

  describe("Map functionalities", () => {
    beforeAll(() => {
      Array.prototype.myCustomMap = myMap;
    });

    test("Should modify all items and return a new array", () => {
      expect(sampleArray.myCustomMap(sum)).toEqual([2, 3, 4, 5, 6]);
    });

    test("Should return an empty array if called with an empty array", () => {
      expect([].myCustomMap(sum)).toEqual([]);
    });

    test("should not mutate the original array", () => {
      const result = sampleArray.myCustomMap(sum);
      expect(sampleArray).toEqual([1, 2, 3, 4, 5]);
      expect(result).toEqual([2, 3, 4, 5, 6]);
    });

    test("should work with an array-like object", () => {
      const sampleObject = { 0: "a", 1: "b", 2: "c", length: 3 };
      const result = Array.prototype.myCustomMap.call(sampleObject, (x) =>
        x.toUpperCase()
      );
      expect(result).toEqual(["A", "B", "C"]);
    });
  });
});
