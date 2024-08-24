"use strict";

function myFilter(callback, thisArg) {
  if (!this || this === undefined) {
    throw new TypeError("filter should be called in array");
  }

  if (!callback || typeof callback !== "function") {
    throw new TypeError(
      "callback should be provided and should be an function"
    );
  }

  var k = 0;
  var result = [];

  while (k < this.length) {
    if (callback.call(thisArg, this[k], k, this)) {
      result.push(this[k]);
    }
    k++;
  }

  return result;
}

module.exports = myFilter;
