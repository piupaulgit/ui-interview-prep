"use strict";

function myForEach(callback, thisArg) {
  if (!this) {
    throw new TypeError("forEach should be called on an array");
  }

  if (!callback || typeof callback !== "function") {
    throw new TypeError("callback should be here and shouldbe a function");
  }

  var k = 0;

  while (k < this.length) {
    callback.call(thisArg, this[k], k, this);
    k++;
  }
}

module.exports = myForEach;
