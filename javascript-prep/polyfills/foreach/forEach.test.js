const myForEach = require("./forEach");

const addOne = (a) => a + 1;
const sampleArray = [1, 2, 3, 4];

describe("forEach functionalities", () => {
  beforeAll(() => {
    Array.prototype.myCustomeForEach = myForEach;
  });

  describe("Error conditions", () => {
    test("should throw error when aray is null or undefined", () => {
      function init() {
        Array.prototype.myCustomeForEach.call(null, addOne);
      }
      expect(init).toThrow(TypeError);
    });

    test("callback should be provided and shouldbe an array", () => {
      expect(() => sampleArray.myCustomeForEach()).toThrow(TypeError);
    });
  });

  describe("Foreach functiolaities", () => {
    beforeAll(() => {
      Array.prototype.myCustomeForEach = myForEach;
    });

    test("should execute callback for each element in the array", () => {
      const result = [];
      sampleArray.myCustomeForEach((x) => result.push(x + 1));
      expect(result).toEqual([2, 3, 4, 5]);
    });

    test("should pass element, index, and array to the callback", () => {
      const result = [];
      sampleArray.myCustomeForEach((element, index, array) => {
        result.push({ element, index, array });
      });
      expect(result).toEqual([
        { element: 1, index: 0, array: sampleArray },
        { element: 2, index: 1, array: sampleArray },
        { element: 3, index: 2, array: sampleArray },
        { element: 4, index: 3, array: sampleArray },
      ]);
    });

    test("should not mutate the original array", () => {
      const original = [...sampleArray];
      sampleArray.myCustomeForEach(addOne);
      expect(sampleArray).toEqual(original);
    });
  });
});
