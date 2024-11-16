function maskify(cardNumber) {
  if (typeof cardNumber !== "number" && typeof cardNumber !== "string") {
    return "";
  }

  let cardnumberString = cardNumber.toString();
  let length = cardnumberString.length;

  if (cardnumberString.length <= 6) {
    return cardnumberString;
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    if (i !== 0 && i < length - 4) {
      if (!isNaN(parseInt(cardnumberString[i], 10))) {
        result += "#";
      } else {
        result += cardnumberString[i];
      }
    } else {
      result += cardnumberString[i];
    }
  }

  return result;
}

console.log(maskify("4556-3646-0793-5616"));
