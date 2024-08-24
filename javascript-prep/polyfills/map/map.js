"use strict";

function myMap(callback, thisArg) {
  if (!this || this === undefined) {
    throw new TypeError("Map should be run on an array");
  }

  if (!callback || typeof callback !== "function") {
    throw new TypeError(
      "Callback should be provided and that should be a function"
    );
  }

  // actuall map functionality
  var k = 0;
  var resultArray = [];
  while (k < this.length) {
    resultArray[k] = callback(this[k], k);
    k++;
  }

  return resultArray;
}

module.exports = myMap;
