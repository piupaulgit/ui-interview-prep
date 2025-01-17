Array.prototype.at = function (index) {
  let length = this.length;

  if (index < -length || index >= length) return;

  return this[(index + length) % length];
};

console.log([2, 3, 4].at(-1));
