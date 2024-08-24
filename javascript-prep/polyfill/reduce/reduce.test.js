const reduce = require("./reduce");

const sum = (a, b) => a + b;

describe("Error conditions", () => {
  beforeAll(() => {
    Array.prototype.customeReduce = reduce;
  });

  test("If reduce is called on null or undefined", () => {
    function init() {
      Array.prototype.customeReduce.call(null, sum, 1);
    }

    expect(init).toThrow(TypeError);
  });

  test("If reduce is called with no callback or callback is not a function", () => {
    expect(() => [].customeReduce(null, 1)).toThrow(TypeError);
  });

  test("If reduce is called with an empty array with no initial value", () => {
    expect(() => [].customeReduce(sum)).toThrow(TypeError);
  });
});

describe("reduce functionalities", () => {
  beforeAll(() => {
    Array.prototype.customeReduce = reduce;
  });

  test("reduce with an empty array with initial value should return initial value", () => {
    const initialValue = 5;
    expect([].customeReduce(sum, initialValue)).toBe(initialValue);
  });

  test("invoked with an initalVallue", () => {
    const arr = [1, 2, 3, 4];
    expect(arr.customeReduce(sum, 2)).toBe(12);
  });

  test("invoked without an initalVallue", () => {
    const arr = [1, 2, 3, 4];
    expect(arr.customeReduce(sum)).toBe(10);
  });

  test("custom test case | promise test", () => {
    function first() {
      return Promise.resolve(1);
    }
    function second(v) {
      return Promise.resolve(v + 2);
    }
    function third(v) {
      return Promise.resolve(v + 3);
    }
    function fourth(v) {
      return Promise.resolve(v + 4);
    }

    var promises = [first, second, third, fourth];
    var result = promises.customeReduce(
      (acc, current) => acc.then(current),
      Promise.resolve()
    );

    expect(result).resolves.toEqual(10);
  });
});
