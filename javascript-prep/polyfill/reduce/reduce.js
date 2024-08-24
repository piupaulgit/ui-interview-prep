"use strict";

function reduce(callback, initialValue) {
  if (!this || this === undefined) {
    throw new TypeError("Reduce should be called with an array");
  }

  if (!callback || typeof callback !== "function") {
    throw new TypeError("callback should passsed and should be an function");
  }

  if (!this.length) {
    if (!initialValue) {
      throw new TypeError(
        "initial value should be passed when called reduce on a empty array"
      );
    } else {
      return initialValue;
    }
  }

  var k = 0;
  var acc;
  if (initialValue) {
    // when reduce called with initialValue;
    acc = initialValue;
  } else {
    // when reduce called without initialValue;
    acc = this[k];
    k++;
  }

  while (k < this.length) {
    acc = callback(acc, this[k], k.this);
    k++;
  }

  return acc;
}

module.exports = reduce;
