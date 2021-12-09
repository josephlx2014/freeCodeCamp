function addTogether(value1, value2) {
  let numOfArgs = [...arguments];
  let argumentsCount = numOfArgs.length;

  if (argumentsCount > 1) {
    if (isNaN(value1) || isNaN(value2)) {
      return undefined;
    } else {
      return value1 + value2;
    }
  } else if (argumentsCount === 1) {
    if (isNaN(value1)) {
      return undefined;
    } else {
      return "function";
    }
  }
}

console.log(addTogether(1, 2));
console.log(addTogether(1));
console.log(addTogether("helo", "asfd"));
console.log(addTogether("helo"));
