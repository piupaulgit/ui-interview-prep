const str = "My nm is Piu Paul";

const findV = (input) => {
  return input.match(/[aeiou]/g).length;
};

console.log(findV(str));
